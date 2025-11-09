
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate, Link } from 'react-router-dom';
// import { Calendar, Clock, ArrowLeft, ArrowRight, Flower, Sparkles, Share2, Heart, BookOpen } from 'lucide-react';
// import axios from 'axios';
// import { useSelector } from 'react-redux';

// const BlogPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [nextBlog, setNextBlog] = useState(null);
//   const [prevBlog, setPrevBlog] = useState(null);
//   const [isLiked, setIsLiked] = useState(false);
//   const { allBlogs = [] } = useSelector((state) => state.blog);

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         setLoading(true);
//         const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog/${id}`, {
//           withCredentials: true,
//         });
        
//         if (res.data.success) {
//           setBlog(res.data.blog);
          
//           // Find next and previous blogs
//           const currentIndex = allBlogs.findIndex(b => b._id === id);
//           if (currentIndex > -1) {
//             setNextBlog(currentIndex > 0 ? allBlogs[currentIndex - 1] : null);
//             setPrevBlog(currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null);
//           }
//         }
//       } catch (error) {
//         console.error("Error fetching blog:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (allBlogs.length > 0) {
//       // Try to find blog in existing data first
//       const existingBlog = allBlogs.find(b => b._id === id);
//       if (existingBlog) {
//         setBlog(existingBlog);
        
//         // Find next and previous blogs
//         const currentIndex = allBlogs.findIndex(b => b._id === id);
//         if (currentIndex > -1) {
//           setNextBlog(currentIndex > 0 ? allBlogs[currentIndex - 1] : null);
//           setPrevBlog(currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null);
//         }
        
//         setLoading(false);
//       } else {
//         fetchBlog();
//       }
//     } else {
//       fetchBlog();
//     }
//   }, [id, allBlogs]);

//   const handleShare = () => {
//     if (navigator.share) {
//       navigator.share({
//         title: blog.title,
//         text: blog.excerpt || 'Check out this sacred wisdom',
//         url: window.location.href,
//       })
//       .catch((error) => console.log('Error sharing', error));
//     } else {
//       navigator.clipboard.writeText(window.location.href);
//       alert('Link copied to clipboard!');
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-rose-50 to-rose-100 flex items-center justify-center">
//         <div className="text-center">
//           <div className="relative">
//             <Flower className="w-16 h-16 text-sacred-crimson animate-pulse mx-auto mb-4" />
//             <Sparkles className="w-6 h-6 text-gold-500 absolute -top-2 -right-2 animate-spin" />
//           </div>
//           <p className="text-gray-600 font-medium">Loading sacred wisdom...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!blog) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-rose-50 to-rose-100 flex items-center justify-center px-4">
//         <div className="text-center max-w-md bg-white p-8 rounded-2xl shadow-lg border border-rose-100">
//           <div className="bg-rose-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//             <BookOpen className="w-8 h-8 text-sacred-crimson" />
//           </div>
//           <h1 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h1>
//           <p className="text-gray-600 mb-6">The sacred wisdom you're seeking has not yet been revealed.</p>
//           <Link 
//             to="/media"
//             className="bg-gradient-to-r from-sacred-crimson to-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all inline-flex items-center"
//           >
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Return to Media
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-rose-50 to-rose-100">
//       {/* Navigation */}
//       <div className="bg-white/80 backdrop-blur-sm border-b border-rose-100 sticky top-0 z-10">
//         <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
//           <button
//             onClick={() => navigate('/media')}
//             className="flex items-center text-sacred-crimson font-semibold hover:text-red-700 transition-colors bg-rose-50 hover:bg-rose-100 px-4 py-2 rounded-lg"
//           >
//             <ArrowLeft className="w-5 h-5 mr-2" />
//             Back to All Articles
//           </button>
          
//           <div className="flex items-center space-x-2 bg-rose-50 px-3 py-1.5 rounded-full">
//             <Sparkles className="w-4 h-4 text-sacred-crimson" />
//             <span className="text-sm text-gray-600 font-medium">Sacred Wisdom</span>
//           </div>
//         </div>
//       </div>

//       {/* Article */}
//       <article className="max-w-4xl mx-auto px-4 py-8">
//         <header className="mb-10 text-center">
//           <div className="inline-flex items-center bg-gradient-to-r from-rose-100 to-rose-200 text-sacred-crimson px-4 py-1.5 rounded-full text-sm font-medium mb-6">
//             Spiritual Wisdom
//           </div>
          
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight font-serif">
//             {blog.title}
//           </h1>
          
