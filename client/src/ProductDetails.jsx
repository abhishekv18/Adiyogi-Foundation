
// import React, { useState, useEffect } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import { 
//   ArrowLeft, ShoppingCart, Heart, Share2, Star, Clock, 
//   Package, Check, Shield, Truck, IndianRupee, Plus, Minus, 
//   Eye, Flame, Sparkles, ChevronRight, MapPin, Award, Leaf
// } from 'lucide-react';
// import { toast } from 'react-toastify';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { setProducts } from './redux/authEcommerce';

// const ProductDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [product, setProduct] = useState(null);
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [activeTab, setActiveTab] = useState('description');
  
//   // Get products from Redux store
//   const { products = [] } = useSelector((state) => state.ecommerce);

//   const [quantity, setQuantity] = useState(() => {
//     const savedQuantity = localStorage.getItem(`product_${id}_quantity`);
//     return savedQuantity ? parseInt(savedQuantity, 10) : 1;
//   });

//   // Save quantity to localStorage whenever it changes
//   useEffect(() => {
//     if (id) {
//       localStorage.setItem(`product_${id}_quantity`, quantity.toString());
//     }
//   }, [quantity, id]);

//   // Fetch product details
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         setLoading(true);
//         const res = await axios.get(`http://localhost:5000/api/products/get/${id}`, {
//           withCredentials: true,
//         });
        
//         if (res.data.success) {
//           setProduct(res.data.product);
          
//           // If product not in Redux store, add it
//           if (!products.find(p => p._id === res.data.product._id)) {
//             dispatch(setProducts([...products, res.data.product]));
//           }
//         } else {
//           toast.error("Failed to load product details");
//         }
//       } catch (error) {
//         console.error("Error fetching product:", error);
//         toast.error("Failed to load product details");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [dispatch, id, products]);

//   // Fetch related products
//   useEffect(() => {
//     const fetchRelatedProducts = async () => {
//       try {
//         if (product && product.category) {
//           const res = await axios.get(
//             `http://localhost:5000/api/products/category/${product.category}?limit=6`, 
//             { withCredentials: true }
//           );
          
//           if (res.data.success) {
//             // Filter out the current product
//             const filtered = res.data.products.filter(p => p._id !== product._id);
//             setRelatedProducts(filtered.slice(0, 3));
//           }
//         }
//       } catch (error) {
//         console.error("Error fetching related products:", error);
//       }
//     };

//     fetchRelatedProducts();
//   }, [product]);

//   // Handle Buy Now - navigate to checkout with current quantity
//   const handleBuyNow = (e, product) => {
//     e.preventDefault();
//     e.stopPropagation();
    
//     navigate('/checkout', { 
//       state: { 
//         product: {
//           ...product,
//           quantity: quantity,
//           total: product.price * quantity
//         }
//       }
//     });
//   };

//   const incrementQuantity = () => {
//     setQuantity(prev => Math.min(prev + 1, product.quantity));
//   };

//   const decrementQuantity = () => {
//     setQuantity(prev => Math.max(prev - 1, 1));
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-rose-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-sacred-crimson mx-auto"></div>
//           <p className="mt-4 text-gray-600 font-medium">Loading sacred product...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!product) {
//     return (
//       <div className="min-h-screen bg-rose-50 flex items-center justify-center">
//         <div className="text-center">
//           <Package className="w-20 h-20 text-gray-400 mx-auto mb-4" />
//           <h2 className="text-2xl font-bold text-gray-800 mb-2">Product Not Found</h2>
//           <p className="text-gray-600 mb-8">The sacred product you're looking for doesn't exist.</p>
//           <Link 
//             to="/products"
//             className="inline-flex items-center bg-sacred-crimson text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl"
//           >
//             Back to Products
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-rose-50">
//       {/* Enhanced Navigation */}
//       <div className="bg-white shadow-sm border-b border-rose-100 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center">
//             <button 
//               onClick={() => navigate(-1)}
//               className="flex items-center text-gray-600 hover:text-sacred-crimson transition-colors mr-6 group"
//             >
//               <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
//               <span className="font-medium">Back</span>
//             </button>
//             <nav className="flex items-center text-sm">
//               <Link to="/products" className="text-gray-500 hover:text-sacred-crimson transition-colors">
//                 Products
//               </Link>
//               <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
//               <span className="text-gray-500">{product.category}</span>
//               <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
//               <span className="text-sacred-crimson font-medium truncate max-w-xs">{product.name}</span>
//             </nav>
//           </div>
//         </div>
//       </div>

