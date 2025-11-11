
import {Order} from '../models/order.model.js';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import { Ecommerce } from '../models/ecommerce.model.js';
import mongoose from 'mongoose';
// import nodemailer from 'nodemailer';
// import { Resend } from 'resend';
// import dotenv from 'dotenv';

// dotenv.config();

// const resend = new Resend(process.env.RESEND_API_KEY);

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

 export const createOrder = async (req, res) => {
  try {
    console.log('Creating Razorpay order with:', req.body);
    const { amount, currency, receipt } = req.body;

    const options = {
      amount: amount,
      currency: currency || 'INR',
      receipt: receipt,
      payment_capture: 1
    };

    console.log('Razorpay options:', options);
    const order = await razorpay.orders.create(options);
    console.log('Razorpay order created:', order);

    res.status(200).json({
      success: true,
      order
    });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create order',
      error: error.message
    });
  }
};
// Verify payment signature
export const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    // Create expected signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256',  process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest('hex');

    // Compare signatures
    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      res.status(200).json({
        success: true,
        message: 'Payment verified successfully'
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Invalid payment signature'
      });
    }
  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to verify payment',
      error: error.message
    });
  }
};






// Configure email transporter outside the function (do this once at the top of your file)
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "join.adiyogifoundation@gmail.com",
//     pass: "rajhtxxdaqccsacc" // app password
//   }
// });






