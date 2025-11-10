
// import React, { useState } from 'react';
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
//   Send,
//   Facebook,
//   Icon,
//   FileText // Added FileText icon for Terms
// } from 'lucide-react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

// const Footer = () => {
// const [loading, setLoading] = useState(false);


// const[formData, setFormData] = useState({
//     email: ''
//   });

// const [emailError, setEmailError] = useState('');

//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
  
//      if (name === 'email') {
//   setEmailError(value && !validateEmail(value) ? 'Please enter a valid email address.' : '');
// }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Final validation before submit
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
//       const errorMsg = (error.response?.data?.message || 'Failed To Subscribe');
//       toast.error(errorMsg);
      
//       // Specific error handling for duplicate email
     
//     } finally {
//       setLoading(false);
//     }
//   };


//   const quickLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About Us', path: '/about' },
//     { name: 'Media', path: '/media' },
//     // { name: 'Temples', path: '/temples' },
//     { name: 'Services', path: '/services' },
//     { name: 'Contact Us', path: '/contact' },
    
//   ];

//   const coreValues = ['Dharma', 'Dignity', 'Service', 'Sustainability', 'Synchronicity'];

//   return (

// <footer className="bg-[#FDF8F8] text-[#5C4B4B] ">
//   <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">

//       {/* Brand */}
//       <div className="sm:col-span-2 lg:col-span-5">
//         <div className="flex items-center space-x-3 mb-6 sm:mb-8">
//           <div className="w-11 h-11 rounded-full overflow-hidden">
//             <img 
//               src="/adiyogifoundation_logo.png" 
//               alt="Adiyogi Foundation Logo" 
//               className="w-full h-full object-cover rounded-full"
//             />
//           </div>
//           <div>
//             <h3 className="text-xl font-bold">
//              <span className="text-sacred-crimson">Adiyogi Foundation</span>
//             </h3>
//             <p className="text-sm text-[#6B4B4B]">Rebuilding Purpose. Restoring Dharma.</p>
//           </div>
//         </div>

//         <p className="text-[#5E5348] mb-6 text-sm leading-relaxed">
//           A space of remembrance where ancient insights meet modern lives. Through inner inquiry, outer service, and sacred restoration, we guide communities back to clarity and dharma.
//         </p>

//         {/* Social */}
// <div>
//   <p className="text-sacred-crimson font-semibold mb-4 text-base uppercase tracking-wider">
//     Connect With Us
//   </p>

//   <div className="flex space-x-2 sm:space-x-3 md:space-x-4 text-[#C41E3A]">
//     <a href="https://www.linkedin.com/company/adiyogi-foundation" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//       <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 hover:text-[#0077b5] transition duration-300" />
//     </a>
//     <a href="https://www.instagram.com/adiyogifoundation?igsh=MXVuODhrbTQyZTdvYg" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
//       <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 hover:text-[#C13584] transition duration-300" />
//     </a>
//     <a href="https://www.facebook.com/share/19wQKAWb1b/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
//       <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6 hover:text-[#1877F2] transition duration-300" />
//     </a>
//     <a href="https://www.youtube.com/channel/UCL8UZJkhwQ0o3YJKB8od1nA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
//       <FaYoutube className="w-5 h-5 sm:w-6 sm:h-6 hover:text-[#FF0000] transition duration-300" />
//     </a>
//   </div>
// </div>

