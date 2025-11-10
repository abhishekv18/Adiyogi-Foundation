


// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, Phone, Mail, Heart, ChevronDown, Users } from 'lucide-react';
// import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const location = useLocation();

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setIsMenuOpen(false);
//     setIsDropdownOpen(false);
//     setIsMobileDropdownOpen(false);
//   }, [location]);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const navItems = [
//     { name: 'About us', path: '/about' },
//     { name: 'Media', path: '/media' },
//     { name: 'Products', path: '/products' },
//     { name: 'Seva', path: '/seva' },
//     {name:'Services',path:'/services'},
//     //  {name:'Horoscope',path:'/horoscope'}
//   ];

//   const dropdownItems = [
//       { name: 'Donate now', path: '/donate' },
//     { name: 'Volunteers', path: '/volunteers' },
//     { name: 'Contact us', path: '/contact' },
   
//   ];

//   const isActivePath = (path) => {
//     if (path === '/' && location.pathname === '/') return true;
//     if (path !== '/' && location.pathname.startsWith(path)) return true;
//     return false;
//   };

//   const isGetInvolvedActive = () => {
//     return dropdownItems.some(item => isActivePath(item.path));
//   };
//  const [isPopupOpen, setIsPopupOpen] = useState(false);
//   return (
//     <>
//       {/* Top Contact Bar - Hidden on mobile */}
 



// {/* <div className="hidden lg:block bg-[#FDF8F8] text-[#5C4B4B] py-2 border-b border-[#E6CACA]">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="flex justify-between items-center text-sm min-h-[20px]">
//       <div className="flex items-center space-x-4 xl:space-x-8">
        
//         <div className="flex items-baseline gap-2">
//           <Mail size={14} className="text-[#C41E3A] flex-shrink-0 translate-y-0.5" />
//           <a 
//             href="mailto:social.adiyogifoundation@gmail.com"
//             className="truncate hover:text-[#C41E3A] transition-colors duration-300"
//           >
//             social.adiyogifoundation@gmail.com
//           </a>
//         </div>

//         <div className="flex items-baseline gap-2">
//           <Phone size={14} className="text-[#C41E3A] flex-shrink-0 translate-y-0.5" />
//           <a 
//             href="tel:+919175033022"
//             className="hover:text-[#C41E3A] transition-colors duration-300"
//           >
//             +91 9175033022
//           </a>
//         </div>

//       </div>

//       <div className="flex items-center space-x-4 text-[#C41E3A] font-medium">
//         <span className="whitespace-nowrap">Follow us:</span>
//         <div className="flex items-center space-x-3">
//           <a 
//             href="https://www.linkedin.com/company/adiyogi-foundation" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="flex items-center justify-center w-5 h-5"
//           >
//             <FaLinkedin className="w-4 h-4 hover:text-[#0077b5] transition-colors duration-300" />
//           </a>
//           <a 
//             href="https://www.instagram.com/adiyogifoundation?igsh=MXVuODhrbTQyZTdvYg" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="flex items-center justify-center w-5 h-5"
//           >
//             <FaInstagram className="w-4 h-4 hover:text-[#C13584] transition-colors duration-300" />
//           </a>
//           <a 
//             href="https://www.facebook.com/share/19wQKAWb1b/" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="flex items-center justify-center w-5 h-5"
//           >
//             <FaFacebook className="w-4 h-4 hover:text-[#1877F2] transition-colors duration-300" />
//           </a>
//           <a 
//             href="https://www.youtube.com/channel/UCL8UZJkhwQ0o3YJKB8od1nA" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="flex items-center justify-center w-5 h-5"
//           >
//             <FaYoutube className="w-4 h-4 hover:text-[#FF0000] transition-colors duration-300" />
//           </a>
//         </div>
//       </div>

//     </div>
//   </div>
// </div> */}
// <div className="bg-[#FDF8F8] text-[#5C4B4B] border-b border-[#E6CACA] hidden lg:block relative overflow-hidden">
//   <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative">
//     <div className="flex items-center justify-between h-8 sm:h-9 lg:h-10 text-xs sm:text-sm">
//       {/* Left Side - Contact Info */}
//       <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
//         <div className="flex items-center space-x-1.5 sm:space-x-2 text-[#5C4B4B] transition-all duration-300 group cursor-pointer">
//           <div className="p-1 sm:p-1.5 bg-gradient-to-r from-[#FFF3F3] to-[#FBEDEA] rounded-lg group-hover:bg-[#C41E3A]/20 transition-all duration-300">
//             <Mail className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#C41E3A]" />
//           </div>
//           <div>
//             <a 
//               href="mailto:social.adiyogifoundation@gmail.com" 
//               className="font-medium text-[#5C4B4B] text-xs sm:text-sm hover:text-[#C41E3A] transition-colors duration-300"
//             >
//               social.adiyogifoundation@gmail.com
//             </a>
//           </div>
//         </div>
        
//         <div className="flex items-center space-x-1.5 sm:space-x-2 text-[#5C4B4B] transition-all duration-300 group cursor-pointer">
//           <div className="p-1 sm:p-1.5 bg-gradient-to-r from-[#FFF3F3] to-[#FBEDEA] rounded-lg group-hover:bg-[#C41E3A]/20 transition-all duration-300">
//             <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#C41E3A]" />
//           </div>
//           <div>
//             <a 
//               href="tel:+919175033022" 
//               className="font-medium text-[#5C4B4B] text-xs sm:text-sm hover:text-[#C41E3A] transition-colors duration-300"
//             >
//               +91 9175033022
//             </a>
//           </div>
//         </div>
//       </div>
      
