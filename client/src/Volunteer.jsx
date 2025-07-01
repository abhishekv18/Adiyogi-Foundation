// import React, { useEffect, useState } from 'react';
// import { Heart, Users, Phone, Mail, User, MapPin, MessageSquare, Award, Shield, Flower, Circle, Flower2, } from 'lucide-react';
// import { FaOm } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const Volunteer = () => {


// const navigate=useNavigate();

//  const user = useSelector((state) => state.auth.user);

//   useEffect(() => {
//     if (user) {
//       navigate('/admin-dashboard');
//     }
//   }, [user]);




//     const [showAdminLogin, setShowAdminLogin] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     city: '',
//     message: '',
//     skills: ''
//   });
  
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);
//     // Form submission logic would go here
//     setTimeout(() => setIsSubmitted(false), 3000);
//   };



//   return (
//     <div className="min-h-screen" style={{ backgroundColor: '#FDF8F8' }}>
//       {/* Hidden Admin Access - Subtle and positioned discretely */}
//        <div className="fixed bottom-4 left-4 z-40">
//         <div className="relative">
//           <button
//             onClick={() => setShowAdminLogin(!showAdminLogin)}
//             className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 border border-white border-opacity-20"
//             title="Admin Access"
//           >
//              <Shield size={20} style={{ color: '#C41E3A' }} />
//           </button>
          
//           {showAdminLogin && (
//             <div className="absolute bottom-16 left-0 bg-white rounded-xl shadow-2xl border p-3 w-60 z-50">
//               <h3 className="font-bold text-gray-900 mb-3 flex items-center">
//                 <Shield className="h-4 w-4 mr-2 "style={{ color: '#C41E3A' }} />
//                 Admin Access
//               </h3>
//               <Link to="/admin-login">
//                 <button
               
//                 className="w-full px-4 py-2 bg-gradient-to-t from-sacred-crimson to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 font-medium"
//               >
//                 Admin Login
//               </button>
//               </Link>
            
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Hero Section */}
 
// <div className="relative overflow-hidden py-20 px-4">
//   {/* ✅ Background image with fixed attachment and light opacity */}
//   <div
//     className="absolute inset-0 bg-center bg-cover bg-fixed z-0"
//     style={{
//       backgroundImage: "url('/public/about us/istockphoto-825022486-612x612.webp')", // ✅ Update path if needed
//       opacity: 0.25,
//     }}
//   ></div>

//   {/* ✅ Rose gradient overlay */}
//   <div className="absolute inset-0 z-0 bg-gradient-to-br from-red-900/30 to-red-800/20"></div>

//   {/* ✅ Main Content */}
//   <div className="relative z-10 max-w-6xl mx-auto text-center">
//     <div className="flex justify-center mb-6">
//       <div className="relative">
//         <div className="w-12 h-12 rounded-full flex items-center justify-center animate-pulse" style={{ backgroundColor: '#C41E3A' }}>
//           <Circle size={24} fill="white" className="text-white" />
//         </div>
//         <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-red-100 to-transparent rounded-full blur-lg opacity-50"></div>
//       </div>
//     </div>

//     <h1 className="text-5xl font-bold mb-4" style={{ color: '#2C2C2C' }}>
//       Join the <span style={{ color: '#C41E3A' }}>Sacred Journey</span>
//     </h1>

//     <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B4B4B' }}>
//       Become a volunteer with Adiyogi Foundation and be part of a divine mission to preserve ancient wisdom, 
//       restore sacred temples, and spread spiritual consciousness across the world.
//     </p>

//     <div className="flex justify-center space-x-8 text-center">
//       <div className="flex flex-col items-center">
//         <Heart size={32} style={{ color: '#C41E3A' }} className="mb-2" />
//         <span className="text-sm font-medium" style={{ color: '#2C2C2C' }}>Seva & Service</span>
//       </div>
//       <div className="flex flex-col items-center">
//         <Users size={32} style={{ color: '#C41E3A' }} className="mb-2" />
//         <span className="text-sm font-medium" style={{ color: '#2C2C2C' }}>Community Unity</span>
//       </div>
//       <div className="flex flex-col items-center">
//         <Flower2 size={32} style={{ color: '#C41E3A' }} className="mb-2" />
//         <span className="text-sm font-medium" style={{ color: '#2C2C2C' }}>Spiritual Growth</span>
//       </div>
//     </div>
//   </div>
// </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-4 py-16">
//         <div className="grid lg:grid-cols-2 gap-12 items-start">
          