//       {/* Main Product Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 border border-rose-100">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
//             {/* Left Column - Image and Description */}
//             <div className="p-8">
//               {/* Product Image */}
//               <div className="mb-8">
//                 <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 shadow-inner border border-rose-100">
//                   {product.imageUrl ? (
//                     <img 
//                       src={product.imageUrl} 
//                       alt={product.name}
//                       className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//                     />
//                   ) : (
//                     <div className="w-full h-full flex items-center justify-center">
//                       <Package className="w-24 h-24 text-gray-300" />
//                     </div>
//                   )}
//                   <div className="absolute top-4 left-4">
//                     <span className="inline-flex items-center bg-white/90 backdrop-blur-sm text-sacred-crimson px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg border border-rose-100">
//                       {product.category}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Tabbed Content */}
//               <div className="border-b border-rose-100 mb-6">
//                 <div className="flex space-x-8">
//                   <button
//                     onClick={() => setActiveTab('description')}
//                     className={`py-3 font-medium text-sm border-b-2 transition-colors ${
//                       activeTab === 'description'
//                         ? 'border-sacred-crimson text-sacred-crimson'
//                         : 'border-transparent text-gray-500 hover:text-gray-700'
//                     }`}
//                   >
//                     Description
//                   </button>
//                   <button
//                     onClick={() => setActiveTab('benefits')}
//                     className={`py-3 font-medium text-sm border-b-2 transition-colors ${
//                       activeTab === 'benefits'
//                         ? 'border-sacred-crimson text-sacred-crimson'
//                         : 'border-transparent text-gray-500 hover:text-gray-700'
//                     }`}
//                   >
//                     Sacred Benefits
//                   </button>
//                   <button
//                     onClick={() => setActiveTab('shipping')}
//                     className={`py-3 font-medium text-sm border-b-2 transition-colors ${
//                       activeTab === 'shipping'
//                         ? 'border-sacred-crimson text-sacred-crimson'
//                         : 'border-transparent text-gray-500 hover:text-gray-700'
//                     }`}
//                   >
//                     Shipping & Returns
//                   </button>
//                 </div>
//               </div>

//               {/* Tab Content */}
//               <div className="space-y-6">
//                 {activeTab === 'description' && (
//                   <div className="animate-fadeIn">
//                     <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
//                       <Sparkles className="w-5 h-5 text-sacred-crimson mr-2" />
//                       Product Description
//                     </h3>
//                     <div className="bg-rose-50 rounded-xl p-6 border border-rose-100">
//                       <p className="text-gray-700 leading-relaxed text-base">{product.description}</p>
//                     </div>
//                   </div>
//                 )}