//           <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600 mb-8">
//             <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-rose-100">
//               <Calendar className="w-4 h-4 mr-2 text-sacred-crimson" />
//               <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { 
//                 year: 'numeric', 
//                 month: 'long', 
//                 day: 'numeric' 
//               })}</span>
//             </div>
//             <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-rose-100">
//               <Clock className="w-4 h-4 mr-2 text-sacred-crimson" />
//               <span>{Math.ceil(blog.content.length / 460)} min read</span>
//             </div>
//           </div>
          
//           <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 mx-auto max-w-3xl">
//             <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
//             <img
//               src={blog.imageUrl}
//               alt={blog.title}
//               className="w-full h-auto object-cover"
//             />
//             <div className="absolute bottom-4 left-4 flex space-x-2">
//               <button 
//                 onClick={() => setIsLiked(!isLiked)}
//                 className={`p-2 rounded-full ${isLiked ? 'bg-red-100 text-red-600' : 'bg-white/90 text-gray-600'} backdrop-blur-sm`}
//               >
//                 <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
//               </button>
//               <button 
//                 onClick={handleShare}
//                 className="p-2 rounded-full bg-white/90 text-gray-600 backdrop-blur-sm"
//               >
//                 <Share2 className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </header>

//         <div className="prose prose-lg max-w-none mx-auto text-gray-700 leading-relaxed font-serif">
//           <div className="whitespace-pre-line text-lg">
//             {blog.content}
//           </div>
//         </div>
        
//         <div className="mt-12 pt-8 border-t border-rose-200 text-center">
//           <div className="inline-flex items-center bg-rose-50 rounded-full px-4 py-2 text-sacred-crimson mb-4">
//             <Sparkles className="w-4 h-4 mr-2" />
//             <span className="text-sm font-medium">May this wisdom illuminate your path</span>
//           </div>
//         </div>
//       </article>

//       {/* Navigation between articles */}
//       <div className="max-w-4xl mx-auto px-4 py-8 mt-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           {prevBlog && (
//             <Link
//               to={`/blog/${prevBlog._id}`}
//               className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-rose-100 hover:border-sacred-crimson/30"
//             >
//               <div className="flex items-center text-sm text-sacred-crimson mb-3 font-medium">
//                 <ArrowLeft className="w-4 h-4 mr-2" />
//                 Previous Article
//               </div>
//               <h3 className="font-semibold text-gray-800 group-hover:text-sacred-crimson transition-colors text-lg">
//                 {prevBlog.title}
//               </h3>
//               <p className="text-gray-500 text-sm mt-2 line-clamp-2">
//                 {prevBlog.excerpt || 'Read this sacred wisdom'}
//               </p>
//             </Link>
//           )}
          
//           {nextBlog && (
//             <Link
//               to={`/blog/${nextBlog._id}`}
//               className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-rose-100 hover:border-sacred-crimson/30 text-right md:text-left"
//             >
//               <div className="flex items-center justify-end md:justify-start text-sm text-sacred-crimson mb-3 font-medium">
//                 Next Article
//                 <ArrowRight className="w-4 h-4 ml-2" />
//               </div>
//               <h3 className="font-semibold text-gray-800 group-hover:text-sacred-crimson transition-colors text-lg">
//                 {nextBlog.title}
//               </h3>
//               <p className="text-gray-500 text-sm mt-2 line-clamp-2">
//                 {nextBlog.excerpt || 'Read this sacred wisdom'}
//               </p>
//             </Link>
//           )}
//         </div>
        
//         <div className="text-center">
//           <Link
//             to="/media"
//             className="inline-flex items-center bg-gradient-to-r from-sacred-crimson to-red-700 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
//           >
//             <ArrowLeft className="w-5 h-5 mr-2" />
//             Back to All Articles
//           </Link>
//         </div>
//       </div>
      
//       {/* Decorative elements */}
//       <div className="fixed bottom-10 left-10 opacity-10 -z-10">
//         <Flower size={120} className="text-sacred-crimson" />
//       </div>
//       <div className="fixed top-20 right-10 opacity-10 -z-10">
//         <Flower size={100} className="text-sacred-crimson transform rotate-45" />
//       </div>
//     </div>
//   );
// };


