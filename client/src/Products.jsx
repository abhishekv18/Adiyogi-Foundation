
// import React, { useState, useEffect, useRef, useMemo } from 'react';
// import { Search, Calendar, ShoppingCart, Flame, Star, Flower, X, ArrowRight, Eye, Clock, Sparkles, Heart, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon, IndianRupee, Package, Grid, List, ChevronDown, Users, PackageIcon, Filter } from 'lucide-react';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { setProducts } from './redux/authEcommerce';
// import { Helmet } from 'react-helmet';
// const Products = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.auth.user);
//   const { products = [] } = useSelector((state) => state.ecommerce);
//   const shareMenuRef = useRef(null);
//   const categoryMenuRef = useRef(null);
//   const sortMenuRef = useRef(null);
  
//   // Local states
//   const [loading, setLoading] = useState(false);
//   const [filteredProducts, setFilteredProducts] = useState(products);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isFetching, setIsFetching] = useState(true);
//   const [shareMenu, setShareMenu] = useState({ open: false, productId: null, product: null });
//   const [categoryMenu, setCategoryMenu] = useState(false);
//   const [sortMenu, setSortMenu] = useState(false);
//   const [wishlist, setWishlist] = useState(new Set());
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [viewMode, setViewMode] = useState('grid');
//   const [sortBy, setSortBy] = useState('newest');
//   const [priceRange, setPriceRange] = useState([0, 10000]);
//   const [showFilters, setShowFilters] = useState(false);

//   // Sort options
//   const sortOptions = [
//     { id: 'newest', name: 'Newest First', icon: Clock },
//     { id: 'price-low', name: 'Price: Low to High', icon: IndianRupee },
//     { id: 'price-high', name: 'Price: High to Low', icon: IndianRupee },
//     { id: 'name', name: 'Name: A to Z', icon: List }
//   ];

//   // Get unique categories
//   const categories = useMemo(() => {
//     const uniqueCategories = [...new Set(products.map(product => product.category))].filter(Boolean);
//     return ['all', ...uniqueCategories];
//   }, [products]);

//   // Get max price for range slider
//   const maxPrice = useMemo(() => {
//     return products.length ? Math.max(...products.map(p => p.price)) + 100 : 10000;
//   }, [products]);

//   useEffect(() => {
//     if (user) {
//       navigate('/admin-dashboard');
//     }
//   }, [user]);

//   // Close menus when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (shareMenuRef.current && !shareMenuRef.current.contains(event.target)) {
//         setShareMenu({ open: false, productId: null, product: null });
//       }
//       if (categoryMenuRef.current && !categoryMenuRef.current.contains(event.target)) {
//         setCategoryMenu(false);
//       }
//       if (sortMenuRef.current && !sortMenuRef.current.contains(event.target)) {
//         setSortMenu(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Fetch products with polling
//   useEffect(() => {
//     let isMounted = true;
//     const POLLING_INTERVAL = 15000;

//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/products/get`, {
//           withCredentials: true,
//         });
        
//         if (res.data.success && isMounted) {
//           const sortedProducts = [...res.data.products].sort(
//             (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//           );

//           dispatch(setProducts(sortedProducts));
//           setFilteredProducts(sortedProducts);
          