//         {/* Newsletter */}
//         <div className="bg-white border border-[#EADBD5] rounded-2xl p-5 mt-6 shadow-sm">
//           <h5 className="text-sacred-crimson font-semibold mb-2 flex items-center text-sm">
//             <Mail size={14} className="mr-2" />
//             Email Newsletter
//           </h5>
//           <p className="text-xs text-[#6F6156] mb-3">Stay connected with our latest insights and events.</p>
//           <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
//             <div className="relative w-full">
//               <input
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 type="email"
//                 placeholder="Enter your email"
//                 className={`w-full border ${
//                   emailError ? 'border-red-400' : 'border-[#EADBD5]'
//                 } rounded-lg px-4 py-2 text-sm text-[#3E3E3E] bg-gradient-to-r from-[#FFF3F3] to-[#FBEDEA] placeholder-[#B7AFA8] focus:outline-none focus:border-sacred-crimson transition`}
//               />
//               {emailError && (
//                 <p className="mt-1 text-xs text-red-500">{emailError}</p>
//               )}
//             </div>
//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-sacred-crimson hover:bg-deep-ruby text-white px-4 py-2 rounded-lg transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
//             >
//               {loading ? (
//                 <span className="text-sm">Subscribing...</span>
//               ) : (
//                 <div className="flex items-center gap-2 text-sm">
//                   <Send size={14} />
//                   Subscribe
//                 </div>
//               )}
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Quick Links */}
//       <div className="lg:col-span-3">
//         <h4 className="text-lg font-semibold mb-6 text-sacred-crimson flex items-center">
//           <div className="w-1 h-5 bg-sacred-crimson rounded-full mr-3"></div>
//           Quick Links
//         </h4>
//         <ul className="space-y-4">
//           {quickLinks.map((link) => (
//             <li key={link.name}>
//               <Link 
//                 to={link.path}
//                 className="text-[#5E5348] hover:text-sacred-crimson transition duration-200 text-sm flex items-center"
//               >
//                 <ArrowRight size={12} className="mr-2 text-sacred-crimson opacity-0 group-hover:opacity-100 transition" />
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//           {/* Terms and Conditions Link */}
//           <li>
//             <Link 
//               to="/terms-conditions"
//               className="text-[#5E5348] hover:text-sacred-crimson transition duration-200 text-sm flex items-center"
//             >
//               <FileText size={12} className="mr-2 text-sacred-crimson" />
//               Terms & Conditions
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* Contact & CTA */}
//       <div className="sm:col-span-2 lg:col-span-4">
//         <h4 className="text-lg font-semibold mb-6 text-sacred-crimson flex items-center">
//           <div className="w-1 h-5 bg-sacred-crimson rounded-full mr-3"></div>
//           Get in Touch
//         </h4>

//         <div className="space-y-6 mb-6">
//           {/* Email */}
//           <div className="flex space-x-3 items-start">
//             <div className="w-10 h-10 bg-gradient-to-r from-[#FFF3F3] to-[#FBEDEA] rounded-lg flex items-center justify-center">
//               <Mail size={16} className="text-sacred-crimson" />
//             </div>
//             <div>
//               <p className="text-xs uppercase text-[#7D7268] mb-1">Email</p>
//               <a href="mailto:social.adiyogifoundation@gmail.com" className="text-sm text-[#3E3E3E] hover:text-sacred-crimson">social.adiyogifoundation@gmail.com</a>
//             </div>
//           </div>

//           {/* Phone */}
//           <div className="flex space-x-3 items-start">
//             <div className="w-10 h-10 bg-gradient-to-r from-[#FFF3F3] to-[#FBEDEA] rounded-lg flex items-center justify-center">
//               <Phone size={16} className="text-sacred-crimson" />
//             </div>
//             <div>
//               <p className="text-xs uppercase text-[#7D7268] mb-1">Phone</p>
//               <a href="tel:+919175033022" className="text-sm text-[#3E3E3E] hover:text-sacred-crimson">+91 9175033022</a>
//             </div>
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="bg-gradient-to-r from-[#FFF3F3] to-[#FBEDEA] rounded-xl p-5 border border-[#EADBD5]">
//           <p className="text-sacred-crimson font-medium mb-1 text-sm">Choose Your Contribution</p>
//           <p className="text-[#6F6156] text-xs mb-3">Join our community of change-makers.</p>
//           <Link
//             to="/donate"
//             className="inline-flex items-center justify-center bg-sacred-crimson text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition w-full text-sm"
//           >
//             Become a Sahyogi
//             <ArrowRight size={14} className="ml-2" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   </div>


