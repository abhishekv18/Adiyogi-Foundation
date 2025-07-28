
// import React, { useState, useEffect, useCallback } from 'react';
// import { Search, Calendar, BookOpen, Flame, Star, Flower, X, ArrowRight, Eye, Clock, Sparkles, Mail } from 'lucide-react';
// import { setAllBlogs } from './redux/blogSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const Media = () => {
//     const dispatch=useDispatch();




// const navigate=useNavigate();

//  const user = useSelector((state) => state.auth.user);

//   useEffect(() => {
//     if (user) {
//       navigate('/admin-dashboard');
//     }
//   }, [user]);
// const [loading, setLoading] = useState(false);


// const[formData, setFormData] = useState({
//     email: ''
//   });



// const [emailError, setEmailError] = useState('');

// const validateEmail = (email) => {
//   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(email);
// };

// const handleInputChange = (e) => {
//   const { name, value } = e.target;
//   setFormData({ ...formData, [name]: value });
  

//    if (name === 'email') {
//   setEmailError(value && !validateEmail(value) ? 'Please enter a valid email address.' : '');
// }

// };

// const handleSubmit = async (e) => {
//   e.preventDefault();
  
//   // Final validation before submit
//   if (!formData.email) {
//     setEmailError('Email is required.');
//     return;
//   }
//   if (!validateEmail(formData.email)) {
//     setEmailError('Please enter a valid email address.');
//     return;
//   }

//   setLoading(true);
//   try {
//     const res = await axios.post(
//       `${import.meta.env.VITE_API_URL}/api/subscribe/add`,
//       formData,
//       {
//         headers: { 'Content-Type': 'application/json' },
//         withCredentials: true,
//       }
//     );

//     if (res.data.success) {
//       toast.success('Subscribed Successfully', {
//         icon: '✅',
//         style: {
//           border: '1px solid #28a745',
//           padding: '16px',
//           color: '#fff',
//           background: 'linear-gradient(135deg, #28a745, #218838)',
//           fontWeight: '600',
//         },
//       });
//       setFormData({ email: '' });
//       setEmailError('');
//     }
//   } catch (error) {
//     console.error(error);
//     toast.error(error.response?.data?.message || 'Failed To Subscribe');
//   } finally {
//     setLoading(false);
//   }
// };





//      const { allBlogs = [],loadin } = useSelector((state) => state.blog);
//   const [blogs, setBlogs] = useState(allBlogs);
//   const [selectedIndex, setSelectedIndex] = useState(null);
//   const [filteredBlogs, setFilteredBlogs] = useState(allBlogs);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all');

//   const [selectedBlog, setSelectedBlog] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

 

// useEffect(() => {
//   const fetchAllBlogs = async () => {
//     try {
//       const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog/get`, {
//         withCredentials: true,
//       });
//       if (res.data.success) {
//         dispatch(setAllBlogs(res.data.blogs));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   fetchAllBlogs();
// }, [dispatch]);

// console.log(allBlogs)


//   useEffect(() => {
//     let filtered = blogs;
    
//     if (searchTerm) {
//       filtered = filtered.filter(blog =>
//         blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         blog.content.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
    
//     setFilteredBlogs(filtered);
//   }, [searchTerm, blogs]);

//   const categories = ['all', ...new Set(blogs.map(blog => blog.category))];

//   const truncateContent = (content, maxLength = 120) => {
//     return content.length > maxLength ? content.substring(0, maxLength) + '...' : content;
//   };



//   const closeModal = () => {
//     setSelectedBlog(null);
//     setIsModalOpen(false);
//   };

//   if (loadin) {
//     return (
//       <div className="min-h-screen bg-rose-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="relative">
//             <Flower className="w-16 h-16 text-sacred-crimson animate-spin mx-auto mb-4" />
            
//           </div>
//           <p className="text-gray-600 text-lg font-medium">Loading sacred wisdom...</p>
//           <div className="mt-4 flex justify-center space-x-1">
//             <div className="w-2 h-2 bg-sacred-crimson rounded-full animate-pulse"></div>
//             <div className="w-2 h-2 bg-sacred-crimson rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
//             <div className="w-2 h-2 bg-sacred-crimson rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-rose-50">
     
// <div className="relative bg-gradient-to-br from-rose-50 via-rose-100 to-red-50 pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-18 md:pb-20 overflow-hidden">

//   <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-red-800/20"></div>

//   <div
//     className="absolute inset-0 bg-center bg-cover bg-fixed opacity-20"
//     style={{
//       backgroundImage: `url('/istockphoto-1221349438-612x612.jpg')`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundAttachment: 'fixed',
//     }}
//   ></div>

//   <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
//     <div className="flex justify-center mb-6 sm:mb-8">
//       <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-lg">
//         <Flame className="w-6 h-6 sm:w-8 sm:h-8 text-sacred-crimson animate-pulse" />
//         <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-sacred-crimson" />
//         <Flower className="w-6 h-6 sm:w-8 sm:h-8 text-sacred-crimson animate-pulse" style={{ animationDelay: '1s' }} />
//       </div>
//     </div>

//     <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 sm:mb-6 tracking-tight">
//       Sacred <span className="text-sacred-crimson relative">Media</span>
//     </h1>