//           if (res.data.products.length !== products.length) {
//             toast('🛍️ New sacred products have been added', {
//               autoClose: 1500,
//               hideProgressBar: true,
//               className: 'bg-red-300 text-white font-semibold text-center shadow-lg rounded-md',
//               style: {
//                 background: '#fca5a5',
//                 fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)',
//                 padding: 'clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.625rem, 2vw, 1rem)',
//                 width: 'fit-content',
//                 minWidth: '200px',
//                 maxWidth: 'min(90vw, 400px)',
//                 boxSizing: 'border-box',
//                 wordBreak: 'break-word',
//                 margin: 'clamp(0.5rem, 1.5vw, 1rem)',
//                 borderRadius: '0.375rem',
//                 boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
//                 lineHeight: '1.25',
//               },
//               bodyStyle: {
//                 margin: 0,
//                 padding: 0,
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 gap: '0.5rem',
//               },
//               position: 'top-center',
//               icon: false,
//             });
//           }
//         }
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         if (isMounted) {
//           toast.error("Failed to load sacred products");
//         }
//       } finally {
//         if (isMounted) {
//           setIsFetching(false);
//         }
//       }
//     };

//     fetchProducts();
//     const intervalId = setInterval(fetchProducts, POLLING_INTERVAL);

//     return () => {
//       isMounted = false;
//       clearInterval(intervalId);
//     };
//   }, [dispatch, products.length]);

//   // Update filtered products when filters change
//   useEffect(() => {
//     let filtered = products;
    
//     // Filter by category
//     if (selectedCategory !== 'all') {
//       filtered = filtered.filter(product => 
//         product.category.toLowerCase() === selectedCategory.toLowerCase()
//       );
//     }
    
//     // Filter by search term
//     if (searchTerm) {
//       filtered = filtered.filter(product =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         product.category.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
    
//     // Filter by price range
//     filtered = filtered.filter(product => 
//       product.price >= priceRange[0] && product.price <= priceRange[1]
//     );
    
//     // Sort products
//     switch(sortBy) {
//       case 'newest':
//         filtered = [...filtered].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//         break;
//       case 'price-low':
//         filtered = [...filtered].sort((a, b) => a.price - b.price);
//         break;
//       case 'price-high':
//         filtered = [...filtered].sort((a, b) => b.price - a.price);
//         break;
//       case 'name':
//         filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
//         break;
//       default:
//         break;
//     }
    
//     setFilteredProducts(filtered);
//   }, [searchTerm, products, selectedCategory, sortBy, priceRange]);

//   const truncateDescription = (description, maxLength = 120) => {
//     return description.length > maxLength ? description.substring(0, maxLength) + '...' : description;
//   };

//   // Share functionality
//   const handleShareClick = (e, product) => {
//     e.preventDefault();
//     e.stopPropagation();
    
//     setShareMenu({
//       open: !shareMenu.open || shareMenu.productId !== product._id,
//       productId: product._id,
//       product: product
//     });
//   };

//   const shareProduct = async (platform, product) => {
//     if (!product) return;
    
//     const productUrl = `${window.location.origin}/product/${product._id}`;
//     const text = `Check out this sacred product: ${product.name}`;
    
//     let shareUrl = '';
    
//     switch(platform) {
//       case 'facebook':
//         shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`;
//         break;
//       case 'twitter':
//         shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(productUrl)}`;
//         break;
//       case 'linkedin':
//         shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(productUrl)}`;
//         break;
//       case 'copy':
//         try {
//           await navigator.clipboard.writeText(productUrl);
//           toast.success('Link copied to clipboard!', {
//             autoClose: 2000,
//             position: 'bottom-center'
//           });
//         } catch (err) {
//           const textArea = document.createElement('textarea');
//           textArea.value = productUrl;
//           document.body.appendChild(textArea);
//           textArea.select();
//           try {
//             document.execCommand('copy');
//             toast.success('Link copied to clipboard!');
//           } catch (err) {
//             toast.error('Failed to copy link');
//           }
//           document.body.removeChild(textArea);
//         }
//         setShareMenu({ open: false, productId: null, product: null });
//         return;
//       default:
//         return;
//     }
    
//     if (shareUrl) {
//       window.open(shareUrl, '_blank', 'noopener,noreferrer');
//     }
//     setShareMenu({ open: false, productId: null, product: null });
//   };

//   // Buy now functionality
//   const handleBuyNow = (e, product) => {
//     e.preventDefault();
//     e.stopPropagation();
    
//     navigate('/checkout', { 
//       state: { 
//         product: {
//           ...product,
//           quantity: 1,
//           total: product.price * 1
//         }
//       }
//     });
//   };

//   // Clear all filters
//   const clearFilters = () => {
//     setSearchTerm('');
//     setSelectedCategory('all');
//     setSortBy('newest');
//     setPriceRange([0, maxPrice]);
//   };

//   // Skeleton loader components
//   const ProductSkeleton = () => (
//     <div className="bg-white rounded-xl overflow-hidden shadow-md h-full animate-pulse">
//       <div className="relative h-60 bg-gray-200"></div>
//       <div className="p-5 flex flex-col h-64">
//         <div className="mb-4">
//           <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
//           <div className="h-4 bg-gray-200 rounded w-1/2"></div>
//         </div>
//         <div className="mb-4 flex-grow space-y-2">
//           <div className="h-4 bg-gray-200 rounded"></div>
//           <div className="h-4 bg-gray-200 rounded"></div>
//           <div className="h-4 bg-gray-200 rounded w-5/6"></div>
//         </div>
//         <div className="mt-auto">
//           <div className="flex justify-between mb-3">
//             <div className="h-6 bg-gray-200 rounded w-20"></div>
//             <div className="h-4 bg-gray-200 rounded w-16"></div>
//           </div>
//           <div className="h-10 bg-gray-200 rounded"></div>
//         </div>
//       </div>
//     </div>
//   );

//   const ProductListSkeleton = () => (
//     <div className="bg-white rounded-xl overflow-hidden shadow-md h-full p-5 flex animate-pulse">
//       <div className="relative h-32 w-32 bg-gray-200 rounded mr-5"></div>
//       <div className="flex-1 flex flex-col">
//         <div className="mb-4">
//           <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
//           <div className="h-4 bg-gray-200 rounded w-1/2"></div>
//         </div>
//         <div className="mb-4 flex-grow space-y-2">
//           <div className="h-4 bg-gray-200 rounded"></div>
//           <div className="h-4 bg-gray-200 rounded"></div>
//           <div className="h-4 bg-gray-200 rounded w-5/6"></div>
//         </div>
//         <div className="mt-auto flex justify-between items-center">
//           <div className="h-6 bg-gray-200 rounded w-20"></div>
//           <div className="h-10 bg-gray-200 rounded w-32"></div>
//         </div>
//       </div>
//     </div>
//   );

//   // Calculate product stats
//   const productStats = {
//     totalProducts: products.length,
//     inStockProducts: products.filter(p => p.status === 'inStock').length,
//     outOfStockProducts: products.filter(p => p.status === 'outOfStock').length,
//     totalValue: products.reduce((sum, product) => sum + (product.price * product.quantity), 0).toFixed(2)
//   };

//   return (
//     <>
//     <Helmet>
//   <title>Products | Adiyogi Foundation</title>
//   <meta name="description" content="Shop spiritual products, books, meditation tools, and cultural items from Adiyogi Foundation that support Dharma revival." />
//   <meta name="keywords" content="Adiyogi Foundation Products, Spiritual Shop, Meditation Tools, Books, Yoga Accessories" />
//   <link rel="canonical" href="https://www.adiyogifoundation.org.in/products" />

//   <meta property="og:title" content="Products | Adiyogi Foundation" />
//   <meta property="og:description" content="Browse Adiyogi Foundation’s spiritual products and support Dharma revival." />
//   <meta property="og:url" content="https://www.adiyogifoundation.org.in/products" />
//   <meta property="og:image" content="https://www.adiyogifoundation.org.in/Adiyogifoundation logo_02.png" />

//   <meta name="twitter:card" content="summary_large_image" />
//   <meta name="twitter:title" content="Products | Adiyogi Foundation" />
//   <meta name="twitter:description" content="Shop authentic spiritual and cultural products from Adiyogi Foundation." />
//   <meta name="twitter:image" content="https://www.adiyogifoundation.org.in/Adiyogifoundation logo_02.png" />
// </Helmet>
//   <div className="min-h-screen bg-rose-50">
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-br from-rose-50 via-rose-100 to-red-50 pt-16 pb-16 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-red-800/20"></div>
//         <div
//           className="absolute inset-0 bg-center bg-cover opacity-10 bg-scroll"
//           style={{
//             backgroundImage: `url('https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGluZGlhbiUyMHNwaWNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60')`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         ></div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
//           <div className="flex justify-center mb-6">
//             <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
//               <Flame className="w-8 h-8 text-sacred-crimson animate-pulse" />
//               <Package className="w-8 h-8 text-sacred-crimson" />
//               <Flower className="w-8 h-8 text-sacred-crimson animate-pulse" style={{ animationDelay: '1s' }} />
//             </div>
//           </div>

//           <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 tracking-tight">
//             Sacred <span className="text-sacred-crimson relative">Products</span>
//           </h1>

//           <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
//             Discover sacred products, spiritual tools, and divine offerings that enhance your spiritual journey
//             and bring consciousness into your daily life.
//           </p>

//           <div className="flex justify-center items-center space-x-4 mb-8">
//             <div className="w-16 h-1 bg-sacred-crimson rounded-full"></div>
//             <Sparkles className="w-6 h-6 text-sacred-crimson" />
//             <div className="w-16 h-1 bg-sacred-crimson rounded-full"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
//             <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300">
//               <Package className="w-8 h-8 text-sacred-crimson mx-auto mb-3" />
//               <div className="text-2xl font-bold text-gray-800">{isFetching ? '--' : productStats.totalProducts}</div>
//               <div className="text-sm text-gray-600">Total Products</div>
//             </div>
//             <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300">
//               <Flame className="w-8 h-8 text-sacred-crimson mx-auto mb-3" />
//               <div className="text-2xl font-bold text-gray-800">{productStats.inStockProducts}</div>
//               <div className="text-sm text-gray-600">In Stock</div>
//             </div>
//             <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300">
//               <Star className="w-8 h-8 text-sacred-crimson mx-auto mb-3" />
//               <div className="text-2xl font-bold text-gray-800">{productStats.outOfStockProducts}</div>
//               <div className="text-sm text-gray-600">Out of Stock</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Search and Filter Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
//         <div className="bg-white rounded-2xl shadow-xl p-6 mb-10 border border-rose-100">
//           <div className="text-center mb-6">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
//               Discover Sacred Products
//             </h2>
//             <p className="text-gray-600 max-w-lg mx-auto">
//               Find spiritual tools, sacred items, and divine offerings for your journey.
//             </p>
//           </div>
          
//           <div className="flex flex-col md:flex-row gap-4 mb-6">
//             <div className="relative flex-1">
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <input
//                 type="text"
//                 placeholder="Search sacred products, spiritual tools, offerings..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-12 pr-12 py-3 border-2 border-rose-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-base transition-all duration-300 placeholder-gray-400"
//               />
//               {searchTerm && (
//                 <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
//                   <button
//                     onClick={() => setSearchTerm('')}
//                     className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
//                     aria-label="Clear search"
//                   >
//                     <X className="w-5 h-5" />
//                   </button>
//                 </div>
//               )}
//             </div>
            
//             {/* Mobile Filter Toggle */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="flex items-center gap-2 w-full justify-center bg-rose-50 border-2 border-rose-100 rounded-xl pl-4 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-base cursor-pointer hover:bg-rose-100 transition-colors"
//               >
//                 <Filter className="w-5 h-5" />
//                 <span>Filters</span>
//                 <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
//               </button>
//             </div>
            
//             {/* Desktop Filter Controls */}
//             <div className="hidden md:flex gap-3">
//               {/* Category Filter Dropdown */}
//               <div className="relative" ref={categoryMenuRef}>
//                 <button
//                   onClick={() => setCategoryMenu(!categoryMenu)}
//                   className="flex items-center gap-2 bg-rose-50 border-2 border-rose-100 rounded-xl pl-4 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-base cursor-pointer hover:bg-rose-100 transition-colors"
//                 >
//                   <Filter className="w-5 h-5" />
//                   <span>Category</span>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${categoryMenu ? 'rotate-180' : ''}`} />
//                 </button>
                
//                 {categoryMenu && (
//                   <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-rose-100 z-50 overflow-hidden">
//                     <div className="p-2 max-h-60 overflow-y-auto">
//                       {categories.map(category => (
//                         <button
//                           key={category}
//                           onClick={() => {
//                             setSelectedCategory(category);
//                             setCategoryMenu(false);
//                           }}
//                           className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
//                             selectedCategory === category
//                               ? 'bg-sacred-crimson text-white'
//                               : 'text-gray-700 hover:bg-rose-50'
//                           }`}
//                         >
//                           {category === 'all' ? 'All Categories' : category}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
              
//               {/* Sort Dropdown */}
//               <div className="relative" ref={sortMenuRef}>
//                 <button
//                   onClick={() => setSortMenu(!sortMenu)}
//                   className="flex items-center gap-2 bg-rose-50 border-2 border-rose-100 rounded-xl pl-4 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-base cursor-pointer hover:bg-rose-100 transition-colors min-w-[180px] justify-between"
//                 >
//                   <span>{sortOptions.find(opt => opt.id === sortBy)?.name}</span>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${sortMenu ? 'rotate-180' : ''}`} />
//                 </button>
                
//                 {sortMenu && (
//                   <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-2xl border border-rose-100 z-50 overflow-hidden">
//                     <div className="p-2">
//                       {sortOptions.map(option => {
//                         const IconComponent = option.icon;
//                         return (
//                           <button
//                             key={option.id}
//                             onClick={() => {
//                               setSortBy(option.id);
//                               setSortMenu(false);
//                             }}
//                             className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
//                               sortBy === option.id
//                                 ? 'bg-sacred-crimson text-white'
//                                 : 'text-gray-700 hover:bg-rose-50'
//                             }`}
//                           >
//                             <IconComponent className="w-4 h-4" />
//                             {option.name}
//                           </button>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 )}
//               </div>
              
//               {/* View Toggle */}
//               <div className="flex bg-rose-50 rounded-xl overflow-hidden border-2 border-rose-100">
//                 <button
//                   onClick={() => setViewMode('grid')}
//                   className={`p-4 transition-colors ${viewMode === 'grid' ? 'bg-sacred-crimson text-white' : 'text-gray-600 hover:bg-rose-100'}`}
//                   aria-label="Grid view"
//                 >
//                   <Grid className="w-5 h-5" />
//                 </button>
//                 <button
//                   onClick={() => setViewMode('list')}
//                   className={`p-4 transition-colors ${viewMode === 'list' ? 'bg-sacred-crimson text-white' : 'text-gray-600 hover:bg-rose-100'}`}
//                   aria-label="List view"
//                 >
//                   <List className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           </div>
          
//           {/* Mobile Filters Panel */}
//           {showFilters && (
//             <div className="md:hidden bg-rose-50 rounded-xl p-4 mb-4">
//               <h3 className="font-semibold text-gray-800 mb-3">Filters</h3>
              
//               <div className="mb-4">
//                 <h4 className="text-sm font-medium text-gray-700 mb-2">Category</h4>
//                 <div className="grid grid-cols-2 gap-2">
//                   {categories.map(category => (
//                     <button
//                       key={category}
//                       onClick={() => setSelectedCategory(category)}
//                       className={`px-3 py-2 rounded-lg text-sm transition-colors ${
//                         selectedCategory === category
//                           ? 'bg-sacred-crimson text-white'
//                           : 'bg-white text-gray-700'
//                       }`}
//                     >
//                       {category === 'all' ? 'All' : category}
//                     </button>
//                   ))}
//                 </div>
//               </div>
              
//               <div className="mb-4">
//                 <h4 className="text-sm font-medium text-gray-700 mb-2">Price Range</h4>
//                 <div className="px-2">
//                   <input
//                     type="range"
//                     min="0"
//                     max={maxPrice}
//                     value={priceRange[1]}
//                     onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
//                     className="w-full h-2 bg-rose-200 rounded-lg appearance-none cursor-pointer"
//                   />
//                   <div className="flex justify-between text-xs text-gray-600 mt-1">
//                     <span>₹0</span>
//                     <span>₹{priceRange[1]}</span>
//                   </div>
//                 </div>
//               </div>
              
//               <div>
//                 <h4 className="text-sm font-medium text-gray-700 mb-2">Sort By</h4>
//                 <div className="grid grid-cols-2 gap-2">
//                   {sortOptions.map(option => (
//                     <button
//                       key={option.id}
//                       onClick={() => setSortBy(option.id)}
//                       className={`px-3 py-2 rounded-lg text-sm transition-colors ${
//                         sortBy === option.id
//                           ? 'bg-sacred-crimson text-white'
//                           : 'bg-white text-gray-700'
//                       }`}
//                     >
//                       {option.name}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
          
//           {/* Desktop Price Filter */}
//           <div className="hidden md:block mb-4">
//             <h4 className="text-sm font-medium text-gray-700 mb-2">Price Range: ₹0 - ₹{priceRange[1]}</h4>
//             <input
//               type="range"
//               min="0"
//               max={maxPrice}
//               value={priceRange[1]}
//               onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
//               className="w-full h-2 bg-rose-200 rounded-lg appearance-none cursor-pointer"
//             />
//           </div>
          
//           {/* Active Filters Display */}
//           {(searchTerm || selectedCategory !== 'all' || priceRange[1] < maxPrice) && (
//             <div className="flex flex-wrap gap-3 items-center">
//               <span className="text-sm font-medium text-gray-700">Active filters:</span>
              
//               {selectedCategory !== 'all' && (
//                 <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sacred-crimson/20 text-sacred-crimson">
//                   Category: {selectedCategory}
//                   <button
//                     onClick={() => setSelectedCategory('all')}
//                     className="ml-2 hover:text-sacred-crimson/70"
//                   >
//                     <X className="w-3 h-3" />
//                   </button>
//                 </span>
//               )}
              
//               {priceRange[1] < maxPrice && (
//                 <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sacred-crimson/20 text-sacred-crimson">
//                   Max Price: ₹{priceRange[1]}
//                   <button
//                     onClick={() => setPriceRange([0, maxPrice])}
//                     className="ml-2 hover:text-sacred-crimson/70"
//                   >
//                     <X className="w-3 h-3" />
//                   </button>
//                 </span>
//               )}
              
//               {searchTerm && (
//                 <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
//                   Search: "{searchTerm}"
//                   <button
//                     onClick={() => setSearchTerm('')}
//                     className="ml-2 hover:text-blue-500"
//                   >
//                     <X className="w-3 h-3" />
//                   </button>
//                 </span>
//               )}
              
//               <button
//                 onClick={clearFilters}
//                 className="text-sm text-gray-500 hover:text-gray-700 underline transition-colors"
//               >
//                 Clear all filters
//               </button>
//             </div>
//           )}
          
//           {searchTerm && (
//             <div className="mt-4 text-center">
//               <p className="text-sm text-gray-500">
//                 Found {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} matching "{searchTerm}"
//               </p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Products Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20 relative">
//         {isFetching ? (
//           <div className={`gap-6 md:gap-8 ${viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'space-y-6'}`}>
//             {[...Array(8)].map((_, index) => (
//               viewMode === 'grid' ? <ProductSkeleton key={index} /> : <ProductListSkeleton key={index} />
//             ))}
//           </div>
//         ) : (
//           <>
//             <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'space-y-6'} gap-6 md:gap-8`}>
//               {filteredProducts.map((product, index) => (
//                 viewMode === 'grid' ? (
//                   // Grid View Card
//                   <div
//                     key={product._id}
//                     className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group relative flex flex-col h-full border border-gray-100"
//                   >
//                     {/* Number badge */}
//                     <div className="absolute top-4 left-4 z-10 bg-sacred-crimson text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-md">
//                       {index+1}
//                     </div>
                    
//                     {/* Share button */}
//                     <div className="absolute top-4 right-4 z-20">
//                       <button
//                         onClick={(e) => handleShareClick(e, product)}
//                         className="bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-md hover:shadow-lg hover:bg-white hover:scale-110"
//                         aria-label="Share this product"
//                       >
//                         <Share2 className="w-5 h-5 text-sacred-crimson" />
//                       </button>
//                     </div>

//                     {/* Image */}
//                     <Link to={`/product/${product._id}`} className="relative overflow-hidden group h-60">
//                       {product.imageUrl ? (
//                         <img
//                           src={product.imageUrl}
//                           alt={product.name}
//                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                         />
//                       ) : (
//                         <div className="w-full h-full bg-gray-100 flex items-center justify-center">
//                           <Package className="w-12 h-12 text-gray-300" />
//                         </div>
//                       )}
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                       <div className="absolute top-4 right-16 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
//                         <Eye className="w-5 h-5 text-sacred-crimson" />
//                       </div>
//                       {product.status === 'outOfStock' && (
//                         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white px-4 py-2 rounded-lg font-bold">
//                           Out of Stock
//                         </div>
//                       )}
//                     </Link>
                    
//                     {/* Content area */}
//                     <div className="p-5 flex flex-col flex-1">
//                       <div className="mb-4">
//                         <Link to={`/product/${product._id}`}>
//                           <h3 className="text-xl font-bold text-gray-800 group-hover:text-sacred-crimson transition-colors duration-300 leading-tight line-clamp-2 mb-2">
//                             {product.name}
//                           </h3>
//                         </Link>
//                         <span className="inline-block bg-sacred-crimson/10 text-sacred-crimson text-xs font-medium px-2 py-1 rounded-full">
//                           {product.category}
//                         </span>
                        
//                         {/* Rating Section */}
//                         <div className="flex items-center mt-3">
//                           <div className="flex text-yellow-400">
//                             {[...Array(5)].map((_, i) => (
//                               <Star key={i} className="w-4 h-4 fill-current" />
//                             ))}
//                           </div>
//                           <span className="ml-2 text-sm font-medium text-gray-700">4.8</span>
//                           <span className="mx-2 text-gray-400">•</span>
//                           <span className="text-xs text-gray-500">127 reviews</span>
//                         </div>
//                       </div>
                      
//                       <div className="mb-4 flex-grow">
//                         <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
//                           {truncateDescription(product.description, 120)}
//                         </p>
//                       </div>
                      
//                       <div className="mt-auto">
//                         <div className="flex items-center justify-between mb-4">
//                           <div className="flex items-center">
//                             <IndianRupee className="w-5 h-5 text-sacred-crimson" />
//                             <span className="text-xl font-bold text-sacred-crimson">{product.price}</span>
//                           </div>
//                           <div className="flex items-center text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
//                             <Package className="w-3 h-3 mr-1" />
//                             <span>{product.quantity} in stock</span>
//                           </div>
//                         </div>
                        
//                         <div className="flex gap-3">
//                           <button
//                             onClick={(e) => handleBuyNow(e, product)}
//                             disabled={product.status === 'outOfStock'}
//                             className="flex-1 bg-red-700 text-white py-2.5 rounded-xl font-semibold hover:bg-red-800 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center group/btn disabled:opacity-50 disabled:cursor-not-allowed text-sm"
//                           >
//                             <span className="flex items-center">
//                               Buy Now
//                               <ShoppingCart className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
//                             </span>
//                           </button>
                          
//                           <Link
//                             to={`/product/${product._id}`}
//                             className="bg-sacred-crimson text-white px-4 py-2.5 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center group/btn"
//                           >
//                             <Eye className="w-4 h-4" />
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   // List View Card
//                   <div
//                     key={product._id}
//                     className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group flex flex-col md:flex-row border border-gray-100"
//                   >
//                     <Link to={`/product/${product._id}`} className="relative overflow-hidden md:w-64 h-48 md:h-auto flex-shrink-0">
//                       {product.imageUrl ? (
//                         <img
//                           src={product.imageUrl}
//                           alt={product.name}
//                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                         />
//                       ) : (
//                         <div className="w-full h-full bg-gray-100 flex items-center justify-center">
//                           <Package className="w-12 h-12 text-gray-300" />
//                         </div>
//                       )}
//                       {product.status === 'outOfStock' && (
//                         <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
//                           Out of Stock
//                         </div>
//                       )}
//                       <div className="absolute top-3 right-3 bg-sacred-crimson text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-sm">
//                         {index+1}
//                       </div>
//                     </Link>
                    
//                     <div className="p-5 flex-1 flex flex-col">
//                       <div className="flex justify-between items-start mb-4">
//                         <div className="flex-1">
//                           <span className="inline-block bg-sacred-crimson/10 text-sacred-crimson px-2 py-1 rounded-full text-xs font-medium mb-2">
//                             {product.category}
//                           </span>
//                           <Link to={`/product/${product._id}`}>
//                             <h3 className="text-xl font-bold text-gray-800 group-hover:text-sacred-crimson transition-colors duration-300 mb-2">
//                               {product.name}
//                             </h3>
//                           </Link>
                          
//                           {/* Rating Section for List View */}
//                           <div className="flex items-center">
//                             <div className="flex text-yellow-400">
//                               {[...Array(5)].map((_, i) => (
//                                 <Star key={i} className="w-4 h-4 fill-current" />
//                               ))}
//                             </div>
//                             <span className="ml-2 text-sm font-medium text-gray-700">4.8</span>
//                             <span className="mx-2 text-gray-400">•</span>
//                             <span className="text-xs text-gray-500">127 reviews</span>
//                           </div>
//                         </div>
                        
//                         <button
//                           onClick={(e) => handleShareClick(e, product)}
//                           className="bg-white rounded-full p-2 shadow-sm hover:shadow-md hover:bg-rose-50 transition-all border border-gray-100"
//                           aria-label="Share this product"
//                         >
//                           <Share2 className="w-4 h-4 text-sacred-crimson" />
//                         </button>
//                       </div>
                      
//                       <div className="mb-4 flex-grow">
//                         <p className="text-sm text-gray-600 leading-relaxed">
//                           {truncateDescription(product.description, 160)}
//                         </p>
//                       </div>
                      
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center space-x-3">
//                           <div className="flex items-center">
//                             <IndianRupee className="w-5 h-5 text-sacred-crimson" />
//                             <span className="text-xl font-bold text-sacred-crimson">{product.price}</span>
//                           </div>
//                           <div className="flex items-center text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
//                             <Package className="w-3 h-3 mr-1" />
//                             <span>{product.quantity} in stock</span>
//                           </div>
//                         </div>
                        
//                         <div className="flex gap-2">
//                           <button
//                             onClick={(e) => handleBuyNow(e, product)}
//                             disabled={product.status === 'outOfStock'}
//                             className="bg-red-700 text-white py-2 px-4 rounded-xl font-semibold hover:bg-red-800 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed text-sm"
//                           >
//                             <ShoppingCart className="w-4 h-4 mr-1" />
//                             Buy Now
//                           </button>
                          
//                           <Link
//                             to={`/product/${product._id}`}
//                             className="bg-sacred-crimson text-white px-3 py-2 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
//                           >
//                             <Eye className="w-4 h-4" />
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )
//               ))}
//             </div>
            
