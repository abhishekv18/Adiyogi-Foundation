
//    import React, { useState, useEffect, useRef } from 'react';
// import { Search, Calendar, BookOpen, Flame, Star, Flower, X, ArrowRight, Eye, Clock, Sparkles, Mail, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
// import { setAllBlogs } from './redux/blogSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { Helmet } from 'react-helmet';

// const Media = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.auth.user);
//   const { allBlogs = [] } = useSelector((state) => state.blog);
//   const shareMenuRef = useRef(null);
  
//   // Local states
//   const [loading, setLoading] = useState(false);
//   const [blogs, setBlogs] = useState(allBlogs);
//   const [filteredBlogs, setFilteredBlogs] = useState(allBlogs);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [formData, setFormData] = useState({ email: '' });
//   const [emailError, setEmailError] = useState('');
//   const [isFetching, setIsFetching] = useState(true);
//   const [shareMenu, setShareMenu] = useState({ open: false, blogId: null, blog: null });

//   // Redirect if user is logged in
//   useEffect(() => {
//     if (user) {
//       navigate('/admin-dashboard');
//     }
//   }, [user, navigate]);

//   // Fetch blogs with polling
//   useEffect(() => {
//     let isMounted = true;
//     const POLLING_INTERVAL = 10000;

//     const fetchBlogs = async () => {
//       try {
//         const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog/get`, {
//           withCredentials: true,
//         });
        
//         if (res.data.success && isMounted) {
//           const sortedBlogs = [...res.data.blogs].sort(
//             (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//           );

//           dispatch(setAllBlogs(sortedBlogs));
//           setBlogs(sortedBlogs);
//           setFilteredBlogs(sortedBlogs);
          
//           if (res.data.blogs.length !== allBlogs.length) {
//             toast('📖 New sacred wisdom has been added', {
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
//         console.error("Error fetching blogs:", error);
//         if (isMounted) {
//           toast.error("Failed to load sacred wisdom");
//         }
//       } finally {
//         if (isMounted) {
//           setIsFetching(false);
//         }
//       }
//     };

//     fetchBlogs();
//     const intervalId = setInterval(fetchBlogs, POLLING_INTERVAL);

//     return () => {
//       isMounted = false;
//       clearInterval(intervalId);
//     };
//   }, [dispatch, allBlogs.length]);

//   // Update filtered blogs when search term changes
//   useEffect(() => {
//     const filtered = blogs.filter(blog =>
//       blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       blog.content.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredBlogs(filtered);
//   }, [searchTerm, blogs]);

//   // Close share menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (shareMenuRef.current && !shareMenuRef.current.contains(event.target)) {
//         setShareMenu({ open: false, blogId: null, blog: null });
//       }
//     };

//     if (shareMenu.open) {
//       document.addEventListener('mousedown', handleClickOutside);
//       return () => {
//         document.removeEventListener('mousedown', handleClickOutside);
//       };
//     }
//   }, [shareMenu.open]);

//   // Email validation
//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
    
//     if (name === 'email') {
//       setEmailError(value && !validateEmail(value) ? 'Please enter a valid email address.' : '');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!formData.email) {
//       setEmailError('Email is required.');
//       return;
//     }
//     if (!validateEmail(formData.email)) {
//       setEmailError('Please enter a valid email address.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await axios.post(
//         `${import.meta.env.VITE_API_URL}/api/subscribe/add`,
//         formData,
//         {
//           headers: { 'Content-Type': 'application/json' },
//           withCredentials: true,
//         }
//       );

