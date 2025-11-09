
// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { IndianRupee, Minus, Plus, ArrowLeft, User, Phone, Mail, MapPin, ShoppingBag, CreditCard, Truck, Shield, ShoppingCart } from 'lucide-react';
// import { toast } from 'react-toastify';
// import axios from 'axios';

// const Checkout = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { product } = location.state || {};
  
//   // Load main product from state or localStorage
//   const [mainProduct, setMainProduct] = useState(
//     product || JSON.parse(localStorage.getItem('checkout_mainProduct') || 'null')
//   );

//   // Load quantity from localStorage or use product quantity
//   const [quantity, setQuantity] = useState(() => {
//     if (mainProduct) {
//       const savedQuantity = localStorage.getItem(`product_${mainProduct._id}_quantity`);
//       return savedQuantity ? parseInt(savedQuantity, 10) : (mainProduct.quantity || 1);
//     }
//     return 1;
//   });

//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState(
//     JSON.parse(localStorage.getItem('checkout_formData') || '{"name":"","email":"","phone":"","address":"","city":"","state":"","pincode":""}')
//   );
//   const [showProductSelector, setShowProductSelector] = useState(false);
//   const [additionalProducts, setAdditionalProducts] = useState(
//     JSON.parse(localStorage.getItem('checkout_additionalProducts') || '[]')
//   );
//   const [availableProducts, setAvailableProducts] = useState([]);
//   const [highlightAddMore, setHighlightAddMore] = useState(false);

//   // Save data to localStorage whenever it changes
//   useEffect(() => {
//     if (mainProduct && mainProduct._id) {
//       localStorage.setItem(`product_${mainProduct._id}_quantity`, quantity.toString());
//     }
//   }, [quantity, mainProduct]);

//   useEffect(() => {
//     localStorage.setItem('checkout_formData', JSON.stringify(formData));
//   }, [formData]);

//   useEffect(() => {
//     localStorage.setItem('checkout_additionalProducts', JSON.stringify(additionalProducts));
//   }, [additionalProducts]);

//   useEffect(() => {
//     if (mainProduct) {
//       localStorage.setItem('checkout_mainProduct', JSON.stringify(mainProduct));
//     }
//   }, [mainProduct]);

//   useEffect(() => {
//     if (!mainProduct) {
//       toast.error('No product selected');
//       navigate('/products');
//     } else {
//       // Fetch related products to show as additional options
//       fetchRelatedProducts(mainProduct);
      
//       // Highlight the "Add More" button for new users
//       const hasSeenHighlight = localStorage.getItem('hasSeenAddMoreHighlight');
//       if (!hasSeenHighlight) {
//         setHighlightAddMore(true);
//         setTimeout(() => setHighlightAddMore(false), 3000);
//         localStorage.setItem('hasSeenAddMoreHighlight', 'true');
//       }
//     }
//   }, [mainProduct, navigate]);

//   const fetchRelatedProducts = async (mainProduct) => {
//     try {
//       const res = await axios.get(
//         `http://localhost:5000/api/products/category/${mainProduct.category}?limit=6`, 
//         { withCredentials: true }
//       );
      
//       if (res.data.success) {
//         // Filter out the current product and set available products
//         const filtered = res.data.products.filter(p => p._id !== mainProduct._id);
//         setAvailableProducts(filtered);
//       }
//     } catch (error) {
//       console.error("Error fetching related products:", error);
//     }
//   };

//   const handleQuantityChange = (action) => {
//     if (action === 'increase') {
//       setQuantity(prev => {
//         const newQuantity = prev + 1;
//         // Update localStorage immediately
//         if (mainProduct && mainProduct._id) {
//           localStorage.setItem(`product_${mainProduct._id}_quantity`, newQuantity.toString());
//         }
//         return newQuantity;
//       });
//     } else if (action === 'decrease' && quantity > 1) {
//       setQuantity(prev => {
//         const newQuantity = prev - 1;
//         // Update localStorage immediately
//         if (mainProduct && mainProduct._id) {
//           localStorage.setItem(`product_${mainProduct._id}_quantity`, newQuantity.toString());
//         }
//         return newQuantity;
//       });
//     }
//   };

//   const addAdditionalProduct = (newProduct) => {
//     // Check if product is already in additional products
//     const existingIndex = additionalProducts.findIndex(p => p._id === newProduct._id);
    
//     if (existingIndex >= 0) {
//       // Increase quantity if already exists
//       const updatedProducts = [...additionalProducts];
//       updatedProducts[existingIndex] = {
//         ...updatedProducts[existingIndex],
//         quantity: updatedProducts[existingIndex].quantity + 1
//       };
//       setAdditionalProducts(updatedProducts);
//     } else {
//       // Add new product with quantity 1
//       setAdditionalProducts([...additionalProducts, {...newProduct, quantity: 1}]);
//     }
    
//     toast.success(`${newProduct.name} added to order!`);
//     setShowProductSelector(false);
//   };

//   const removeAdditionalProduct = (productId) => {
//     setAdditionalProducts(additionalProducts.filter(p => p._id !== productId));
//   };

//   const updateAdditionalProductQuantity = (productId, newQuantity) => {
//     if (newQuantity < 1) {
//       removeAdditionalProduct(productId);
//       return;
//     }
    
//     setAdditionalProducts(additionalProducts.map(p => 
//       p._id === productId ? {...p, quantity: newQuantity} : p
//     ));
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Clear localStorage after successful payment
//   const clearCheckoutStorage = () => {
//     try {
//       // Clear all product quantities
//       const keys = Object.keys(localStorage);
//       keys.forEach(key => {
//         if (key.startsWith('product_') && key.endsWith('_quantity')) {
//           localStorage.removeItem(key);
//         }
//       });
//       localStorage.removeItem('checkout_mainProduct');
//       localStorage.removeItem('checkout_additionalProducts');
//       localStorage.removeItem('checkout_formData');
//     } catch (error) {
//       console.error('Error clearing localStorage:', error);
//     }
//   };

//   // Calculate total for main product
//   const mainProductTotal = mainProduct ? (mainProduct.price * quantity) : 0;
  
//   // Calculate total for additional products
//   const additionalProductsTotal = additionalProducts.reduce((total, p) => {
//     return total + (p.price * p.quantity);
//   }, 0);
  