//       {/* Right Side - Social Media */}
//       <div className="flex items-center space-x-2 sm:space-x-4">
//         <span className="text-[#C41E3A] font-medium text-xs sm:text-sm hidden lg:inline">Follow Us:</span>
//         <div className="flex space-x-1 sm:space-x-2">
//           {[
//             {
//               name: 'linkedin',
//               icon: FaLinkedin,
//               link: 'https://www.linkedin.com/company/adiyogi-foundation',
//               color: 'hover:bg-[#0077b5] hover:text-white'
//             },
//             {
//               name: 'instagram',
//               icon: FaInstagram,
//               link: 'https://www.instagram.com/adiyogifoundation?igsh=MXVuODhrbTQyZTdvYg',
//               color: 'hover:bg-[#C13584] hover:text-white'
//             },
//             {
//               name: 'facebook',
//               icon: FaFacebook,
//               link: 'https://www.facebook.com/share/19wQKAWb1b/',
//               color: 'hover:bg-[#1877F2] hover:text-white'
//             },
//             {
//               name: 'youtube',
//               icon: FaYoutube,
//               link: 'https://www.youtube.com/channel/UCL8UZJkhwQ0o3YJKB8od1nA',
//               color: 'hover:bg-[#FF0000] hover:text-white'
//             }
//           ].map((social) => {
//             const IconComponent = social.icon;
//             return (
//               <a
//                 key={social.name}
//                 href={social.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`w-6 h-6 sm:w-7 sm:h-7 ${social.color} rounded-full flex items-center justify-center text-[#C41E3A] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#C41E3A]/20 group`}
//               >
//                 <IconComponent className="h-3 w-3 sm:h-3.5 sm:w-3.5 group-hover:scale-110 transition-transform duration-300" />
//               </a>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//       {/* Main Header */}
//       <header 
//         className={`sticky top-0 z-50 transition-all duration-300  ${
//           isScrolled 
//             ? 'bg-white backdrop-blur-lg shadow-xl border-b border-soft-rose' 
//             : 'bg-white backdrop-blur-md shadow-lg border-b border-soft-rose/50'
//         }`}
//         style={{
//           boxShadow: isScrolled 
//             ? '0 4px 12px rgba(196, 30, 58, 0.15)' 
//             : '0 2px 8px rgba(196, 30, 58, 0.1)'
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            
//             {/* Logo - Optimized for mobile */}
//             <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0 min-w-0 max-w-[65%] sm:max-w-none">
// <div className="relative flex-shrink-0">
//   <div className="w-11 h-11 rounded-full overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300 bg-white">
//     <img 
//       src="/WhatsApp Image 2025-10-23 at 10.04.29 PM.jpeg" 
//       alt="Adiyogi Foundation Logo" 
//       className="w-full h-full object-contain rounded-full" 
//     />
//   </div>
// </div>
             

//               <div className="min-w-0 flex-1">
//   <div className="flex flex-col lg:flex-row lg:items-baseline lg:space-x-1">
//     <h1 className="text-sm sm:text-lg lg:text-2xl font-bold text-sacred-crimson group-hover:text-deep-ruby transition-colors duration-300 truncate leading-tight">
//       Adiyogi
//     </h1>
//     <h2 className="text-xs sm:text-base lg:text-2xl font-bold text-sacred-crimson group-hover:text-deep-ruby transition-colors duration-300 truncate leading-tight">
//      Foundation
//     </h2>
//   </div>
  
//   <p className="hidden sm:block text-xs font-medium -mt-1 group-hover:text-sacred-crimson transition-colors duration-300 truncate leading-tight" style={{ color: '#6B4B4B' }}>
//     Rebuilding Purpose. Restoring Dharma.
//   </p>
// </div>

//             </Link>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   className={`px-3 xl:px-4 py-2 rounded-lg text-[15px] xl:text-[15px] font-medium transition-all duration-200 relative whitespace-nowrap ${
//                     isActivePath(item.path)
//                       ? 'text-white bg-sacred-crimson shadow-md'
//                       : 'text-rich-charcoal hover:text-sacred-crimson hover:bg-soft-rose'
//                   }`}
//                   style={{
//                     backgroundColor: isActivePath(item.path) ? '#C41E3A' : undefined,
//                     boxShadow: isActivePath(item.path) ? '0 2px 8px rgba(139, 21, 56, 0.25)' : undefined
//                   }}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
              
//               {/* Desktop Get Involved Dropdown */}
//               <div className="relative" ref={dropdownRef}>
//                 <button
//                   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                   onMouseEnter={() => setIsDropdownOpen(true)}
//                   className={`flex items-center space-x-1 px-3 xl:px-4 py-2 rounded-lg text-sm xl:text-[15px] font-medium transition-all duration-200 whitespace-nowrap ${
//                     isGetInvolvedActive()
//                       ? 'text-white bg-sacred-crimson shadow-md'
//                       : 'text-rich-charcoal hover:text-sacred-crimson hover:bg-soft-rose'
//                   }`}
//                   style={{
//                     backgroundColor: isGetInvolvedActive() ? '#C41E3A' : undefined,
//                     boxShadow: isGetInvolvedActive() ? '0 2px 8px rgba(139, 21, 56, 0.25)' : undefined
//                   }}
//                 >
//                   <span>Get Involved</span>
//                   <ChevronDown size={16} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
//                 </button>
                