//       if (res.data.success) {
//         toast.success('Subscribed Successfully', {
//           icon: '✅',
//           style: {
//             border: '1px solid #28a745',
//             padding: '16px',
//             color: '#fff',
//             background: 'linear-gradient(135deg, #28a745, #218838)',
//             fontWeight: '600',
//           },
//         });
//         setFormData({ email: '' });
//         setEmailError('');
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error(error.response?.data?.message || 'Failed To Subscribe');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const truncateContent = (content, maxLength = 120) => {
//     return content.length > maxLength ? content.substring(0, maxLength) + '...' : content;
//   };

//   // Share functionality - Fixed version
//   const handleShareClick = (e, blog) => {
//     e.preventDefault();
//     e.stopPropagation();
    
//     setShareMenu({
//       open: !shareMenu.open || shareMenu.blogId !== blog._id,
//       blogId: blog._id,
//       blog: blog
//     });
//   };

//   const shareBlog = async (platform, blog) => {
//     if (!blog) return;
    
//     const blogUrl = `${window.location.origin}/blog/${blog._id}`;
//     const text = `Check out this sacred wisdom: ${blog.title}`;
    
//     let shareUrl = '';
    
//     switch(platform) {
//       case 'facebook':
//         shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl)}`;
//         break;
//       case 'twitter':
//         shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(blogUrl)}`;
//         break;
//       case 'linkedin':
//         shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(blogUrl)}`;
//         break;
//       case 'copy':
//         try {
//           await navigator.clipboard.writeText(blogUrl);
//           toast.success('Link copied to clipboard!', {
//             autoClose: 2000,
//             position: 'bottom-center'
//           });
//         } catch (err) {
//           // Fallback for older browsers
//           const textArea = document.createElement('textarea');
//           textArea.value = blogUrl;
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
//         setShareMenu({ open: false, blogId: null, blog: null });
//         return;
//       default:
//         return;
//     }
    
//     if (shareUrl) {
//       window.open(shareUrl, '_blank', 'noopener,noreferrer');
//     }
//     setShareMenu({ open: false, blogId: null, blog: null });
//   };

//   // Skeleton loader component
//   const BlogSkeleton = () => (
//     <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg h-full">
//       <div className="relative h-52 sm:h-56 md:h-60 bg-gray-200 animate-pulse"></div>
//       <div className="p-5 sm:p-6 md:p-7 flex flex-col h-[220px]">
//         <div className="mb-4">
//           <div className="h-6 bg-gray-200 rounded-full w-3/4 mb-2 animate-pulse"></div>
//           <div className="h-6 bg-gray-200 rounded-full w-1/2 animate-pulse"></div>
//         </div>
//         <div className="mb-4 flex-grow space-y-2">
//           <div className="h-4 bg-gray-200 rounded-full animate-pulse"></div>
//           <div className="h-4 bg-gray-200 rounded-full animate-pulse"></div>
//           <div className="h-4 bg-gray-200 rounded-full w-5/6 animate-pulse"></div>
//         </div>
//         <div className="mt-auto">
//           <div className="flex justify-between mb-3">
//             <div className="h-4 bg-gray-200 rounded-full w-24 animate-pulse"></div>
//             <div className="h-4 bg-gray-200 rounded-full w-20 animate-pulse"></div>
//           </div>
//           <div className="h-10 bg-gray-200 rounded-xl animate-pulse"></div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <>

//     <Helmet>
//   <title>Media | Adiyogi Foundation</title>
//   <meta name="description" content="Explore Adiyogi Foundation’s media coverage, press releases, events, and updates on Dharma revival and spiritual awareness." />
//   <meta name="keywords" content="Adiyogi Foundation Media, Press, News, Events, Dharma Awareness" />
//   <link rel="canonical" href="https://www.adiyogifoundation.org.in/media" />

//   <meta property="og:title" content="Media | Adiyogi Foundation" />
//   <meta property="og:description" content="Stay updated with Adiyogi Foundation's latest news, media coverage, and spiritual events." />
//   <meta property="og:url" content="https://www.adiyogifoundation.org.in/media" />
//   <meta property="og:image" content="https://www.adiyogifoundation.org.in/Adiyogifoundation logo_02.png" />

//   <meta name="twitter:card" content="summary_large_image" />
//   <meta name="twitter:title" content="Media | Adiyogi Foundation" />
//   <meta name="twitter:description" content="Check media coverage and news about Adiyogi Foundation’s spiritual mission." />
//   <meta name="twitter:image" content="https://www.adiyogifoundation.org.in/Adiyogifoundation logo_02.png" />
// </Helmet>

//     <div className="min-h-screen bg-rose-50">
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-br from-rose-50 via-rose-100 to-red-50 pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-18 md:pb-20 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-red-800/20"></div>
//         <div
//           className="absolute inset-0 bg-center bg-cover opacity-20 bg-scroll"
//           style={{
//             backgroundImage: `url('/istockphoto-1221349438-612x612.jpg')`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         ></div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
//           <div className="flex justify-center mb-6 sm:mb-8">
//             <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-lg">
//               <Flame className="w-6 h-6 sm:w-8 sm:h-8 text-sacred-crimson animate-pulse" />
//               <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-sacred-crimson" />
//               <Flower className="w-6 h-6 sm:w-8 sm:h-8 text-sacred-crimson animate-pulse" style={{ animationDelay: '1s' }} />
//             </div>
//           </div>

//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 sm:mb-6 tracking-tight">
//             Sacred <span className="text-sacred-crimson relative">Media</span>
//           </h1>

//           <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl sm:max-w-4xl mx-auto mb-6 sm:mb-10 leading-relaxed">
//             Discover profound wisdom, spiritual insights, and transformative teachings
//             from the ancient traditions that guide us toward divine consciousness.
//           </p>

//           <div className="flex justify-center items-center space-x-4 mb-6 sm:mb-8">
//             <div className="w-12 sm:w-16 h-1 bg-sacred-crimson rounded-full"></div>
//             <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-sacred-crimson" />
//             <div className="w-12 sm:w-16 h-1 bg-sacred-crimson rounded-full"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto">
//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
//               <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-sacred-crimson mx-auto mb-2 sm:mb-3" />
//               <div className="text-xl sm:text-2xl font-bold text-gray-800">{isFetching ? '--' : blogs.length}</div>
//               <div className="text-sm text-gray-600">Sacred Articles</div>
//             </div>
//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
//               <Flame className="w-6 h-6 sm:w-8 sm:h-8 text-sacred-crimson mx-auto mb-2 sm:mb-3" />
//               <div className="text-xl sm:text-2xl font-bold text-gray-800">∞</div>
//               <div className="text-sm text-gray-600">Infinite Wisdom</div>
//             </div>
//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
//               <Star className="w-6 h-6 sm:w-8 sm:h-8 text-sacred-crimson mx-auto mb-2 sm:mb-3" />
//               <div className="text-xl sm:text-2xl font-bold text-gray-800">100%</div>
//               <div className="text-sm text-gray-600">Transformative</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Search Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-10">
//         <div 
//           className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-2xl p-5 sm:p-6 md:p-8 mb-8 sm:mb-10 md:mb-12 border border-rose-100" 
//           style={{boxShadow: '0 10px 30px rgba(196, 30, 58, 0.15)'}}
//         >
//           <div className="text-center mb-4 sm:mb-5 md:mb-6">
//             <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1 sm:mb-2 leading-tight">
//               Search Sacred Wisdom
//             </h2>
//             <p className="text-sm sm:text-base text-gray-600 max-w-lg mx-auto">
//               Find the teachings that resonate with your spiritual journey.
//             </p>
//           </div>
          
//           <div className="flex justify-center">
//             <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl">
//               <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 sm:w-6 sm:h-6" />
//               <input
//                 type="text"
//                 placeholder="Search sacred wisdom, meditation, consciousness..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-4 border-2 border-rose-100 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-base sm:text-lg transition-all duration-300 placeholder-gray-400"
//               />
//               {searchTerm && (
//                 <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2">
//                   <button
//                     onClick={() => setSearchTerm('')}
//                     className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
//                     aria-label="Clear search"
//                   >
//                     <X className="w-4 h-4 sm:w-5 sm:h-5" />
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
          
//           {searchTerm && (
//             <div className="mt-3 sm:mt-4 text-center">
//               <p className="text-xs sm:text-sm text-gray-500">
//                 Found {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''} matching "{searchTerm}"
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
     
//       {/* Blog Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20 relative">
//         {isFetching ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
//             {[...Array(6)].map((_, index) => (
//               <BlogSkeleton key={index} />
//             ))}
//           </div>
//         ) : (
//           <>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
//               {filteredBlogs.map((blog, index) => (
//                 <div
//                   key={blog._id}
//                   className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2 group relative flex flex-col h-full"
//                   style={{
//                     boxShadow: '0 10px 30px rgba(196, 30, 58, 0.15)',
//                     animationDelay: `${index * 0.1}s`
//                   }}
//                 >
//                   {/* Number badge */}
//                   <div className="absolute top-3 md:top-4 left-3 md:left-4 z-10 bg-sacred-crimson text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-xs md:text-sm font-bold shadow-md md:shadow-lg">
//                     {index+1}
//                   </div>
                  
//                   {/* Share button - Fixed */}
//                   <div className="absolute top-3 md:top-4 right-3 md:right-4 z-20">
//                     <button
//                       onClick={(e) => handleShareClick(e, blog)}
//                       className="bg-white/90 backdrop-blur-sm rounded-full p-1.5 md:p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-md hover:shadow-lg hover:bg-white hover:scale-110"
//                       aria-label="Share this article"
//                     >
//                       <Share2 className="w-4 h-4 md:w-5 md:h-5 text-sacred-crimson" />
//                     </button>
//                   </div>

//                   {/* Image */}
//                   <Link to={`/blog/${blog._id}`} className="relative overflow-hidden group h-52 sm:h-56 md:h-60">
//                     <img
//                       src={blog.imageUrl}
//                       alt={blog.title}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                     <div className="absolute top-3 md:top-4 right-12 md:right-14 bg-white/90 backdrop-blur-sm rounded-full p-1.5 md:p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
//                       <Eye className="w-4 h-4 md:w-5 md:h-5 text-sacred-crimson" />
//                     </div>
//                   </Link>
                  
//                   {/* Content area */}
//                   <div className="p-5 sm:p-6 md:p-7 flex flex-col" style={{ minHeight: '220px' }}>
//                     <div className="mb-3 md:mb-4">
//                       <Link to={`/blog/${blog._id}`}>
//                         <h3 className="text-lg sm:text-xl md:text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300 leading-tight line-clamp-2">
//                           {blog.title}
//                         </h3>
//                       </Link>
//                     </div>
                    
//                     <div className="mb-4 md:mb-5 flex-grow overflow-hidden">
//                       <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3 h-full">
//                         {truncateContent(blog.content, 140)}
//                       </p>
//                     </div>
                    
//                     <div className="mt-auto">
//                       <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-3 md:mb-4">
//                         <div className="flex items-center bg-gray-50 rounded-full px-2 py-1.5 sm:px-3 sm:py-2">
//                           <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
//                           <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { 
//                             month: 'short', 
//                             day: 'numeric',
//                             year: 'numeric'
//                           })}</span>
//                         </div>
//                         <div className="flex items-center">
//                           <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
//                           <span>{Math.ceil(blog.content.length / 460)} min read</span>
//                         </div>
//                       </div>
                      
//                       <Link
//                         to={`/blog/${blog._id}`}
//                         className="w-full bg-sacred-crimson text-white py-2 sm:py-3 rounded-xl md:rounded-2xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center group/btn"
//                       >
//                         <span className="flex items-center">
//                           Read Full Article
//                           <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
//                         </span>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             {filteredBlogs.length === 0 && (
//               <div className="text-center py-16 md:py-20">
//                 <div className="relative inline-block mb-5 md:mb-6">
//                   <Flower className="w-16 h-16 md:w-20 md:h-20 text-gray-300 mx-auto" />
//                   <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-gray-200 absolute -top-1 -right-1 md:-top-2 md:-right-2 animate-pulse" />
//                 </div>
//                 <h3 className="text-xl md:text-2xl font-bold text-gray-600 mb-2 md:mb-3">No Sacred Wisdom Found</h3>
//                 <p className="text-gray-500 text-base md:text-lg mb-4 md:mb-6">The universe hasn't revealed those teachings yet</p>
//                 <button
//                   onClick={() => setSearchTerm('')}
//                   className="bg-sacred-crimson text-white px-6 py-2 md:px-8 md:py-3 rounded-lg md:rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300"
//                 >
//                   Clear Search
//                 </button>
//               </div>
//             )}
//           </>
//         )}
 
      
// {shareMenu.open && shareMenu.blog && (
//   <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
//     <div 
//       ref={shareMenuRef}
//       className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden"
//     >
//       {/* Header */}
//       <div className="px-6 py-4 border-b border-gray-100">
//         <h3 className="text-lg font-semibold text-gray-800">Share this Article</h3>
//       </div>
      
//       {/* Share Buttons */}
//       <div className="p-6 grid grid-cols-2 gap-4">
//         <button
//           onClick={() => shareBlog('facebook', shareMenu.blog)}
//           className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-100 transition-colors"
//         >
//           <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
//             <Facebook className="w-6 h-6 text-blue-600" />
//           </div>
//           <span className="text-sm font-medium text-gray-700">Facebook</span>
//         </button>

//         <button
//           onClick={() => shareBlog('twitter', shareMenu.blog)}
//           className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-100 transition-colors"
//         >
//           <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
//             <Twitter className="w-6 h-6 text-blue-400" />
//           </div>
//           <span className="text-sm font-medium text-gray-700">Twitter</span>
//         </button>

//         <button
//           onClick={() => shareBlog('linkedin', shareMenu.blog)}
//           className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-100 transition-colors"
//         >
//           <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
//             <Linkedin className="w-6 h-6 text-blue-700" />
//           </div>
//           <span className="text-sm font-medium text-gray-700">LinkedIn</span>
//         </button>

//         <button
//           onClick={() => shareBlog('copy', shareMenu.blog)}
//           className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
//         >
//           <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
//             <LinkIcon className="w-6 h-6 text-gray-600" />
//           </div>
//           <span className="text-sm font-medium text-gray-700">Copy Link</span>
//         </button>
//       </div>

//       {/* Cancel Button */}
//       <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
//         <button
//           onClick={() => setShareMenu({ open: false, blog: null })}
//           className="w-full py-2 text-gray-700 hover:text-gray-900 transition-colors"
//         >
//           Cancel
//         </button>
//       </div>
//     </div>
//   </div>
// )}


//       </div> 
//       <div
//         className="text-white py-7 sm:py-8 md:py-9 lg:py-10"
//         style={{
//           background: 'linear-gradient(135deg, rgba(196, 30, 58, 0.7) 0%, rgba(139, 21, 56, 1) 100%)',
//           boxShadow: '0 8px 32px rgba(196, 30, 58, 0.15)',
//         }}
//       >
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           {/* Icon - responsive sizing */}
//           <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
//             <Flower className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-[#FFFEF7] animate-pulse" />
//           </div>

//           {/* Heading - responsive sizing */}
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.7rem] font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
//             Stay Connected to Sacred Wisdom
//           </h2>