//     <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl sm:max-w-4xl mx-auto mb-6 sm:mb-10 leading-relaxed">
//       Discover profound wisdom, spiritual insights, and transformative teachings
//       from the ancient traditions that guide us toward divine consciousness.
//     </p>

//     <div className="flex justify-center items-center space-x-4 mb-6 sm:mb-8">
//       <div className="w-12 sm:w-16 h-1 bg-sacred-crimson rounded-full"></div>
//       <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-sacred-crimson" />
//       <div className="w-12 sm:w-16 h-1 bg-sacred-crimson rounded-full"></div>
//     </div>

//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto">
//       <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
//         <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-sacred-crimson mx-auto mb-2 sm:mb-3" />
//         <div className="text-xl sm:text-2xl font-bold text-gray-800">{blogs.length}</div>
//         <div className="text-sm text-gray-600">Sacred Articles</div>
//       </div>
//       <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
//         <Flame className="w-6 h-6 sm:w-8 sm:h-8 text-sacred-crimson mx-auto mb-2 sm:mb-3" />
//         <div className="text-xl sm:text-2xl font-bold text-gray-800">∞</div>
//         <div className="text-sm text-gray-600">Infinite Wisdom</div>
//       </div>
//       <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
//         <Star className="w-6 h-6 sm:w-8 sm:h-8 text-sacred-crimson mx-auto mb-2 sm:mb-3" />
//         <div className="text-xl sm:text-2xl font-bold text-gray-800">100%</div>
//         <div className="text-sm text-gray-600">Transformative</div>
//       </div>
//     </div>
//   </div>
// </div>


//       {/* Search Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
//         <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border border-rose-100" style={{boxShadow: '0 20px 40px rgba(196, 30, 58, 0.15)'}}>
//           <div className="text-center mb-6">
//             <h2 className="text-2xl font-bold text-gray-800 mb-2">Search Sacred Wisdom</h2>
//             <p className="text-gray-600">Find the teachings that resonate with your spiritual journey.</p>
//           </div>
//           <div className="flex justify-center">
//             <div className="relative max-w-xl w-full">
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
//               <input
//                 type="text"
//                 placeholder="Search sacred wisdom, meditation, consciousness..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-12 pr-6 py-4 border-2 border-rose-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-lg transition-all duration-300"
//               />
//               {searchTerm && (
//                 <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
//                   <button
//                     onClick={() => setSearchTerm('')}
//                     className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
//                   >
//                     <X className="w-5 h-5" />
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//           {searchTerm && (
//             <div className="mt-4 text-center">
//               <p className="text-sm text-gray-500">
//                 Found {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''} matching "{searchTerm}"
//               </p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Blog Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {filteredBlogs.map((blog, index) => (
//             <div
//               key={blog.id}
//               className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group relative"
//               style={{
//                 boxShadow: '0 10px 30px rgba(196, 30, 58, 0.15)',
//                 animationDelay: `${index * 0.1}s`
//               }}
//             >
//               {/* Card Number Badge */}
//               <div className="absolute top-4 left-4 z-10 bg-sacred-crimson text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg">
//                 {index+1}
//               </div>
              
//               <div className="relative overflow-hidden group">
//   <img
//     src={blog.imageUrl}
//     alt={blog.title}
//     className="w-full h-56 sm:h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
//   />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
//                 {/* Floating Icon */}
//                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
//                   <Eye className="w-5 h-5 text-sacred-crimson" />
//                 </div>
//               </div>
              
//               <div className="p-8">
//                 <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors duration-300 leading-tight">
//                   {blog.title}
//                 </h3>
//                 <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
//                   {truncateContent(blog.content, 140)}
//                 </p>
                
//                 <div className="flex items-center justify-between mb-6">
//                   <div className="flex items-center text-sm text-gray-500 bg-gray-50 rounded-full px-3 py-2">
//                     <Calendar className="w-4 h-4 mr-2" />
//                     <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { 
//                       month: 'short', 
//                       day: 'numeric',
//                       year: 'numeric'
//                     })}</span>
//                   </div>
//                   <div className="flex items-center text-sm text-gray-500">
//                     <Clock className="w-4 h-4 mr-1" />
//                     <span>{Math.ceil(blog.content.length / 200) // in minutes
// } min read</span>
//                   </div>
//                 </div>
                