//                 {/* Desktop Dropdown Menu */}
//                 <div 
//                   className={`absolute top-full left-0 mt-1 w-48 bg-warm-ivory rounded-lg shadow-lg transition-all duration-200 z-50 ${
//                     isDropdownOpen 
//                       ? 'opacity-100 translate-y-0 pointer-events-auto' 
//                       : 'opacity-0 -translate-y-2 pointer-events-none'
//                   }`}
//                   style={{ 
//                     border: '1px solid #F4E8E8',
//                     boxShadow: '0 4px 12px rgba(196, 30, 58, 0.15)'
//                   }}
//                   onMouseLeave={() => setIsDropdownOpen(false)}
//                 >
//                   <div className="py-2">
//                     {dropdownItems.map((item) => (
//                       <Link
//                         key={item.name}
//                         to={item.path}
//                         className={`block px-4 py-2 text-sm font-medium transition-all duration-200 ${
//                           isActivePath(item.path)
//                             ? 'text-white bg-sacred-crimson'
//                             : 'text-rich-charcoal hover:text-sacred-crimson hover:bg-soft-rose'
//                         }`}
//                         style={{
//                           backgroundColor: isActivePath(item.path) ? '#C41E3A' : undefined
//                         }}
//                         onClick={() => setIsDropdownOpen(false)}
//                       >
//                         {item.name}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </nav>

// <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 flex-shrink-0">

//   <Link to="/donate">
//   <button
//     className="flex items-center gap-1 xl:gap-2 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap bg-[#C41E3A] hover:bg-[#8B1538]"
//   >
//     <Heart size={16} strokeWidth={2} />
//     <span>Donate</span>
//   </button>
// </Link>

// <Link to="/volunteers">
//   <button
//     className="flex items-center gap-1 xl:gap-2 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap bg-[#C41E3A] hover:bg-[#8B1538]"
//   >
//     <Users size={16} strokeWidth={2} />
//     <span>Join Us</span>
//   </button>
// </Link>

// </div>

//  <div className="flex items-center space-x-0.5 sm:space-x-2 lg:hidden flex-shrink-0">
//   <Link to="/donate" className="flex">
//     <button
//       className="flex items-center justify-center gap-[2px] sm:gap-2 text-white px-1.5 sm:px-4 py-1 sm:py-2 rounded text-[10px] sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap h-[25px] sm:h-[35px]"
//       style={{
//         backgroundColor: '#C41E3A',
//         boxShadow: '0 2px 8px rgba(139, 21, 56, 0.25)'
//       }}
//       onMouseEnter={(e) => e.target.style.backgroundColor = '#8B1538'}
//       onMouseLeave={(e) => e.target.style.backgroundColor = '#C41E3A'}
//     >
//       <Heart size={12} strokeWidth={2} />
//       <span>Donate</span>
//     </button>
//   </Link>

//   <Link to="/volunteers" className="flex">
//     <button
//       className="flex items-center justify-center gap-[2px] sm:gap-2 text-white px-1.5 sm:px-4 py-1 sm:py-2 rounded text-[10px] sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap h-[25px] sm:h-[35px]"
//       style={{
//         backgroundColor: '#C41E3A',
//         boxShadow: '0 2px 8px rgba(139, 21, 56, 0.25)'
//       }}
//       onMouseEnter={(e) => e.target.style.backgroundColor = '#8B1538'}
//       onMouseLeave={(e) => e.target.style.backgroundColor = '#C41E3A'}
//     >
//       <Users size={12} strokeWidth={2} />
//       <span>Join</span>
//     </button>
//   </Link>

//   {/* Mobile Menu Button */}
//   <button
//     onClick={() => setIsMenuOpen(!isMenuOpen)}
//     className="lg:hidden p-[6px] sm:p-2 rounded text-rich-charcoal hover:text-sacred-crimson hover:bg-white transition-all duration-200 flex-shrink-0 h-[30px] sm:h-[40px] w-[30px] sm:w-[40px] flex items-center justify-center"
//     aria-label="Toggle menu"
//   >
//     {isMenuOpen ? <X size={16} className="sm:w-6 sm:h-6" /> : <Menu size={16} className="sm:w-6 sm:h-6" />}
//   </button>
// </div>



//           </div>
//         </div>