//   // Calculate final total
//   const totalAmount = (mainProductTotal + additionalProductsTotal).toFixed(2);
// // Remove or simplify the loadRazorpayScript function




// const loadRazorpayScript = () => {
//   return new Promise((resolve) => {
//     // Check if Razorpay is already loaded
//     if (window.Razorpay) {
//       resolve(true);
//       return;
//     }
    
//     // Fallback: Load script dynamically if not already loaded
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     script.onload = () => {
//       resolve(true);
//     };
//     script.onerror = () => {
//       resolve(false);
//     };
//     document.body.appendChild(script);
//   });
// };

// // const handlePayment = async () => {
// //   // Form validation
// //   if (!formData.name || !formData.email || !formData.phone || !formData.address) {
// //     toast.error('Please fill all required fields');
// //     return;
// //   }

// //   setLoading(true);

// //   try {
// //     // Load Razorpay script
// //     const res = await loadRazorpayScript();
// //     if (!res) {
// //       toast.error('Razorpay SDK failed to load');
// //       return;
// //     }

// //     // Create order on your server
// //     const orderResponse = await axios.post('http://localhost:5000/api/payments/create-order', {
// //       amount: totalAmount * 100, // Convert to paise
// //       currency: 'INR',
// //       receipt: `receipt_${Date.now()}`
// //     });

// //     console.log("Full order response:", orderResponse.data);

// //     // FIX: Check the actual structure of the response
// //     // Your backend might be returning { success: true, order: { id, amount, currency } }
// //     // instead of { id, amount, currency } directly
    
// //     let orderId, amount, currency;
    
// //     if (orderResponse.data.order) {
// //       // Response format: { success: true, order: { id, amount, currency } }
// //       orderId = orderResponse.data.order.id;
// //       amount = orderResponse.data.order.amount;
// //       currency = orderResponse.data.order.currency;
// //     } else {
// //       // Response format: { id, amount, currency }
// //       orderId = orderResponse.data.id;
// //       amount = orderResponse.data.amount;
// //       currency = orderResponse.data.currency;
// //     }

// //     console.log("Extracted values:", { orderId, amount, currency });

// //     // Validate that we have the required values
// //     if (!orderId || !amount || !currency) {
// //       throw new Error("Invalid order response from server");
// //     }

// //     // Razorpay options - FIXED THE KEY ACCESS
// //     const options = {
// //       key: "rzp_test_RCnjWwaZPmdddK",
// //       amount: amount.toString(), // This should work now
// //       currency: currency,
// //       name: 'Sacred Store',
// //       description: `Purchase of ${mainProduct.name}${additionalProducts.length > 0 ? ` and ${additionalProducts.length} more items` : ''}`,
// //       image: window.location.origin + '/logo.png',
// //       order_id: orderId,
// //       handler: async function(response) {
// //         // Verify payment on server
// //         try {
// //           const verifyResponse = await axios.post('http://localhost:5000/api/payments/verify-payment', {
// //             razorpay_order_id: response.razorpay_order_id,
// //             razorpay_payment_id: response.razorpay_payment_id,
// //             razorpay_signature: response.razorpay_signature
// //           });

// //           if (verifyResponse.data.success) {
// //             // Save order to database with complete product details
// //             await axios.post('http://localhost:5000/api/payments/create-order-record', {
// //               products: [
// //                 { 
// //                   product: mainProduct._id, 
// //                   quantity,
// //                   name: mainProduct.name,
// //                   price: mainProduct.price,
// //                   imageUrl: mainProduct.imageUrl
// //                 },
// //                 ...additionalProducts.map(p => ({ 
// //                   product: p._id, 
// //                   quantity: p.quantity,
// //                   name: p.name,
// //                   price: p.price,
// //                   imageUrl: p.imageUrl
// //                 }))
// //               ],
// //               totalAmount,
// //               customerDetails: formData,
// //               paymentId: response.razorpay_payment_id
// //             });

// //             // Clear localStorage after successful payment
// //             clearCheckoutStorage();
            
// //             toast.success('Payment successful! Order placed.');
// //             navigate('/order-success', { 
// //               state: { 
// //                 orderId: response.razorpay_order_id,
// //                 products: [
// //                   { product: mainProduct, quantity },
// //                   ...additionalProducts
// //                 ],
// //                 totalAmount 
// //               } 
// //             });
// //           } else {
// //             toast.error('Payment verification failed');
// //           }
// //         } catch (error) {
// //           console.error('Payment verification error:', error);
// //           toast.error('Payment verification failed');
// //         }
// //       },
// //       prefill: {
// //         name: formData.name,
// //         email: formData.email,
// //         contact: formData.phone
// //       },
// //       notes: {
// //         address: formData.address
// //       },
// //       theme: {
// //         color: '#C41E3A'
// //       },
// //       modal: {
// //         ondismiss: function() {
// //           console.log("Payment modal dismissed");
// //           setLoading(false);
// //         }
// //       }
// //     };

// //     const razorpay = new window.Razorpay(options);
    
// //     // Add error handling for payment failure
// //     razorpay.on('payment.failed', function(response) {
// //       console.error('Payment failed:', response.error);
// //       toast.error(`Payment failed: ${response.error.description}`);
// //       setLoading(false);
// //     });
    
// //     razorpay.open();
// //   } catch (error) {
// //     console.error('Payment error:', error);
// //     toast.error('Payment failed. Please try again.');
// //     setLoading(false);
// //   }
// // };

// const handlePayment = async () => {
//   // Form validation
//   if (!formData.name || !formData.email || !formData.phone || !formData.address) {
//     toast.error('Please fill all required fields');
//     return;
//   }

//   setLoading(true);

//   try {
//     // Load Razorpay script
//     const res = await loadRazorpayScript();
//     if (!res) {
//       toast.error('Razorpay SDK failed to load');
//       return;
//     }

//     // Create order on your server
//     const orderResponse = await axios.post('http://localhost:5000/api/payments/create-order', {
//       amount: totalAmount * 100, // Convert to paise
//       currency: 'INR',
//       receipt: `receipt_${Date.now()}`
//     });

//     console.log("Full order response:", orderResponse.data);

//     // Extract order data based on your backend response structure
//     let orderId, amount, currency;
    
//     if (orderResponse.data.order) {
//       // Response format: { success: true, order: { id, amount, currency } }
//       orderId = orderResponse.data.order.id;
//       amount = orderResponse.data.order.amount;
//       currency = orderResponse.data.order.currency;
//     } else {
//       // Response format: { id, amount, currency }
//       orderId = orderResponse.data.id;
//       amount = orderResponse.data.amount;
//       currency = orderResponse.data.currency;
//     }

//     console.log("Extracted values:", { orderId, amount, currency });

//     // Validate that we have the required values
//     if (!orderId || !amount || !currency) {
//       throw new Error("Invalid order response from server");
//     }

//     // Razorpay options
//     const options = {
//       key: import.meta.env.VITE_RAZORPAY_KEY_ID, //  // or process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID
//       amount: amount.toString(),
//       currency: currency,
//       name: 'Adiyogi Store',
//       description: `Purchase of ${mainProduct.name}${additionalProducts.length > 0 ? ` and ${additionalProducts.length} more items` : ''}`,
//       image: window.location.origin + '/Screenshot 2025-08-08 160012.png',
//       order_id: orderId,
//       handler: async function(response) {
//         console.log("Razorpay response:", response);
        
//         // Verify payment on server
//         try {
//           const verifyResponse = await axios.post('http://localhost:5000/api/payments/verify-payment', {
//             razorpay_order_id: response.razorpay_order_id,
//             razorpay_payment_id: response.razorpay_payment_id,
//             razorpay_signature: response.razorpay_signature,
//             order_id: orderId, // Add the original order ID for verification
//             amount: amount // Add amount for additional verification
//           });

//           console.log("Verification response:", verifyResponse.data);

//           if (verifyResponse.data.success) {
//             // Save order to database with complete product details
//             const orderRecordResponse = await axios.post('http://localhost:5000/api/payments/create-order-record', {
//               products: [
//                 { 
//                   product: mainProduct._id, 
//                   quantity,
//                   name: mainProduct.name,
//                   price: mainProduct.price,
//                   imageUrl: mainProduct.imageUrl
//                 },
//                 ...additionalProducts.map(p => ({ 
//                   product: p._id, 
//                   quantity: p.quantity,
//                   name: p.name,
//                   price: p.price,
//                   imageUrl: p.imageUrl
//                 }))
//               ],
//               totalAmount,
//               customerDetails: formData,
//               paymentId: response.razorpay_payment_id,
//               orderId: response.razorpay_order_id
//             });

//             if (orderRecordResponse.data.success) {
//               // Clear localStorage after successful payment
//               clearCheckoutStorage();
              
//               toast.success('Payment successful! Order placed.');
//               navigate('/order-success', { 
//                 state: { 
//                   orderId: response.razorpay_order_id,
//                   paymentId: response.razorpay_payment_id,
//                   products: [
//                     { product: mainProduct, quantity },
//                     ...additionalProducts
//                   ],
//                   totalAmount 
//                 } 
//               });
//             } else {
//               console.error("Order record creation failed:", orderRecordResponse.data);
//               toast.error('Order creation failed. Please contact support with your payment ID: ' + response.razorpay_payment_id);
//             }
//           } else {
//             console.error("Payment verification failed:", verifyResponse.data);
//             toast.error('Payment verification failed: ' + (verifyResponse.data.message || 'Unknown error'));
//           }
//         } catch (error) {
//           console.error('Payment verification error:', error);
//           if (error.response) {
//             console.error('Error response data:', error.response.data);
//             toast.error('Payment verification failed: ' + (error.response.data.message || error.message));
//           } else {
//             toast.error('Payment verification failed: ' + error.message);
//           }
//         }
//       },
//       prefill: {
//         name: formData.name,
//         email: formData.email,
//         contact: formData.phone
//       },
//       notes: {
//         address: formData.address
//       },
//       theme: {
//         color: '#C41E3A'
//       },
//       modal: {
//         ondismiss: function() {
//           console.log("Payment modal dismissed");
//           setLoading(false);
//         }
//       }
//     };

//     const razorpay = new window.Razorpay(options);
    
//     // Add error handling for payment failure
//     razorpay.on('payment.failed', function(response) {
//       console.error('Payment failed:', response.error);
//       toast.error(`Payment failed: ${response.error.description}`);
//       setLoading(false);
//     });
    
//     razorpay.open();
//   } catch (error) {
//     console.error('Payment error:', error);
//     if (error.response) {
//       console.error('Error response:', error.response.data);
//       toast.error('Payment failed: ' + (error.response.data.message || error.message));
//     } else {
//       toast.error('Payment failed: ' + error.message);
//     }
//     setLoading(false);
//   }
// };
//   if (!mainProduct) {
//     return (
//       <div className="min-h-screen bg-rose-50 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">No Product Selected</h2>
          
//           <button 
//             onClick={() => navigate('/products')}
//             className="bg-sacred-crimson text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
//           >
//             Back to Products
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-rose-50 to-red-50">
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         {/* Header */}
//         <div className="mb-8">
//          {/* <button 
//   onClick={() => navigate(-1)}
//   className="flex items-center justify-center bg-white rounded-full px-4 py-2 shadow-md border border-rose-100 text-sacred-crimson hover:text-red-700 transition-colors group"
// >
//   <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
//   <span className="font-medium">Back to Products</span>
// </button> */}
// <button 
//   onClick={() => navigate(-1)}
//   className="flex items-center justify-center bg-white rounded-full px-4 py-2 shadow-md border border-rose-100 text-sacred-crimson hover:text-red-700 transition-colors group mb-6 md:mb-0"
// >
//   <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
//   <span className="font-medium">Back to Products</span>
// </button>

         

//           <div className="text-center mb-8">
//             <h1 className="text-4xl font-bold bg-gradient-to-r from-sacred-crimson to-red-600 bg-clip-text text-transparent mb-3">
//               Complete Your Order
//             </h1>
//             <p className="text-gray-600 text-lg">
//               Just a few more steps to get your sacred items delivered
//             </p>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-5 gap-8">
//           {/* Order Summary - Left Side */}
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-3xl p-8 shadow-xl border border-rose-100 sticky top-8">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center">
//                   <ShoppingBag className="w-6 h-6 text-sacred-crimson mr-3" />
//                   <h2 className="text-2xl font-bold text-gray-800">Order Summary</h2>
//                 </div>
//                 <button
//                   onClick={() => setShowProductSelector(!showProductSelector)}
//                   className={`px-4 py-2 rounded-lg transition-all flex items-center text-sm font-medium ${
//                     highlightAddMore 
//                       ? 'animate-pulse bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg' 
//                       : 'bg-rose-100 text-sacred-crimson hover:bg-rose-200'
//                   }`}
//                 >
//                   <ShoppingCart className="w-4 h-4 mr-1" />
//                   Add More
//                 </button>
//               </div>
              
//               {/* Product Selector Modal */}
//               {showProductSelector && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//                   <div className="bg-white rounded-2xl p-6 max-w-2xl w-full mx-4 max-h-96 overflow-y-auto">
//                     <div className="flex justify-between items-center mb-4">
//                       <h3 className="text-xl font-bold">Add More Sacred Products</h3>
//                       <button 
//                         onClick={() => setShowProductSelector(false)}
//                         className="text-gray-500 hover:text-gray-700 text-lg"
//                       >
//                         ✕
//                       </button>
//                     </div>
//                     <p className="text-sm text-gray-600 mb-4">Add more items to your order and save on shipping!</p>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       {availableProducts.map(prod => (
//                         <div key={prod._id} className="border border-rose-100 rounded-lg p-3 flex items-center hover:shadow-md transition-shadow">
//                           <img 
//                             src={prod.imageUrl} 
//                             alt={prod.name}
//                             className="w-16 h-16 object-cover rounded-md mr-3"
//                           />
//                           <div className="flex-1">
//                             <h4 className="font-medium text-sm">{prod.name}</h4>
//                             <div className="flex items-center mt-1">
//                               <IndianRupee className="w-4 h-4 text-sacred-crimson" />
//                               <span className="font-bold text-sacred-crimson">{prod.price}</span>
//                             </div>
//                           </div>
//                           <button
//                             onClick={() => addAdditionalProduct(prod)}
//                             className="bg-sacred-crimson text-white px-3 py-1 rounded-lg text-sm hover:bg-red-700 transition-colors"
//                           >
//                             Add
//                           </button>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               )}
              
//               {/* Main Product */}
//               <div className="bg-rose-50 rounded-2xl p-6 mb-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="relative">
//                     <img 
//                       src={mainProduct.imageUrl} 
//                       alt={mainProduct.name}
//                       className="w-24 h-24 object-cover rounded-xl shadow-md"
//                     />
//                     <div className="absolute -top-2 -right-2 bg-sacred-crimson text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
//                       {quantity}
//                     </div>
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="font-bold text-gray-800 text-lg mb-1">{mainProduct.name}</h3>
//                     <p className="text-gray-600 text-sm mb-2 capitalize">{mainProduct.category}</p>
//                     <div className="flex items-center">
//                       <IndianRupee className="w-5 h-5 text-sacred-crimson" />
//                       <span className="font-bold text-sacred-crimson text-xl">{mainProduct.price}</span>
//                       <span className="text-gray-500 text-sm ml-1">each</span>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Quantity Selector for Main Product */}
//                 <div className="flex justify-between items-center mt-4">
//                   <span className="font-semibold text-gray-700">Quantity</span>
//                   <div className="flex items-center space-x-4">
//                     <button
//                       onClick={() => handleQuantityChange('decrease')}
//                       className="w-10 h-10 rounded-xl bg-rose-100 hover:bg-rose-200 flex items-center justify-center text-sacred-crimson transition-colors border border-rose-200"
//                       disabled={quantity <= 1}
//                     >
//                       <Minus className="w-5 h-5" />
//                     </button>
//                     <span className="font-bold text-xl min-w-[3rem] text-center">{quantity}</span>
//                     <button
//                       onClick={() => handleQuantityChange('increase')}
//                       className="w-10 h-10 rounded-xl bg-rose-100 hover:bg-rose-200 flex items-center justify-center text-sacred-crimson transition-colors border border-rose-200"
//                     >
//                       <Plus className="w-5 h-5" />
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Additional Products */}
//               {additionalProducts.length > 0 && (
//                 <div className="mb-6">
//                   <h4 className="font-semibold text-gray-700 mb-3">Additional Items</h4>
//                   <div className="space-y-3">
//                     {additionalProducts.map(prod => (
//                       <div key={prod._id} className="flex items-center justify-between p-3 bg-rose-50 rounded-lg border border-rose-100">
//                         <div className="flex items-center">
//                           <img 
//                             src={prod.imageUrl} 
//                             alt={prod.name}
//                             className="w-12 h-12 object-cover rounded-md mr-3"
//                           />
//                           <div>
//                             <p className="font-medium text-sm">{prod.name}</p>
//                             <div className="flex items-center">
//                               <IndianRupee className="w-4 h-4 text-sacred-crimson" />
//                               <span className="text-sacred-crimson font-medium">{prod.price}</span>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="flex items-center space-x-2">
//                           <div className="flex items-center space-x-2">
//                             <button
//                               onClick={() => updateAdditionalProductQuantity(prod._id, prod.quantity - 1)}
//                               className="w-6 h-6 rounded bg-rose-200 flex items-center justify-center text-sacred-crimson hover:bg-rose-300 transition-colors"
//                             >
//                               <Minus className="w-3 h-3" />
//                             </button>
//                             <span className="font-medium">{prod.quantity}</span>
//                             <button
//                               onClick={() => updateAdditionalProductQuantity(prod._id, prod.quantity + 1)}
//                               className="w-6 h-6 rounded bg-rose-200 flex items-center justify-center text-sacred-crimson hover:bg-rose-300 transition-colors"
//                             >
//                               <Plus className="w-3 h-3" />
//                             </button>
//                           </div>
//                           <button
//                             onClick={() => removeAdditionalProduct(prod._id)}
//                             className="text-red-500 hover:text-red-700 ml-2 transition-colors"
//                           >
//                             ✕
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Price Breakdown */}
//               <div className="space-y-3 mb-6">
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600">Subtotal ({quantity + additionalProducts.reduce((sum, p) => sum + p.quantity, 0)} items)</span>
//                   <div className="flex items-center font-medium">
//                     <IndianRupee className="w-4 h-4" />
//                     <span>{(mainProductTotal + additionalProductsTotal).toFixed(2)}</span>
//                   </div>
//                 </div>