//             {filteredProducts.length === 0 && (
//               <div className="text-center py-16">
//                 <div className="relative inline-block mb-6">
//                   <Package className="w-16 h-16 text-gray-300 mx-auto" />
//                   <Sparkles className="w-6 h-6 text-gray-200 absolute -top-1 -right-1 animate-pulse" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-600 mb-3">No Sacred Products Found</h3>
//                 <p className="text-gray-500 mb-6">The universe hasn't revealed those products yet</p>
//                 <button
//                   onClick={clearFilters}
//                   className="bg-sacred-crimson text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
//                 >
//                   Clear Filters
//                 </button>
//               </div>
//             )}
//           </>
//         )}
        
//         {/* Professional Share Modal */}
//         {shareMenu.open && shareMenu.product && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
//             <div 
//               ref={shareMenuRef}
//               className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden"
//             >
//               <div className="px-6 py-4 border-b border-gray-100">
//                 <h3 className="text-lg font-semibold text-gray-800">Share this product</h3>
//                 <p className="text-sm text-gray-500 mt-1 truncate">{shareMenu.product.name}</p>
//               </div>
              
//               <div className="p-6 grid grid-cols-2 gap-4">
//                 <button
//                   onClick={() => shareProduct('facebook', shareMenu.product)}
//                   className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-100 transition-colors"
//                 >
//                   <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
//                     <Facebook className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <span className="text-sm font-medium text-gray-700">Facebook</span>
//                 </button>
                
