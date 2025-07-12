

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   Mail, 
//   Phone, 
//   MapPin, 
//   Instagram, 
//   Youtube, 
//   Linkedin, 
//   MessageCircle,
//   Heart,
//   ArrowRight,
//   Circle,
//   Send
// } from 'lucide-react';

// const Footer = () => {
//   const quickLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About Us', path: '/about' },
//     { name: 'Programs', path: '/programs' },
//     { name: 'Temples', path: '/temples' },
//     { name: 'Seva Projects', path: '/seva' },
//     { name: 'Get Involved', path: '/get-involved' },
//     { name: 'Contact', path: '/contact' }
//   ];

//   const coreValues = ['Dharma', 'Dignity', 'Service', 'Sustainability', 'Synchronicity'];

//   return (
//     <footer className="bg-rich-charcoal text-warm-ivory">
//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
//           {/* Brand Section - Enhanced */}
//           <div className="lg:col-span-5">
//             <div className="flex items-center space-x-3 mb-8">
//               <div className="relative">
//                <div className="w-8 h-8 bg-gradient-to-br from-sacred-crimson to-deep-ruby rounded-full flex items-center justify-center text-warm-ivory font-bold text-lg group-hover:scale-105 transition-transform duration-300">
//                   ॐ
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold">
//                   Adiyogi <span className="text-sacred-crimson">Foundation</span>
//                 </h3>
//                 <p className="text-sm text-gray-400 font-medium tracking-wide">
//                   Rebuilding Purpose. Restoring Dharma.
//                 </p>
//               </div>
//             </div>
            
//             <p className="text-gray-300 leading-relaxed mb-8 text-base">
//               A space of remembrance where ancient insights meet modern lives. Through inner inquiry, 
//               outer service, and sacred restoration, we guide communities back to clarity and dharma.
//             </p>
            
//             {/* Enhanced Social Links */}
//             <div className="space-y-6">
//               <div>
//                 <p className="text-sacred-crimson font-medium mb-4 text-sm uppercase tracking-wider">Connect With Us</p>
//                 <div className="flex items-center space-x-3">
//                   <a 
//                     href="#" 
//                     className="w-12 h-12 bg-gradient-to-br from-sacred-crimson/20 to-soft-rose/10 rounded-xl flex items-center justify-center text-sacred-crimson hover:bg-sacred-crimson hover:text-warm-ivory transition-all duration-300 group hover:scale-110 hover:shadow-lg"
//                     aria-label="Instagram"
//                   >
//                     <Instagram size={20} className="group-hover:scale-110 transition-transform" />
//                   </a>
//                   <a 
//                     href="#" 
//                     className="w-12 h-12 bg-gradient-to-br from-sacred-crimson/20 to-soft-rose/10 rounded-xl flex items-center justify-center text-sacred-crimson hover:bg-sacred-crimson hover:text-warm-ivory transition-all duration-300 group hover:scale-110 hover:shadow-lg"
//                     aria-label="YouTube"
//                   >
//                     <Youtube size={20} className="group-hover:scale-110 transition-transform" />
//                   </a>
//                   <a 
//                     href="#" 
//                     className="w-12 h-12 bg-gradient-to-br from-sacred-crimson/20 to-soft-rose/10 rounded-xl flex items-center justify-center text-sacred-crimson hover:bg-sacred-crimson hover:text-warm-ivory transition-all duration-300 group hover:scale-110 hover:shadow-lg"
//                     aria-label="LinkedIn"
//                   >
//                     <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
//                   </a>
//                   <a 
//                     href="#" 
//                     className="w-12 h-12 bg-gradient-to-br from-sacred-crimson/20 to-soft-rose/10 rounded-xl flex items-center justify-center text-sacred-crimson hover:bg-sacred-crimson hover:text-warm-ivory transition-all duration-300 group hover:scale-110 hover:shadow-lg"
//                     aria-label="WhatsApp Group"
//                   >
//                     <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
//                   </a>
//                 </div>
//               </div>