//           {/* Left Side - Information */}
//           <div className="space-y-8">
//             <div className="p-10 rounded-2xl shadow-lg" style={{ backgroundColor: '#FFFEF7', boxShadow: '0 4px 12px rgba(196, 30, 58, 0.15)' }}>
//               <h2 className="text-3xl font-bold mb-6" style={{ color: '#2C2C2C' }}>
//                 Why Volunteer with Us?
//               </h2>
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F4E8E8' }}>
//                     <Circle size={20} style={{ color: '#C41E3A' }} />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-lg mb-2" style={{ color: '#2C2C2C' }}>Sacred Service (Seva)</h3>
//                     <p className="text-sm leading-relaxed" style={{ color: '#6B4B4B' }}>
//                       Engage in selfless service that purifies the soul and connects you with the divine essence of giving.
//                     </p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F4E8E8' }}>
//                     <Flower size={20} style={{ color: '#C41E3A' }} />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-lg mb-2" style={{ color: '#2C2C2C' }}>Spiritual Growth</h3>
//                     <p className="text-sm leading-relaxed" style={{ color: '#6B4B4B' }}>
//                       Deepen your spiritual practice through meaningful work that aligns with ancient wisdom traditions.
//                     </p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F4E8E8' }}>
//                     <Heart size={20} style={{ color: '#C41E3A' }} />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-lg mb-2" style={{ color: '#2C2C2C' }}>Divine Connection</h3>
//                     <p className="text-sm leading-relaxed" style={{ color: '#6B4B4B' }}>
//                       Join a community of like-minded souls working together to preserve and share sacred knowledge.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Volunteer Opportunities */}
//             <div className="p-8 rounded-2xl shadow-lg" style={{ backgroundColor: '#FFFEF7', boxShadow: '0 4px 12px rgba(196, 30, 58, 0.15)' }}>
//               <h3 className="text-2xl font-bold mb-6" style={{ color: '#2C2C2C' }}>
//                 Volunteer Opportunities
//               </h3>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#F4E8E8' }}>
//                   <Users size={24} style={{ color: '#C41E3A' }} className="mx-auto mb-2" />
//                   <span className="text-sm font-medium" style={{ color: '#2C2C2C' }}>Community Outreach</span>
//                 </div>
//                 <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#F4E8E8' }}>
//                   <Award size={24} style={{ color: '#C41E3A' }} className="mx-auto mb-2" />
//                   <span className="text-sm font-medium" style={{ color: '#2C2C2C' }}>Event Organization</span>
//                 </div>
//                 <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#F4E8E8' }}>
//                   <Flower size={24} style={{ color: '#C41E3A' }} className="mx-auto mb-2" />
//                   <span className="text-sm font-medium" style={{ color: '#2C2C2C' }}>Temple Restoration</span>
//                 </div>
//                 <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#F4E8E8' }}>
//                   <Circle size={24} style={{ color: '#C41E3A' }} className="mx-auto mb-2" />
//                   <span className="text-sm font-medium" style={{ color: '#2C2C2C' }}>Spiritual Programs</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Form */}
//           <div className="p-8 rounded-2xl shadow-lg" style={{ backgroundColor: '#FFFEF7', boxShadow: '0 4px 12px rgba(196, 30, 58, 0.15)' }}>
//             <div className="text-center mb-8">
//               <h2 className="text-3xl font-bold mb-4" style={{ color: '#2C2C2C' }}>
//                 Begin Your Sacred Service
//               </h2>
//               <p className="text-sm" style={{ color: '#6B4B4B' }}>
//                 Fill out this form to join our volunteer community and start your journey of seva
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Name Field */}
//               <div>
//                 <label className="block text-sm font-medium mb-2" style={{ color: '#2C2C2C' }}>
//                   Full Name *
//                 </label>
//                 <div className="relative">
//                   <User size={18} style={{ color: '#C41E3A' }} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
//                   <input
//                     type="text"
//                     name="name"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
//                     style={{ 
//                       borderColor: '#F4E8E8',
//                       focusRingColor: '#C41E3A',
//                       backgroundColor: '#FFFEF7'
//                     }}
//                     placeholder="Enter your full name"
//                   />
//                 </div>
//               </div>