//                 <button
//                   onClick={() => shareProduct('twitter', shareMenu.product)}
//                   className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-100 transition-colors"
//                 >
//                   <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
//                     <Twitter className="w-6 h-6 text-blue-400" />
//                   </div>
//                   <span className="text-sm font-medium text-gray-700">Twitter</span>
//                 </button>
                
//                 <button
//                   onClick={() => shareProduct('linkedin', shareMenu.product)}
//                   className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-100 transition-colors"
//                 >
//                   <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
//                     <Linkedin className="w-6 h-6 text-blue-700" />
//                   </div>
//                   <span className="text-sm font-medium text-gray-700">LinkedIn</span>
//                 </button>
                
//                 <button
//                   onClick={() => shareProduct('copy', shareMenu.product)}
//                   className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
//                 >
//                   <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
//                     <LinkIcon className="w-6 h-6 text-gray-600" />
//                   </div>
//                   <span className="text-sm font-medium text-gray-700">Copy Link</span>
//                 </button>
//               </div>
              
//               <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
//                 <button
//                   onClick={() => setShareMenu({ open: false, productId: null, product: null })}
//                   className="w-full py-2 text-gray-700 hover:text-gray-900 transition-colors"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
      
//       {/* Compact CTA Section */}
//       <div className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 mb-14 rounded-2xl" 
//         style={{ background: 'linear-gradient(135deg, rgba(196, 30, 58, 0.7) 0%, rgba(139, 21, 56, 1) 100%)' }}>
        