//                 {activeTab === 'benefits' && (
//                   <div className="animate-fadeIn">
//                     <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
//                       <Flame className="w-5 h-5 text-sacred-crimson mr-2" />
//                       Sacred Benefits
//                     </h4>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                       {[
//                         "Purifies energy and space",
//                         "Enhances spiritual practices", 
//                         "Supports physical wellness",
//                         "Natural healing properties",
//                         "Promotes mental clarity",
//                         "Brings positive vibrations"
//                       ].map((benefit, index) => (
//                         <div key={index} className="flex items-start bg-white rounded-lg p-4 border border-rose-100 hover:shadow-md transition-shadow">
//                           <div className="bg-sacred-crimson/10 p-2 rounded-lg mr-4">
//                             <Check className="w-5 h-5 text-sacred-crimson" />
//                           </div>
//                           <span className="text-gray-700 text-sm font-medium">{benefit}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {activeTab === 'shipping' && (
//                   <div className="animate-fadeIn">
//                     <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
//                       <Truck className="w-5 h-5 text-sacred-crimson mr-2" />
//                       Shipping & Returns
//                     </h4>
//                     <div className="space-y-4">
//                       <div className="bg-white rounded-lg p-5 border border-rose-100">
//                         <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
//                           <MapPin className="w-4 h-4 text-sacred-crimson mr-2" />
//                           Free Shipping
//                         </h5>
//                         <p className="text-gray-600 text-sm">Complimentary delivery on orders above ₹999 anywhere in India with secure packaging</p>
//                       </div>
//                       <div className="bg-white rounded-lg p-5 border border-rose-100">
//                         <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
//                           <Clock className="w-4 h-4 text-sacred-crimson mr-2" />
//                           Delivery Time
//                         </h5>
//                         <p className="text-gray-600 text-sm">Standard delivery within 2-3 business days across major cities</p>
//                       </div>
//                       <div className="bg-white rounded-lg p-5 border border-rose-100">
//                         <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
//                           <Shield className="w-4 h-4 text-sacred-crimson mr-2" />
//                           Returns Policy
//                         </h5>
//                         <p className="text-gray-600 text-sm">Hassle-free 7-day return policy for any damaged or incorrect items with full refund</p>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
            
//             {/* Right Column - Product Details */}
//             <div className="p-8 bg-gradient-to-br from-rose-25 to-white">
//               {/* Product Header */}
//               <div className="mb-6">
//                 <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
//                   {product.name}
//                 </h1>
                
//                 {/* Rating */}
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-rose-100">
//                     <div className="flex items-center mr-2">
//                       {[...Array(5)].map((_, i) => (
//                         <Star 
//                           key={i} 
//                           className={`w-4 h-4 ${
//                             i < 4.8 
//                               ? 'text-amber-400 fill-current' 
//                               : 'text-gray-300'
//                           }`} 
//                         />
//                       ))}
//                     </div>
//                     <span className="text-gray-600 text-sm font-medium">4.8 (127 reviews)</span>
//                   </div>
                
//                 </div>
//               </div>
              
//               {/* Price */}
//               <div className="mb-8">
//                 <div className="flex items-baseline gap-2 mb-2">
//                   <div className="flex items-center">
//                     <IndianRupee className="w-8 h-8 text-sacred-crimson" />
//                     <span className="text-4xl font-bold text-sacred-crimson">{product.price}</span>
//                   </div>
//                   <span className="text-green-600 font-medium bg-green-50 px-2 py-1 rounded text-sm">
//                     Inclusive of all taxes
//                   </span>
//                 </div>
//                 <p className="text-gray-600 text-sm">Free shipping above ₹999 • Easy returns</p>
//               </div>
              
//               {/* Product Stats Grid */}
//               <div className="grid grid-cols-2 gap-4 mb-8">
//                 <div className="bg-white rounded-lg p-4 border border-rose-100 hover:shadow-md transition-shadow">
//                   <div className="flex items-center mb-2">
//                     <Package className="w-5 h-5 text-sacred-crimson mr-2" />
//                     <span className="text-gray-600 text-sm">Status</span>
//                   </div>
//                   <span className={`font-semibold ${product.status === 'inStock' ? 'text-green-600' : 'text-red-600'}`}>
//                     {product.status === 'inStock' ? 'In Stock' : 'Out of Stock'}
//                   </span>
//                 </div>
//                 <div className="bg-white rounded-lg p-4 border border-rose-100 hover:shadow-md transition-shadow">
//                   <div className="flex items-center mb-2">
//                     <Award className="w-5 h-5 text-sacred-crimson mr-2" />
//                     <span className="text-gray-600 text-sm">Quality</span>
//                   </div>
//                   <span className="font-semibold text-gray-900">Premium</span>
//                 </div>
//                 <div className="bg-white rounded-lg p-4 border border-rose-100 hover:shadow-md transition-shadow">
//                   <div className="flex items-center mb-2">
//                     <Truck className="w-5 h-5 text-sacred-crimson mr-2" />
//                     <span className="text-gray-600 text-sm">Delivery</span>
//                   </div>
//                   <span className="font-semibold text-gray-900">2-3 days</span>
//                 </div>
//                 <div className="bg-white rounded-lg p-4 border border-rose-100 hover:shadow-md transition-shadow">
//                   <div className="flex items-center mb-2">
//                     <Leaf className="w-5 h-5 text-sacred-crimson mr-2" />
//                     <span className="text-gray-600 text-sm">In Stock</span>
//                   </div>
//                   <span className="font-semibold text-gray-900">{product.quantity} units</span>
//                 </div>
//               </div>
              