//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600">Shipping & Handling</span>
//                   <div className="flex items-center">
//                     <Truck className="w-4 h-4 text-green-600 mr-1" />
//                     <span className="text-green-600 font-medium">Free</span>
//                   </div>
//                 </div>

//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600">Tax</span>
//                   <span className="text-gray-600">Included</span>
//                 </div>
//               </div>

//               {/* Total */}
//               <div className="border-t border-gray-200 pt-4">
//                 <div className="flex justify-between items-center">
//                   <span className="text-xl font-bold text-gray-800">Total Amount</span>
//                   <div className="flex items-center text-2xl font-bold text-sacred-crimson">
//                     <IndianRupee className="w-6 h-6" />
//                     <span>{totalAmount}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Trust Indicators */}
//               <div className="mt-6 pt-6 border-t border-gray-200">
//                 <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
//                   <div className="flex items-center">
//                     <Shield className="w-4 h-4 mr-1 text-green-600" />
//                     <span>Secure Payment</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Truck className="w-4 h-4 mr-1 text-blue-600" />
//                     <span>Free Delivery</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Customer Details Form - Right Side */}
//           <div className="lg:col-span-3">
//             <div className="bg-white rounded-3xl shadow-xl border border-rose-100 overflow-hidden">
              
//               {/* Form Header */}
//               <div className="bg-gradient-to-r from-sacred-crimson to-red-600 px-8 py-6">
//                 <div className="flex items-center text-white">
//                   <User className="w-6 h-6 mr-3" />
//                   <div>
//                     <h2 className="text-2xl font-bold">Customer Information</h2>
//                     <p className="text-red-100 mt-1">Please provide your details for delivery</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="p-8">
//                 {/* Personal Information Section */}
//                 <div className="mb-8">
//                   <div className="flex items-center mb-6">
//                     <div className="w-8 h-8 bg-sacred-crimson rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
//                       1
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-800">Personal Information</h3>
//                   </div>
                  
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
//                         <User className="w-4 h-4 mr-2 text-sacred-crimson" />
//                         Full Name *
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         placeholder="Enter your full name"
//                         className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sacred-crimson focus:border-sacred-crimson transition-all outline-none"
//                         required
//                       />
//                     </div>