//    <div className="bg-gradient-to-r from-[#FFF3F3] to-[#FBEDEA] border-t border-[#EADBD5]">
//     <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-3 sm:gap-4 md:flex-row md:justify-between md:items-center text-sm text-[#6F6156]">
      
//       {/* Left Section */}
//       <div className="text-center sm:text-left">
//         <span>
//           © 2025 Adiyogi Foundation. Made by Volunteer Abhishek
//           <Heart size={12} className="inline-block ml-1 text-sacred-crimson animate-pulse" />
//         </span>
//       </div>
      
//       {/* Right Section */}
//       <div className="flex items-center justify-center space-x-2 text-xs">
//         <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//         <span>All systems operational.</span>
//       </div>
//     </div>
//   </div>
// </footer>


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
  Facebook,
  Icon,
  FileText // Added FileText icon for Terms
} from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
const [loading, setLoading] = useState(false);


const[formData, setFormData] = useState({
    email: ''
  });

const [emailError, setEmailError] = useState('');

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
    // { name: 'Temples', path: '/temples' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
    
  ];

  const coreValues = ['Dharma', 'Dignity', 'Service', 'Sustainability', 'Synchronicity'];

  return (

<footer className="bg-white text-[#5C4B4B] ">
  <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">

      {/* Brand */}
      <div className="sm:col-span-2 lg:col-span-5">
        <div className="flex items-center space-x-3 mb-6 sm:mb-8">
          <div className="w-11 h-11 rounded-full overflow-hidden">
            <img 
              src="/INSTA.jpg" 
              alt="Adiyogi Foundation Logo" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold">
             <span className="text-[#6a0dad]">Adiyogi Foundation</span>
            </h3>
            <p className="text-sm text-[#6B4B4B]">Rebuilding Purpose. Restoring Dharma.</p>
          </div>
        </div>

        <p className="text-[#5E5348] mb-6 text-sm leading-relaxed">
          A space of remembrance where ancient insights meet modern lives. Through inner inquiry, outer service, and sacred restoration, we guide communities back to clarity and dharma.
        </p>

        {/* Social */}
<div>
  <p className="text-[#6a0dad] font-semibold mb-4 text-base uppercase tracking-wider">
    Connect With Us
  </p>

  <div className="flex space-x-2 sm:space-x-3 md:space-x-4 text-[#6a0dad]">
    <a href="https://www.linkedin.com/company/adiyogi-foundation" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 hover:text-[#0077b5] transition duration-300" />
    </a>
    <a href="https://www.instagram.com/adiyogifoundation?igsh=MXVuODhrbTQyZTdvYg" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 hover:text-[#C13584] transition duration-300" />
    </a>
    <a href="https://www.facebook.com/share/19wQKAWb1b/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6 hover:text-[#1877F2] transition duration-300" />
    </a>
    <a href="https://www.youtube.com/channel/UCL8UZJkhwQ0o3YJKB8od1nA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
      <FaYoutube className="w-5 h-5 sm:w-6 sm:h-6 hover:text-[#FF0000] transition duration-300" />
    </a>
  </div>
</div>

        {/* Newsletter */}
        <div className="bg-white border border-[#EADBD5] rounded-2xl p-5 mt-6 shadow-sm">
          <h5 className="text-[#6a0dad] font-semibold mb-2 flex items-center text-sm">
            <Mail size={14} className="mr-2" />
            Email Newsletter
          </h5>
          <p className="text-xs text-[#6F6156] mb-3">Stay connected with our latest insights and events.</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <div className="relative w-full">
              <input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                placeholder="Enter your email"
                className={`w-full border ${
                  emailError ? 'border-red-400' : 'border-[#EADBD5]'
                } rounded-lg px-4 py-2 text-sm text-[#3E3E3E] bg-gradient-to-r from-[#F8F0FF] to-[#FFE6FF] placeholder-[#B7AFA8] focus:outline-none focus:border-[#6a0dad] transition`}
              />
              {emailError && (
                <p className="mt-1 text-xs text-red-500">{emailError}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#6a0dad] hover:bg-[#5a0ba5] text-white px-4 py-2 rounded-lg transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="text-sm">Subscribing...</span>
              ) : (
                <div className="flex items-center gap-2 text-sm">
                  <Send size={14} />
                  Subscribe
                </div>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Quick Links */}
      <div className="lg:col-span-3">
        <h4 className="text-lg font-semibold mb-6 text-[#6a0dad] flex items-center">
          <div className="w-1 h-5 bg-[#6a0dad] rounded-full mr-3"></div>
          Quick Links
        </h4>
        <ul className="space-y-4">
          {quickLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path}
                className="text-[#5E5348] hover:text-[#6a0dad] transition duration-200 text-sm flex items-center"
              >
                <ArrowRight size={12} className="mr-2 text-[#6a0dad] opacity-0 group-hover:opacity-100 transition" />
                {link.name}
              </Link>
            </li>
          ))}
          {/* Terms and Conditions Link */}
          <li>
            <Link 
              to="/terms-conditions"
              className="text-[#5E5348] hover:text-[#6a0dad] transition duration-200 text-sm flex items-center"
            >
              <FileText size={12} className="mr-2 text-[#6a0dad]" />
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>

      {/* Contact & CTA */}
      <div className="sm:col-span-2 lg:col-span-4">
        <h4 className="text-lg font-semibold mb-6 text-[#6a0dad] flex items-center">
          <div className="w-1 h-5 bg-[#6a0dad] rounded-full mr-3"></div>
          Get in Touch
        </h4>

        <div className="space-y-6 mb-6">
          {/* Email */}
          <div className="flex space-x-3 items-start">
            <div className="w-10 h-10 bg-gradient-to-r from-[#F8F0FF] to-[#FFE6FF] rounded-lg flex items-center justify-center">
              <Mail size={16} className="text-[#6a0dad]" />
            </div>
            <div>
              <p className="text-xs uppercase text-[#7D7268] mb-1">Email</p>
              <a href="mailto:info@adiyogifoundation.org" className="text-sm text-[#3E3E3E] hover:text-[#6a0dad]">info@adiyogifoundation.org</a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex space-x-3 items-start">
            <div className="w-10 h-10 bg-gradient-to-r from-[#F8F0FF] to-[#FFE6FF] rounded-lg flex items-center justify-center">
              <Phone size={16} className="text-[#6a0dad]" />
            </div>
            <div>
              <p className="text-xs uppercase text-[#7D7268] mb-1">Phone</p>
              <a href="tel:+919175033022" className="text-sm text-[#3E3E3E] hover:text-[#6a0dad]">+91 9175033022</a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#F8F0FF] to-[#FFE6FF] rounded-xl p-5 border border-[#EADBD5]">
          <p className="text-[#6a0dad] font-medium mb-1 text-sm">Choose Your Contribution</p>
          <p className="text-[#6F6156] text-xs mb-3">Join our community of change-makers.</p>
          <Link
            to="/donate"
            className="inline-flex items-center justify-center bg-[#6a0dad] text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition w-full text-sm"
          >
            Become a Sahyogi
            <ArrowRight size={14} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  </div>


   <div className="bg-gradient-to-r from-[#F8F0FF] to-[#FFE6FF] border-t border-[#EADBD5]">
    <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-3 sm:gap-4 md:flex-row md:justify-between md:items-center text-sm text-[#6F6156]">
      
      {/* Left Section */}
      <div className="text-center sm:text-left">
        <span>
          © 2025 Adiyogi Foundation. Made by Volunteer Abhishek
          <Heart size={12} className="inline-block ml-1 text-[#6a0dad] animate-pulse" />
        </span>
      </div>
      
      {/* Right Section */}
      <div className="flex items-center justify-center space-x-2 text-xs">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span>All systems operational.</span>
      </div>
    </div>
  </div>
</footer>


  );
};

export default Footer;