//               {/* Phone Field */}
//               <div>
//                 <label className="block text-sm font-medium mb-2" style={{ color: '#2C2C2C' }}>
//                   Phone Number *
//                 </label>
//                 <div className="relative">
//                   <Phone size={18} style={{ color: '#C41E3A' }} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
//                   <input
//                     type="tel"
//                     name="phone"
//                     required
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
//                     style={{ 
//                       borderColor: '#F4E8E8',
//                       focusRingColor: '#C41E3A',
//                       backgroundColor: '#FFFEF7'
//                     }}
//                     placeholder="Enter your phone number"
//                   />
//                 </div>
//               </div>

//               {/* Email Field */}
//               <div>
//                 <label className="block text-sm font-medium mb-2" style={{ color: '#2C2C2C' }}>
//                   Email Address *
//                 </label>
//                 <div className="relative">
//                   <Mail size={18} style={{ color: '#C41E3A' }} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
//                     style={{ 
//                       borderColor: '#F4E8E8',
//                       focusRingColor: '#C41E3A',
//                       backgroundColor: '#FFFEF7'
//                     }}
//                     placeholder="Enter your email address"
//                   />
//                 </div>
//               </div>

//               {/* City Field */}
//               <div>
//                 <label className="block text-sm font-medium mb-2" style={{ color: '#2C2C2C' }}>
//                   City *
//                 </label>
//                 <div className="relative">
//                   <MapPin size={18} style={{ color: '#C41E3A' }} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
//                   <input
//                     type="text"
//                     name="city"
//                     required
//                     value={formData.city}
//                     onChange={handleChange}
//                     className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
//                     style={{ 
//                       borderColor: '#F4E8E8',
//                       focusRingColor: '#C41E3A',
//                       backgroundColor: '#FFFEF7'
//                     }}
//                     placeholder="Enter your city"
//                   />
//                 </div>
//               </div>

//               {/* Skills Field */}
//               <div>
//                 <label className="block text-sm font-medium mb-2" style={{ color: '#2C2C2C' }}>
//                   Skills & Expertise
//                 </label>
//                 <div className="relative">
//                   <Award size={18} style={{ color: '#C41E3A' }} className="absolute left-3 top-4" />
//                   <textarea
//                     name="skills"
//                     value={formData.skills}
//                     onChange={handleChange}
//                     rows="3"
//                     className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 resize-none"
//                     style={{ 
//                       borderColor: '#F4E8E8',
//                       focusRingColor: '#C41E3A',
//                       backgroundColor: '#FFFEF7'
//                     }}
//                     placeholder="Share your skills, talents, or areas of expertise..."
//                   />
//                 </div>
//               </div>

//               {/* Message Field */}
//               <div>
//                 <label className="block text-sm font-medium mb-2" style={{ color: '#2C2C2C' }}>
//                   Message & Motivation
//                 </label>
//                 <div className="relative">
//                   <MessageSquare size={18} style={{ color: '#C41E3A' }} className="absolute left-3 top-4" />
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows="4"
//                     className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 resize-none"
//                     style={{ 
//                       borderColor: '#F4E8E8',
//                       focusRingColor: '#C41E3A',
//                       backgroundColor: '#FFFEF7'
//                     }}
//                     placeholder="Tell us what motivates you to volunteer and how you'd like to contribute..."
//                   />
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 transform hover:scale-105 shadow-lg"
//                 style={{ 
//                   backgroundColor: isSubmitted ? '#8B1538' : '#C41E3A',
//                   boxShadow: '0 2px 8px rgba(139, 21, 56, 0.25)'
//                 }}
//                 disabled={isSubmitted}
//               >
//                 {isSubmitted ? (
//                   <div className="flex items-center justify-center space-x-2">
//                     <Om size={20} className="animate-spin" />
//                     <span>Submitting Your Sacred Intent...</span>
//                   </div>
//                 ) : (
//                   <div className="flex items-center justify-center space-x-2">
//                     <Heart size={20} />
//                     <span>Begin Sacred Service</span>
//                   </div>
//                 )}
//               </button>
//             </form>