//                     <div>
//                       <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
//                         <Phone className="w-4 h-4 mr-2 text-sacred-crimson" />
//                         Phone Number *
//                       </label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                         placeholder="+91 XXXXX XXXXX"
//                         className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sacred-crimson focus:border-sacred-crimson transition-all outline-none"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="mt-6">
//                     <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
//                       <Mail className="w-4 h-4 mr-2 text-sacred-crimson" />
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       placeholder="your.email@example.com"
//                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sacred-crimson focus:border-sacred-crimson transition-all outline-none"
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Delivery Information Section */}
//                 <div className="mb-8">
//                   <div className="flex items-center mb-6">
//                     <div className="w-8 h-8 bg-sacred-crimson rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
//                       2
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-800">Delivery Information</h3>
//                   </div>

//                   <div className="space-y-6">
//                     <div>
//                       <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
//                         <MapPin className="w-4 h-4 mr-2 text-sacred-crimson" />
//                         Delivery Address *
//                       </label>
//                       <textarea
//                         name="address"
//                         value={formData.address}
//                         onChange={handleInputChange}
//                         rows="4"
//                         placeholder="House/Flat No., Building Name, Street, Area, Landmark"
//                         className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sacred-crimson focus:border-sacred-crimson transition-all outline-none resize-none"
//                         required
//                       />
//                     </div>