//         {/* Background Image */}
//         <img
//           src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
//           alt="Background"
//           className="absolute top-0 left-0 w-full h-full object-cover opacity-10 z-0 rounded-2xl"
//         />

//         {/* Content */}
//         <div className="relative z-10 p-8 md:p-10 text-center">
//           <div className="flex justify-center mb-4">
//             <div className="bg-white/20 p-3 rounded-full animate-pulse">
//               <Sparkles className="w-8 h-8 text-white" />
//             </div>
//           </div>

//           <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
//             Enhance Your Spiritual Journey
//           </h2>

//           <p className="text-white/90 max-w-2xl mx-auto mb-6 text-base md:text-lg leading-relaxed">
//             Explore our complete collection of sacred products and spiritual tools carefully curated to support your spiritual growth.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
//             <button
//               onClick={() => {
//                 setSearchTerm('');
//                 setSelectedCategory('all');
//                 document.querySelector('.grid')?.scrollIntoView({ behavior: 'smooth' });
//               }}
//               className="bg-white text-[#C41E3A] px-6 py-3 rounded-xl font-semibold hover:bg-rose-50 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
//             >
//               <PackageIcon className="w-5 h-5" /> Explore All Products
//             </button>

//             <button
//               onClick={() => navigate('/contact')}
//               className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
//             >
//               <Heart className="w-5 h-5" /> Contact Us
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
  
//   );
// };