//         {/* Mobile Navigation - Fixed positioning and animation */}
//         <div 
//           className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out z-40 ${
//             isMenuOpen 
//               ? 'opacity-100 translate-y-0 pointer-events-auto' 
//               : 'opacity-0 -translate-y-4 pointer-events-none'
//           }`}
//         >
//           <div 
//             className="bg-white border-t shadow-lg"
//             style={{ 
//               borderTopColor: '#F4E8E8',
//               boxShadow: '0 4px 12px rgba(196, 30, 58, 0.15)'
//             }}
//           >
//             <div className="max-w-7xl mx-auto px-2 sm:px-4 py-3 sm:py-4">
//               <div className="space-y-1">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     to={item.path}
//                     className={`block px-3 sm:px-4 py-2.5 sm:py-3 rounded text-sm sm:text-base font-medium transition-all duration-200 ${
//                       isActivePath(item.path)
//                         ? 'text-white bg-sacred-crimson'
//                         : 'text-rich-charcoal hover:text-sacred-crimson hover:bg-white'
//                     }`}
//                     style={{
//                       backgroundColor: isActivePath(item.path) ? '#C41E3A' : undefined
//                     }}
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
                
              
//                 <div>
//                   <button
//                     onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
//                     className={`w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 rounded text-sm sm:text-base font-medium transition-all duration-200 ${
//                       isGetInvolvedActive()
//                         ? 'text-white bg-sacred-crimson'
//                         : 'text-rich-charcoal hover:text-sacred-crimson hover:bg-soft-rose'
//                     }`}
//                     style={{
//                       backgroundColor: isGetInvolvedActive() ? '#C41E3A' : undefined
//                     }}
//                   >
//                     <span>Get Involved</span>
//                     <ChevronDown size={16} className={`sm:w-5 sm:h-5 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
//                   </button>
                  
                 
//                   <div className={`ml-3 sm:ml-4 mt-1 space-y-1 overflow-hidden transition-all duration-200 ${
//                     isMobileDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
//                   }`}>
//                     {dropdownItems.map((item) => (
//                       <Link
//                         key={item.name}
//                         to={item.path}
//                         className={`block px-3 sm:px-4 py-2 rounded text-sm sm:text-sm font-medium transition-all duration-200 ${
//                           isActivePath(item.path)
//                             ? 'text-white bg-sacred-crimson'
//                             : 'text-rich-charcoal hover:text-sacred-crimson hover:bg-soft-rose'
//                         }`}
//                         style={{
//                           backgroundColor: isActivePath(item.path) ? '#C41E3A' : undefined
//                         }}
//                         onClick={() => {
//                           setIsMenuOpen(false);
//                           setIsMobileDropdownOpen(false);
//                         }}
//                       >
//                         {item.name}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>


// <div className="pt-5 mt-4 border-t border-[#F4E8E8]">
//   <div className="flex flex-col items-center text-center">
//     <p className="text-sm sm:text-base font-semibold text-rich-charcoal mb-3">
//       Follow us
//     </p>
//     <div className="flex justify-center items-center gap-4 sm:gap-6 text-[#C41E3A]">
//       <a
//         href="https://www.linkedin.com/company/adiyogi-foundation"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FaLinkedin className="w-6 h-6 hover:text-[#0077b5] transition duration-200" />
//       </a>
//       <a
//         href="https://www.instagram.com/adiyogifoundation?igsh=MXVuODhrbTQyZTdvYg"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FaInstagram className="w-6 h-6 hover:text-[#C13584] transition duration-200" />
//       </a>
//       <a
//         href="https://www.facebook.com/share/19wQKAWb1b/"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FaFacebook className="w-6 h-6 hover:text-[#1877F2] transition duration-200" />
//       </a>
//       <a
//         href="https://www.youtube.com/channel/UCL8UZJkhwQ0o3YJKB8od1nA"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FaYoutube className="w-6 h-6 hover:text-[#FF0000] transition duration-200" />
//       </a>
//     </div>
//   </div>
// </div>


//               </div>
//             </div>
//           </div>
//         </div>


//       </header>

//       {/* Spacer */}
//       <div className="h-1 lg:h-0"></div>

//       <style jsx>{`
//         .text-rich-charcoal { color: #2C2C2C; }
//         .text-sacred-crimson { color: #C41E3A; }
//         .text-deep-ruby { color: #8B1538; }
//         .bg-warm-ivory { background-color: #FFFEF7; }
//         .bg-rose-cream { background-color: #FDF8F8; }
//         .bg-rich-charcoal { background-color: #2C2C2C; }
//         .bg-sacred-crimson { background-color: #C41E3A; }
//         .bg-soft-rose { background-color: #F4E8E8; }
//         .border-soft-rose { border-color: #F4E8E8; }
//         .hover\\:text-sacred-crimson:hover { color: #C41E3A; }
//         .hover\\:text-deep-ruby:hover { color: #8B1538; }
//         .hover\\:bg-soft-rose:hover { background-color: #F4E8E8; }
        
//         /* Responsive optimizations */
//         @media (max-width: 639px) {
//           /* Mobile-first approach for very small screens */
//           .space-x-1 > :not([hidden]) ~ :not([hidden]) {
//             margin-left: 0.25rem;
//           }
          
//           /* Ensure minimum touch targets */
//           button, a {
//             min-height: 36px;
//             min-width: 32px;
//           }
          
//           /* Better button sizing for small screens */
//           .min-h-\[36px\] {
//             min-height: 36px;
//           }
          
//           /* Compact text sizing */
//           .text-xs {
//             font-size: 0.75rem;
//             line-height: 1.2;
//           }
          
//           /* Logo adjustments for mobile */
//           .max-w-\[65\%\] {
//             max-width: 65%;
//           }
          
//           /* Reduce shadows for performance */
//           .shadow-sm {
//             box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
//           }
//         }
        