//                 <button 
//                 onClick={() => { 
//       setSelectedBlog(blog); 
//       setSelectedIndex(index); 
//       setIsModalOpen(true); 
//   }}
//                   className="w-full cursor-pointer bg-sacred-crimson text-white py-4 rounded-2xl font-semibold hover:from-red-800 hover:to-red-900 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group/btn relative overflow-hidden"
//                 >
//                   <span className="relative z-10 flex items-center">
//                     Read Full Article
//                     <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
//                   </span>
//                   <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {filteredBlogs.length === 0 && (
//           <div className="text-center py-20">
//             <div className="relative inline-block mb-6">
//               <Flower className="w-20 h-20 text-gray-300 mx-auto" />
//               <Sparkles className="w-8 h-8 text-gray-200 absolute -top-2 -right-2 animate-pulse" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-600 mb-3">No Sacred Wisdom Found</h3>
//             <p className="text-gray-500 text-lg mb-6">The universe hasn't revealed those teachings yet</p>
//             <button
//               onClick={() => setSearchTerm('')}
//               className="bg-sacred-crimson text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300"
//             >
//               Clear Search
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Modal for Full Article */}
//     {isModalOpen && selectedBlog && (
//   <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-2 sm:p-4 z-50 backdrop-blur-sm">
//     <div className="bg-white rounded-2xl sm:rounded-3xl max-w-5xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl transform transition-all duration-300 mx-2">
//       <div className="relative">
//         {/* Modal Header */}
//         <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-rose-100 p-4 sm:p-6 md:p-8 flex items-center justify-between z-10">
//           <div className="flex items-center space-x-2 sm:space-x-4 overflow-hidden">
//             <div className="bg-sacred-crimson text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">
//               {selectedIndex !== null ? selectedIndex + 1 : ''}
//             </div>
//             <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 pr-2 sm:pr-8 truncate">
//               {selectedBlog.title}
//             </h2>
//           </div>
//           <button
//             onClick={closeModal}
//             className="p-2 sm:p-3 text-gray-400 hover:text-gray-600 hover:bg-rose-50 rounded-full transition-all duration-300 hover:rotate-90 flex-shrink-0"
//           >
//             <X className="w-5 h-5 sm:w-6 sm:h-6" />
//           </button>
//         </div>
        
//         {/* Modal Content */}
//         <div className="p-4 sm:p-6 md:p-8 overflow-y-auto max-h-[calc(95vh-120px)] sm:max-h-[calc(90vh-140px)]">
//           {/* Meta Information */}
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 p-3 sm:p-4 bg-rose-50 rounded-xl sm:rounded-2xl gap-2 sm:gap-0">
//             <div className="flex items-center space-x-2 sm:space-x-6 overflow-x-auto pb-2 sm:pb-0">
//               <div className="flex items-center text-xs sm:text-sm text-gray-600 bg-white rounded-full px-3 py-1 sm:px-4 sm:py-2 shadow-sm whitespace-nowrap">
//                 <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-sacred-crimson" />
//                 <span>{new Date(selectedBlog.createdAt).toLocaleDateString('en-US', { 
//                   year: 'numeric', 
//                   month: 'long', 
//                   day: 'numeric' 
//                 })}</span>
//               </div>
//               <div className="flex items-center text-xs sm:text-sm text-gray-600 bg-white rounded-full px-3 py-1 sm:px-4 sm:py-2 shadow-sm whitespace-nowrap">
//                 <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-sacred-crimson" />
//                 <span>{Math.ceil(selectedBlog.content.length / 200)} min read</span>
//               </div>
//             </div>
//             <div className="flex items-center space-x-1 sm:space-x-2">
//               <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-sacred-crimson" />
//               <span className="text-xs sm:text-sm text-gray-600 font-medium">Sacred Wisdom</span>
//             </div>
//           </div>
          
//           {/* Image */}
//           <div className="mb-6 sm:mb-8 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl w-full">
//             <img
//               src={selectedBlog.imageUrl}
//               alt={selectedBlog.title}
//               // className="w-full h-48 sm:h-72 md:h-96 object-contain rounded-lg shadow"
//                  className="w-full object-contain rounded-lg shadow max-h-[600px]"
//             />
//           </div>
          
//           {/* Content */}
//           <div className="prose prose-sm sm:prose-lg max-w-none">
//             <div className="text-gray-700 leading-relaxed text-base sm:text-lg whitespace-pre-line">
//               {selectedBlog.content}
//             </div>
//           </div>
          
//           {/* Modal Footer */}
//           <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-rose-100">
//             <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 sm:gap-4">
//               <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto justify-between sm:justify-start">
//                 <div className="flex items-center space-x-1 sm:space-x-2 bg-rose-50 rounded-full px-3 py-1 sm:px-4 sm:py-2">
//                   <Flower className="w-4 h-4 sm:w-6 sm:h-6 text-red-600" />
//                   <span className="text-xs sm:text-sm text-gray-600 font-medium">Sacred Wisdom</span>
//                 </div>
//                 <div className="flex items-center space-x-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-sacred-crimson fill-current" />
//                   ))}
//                 </div>
//               </div>
//               <button
//                 onClick={closeModal}
//                 className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto text-center"
//               >
//                 Close Article
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// )}

//       {/* Call to Action Section */}
//    <div
//   className="text-white py-14"
//   style={{
//     background: 'linear-gradient(135deg, rgba(196, 30, 58, 0.7) 0%, rgba(139, 21, 56, 1) 100%)',
//     boxShadow: '0 8px 32px rgba(196, 30, 58, 0.15)',
//   }}
// >
//   <div className="max-w-5xl mx-auto px-6 text-center">
//     {/* Sacred Icon */}
//     <div className="flex justify-center mb-6">
//       <Flower className="w-14 h-14 text-[#FFFEF7] animate-pulse" />
//     </div>

//     {/* Title & Subtitle */}
//     <h2 className="text-3xl md:text-4xl font-bold mb-3">
//       Stay Connected to Sacred Wisdom
//     </h2>
//     <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto mb-8">
//       Subscribe to receive the latest spiritual insights and transformative teachings directly to your journey.
//     </p>