// export default Products;

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, Calendar, ShoppingCart, Flame, Star, Flower, X, ArrowRight, Eye, Clock, Sparkles, Heart, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon, IndianRupee, Package, Grid, List, ChevronDown, Users, PackageIcon, Filter } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setProducts } from './redux/authEcommerce';
import { Helmet } from 'react-helmet';

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const { products = [] } = useSelector((state) => state.ecommerce);
  const shareMenuRef = useRef(null);
  const categoryMenuRef = useRef(null);
  const sortMenuRef = useRef(null);
  
  // Local states
  const [loading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFetching, setIsFetching] = useState(true);
  const [shareMenu, setShareMenu] = useState({ open: false, productId: null, product: null });
  const [categoryMenu, setCategoryMenu] = useState(false);
  const [sortMenu, setSortMenu] = useState(false);
  const [wishlist, setWishlist] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [showFilters, setShowFilters] = useState(false);

  // Sort options
  const sortOptions = [
    { id: 'newest', name: 'Newest First', icon: Clock },
    { id: 'price-low', name: 'Price: Low to High', icon: IndianRupee },
    { id: 'price-high', name: 'Price: High to Low', icon: IndianRupee },
    { id: 'name', name: 'Name: A to Z', icon: List }
  ];

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map(product => product.category))].filter(Boolean);
    return ['all', ...uniqueCategories];
  }, [products]);

  // Get max price for range slider
  const maxPrice = useMemo(() => {
    return products.length ? Math.max(...products.map(p => p.price)) + 100 : 10000;
  }, [products]);

  useEffect(() => {
    if (user) {
      navigate('/admin-dashboard');
    }
  }, [user]);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shareMenuRef.current && !shareMenuRef.current.contains(event.target)) {
        setShareMenu({ open: false, productId: null, product: null });
      }
      if (categoryMenuRef.current && !categoryMenuRef.current.contains(event.target)) {
        setCategoryMenu(false);
      }
      if (sortMenuRef.current && !sortMenuRef.current.contains(event.target)) {
        setSortMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Fetch products with polling
  useEffect(() => {
    let isMounted = true;
    const POLLING_INTERVAL = 15000;

    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/products/get`, {
          withCredentials: true,
        });
        
        if (res.data.success && isMounted) {
          const sortedProducts = [...res.data.products].sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );

          dispatch(setProducts(sortedProducts));
          setFilteredProducts(sortedProducts);
          
          if (res.data.products.length !== products.length) {
            toast('🛍️ New sacred products have been added', {
              autoClose: 1500,
              hideProgressBar: true,
              className: 'bg-purple-300 text-white font-semibold text-center shadow-lg rounded-md',
              style: {
                background: '#d8b4fe',
                fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)',
                padding: 'clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.625rem, 2vw, 1rem)',
                width: 'fit-content',
                minWidth: '200px',
                maxWidth: 'min(90vw, 400px)',
                boxSizing: 'border-box',
                wordBreak: 'break-word',
                margin: 'clamp(0.5rem, 1.5vw, 1rem)',
                borderRadius: '0.375rem',
                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
                lineHeight: '1.25',
              },
              bodyStyle: {
                margin: 0,
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
              },
              position: 'top-center',
              icon: false,
            });
          }
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        if (isMounted) {
          toast.error("Failed to load sacred products");
        }
      } finally {
        if (isMounted) {
          setIsFetching(false);
        }
      }
    };

    fetchProducts();
    const intervalId = setInterval(fetchProducts, POLLING_INTERVAL);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, [dispatch, products.length]);

  // Update filtered products when filters change
  useEffect(() => {
    let filtered = products;
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => 
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Sort products
    switch(sortBy) {
      case 'newest':
        filtered = [...filtered].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    
    setFilteredProducts(filtered);
  }, [searchTerm, products, selectedCategory, sortBy, priceRange]);

  const truncateDescription = (description, maxLength = 120) => {
    return description.length > maxLength ? description.substring(0, maxLength) + '...' : description;
  };

  // Share functionality
  const handleShareClick = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    
    setShareMenu({
      open: !shareMenu.open || shareMenu.productId !== product._id,
      productId: product._id,
      product: product
    });
  };

  const shareProduct = async (platform, product) => {
    if (!product) return;
    
    const productUrl = `${window.location.origin}/product/${product._id}`;
    const text = `Check out this sacred product: ${product.name}`;
    
    let shareUrl = '';
    
    switch(platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(productUrl)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(productUrl)}`;
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(productUrl);
          toast.success('Link copied to clipboard!', {
            autoClose: 2000,
            position: 'bottom-center'
          });
        } catch (err) {
          const textArea = document.createElement('textarea');
          textArea.value = productUrl;
          document.body.appendChild(textArea);
          textArea.select();
          try {
            document.execCommand('copy');
            toast.success('Link copied to clipboard!');
          } catch (err) {
            toast.error('Failed to copy link');
          }
          document.body.removeChild(textArea);
        }
        setShareMenu({ open: false, productId: null, product: null });
        return;
      default:
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
    setShareMenu({ open: false, productId: null, product: null });
  };

  // Buy now functionality
  const handleBuyNow = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    
    navigate('/checkout', { 
      state: { 
        product: {
          ...product,
          quantity: 1,
          total: product.price * 1
        }
      }
    });
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSortBy('newest');
    setPriceRange([0, maxPrice]);
  };

  // Skeleton loader components
  const ProductSkeleton = () => (
    <div className="bg-white rounded-xl overflow-hidden shadow-md h-full animate-pulse">
      <div className="relative h-60 bg-gray-200"></div>
      <div className="p-5 flex flex-col h-64">
        <div className="mb-4">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
        <div className="mb-4 flex-grow space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
        <div className="mt-auto">
          <div className="flex justify-between mb-3">
            <div className="h-6 bg-gray-200 rounded w-20"></div>
            <div className="h-4 bg-gray-200 rounded w-16"></div>
          </div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );

  const ProductListSkeleton = () => (
    <div className="bg-white rounded-xl overflow-hidden shadow-md h-full p-5 flex animate-pulse">
      <div className="relative h-32 w-32 bg-gray-200 rounded mr-5"></div>
      <div className="flex-1 flex flex-col">
        <div className="mb-4">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
        <div className="mb-4 flex-grow space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
        <div className="mt-auto flex justify-between items-center">
          <div className="h-6 bg-gray-200 rounded w-20"></div>
          <div className="h-10 bg-gray-200 rounded w-32"></div>
        </div>
      </div>
    </div>
  );

  // Calculate product stats
  const productStats = {
    totalProducts: products.length,
    inStockProducts: products.filter(p => p.status === 'inStock').length,
    outOfStockProducts: products.filter(p => p.status === 'outOfStock').length,
    totalValue: products.reduce((sum, product) => sum + (product.price * product.quantity), 0).toFixed(2)
  };

  return (
    <>
      <Helmet>
        <title>Products | Adiyogi Foundation</title>
        <meta name="description" content="Shop spiritual products, books, meditation tools, and cultural items from Adiyogi Foundation that support Dharma revival." />
        <meta name="keywords" content="Adiyogi Foundation Products, Spiritual Shop, Meditation Tools, Books, Yoga Accessories" />
        <link rel="canonical" href="https://www.adiyogifoundation.org.in/products" />

        <meta property="og:title" content="Products | Adiyogi Foundation" />
        <meta property="og:description" content="Browse Adiyogi Foundation's spiritual products and support Dharma revival." />
        <meta property="og:url" content="https://www.adiyogifoundation.org.in/products" />
        <meta property="og:image" content="https://www.adiyogifoundation.org.in/INSTA.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Products | Adiyogi Foundation" />
        <meta name="twitter:description" content="Shop authentic spiritual and cultural products from Adiyogi Foundation." />
        <meta name="twitter:image" content="https://www.adiyogifoundation.org.in/INSTA.jpg" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-purple-50 via-purple-100 to-pink-50 pt-16 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6a0dad]/30 to-[#ff00ff]/20"></div>
          <div
            className="absolute inset-0 bg-center bg-cover opacity-10 bg-scroll"
            style={{
              backgroundImage: `url('/Product Page BG.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <Flame className="w-8 h-8 text-[#6a0dad] animate-pulse" />
                <Package className="w-8 h-8 text-[#6a0dad]" />
                <Flower className="w-8 h-8 text-[#6a0dad] animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 tracking-tight">
              Sacred <span className="text-[#6a0dad] relative">Products</span>
            </h1>

            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
              Discover sacred products, spiritual tools, and divine offerings that enhance your spiritual journey
              and bring consciousness into your daily life.
            </p>

            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="w-16 h-1 bg-[#6a0dad] rounded-full"></div>
              <Sparkles className="w-6 h-6 text-[#6a0dad]" />
              <div className="w-16 h-1 bg-[#6a0dad] rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300">
                <Package className="w-8 h-8 text-[#6a0dad] mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-800">{isFetching ? '--' : productStats.totalProducts}</div>
                <div className="text-sm text-gray-600">Total Products</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300">
                <Flame className="w-8 h-8 text-[#6a0dad] mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-800">{productStats.inStockProducts}</div>
                <div className="text-sm text-gray-600">In Stock</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300">
                <Star className="w-8 h-8 text-[#6a0dad] mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-800">{productStats.outOfStockProducts}</div>
                <div className="text-sm text-gray-600">Out of Stock</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-10 border border-purple-100">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Discover Sacred Products
              </h2>
              <p className="text-gray-600 max-w-lg mx-auto">
                Find spiritual tools, sacred items, and divine offerings for your journey.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search sacred products, spiritual tools, offerings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 border-2 border-purple-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6a0dad] focus:border-transparent text-base transition-all duration-300 placeholder-gray-400"
                />
                {searchTerm && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <button
                      onClick={() => setSearchTerm('')}
                      className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                      aria-label="Clear search"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
              
              {/* Mobile Filter Toggle */}
              <div className="md:hidden">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 w-full justify-center bg-purple-50 border-2 border-purple-100 rounded-xl pl-4 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#6a0dad] focus:border-transparent text-base cursor-pointer hover:bg-purple-100 transition-colors"
                >
                  <Filter className="w-5 h-5" />
                  <span>Filters</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {/* Desktop Filter Controls */}
              <div className="hidden md:flex gap-3">
                {/* Category Filter Dropdown */}
                <div className="relative" ref={categoryMenuRef}>
                  <button
                    onClick={() => setCategoryMenu(!categoryMenu)}
                    className="flex items-center gap-2 bg-purple-50 border-2 border-purple-100 rounded-xl pl-4 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#6a0dad] focus:border-transparent text-base cursor-pointer hover:bg-purple-100 transition-colors"
                  >
                    <Filter className="w-5 h-5" />
                    <span>Category</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${categoryMenu ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {categoryMenu && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-purple-100 z-50 overflow-hidden">
                      <div className="p-2 max-h-60 overflow-y-auto">
                        {categories.map(category => (
                          <button
                            key={category}
                            onClick={() => {
                              setSelectedCategory(category);
                              setCategoryMenu(false);
                            }}
                            className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                              selectedCategory === category
                                ? 'bg-[#6a0dad] text-white'
                                : 'text-gray-700 hover:bg-purple-50'
                            }`}
                          >
                            {category === 'all' ? 'All Categories' : category}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Sort Dropdown */}
                <div className="relative" ref={sortMenuRef}>
                  <button
                    onClick={() => setSortMenu(!sortMenu)}
                    className="flex items-center gap-2 bg-purple-50 border-2 border-purple-100 rounded-xl pl-4 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#6a0dad] focus:border-transparent text-base cursor-pointer hover:bg-purple-100 transition-colors min-w-[180px] justify-between"
                  >
                    <span>{sortOptions.find(opt => opt.id === sortBy)?.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${sortMenu ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {sortMenu && (
                    <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-2xl border border-purple-100 z-50 overflow-hidden">
                      <div className="p-2">
                        {sortOptions.map(option => {
                          const IconComponent = option.icon;
                          return (
                            <button
                              key={option.id}
                              onClick={() => {
                                setSortBy(option.id);
                                setSortMenu(false);
                              }}
                              className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                                sortBy === option.id
                                  ? 'bg-[#6a0dad] text-white'
                                  : 'text-gray-700 hover:bg-purple-50'
                              }`}
                            >
                              <IconComponent className="w-4 h-4" />
                              {option.name}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* View Toggle */}
                <div className="flex bg-purple-50 rounded-xl overflow-hidden border-2 border-purple-100">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-4 transition-colors ${viewMode === 'grid' ? 'bg-[#6a0dad] text-white' : 'text-gray-600 hover:bg-purple-100'}`}
                    aria-label="Grid view"
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-4 transition-colors ${viewMode === 'list' ? 'bg-[#6a0dad] text-white' : 'text-gray-600 hover:bg-purple-100'}`}
                    aria-label="List view"
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Mobile Filters Panel */}
            {showFilters && (
              <div className="md:hidden bg-purple-50 rounded-xl p-4 mb-4">
                <h3 className="font-semibold text-gray-800 mb-3">Filters</h3>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Category</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedCategory === category
                            ? 'bg-[#6a0dad] text-white'
                            : 'bg-white text-gray-700'
                        }`}
                      >
                        {category === 'all' ? 'All' : category}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Price Range</h4>
                  <div className="px-2">
                    <input
                      type="range"
                      min="0"
                      max={maxPrice}
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-600 mt-1">
                      <span>₹0</span>
                      <span>₹{priceRange[1]}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Sort By</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {sortOptions.map(option => (
                      <button
                        key={option.id}
                        onClick={() => setSortBy(option.id)}
                        className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                          sortBy === option.id
                            ? 'bg-[#6a0dad] text-white'
                            : 'bg-white text-gray-700'
                        }`}
                      >
                        {option.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Desktop Price Filter */}
            <div className="hidden md:block mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Price Range: ₹0 - ₹{priceRange[1]}</h4>
              <input
                type="range"
                min="0"
                max={maxPrice}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            
            {/* Active Filters Display */}
            {(searchTerm || selectedCategory !== 'all' || priceRange[1] < maxPrice) && (
              <div className="flex flex-wrap gap-3 items-center">
                <span className="text-sm font-medium text-gray-700">Active filters:</span>
                
                {selectedCategory !== 'all' && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#6a0dad]/20 text-[#6a0dad]">
                    Category: {selectedCategory}
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className="ml-2 hover:text-[#6a0dad]/70"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                
                {priceRange[1] < maxPrice && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#6a0dad]/20 text-[#6a0dad]">
                    Max Price: ₹{priceRange[1]}
                    <button
                      onClick={() => setPriceRange([0, maxPrice])}
                      className="ml-2 hover:text-[#6a0dad]/70"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                
                {searchTerm && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                    Search: "{searchTerm}"
                    <button
                      onClick={() => setSearchTerm('')}
                      className="ml-2 hover:text-blue-500"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                
                <button
                  onClick={clearFilters}
                  className="text-sm text-gray-500 hover:text-gray-700 underline transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
            
            {searchTerm && (
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">
                  Found {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} matching "{searchTerm}"
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Products Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20 relative">
          {isFetching ? (
            <div className={`gap-6 md:gap-8 ${viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'space-y-6'}`}>
              {[...Array(8)].map((_, index) => (
                viewMode === 'grid' ? <ProductSkeleton key={index} /> : <ProductListSkeleton key={index} />
              ))}
            </div>
          ) : (
            <>
              <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'space-y-6'} gap-6 md:gap-8`}>
                {filteredProducts.map((product, index) => (
                  viewMode === 'grid' ? (
                    // Grid View Card
                    <div
                      key={product._id}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group relative flex flex-col h-full border border-gray-100"
                    >
                      {/* Number badge */}
                      <div className="absolute top-4 left-4 z-10 bg-[#6a0dad] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-md">
                        {index+1}
                      </div>
                      
                      {/* Share button */}
                      <div className="absolute top-4 right-4 z-20">
                        <button
                          onClick={(e) => handleShareClick(e, product)}
                          className="bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-md hover:shadow-lg hover:bg-white hover:scale-110"
                          aria-label="Share this product"
                        >
                          <Share2 className="w-5 h-5 text-[#6a0dad]" />
                        </button>
                      </div>

                      {/* Image */}
                      <Link to={`/product/${product._id}`} className="relative overflow-hidden group h-60">
                        {product.imageUrl ? (
                          <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                            <Package className="w-12 h-12 text-gray-300" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-4 right-16 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <Eye className="w-5 h-5 text-[#6a0dad]" />
                        </div>
                        {product.status === 'outOfStock' && (
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white px-4 py-2 rounded-lg font-bold">
                            Out of Stock
                          </div>
                        )}
                      </Link>
                      
                      {/* Content area */}
                      <div className="p-5 flex flex-col flex-1">
                        <div className="mb-4">
                          <Link to={`/product/${product._id}`}>
                            <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#6a0dad] transition-colors duration-300 leading-tight line-clamp-2 mb-2">
                              {product.name}
                            </h3>
                          </Link>
                          <span className="inline-block bg-[#6a0dad]/10 text-[#6a0dad] text-xs font-medium px-2 py-1 rounded-full">
                            {product.category}
                          </span>
                          
                          {/* Rating Section */}
                          <div className="flex items-center mt-3">
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                              ))}
                            </div>
                            <span className="ml-2 text-sm font-medium text-gray-700">4.8</span>
                            <span className="mx-2 text-gray-400">•</span>
                            <span className="text-xs text-gray-500">127 reviews</span>
                          </div>
                        </div>
                        
                        <div className="mb-4 flex-grow">
                          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                            {truncateDescription(product.description, 120)}
                          </p>
                        </div>
                        
                        <div className="mt-auto">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              <IndianRupee className="w-5 h-5 text-[#6a0dad]" />
                              <span className="text-xl font-bold text-[#6a0dad]">{product.price}</span>
                            </div>
                            <div className="flex items-center text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
                              <Package className="w-3 h-3 mr-1" />
                              <span>{product.quantity} in stock</span>
                            </div>
                          </div>
                          
                          <div className="flex gap-3">
                            <button
                              onClick={(e) => handleBuyNow(e, product)}
                              disabled={product.status === 'outOfStock'}
                              className="flex-1 bg-[#6a0dad] text-white py-2.5 rounded-xl font-semibold hover:bg-[#e600e6] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center group/btn disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                            >
                              <span className="flex items-center">
                                Buy Now
                                <ShoppingCart className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                              </span>
                            </button>
                            
                            <Link
                              to={`/product/${product._id}`}
                              className="bg-[#6a0dad] text-white px-4 py-2.5 rounded-xl font-semibold hover:bg-[#5a0c9d] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center group/btn"
                            >
                              <Eye className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // List View Card
                    <div
                      key={product._id}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group flex flex-col md:flex-row border border-gray-100"
                    >
                      <Link to={`/product/${product._id}`} className="relative overflow-hidden md:w-64 h-48 md:h-auto flex-shrink-0">
                        {product.imageUrl ? (
                          <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                            <Package className="w-12 h-12 text-gray-300" />
                          </div>
                        )}
                        {product.status === 'outOfStock' && (
                          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                            Out of Stock
                          </div>
                        )}
                        <div className="absolute top-3 right-3 bg-[#6a0dad] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-sm">
                          {index+1}
                        </div>
                      </Link>
                      
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <span className="inline-block bg-[#6a0dad]/10 text-[#6a0dad] px-2 py-1 rounded-full text-xs font-medium mb-2">
                              {product.category}
                            </span>
                            <Link to={`/product/${product._id}`}>
                              <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#6a0dad] transition-colors duration-300 mb-2">
                                {product.name}
                              </h3>
                            </Link>
                            
                            {/* Rating Section for List View */}
                            <div className="flex items-center">
                              <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                              </div>
                              <span className="ml-2 text-sm font-medium text-gray-700">4.8</span>
                              <span className="mx-2 text-gray-400">•</span>
                              <span className="text-xs text-gray-500">127 reviews</span>
                            </div>
                          </div>
                          
                          <button
                            onClick={(e) => handleShareClick(e, product)}
                            className="bg-white rounded-full p-2 shadow-sm hover:shadow-md hover:bg-purple-50 transition-all border border-gray-100"
                            aria-label="Share this product"
                          >
                            <Share2 className="w-4 h-4 text-[#6a0dad]" />
                          </button>
                        </div>
                        
                        <div className="mb-4 flex-grow">
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {truncateDescription(product.description, 160)}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center">
                              <IndianRupee className="w-5 h-5 text-[#6a0dad]" />
                              <span className="text-xl font-bold text-[#6a0dad]">{product.price}</span>
                            </div>
                            <div className="flex items-center text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
                              <Package className="w-3 h-3 mr-1" />
                              <span>{product.quantity} in stock</span>
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                            <button
                              onClick={(e) => handleBuyNow(e, product)}
                              disabled={product.status === 'outOfStock'}
                              className="bg-[#6a0dad] text-white py-2 px-4 rounded-xl font-semibold hover:bg-[#e600e6] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                            >
                              <ShoppingCart className="w-4 h-4 mr-1" />
                              Buy Now
                            </button>
                            
                            <Link
                              to={`/product/${product._id}`}
                              className="bg-[#6a0dad] text-white px-3 py-2 rounded-xl font-semibold hover:bg-[#5a0c9d] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                            >
                              <Eye className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                ))}
              </div>
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <div className="relative inline-block mb-6">
                    <Package className="w-16 h-16 text-gray-300 mx-auto" />
                    <Sparkles className="w-6 h-6 text-gray-200 absolute -top-1 -right-1 animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-600 mb-3">No Sacred Products Found</h3>
                  <p className="text-gray-500 mb-6">The universe hasn't revealed those products yet</p>
                  <button
                    onClick={clearFilters}
                    className="bg-[#6a0dad] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#5a0c9d] transition-colors duration-300"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </>
          )}
          
          {/* Professional Share Modal */}
          {shareMenu.open && shareMenu.product && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
              <div 
                ref={shareMenuRef}
                className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden"
              >
                <div className="px-6 py-4 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800">Share this product</h3>
                  <p className="text-sm text-gray-500 mt-1 truncate">{shareMenu.product.name}</p>
                </div>
                
                <div className="p-6 grid grid-cols-2 gap-4">
                  <button
                    onClick={() => shareProduct('facebook', shareMenu.product)}
                    className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-100 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                      <Facebook className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Facebook</span>
                  </button>
                  
                  <button
                    onClick={() => shareProduct('twitter', shareMenu.product)}
                    className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-100 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                      <Twitter className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Twitter</span>
                  </button>
                  
                  <button
                    onClick={() => shareProduct('linkedin', shareMenu.product)}
                    className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-100 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                      <Linkedin className="w-6 h-6 text-blue-700" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">LinkedIn</span>
                  </button>
                  
                  <button
                    onClick={() => shareProduct('copy', shareMenu.product)}
                    className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                      <LinkIcon className="w-6 h-6 text-gray-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Copy Link</span>
                  </button>
                </div>
                
                <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                  <button
                    onClick={() => setShareMenu({ open: false, productId: null, product: null })}
                    className="w-full py-2 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Compact CTA Section */}
        <div className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 mb-14 rounded-2xl" 
          style={{ background: 'linear-gradient(135deg, rgba(106, 13, 173, 0.7) 0%, rgba(255, 0, 255, 1) 100%)' }}>
          
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-10 z-0 rounded-2xl"
          />

          {/* Content */}
          <div className="relative z-10 p-8 md:p-10 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 p-3 rounded-full animate-pulse">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Enhance Your Spiritual Journey
            </h2>

            <p className="text-white/90 max-w-2xl mx-auto mb-6 text-base md:text-lg leading-relaxed">
              Explore our complete collection of sacred products and spiritual tools carefully curated to support your spiritual growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  document.querySelector('.grid')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-[#6a0dad] px-6 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <PackageIcon className="w-5 h-5" /> Explore All Products
              </button>

              <button
                onClick={() => navigate('/contact')}
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5" /> Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;