//             {/* Success Message */}
//             {isSubmitted && (
//               <div className="mt-6 p-4 rounded-lg text-center" style={{ backgroundColor: '#F4E8E8' }}>
//                 <Om size={24} style={{ color: '#C41E3A' }} className="mx-auto mb-2" />
//                 <p className="text-sm font-medium" style={{ color: '#2C2C2C' }}>
//                   Thank you for your sacred intention to serve. We will connect with you soon.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Bottom Quote Section */}
//         <div className="mt-16 text-center p-8 rounded-2xl" style={{ backgroundColor: '#FFFEF7', border: '2px solid #F4E8E8' }}>
//           <FaOm size={32} style={{ color: '#C41E3A' }} className="mx-auto mb-4" />
//           <blockquote className="text-xl font-medium italic mb-4" style={{ color: '#2C2C2C' }}>
//             "Seva is not just service to others, but service to the divine that resides in all beings."
//           </blockquote>
//           <p className="text-sm" style={{ color: '#C41E3A' }}>
//             - Ancient Vedic Wisdom
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Volunteer;




import React, { useEffect, useState } from 'react';
import { Heart, Users, Phone, Mail, User, MapPin, MessageSquare, Award, Shield, Flower, Circle, Flower2, } from 'lucide-react';
import { FaOm } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';