// <form
//   onSubmit={handleSubmit}
//   className="flex flex-col sm:flex-row sm:items-start gap-4 justify-center max-w-xl mx-auto"
// >
//   <div className="flex-1">
//     <input
//       name="email"
//       value={formData.email}
//       onChange={handleInputChange}
//       type="email"
//       placeholder="Enter your email"
//       className={`w-full px-5 py-3 rounded-lg border-2 bg-white text-gray-800 placeholder-gray-500 focus:outline-none ${
//         emailError ? 'border-red-400' : 'border-transparent'
//       }`}
//     />
//     {emailError && (
//       <p className="text-white text-sm mt-1 ml-1">{emailError}</p>
//     )}
//   </div>

 
// <button
//   type="submit"
//   disabled={loading}
//   className="bg-white text-[#C41E3A] px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-100 hover:scale-x-105 shadow-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
// >
//   {loading ? (
//     <>
//       <svg
//         className="animate-spin h-5 w-5 text-[#C41E3A]"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//       >
//         <circle
//           className="opacity-25"
//           cx="12"
//           cy="12"
//           r="10"
//           stroke="currentColor"
//           strokeWidth="4"
//         ></circle>
//         <path
//           className="opacity-75"
//           fill="currentColor"
//           d="M4 12a8 8 0 018-8v8H4z"
//         ></path>
//       </svg>
//       <span>Subscribing...</span>
//     </>
//   ) : (
//     <>
//       <Mail className="h-5 w-5 text-[#C41E3A]" />
//       <span>Subscribe</span>
//     </>
//   )}
// </button>

// </form>



//     {/* Trust Statement */}
//     <p className="text-sm text-red-100 mt-6 opacity-80">
//       Join thousands of seekers on their spiritual journey.
//     </p>
//   </div>
// </div>


//     </div>
//   );
// };

// export default Media;


// import React, { useState, useEffect } from 'react';
// import { Search, Calendar, BookOpen, Flame, Star, Flower, X, ArrowRight, Eye, Clock, Sparkles, Mail } from 'lucide-react';
// import { setAllBlogs } from './redux/blogSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const Media = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.auth.user);
//   const { allBlogs = [] } = useSelector((state) => state.blog);
  
//   // Local states
//   const [loading, setLoading] = useState(false);
//   const [blogs, setBlogs] = useState(allBlogs);
//   const [filteredBlogs, setFilteredBlogs] = useState(allBlogs);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedBlog, setSelectedBlog] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formData, setFormData] = useState({ email: '' });
//   const [emailError, setEmailError] = useState('');
//   const [isFetching, setIsFetching] = useState(true);

//   // Redirect if user is logged in
//   useEffect(() => {
//     if (user) {
//       navigate('/admin-dashboard');
//     }
//   }, [user, navigate]);

//   // Fetch blogs on component mount
//   useEffect(() => {
//     const fetchBlogs = async () => {
//       setIsFetching(true);
//       try {
//         const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog/get`, {
//           withCredentials: true,
//         });
        
//         if (res.data.success) {
//           dispatch(setAllBlogs(res.data.blogs));
//           setBlogs(res.data.blogs);
//           setFilteredBlogs(res.data.blogs);
//         }
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//         toast.error("Failed to load sacred wisdom");
//       } finally {
//         setIsFetching(false);
//       }
//     };

//     // Only fetch if we don't already have blogs
  
//   // Update filtered blogs when search term changes
//   useEffect(() => {
//     const filtered = blogs.filter(blog =>
//       blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       blog.content.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredBlogs(filtered);
//   }, [searchTerm, blogs]);
// import React, { useState, useEffect } from 'react';
// import { Search, Calendar, BookOpen, Flame, Star, Flower, X, ArrowRight, Eye, Clock, Sparkles, Mail } from 'lucide-react';
// import { setAllBlogs } from './redux/blogSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const Media = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.auth.user);
//   const { allBlogs = [] } = useSelector((state) => state.blog);
  
//   // Local states
//   const [loading, setLoading] = useState(false);
//   const [blogs, setBlogs] = useState(allBlogs);
//   const [filteredBlogs, setFilteredBlogs] = useState(allBlogs);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedBlog, setSelectedBlog] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formData, setFormData] = useState({ email: '' });
//   const [emailError, setEmailError] = useState('');
//   const [isFetching, setIsFetching] = useState(true);

//   // Redirect if user is logged in
//   useEffect(() => {
//     if (user) {
//       navigate('/admin-dashboard');
//     }
//   }, [user, navigate]);

//   // Fetch blogs with polling
//   useEffect(() => {
//     let isMounted = true;
//     const POLLING_INTERVAL = 10000; // 30 seconds

//     const fetchBlogs = async () => {
//       try {
//         const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog/get`, {
//           withCredentials: true,
//         });
        
//         if (res.data.success && isMounted) {
//           dispatch(setAllBlogs(res.data.blogs));
//           setBlogs(res.data.blogs);
//           setFilteredBlogs(res.data.blogs);
          
//           // Only show notification if there were actual changes
//           if (res.data.blogs.length !== allBlogs.length) {
//  toast.info('New sacred wisdom has been added', {
//   icon: '📖',
//   autoClose: 1500,
//   hideProgressBar: true,
//   className: 'bg-red-700 text-white font-semibold text-center shadow-lg rounded-md',
//   style: {
//     fontSize: 'clamp(12px, 3vw, 14px)',
//     padding: 'clamp(8px, 2vw, 12px) clamp(10px, 3vw, 16px)',
//     width: 'fit-content',
//     maxWidth: 'min(90vw, 400px)',
//     boxSizing: 'border-box',
//     wordBreak: 'break-word',
//     margin: 'clamp(8px, 2vw, 16px)',
//   },
//   bodyStyle: {
//     margin: 0,
//   },
//   position: 'top-center',
// });


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