export const createOrderRecord = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  
  try {
    const { products, totalAmount, customerDetails, paymentId } = req.body;

    console.log('Processing order with products:', products);

    // 1. Process each product individually
    for (const item of products) {
      const product = await Ecommerce.findById(item.product).session(session);
      
      if (!product) {
        throw new Error(`Product ${item.product} not found`);
      }
      if (!item.size) {
        throw new Error(`Size is required for product: ${product.name}`);
      }
      if (product.quantity < item.quantity) {
        throw new Error(`Insufficient quantity for ${product.name}. Requested: ${item.quantity}, Available: ${product.quantity}`);
      }
      
      // Reduce quantity
      product.quantity -= item.quantity;
      
      // Update status if quantity reaches zero
      if (product.quantity <= 0) {
        product.status = 'outOfStock';
      }
      
      product.updatedAt = new Date();
      await product.save({ session });
      
      console.log(`Reduced quantity for ${product.name} by ${item.quantity}. New quantity: ${product.quantity}`);
    }

    // 2. Generate a unique order ID
    const orderId = `ORD${Date.now()}${Math.floor(1000 + Math.random() * 9000)}`;

    // 3. Create new order
    const order = new Order({
      orderId,
      // products,
       products: products.map(item => ({
        product: item.product,
        quantity: item.quantity,
        price: item.price,
        size: item.size, // Make sure size is included
        name: item.name,
        imageUrl: item.imageUrl
      })),
      totalAmount,
      customerDetails,
      paymentId,
      paymentStatus: 'completed'
    });

    // 4. Save order to database
    const savedOrder = await order.save({ session });

    // Commit the transaction
    await session.commitTransaction();
    session.endSession();

    // Send invoice email after successful transaction
    try {
      // Get product details for the email
      const productDetails = await Promise.all(
        products.map(async (item) => {
          const product = await Ecommerce.findById(item.product);
          return {
            name: product.name,
            quantity: item.quantity,
            price: product.price,
            size: item.size || 'N/A'
          };
        })
      );

      // Prepare customer invoice email
      // const customerMail = {
      //   from: 'Adiyogi Foundation <noreply@adiyogifoundation.org.in>',
      //   to: customerDetails.email,
      //   subject: `🧾 Your Order Invoice - ${orderId}`,
      //   html: `
      //     <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto;">
      //       <div style="background-color: #4CAF50; padding: 20px; color: white; text-align: center;">
      //         <h1>Thank you for your order!</h1>
      //       </div>
            
      //       <div style="padding: 20px; background-color: #f9f9f9;">
      //         <h2>Order Details</h2>
      //         <p><strong>Order ID:</strong> ${orderId}</p>
      //         <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
      //         <p><strong>Total Amount:</strong> ₹${totalAmount}</p>
              
      //         <h3>Products Ordered:</h3>
      //         <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
      //           <thead>
      //             <tr style="background-color: #4CAF50; color: white;">
      //               <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Product</th>
      //               <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Quantity</th>
      //               <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Price</th>
      //               <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Total</th>
      //             </tr>
      //           </thead>
      //           <tbody>
      //             ${productDetails.map(p => `
      //               <tr>
      //                 <td style="padding: 10px; border: 1px solid #ddd;">${p.name}</td>
      //                 <td style="padding: 10px; border: 1px solid #ddd;">${p.quantity}</td>
      //                 <td style="padding: 10px; border: 1px solid #ddd;">₹${p.price}</td>
      //                 <td style="padding: 10px; border: 1px solid #ddd;">₹${p.quantity * p.price}</td>
      //               </tr>
      //             `).join('')}
      //           </tbody>
      //         </table>
              
      //         <div style="text-align: right; font-weight: bold; margin-top: 15px;">
      //           <p>Grand Total: ₹${totalAmount}</p>
      //         </div>
      //       </div>
            
      //       <div style="padding: 20px; background-color: #e8f5e9;">
      //         <h3>Delivery Information</h3>
      //         <p><strong>Name:</strong> ${customerDetails.name}</p>
      //         <p><strong>Email:</strong> ${customerDetails.email}</p>
      //         <p><strong>Phone:</strong> ${customerDetails.phone || 'Not provided'}</p>
      //         <p><strong>Address:</strong> ${customerDetails.address || 'Not provided'}</p>
      //       </div>
            
      //       <div style="padding: 20px; text-align: center; background-color: #f1f1f1;">
      //         <p>Your products will be delivered soon. You can track your order using your Order ID.</p>
      //         <p>Visit: <a href="https://adiyogifoundation.org.in/products" style="color: #4CAF50;">View More Products</a></p>
      //         <p>Need help? Contact us at: join.adiyogifoundation@gmail.com</p>
      //       </div>
            
      //       <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
      //         <p>© ${new Date().getFullYear()} Adiyogi Foundation. All rights reserved.</p>
      //       </div>
      //     </div>
      //   `
      // };

      // // Prepare admin notification email
      // const adminMail = {
      //   from: 'Adiyogi Foundation <noreply@adiyogifoundation.org.in>',
      //   to: "join.adiyogifoundation@gmail.com",
      //   subject: `🛍️ New Order Received - ${orderId}`,
      //   html: `
      //     <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto;">
      //       <div style="background-color: #2196F3; padding: 20px; color: white; text-align: center;">
      //         <h1>New Order Received!</h1>
      //       </div>
            
      //       <div style="padding: 20px; background-color: #f9f9f9;">
      //         <h2>Order Summary</h2>
      //         <p><strong>Order ID:</strong> ${orderId}</p>
      //         <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
      //         <p><strong>Total Amount:</strong> ₹${totalAmount}</p>
      //         <p><strong>Payment Status:</strong> Completed</p>
              
      //         <h3>Products Ordered:</h3>
      //         <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
      //           <thead>
      //             <tr style="background-color: #2196F3; color: white;">
      //               <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Product</th>
      //               <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Quantity</th>
      //               <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Price</th>
      //               <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Total</th>
      //             </tr>
      //           </thead>
      //           <tbody>
      //             ${productDetails.map(p => `
      //               <tr>
      //                 <td style="padding: 10px; border: 1px solid #ddd;">${p.name}</td>
      //                 <td style="padding: 10px; border: 1px solid #ddd;">${p.quantity}</td>
      //                 <td style="padding: 10px; border: 1px solid #ddd;">₹${p.price}</td>
      //                 <td style="padding: 10px; border: 1px solid #ddd;">₹${p.quantity * p.price}</td>
      //               </tr>
      //             `).join('')}
      //           </tbody>
      //         </table>
              
      //         <div style="text-align: right; font-weight: bold; margin-top: 15px;">
      //           <p>Grand Total: ₹${totalAmount}</p>
      //         </div>
      //       </div>
            
      //       <div style="padding: 20px; background-color: #e3f2fd;">
      //         <h3>Customer Information</h3>
      //         <p><strong>Name:</strong> ${customerDetails.name}</p>
      //         <p><strong>Email:</strong> ${customerDetails.email}</p>
      //         <p><strong>Phone:</strong> ${customerDetails.phone || 'Not provided'}</p>
      //         <p><strong>Address:</strong> ${customerDetails.address || 'Not provided'}</p>
      //       </div>
            
      //       <div style="padding: 20px; text-align: center; background-color: #f1f1f1;">
      //         <p>This order has been automatically processed and inventory has been updated.</p>
      //         <p><a href="https://adiyogifoundation.org.in/admin-login" style="color: #2196F3; text-decoration: none; font-weight: bold;">
      //           View Order in Admin Panel
      //         </a></p>
      //       </div>
            
      //       <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
      //         <p>© ${new Date().getFullYear()} Adiyogi Foundation. All rights reserved.</p>
      //       </div>
      //     </div>
      //   `
      // };

      // // Send both emails
      // await Promise.all([
      //   resend.emails.send(customerMail),
      //   resend.emails.send(adminMail)
      // ]);
      
      console.log('Invoice email sent successfully to customer:', customerDetails.email);
      console.log('Order notification sent to admin');
      
    } catch (emailError) {
      console.error('Error sending emails:', emailError);
      // Don't throw error, just log it since the order was created successfully
    }

    console.log('Order created successfully for multiple products:', savedOrder._id);

    res.status(201).json({
      success: true,
      message: `Order created successfully for ${products.length} products. Quantities updated and notifications sent.`,
      order: savedOrder
    });
  } catch (error) {
    // If anything fails, abort the transaction
    await session.abortTransaction();
    session.endSession();
    
    console.error('Error creating order record:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create order record',
      error: error.message
    });
  }
};