//               {/* Quantity Selector */}
//               <div className="mb-8">
//                 <label className="block text-gray-900 font-semibold mb-3">Quantity:</label>
//                 <div className="flex items-center max-w-xs">
//                   <button 
//                     onClick={decrementQuantity}
//                     disabled={quantity <= 1}
//                     className="bg-white border border-rose-200 text-sacred-crimson p-3 rounded-l-lg hover:bg-rose-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//                   >
//                     <Minus className="w-5 h-5" />
//                   </button>
//                   <div className="bg-white border-t border-b border-rose-200 px-6 py-3 text-lg font-semibold text-gray-900 min-w-[80px] text-center">
//                     {quantity}
//                   </div>
//                   <button 
//                     onClick={incrementQuantity}
//                     disabled={quantity >= product.quantity}
//                     className="bg-white border border-rose-200 text-sacred-crimson p-3 rounded-r-lg hover:bg-rose-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//                   >
//                     <Plus className="w-5 h-5" />
//                   </button>
//                 </div>
//                 <p className="text-sm text-gray-500 mt-2">
//                   {product.quantity} available in stock
//                 </p>
//               </div>
              
//               {/* Action Buttons */}
//               <div className="space-y-4 mb-8">
//                 <button 
//                   onClick={(e) => handleBuyNow(e, product)}
//                   disabled={product.status === 'outOfStock'}
//                   className="w-full bg-sacred-crimson text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:transform-none flex items-center justify-center gap-2"
//                 >
//                   <ShoppingCart className="w-5 h-5" />
//                   Buy Now
//                 </button>
                
              
//               </div>

//               {/* Trust Badges */}
//               <div className="border-t border-rose-100 pt-6">
//                 <div className="grid grid-cols-3 gap-4">
//                   <div className="text-center">
//                     <Shield className="w-6 h-6 text-sacred-crimson mx-auto mb-2" />
//                     <p className="text-xs text-gray-600">Authentic Products</p>
//                   </div>
//                   <div className="text-center">
//                     <Truck className="w-6 h-6 text-sacred-crimson mx-auto mb-2" />
//                     <p className="text-xs text-gray-600">Free Shipping</p>
//                   </div>
//                   <div className="text-center">
//                     <Clock className="w-6 h-6 text-sacred-crimson mx-auto mb-2" />
//                     <p className="text-xs text-gray-600">Easy Returns</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Related Products */}
//         {relatedProducts.length > 0 && (
//           <div className="mb-12">
//             <div className="flex items-center justify-between mb-8">
//               <h2 className="text-2xl font-bold text-gray-900">Related Sacred Products</h2>
//               <Link 
//                 to="/products" 
//                 className="text-sacred-crimson hover:text-red-700 font-medium transition-colors flex items-center"
//               >
//                 View All Products
//                 <ChevronRight className="w-4 h-4 ml-1" />
//               </Link>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {relatedProducts.map((relatedProduct) => (
//                 <div key={relatedProduct._id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-rose-100">
//                   <div className="aspect-square overflow-hidden bg-gray-50 relative">
//                     {relatedProduct.imageUrl ? (
//                       <img 
//                         src={relatedProduct.imageUrl} 
//                         alt={relatedProduct.name}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                       />
//                     ) : (
//                       <div className="w-full h-full flex items-center justify-center">
//                         <Package className="w-16 h-16 text-gray-300" />
//                       </div>
//                     )}
//                     <div className="absolute top-3 left-3">
//                       <span className="inline-flex items-center bg-white/90 backdrop-blur-sm text-sacred-crimson px-2 py-1 rounded-full text-xs font-semibold shadow-sm">
//                         {relatedProduct.category}
//                       </span>
//                     </div>
//                   </div>
//                   <div className="p-5">
//                     <h3 className="font-bold text-gray-900 mb-3 text-lg leading-tight line-clamp-2 group-hover:text-sacred-crimson transition-colors">
//                       {relatedProduct.name}
//                     </h3>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center">
//                         <IndianRupee className="w-5 h-5 text-sacred-crimson" />
//                         <span className="text-xl font-bold text-sacred-crimson">{relatedProduct.price}</span>
//                       </div>
//                       <Link 
//                         to={`/product/${relatedProduct._id}`}
//                         className="bg-sacred-crimson text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2 text-sm font-medium"
//                       >
//                         <Eye className="w-4 h-4" />
//                         View
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
        