//                     <div className="grid md:grid-cols-3 gap-4">
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">
//                           City
//                         </label>
//                         <input
//                           type="text"
//                           name="city"
//                           value={formData.city}
//                           onChange={handleInputChange}
//                           placeholder="City"
//                           className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sacred-crimson focus:border-sacred-crimson transition-all outline-none"
//                         />
//                       </div>

//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">
//                           State
//                         </label>
//                         <input
//                           type="text"
//                           name="state"
//                           value={formData.state}
//                           onChange={handleInputChange}
//                           placeholder="State"
//                           className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sacred-crimson focus:border-sacred-crimson transition-all outline-none"
//                         />
//                       </div>

//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">
//                           Pincode
//                         </label>
//                         <input
//                           type="text"
//                           name="pincode"
//                           value={formData.pincode}
//                           onChange={handleInputChange}
//                           placeholder="000000"
//                           className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sacred-crimson focus:border-sacred-crimson transition-all outline-none"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Payment Section */}
//                 <div className="border-t border-gray-200 pt-8">
//                   <div className="flex items-center mb-6">
//                     <div className="w-8 h-8 bg-sacred-crimson rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
//                       3
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-800">Payment</h3>
//                   </div>

//                   <div className="bg-gradient-to-r from-rose-50 to-red-50 rounded-2xl p-6 mb-6">
//                     <div className="flex items-center justify-between mb-4">
//                       <div className="flex items-center">
//                         <CreditCard className="w-5 h-5 text-sacred-crimson mr-2" />
//                         <span className="font-semibold text-gray-700">Secure Payment via Razorpay</span>
//                       </div>
//                       <div className="flex space-x-2">
//                         <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
//                         <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
//                         <div className="w-8 h-5 bg-purple-600 rounded text-white text-xs flex items-center justify-center font-bold">UPI</div>
//                       </div>
//                     </div>
//                     <p className="text-sm text-gray-600">
//                       Your payment information is encrypted and secure. We support all major credit cards, debit cards, UPI, and net banking.
//                     </p>
//                   </div>

//                   <button
//                     type="button"
//                     onClick={handlePayment}
//                     disabled={loading}
//                     className="w-full bg-gradient-to-r from-sacred-crimson to-red-600 text-white py-4 rounded-xl font-bold text-lg hover:from-red-700 hover:to-red-700 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
//                   >
//                     {loading ? (
//                       <div className="flex items-center justify-center">
//                         <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
//                         Processing Payment...
//                       </div>
//                     ) : (
//                       <div className="flex items-center justify-center">
//                         <CreditCard className="w-5 h-5 mr-3" />
//                         Pay ₹{totalAmount}
//                       </div>
//                     )}
//                   </button>

//                   <p className="text-xs text-gray-500 text-center mt-4">
//                     By placing this order, you agree to our terms and conditions and privacy policy.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Security Footer */}
//         <div className="mt-12 text-center">
//           <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-rose-100">
//             <Shield className="w-5 h-5 text-green-600 mr-2" />
//             <span className="text-sm font-medium text-gray-700">
//               SSL Encrypted • Safe & Secure Checkout • 100% Protected
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;