//     // Initial fetch
//     fetchBlogs();
    
//     // Set up polling
//     const intervalId = setInterval(fetchBlogs, POLLING_INTERVAL);

//     // Clean up
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

//   const closeModal = () => {
//     setSelectedBlog(null);
//     setIsModalOpen(false);
//   };

//   if (isFetching) {
//     return (
  
//       <div className="min-h-screen bg-rose-50 flex items-center justify-center px-4">
//   <div className="text-center space-y-4">
//     <div className="relative flex justify-center">
//       <Flower className="w-16 h-16 text-sacred-crimson animate-spin-slow" />
//     </div>
//     <p className="text-gray-700 text-lg font-semibold tracking-wide">
//       Loading sacred wisdom...
//     </p>
//     <div className="flex justify-center space-x-2">
//       <span className="w-2.5 h-2.5 bg-sacred-crimson rounded-full animate-ping"></span>
//       <span
//         className="w-2.5 h-2.5 bg-sacred-crimson rounded-full animate-ping"
//         style={{ animationDelay: '0.2s' }}
//       ></span>
//       <span
//         className="w-2.5 h-2.5 bg-sacred-crimson rounded-full animate-ping"
//         style={{ animationDelay: '0.4s' }}
//       ></span>
//     </div>
//   </div>
// </div>

//     );
//   }

//   return (
//     <div className="min-h-screen bg-rose-50">
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-br from-rose-50 via-rose-100 to-red-50 pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-18 md:pb-20 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-red-800/20"></div>
//         <div
//           className="absolute inset-0 bg-center bg-cover bg-fixed opacity-20"
//           style={{
//             backgroundImage: `url('/istockphoto-1221349438-612x612.jpg')`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundAttachment: 'fixed',
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
//               <div className="text-xl sm:text-2xl font-bold text-gray-800">{blogs.length}</div>
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
//       {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
//         <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border border-rose-100" style={{boxShadow: '0 20px 40px rgba(196, 30, 58, 0.15)'}}>
//           <div className="text-center mb-6">
//             <h2 className="text-2xl font-bold text-gray-800 mb-2">Search Sacred Wisdom</h2>
//             <p className="text-gray-600">Find the teachings that resonate with your spiritual journey.</p>
//           </div>
//           <div className="flex justify-center">
//             <div className="relative max-w-xl w-full">
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
//               <input
//                 type="text"
//                 placeholder="Search sacred wisdom, meditation, consciousness..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-12 pr-6 py-4 border-2 border-rose-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-lg transition-all duration-300"
//               />
//               {searchTerm && (
//                 <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
//                   <button
//                     onClick={() => setSearchTerm('')}
//                     className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
//                   >
//                     <X className="w-5 h-5" />
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//           {searchTerm && (
//             <div className="mt-4 text-center">
//               <p className="text-sm text-gray-500">
//                 Found {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''} matching "{searchTerm}"
//               </p>
//             </div>
//           )}
//         </div>
//       </div> */}
// <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-10">
//   <div 
//     className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-2xl p-5 sm:p-6 md:p-8 mb-8 sm:mb-10 md:mb-12 border border-rose-100" 
//     style={{boxShadow: '0 10px 30px rgba(196, 30, 58, 0.15)'}}
//   >
//     <div className="text-center mb-4 sm:mb-5 md:mb-6">
//       <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1 sm:mb-2 leading-tight">
//         Search Sacred Wisdom
//       </h2>
//       <p className="text-sm sm:text-base text-gray-600 max-w-lg mx-auto">
//         Find the teachings that resonate with your spiritual journey.
//       </p>
//     </div>
    
//     <div className="flex justify-center">
//       <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl">
//         <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 sm:w-6 sm:h-6" />
//         <input
//           type="text"
//           placeholder="Search sacred wisdom, meditation, consciousness..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-4 border-2 border-rose-100 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-base sm:text-lg transition-all duration-300 placeholder-gray-400"
//         />
//         {searchTerm && (
//           <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2">
//             <button
//               onClick={() => setSearchTerm('')}
//               className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
//               aria-label="Clear search"
//             >
//               <X className="w-4 h-4 sm:w-5 sm:h-5" />
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
    
//     {searchTerm && (
//       <div className="mt-3 sm:mt-4 text-center">
//         <p className="text-xs sm:text-sm text-gray-500">
//           Found {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''} matching "{searchTerm}"
//         </p>
//       </div>
//     )}
//   </div>
// </div>
 
// <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
//     {filteredBlogs.map((blog, index) => (
//       <div
//         key={blog._id}
//         className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2 group relative flex flex-col h-full"
//         style={{
//           boxShadow: '0 10px 30px rgba(196, 30, 58, 0.15)',
//           animationDelay: `${index * 0.1}s`
//         }}
//       >
//         {/* Number badge - responsive sizing */}
//         <div className="absolute top-3 md:top-4 left-3 md:left-4 z-10 bg-sacred-crimson text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-xs md:text-sm font-bold shadow-md md:shadow-lg">
//           {index+1}
//         </div>
        