//         {/* Trust Badges Section */}
//         <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-8 mb-12 border border-rose-100">
//           <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Why Choose Our Sacred Products</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center group p-6 rounded-xl hover:bg-rose-50 transition-colors">
//               <div className="bg-gradient-to-br from-rose-100 to-rose-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
//                 <Shield className="w-8 h-8 text-sacred-crimson" />
//               </div>
//               <h4 className="text-xl font-bold text-gray-900 mb-3">Authenticity Guaranteed</h4>
//               <p className="text-gray-600 leading-relaxed">All our products are sourced directly from authentic spiritual centers and certified suppliers</p>
//             </div>
//             <div className="text-center group p-6 rounded-xl hover:bg-rose-50 transition-colors">
//               <div className="bg-gradient-to-br from-rose-100 to-rose-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
//                 <Truck className="w-8 h-8 text-sacred-crimson" />
//               </div>
//               <h4 className="text-xl font-bold text-gray-900 mb-3">Free Shipping</h4>
//               <p className="text-gray-600 leading-relaxed">Complimentary delivery on orders above ₹999 anywhere in India with secure packaging</p>
//             </div>
//             <div className="text-center group p-6 rounded-xl hover:bg-rose-50 transition-colors">
//               <div className="bg-gradient-to-br from-rose-100 to-rose-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
//                 <Clock className="w-8 h-8 text-sacred-crimson" />
//               </div>
//               <h4 className="text-xl font-bold text-gray-900 mb-3">Easy Returns</h4>
//               <p className="text-gray-600 leading-relaxed">Hassle-free 7-day return policy for any damaged or incorrect items with full refund</p>
//             </div>
//           </div>
//         </div>

//         {/* Recently Viewed */}
       
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;