import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IndianRupee, Minus, Plus, ArrowLeft, User, Phone, Mail, MapPin, ShoppingBag, CreditCard, Truck, Shield, ShoppingCart } from 'lucide-react';
import { toast } from 'react-toastify';
import axios from 'axios';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  
  // Load main product from state or localStorage
  const [mainProduct, setMainProduct] = useState(
    product || JSON.parse(localStorage.getItem('checkout_mainProduct') || 'null')
  );

  // Load quantity from localStorage or use product quantity
  const [quantity, setQuantity] = useState(() => {
    if (mainProduct) {
      const savedQuantity = localStorage.getItem(`product_${mainProduct._id}_quantity`);
      return savedQuantity ? parseInt(savedQuantity, 10) : (mainProduct.quantity || 1);
    }
    return 1;
  });

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem('checkout_formData') || '{"name":"","email":"","phone":"","address":"","city":"","state":"","pincode":""}')
  );
  const [showProductSelector, setShowProductSelector] = useState(false);
  const [additionalProducts, setAdditionalProducts] = useState(
    JSON.parse(localStorage.getItem('checkout_additionalProducts') || '[]')
  );
  const [availableProducts, setAvailableProducts] = useState([]);
  const [highlightAddMore, setHighlightAddMore] = useState(false);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (mainProduct && mainProduct._id) {
      localStorage.setItem(`product_${mainProduct._id}_quantity`, quantity.toString());
    }
  }, [quantity, mainProduct]);

  useEffect(() => {
    localStorage.setItem('checkout_formData', JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem('checkout_additionalProducts', JSON.stringify(additionalProducts));
  }, [additionalProducts]);

  useEffect(() => {
    if (mainProduct) {
      localStorage.setItem('checkout_mainProduct', JSON.stringify(mainProduct));
    }
  }, [mainProduct]);

  useEffect(() => {
    if (!mainProduct) {
      toast.error('No product selected');
      navigate('/products');
    } else {
      // Fetch related products to show as additional options
      fetchRelatedProducts(mainProduct);
      
      // Highlight the "Add More" button for new users
      const hasSeenHighlight = localStorage.getItem('hasSeenAddMoreHighlight');
      if (!hasSeenHighlight) {
        setHighlightAddMore(true);
        setTimeout(() => setHighlightAddMore(false), 3000);
        localStorage.setItem('hasSeenAddMoreHighlight', 'true');
      }
    }
  }, [mainProduct, navigate]);

  const fetchRelatedProducts = async (mainProduct) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/products/category/${mainProduct.category}?limit=6`, 
        { withCredentials: true }
      );
      
      if (res.data.success) {
        // Filter out the current product and set available products
        const filtered = res.data.products.filter(p => p._id !== mainProduct._id);
        setAvailableProducts(filtered);
      }
    } catch (error) {
      console.error("Error fetching related products:", error);
    }
  };

  const handleQuantityChange = (action) => {
    if (action === 'increase') {
      setQuantity(prev => {
        const newQuantity = prev + 1;
        // Update localStorage immediately
        if (mainProduct && mainProduct._id) {
          localStorage.setItem(`product_${mainProduct._id}_quantity`, newQuantity.toString());
        }
        return newQuantity;
      });
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(prev => {
        const newQuantity = prev - 1;
        // Update localStorage immediately
        if (mainProduct && mainProduct._id) {
          localStorage.setItem(`product_${mainProduct._id}_quantity`, newQuantity.toString());
        }
        return newQuantity;
      });
    }
  };

  const addAdditionalProduct = (newProduct) => {
    // Check if product is already in additional products
    const existingIndex = additionalProducts.findIndex(p => p._id === newProduct._id);
    
    if (existingIndex >= 0) {
      // Increase quantity if already exists
      const updatedProducts = [...additionalProducts];
      updatedProducts[existingIndex] = {
        ...updatedProducts[existingIndex],
        quantity: updatedProducts[existingIndex].quantity + 1
      };
      setAdditionalProducts(updatedProducts);
    } else {
      // Add new product with quantity 1
      setAdditionalProducts([...additionalProducts, {...newProduct, quantity: 1}]);
    }
    
    toast.success(`${newProduct.name} added to order!`);
    setShowProductSelector(false);
  };

  const removeAdditionalProduct = (productId) => {
    setAdditionalProducts(additionalProducts.filter(p => p._id !== productId));
  };

  const updateAdditionalProductQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeAdditionalProduct(productId);
      return;
    }
    
    setAdditionalProducts(additionalProducts.map(p => 
      p._id === productId ? {...p, quantity: newQuantity} : p
    ));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Clear localStorage after successful payment
  const clearCheckoutStorage = () => {
    try {
      // Clear all product quantities
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.startsWith('product_') && key.endsWith('_quantity')) {
          localStorage.removeItem(key);
        }
      });
      localStorage.removeItem('checkout_mainProduct');
      localStorage.removeItem('checkout_additionalProducts');
      localStorage.removeItem('checkout_formData');
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  };

  // Calculate total for main product
  const mainProductTotal = mainProduct ? (mainProduct.price * quantity) : 0;
  
  // Calculate total for additional products
  const additionalProductsTotal = additionalProducts.reduce((total, p) => {
    return total + (p.price * p.quantity);
  }, 0);
  
  // Calculate final total
  const totalAmount = (mainProductTotal + additionalProductsTotal).toFixed(2);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      // Check if Razorpay is already loaded
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      
      // Fallback: Load script dynamically if not already loaded
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    // Form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      toast.error('Please fill all required fields');
      return;
    }

    setLoading(true);

    try {
      // Load Razorpay script
      const res = await loadRazorpayScript();
      if (!res) {
        toast.error('Razorpay SDK failed to load');
        return;
      }

      // Create order on your server
      const orderResponse = await axios.post(`${import.meta.env.VITE_API_URL}/api/payments/create-order`, {
        amount: totalAmount * 100, // Convert to paise
        currency: 'INR',
        receipt: `receipt_${Date.now()}`
      });

      console.log("Full order response:", orderResponse.data);

      // Extract order data based on your backend response structure
      let orderId, amount, currency;
      
      if (orderResponse.data.order) {
        // Response format: { success: true, order: { id, amount, currency } }
        orderId = orderResponse.data.order.id;
        amount = orderResponse.data.order.amount;
        currency = orderResponse.data.order.currency;
      } else {
        // Response format: { id, amount, currency }
        orderId = orderResponse.data.id;
        amount = orderResponse.data.amount;
        currency = orderResponse.data.currency;
      }

      console.log("Extracted values:", { orderId, amount, currency });

      // Validate that we have the required values
      if (!orderId || !amount || !currency) {
        throw new Error("Invalid order response from server");
      }

      // Razorpay options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: amount.toString(),
        currency: currency,
        name: 'Adiyogi Store',
        description: `Purchase of ${mainProduct.name}${additionalProducts.length > 0 ? ` and ${additionalProducts.length} more items` : ''}`,
        image: window.location.origin + '/Screenshot 2025-08-08 160012.png',
        order_id: orderId,
        handler: async function(response) {
          console.log("Razorpay response:", response);
          
          // Verify payment on server
          try {
            const verifyResponse = await axios.post(`${import.meta.env.VITE_API_URL}/api/payments/verify-payment`, {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              order_id: orderId, // Add the original order ID for verification
              amount: amount // Add amount for additional verification
            });

            console.log("Verification response:", verifyResponse.data);

            if (verifyResponse.data.success) {
              // Save order to database with complete product details
              const orderRecordResponse = await axios.post(`${import.meta.env.VITE_API_URL}/api/payments/create-order-record`, {
                products: [
                  { 
                    product: mainProduct._id, 
                    quantity,
                    name: mainProduct.name,
                    price: mainProduct.price,
                    imageUrl: mainProduct.imageUrl
                  },
                  ...additionalProducts.map(p => ({ 
                    product: p._id, 
                    quantity: p.quantity,
                    name: p.name,
                    price: p.price,
                    imageUrl: p.imageUrl
                  }))
                ],
                totalAmount,
                customerDetails: formData,
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id
              });

              if (orderRecordResponse.data.success) {
                // Clear localStorage after successful payment
                clearCheckoutStorage();
                
                toast.success('Payment successful! Order placed.');
                navigate('/order-success', { 
                  state: { 
                    orderId: response.razorpay_order_id,
                    paymentId: response.razorpay_payment_id,
                    products: [
                      { product: mainProduct, quantity },
                      ...additionalProducts
                    ],
                    totalAmount 
                  } 
                });
              } else {
                console.error("Order record creation failed:", orderRecordResponse.data);
                toast.error('Order creation failed. Please contact support with your payment ID: ' + response.razorpay_payment_id);
              }
            } else {
              console.error("Payment verification failed:", verifyResponse.data);
              toast.error('Payment verification failed: ' + (verifyResponse.data.message || 'Unknown error'));
            }
          } catch (error) {
            console.error('Payment verification error:', error);
            if (error.response) {
              console.error('Error response data:', error.response.data);
              toast.error('Payment verification failed: ' + (error.response.data.message || error.message));
            } else {
              toast.error('Payment verification failed: ' + error.message);
            }
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        notes: {
          address: formData.address
        },
        theme: {
          color: '#6a0dad'
        },
        modal: {
          ondismiss: function() {
            console.log("Payment modal dismissed");
            setLoading(false);
          }
        }
      };

      const razorpay = new window.Razorpay(options);
      
      // Add error handling for payment failure
      razorpay.on('payment.failed', function(response) {
        console.error('Payment failed:', response.error);
        toast.error(`Payment failed: ${response.error.description}`);
        setLoading(false);
      });
      
      razorpay.open();
    } catch (error) {
      console.error('Payment error:', error);
      if (error.response) {
        console.error('Error response:', error.response.data);
        toast.error('Payment failed: ' + (error.response.data.message || error.message));
      } else {
        toast.error('Payment failed: ' + error.message);
      }
      setLoading(false);
    }
  };

  if (!mainProduct) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No Product Selected</h2>
          
          <button 
            onClick={() => navigate('/products')}
            className="bg-[#6a0dad] text-white px-6 py-2 rounded-lg hover:bg-[#5a0c9d] transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center justify-center bg-white rounded-full px-4 py-2 shadow-md border border-purple-100 text-[#6a0dad] hover:text-[#ff00ff] transition-colors group mb-6 md:mb-0"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Products</span>
          </button>

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#6a0dad] to-[#ff00ff] bg-clip-text text-transparent mb-3">
              Complete Your Order
            </h1>
            <p className="text-gray-600 text-lg">
              Just a few more steps to get your sacred items delivered
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Order Summary - Left Side */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-purple-100 sticky top-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <ShoppingBag className="w-6 h-6 text-[#6a0dad] mr-3" />
                  <h2 className="text-2xl font-bold text-gray-800">Order Summary</h2>
                </div>
                <button
                  onClick={() => setShowProductSelector(!showProductSelector)}
                  className={`px-4 py-2 rounded-lg transition-all flex items-center text-sm font-medium ${
                    highlightAddMore 
                      ? 'animate-pulse bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg' 
                      : 'bg-purple-100 text-[#6a0dad] hover:bg-purple-200'
                  }`}
                >
                  <ShoppingCart className="w-4 h-4 mr-1" />
                  Add More
                </button>
              </div>
              
              {/* Product Selector Modal */}
              {showProductSelector && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-2xl p-6 max-w-2xl w-full mx-4 max-h-96 overflow-y-auto">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold">Add More Sacred Products</h3>
                      <button 
                        onClick={() => setShowProductSelector(false)}
                        className="text-gray-500 hover:text-gray-700 text-lg"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">Add more items to your order and save on shipping!</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {availableProducts.map(prod => (
                        <div key={prod._id} className="border border-purple-100 rounded-lg p-3 flex items-center hover:shadow-md transition-shadow">
                          <img 
                            src={prod.imageUrl} 
                            alt={prod.name}
                            className="w-16 h-16 object-cover rounded-md mr-3"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">{prod.name}</h4>
                            <div className="flex items-center mt-1">
                              <IndianRupee className="w-4 h-4 text-[#6a0dad]" />
                              <span className="font-bold text-[#6a0dad]">{prod.price}</span>
                            </div>
                          </div>
                          <button
                            onClick={() => addAdditionalProduct(prod)}
                            className="bg-[#6a0dad] text-white px-3 py-1 rounded-lg text-sm hover:bg-[#5a0c9d] transition-colors"
                          >
                            Add
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Main Product */}
              <div className="bg-purple-50 rounded-2xl p-6 mb-6">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <img 
                      src={mainProduct.imageUrl} 
                      alt={mainProduct.name}
                      className="w-24 h-24 object-cover rounded-xl shadow-md"
                    />
                    <div className="absolute -top-2 -right-2 bg-[#6a0dad] text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                      {quantity}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-lg mb-1">{mainProduct.name}</h3>
                    <p className="text-gray-600 text-sm mb-2 capitalize">{mainProduct.category}</p>
                    <div className="flex items-center">
                      <IndianRupee className="w-5 h-5 text-[#6a0dad]" />
                      <span className="font-bold text-[#6a0dad] text-xl">{mainProduct.price}</span>
                      <span className="text-gray-500 text-sm ml-1">each</span>
                    </div>
                  </div>
                </div>
                
                {/* Quantity Selector for Main Product */}
                <div className="flex justify-between items-center mt-4">
                  <span className="font-semibold text-gray-700">Quantity</span>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleQuantityChange('decrease')}
                      className="w-10 h-10 rounded-xl bg-purple-100 hover:bg-purple-200 flex items-center justify-center text-[#6a0dad] transition-colors border border-purple-200"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="font-bold text-xl min-w-[3rem] text-center">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange('increase')}
                      className="w-10 h-10 rounded-xl bg-purple-100 hover:bg-purple-200 flex items-center justify-center text-[#6a0dad] transition-colors border border-purple-200"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Additional Products */}
              {additionalProducts.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">Additional Items</h4>
                  <div className="space-y-3">
                    {additionalProducts.map(prod => (
                      <div key={prod._id} className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-100">
                        <div className="flex items-center">
                          <img 
                            src={prod.imageUrl} 
                            alt={prod.name}
                            className="w-12 h-12 object-cover rounded-md mr-3"
                          />
                          <div>
                            <p className="font-medium text-sm">{prod.name}</p>
                            <div className="flex items-center">
                              <IndianRupee className="w-4 h-4 text-[#6a0dad]" />
                              <span className="text-[#6a0dad] font-medium">{prod.price}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateAdditionalProductQuantity(prod._id, prod.quantity - 1)}
                              className="w-6 h-6 rounded bg-purple-200 flex items-center justify-center text-[#6a0dad] hover:bg-purple-300 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-medium">{prod.quantity}</span>
                            <button
                              onClick={() => updateAdditionalProductQuantity(prod._id, prod.quantity + 1)}
                              className="w-6 h-6 rounded bg-purple-200 flex items-center justify-center text-[#6a0dad] hover:bg-purple-300 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeAdditionalProduct(prod._id)}
                            className="text-red-500 hover:text-red-700 ml-2 transition-colors"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal ({quantity + additionalProducts.reduce((sum, p) => sum + p.quantity, 0)} items)</span>
                  <div className="flex items-center font-medium">
                    <IndianRupee className="w-4 h-4" />
                    <span>{(mainProductTotal + additionalProductsTotal).toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Shipping & Handling</span>
                  <div className="flex items-center">
                    <Truck className="w-4 h-4 text-green-600 mr-1" />
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-600">Included</span>
                </div>
              </div>

              {/* Total */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">Total Amount</span>
                  <div className="flex items-center text-2xl font-bold text-[#6a0dad]">
                    <IndianRupee className="w-6 h-6" />
                    <span>{totalAmount}</span>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-1 text-green-600" />
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center">
                    <Truck className="w-4 h-4 mr-1 text-blue-600" />
                    <span>Free Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Details Form - Right Side */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-xl border border-purple-100 overflow-hidden">
              
              {/* Form Header */}
              <div className="bg-gradient-to-r from-[#6a0dad] to-[#ff00ff] px-8 py-6">
                <div className="flex items-center text-white">
                  <User className="w-6 h-6 mr-3" />
                  <div>
                    <h2 className="text-2xl font-bold">Customer Information</h2>
                    <p className="text-purple-100 mt-1">Please provide your details for delivery</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Personal Information Section */}
                <div className="mb-8">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-[#6a0dad] rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Personal Information</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                        <User className="w-4 h-4 mr-2 text-[#6a0dad]" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6a0dad] focus:border-[#6a0dad] transition-all outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                        <Phone className="w-4 h-4 mr-2 text-[#6a0dad]" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6a0dad] focus:border-[#6a0dad] transition-all outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="w-4 h-4 mr-2 text-[#6a0dad]" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6a0dad] focus:border-[#6a0dad] transition-all outline-none"
                      required
                    />
                  </div>
                </div>

                {/* Delivery Information Section */}
                <div className="mb-8">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-[#6a0dad] rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Delivery Information</h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                        <MapPin className="w-4 h-4 mr-2 text-[#6a0dad]" />
                        Delivery Address *
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows="4"
                        placeholder="House/Flat No., Building Name, Street, Area, Landmark"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6a0dad] focus:border-[#6a0dad] transition-all outline-none resize-none"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="City"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6a0dad] focus:border-[#6a0dad] transition-all outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          State
                        </label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          placeholder="State"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6a0dad] focus:border-[#6a0dad] transition-all outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Pincode
                        </label>
                        <input
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          placeholder="000000"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6a0dad] focus:border-[#6a0dad] transition-all outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Section */}
                <div className="border-t border-gray-200 pt-8">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-[#6a0dad] rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                      3
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Payment</h3>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <CreditCard className="w-5 h-5 text-[#6a0dad] mr-2" />
                        <span className="font-semibold text-gray-700">Secure Payment via Razorpay</span>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                        <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                        <div className="w-8 h-5 bg-purple-600 rounded text-white text-xs flex items-center justify-center font-bold">UPI</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Your payment information is encrypted and secure. We support all major credit cards, debit cards, UPI, and net banking.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handlePayment}
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#6a0dad] to-[#ff00ff] text-white py-4 rounded-xl font-bold text-lg hover:from-[#5a0c9d] hover:to-[#e600e6] transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Processing Payment...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <CreditCard className="w-5 h-5 mr-3" />
                        Pay ₹{totalAmount}
                      </div>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    By placing this order, you agree to our terms and conditions and privacy policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-purple-100">
            <Shield className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">
              SSL Encrypted • Safe & Secure Checkout • 100% Protected
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;