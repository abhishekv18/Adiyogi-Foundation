
// import React from 'react';
// import { useLocation, useNavigate, Link } from 'react-router-dom';
// import { CheckCircle, IndianRupee, Package, Truck, Clock, Home, ShoppingBag, Mail, Phone } from 'lucide-react';

// const OrderSuccess = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { orderId, products, totalAmount } = location.state || {};

//   // If page was accessed directly without order data
//   if (!orderId) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center p-4">
//         <div className="text-center bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg max-w-md w-full">
//           <div className="w-16 h-16 md:w-20 md:h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <Package className="w-8 h-8 md:w-10 md:h-10 text-[#6a0dad]" />
//           </div>
//           <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">Order Not Found</h2>
//           <p className="text-gray-600 mb-6">It seems you arrived here without completing an order.</p>
//           <Link 
//             to="/products"
//             className="inline-block bg-[#6a0dad] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#5a0c9d] transition-colors"
//           >
//             Browse Products
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   // Calculate total items
//   const totalItems = products.reduce((total, item) => total + (item.quantity || 1), 0);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 py-4 md:py-8">
//       <div className="max-w-4xl mx-auto px-4">
//         {/* Success Header */}
//         <div className="text-center mb-6 md:mb-8">
//           <div className="flex justify-center mb-4 md:mb-6">
//             <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-green-100 rounded-full flex items-center justify-center">
//               <CheckCircle className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-green-600" />
//             </div>
//           </div>
//           <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 md:mb-3">Order Confirmed!</h1>
//           <p className="text-base md:text-lg text-gray-600 mb-4">Thank you for your purchase. Your order has been confirmed.</p>
//           <div className="mt-2 md:mt-4 bg-white inline-flex items-center px-3 py-1 md:px-4 md:py-2 rounded-full shadow-md">
//             <span className="text-xs md:text-sm font-medium text-gray-700">Order ID: </span>
//             <span className="ml-1 md:ml-2 font-bold text-[#6a0dad] text-xs md:text-sm">{orderId}</span>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
//           {/* Order Summary */}
//           <div className="md:col-span-2">
//             <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-green-100">
//               <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center">
//                 <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 mr-2 text-[#6a0dad]" />
//                 Order Summary
//               </h2>
              
//               {/* Products List */}
//               <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
//                 {products && products.map((item, index) => {
//                   // Extract product data based on your actual data structure
//                   const productName = item.name || (item.product && item.product.name) || 'Unknown Product';
//                   const productCategory = item.category || (item.product && item.product.category) || 'Uncategorized';
//                   const productImage = item.imageUrl || (item.product && item.product.imageUrl) || '/placeholder-image.jpg';
//                   const productPrice = item.price || (item.product && item.product.price) || 0;
//                   const productQuantity = item.quantity || 1;

//                   return (
//                     <div key={index} className="flex items-center justify-between p-3 md:p-4 bg-purple-50 rounded-lg">
//                       <div className="flex items-center flex-1 min-w-0">
//                         <img 
//                           src={productImage}
//                           alt={productName}
//                           className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-cover rounded-md mr-3 md:mr-4 flex-shrink-0"
//                           onError={(e) => {
//                             e.target.src = '/placeholder-image.jpg';
//                           }}
//                         />
//                         <div className="min-w-0 flex-1">
//                           <h3 className="font-medium text-gray-800 text-sm md:text-base truncate">{productName}</h3>
//                           <p className="text-xs text-gray-600 capitalize">{productCategory}</p>
//                           <p className="text-xs text-gray-600">Qty: {productQuantity}</p>
//                         </div>
//                       </div>
//                       <div className="flex items-center ml-2 flex-shrink-0">
//                         <IndianRupee className="w-3 h-3 md:w-4 md:h-4 text-[#6a0dad]" />
//                         <span className="font-bold text-[#6a0dad] text-sm md:text-base">
//                           {(productPrice * productQuantity).toFixed(2)}
//                         </span>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* Order Details */}
//               <div className="border-t border-gray-200 pt-3 md:pt-4">
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-gray-600 text-sm md:text-base">Items ({totalItems})</span>
//                   <div className="flex items-center">
//                     <IndianRupee className="w-3 h-3 md:w-4 md:h-4" />
//                     <span className="text-sm md:text-base">{totalAmount}</span>
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-gray-600 text-sm md:text-base">Shipping</span>
//                   <span className="text-green-600 font-medium text-sm md:text-base">FREE</span>
//                 </div>
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-gray-600 text-sm md:text-base">Tax</span>
//                   <span className="text-gray-600 text-sm md:text-base">Included</span>
//                 </div>
//                 <div className="flex justify-between items-center pt-3 md:pt-4 border-t border-gray-200">
//                   <span className="text-base md:text-lg font-bold text-gray-800">Total</span>
//                   <div className="flex items-center text-lg md:text-xl font-bold text-[#6a0dad]">
//                     <IndianRupee className="w-4 h-4 md:w-5 md:h-5" />
//                     <span>{totalAmount}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Delivery Info & Actions */}
//           <div className="space-y-4 md:space-y-6">
//             {/* Delivery Status */}
//             <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-purple-100">
//               <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center">
//                 <Truck className="w-5 h-5 md:w-6 md:h-6 mr-2 text-[#6a0dad]" />
//                 Delivery Status
//               </h2>
//               <div className="flex items-center mb-3 md:mb-4">
//                 <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
//                   <Package className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
//                 </div>
//                 <div>
//                   <p className="font-medium text-gray-800 text-sm md:text-base">Order Confirmed</p>
//                   <p className="text-xs md:text-sm text-gray-600">Your order has been processed</p>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
//                   <Clock className="w-4 h-4 md:w-5 md:h-5 text-[#6a0dad]" />
//                 </div>
//                 <div>
//                   <p className="font-medium text-gray-800 text-sm md:text-base">Estimated Delivery</p>
//                   <p className="text-xs md:text-sm text-gray-600">3-5 business days</p>
//                 </div>
//               </div>
//             </div>