//         /* Small screens and up */
//         @media (min-width: 640px) {
//           .sm\\:w-8 { width: 2rem; }
//           .sm\\:h-8 { height: 2rem; }
//           .sm\\:text-lg { font-size: 1.125rem; }
//           .sm\\:text-sm { font-size: 0.875rem; }
//           .sm\\:text-base { font-size: 1rem; }
//           .sm\\:px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
//           .sm\\:px-4 { padding-left: 1rem; padding-right: 1rem; }
//           .sm\\:py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
//           .sm\\:py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
//           .sm\\:py-2\\.5 { padding-top: 0.625rem; padding-bottom: 0.625rem; }
//           .sm\\:space-x-2 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.5rem; }
//           .sm\\:h-16 { height: 4rem; }
//           .sm\\:min-h-\[40px\] { min-height: 40px; }
//           .sm\\:min-w-\[40px\] { min-width: 40px; }
//           .sm\\:w-6 { width: 1.5rem; }
//           .sm\\:h-6 { height: 1.5rem; }
//           .sm\\:w-5 { width: 1.25rem; }
//           .sm\\:h-5 { height: 1.25rem; }
//           .sm\\:block { display: block; }
//           .sm\\:max-w-none { max-width: none; }
//         }
        
//         /* Ensure proper spacing and prevent overflow */
//         .truncate {
//           overflow: hidden;
//           text-overflow: ellipsis;
//           white-space: nowrap;
//         }
        
//         .leading-tight {
//           line-height: 1.25;
//         }
        
//         /* High DPI display optimizations */
//         @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
//           .shadow-lg {
//             box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
//           }
//         }
        
//         /* Touch-friendly interactions */
//         @media (hover: none) and (pointer: coarse) {
//           .hover\\:scale-105:hover {
//             transform: none;
//           }
//           button, a {
//             min-height: 44px;
//             min-width: 44px;
//           }
//         }
        
//         /* Very small screens (320px and below) */
//         @media (max-width: 320px) {
//           .space-x-1 > :not([hidden]) ~ :not([hidden]) {
//             margin-left: 0.125rem;
//           }
          
//           .px-2 {
//             padding-left: 0.375rem;
//             padding-right: 0.375rem;
//           }
          
//           .text-xs {
//             font-size: 0.7rem;
//           }
          
//           .max-w-\[65\%\] {
//             max-width: 60%;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Header;

import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Heart, ChevronDown, Users } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    setIsMobileDropdownOpen(false);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { name: 'About us', path: '/about' },
    { name: 'Media', path: '/media' },
    { name: 'Products', path: '/products' },
    { name: 'Seva', path: '/seva' },
    {name:'Services',path:'/services'},
    //  {name:'Horoscope',path:'/horoscope'}
  ];

  const dropdownItems = [
      { name: 'Donate now', path: '/donate' },
    { name: 'Volunteers', path: '/volunteers' },
    { name: 'Contact us', path: '/contact' },
   
  ];

  const isActivePath = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const isGetInvolvedActive = () => {
    return dropdownItems.some(item => isActivePath(item.path));
  };
 const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <>
      {/* Top Contact Bar - Hidden on mobile */}
 