//         {/* Image - fixed height container */}
//         <div className="relative overflow-hidden group h-52 sm:h-56 md:h-60">
//           <img
//             src={blog.imageUrl}
//             alt={blog.title}
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-white/90 backdrop-blur-sm rounded-full p-1.5 md:p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
//             <Eye className="w-4 h-4 md:w-5 md:h-5 text-sacred-crimson" />
//           </div>
//         </div>
        
//         {/* Content area with fixed height */}
//         <div className="p-5 sm:p-6 md:p-7 flex flex-col" style={{ minHeight: '220px' }}>
//           {/* Title section */}
//           <div className="mb-3 md:mb-4">
//             <h3 className="text-lg sm:text-xl md:text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300 leading-tight line-clamp-2">
//               {blog.title}
//             </h3>
//           </div>
          
//           {/* Content with fixed height and scroll if needed */}
//           <div className="mb-4 md:mb-5 flex-grow overflow-hidden">
//             <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3 h-full">
//               {truncateContent(blog.content, 140)}
//             </p>
//           </div>
          
//           {/* Metadata and button section - always at bottom */}
//           <div className="mt-auto">
//             <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-3 md:mb-4">
//               <div className="flex items-center bg-gray-50 rounded-full px-2 py-1.5 sm:px-3 sm:py-2">
//                 <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
//                 <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { 
//                   month: 'short', 
//                   day: 'numeric',
//                   year: 'numeric'
//                 })}</span>
//               </div>
//               <div className="flex items-center">
//                 <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
//                 <span>{Math.ceil(blog.content.length / 200)} min read</span>
//               </div>
//             </div>
            
//             {/* Button - full width and consistent */}
//             <button 
//               onClick={() => { 
//                 setSelectedBlog(blog); 
//                 setIsModalOpen(true); 
//               }}
//               className="w-full bg-sacred-crimson text-white py-2 sm:py-3 rounded-xl md:rounded-2xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center group/btn"
//             >
//               <span className="flex items-center">
//                 Read Full Article
//                 <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
  
//   {filteredBlogs.length === 0 && (
//     <div className="text-center py-16 md:py-20">
//       <div className="relative inline-block mb-5 md:mb-6">
//         <Flower className="w-16 h-16 md:w-20 md:h-20 text-gray-300 mx-auto" />
//         <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-gray-200 absolute -top-1 -right-1 md:-top-2 md:-right-2 animate-pulse" />
//       </div>
//       <h3 className="text-xl md:text-2xl font-bold text-gray-600 mb-2 md:mb-3">No Sacred Wisdom Found</h3>
//       <p className="text-gray-500 text-base md:text-lg mb-4 md:mb-6">The universe hasn't revealed those teachings yet</p>
//       <button
//         onClick={() => setSearchTerm('')}
//         className="bg-sacred-crimson text-white px-6 py-2 md:px-8 md:py-3 rounded-lg md:rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300"
//       >
//         Clear Search
//       </button>
//     </div>
//   )}
// </div>
    import React, { useState, useEffect } from 'react';