//             {/* Support Info */}
//             <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-purple-100">
//               <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Need Help?</h2>
//               <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
//                 If you have any questions about your order, our customer service team is here to help.
//               </p>
//               <div className="space-y-2">
//                 <p className="text-xs md:text-sm text-gray-600 flex items-center">
//                   <Mail className="w-3 h-3 md:w-4 md:h-4 mr-2 flex-shrink-0" />
//                   <span className="font-medium mr-1">Email:</span>
//                   <a 
//                     href="mailto:social.adiyogifoundation@gmail.com"
//                     className="hover:text-[#6a0dad] transition-colors duration-200 truncate"
//                   >
//                     social.adiyogifoundation@gmail.com
//                   </a>
//                 </p>

//                 <p className="text-xs md:text-sm text-gray-600 flex items-center">
//                   <Phone className="w-3 h-3 md:w-4 md:h-4 mr-2 flex-shrink-0" />
//                   <span className="font-medium mr-1">Phone:</span>
//                   <a 
//                     href="tel:+919175033022"
//                     className="hover:text-[#6a0dad] transition-colors duration-200"
//                   >
//                     +91 9175033022
//                   </a>
//                 </p>
//               </div>
//             </div>

//             {/* Actions */}
//             <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-purple-100">
//               <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">What's Next?</h2>
//               <div className="space-y-2 md:space-y-3">
//                 <button 
//                   onClick={() => navigate('/products')}
//                   className="w-full bg-[#6a0dad] text-white py-2 md:py-3 rounded-lg md:rounded-xl font-medium hover:bg-[#5a0c9d] transition-colors text-sm md:text-base"
//                 >
//                   Continue Shopping
//                 </button>
//                 <button 
//                   onClick={() => navigate('/')}
//                   className="w-full border border-[#6a0dad] text-[#6a0dad] py-2 md:py-3 rounded-lg md:rounded-xl font-medium hover:bg-purple-50 transition-colors flex items-center justify-center text-sm md:text-base"
//                 >
//                   <Home className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
//                   Go to Homepage
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Order Note */}
//         <div className="mt-6 md:mt-8 bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-purple-100 text-center">
//           <p className="text-gray-600 text-sm md:text-base">
//             A confirmation email has been sent to your email address with your order details. 
//             Please keep this order ID for reference: <span className="font-medium text-[#6a0dad]">{orderId}</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderSuccess;
import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { CheckCircle, IndianRupee, Package, Truck, Clock, Home, ShoppingBag, Mail, Phone, Ruler } from 'lucide-react';

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderId, products, totalAmount } = location.state || {};

  // If page was accessed directly without order data
  if (!orderId) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="text-center bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg max-w-md w-full">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="w-8 h-8 md:w-10 md:h-10 text-[#6a0dad]" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">Order Not Found</h2>
          <p className="text-gray-600 mb-6">It seems you arrived here without completing an order.</p>
          <Link 
            to="/products"
            className="inline-block bg-[#6a0dad] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#5a0c9d] transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  // Calculate total items
  const totalItems = products.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 py-4 md:py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Success Header */}
        <div className="text-center mb-6 md:mb-8">
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-green-600" />
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 md:mb-3">Order Confirmed!</h1>
          <p className="text-base md:text-lg text-gray-600 mb-4">Thank you for your purchase. Your order has been confirmed.</p>
          <div className="mt-2 md:mt-4 bg-white inline-flex items-center px-3 py-1 md:px-4 md:py-2 rounded-full shadow-md">
            <span className="text-xs md:text-sm font-medium text-gray-700">Order ID: </span>
            <span className="ml-1 md:ml-2 font-bold text-[#6a0dad] text-xs md:text-sm">{orderId}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {/* Order Summary */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-green-100">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center">
                <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 mr-2 text-[#6a0dad]" />
                Order Summary
              </h2>
              
              {/* Products List */}
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                {products && products.map((item, index) => {
                  // Extract product data based on your actual data structure
                  const productName = item.name || (item.product && item.product.name) || 'Unknown Product';
                  const productCategory = item.category || (item.product && item.product.category) || 'Uncategorized';
                  const productImage = item.imageUrl || (item.product && item.product.imageUrl) || '/placeholder-image.jpg';
                  const productPrice = item.price || (item.product && item.product.price) || 0;
                  const productQuantity = item.quantity || 1;
                  const productSize = item.size || (item.product && item.product.size);

                  return (
                    <div key={index} className="flex items-center justify-between p-3 md:p-4 bg-purple-50 rounded-lg">
                      <div className="flex items-center flex-1 min-w-0">
                        <img 
                          src={productImage}
                          alt={productName}
                          className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-cover rounded-md mr-3 md:mr-4 flex-shrink-0"
                          onError={(e) => {
                            e.target.src = '/placeholder-image.jpg';
                          }}
                        />
                        <div className="min-w-0 flex-1">
                          <h3 className="font-medium text-gray-800 text-sm md:text-base truncate">{productName}</h3>
                          <p className="text-xs text-gray-600 capitalize">{productCategory}</p>
                          
                          {/* Product Size Display */}
                          {productSize && (
                            <div className="flex items-center text-xs text-gray-600 mt-1">
                             
                              <span>Size: {productSize}</span>
                            </div>
                          )}
                          
                          <p className="text-xs text-gray-600">Qty: {productQuantity}</p>
                        </div>
                      </div>
                      <div className="flex items-center ml-2 flex-shrink-0">
                        <IndianRupee className="w-3 h-3 md:w-4 md:h-4 text-[#6a0dad]" />
                        <span className="font-bold text-[#6a0dad] text-sm md:text-base">
                          {(productPrice * productQuantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Order Details */}
              <div className="border-t border-gray-200 pt-3 md:pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 text-sm md:text-base">Items ({totalItems})</span>
                  <div className="flex items-center">
                    <IndianRupee className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-sm md:text-base">{totalAmount}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 text-sm md:text-base">Shipping</span>
                  <span className="text-green-600 font-medium text-sm md:text-base">FREE</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 text-sm md:text-base">Tax</span>
                  <span className="text-gray-600 text-sm md:text-base">Included</span>
                </div>
                <div className="flex justify-between items-center pt-3 md:pt-4 border-t border-gray-200">
                  <span className="text-base md:text-lg font-bold text-gray-800">Total</span>
                  <div className="flex items-center text-lg md:text-xl font-bold text-[#6a0dad]">
                    <IndianRupee className="w-4 h-4 md:w-5 md:h-5" />
                    <span>{totalAmount}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Info & Actions */}
          <div className="space-y-4 md:space-y-6">
            {/* Delivery Status */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-purple-100">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center">
                <Truck className="w-5 h-5 md:w-6 md:h-6 mr-2 text-[#6a0dad]" />
                Delivery Status
              </h2>
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <Package className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm md:text-base">Order Confirmed</p>
                  <p className="text-xs md:text-sm text-gray-600">Your order has been processed</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-[#6a0dad]" />
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm md:text-base">Estimated Delivery</p>
                  <p className="text-xs md:text-sm text-gray-600">3-5 business days</p>
                </div>
              </div>
            </div>

            {/* Support Info */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-purple-100">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Need Help?</h2>
              <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                If you have any questions about your order, our customer service team is here to help.
              </p>
              <div className="space-y-2">
                <p className="text-xs md:text-sm text-gray-600 flex items-center">
                  <Mail className="w-3 h-3 md:w-4 md:h-4 mr-2 flex-shrink-0" />
                  <span className="font-medium mr-1">Email:</span>
                  <a 
                    href="mailto:info@adiyogifoundation.org"
                    className="hover:text-[#6a0dad] transition-colors duration-200 truncate"
                  >
                    info@adiyogifoundation.org
                  </a>
                </p>

                <p className="text-xs md:text-sm text-gray-600 flex items-center">
                  <Phone className="w-3 h-3 md:w-4 md:h-4 mr-2 flex-shrink-0" />
                  <span className="font-medium mr-1">Phone:</span>
                  <a 
                    href="tel:+919175033022"
                    className="hover:text-[#6a0dad] transition-colors duration-200"
                  >
                    +91 9175033022
                  </a>
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-purple-100">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">What's Next?</h2>
              <div className="space-y-2 md:space-y-3">
                <button 
                  onClick={() => navigate('/products')}
                  className="w-full bg-[#6a0dad] text-white py-2 md:py-3 rounded-lg md:rounded-xl font-medium hover:bg-[#5a0c9d] transition-colors text-sm md:text-base"
                >
                  Continue Shopping
                </button>
                <button 
                  onClick={() => navigate('/')}
                  className="w-full border border-[#6a0dad] text-[#6a0dad] py-2 md:py-3 rounded-lg md:rounded-xl font-medium hover:bg-purple-50 transition-colors flex items-center justify-center text-sm md:text-base"
                >
                  <Home className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                  Go to Homepage
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Order Note */}
        <div className="mt-6 md:mt-8 bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-purple-100 text-center">
          <p className="text-gray-600 text-sm md:text-base">
            A confirmation email has been sent to your email address with your order details. 
            Please keep this order ID for reference: <span className="font-medium text-[#6a0dad]">{orderId}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;