//           {/* Subheading - responsive sizing */}
//           <p className="text-base sm:text-lg md:text-xl lg:text-[1.25rem] text-red-100 max-w-3xl mx-auto mb-6 sm:mb-7 md:mb-8 leading-relaxed">
//             Subscribe to receive the latest spiritual insights and transformative teachings directly to your journey.
//           </p>

//           {/* Form - responsive layout */}
//           <form
//             onSubmit={handleSubmit}
//             className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 justify-center max-w-md sm:max-w-xl mx-auto"
//           >
//             <div className="flex-1 w-full">
//               <input
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 type="email"
//                 placeholder="Enter your email"
//                 className={`w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg border-2 bg-white text-gray-800 placeholder-gray-500 focus:outline-none text-sm sm:text-base ${
//                   emailError ? 'border-red-400' : 'border-transparent'
//                 }`}
//               />
//               {emailError && (
//                 <p className="text-white text-xs sm:text-sm mt-1 ml-1 text-left">{emailError}</p>
//               )}
//             </div>

//             {/* Button - responsive sizing */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-white text-[#C41E3A] px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-100 hover:scale-x-105 shadow-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-sm sm:text-base"
//             >
//               {loading ? (
//                 <>
//                   <svg
//                     className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-[#C41E3A]"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                     ></circle>
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8v8H4z"
//                     ></path>
//                   </svg>
//                   <span>Subscribing...</span>
//                 </>
//               ) : (
//                 <>
//                   <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[#C41E3A]" />
//                   <span>Subscribe</span>
//                 </>
//               )}
//             </button>
//           </form>