// export default BlogPage;
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight, Flower, Sparkles, Share2, Heart, BookOpen } from 'lucide-react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const BlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nextBlog, setNextBlog] = useState(null);
  const [prevBlog, setPrevBlog] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const { allBlogs = [] } = useSelector((state) => state.blog);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog/${id}`, {
          withCredentials: true,
        });
        
        if (res.data.success) {
          setBlog(res.data.blog);
          
          // Find next and previous blogs
          const currentIndex = allBlogs.findIndex(b => b._id === id);
          if (currentIndex > -1) {
            setNextBlog(currentIndex > 0 ? allBlogs[currentIndex - 1] : null);
            setPrevBlog(currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null);
          }
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    if (allBlogs.length > 0) {
      // Try to find blog in existing data first
      const existingBlog = allBlogs.find(b => b._id === id);
      if (existingBlog) {
        setBlog(existingBlog);
        
        // Find next and previous blogs
        const currentIndex = allBlogs.findIndex(b => b._id === id);
        if (currentIndex > -1) {
          setNextBlog(currentIndex > 0 ? allBlogs[currentIndex - 1] : null);
          setPrevBlog(currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null);
        }
        
        setLoading(false);
      } else {
        fetchBlog();
      }
    } else {
      fetchBlog();
    }
  }, [id, allBlogs]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt || 'Check out this sacred wisdom',
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <Flower className="w-16 h-16 text-[#6a0dad] animate-pulse mx-auto mb-4" />
            <Sparkles className="w-6 h-6 text-[#ff00ff] absolute -top-2 -right-2 animate-spin" />
          </div>
          <p className="text-gray-600 font-medium">Loading sacred wisdom...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 flex items-center justify-center px-4">
        <div className="text-center max-w-md bg-white p-8 rounded-2xl shadow-lg border border-purple-100">
          <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-[#6a0dad]" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The sacred wisdom you're seeking has not yet been revealed.</p>
          <Link 
            to="/media"
            className="bg-gradient-to-r from-[#6a0dad] to-[#ff00ff] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all inline-flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Media
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100">
      {/* Navigation */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/media')}
            className="flex items-center text-[#6a0dad] font-semibold hover:text-[#ff00ff] transition-colors bg-purple-50 hover:bg-purple-100 px-4 py-2 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to All Articles
          </button>
          
          <div className="flex items-center space-x-2 bg-purple-50 px-3 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4 text-[#6a0dad]" />
            <span className="text-sm text-gray-600 font-medium">Sacred Wisdom</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-10 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-purple-200 text-[#6a0dad] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            Spiritual Wisdom
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight font-serif">
            {blog.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600 mb-8">
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-purple-100">
              <Calendar className="w-4 h-4 mr-2 text-[#6a0dad]" />
              <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-purple-100">
              <Clock className="w-4 h-4 mr-2 text-[#6a0dad]" />
              <span>{Math.ceil(blog.content.length / 460)} min read</span>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 mx-auto max-w-3xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-4 left-4 flex space-x-2">
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-full ${isLiked ? 'bg-purple-100 text-[#ff00ff]' : 'bg-white/90 text-gray-600'} backdrop-blur-sm`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>
              <button 
                onClick={handleShare}
                className="p-2 rounded-full bg-white/90 text-gray-600 backdrop-blur-sm"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none mx-auto text-gray-700 leading-relaxed font-serif">
          <div className="whitespace-pre-line text-lg">
            {blog.content}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-purple-200 text-center">
          <div className="inline-flex items-center bg-purple-50 rounded-full px-4 py-2 text-[#6a0dad] mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">May this wisdom illuminate your path</span>
          </div>
        </div>
      </article>

      {/* Navigation between articles */}
      <div className="max-w-4xl mx-auto px-4 py-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {prevBlog && (
            <Link
              to={`/blog/${prevBlog._id}`}
              className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-purple-100 hover:border-[#6a0dad]/30"
            >
              <div className="flex items-center text-sm text-[#6a0dad] mb-3 font-medium">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous Article
              </div>
              <h3 className="font-semibold text-gray-800 group-hover:text-[#6a0dad] transition-colors text-lg">
                {prevBlog.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                {prevBlog.excerpt || 'Read this sacred wisdom'}
              </p>
            </Link>
          )}
          
          {nextBlog && (
            <Link
              to={`/blog/${nextBlog._id}`}
              className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-purple-100 hover:border-[#6a0dad]/30 text-right md:text-left"
            >
              <div className="flex items-center justify-end md:justify-start text-sm text-[#6a0dad] mb-3 font-medium">
                Next Article
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
              <h3 className="font-semibold text-gray-800 group-hover:text-[#6a0dad] transition-colors text-lg">
                {nextBlog.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                {nextBlog.excerpt || 'Read this sacred wisdom'}
              </p>
            </Link>
          )}
        </div>
        
        <div className="text-center">
          <Link
            to="/media"
            className="inline-flex items-center bg-gradient-to-r from-[#6a0dad] to-[#ff00ff] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to All Articles
          </Link>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="fixed bottom-10 left-10 opacity-10 -z-10">
        <Flower size={120} className="text-[#6a0dad]" />
      </div>
      <div className="fixed top-20 right-10 opacity-10 -z-10">
        <Flower size={100} className="text-[#6a0dad] transform rotate-45" />
      </div>
    </div>
  );
};

export default BlogPage;