const Volunteer = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      navigate('/admin-dashboard');
    }
  }, [user]);

  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    message: '',
    skills: ''
  });
  
  // const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    


      const res = await axios.post('http://localhost:5000/api/volunteer/add', formData, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
  
      if (res.data.success) {
      
        toast.success("Details Send Successfully", {
          icon: '✅',
          style: {
            border: '1px solid #28a745',
            padding: '16px',
            color: '#fff',
            background: 'linear-gradient(135deg, #28a745, #218838)',
            fontWeight: '600',
          },
        });
        setFormData({
         name: '',
    phone: '',
    email: '',
    city: '',
    message: '',
    skills: ''
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Failed To Send Details');
    } 
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FDF8F8' }}>
      {/* Hidden Admin Access - Subtle and positioned discretely */}
      <div className="fixed bottom-4 left-4 z-40">
        <div className="relative">
          <button
            onClick={() => setShowAdminLogin(!showAdminLogin)}
            className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 border border-white border-opacity-20"
            title="Admin Access"
          >
            <Shield size={20} style={{ color: '#C41E3A' }} />
          </button>
          
          {showAdminLogin && (
            <div className="absolute bottom-16 left-0 bg-white rounded-xl shadow-2xl border p-3 w-60 z-50">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                <Shield className="h-4 w-4 mr-2 "style={{ color: '#C41E3A' }} />
                Admin Access
              </h3>
              <Link to="/admin-login">
                <button
                  className="w-full px-4 py-2 bg-gradient-to-t from-sacred-crimson to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 font-medium"
                >
                  Admin Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden py-12 md:py-20 px-4">
        <div
          className="absolute inset-0 bg-center bg-cover bg-fixed z-0"
          style={{
            backgroundImage: "url('/public/about us/istockphoto-825022486-612x612.webp')",
            opacity: 0.25,
          }}
        ></div>

        <div className="absolute inset-0 z-0 bg-gradient-to-br from-red-900/30 to-red-800/20"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="relative">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center animate-pulse" style={{ backgroundColor: '#C41E3A' }}>
                <Circle size={20} fill="white" className="text-white" />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-red-100 to-transparent rounded-full blur-lg opacity-50"></div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4" style={{ color: '#2C2C2C' }}>
            Join the <span style={{ color: '#C41E3A' }}>Sacred Journey</span>
          </h1>

          <p className="text-base md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-2" style={{ color: '#6B4B4B' }}>
            Become a volunteer with Adiyogi Foundation and be part of a divine mission to preserve ancient wisdom, 
            restore sacred temples, and spread spiritual consciousness across the world.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 md:space-x-8 text-center">
            <div className="flex flex-col items-center">
              <Heart size={28} style={{ color: '#C41E3A' }} className="mb-2" />
              <span className="text-sm font-medium" style={{ color: '#2C2C2C' }}>Seva & Service</span>
            </div>
            <div className="flex flex-col items-center">
              <Users size={28} style={{ color: '#C41E3A' }} className="mb-2" />
              <span className="text-sm font-medium" style={{ color: '#2C2C2C' }}>Community Unity</span>
            </div>
            <div className="flex flex-col items-center">
              <Flower2 size={28} style={{ color: '#C41E3A' }} className="mb-2" />
              <span className="text-sm font-medium" style={{ color: '#2C2C2C' }}>Spiritual Growth</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          
          {/* Left Side - Information */}
          <div className="space-y-6 md:space-y-8">
            <div className="p-6 md:p-10 rounded-2xl shadow-lg" style={{ backgroundColor: '#FFFEF7', boxShadow: '0 4px 12px rgba(196, 30, 58, 0.15)' }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6" style={{ color: '#2C2C2C' }}>
                Why Volunteer with Us?
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F4E8E8' }}>
                    <Circle size={18} style={{ color: '#C41E3A' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2" style={{ color: '#2C2C2C' }}>Sacred Service (Seva)</h3>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#6B4B4B' }}>
                      Engage in selfless service that purifies the soul and connects you with the divine essence of giving.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F4E8E8' }}>
                    <Flower size={18} style={{ color: '#C41E3A' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2" style={{ color: '#2C2C2C' }}>Spiritual Growth</h3>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#6B4B4B' }}>
                      Deepen your spiritual practice through meaningful work that aligns with ancient wisdom traditions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F4E8E8' }}>
                    <Heart size={18} style={{ color: '#C41E3A' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2" style={{ color: '#2C2C2C' }}>Divine Connection</h3>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#6B4B4B' }}>
                      Join a community of like-minded souls working together to preserve and share sacred knowledge.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Volunteer Opportunities */}
            <div className="p-6 md:p-8 rounded-2xl shadow-lg" style={{ backgroundColor: '#FFFEF7', boxShadow: '0 4px 12px rgba(196, 30, 58, 0.15)' }}>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6" style={{ color: '#2C2C2C' }}>
                Volunteer Opportunities
              </h3>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="text-center p-3 md:p-4 rounded-lg" style={{ backgroundColor: '#F4E8E8' }}>
                  <Users size={20} style={{ color: '#C41E3A' }} className="mx-auto mb-1 md:mb-2" />
                  <span className="text-xs md:text-sm font-medium" style={{ color: '#2C2C2C' }}>Community Outreach</span>
                </div>
                <div className="text-center p-3 md:p-4 rounded-lg" style={{ backgroundColor: '#F4E8E8' }}>
                  <Award size={20} style={{ color: '#C41E3A' }} className="mx-auto mb-1 md:mb-2" />
                  <span className="text-xs md:text-sm font-medium" style={{ color: '#2C2C2C' }}>Event Organization</span>
                </div>
                <div className="text-center p-3 md:p-4 rounded-lg" style={{ backgroundColor: '#F4E8E8' }}>
                  <Flower size={20} style={{ color: '#C41E3A' }} className="mx-auto mb-1 md:mb-2" />
                  <span className="text-xs md:text-sm font-medium" style={{ color: '#2C2C2C' }}>Temple Restoration</span>
                </div>
                <div className="text-center p-3 md:p-4 rounded-lg" style={{ backgroundColor: '#F4E8E8' }}>
                  <Circle size={20} style={{ color: '#C41E3A' }} className="mx-auto mb-1 md:mb-2" />
                  <span className="text-xs md:text-sm font-medium" style={{ color: '#2C2C2C' }}>Spiritual Programs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-6 md:p-8 rounded-2xl shadow-lg" style={{ backgroundColor: '#FFFEF7', boxShadow: '0 4px 12px rgba(196, 30, 58, 0.15)' }}>
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4" style={{ color: '#2C2C2C' }}>
                Begin Your Sacred Service
              </h2>
              <p className="text-xs md:text-sm" style={{ color: '#6B4B4B' }}>
                Fill out this form to join our volunteer community and start your journey of seva
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2" style={{ color: '#2C2C2C' }}>
                  Full Name *
                </label>
                <div className="relative">
                  <User size={16} style={{ color: '#C41E3A' }} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
                    style={{ 
                      borderColor: '#F4E8E8',
                      focusRingColor: '#C41E3A',
                      backgroundColor: '#FFFEF7'
                    }}
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2" style={{ color: '#2C2C2C' }}>
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone size={16} style={{ color: '#C41E3A' }} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
                    style={{ 
                      borderColor: '#F4E8E8',
                      focusRingColor: '#C41E3A',
                      backgroundColor: '#FFFEF7'
                    }}
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2" style={{ color: '#2C2C2C' }}>
                  Email Address *
                </label>
                <div className="relative">
                  <Mail size={16} style={{ color: '#C41E3A' }} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
                    style={{ 
                      borderColor: '#F4E8E8',
                      focusRingColor: '#C41E3A',
                      backgroundColor: '#FFFEF7'
                    }}
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* City Field */}
              <div>
                <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2" style={{ color: '#2C2C2C' }}>
                  City *
                </label>
                <div className="relative">
                  <MapPin size={16} style={{ color: '#C41E3A' }} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
                    style={{ 
                      borderColor: '#F4E8E8',
                      focusRingColor: '#C41E3A',
                      backgroundColor: '#FFFEF7'
                    }}
                    placeholder="Enter your city"
                  />
                </div>
              </div>

              {/* Skills Field */}
              <div>
                <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2" style={{ color: '#2C2C2C' }}>
                  Skills & Expertise
                </label>
                <div className="relative">
                  <Award size={16} style={{ color: '#C41E3A' }} className="absolute left-3 top-3 md:top-4" />
                  <textarea
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    rows="2"
                    className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 resize-none"
                    style={{ 
                      borderColor: '#F4E8E8',
                      focusRingColor: '#C41E3A',
                      backgroundColor: '#FFFEF7'
                    }}
                    placeholder="Share your skills, talents, or areas of expertise..."
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2" style={{ color: '#2C2C2C' }}>
                  Message & Motivation
                </label>
                <div className="relative">
                  <MessageSquare size={16} style={{ color: '#C41E3A' }} className="absolute left-3 top-3 md:top-4" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 resize-none"
                    style={{ 
                      borderColor: '#F4E8E8',
                      focusRingColor: '#C41E3A',
                      backgroundColor: '#FFFEF7'
                    }}
                    placeholder="Tell us what motivates you to volunteer and how you'd like to contribute..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 md:py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 transform hover:scale-105 shadow-lg"
                style={{ 
                  backgroundColor: '#C41E3A',
                  boxShadow: '0 2px 8px rgba(139, 21, 56, 0.25)'
                }}
               
              >
             
                  <div className="flex items-center justify-center space-x-2">
                    <Heart size={18} />
                    <span className="text-sm md:text-base">Begin Sacred Service</span>
                  </div>
             
              </button>
            </form>

            {/* Success Message */}
            {/* {isSubmitted && (
              <div className="mt-4 md:mt-6 p-3 md:p-4 rounded-lg text-center" style={{ backgroundColor: '#F4E8E8' }}>
                <FaOm size={20} style={{ color: '#C41E3A' }} className="mx-auto mb-1 md:mb-2" />
                <p className="text-xs md:text-sm font-medium" style={{ color: '#2C2C2C' }}>
                  Thank you for your sacred intention to serve. We will connect with you soon.
                </p>
              </div>
            )} */}
          </div>
        </div>

        {/* Bottom Quote Section */}
        <div className="mt-8 md:mt-16 text-center p-6 md:p-8 rounded-2xl" style={{ backgroundColor: '#FFFEF7', border: '2px solid #F4E8E8' }}>
          <FaOm size={24} style={{ color: '#C41E3A' }} className="mx-auto mb-3 md:mb-4" />
          <blockquote className="text-lg md:text-xl font-medium italic mb-3 md:mb-4" style={{ color: '#2C2C2C' }}>
            "Seva is not just service to others, but service to the divine that resides in all beings."
          </blockquote>
          <p className="text-xs md:text-sm" style={{ color: '#C41E3A' }}>
            - Ancient Vedic Wisdom
          </p>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;