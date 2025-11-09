import { imageUploadUtil } from "../helpers/cloudinary.js";
import { Ecommerce } from "../models/ecommerce.model.js";
// import nodemailer from "nodemailer";
import { Subscribe } from "../models/subscribe.model.js";
// import { Resend } from 'resend';
// import dotenv from 'dotenv';

// dotenv.config();

// const resend = new Resend(process.env.RESEND_API_KEY);

// Product Image Upload
export const handleProductImageUpload = async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const url = `data:${req.file.mimetype};base64,${b64}`;
    const result = await imageUploadUtil(url);

    res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error("🔴 Product Image Upload Error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Some error occurred",
    });
  }
};

export const addProduct = async (req, res) => {
  try {
    const { name, description, price, quantity, category, status, imageUrl } = req.body;

    if (!name || !description || !price || !quantity || !category || !imageUrl || !status) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const newProduct = new Ecommerce({ 
      name, 
      description, 
      price, 
      quantity, 
      category: category || 'Others', 
      status: status || 'inStock', 
      imageUrl 
    });
    
    await newProduct.save();

    // ✅ Fetch subscribers
    // const subscribers = await Subscribe.find({});
    // const emailList = subscribers.map((sub) => sub.email);

    // ✅ Configure nodemailer
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "join.adiyogifoundation@gmail.com",
    //     pass: "rajhtxxdaqccsacc"
    //   },
    // });

    // ✅ Mail for subscribers
//     const productMail = {
//       from: "Adiyogi Foundation <noreply@adiyogifoundation.org.in>",
//       to: emailList, // or bcc: emailList
//       subject: `🛒 New Product Added: ${name}`,
//       html: `
//         <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; color: #333;">
//           <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); padding: 20px;">

//             <h2 style="color: #C41E3A; text-align: center; font-weight: 600;">New Product Alert</h2>
//             <h3 style="text-align: center; margin: 10px 0 20px;">"${name}"</h3>

//             <img src="${imageUrl}" alt="${name}" style="width: 100%; max-height: 280px; object-fit: cover; border-radius: 4px;" />

//             <p style="font-size: 15px; line-height: 1.6; margin: 20px 0;">
//               ${description.slice(0, 180)}...
//             </p>

//             <p style="font-size: 16px; font-weight: bold; color: #C41E3A;">Price: ₹${price}</p>

//       <div style="text-align: center; margin: 30px 0;">
//   <a href="https://adiyogifoundation.org.in/products/${newProduct._id}" 
//      style="background-color: #C41E3A; color: #fff; padding: 12px 24px; border-radius: 4px; text-decoration: none; font-weight: 500;">
//     Shop Now
//   </a>
// </div>


//             <hr style="border: none; border-top: 1px solid #e0e0e0;" />

//             <p style="font-size: 13px; color: #777; margin-top: 25px;">
//               You are receiving this email because you subscribed to updates from Adiyogi Foundation.
//             </p>

//           </div>
//         </div>
//       `
//     };

//     // ✅ Mail for admin
//     const adminMail = {
//       from: "Adiyogi Foundation <noreply@adiyogifoundation.org.in>",
//       to: "join.adiyogifoundation@gmail.com",
//       subject: `🛍️ New Product Added by Admin`,
//       html: `
//         <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
//           <h3>New product has been added to the store:</h3>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Price:</strong> ₹${price}</p>
//           <p><strong>Quantity:</strong> ${quantity}</p>
//           <p><strong>Category:</strong> ${category}</p>
//           <p><strong>Status:</strong> ${status || 'inStock'}</p>
//           <img src="${imageUrl}" alt="${name}" style="max-width: 200px; margin: 10px 0;" />
//          <p>
//   Visit: 
//   <a href="https://adiyogifoundation.org.in/products/${newProduct._id}">
//     View Product
//   </a>
// </p>

//         </div>
//       `
//     };

//     // ✅ Send mails
//     await resend.emails.send(adminMail);
//     if (emailList.length > 0) {
//       await resend.emails.send(productMail);
//     }

    return res.status(201).json({
      message: "Product added successfully & subscribers notified",
      success: true,
      newProduct,
    });

  } catch (error) {
    console.log("Error adding product or sending mail:", error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

export const editProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, description, price, quantity, category, status, imageUrl } = req.body;

    const updatedData = {
      name, 
      description, 
      price, 
      quantity, 
      category, 
      status,
      imageUrl  
    };

    const updatedProduct = await Ecommerce.findByIdAndUpdate(
      productId, 
      updatedData, 
      { new: true }
    );
    
    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      updatedProduct
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// Get All Products
export const getProducts = async (req, res) => {
  try {
    const products = await Ecommerce.find().sort({ createdAt: -1 });
    return res.status(200).json({
      message: "Products fetched successfully",
      success: true,
      products
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false
    });
  }
};

// Get Products by Category
export const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const products = await Ecommerce.find({ category }).sort({ createdAt: -1 });
    
    return res.status(200).json({
      message: "Products fetched successfully",
      success: true,
      products
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false  
    });
  }
};

// Get Single Product
export const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Ecommerce.findById(productId);
    
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
        success: false
      });
    }
    
    return res.status(200).json({
      message: "Product fetched successfully",
      success: true,
      product
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false
    });
  }
};

// Delete Product
export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Ecommerce.findByIdAndDelete(productId);
    
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
        success: false
      });
    }
    
    return res.status(200).json({
      message: "Product deleted successfully",
      success: true
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false
    });
  }
};