{/* <div className="hidden lg:block bg-[#FDF8F8] text-[#5C4B4B] py-2 border-b border-[#E6CACA]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center text-sm min-h-[20px]">
      <div className="flex items-center space-x-4 xl:space-x-8">
        
        <div className="flex items-baseline gap-2">
          <Mail size={14} className="text-[#C41E3A] flex-shrink-0 translate-y-0.5" />
          <a 
            href="mailto:social.adiyogifoundation@gmail.com"
            className="truncate hover:text-[#C41E3A] transition-colors duration-300"
          >
            social.adiyogifoundation@gmail.com
          </a>
        </div>

        <div className="flex items-baseline gap-2">
          <Phone size={14} className="text-[#C41E3A] flex-shrink-0 translate-y-0.5" />
          <a 
            href="tel:+919175033022"
            className="hover:text-[#C41E3A] transition-colors duration-300"
          >
            +91 9175033022
          </a>
        </div>

      </div>

      <div className="flex items-center space-x-4 text-[#C41E3A] font-medium">
        <span className="whitespace-nowrap">Follow us:</span>
        <div className="flex items-center space-x-3">
          <a 
            href="https://www.linkedin.com/company/adiyogi-foundation" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-5 h-5"
          >
            <FaLinkedin className="w-4 h-4 hover:text-[#0077b5] transition-colors duration-300" />
          </a>
          <a 
            href="https://www.instagram.com/adiyogifoundation?igsh=MXVuODhrbTQyZTdvYg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-5 h-5"
          >
            <FaInstagram className="w-4 h-4 hover:text-[#C13584] transition-colors duration-300" />
          </a>
          <a 
            href="https://www.facebook.com/share/19wQKAWb1b/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-5 h-5"
          >
            <FaFacebook className="w-4 h-4 hover:text-[#1877F2] transition-colors duration-300" />
          </a>
          <a 
            href="https://www.youtube.com/channel/UCL8UZJkhwQ0o3YJKB8od1nA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-5 h-5"
          >
            <FaYoutube className="w-4 h-4 hover:text-[#FF0000] transition-colors duration-300" />
          </a>
        </div>
      </div>

    </div>
  </div>
</div> */}
<div className="bg-white text-[#5C4B4B] border-b border-[#E6CACA] hidden lg:block relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative">
    <div className="flex items-center justify-between h-8 sm:h-9 lg:h-10 text-xs sm:text-sm">
      {/* Left Side - Contact Info */}
      <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
        <div className="flex items-center space-x-1.5 sm:space-x-2 text-[#5C4B4B] transition-all duration-300 group cursor-pointer">
          <div className="p-1 sm:p-1.5 bg-gradient-to-r from-[#F8F0FF] to-[#FFE6FF] rounded-lg group-hover:bg-[#6a0dad]/20 transition-all duration-300">
            <Mail className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#6a0dad]" />
          </div>
          <div>
            <a 
              href="mailto:info@adiyogifoundation.org" 
              className="font-medium text-[#5C4B4B] text-xs sm:text-sm hover:text-[#6a0dad] transition-colors duration-300"
            >
             info@adiyogifoundation.org
            </a>
          </div>
        </div>
        
        <div className="flex items-center space-x-1.5 sm:space-x-2 text-[#5C4B4B] transition-all duration-300 group cursor-pointer">
          <div className="p-1 sm:p-1.5 bg-gradient-to-r from-[#F8F0FF] to-[#FFE6FF] rounded-lg group-hover:bg-[#6a0dad]/20 transition-all duration-300">
            <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#6a0dad]" />
          </div>
          <div>
            <a 
              href="tel:+919175033022" 
              className="font-medium text-[#5C4B4B] text-xs sm:text-sm hover:text-[#6a0dad] transition-colors duration-300"
            >
              +91 9175033022
            </a>
          </div>
        </div>
      </div>
      
      {/* Right Side - Social Media */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        <span className="text-[#6a0dad] font-medium text-xs sm:text-sm hidden lg:inline">Follow Us:</span>
        <div className="flex space-x-1 sm:space-x-2">
          {[
            {
              name: 'linkedin',
              icon: FaLinkedin,
              link: 'https://www.linkedin.com/company/adiyogi-foundation',
              color: 'hover:bg-[#0077b5] hover:text-white'
            },
            {
              name: 'instagram',
              icon: FaInstagram,
              link: 'https://www.instagram.com/adiyogifoundation?igsh=MXVuODhrbTQyZTdvYg',
              color: 'hover:bg-[#C13584] hover:text-white'
            },
            {
              name: 'facebook',
              icon: FaFacebook,
              link: 'https://www.facebook.com/share/19wQKAWb1b/',
              color: 'hover:bg-[#1877F2] hover:text-white'
            },
            {
              name: 'youtube',
              icon: FaYoutube,
              link: 'https://www.youtube.com/channel/UCL8UZJkhwQ0o3YJKB8od1nA',
              color: 'hover:bg-[#FF0000] hover:text-white'
            }
          ].map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-6 h-6 sm:w-7 sm:h-7 ${social.color} rounded-full flex items-center justify-center text-[#6a0dad] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#6a0dad]/20 group`}
              >
                <IconComponent className="h-3 w-3 sm:h-3.5 sm:w-3.5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  </div>
</div>
      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300  ${
          isScrolled 
            ? 'bg-white backdrop-blur-lg shadow-xl border-b border-[#F0E6FF]' 
            : 'bg-white backdrop-blur-md shadow-lg border-b border-[#F0E6FF]/50'
        }`}
        style={{
          boxShadow: isScrolled 
            ? '0 4px 12px rgba(106, 13, 173, 0.15)' 
            : '0 2px 8px rgba(106, 13, 173, 0.1)'
        }}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            
            {/* Logo - Optimized for mobile */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0 min-w-0 max-w-[65%] sm:max-w-none">
<div className="relative flex-shrink-0">
  <div className="w-11 h-11 rounded-full overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300 bg-white">
    <img 
      src="/INSTA.jpg" 
      alt="Adiyogi Foundation Logo" 
      className="w-full h-full object-contain rounded-full" 
    />
  </div>
</div>
             

              <div className="min-w-0 flex-1">
  <div className="flex flex-col lg:flex-row lg:items-baseline lg:space-x-1">
    <h1 className="text-sm sm:text-lg lg:text-2xl font-bold text-[#6a0dad] group-hover:text-[#5a0ba5] transition-colors duration-300 truncate leading-tight">
      Adiyogi
    </h1>
    <h2 className="text-xs sm:text-base lg:text-2xl font-bold text-[#6a0dad] group-hover:text-[#5a0ba5] transition-colors duration-300 truncate leading-tight">
     Foundation
    </h2>
  </div>
  
  <p className="hidden sm:block text-xs font-medium -mt-1 group-hover:text-[#6a0dad] transition-colors duration-300 truncate leading-tight" style={{ color: '#6B4B4B' }}>
    Rebuilding Purpose. Restoring Dharma.
  </p>
</div>

            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 xl:px-4 py-2 rounded-lg text-[15px] xl:text-[15px] font-medium transition-all duration-200 relative whitespace-nowrap ${
                    isActivePath(item.path)
                      ? 'text-white bg-[#6a0dad] shadow-md'
                      : 'text-[#2C2C2C] hover:text-[#6a0dad] hover:bg-[#F8F0FF]'
                  }`}
                  style={{
                    backgroundColor: isActivePath(item.path) ? '#6a0dad' : undefined,
                    boxShadow: isActivePath(item.path) ? '0 2px 8px rgba(106, 13, 173, 0.25)' : undefined
                  }}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Desktop Get Involved Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  className={`flex items-center space-x-1 px-3 xl:px-4 py-2 rounded-lg text-sm xl:text-[15px] font-medium transition-all duration-200 whitespace-nowrap ${
                    isGetInvolvedActive()
                      ? 'text-white bg-[#6a0dad] shadow-md'
                      : 'text-[#2C2C2C] hover:text-[#6a0dad] hover:bg-[#F8F0FF]'
                  }`}
                  style={{
                    backgroundColor: isGetInvolvedActive() ? '#6a0dad' : undefined,
                    boxShadow: isGetInvolvedActive() ? '0 2px 8px rgba(106, 13, 173, 0.25)' : undefined
                  }}
                >
                  <span>Get Involved</span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Desktop Dropdown Menu */}
                <div 
                  className={`absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg transition-all duration-200 z-50 ${
                    isDropdownOpen 
                      ? 'opacity-100 translate-y-0 pointer-events-auto' 
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                  style={{ 
                    border: '1px solid #F0E6FF',
                    boxShadow: '0 4px 12px rgba(106, 13, 173, 0.15)'
                  }}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <div className="py-2">
                    {dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`block px-4 py-2 text-sm font-medium transition-all duration-200 ${
                          isActivePath(item.path)
                            ? 'text-white bg-[#6a0dad]'
                            : 'text-[#2C2C2C] hover:text-[#6a0dad] hover:bg-[#F8F0FF]'
                        }`}
                        style={{
                          backgroundColor: isActivePath(item.path) ? '#6a0dad' : undefined
                        }}
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

<div className="hidden lg:flex items-center space-x-2 xl:space-x-3 flex-shrink-0">

  <Link to="/donate">
  <button
    className="flex items-center gap-1 xl:gap-2 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap bg-[#6a0dad] hover:bg-[#5a0ba5]"
  >
    <Heart size={16} strokeWidth={2} />
    <span>Donate</span>
  </button>
</Link>

<Link to="/volunteers">
  <button
    className="flex items-center gap-1 xl:gap-2 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap bg-[#6a0dad] hover:bg-[#5a0ba5]"
  >
    <Users size={16} strokeWidth={2} />
    <span>Join Us</span>
  </button>
</Link>

</div>

 <div className="flex items-center space-x-0.5 sm:space-x-2 lg:hidden flex-shrink-0">
  <Link to="/donate" className="flex">
    <button
      className="flex items-center justify-center gap-[2px] sm:gap-2 text-white px-1.5 sm:px-4 py-1 sm:py-2 rounded text-[10px] sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap h-[25px] sm:h-[35px]"
      style={{
        backgroundColor: '#6a0dad',
        boxShadow: '0 2px 8px rgba(106, 13, 173, 0.25)'
      }}
      onMouseEnter={(e) => e.target.style.backgroundColor = '#5a0ba5'}
      onMouseLeave={(e) => e.target.style.backgroundColor = '#6a0dad'}
    >
      <Heart size={12} strokeWidth={2} />
      <span>Donate</span>
    </button>
  </Link>

  <Link to="/volunteers" className="flex">
    <button
      className="flex items-center justify-center gap-[2px] sm:gap-2 text-white px-1.5 sm:px-4 py-1 sm:py-2 rounded text-[10px] sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap h-[25px] sm:h-[35px]"
      style={{
        backgroundColor: '#6a0dad',
        boxShadow: '0 2px 8px rgba(106, 13, 173, 0.25)'
      }}
      onMouseEnter={(e) => e.target.style.backgroundColor = '#5a0ba5'}
      onMouseLeave={(e) => e.target.style.backgroundColor = '#6a0dad'}
    >
      <Users size={12} strokeWidth={2} />
      <span>Join</span>
    </button>
  </Link>

  {/* Mobile Menu Button */}
  <button
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className="lg:hidden p-[6px] sm:p-2 rounded text-[#2C2C2C] hover:text-[#6a0dad] hover:bg-white transition-all duration-200 flex-shrink-0 h-[30px] sm:h-[40px] w-[30px] sm:w-[40px] flex items-center justify-center"
    aria-label="Toggle menu"
  >
    {isMenuOpen ? <X size={16} className="sm:w-6 sm:h-6" /> : <Menu size={16} className="sm:w-6 sm:h-6" />}
  </button>
</div>



          </div>
        </div>

        {/* Mobile Navigation - Fixed positioning and animation */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out z-40 ${
            isMenuOpen 
              ? 'opacity-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div 
            className="bg-white border-t shadow-lg"
            style={{ 
              borderTopColor: '#F0E6FF',
              boxShadow: '0 4px 12px rgba(106, 13, 173, 0.15)'
            }}
          >
            <div className="max-w-7xl mx-auto px-2 sm:px-4 py-3 sm:py-4">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-3 sm:px-4 py-2.5 sm:py-3 rounded text-sm sm:text-base font-medium transition-all duration-200 ${
                      isActivePath(item.path)
                        ? 'text-white bg-[#6a0dad]'
                        : 'text-[#2C2C2C] hover:text-[#6a0dad] hover:bg-white'
                    }`}
                    style={{
                      backgroundColor: isActivePath(item.path) ? '#6a0dad' : undefined
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
              
                <div>
                  <button
                    onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                    className={`w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 rounded text-sm sm:text-base font-medium transition-all duration-200 ${
                      isGetInvolvedActive()
                        ? 'text-white bg-[#6a0dad]'
                        : 'text-[#2C2C2C] hover:text-[#6a0dad] hover:bg-[#F8F0FF]'
                    }`}
                    style={{
                      backgroundColor: isGetInvolvedActive() ? '#6a0dad' : undefined
                    }}
                  >
                    <span>Get Involved</span>
                    <ChevronDown size={16} className={`sm:w-5 sm:h-5 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                 
                  <div className={`ml-3 sm:ml-4 mt-1 space-y-1 overflow-hidden transition-all duration-200 ${
                    isMobileDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    {dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`block px-3 sm:px-4 py-2 rounded text-sm sm:text-sm font-medium transition-all duration-200 ${
                          isActivePath(item.path)
                            ? 'text-white bg-[#6a0dad]'
                            : 'text-[#2C2C2C] hover:text-[#6a0dad] hover:bg-[#F8F0FF]'
                        }`}
                        style={{
                          backgroundColor: isActivePath(item.path) ? '#6a0dad' : undefined
                        }}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsMobileDropdownOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>


<div className="pt-5 mt-4 border-t border-[#F0E6FF]">
  <div className="flex flex-col items-center text-center">
    <p className="text-sm sm:text-base font-semibold text-[#2C2C2C] mb-3">
      Follow us
    </p>
    <div className="flex justify-center items-center gap-4 sm:gap-6 text-[#6a0dad]">
      <a
        href="https://www.linkedin.com/company/adiyogi-foundation"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="w-6 h-6 hover:text-[#0077b5] transition duration-200" />
      </a>
      <a
        href="https://www.instagram.com/adiyogifoundation?igsh=MXVuODhrbTQyZTdvYg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="w-6 h-6 hover:text-[#C13584] transition duration-200" />
      </a>
      <a
        href="https://www.facebook.com/share/19wQKAWb1b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook className="w-6 h-6 hover:text-[#1877F2] transition duration-200" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCL8UZJkhwQ0o3YJKB8od1nA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube className="w-6 h-6 hover:text-[#FF0000] transition duration-200" />
      </a>
    </div>
  </div>
</div>


              </div>
            </div>
          </div>
        </div>


      </header>

      {/* Spacer */}
      <div className="h-1 lg:h-0"></div>

      <style jsx>{`
        .text-rich-charcoal { color: #2C2C2C; }
        .text-sacred-crimson { color: #6a0dad; }
        .text-deep-ruby { color: #5a0ba5; }
        .bg-warm-ivory { background-color: #FFFEF7; }
        .bg-rose-cream { background-color: #FFFFFF; }
        .bg-rich-charcoal { background-color: #2C2C2C; }
        .bg-sacred-crimson { background-color: #6a0dad; }
        .bg-soft-rose { background-color: #F8F0FF; }
        .border-soft-rose { border-color: #F0E6FF; }
        .hover\\:text-sacred-crimson:hover { color: #6a0dad; }
        .hover\\:text-deep-ruby:hover { color: #5a0ba5; }
        .hover\\:bg-soft-rose:hover { background-color: #F8F0FF; }
        
        /* Responsive optimizations */
        @media (max-width: 639px) {
          /* Mobile-first approach for very small screens */
          .space-x-1 > :not([hidden]) ~ :not([hidden]) {
            margin-left: 0.25rem;
          }
          
          /* Ensure minimum touch targets */
          button, a {
            min-height: 36px;
            min-width: 32px;
          }
          
          /* Better button sizing for small screens */
          .min-h-\[36px\] {
            min-height: 36px;
          }
          
          /* Compact text sizing */
          .text-xs {
            font-size: 0.75rem;
            line-height: 1.2;
          }
          
          /* Logo adjustments for mobile */
          .max-w-\[65\%\] {
            max-width: 65%;
          }
          
          /* Reduce shadows for performance */
          .shadow-sm {
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          }
        }
        
        /* Small screens and up */
        @media (min-width: 640px) {
          .sm\\:w-8 { width: 2rem; }
          .sm\\:h-8 { height: 2rem; }
          .sm\\:text-lg { font-size: 1.125rem; }
          .sm\\:text-sm { font-size: 0.875rem; }
          .sm\\:text-base { font-size: 1rem; }
          .sm\\:px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
          .sm\\:px-4 { padding-left: 1rem; padding-right: 1rem; }
          .sm\\:py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
          .sm\\:py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
          .sm\\:py-2\\.5 { padding-top: 0.625rem; padding-bottom: 0.625rem; }
          .sm\\:space-x-2 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.5rem; }
          .sm\\:h-16 { height: 4rem; }
          .sm\\:min-h-\[40px\] { min-height: 40px; }
          .sm\\:min-w-\[40px\] { min-width: 40px; }
          .sm\\:w-6 { width: 1.5rem; }
          .sm\\:h-6 { height: 1.5rem; }
          .sm\\:w-5 { width: 1.25rem; }
          .sm\\:h-5 { height: 1.25rem; }
          .sm\\:block { display: block; }
          .sm\\:max-w-none { max-width: none; }
        }
        
        /* Ensure proper spacing and prevent overflow */
        .truncate {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .leading-tight {
          line-height: 1.25;
        }
        
        /* High DPI display optimizations */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .shadow-lg {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }
        }
        
        /* Touch-friendly interactions */
        @media (hover: none) and (pointer: coarse) {
          .hover\\:scale-105:hover {
            transform: none;
          }
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
        }
        
        /* Very small screens (320px and below) */
        @media (max-width: 320px) {
          .space-x-1 > :not([hidden]) ~ :not([hidden]) {
            margin-left: 0.125rem;
          }
          
          .px-2 {
            padding-left: 0.375rem;
            padding-right: 0.375rem;
          }
          
          .text-xs {
            fontSize: 0.7rem;
          }
          
          .max-w-\[65\%\] {
            max-width: 60%;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