import { Search, Calendar, BookOpen, Flame, Star, Flower, X, ArrowRight, Eye, Clock, Sparkles, Mail } from 'lucide-react';
import { setAllBlogs } from './redux/blogSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Media = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const { allBlogs = [] } = useSelector((state) => state.blog);
  
  // Local states
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState(allBlogs);
  const [filteredBlogs, setFilteredBlogs] = useState(allBlogs);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ email: '' });
  const [emailError, setEmailError] = useState('');
  const [isFetching, setIsFetching] = useState(true);

  // Redirect if user is logged in
  useEffect(() => {
    if (user) {
      navigate('/admin-dashboard');
    }
  }, [user, navigate]);

  // Fetch blogs with polling
  useEffect(() => {
    let isMounted = true;
    const POLLING_INTERVAL = 10000; // 30 seconds

    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog/get`, {
          withCredentials: true,
        });
        
        if (res.data.success && isMounted) {
          dispatch(setAllBlogs(res.data.blogs));
          setBlogs(res.data.blogs);
          setFilteredBlogs(res.data.blogs);
          
          // Only show notification if there were actual changes
          if (res.data.blogs.length !== allBlogs.length) {
            // toast.info('New sacred wisdom has been added', {
            //   icon: '📖',
            //   autoClose: 1500,
            //   hideProgressBar: true,
            //   className: 'bg-red-700 text-white font-semibold text-center shadow-lg rounded-md',
            //   style: {
            //     fontSize: 'clamp(12px, 3vw, 14px)',
            //     padding: 'clamp(8px, 2vw, 12px) clamp(10px, 3vw, 16px)',
            //     width: 'fit-content',
            //     maxWidth: 'min(90vw, 400px)',
            //     boxSizing: 'border-box',
            //     wordBreak: 'break-word',
            //     margin: 'clamp(8px, 2vw, 16px)',
            //   },
            //   bodyStyle: {
            //     margin: 0,
            //   },
            //   position: 'top-center',
            // });
toast('📖 New sacred wisdom has been added', {
  autoClose: 1500,
  hideProgressBar: true,
  className: 'bg-red-300 text-white font-semibold text-center shadow-lg rounded-md',
  style: {
  background: '#fca5a5', // red-300 (very light red)
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
  icon: false, // Remove default icon if you're using emoji in text
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

    // Initial fetch
    fetchBlogs();
    
    // Set up polling
    const intervalId = setInterval(fetchBlogs, POLLING_INTERVAL);

    // Clean up
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

  const closeModal = () => {
    setSelectedBlog(null);
    setIsModalOpen(false);
  };

  // Skeleton loader component
  const BlogSkeleton = () => (
    <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg h-full">
      {/* Image skeleton */}
      <div className="relative h-52 sm:h-56 md:h-60 bg-gray-200 animate-pulse"></div>
      
      {/* Content skeleton */}
      <div className="p-5 sm:p-6 md:p-7 flex flex-col h-[220px]">
        {/* Title skeleton */}
        <div className="mb-4">
          <div className="h-6 bg-gray-200 rounded-full w-3/4 mb-2 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded-full w-1/2 animate-pulse"></div>
        </div>
        
        {/* Content skeleton */}
        <div className="mb-4 flex-grow space-y-2">
          <div className="h-4 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded-full w-5/6 animate-pulse"></div>
        </div>
        
        {/* Metadata and button skeleton */}
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
    <div className="min-h-screen bg-rose-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-rose-50 via-rose-100 to-red-50 pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-18 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-red-800/20"></div>
        <div
          className="absolute inset-0 bg-center bg-cover bg-fixed opacity-20"
          style={{
            backgroundImage: `url('/istockphoto-1221349438-612x612.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-lg">
              <Flame className="w-6 h-6 sm:w-8 sm:h-8 text-sacred-crimson animate-pulse" />
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-sacred-crimson" />
              <Flower className="w-6 h-6 sm:w-8 sm:h-8 text-sacred-crimson animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 sm:mb-6 tracking-tight">
            Sacred <span className="text-sacred-crimson relative">Media</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl sm:max-w-4xl mx-auto mb-6 sm:mb-10 leading-relaxed">
            Discover profound wisdom, spiritual insights, and transformative teachings
            from the ancient traditions that guide us toward divine consciousness.
          </p>

          <div className="flex justify-center items-center space-x-4 mb-6 sm:mb-8">
            <div className="w-12 sm:w-16 h-1 bg-sacred-crimson rounded-full"></div>
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-sacred-crimson" />
            <div className="w-12 sm:w-16 h-1 bg-sacred-crimson rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-sacred-crimson mx-auto mb-2 sm:mb-3" />
              <div className="text-xl sm:text-2xl font-bold text-gray-800">{isFetching ? '--' : blogs.length}</div>
              <div className="text-sm text-gray-600">Sacred Articles</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <Flame className="w-6 h-6 sm:w-8 sm:h-8 text-sacred-crimson mx-auto mb-2 sm:mb-3" />
              <div className="text-xl sm:text-2xl font-bold text-gray-800">∞</div>
              <div className="text-sm text-gray-600">Infinite Wisdom</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <Star className="w-6 h-6 sm:w-8 sm:h-8 text-sacred-crimson mx-auto mb-2 sm:mb-3" />
              <div className="text-xl sm:text-2xl font-bold text-gray-800">100%</div>
              <div className="text-sm text-gray-600">Transformative</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-10">
        <div 
          className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-2xl p-5 sm:p-6 md:p-8 mb-8 sm:mb-10 md:mb-12 border border-rose-100" 
          style={{boxShadow: '0 10px 30px rgba(196, 30, 58, 0.15)'}}
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
                className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-4 border-2 border-rose-100 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-base sm:text-lg transition-all duration-300 placeholder-gray-400"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
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
                    boxShadow: '0 10px 30px rgba(196, 30, 58, 0.15)',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Number badge - responsive sizing */}
                  <div className="absolute top-3 md:top-4 left-3 md:left-4 z-10 bg-sacred-crimson text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-xs md:text-sm font-bold shadow-md md:shadow-lg">
                    {index+1}
                  </div>
                  
                  {/* Image - fixed height container */}
                  <div className="relative overflow-hidden group h-52 sm:h-56 md:h-60">
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-white/90 backdrop-blur-sm rounded-full p-1.5 md:p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Eye className="w-4 h-4 md:w-5 md:h-5 text-sacred-crimson" />
                    </div>
                  </div>
                  
                  {/* Content area with fixed height */}
                  <div className="p-5 sm:p-6 md:p-7 flex flex-col" style={{ minHeight: '220px' }}>
                    {/* Title section */}
                    <div className="mb-3 md:mb-4">
                      <h3 className="text-lg sm:text-xl md:text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300 leading-tight line-clamp-2">
                        {blog.title}
                      </h3>
                    </div>
                    
                    {/* Content with fixed height and scroll if needed */}
                    <div className="mb-4 md:mb-5 flex-grow overflow-hidden">
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3 h-full">
                        {truncateContent(blog.content, 140)}
                      </p>
                    </div>
                    
                    {/* Metadata and button section - always at bottom */}
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
                          <span>{Math.ceil(blog.content.length / 450)} min read</span>
                        </div>
                      </div>
                      
                      {/* Button - full width and consistent */}
                      <button 
                        onClick={() => { 
                          setSelectedBlog(blog); 
                          setIsModalOpen(true); 
                        }}
                        className="w-full bg-sacred-crimson text-white py-2 sm:py-3 rounded-xl md:rounded-2xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center group/btn"
                      >
                        <span className="flex items-center">
                          Read Full Article
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </span>
                      </button>
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
                  className="bg-sacred-crimson text-white px-6 py-2 md:px-8 md:py-3 rounded-lg md:rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300"
                >
                  Clear Search
                </button>
              </div>
            )}
          </>
        )}
      </div> 
{isModalOpen && selectedBlog && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-2 sm:p-4 z-50 backdrop-blur-sm">
    <div className="bg-white rounded-xl sm:rounded-2xl w-full max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-2 h-[90vh] max-h-[95dvh] flex flex-col overflow-hidden shadow-2xl">
      {/* Header with sticky positioning */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-rose-100 p-3 sm:p-4 md:p-6 flex items-start justify-between z-10">
        <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4 overflow-hidden">
          <div className="bg-sacred-crimson text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 mt-0.5">
            {blogs.findIndex(b => b._id === selectedBlog._id) + 1}
          </div>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 break-words line-clamp-2">
            {selectedBlog.title}
          </h2>
        </div>
        <button
          onClick={closeModal}
          className="p-1 sm:p-2 md:p-3 text-gray-400 hover:text-gray-600 hover:bg-rose-50 rounded-full transition-all duration-200 hover:rotate-90 flex-shrink-0"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
      </div>
      
      {/* Scrollable content area */}
      <div className="overflow-y-auto flex-1">
        <div className="p-3 sm:p-4 md:p-6 lg:p-8">
          {/* Metadata row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 p-2 sm:p-3 md:p-4 bg-rose-50 rounded-lg sm:rounded-xl gap-1 sm:gap-0">
            <div className="flex items-center space-x-1 sm:space-x-3 md:space-x-4 overflow-x-auto pb-1 sm:pb-0">
              <div className="flex items-center text-xs sm:text-sm text-gray-600 bg-white rounded-full px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 shadow-sm whitespace-nowrap">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-sacred-crimson" />
                <span>{new Date(selectedBlog.createdAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center text-xs sm:text-sm text-gray-600 bg-white rounded-full px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 shadow-sm whitespace-nowrap">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-sacred-crimson" />
                <span>{Math.ceil(selectedBlog.content.length / 450)} min read</span>
              </div>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 mt-1 sm:mt-0">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-sacred-crimson" />
              <span className="text-xs sm:text-sm text-gray-600 font-medium">Sacred Wisdom</span>
            </div>
          </div>
          
          {/* Blog image */}
          <div className="mb-4 sm:mb-6 md:mb-8 rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg w-full">
            <img
              src={selectedBlog.imageUrl}
              alt={selectedBlog.title}
              className="w-full h-auto max-h-[40vh] sm:max-h-[50vh] object-cover"
            />
          </div>
          
          {/* Blog content */}
          <div className="prose prose-sm sm:prose-base max-w-none">
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {selectedBlog.content}
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="sticky bottom-0 bg-white border-t border-rose-100 p-3 sm:p-4 md:p-6">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-2 sm:gap-3 md:gap-4">
          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 w-full sm:w-auto justify-between sm:justify-start">
            <div className="flex items-center space-x-1 sm:space-x-2 bg-rose-50 rounded-full px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2">
              <Flower className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-red-600" />
              <span className="text-xs sm:text-sm text-gray-600 font-medium">Sacred Wisdom</span>
            </div>
            <div className="flex items-center space-x-0.5 sm:space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-sacred-crimson fill-current" />
              ))}
            </div>
          </div>
          <button
            onClick={closeModal}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2.5 rounded-md sm:rounded-lg font-medium hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-sm hover:shadow-md w-full sm:w-auto text-sm sm:text-base text-center"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  </div>
)}
   
      <div
  className="text-white py-7 sm:py-8 md:py-9 lg:py-10"
  style={{
    background: 'linear-gradient(135deg, rgba(196, 30, 58, 0.7) 0%, rgba(139, 21, 56, 1) 100%)',
    boxShadow: '0 8px 32px rgba(196, 30, 58, 0.15)',
  }}
>
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* Icon - responsive sizing */}
    <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
      <Flower className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-[#FFFEF7] animate-pulse" />
    </div>

    {/* Heading - responsive sizing */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.7rem] font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
      Stay Connected to Sacred Wisdom
    </h2>

    {/* Subheading - responsive sizing */}
    <p className="text-base sm:text-lg md:text-xl lg:text-[1.25rem] text-red-100 max-w-3xl mx-auto mb-6 sm:mb-7 md:mb-8 leading-relaxed">
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
        className="bg-white text-[#C41E3A] px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-100 hover:scale-x-105 shadow-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-sm sm:text-base"
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-[#C41E3A]"
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
            <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[#C41E3A]" />
            <span>Subscribe</span>
          </>
        )}
      </button>
    </form>

    {/* Footer text - responsive sizing */}
    <p className="text-xs sm:text-sm text-red-100 mt-4 sm:mt-5 md:mt-6 opacity-80">
      Join thousands of seekers on their spiritual journey.
    </p>
  </div>
</div>
    </div>
  );
};

export default Media;