//           {/* Footer text - responsive sizing */}
//           <p className="text-xs sm:text-sm text-red-100 mt-4 sm:mt-5 md:mt-6 opacity-80">
//             Join thousands of seekers on their spiritual journey.
//           </p>
//         </div>
//       </div>
//     </div>
//     </>
    
//   );
// };

// export default Media;

import React, { useState, useEffect, useRef } from 'react';
import { Search, Calendar, BookOpen, Flame, Star, Flower, X, ArrowRight, Eye, Clock, Sparkles, Mail, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { setAllBlogs } from './redux/blogSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const Media = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const { allBlogs = [] } = useSelector((state) => state.blog);
  const shareMenuRef = useRef(null);
  
  // Local states
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState(allBlogs);
  const [filteredBlogs, setFilteredBlogs] = useState(allBlogs);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({ email: '' });
  const [emailError, setEmailError] = useState('');
  const [isFetching, setIsFetching] = useState(true);
  const [shareMenu, setShareMenu] = useState({ open: false, blogId: null, blog: null });

  // Redirect if user is logged in
  useEffect(() => {
    if (user) {
      navigate('/admin-dashboard');
    }
  }, [user, navigate]);

  // Fetch blogs with polling
  useEffect(() => {
    let isMounted = true;
    const POLLING_INTERVAL = 10000;

    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog/get`, {
          withCredentials: true,
        });
        
        if (res.data.success && isMounted) {
          const sortedBlogs = [...res.data.blogs].sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );

          dispatch(setAllBlogs(sortedBlogs));
          setBlogs(sortedBlogs);
          setFilteredBlogs(sortedBlogs);
          
          if (res.data.blogs.length !== allBlogs.length) {
            toast('📖 New sacred wisdom has been added', {
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
        console.error("Error fetching blogs:", error);
        if (isMounted) {
          toast.error("Failed to load sacred wisdom");
        }
      } finally {
        if (isMounted) {
          setIsFetching(false);
        }
      }
    };

    fetchBlogs();
    const intervalId = setInterval(fetchBlogs, POLLING_INTERVAL);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, [dispatch, allBlogs.length]);

  // Update filtered blogs when search term changes
  useEffect(() => {
    const filtered = blogs.filter(blog =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBlogs(filtered);
  }, [searchTerm, blogs]);

  // Close share menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shareMenuRef.current && !shareMenuRef.current.contains(event.target)) {
        setShareMenu({ open: false, blogId: null, blog: null });
      }
    };

    if (shareMenu.open) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [shareMenu.open]);

  // Email validation
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (name === 'email') {
      setEmailError(value && !validateEmail(value) ? 'Please enter a valid email address.' : '');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email) {
      setEmailError('Email is required.');
      return;
    }
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/subscribe/add`,
        formData,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success('Subscribed Successfully', {
          icon: '✅',
          style: {
            border: '1px solid #28a745',
            padding: '16px',
            color: '#fff',
            background: 'linear-gradient(135deg, #28a745, #218838)',
            fontWeight: '600',
          },
        });
        setFormData({ email: '' });
        setEmailError('');
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Failed To Subscribe');
    } finally {
      setLoading(false);
    }
  };

  const truncateContent = (content, maxLength = 120) => {
    return content.length > maxLength ? content.substring(0, maxLength) + '...' : content;
  };

  // Share functionality - Fixed version
  const handleShareClick = (e, blog) => {
    e.preventDefault();
    e.stopPropagation();
    
    setShareMenu({
      open: !shareMenu.open || shareMenu.blogId !== blog._id,
      blogId: blog._id,
      blog: blog
    });
  };

  const shareBlog = async (platform, blog) => {
    if (!blog) return;
    
    const blogUrl = `${window.location.origin}/blog/${blog._id}`;
    const text = `Check out this sacred wisdom: ${blog.title}`;
    
    let shareUrl = '';
    
    switch(platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(blogUrl)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(blogUrl)}`;
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(blogUrl);
          toast.success('Link copied to clipboard!', {
            autoClose: 2000,
            position: 'bottom-center'
          });
        } catch (err) {
          // Fallback for older browsers
          const textArea = document.createElement('textarea');
          textArea.value = blogUrl;
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
        setShareMenu({ open: false, blogId: null, blog: null });
        return;
      default:
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
    setShareMenu({ open: false, blogId: null, blog: null });
  };

  // Skeleton loader component
  const BlogSkeleton = () => (
    <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg h-full">
      <div className="relative h-52 sm:h-56 md:h-60 bg-gray-200 animate-pulse"></div>
      <div className="p-5 sm:p-6 md:p-7 flex flex-col h-[220px]">
        <div className="mb-4">
          <div className="h-6 bg-gray-200 rounded-full w-3/4 mb-2 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded-full w-1/2 animate-pulse"></div>
        </div>
        <div className="mb-4 flex-grow space-y-2">
          <div className="h-4 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded-full w-5/6 animate-pulse"></div>
        </div>
        <div className="mt-auto">
          <div className="flex justify-between mb-3">
            <div className="h-4 bg-gray-200 rounded-full w-24 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded-full w-20 animate-pulse"></div>
          </div>
          <div className="h-10 bg-gray-200 rounded-xl animate-pulse"></div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Media | Adiyogi Foundation</title>
        <meta name="description" content="Explore Adiyogi Foundation's media coverage, press releases, events, and updates on Dharma revival and spiritual awareness." />
        <meta name="keywords" content="Adiyogi Foundation Media, Press, News, Events, Dharma Awareness" />
        <link rel="canonical" href="https://www.adiyogifoundation.org.in/media" />

        <meta property="og:title" content="Media | Adiyogi Foundation" />
        <meta property="og:description" content="Stay updated with Adiyogi Foundation's latest news, media coverage, and spiritual events." />
        <meta property="og:url" content="https://www.adiyogifoundation.org.in/media" />
        <meta property="og:image" content="https://www.adiyogifoundation.org.in/INSTA.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Media | Adiyogi Foundation" />
        <meta name="twitter:description" content="Check media coverage and news about Adiyogi Foundation's spiritual mission." />
        <meta name="twitter:image" content="https://www.adiyogifoundation.org.in/INSTA.jpg" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-purple-50 via-purple-100 to-pink-50 pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-18 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6a0dad]/30 to-[#ff00ff]/20"></div>
          <div
            className="absolute inset-0 bg-center bg-cover opacity-20 bg-scroll"
            style={{
              backgroundImage: `url('/istockphoto-1221349438-612x612.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-lg">
                <Flame className="w-6 h-6 sm:w-8 sm:h-8 text-[#6a0dad] animate-pulse" />
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-[#6a0dad]" />
                <Flower className="w-6 h-6 sm:w-8 sm:h-8 text-[#6a0dad] animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 sm:mb-6 tracking-tight">
              Sacred <span className="text-[#6a0dad] relative">Media</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl sm:max-w-4xl mx-auto mb-6 sm:mb-10 leading-relaxed">
              Discover profound wisdom, spiritual insights, and transformative teachings
              from the ancient traditions that guide us toward divine consciousness.
            </p>

            <div className="flex justify-center items-center space-x-4 mb-6 sm:mb-8">
              <div className="w-12 sm:w-16 h-1 bg-[#6a0dad] rounded-full"></div>
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#6a0dad]" />
              <div className="w-12 sm:w-16 h-1 bg-[#6a0dad] rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-[#6a0dad] mx-auto mb-2 sm:mb-3" />
                <div className="text-xl sm:text-2xl font-bold text-gray-800">{isFetching ? '--' : blogs.length}</div>
                <div className="text-sm text-gray-600">Sacred Articles</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <Flame className="w-6 h-6 sm:w-8 sm:h-8 text-[#6a0dad] mx-auto mb-2 sm:mb-3" />
                <div className="text-xl sm:text-2xl font-bold text-gray-800">∞</div>
                <div className="text-sm text-gray-600">Infinite Wisdom</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-[#6a0dad] mx-auto mb-2 sm:mb-3" />
                <div className="text-xl sm:text-2xl font-bold text-gray-800">100%</div>
                <div className="text-sm text-gray-600">Transformative</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-10">
          <div 
            className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-2xl p-5 sm:p-6 md:p-8 mb-8 sm:mb-10 md:mb-12 border border-purple-100" 
            style={{boxShadow: '0 10px 30px rgba(106, 13, 173, 0.15)'}}
          >
            <div className="text-center mb-4 sm:mb-5 md:mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1 sm:mb-2 leading-tight">
                Search Sacred Wisdom
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-lg mx-auto">
                Find the teachings that resonate with your spiritual journey.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl">
                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 sm:w-6 sm:h-6" />
                <input
                  type="text"
                  placeholder="Search sacred wisdom, meditation, consciousness..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-4 border-2 border-purple-100 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6a0dad] focus:border-transparent text-base sm:text-lg transition-all duration-300 placeholder-gray-400"
                />
                {searchTerm && (
                  <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2">
                    <button
                      onClick={() => setSearchTerm('')}
                      className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                      aria-label="Clear search"
                    >
                      <X className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            {searchTerm && (
              <div className="mt-3 sm:mt-4 text-center">
                <p className="text-xs sm:text-sm text-gray-500">
                  Found {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''} matching "{searchTerm}"
                </p>
              </div>
            )}
          </div>
        </div>
      
        {/* Blog Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20 relative">
          {isFetching ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              {[...Array(6)].map((_, index) => (
                <BlogSkeleton key={index} />
              ))}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                {filteredBlogs.map((blog, index) => (
                  <div
                    key={blog._id}
                    className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2 group relative flex flex-col h-full"
                    style={{
                      boxShadow: '0 10px 30px rgba(106, 13, 173, 0.15)',
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {/* Number badge */}
                    <div className="absolute top-3 md:top-4 left-3 md:left-4 z-10 bg-[#6a0dad] text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-xs md:text-sm font-bold shadow-md md:shadow-lg">
                      {index+1}
                    </div>
                    
                    {/* Share button - Fixed */}
                    <div className="absolute top-3 md:top-4 right-3 md:right-4 z-20">
                      <button
                        onClick={(e) => handleShareClick(e, blog)}
                        className="bg-white/90 backdrop-blur-sm rounded-full p-1.5 md:p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-md hover:shadow-lg hover:bg-white hover:scale-110"
                        aria-label="Share this article"
                      >
                        <Share2 className="w-4 h-4 md:w-5 md:h-5 text-[#6a0dad]" />
                      </button>
                    </div>

                    {/* Image */}
                    <Link to={`/blog/${blog._id}`} className="relative overflow-hidden group h-52 sm:h-56 md:h-60">
                      <img
                        src={blog.imageUrl}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-3 md:top-4 right-12 md:right-14 bg-white/90 backdrop-blur-sm rounded-full p-1.5 md:p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <Eye className="w-4 h-4 md:w-5 md:h-5 text-[#6a0dad]" />
                      </div>
                    </Link>
                    
                    {/* Content area */}
                    <div className="p-5 sm:p-6 md:p-7 flex flex-col" style={{ minHeight: '220px' }}>
                      <div className="mb-3 md:mb-4">
                        <Link to={`/blog/${blog._id}`}>
                          <h3 className="text-lg sm:text-xl md:text-xl font-bold text-gray-800 group-hover:text-[#6a0dad] transition-colors duration-300 leading-tight line-clamp-2">
                            {blog.title}
                          </h3>
                        </Link>
                      </div>
                      
                      <div className="mb-4 md:mb-5 flex-grow overflow-hidden">
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3 h-full">
                          {truncateContent(blog.content, 140)}
                        </p>
                      </div>
                      
                      <div className="mt-auto">
                        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-3 md:mb-4">
                          <div className="flex items-center bg-gray-50 rounded-full px-2 py-1.5 sm:px-3 sm:py-2">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric',
                              year: 'numeric'
                            })}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                            <span>{Math.ceil(blog.content.length / 460)} min read</span>
                          </div>
                        </div>
                        
                        <Link
                          to={`/blog/${blog._id}`}
                          className="w-full bg-[#6a0dad] text-white py-2 sm:py-3 rounded-xl md:rounded-2xl font-semibold hover:bg-[#ff00ff] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center group/btn"
                        >
                          <span className="flex items-center">
                            Read Full Article
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredBlogs.length === 0 && (
                <div className="text-center py-16 md:py-20">
                  <div className="relative inline-block mb-5 md:mb-6">
                    <Flower className="w-16 h-16 md:w-20 md:h-20 text-gray-300 mx-auto" />
                    <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-gray-200 absolute -top-1 -right-1 md:-top-2 md:-right-2 animate-pulse" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-600 mb-2 md:mb-3">No Sacred Wisdom Found</h3>
                  <p className="text-gray-500 text-base md:text-lg mb-4 md:mb-6">The universe hasn't revealed those teachings yet</p>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="bg-[#6a0dad] text-white px-6 py-2 md:px-8 md:py-3 rounded-lg md:rounded-xl font-semibold hover:bg-[#ff00ff] transition-colors duration-300"
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </>
          )}
 
          {shareMenu.open && shareMenu.blog && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
              <div 
                ref={shareMenuRef}
                className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden"
              >
                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800">Share this Article</h3>
                </div>
                
                {/* Share Buttons */}
                <div className="p-6 grid grid-cols-2 gap-4">
                  <button
                    onClick={() => shareBlog('facebook', shareMenu.blog)}
                    className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-100 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                      <Facebook className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Facebook</span>
                  </button>

                  <button
                    onClick={() => shareBlog('twitter', shareMenu.blog)}
                    className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-100 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                      <Twitter className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Twitter</span>
                  </button>

                  <button
                    onClick={() => shareBlog('linkedin', shareMenu.blog)}
                    className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-100 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                      <Linkedin className="w-6 h-6 text-blue-700" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">LinkedIn</span>
                  </button>

                  <button
                    onClick={() => shareBlog('copy', shareMenu.blog)}
                    className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                      <LinkIcon className="w-6 h-6 text-gray-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Copy Link</span>
                  </button>
                </div>

                {/* Cancel Button */}
                <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                  <button
                    onClick={() => setShareMenu({ open: false, blog: null })}
                    className="w-full py-2 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Newsletter Section */}
        <div
          className="text-white py-7 sm:py-8 md:py-9 lg:py-10"
          style={{
            background: 'linear-gradient(135deg, rgba(106, 13, 173, 0.7) 0%, rgba(255, 0, 255, 1) 100%)',
            boxShadow: '0 8px 32px rgba(106, 13, 173, 0.15)',
          }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Icon - responsive sizing */}
            <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
              <Flower className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white animate-pulse" />
            </div>

            {/* Heading - responsive sizing */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.7rem] font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
              Stay Connected to Sacred Wisdom
            </h2>

            {/* Subheading - responsive sizing */}
            <p className="text-base sm:text-lg md:text-xl lg:text-[1.25rem] text-purple-100 max-w-3xl mx-auto mb-6 sm:mb-7 md:mb-8 leading-relaxed">
              Subscribe to receive the latest spiritual insights and transformative teachings directly to your journey.
            </p>

            {/* Form - responsive layout */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 justify-center max-w-md sm:max-w-xl mx-auto"
            >
              <div className="flex-1 w-full">
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg border-2 bg-white text-gray-800 placeholder-gray-500 focus:outline-none text-sm sm:text-base ${
                    emailError ? 'border-red-400' : 'border-transparent'
                  }`}
                />
                {emailError && (
                  <p className="text-white text-xs sm:text-sm mt-1 ml-1 text-left">{emailError}</p>
                )}
              </div>

              {/* Button - responsive sizing */}
              <button
                type="submit"
                disabled={loading}
                className="bg-white text-[#6a0dad] px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-100 hover:scale-x-105 shadow-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-sm sm:text-base"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-[#6a0dad]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <>
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[#6a0dad]" />
                    <span>Subscribe</span>
                  </>
                )}
              </button>
            </form>

            {/* Footer text - responsive sizing */}
            <p className="text-xs sm:text-sm text-purple-100 mt-4 sm:mt-5 md:mt-6 opacity-80">
              Join thousands of seekers on their spiritual journey.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Media;