//               {/* Newsletter Signup */}
//               <div className="bg-soft-rose/5 rounded-2xl p-6 border border-soft-rose/20">
//                 <h5 className="text-sacred-crimson font-semibold mb-3 flex items-center">
//                   <Mail size={16} className="mr-2" />
//                   Email Newsletter
//                 </h5>
//                 <p className="text-gray-400 text-sm mb-4">Stay connected with our latest insights and events</p>
//                 <div className="flex">
//                   <input 
//                     type="email" 
//                     placeholder="Enter your email"
//                     className="flex-1 bg-rich-charcoal/50 border border-soft-rose/30 rounded-l-lg px-4 py-3 text-sm text-warm-ivory placeholder-warm-brown/70 focus:outline-none focus:border-sacred-crimson transition-colors"
//                   />
//                   <button className="bg-sacred-crimson hover:bg-deep-ruby text-warm-ivory px-4 py-3 rounded-r-lg transition-colors duration-300 group">
//                     <Send size={16} className="group-hover:translate-x-1 transition-transform" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links - Simplified */}
//           <div className="lg:col-span-3">
//             <h4 className="text-lg font-semibold mb-8 text-sacred-crimson flex items-center">
//               <div className="w-1 h-6 bg-sacred-crimson rounded-full mr-3"></div>
//               Quick Links
//             </h4>
//             <ul className="space-y-4">
//               {quickLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link 
//                     to={link.path}
//                     className="text-gray-300 hover:text-sacred-crimson transition-all duration-300 flex items-center group text-sm"
//                   >
//                     <ArrowRight size={14} className="mr-3 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-sacred-crimson" />
//                     <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact & CTA */}
//           <div className="lg:col-span-4">
//             <h4 className="text-lg font-semibold mb-8 text-sacred-crimson flex items-center">
//               <div className="w-1 h-6 bg-sacred-crimson rounded-full mr-3"></div>
//               Get in Touch
//             </h4>
            
//             {/* Contact Info */}
//             <div className="space-y-6 mb-8">
//               <div className="flex items-start space-x-4 group">
//                 <div className="w-10 h-10 bg-soft-rose/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-sacred-crimson/20 transition-colors">
//                   <Mail size={16} className="text-sacred-crimson" />
//                 </div>
//                 <div>
//                   <p className="text-xs  text-gray-400 uppercase tracking-wider font-medium mb-1">Email</p>
//                   <a 
//                     href="mailto:social.adiyogifoundation@gmail.com" 
//                     className="text-sm hover:text-sacred-crimson transition-colors text-gray-300 duration-300 break-all"
//                   >
//                     social.adiyogifoundation@gmail.com
//                   </a>
//                 </div>
//               </div>
              
//               <div className="flex items-start space-x-4 group">
//                 <div className="w-10 h-10 bg-soft-rose/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-sacred-crimson/20 transition-colors">
//                   <Phone size={16} className="text-sacred-crimson" />
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Phone</p>
//                   <a 
//                     href="tel:+91XXXXXXXXXX" 
//                     className="text-sm text-gray-300 hover:text-sacred-crimson transition-colors duration-300"
//                   >
//                     +91 XXXXXXXXXX
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Enhanced CTA */}
//             <div className="bg-gradient-to-r from-sacred-crimson/10 to-soft-rose/5 rounded-2xl p-6 border border-sacred-crimson/20">
//               <p className="text-sacred-crimson font-medium mb-2 text-sm">Choose Your Contribution</p>
//               <p className="text-gray-400 text-xs mb-4">Join our community of change-makers</p>
//               <Link
//                 to="/get-involved"
//                 className="inline-flex items-center bg-gradient-to-r from-sacred-crimson to-deep-ruby text-warm-ivory px-6 py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 group w-full justify-center"
//               >
//                 <span>Become a Sahyogi</span>
//                 <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Core Values & Quote Section - Enhanced */}
//       <div className="border-t border-soft-rose/20 bg-gradient-to-b from-rich-charcoal to-rich-charcoal/80">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           {/* Inspirational Quote */}
//           <div className="text-center mb-12">
//             <div className="max-w-4xl mx-auto">
//               <div className="relative">
//                 <div className="absolute -top-4 -left-4 text-6xl text-sacred-crimson/20 font-serif">"</div>
//                 <blockquote className="text-sacred-crimson text-xl md:text-2xl font-medium italic leading-relaxed">
//                   Our programs are bridges… reconnecting modern needs with eternal wisdom.
//                 </blockquote>
//                 <div className="absolute -bottom-4 -right-4 text-6xl text-sacred-crimson/20 font-serif rotate-180">"</div>
//               </div>
//             </div>
//           </div>
          