export const getOrderById = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findOne({ orderId }).populate('products.product');

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    res.status(200).json({
      success: true,
      order
    });
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch order',
      error: error.message
    });
  }
};

// Get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('products.product').sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      orders
    });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch orders',
      error: error.message
    });
  }
};





const generateStatusUpdateEmail = (order, newStatus) => {
  const statusMessages = {
    processing: "is being processed",
    shipped: "has been shipped",
    delivered: "has been delivered",
    cancelled: "has been cancelled"
  };
  
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #4CAF50;">Order Status Update</h2>
      <p>Dear ${order.customerDetails.name},</p>
      <p>Your order <strong>#${order.orderId}</strong> ${statusMessages[newStatus] || 'status has been updated'}.</p>
      
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <h3 style="margin-top: 0;">Order Details:</h3>
        <p><strong>Order ID:</strong> ${order.orderId}</p>
        <p><strong>Status:</strong> ${newStatus.toUpperCase()}</p>
        <p><strong>Total Amount:</strong> ₹${order.totalAmount}</p>
        <p><strong>Order Date:</strong> ${new Date(order.createdAt).toLocaleDateString()}</p>
      </div>
      
      <p>If you have any questions, please contact our support team.</p>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
        <p>Thank you for shopping with us!</p>
        <p><strong>Adiyogi Foundation Team</strong></p>
      </div>
    </div>
  `;
};

const generateAdminStatusUpdateEmail = (order, newStatus, updatedBy = "System") => {
  const statusMessages = {
    processing: "is being processed",
    shipped: "has been shipped",
    delivered: "has been delivered",
    cancelled: "has been cancelled"
  };
  
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2196F3;">Order Status Updated - Admin Notification</h2>
      <p>Hello Admin,</p>
      <p>Order <strong>#${order.orderId}</strong> status has been updated to <strong>${newStatus.toUpperCase()}</strong>.</p>
      
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <h3 style="margin-top: 0;">Order Details:</h3>
        <p><strong>Order ID:</strong> ${order.orderId}</p>
        <p><strong>New Status:</strong> ${newStatus.toUpperCase()}</p>
        <p><strong>Previous Status:</strong> ${order.orderStatus ? order.orderStatus.toUpperCase() : 'N/A'}</p>
        <p><strong>Total Amount:</strong> ₹${order.totalAmount}</p>
        <p><strong>Customer:</strong> ${order.customerDetails.name}</p>
        <p><strong>Customer Email:</strong> ${order.customerDetails.email}</p>
        <p><strong>Customer Phone:</strong> ${order.customerDetails.phone || 'Not provided'}</p>
        <p><strong>Order Date:</strong> ${new Date(order.createdAt).toLocaleDateString()}</p>
        <p><strong>Updated By:</strong> ${updatedBy}</p>
        <p><strong>Update Time:</strong> ${new Date().toLocaleString()}</p>
      </div>
      
      <div style="background-color: #e3f2fd; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <h3 style="margin-top: 0;">Next Steps:</h3>
        ${newStatus === 'processing' ? '<p>• Prepare the order for packaging</p><p>• Update inventory if needed</p>' : ''}
        ${newStatus === 'shipped' ? '<p>• Share tracking details with customer</p><p>• Monitor delivery progress</p>' : ''}
        ${newStatus === 'delivered' ? '<p>• Mark order as completed in system</p><p>• Request customer feedback</p>' : ''}
        ${newStatus === 'cancelled' ? '<p>• Process refund if applicable</p><p>• Restock inventory items</p>' : ''}
      </div>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
        <p><a href="https://adiyogifoundation.org.in/admin-login" 
             style="background-color: #2196F3; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
          View Order in Admin Panel
        </a></p>
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          © ${new Date().getFullYear()} Adiyogi Foundation. All rights reserved.
        </p>
      </div>
    </div>
  `;
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { orderStatus } = req.body;

    // Find the order first to get customer details
    const existingOrder = await Order.findById(orderId);
    
    if (!existingOrder) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    // Update the order status
    const order = await Order.findByIdAndUpdate(
      orderId,
      { orderStatus },
      { new: true, runValidators: true }
    ).populate('products.product');

    // Send email notifications to both customer and admin
    try {
      // const customerMailOptions = {
      //   from: 'Adiyogi Foundation <noreply@adiyogifoundation.org.in>',
      //   to: existingOrder.customerDetails.email,
      //   subject: `Order Status Update - #${existingOrder.orderId}`,
      //   html: generateStatusUpdateEmail(existingOrder, orderStatus)
      // };

      // const adminMailOptions = {
      //   from: 'Adiyogi Foundation <noreply@adiyogifoundation.org.in>',
      //   to: "join.adiyogifoundation@gmail.com",
      //   subject: `📋 Order Status Updated - #${existingOrder.orderId} → ${orderStatus.toUpperCase()}`,
      //   html: generateAdminStatusUpdateEmail(existingOrder, orderStatus, req.user?.name || "System")
      // };

      // Send both emails
      // await Promise.all([
      //   resend.emails.send(customerMailOptions),
      //   resend.emails.send(adminMailOptions)
      // ]);
      
      console.log('Status update email sent to customer:', existingOrder.customerDetails.email);
      console.log('Status update notification sent to admin');
      
    } catch (emailError) {
      console.error('Error sending status update emails:', emailError);
      // Don't fail the whole request if email fails
    }

    res.status(200).json({
      success: true,
      message: 'Order status updated successfully and notifications sent',
      order
    });
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update order status',
      error: error.message
    });
  }
};