import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ShoppingCart, Heart, Share2, Star, Clock, 
  Package, Check, Shield, Truck, IndianRupee, Plus, Minus, 
  Eye, Flame, Sparkles, ChevronRight, MapPin, Award, Leaf
} from 'lucide-react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setProducts } from './redux/authEcommerce';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('description');
  
  // Get products from Redux store
  const { products = [] } = useSelector((state) => state.ecommerce);

  const [quantity, setQuantity] = useState(() => {
    const savedQuantity = localStorage.getItem(`product_${id}_quantity`);
    return savedQuantity ? parseInt(savedQuantity, 10) : 1;
  });

  // Save quantity to localStorage whenever it changes
  useEffect(() => {
    if (id) {
      localStorage.setItem(`product_${id}_quantity`, quantity.toString());
    }
  }, [quantity, id]);

  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/products/get/${id}`, {
          withCredentials: true,
        });
        
        if (res.data.success) {
          setProduct(res.data.product);
          
          // If product not in Redux store, add it
          if (!products.find(p => p._id === res.data.product._id)) {
            dispatch(setProducts([...products, res.data.product]));
          }
        } else {
          toast.error("Failed to load product details");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        toast.error("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [dispatch, id, products]);

  // Fetch related products
  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        if (product && product.category) {
          const res = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/products/category/${product.category}?limit=6`, 
            { withCredentials: true }
          );
          
          if (res.data.success) {
            // Filter out the current product
            const filtered = res.data.products.filter(p => p._id !== product._id);
            setRelatedProducts(filtered.slice(0, 3));
          }
        }
      } catch (error) {
        console.error("Error fetching related products:", error);
      }
    };

    fetchRelatedProducts();
  }, [product]);

  // Handle Buy Now - navigate to checkout with current quantity
  const handleBuyNow = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    
    navigate('/checkout', { 
      state: { 
        product: {
          ...product,
          quantity: quantity,
          total: product.price * quantity
        }
      }
    });
  };

  const incrementQuantity = () => {
    setQuantity(prev => Math.min(prev + 1, product.quantity));
  };

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(prev - 1, 1));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#6a0dad] mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading sacred product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Package className="w-20 h-20 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Product Not Found</h2>
          <p className="text-gray-600 mb-8">The sacred product you're looking for doesn't exist.</p>
          <Link 
            to="/products"
            className="inline-flex items-center bg-[#6a0dad] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5a0c9d] transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Navigation */}
      <div className="bg-white shadow-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-[#6a0dad] transition-colors mr-6 group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back</span>
            </button>
            <nav className="flex items-center text-sm">
              <Link to="/products" className="text-gray-500 hover:text-[#6a0dad] transition-colors">
                Products
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              <span className="text-gray-500">{product.category}</span>
              <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              <span className="text-[#6a0dad] font-medium truncate max-w-xs">{product.name}</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 border border-purple-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Column - Image and Description */}
            <div className="p-8">
              {/* Product Image */}
              <div className="mb-8">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 shadow-inner border border-purple-100">
                  {product.imageUrl ? (
                    <img 
                      src={product.imageUrl} 
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Package className="w-24 h-24 text-gray-300" />
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center bg-white/90 backdrop-blur-sm text-[#6a0dad] px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg border border-purple-100">
                      {product.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tabbed Content */}
              <div className="border-b border-purple-100 mb-6">
                <div className="flex space-x-8">
                  <button
                    onClick={() => setActiveTab('description')}
                    className={`py-3 font-medium text-sm border-b-2 transition-colors ${
                      activeTab === 'description'
                        ? 'border-[#6a0dad] text-[#6a0dad]'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Description
                  </button>
                  <button
                    onClick={() => setActiveTab('benefits')}
                    className={`py-3 font-medium text-sm border-b-2 transition-colors ${
                      activeTab === 'benefits'
                        ? 'border-[#6a0dad] text-[#6a0dad]'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Sacred Benefits
                  </button>
                  <button
                    onClick={() => setActiveTab('shipping')}
                    className={`py-3 font-medium text-sm border-b-2 transition-colors ${
                      activeTab === 'shipping'
                        ? 'border-[#6a0dad] text-[#6a0dad]'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Shipping & Returns
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="space-y-6">
                {activeTab === 'description' && (
                  <div className="animate-fadeIn">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Sparkles className="w-5 h-5 text-[#6a0dad] mr-2" />
                      Product Description
                    </h3>
                    <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                      <p className="text-gray-700 leading-relaxed text-base">{product.description}</p>
                    </div>
                  </div>
                )}

                {activeTab === 'benefits' && (
                  <div className="animate-fadeIn">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Flame className="w-5 h-5 text-[#6a0dad] mr-2" />
                      Sacred Benefits
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        "Purifies energy and space",
                        "Enhances spiritual practices", 
                        "Supports physical wellness",
                        "Natural healing properties",
                        "Promotes mental clarity",
                        "Brings positive vibrations"
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start bg-white rounded-lg p-4 border border-purple-100 hover:shadow-md transition-shadow">
                          <div className="bg-[#6a0dad]/10 p-2 rounded-lg mr-4">
                            <Check className="w-5 h-5 text-[#6a0dad]" />
                          </div>
                          <span className="text-gray-700 text-sm font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'shipping' && (
                  <div className="animate-fadeIn">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Truck className="w-5 h-5 text-[#6a0dad] mr-2" />
                      Shipping & Returns
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-5 border border-purple-100">
                        <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <MapPin className="w-4 h-4 text-[#6a0dad] mr-2" />
                          Free Shipping
                        </h5>
                        <p className="text-gray-600 text-sm">Complimentary delivery on orders above ₹999 anywhere in India with secure packaging</p>
                      </div>
                      <div className="bg-white rounded-lg p-5 border border-purple-100">
                        <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Clock className="w-4 h-4 text-[#6a0dad] mr-2" />
                          Delivery Time
                        </h5>
                        <p className="text-gray-600 text-sm">Standard delivery within 2-3 business days across major cities</p>
                      </div>
                      <div className="bg-white rounded-lg p-5 border border-purple-100">
                        <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Shield className="w-4 h-4 text-[#6a0dad] mr-2" />
                          Returns Policy
                        </h5>
                        <p className="text-gray-600 text-sm">Hassle-free 7-day return policy for any damaged or incorrect items with full refund</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Right Column - Product Details */}
            <div className="p-8 bg-gradient-to-br from-purple-25 to-white">
              {/* Product Header */}
              <div className="mb-6">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {product.name}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-purple-100">
                    <div className="flex items-center mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < 4.8 
                              ? 'text-amber-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm font-medium">4.8 (127 reviews)</span>
                     <span className="ml-3 text-gray-600 text-sm font-medium">{product.size}</span>
                  </div>
                </div>
              </div>
              
              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <div className="flex items-center">
                    <IndianRupee className="w-8 h-8 text-[#6a0dad]" />
                    <span className="text-4xl font-bold text-[#6a0dad]">{product.price}</span>
                  </div>
                  <span className="text-green-600 font-medium bg-green-50 px-2 py-1 rounded text-sm">
                    Inclusive of all taxes
                  </span>
                </div>
                <p className="text-gray-600 text-sm">Free shipping above ₹999 • Easy returns</p>
              </div>
              
              {/* Product Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-lg p-4 border border-purple-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-2">
                    <Package className="w-5 h-5 text-[#6a0dad] mr-2" />
                    <span className="text-gray-600 text-sm">Status</span>
                  </div>
                  <span className={`font-semibold ${product.status === 'inStock' ? 'text-green-600' : 'text-red-600'}`}>
                    {product.status === 'inStock' ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                <div className="bg-white rounded-lg p-4 border border-purple-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-2">
                    <Award className="w-5 h-5 text-[#6a0dad] mr-2" />
                    <span className="text-gray-600 text-sm">Quality</span>
                  </div>
                  <span className="font-semibold text-gray-900">Premium</span>
                </div>
                <div className="bg-white rounded-lg p-4 border border-purple-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-2">
                    <Truck className="w-5 h-5 text-[#6a0dad] mr-2" />
                    <span className="text-gray-600 text-sm">Delivery</span>
                  </div>
                  <span className="font-semibold text-gray-900">2-3 days</span>
                </div>
                <div className="bg-white rounded-lg p-4 border border-purple-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-2">
                    <Leaf className="w-5 h-5 text-[#6a0dad] mr-2" />
                    <span className="text-gray-600 text-sm">In Stock</span>
                  </div>
                  <span className="font-semibold text-gray-900">{product.quantity} units</span>
                </div>
              </div>
              
              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="block text-gray-900 font-semibold mb-3">Quantity:</label>
                <div className="flex items-center max-w-xs">
                  <button 
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    className="bg-white border border-purple-200 text-[#6a0dad] p-3 rounded-l-lg hover:bg-purple-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <div className="bg-white border-t border-b border-purple-200 px-6 py-3 text-lg font-semibold text-gray-900 min-w-[80px] text-center">
                    {quantity}
                  </div>
                  <button 
                    onClick={incrementQuantity}
                    disabled={quantity >= product.quantity}
                    className="bg-white border border-purple-200 text-[#6a0dad] p-3 rounded-r-lg hover:bg-purple-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {product.quantity} available in stock
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-4 mb-8">
                <button 
                  onClick={(e) => handleBuyNow(e, product)}
                  disabled={product.status === 'outOfStock'}
                  className="w-full bg-[#6a0dad] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#5a0c9d] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:transform-none flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Buy Now
                </button>
              </div>

              {/* Trust Badges */}
              <div className="border-t border-purple-100 pt-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Shield className="w-6 h-6 text-[#6a0dad] mx-auto mb-2" />
                    <p className="text-xs text-gray-600">Authentic Products</p>
                  </div>
                  <div className="text-center">
                    <Truck className="w-6 h-6 text-[#6a0dad] mx-auto mb-2" />
                    <p className="text-xs text-gray-600">Free Shipping</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-6 h-6 text-[#6a0dad] mx-auto mb-2" />
                    <p className="text-xs text-gray-600">Easy Returns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Related Sacred Products</h2>
              <Link 
                to="/products" 
                className="text-[#6a0dad] hover:text-[#ff00ff] font-medium transition-colors flex items-center"
              >
                View All Products
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct._id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-purple-100">
                  <div className="aspect-square overflow-hidden bg-gray-50 relative">
                    {relatedProduct.imageUrl ? (
                      <img 
                        src={relatedProduct.imageUrl} 
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Package className="w-16 h-16 text-gray-300" />
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center bg-white/90 backdrop-blur-sm text-[#6a0dad] px-2 py-1 rounded-full text-xs font-semibold shadow-sm">
                        {relatedProduct.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg leading-tight line-clamp-2 group-hover:text-[#6a0dad] transition-colors">
                      {relatedProduct.name}
                    </h3>
                    {relatedProduct.size && (
  <p className="text-sm text-gray-500 mb-3">
    Size: <span className="font-medium text-gray-700">{relatedProduct.size}</span>
  </p>
)}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <IndianRupee className="w-5 h-5 text-[#6a0dad]" />
                        <span className="text-xl font-bold text-[#6a0dad]">{relatedProduct.price}</span>
                      </div>
                      <Link 
                        to={`/product/${relatedProduct._id}`}
                        className="bg-[#6a0dad] text-white px-4 py-2 rounded-lg hover:bg-[#5a0c9d] transition-colors flex items-center gap-2 text-sm font-medium"
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Trust Badges Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-8 mb-12 border border-purple-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Why Choose Our Sacred Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group p-6 rounded-xl hover:bg-purple-50 transition-colors">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Shield className="w-8 h-8 text-[#6a0dad]" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Authenticity Guaranteed</h4>
              <p className="text-gray-600 leading-relaxed">All our products are sourced directly from authentic spiritual centers and certified suppliers</p>
            </div>
            <div className="text-center group p-6 rounded-xl hover:bg-purple-50 transition-colors">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Truck className="w-8 h-8 text-[#6a0dad]" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Free Shipping</h4>
              <p className="text-gray-600 leading-relaxed">Complimentary delivery on orders above ₹999 anywhere in India with secure packaging</p>
            </div>
            <div className="text-center group p-6 rounded-xl hover:bg-purple-50 transition-colors">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Clock className="w-8 h-8 text-[#6a0dad]" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Easy Returns</h4>
              <p className="text-gray-600 leading-relaxed">Hassle-free 7-day return policy for any damaged or incorrect items with full refund</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;