//           {/* Core Values */}
//           <div className="text-center">
//             <p className="text-sacred-crimson font-semibold text-lg mb-8 uppercase tracking-wider">Our Core Values</p>
//             <div className="flex flex-wrap justify-center gap-4">
//               {coreValues.map((value, index) => (
//                 <span 
//                   key={value}
//                   className="group relative px-6 py-3 bg-gradient-to-r from-soft-rose/10 to-sacred-crimson/5 rounded-full font-medium text-warm-ivory border border-soft-rose/30 hover:border-sacred-crimson hover:bg-sacred-crimson/20 transition-all duration-300 cursor-default"
//                 >
//                   <span className="relative z-10">{value}</span>
//                   <span className="absolute top-0 right-0 w-2 h-2 bg-sacred-crimson rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Footer - Enhanced */}
//       <div className="border-t border-soft-rose/20 bg-rich-charcoal/90">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
//             <div className="flex items-center space-x-2 text-gray-400">
//               <span>© 2025 Adiyogi Foundation. Made by Abhishek </span>
//               <Heart size={14} className="text-sacred-crimson animate-pulse" />
//               {/* <span>for humanity.</span> */}
//             </div>
            
//             <div className="flex items-center space-x-8">
            
//               <div className="flex items-center space-x-2 text-xs text-gray-400">
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//                 <span>All systems operational</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Youtube, 
  Linkedin, 
  MessageCircle,
  Heart,
  ArrowRight,
  Circle,
  Send,
  Facebook
} from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Footer = () => {
const [loading, setLoading] = useState(false);


const[formData, setFormData] = useState({
    email: ''
  });
//   const handleInputChange = (e) => {
//  setFormData({ ...formData, [e.target.name]: e.target.value });
//   }



// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setLoading(true); // Start loading

//   try {
//     const res = await axios.post(
//       'http://localhost:5000/api/subscribe/add',
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
//     }
//   } catch (error) {
//     console.error(error);
//     toast.error(error.response?.data?.message || 'Failed To Subscribe');
   
//   } finally {
//     setLoading(false); // Stop loading
//   }
// };


const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Real-time email validation
    // if (name === 'email') {
    //   if (!value) {
    //     setEmailError('Email is required');
    //   } else if (!validateEmail(value)) {
    //     setEmailError('Please enter a valid email address');
    //   } else {
    //     setEmailError('');
    //   }
    // }
     if (name === 'email') {
  setEmailError(value && !validateEmail(value) ? 'Please enter a valid email address.' : '');
}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Final validation before submit
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
        'http://localhost:5000/api/subscribe/add',
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
      const errorMsg = (error.response?.data?.message || 'Failed To Subscribe');
      toast.error(errorMsg);
      
      // Specific error handling for duplicate email
     
    } finally {
      setLoading(false);
    }
  };


  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Media', path: '/media' },
    { name: 'Temples', path: '/temples' },
    { name: 'Seva', path: '/seva' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const coreValues = ['Dharma', 'Dignity', 'Service', 'Sustainability', 'Synchronicity'];

  return (
    <footer className="bg-rich-charcoal text-warm-ivory">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
          
          {/* Brand Section - Enhanced */}
          <div className="sm:col-span-2 lg:col-span-5">
            <div className="flex items-center space-x-3 mb-6 sm:mb-8">
              <div className="relative">
               <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-sacred-crimson to-deep-ruby rounded-full flex items-center justify-center text-warm-ivory font-bold text-sm sm:text-lg group-hover:scale-105 transition-transform duration-300">
                  ॐ
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                  Adiyogi <span className="text-sacred-crimson">Foundation</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-medium tracking-wide">
                  Rebuilding Purpose. Restoring Dharma.
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              A space of remembrance where ancient insights meet modern lives. Through inner inquiry, 
              outer service, and sacred restoration, we guide communities back to clarity and dharma.
            </p>
            
            {/* Enhanced Social Links */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <p className="text-sacred-crimson font-medium mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider">Connect With Us</p>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <a 
                    href="https://www.instagram.com/adiyogifoundation?igsh=MXVuODhrbTQyZTdvYg" 
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-sacred-crimson/20 to-soft-rose/10 rounded-xl flex items-center justify-center text-sacred-crimson hover:bg-sacred-crimson hover:text-warm-ivory transition-all duration-300 group hover:scale-110 hover:shadow-lg"
                    aria-label="Instagram"
                  >
                    <Instagram size={16} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a 
                    href="https://youtube.com/@adiyogifoundation.b?si=hHJk8UzEA1spKAx3" 
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-sacred-crimson/20 to-soft-rose/10 rounded-xl flex items-center justify-center text-sacred-crimson hover:bg-sacred-crimson hover:text-warm-ivory transition-all duration-300 group hover:scale-110 hover:shadow-lg"
                    aria-label="YouTube"
                  >
                    <Youtube size={16} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/adiyogi-foundation" 
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-sacred-crimson/20 to-soft-rose/10 rounded-xl flex items-center justify-center text-sacred-crimson hover:bg-sacred-crimson hover:text-warm-ivory transition-all duration-300 group hover:scale-110 hover:shadow-lg"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={16} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a 
                    href="https://www.facebook.com/share/19wQKAWb1b/" 
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-sacred-crimson/20 to-soft-rose/10 rounded-xl flex items-center justify-center text-sacred-crimson hover:bg-sacred-crimson hover:text-warm-ivory transition-all duration-300 group hover:scale-110 hover:shadow-lg"
                    aria-label="WhatsApp Group"
                  >
                    <Facebook size={16} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-soft-rose/5 rounded-2xl p-4 sm:p-6 border border-soft-rose/20">
                <h5 className="text-sacred-crimson font-semibold mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                  <Mail size={14} className="sm:w-4 sm:h-4 mr-2" />
                  Email Newsletter
                </h5>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">Stay connected with our latest insights and events.</p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                  {/* <input
                     name='email'
                    value={formData.email}
                    onChange={handleInputChange} 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 bg-rich-charcoal/50 border border-soft-rose/30 rounded-lg sm:rounded-l-lg sm:rounded-r-none px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-200 placeholder-warm-brown/70 focus:outline-none focus:border-sacred-crimson transition-colors"
                  /> */}
                    <div className="relative">
                   <input
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange} 
                    type="email" 
                    placeholder="Enter your email"
                    className={`w-full bg-rich-charcoal/50 border ${
                      emailError ? 'border-red-300' : 'border-soft-rose/30'
                    } rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-200 placeholder-warm-brown/70 focus:outline-none focus:border-sacred-crimson transition-colors`}
                  />
                  {emailError && (
                    <p className="mt-1 text-xs text-red-300">{emailError}</p>
                  )}
                </div>
                  {/* <button type='submit' className="bg-sacred-crimson hover:bg-deep-ruby flex justify-center items-center gap-2 text-warm-ivory px-4 py-2 sm:py-3 rounded-lg sm:rounded-l-none sm:rounded-r-lg transition-colors duration-300 group">
                    <Send size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                    <p className=''>Subscribe</p>
                  </button> */}
                  <button
  type="submit"
  disabled={loading}
  className="bg-sacred-crimson hover:bg-deep-ruby flex cursor-pointer justify-center items-center gap-2 text-warm-ivory px-4 py-2 sm:py-3 rounded-lg sm:rounded-l-none sm:rounded-r-lg transition-colors duration-300 group disabled:opacity-60 disabled:cursor-not-allowed hover:scale-x-105"
>
  {loading ? (
    <>
      <svg
        className="animate-spin h-4 w-4 text-warm-ivory"
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
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        />
      </svg>
      <span className="text-sm">Subscribing...</span>
    </>
  ) : (
    <>
      <Send size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
      <p className="text-sm">Subscribe</p>
    </>
  )}
</button>

                </form>
              </div>
            </div>
          </div>

          {/* Quick Links - Simplified */}
          <div className="lg:col-span-3">
            <h4 className="text-base sm:text-lg font-semibold mb-6 sm:mb-8 text-sacred-crimson flex items-center">
              <div className="w-1 h-4 sm:h-6 bg-sacred-crimson rounded-full mr-3"></div>
              Quick Links
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-sacred-crimson transition-all duration-300 flex items-center group text-xs sm:text-sm"
                  >
                    <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5 mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-sacred-crimson" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & CTA */}
          <div className="sm:col-span-2 lg:col-span-4">
            <h4 className="text-base sm:text-lg font-semibold mb-6 sm:mb-8 text-sacred-crimson flex items-center">
              <div className="w-1 h-4 sm:h-6 bg-sacred-crimson rounded-full mr-3"></div>
              Get in Touch
            </h4>
            
            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <div className="flex items-start space-x-3 sm:space-x-4 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-soft-rose/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-sacred-crimson/20 transition-colors">
                  <Mail size={14} className="sm:w-4 sm:h-4 text-sacred-crimson" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Email</p>
                  <a 
                    href="mailto:social.adiyogifoundation@gmail.com" 
                    className="text-xs sm:text-sm hover:text-sacred-crimson transition-colors text-gray-300 duration-300 break-all"
                  >
                    social.adiyogifoundation@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-soft-rose/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-sacred-crimson/20 transition-colors">
                  <Phone size={14} className="sm:w-4 sm:h-4 text-sacred-crimson" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Phone</p>
                  <a 
                    href="tel:+919175033022" 
                    className="text-xs sm:text-sm text-gray-300 hover:text-sacred-crimson transition-colors duration-300"
                  >
                    +91 9175033022
                  </a>
                </div>
              </div>
            </div>

            {/* Enhanced CTA */}
            <div className="bg-gradient-to-r from-sacred-crimson/10 to-soft-rose/5 rounded-2xl p-4 sm:p-6 border border-sacred-crimson/20">
              <p className="text-sacred-crimson font-medium mb-1 sm:mb-2 text-xs sm:text-sm">Choose Your Contribution</p>
              <p className="text-gray-400 text-xs mb-3 sm:mb-4">Join our community of change-makers.</p>
              <Link
                to="/donate"
                className="inline-flex items-center bg-gradient-to-r from-sacred-crimson to-deep-ruby text-warm-ivory px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 group w-full justify-center text-xs sm:text-sm"
              >
                <span >Become a Sahyogi</span>
                <ArrowRight size={14} className="sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>

     
   

      {/* Bottom Footer - Enhanced */}
      <div className="border-t border-soft-rose/20 bg-rich-charcoal/90">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 sm:space-y-6 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-xs sm:text-sm text-center md:text-left">
              <span>© 2025 Adiyogi Foundation. Made by Abhishek. </span>
              <Heart size={12} className="sm:w-3.5 sm:h-3.5 text-sacred-crimson animate-pulse" />
              {/* <span>for humanity.</span> */}
            </div>
            
            <div className="flex items-center space-x-4 sm:space-x-8">
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;