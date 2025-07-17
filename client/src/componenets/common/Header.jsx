
// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, Phone, Mail, Heart, ChevronDown } from 'lucide-react';


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
//     { name: 'Temples', path: '/temples' },
//     { name: 'Seva', path: '/seva' },
//     {name:'Services',path:'/services'}
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
//       <div className="hidden lg:block bg-rich-charcoal text-warm-ivory py-2 border-b border-soft-rose">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center text-sm">
//             <div className="flex items-center space-x-4 xl:space-x-8">
             
// <div className="flex items-center space-x-2">
//   <Mail size={16} className="text-sacred-crimson flex-shrink-0" />
//   <a 
//     href="mailto:social.adiyogifoundation@gmail.com"
//     className="truncate hover:text-sacred-crimson transition-colors duration-300"
//   >
//     social.adiyogifoundation@gmail.com
//   </a>
// </div>

// <div className="flex items-center space-x-2">
//   <Phone size={16} className="text-sacred-crimson flex-shrink-0" />
//   <a 
//     href="tel:+919175033022"
//     className="hover:text-sacred-crimson transition-colors duration-300"
//   >
//     +91 9175033022
//   </a>
// </div>


//             </div>
//             <div className="flex items-center">
//               <span className="text-sacred-crimson font-medium whitespace-nowrap">🕉️ ॐ नमः शिवाय</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <header 
//         className={`sticky top-0 z-50 transition-all duration-300  ${
//           isScrolled 
//             ? 'bg-warm-ivory backdrop-blur-lg shadow-xl border-b border-soft-rose' 
//             : 'bg-warm-ivory backdrop-blur-md shadow-lg border-b border-soft-rose/50'
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
//               <div className="relative flex-shrink-0">
//                 <div 
//                   className="w-7 sm:w-8 h-7 sm:h-8 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg group-hover:scale-105 transition-transform duration-300"
//                   style={{ background: 'linear-gradient(135deg, #C41E3A 0%, #8B1538 100%)' }}
//                 >
//                   ॐ
//                 </div>
//               </div>
//               <div className="min-w-0 flex-1">
//                 <h1 className="text-sm sm:text-lg lg:text-2xl font-bold text-rich-charcoal group-hover:text-deep-ruby transition-colors duration-300 truncate leading-tight">
//                   Adiyogi <span className="text-sacred-crimson">Foundation</span>
//                 </h1>
//                 <p className="hidden sm:block text-xs font-medium -mt-1 group-hover:text-sacred-crimson transition-colors duration-300 truncate leading-tight" style={{ color: '#6B4B4B' }}>
//                   Rebuilding Purpose. Restoring Dharma. Reviving the Sacred.
//                 </p>
//               </div>
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

//             {/* Desktop CTA Buttons */}
//             <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 flex-shrink-0">
//               <Link to='/donate'>
//                <button
             
//                 className="flex items-center space-x-2 text-white px-4 xl:px-5 py-2.5 rounded-lg font-semibold text-sm xl:text-base transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
//                 style={{ 
//                   background: 'linear-gradient(135deg, #2C2C2C 0%, #6B4B4B 100%)',
//                   boxShadow: '0 2px 8px rgba(139, 21, 56, 0.25)'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.background = 'linear-gradient(135deg, #6B4B4B 0%, #2C2C2C 100%)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.background = 'linear-gradient(135deg, #2C2C2C 0%, #6B4B4B 100%)';
//                 }}
//               >
//                 <span>Donate</span>
//               </button>
//               </Link>
             

//               <Link
//                 to="/volunteers"
//                 className="text-white px-5 xl:px-6 py-2.5 rounded-lg font-semibold text-sm xl:text-base transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
//                 style={{ 
//                   background: 'linear-gradient(135deg, #C41E3A 0%, #8B1538 100%)',
//                   boxShadow: '0 2px 8px rgba(139, 21, 56, 0.25)'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.background = 'linear-gradient(135deg, #8B1538 0%, #C41E3A 100%)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.background = 'linear-gradient(135deg, #C41E3A 0%, #8B1538 100%)';
//                 }}
//               >
//                 Join Us
//               </Link>
//             </div>

//             {/* Mobile Right Section - Donate + Join Us Button + Menu Button */}
//             <div className="flex items-center space-x-1 sm:space-x-2 lg:hidden flex-shrink-0">
//               {/* Mobile Donate Button */}
//               <Link to='/donate'>
//                 <button
//                   className="flex items-center mt-1 text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap min-h-[36px] sm:min-h-[40px]"
//                   style={{ 
//                     background: 'linear-gradient(135deg, #2C2C2C 0%, #6B4B4B 100%)',
//                     boxShadow: '0 1px 4px rgba(139, 21, 56, 0.2)'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.background = 'linear-gradient(135deg, #6B4B4B 0%, #2C2C2C 100%)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.background = 'linear-gradient(135deg, #2C2C2C 0%, #6B4B4B 100%)';
//                   }}
//                 >
//                   <span>Donate</span>
//                 </button>
//               </Link>

//               {/* Mobile Join Us Button */}
//               <Link
//                 to="/volunteers"
//                 className="text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap min-h-[36px] sm:min-h-[40px] flex items-center"
//                 style={{ 
//                   background: 'linear-gradient(135deg, #C41E3A 0%, #8B1538 100%)',
//                   boxShadow: '0 1px 4px rgba(139, 21, 56, 0.2)'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.background = 'linear-gradient(135deg, #8B1538 0%, #C41E3A 100%)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.background = 'linear-gradient(135deg, #C41E3A 0%, #8B1538 100%)';
//                 }}
//               >
//                 Join
//               </Link>

//               {/* Mobile Menu Button */}
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="lg:hidden p-1.5 sm:p-2 rounded text-rich-charcoal hover:text-sacred-crimson hover:bg-soft-rose transition-all duration-200 flex-shrink-0 min-h-[36px] sm:min-h-[40px] min-w-[36px] sm:min-w-[40px] flex items-center justify-center"
//                 aria-label="Toggle menu"
//               >
//                 {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
//               </button>
//             </div>
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
//             className="bg-warm-ivory border-t shadow-lg"
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
//                         : 'text-rich-charcoal hover:text-sacred-crimson hover:bg-soft-rose'
//                     }`}
//                     style={{
//                       backgroundColor: isActivePath(item.path) ? '#C41E3A' : undefined
//                     }}
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
                
//                 {/* Mobile Get Involved Dropdown */}
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
                  
//                   {/* Mobile Dropdown Items */}
//                   <div className={`ml-3 sm:ml-4 mt-1 space-y-1 overflow-hidden transition-all duration-200 ${
//                     isMobileDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
//                   }`}>
//                     {dropdownItems.map((item) => (
//                       <Link
//                         key={item.name}
//                         to={item.path}
//                         className={`block px-3 sm:px-4 py-2 rounded text-xs sm:text-sm font-medium transition-all duration-200 ${
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





// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, Phone, Mail, Heart, ChevronDown } from 'lucide-react';
// import './Header.css';


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
//     { name: 'Temples', path: '/temples' },
//     { name: 'Seva', path: '/seva' },
//     {name:'Services',path:'/services'}
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
//       <div className="hidden lg:block bg-rich-charcoal text-warm-ivory py-2 border-b border-soft-rose">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center text-sm">
//             <div className="flex items-center space-x-4 xl:space-x-8">
             
// <div className="flex items-center space-x-2">
//   <Mail size={16} className="text-sacred-crimson flex-shrink-0" />
//   <a 
//     href="mailto:social.adiyogifoundation@gmail.com"
//     className="truncate hover:text-sacred-crimson transition-colors duration-300"
//   >
//     social.adiyogifoundation@gmail.com
//   </a>
// </div>

// <div className="flex items-center space-x-2">
//   <Phone size={16} className="text-sacred-crimson flex-shrink-0" />
//   <a 
//     href="tel:+919175033022"
//     className="hover:text-sacred-crimson transition-colors duration-300"
//   >
//     +91 9175033022
//   </a>
// </div>


//             </div>
//             <div className="flex items-center">
//               <span className="text-sacred-crimson font-medium whitespace-nowrap">🕉️ ॐ नमः शिवाय</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <header 
//         className={`sticky top-0 z-50 transition-all duration-300  ${
//           isScrolled 
//             ? 'bg-warm-ivory backdrop-blur-lg shadow-xl border-b border-soft-rose' 
//             : 'bg-warm-ivory backdrop-blur-md shadow-lg border-b border-soft-rose/50'
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
//   <div className="w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
//     <img 
//       src="/WhatsApp Image 2025-07-14 at 7.33.21 PM.jpeg" 
//       alt="Adiyogi Foundation Logo" 
//       className="w-full h-full object-contain rounded-full bg-white shadow-sm" 
//     />
//   </div>
// </div>
             

//               <div className="min-w-0 flex-1">
//   <div className="flex flex-col lg:flex-row lg:items-baseline lg:space-x-1">
//     <h1 className="text-sm sm:text-lg lg:text-2xl font-bold text-rich-charcoal group-hover:text-deep-ruby transition-colors duration-300 truncate leading-tight">
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

//             {/* Desktop CTA Buttons */}
//             <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 flex-shrink-0">
//               <Link to='/donate'>
//                <button
             
//                 className="flex items-center space-x-2 text-white px-4 xl:px-5 py-2.5 rounded-lg font-semibold text-sm xl:text-base transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
//                 style={{ 
//                   background: 'linear-gradient(135deg, #2C2C2C 0%, #6B4B4B 100%)',
//                   boxShadow: '0 2px 8px rgba(139, 21, 56, 0.25)'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.background = 'linear-gradient(135deg, #6B4B4B 0%, #2C2C2C 100%)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.background = 'linear-gradient(135deg, #2C2C2C 0%, #6B4B4B 100%)';
//                 }}
//               >
//                 <span>Donate</span>
//               </button>
//               </Link>
             

//               <Link
//                 to="/volunteers"
//                 className="text-white px-5 xl:px-6 py-2.5 rounded-lg font-semibold text-sm xl:text-base transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
//                 style={{ 
//                   background: 'linear-gradient(135deg, #C41E3A 0%, #8B1538 100%)',
//                   boxShadow: '0 2px 8px rgba(139, 21, 56, 0.25)'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.background = 'linear-gradient(135deg, #8B1538 0%, #C41E3A 100%)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.background = 'linear-gradient(135deg, #C41E3A 0%, #8B1538 100%)';
//                 }}
//               >
//                 Join Us
//               </Link>
//             </div>

//             {/* Mobile Right Section - Donate + Join Us Button + Menu Button */}
//             <div className="flex items-center space-x-1 sm:space-x-2 lg:hidden flex-shrink-0">
//               {/* Mobile Donate Button */}
//               <Link to='/donate' className="flex">
//                 <button
//                   className="flex items-center justify-center text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap h-[36px] sm:h-[40px]"
//                   style={{ 
//                     background: 'linear-gradient(135deg, #2C2C2C 0%, #6B4B4B 100%)',
//                     boxShadow: '0 1px 4px rgba(139, 21, 56, 0.2)'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.background = 'linear-gradient(135deg, #6B4B4B 0%, #2C2C2C 100%)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.background = 'linear-gradient(135deg, #2C2C2C 0%, #6B4B4B 100%)';
//                   }}
//                 >
//                   <span>Donate</span>
//                 </button>
//               </Link>

//               {/* Mobile Join Us Button */}
//               <Link to="/volunteers" className="flex">
//                 <button
//                   className="flex items-center justify-center text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap h-[36px] sm:h-[40px]"
//                   style={{ 
//                     background: 'linear-gradient(135deg, #C41E3A 0%, #8B1538 100%)',
//                     boxShadow: '0 1px 4px rgba(139, 21, 56, 0.2)'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.background = 'linear-gradient(135deg, #8B1538 0%, #C41E3A 100%)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.background = 'linear-gradient(135deg, #C41E3A 0%, #8B1538 100%)';
//                   }}
//                 >
//                   Join
//                 </button>
//               </Link>

//               {/* Mobile Menu Button */}
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="lg:hidden p-1.5 sm:p-2 rounded text-rich-charcoal hover:text-sacred-crimson hover:bg-soft-rose transition-all duration-200 flex-shrink-0 h-[36px] sm:h-[40px] w-[36px] sm:w-[40px] flex items-center justify-center"
//                 aria-label="Toggle menu"
//               >
//                 {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
//               </button>
//             </div>
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
//             className="bg-warm-ivory border-t shadow-lg"
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
//                         : 'text-rich-charcoal hover:text-sacred-crimson hover:bg-soft-rose'
//                     }`}
//                     style={{
//                       backgroundColor: isActivePath(item.path) ? '#C41E3A' : undefined
//                     }}
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
                
//                 {/* Mobile Get Involved Dropdown */}
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
                  
//                   {/* Mobile Dropdown Items */}
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
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Spacer */}
//       <div className="h-1 lg:h-0"></div>

   
//     </>
//   );
// };

// export default Header;


// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, Phone, Mail, Heart, ChevronDown } from 'lucide-react';
// import './Header.css';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
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
//     { name: 'Temples', path: '/temples' },
//     { name: 'Seva', path: '/seva' },
//     { name: 'Services', path: '/services' }
//   ];

//   const dropdownItems = [
//     { name: 'Donate now', path: '/donate' },
//     { name: 'Volunteers', path: '/volunteers' },
//     { name: 'Contact us', path: '/contact' }
//   ];

//   const isActivePath = (path) => {
//     if (path === '/' && location.pathname === '/') return true;
//     if (path !== '/' && location.pathname.startsWith(path)) return true;
//     return false;
//   };

//   const isGetInvolvedActive = () => {
//     return dropdownItems.some(item => isActivePath(item.path));
//   };

//   return (
//     <>
//       {/* Top Contact Bar - Hidden on mobile */}
//       <div className="hidden lg:block bg-rich-charcoal text-warm-ivory py-2 border-b border-soft-rose">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center text-sm">
//             <div className="flex items-center space-x-4 xl:space-x-8">
//               <div className="flex items-center space-x-2">
//                 <Mail size={16} className="text-sacred-crimson flex-shrink-0" />
//                 <a 
//                   href="mailto:social.adiyogifoundation@gmail.com"
//                   className="truncate hover:text-sacred-crimson transition-colors duration-300"
//                 >
//                   social.adiyogifoundation@gmail.com
//                 </a>
//               </div>

//               <div className="flex items-center space-x-2">
//                 <Phone size={16} className="text-sacred-crimson flex-shrink-0" />
//                 <a 
//                   href="tel:+919175033022"
//                   className="hover:text-sacred-crimson transition-colors duration-300"
//                 >
//                   +91 9175033022
//                 </a>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <span className="text-sacred-crimson font-medium whitespace-nowrap">🕉️ ॐ नमः शिवाय</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <header 
//         className={`sticky top-0 z-50 transition-all duration-300 ${
//           isScrolled 
//             ? 'bg-warm-ivory backdrop-blur-lg shadow-xl border-b border-soft-rose' 
//             : 'bg-warm-ivory backdrop-blur-md shadow-lg border-b border-soft-rose/50'
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
//               <div className="relative flex-shrink-0">
//                 <div className="w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
//                   <img 
//                     src="/WhatsApp Image 2025-07-14 at 7.33.21 PM.jpeg" 
//                     alt="Adiyogi Foundation Logo" 
//                     className="w-full h-full object-contain rounded-full bg-white shadow-sm" 
//                   />
//                 </div>
//               </div>

//               <div className="min-w-0 flex-1">
//                 <div className="flex flex-col lg:flex-row lg:items-baseline lg:space-x-1">
//                   <h1 className="text-sm sm:text-lg lg:text-2xl font-bold text-rich-charcoal group-hover:text-deep-ruby transition-colors duration-300 truncate leading-tight">
//                     Adiyogi
//                   </h1>
//                   <h2 className="text-xs sm:text-base lg:text-2xl font-bold text-sacred-crimson group-hover:text-deep-ruby transition-colors duration-300 truncate leading-tight">
//                     Foundation
//                   </h2>
//                 </div>
                
//                 <p className="hidden sm:block text-xs font-medium -mt-1 group-hover:text-sacred-crimson transition-colors duration-300 truncate leading-tight" style={{ color: '#6B4B4B' }}>
//                   Rebuilding Purpose. Restoring Dharma.
//                 </p>
//               </div>
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

//             {/* Desktop CTA Buttons */}
//             <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 flex-shrink-0">
//               <Link to="/donate">
//                 <button
//                   className="flex items-center space-x-2 text-white px-4 xl:px-5 py-2.5 rounded-lg font-semibold text-sm xl:text-base transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
//                   style={{ 
//                     background: 'linear-gradient(135deg, #2C2C2C 0%, #6B4B4B 100%)',
//                     boxShadow: '0 2px 8px rgba(139, 21, 56, 0.25)'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.background = 'linear-gradient(135deg, #6B4B4B 0%, #2C2C2C 100%)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.background = 'linear-gradient(135deg, #2C2C2C 0%, #6B4B4B 100%)';
//                   }}
//                 >
//                   <span>Donate</span>
//                 </button>
//               </Link>

//               <Link
//                 to="/volunteers"
//                 className="text-white px-5 xl:px-6 py-2.5 rounded-lg font-semibold text-sm xl:text-base transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
//                 style={{ 
//                   background: 'linear-gradient(135deg, #C41E3A 0%, #8B1538 100%)',
//                   boxShadow: '0 2px 8px rgba(139, 21, 56, 0.25)'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.background = 'linear-gradient(135deg, #8B1538 0%, #C41E3A 100%)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.background = 'linear-gradient(135deg, #C41E3A 0%, #8B1538 100%)';
//                 }}
//               >
//                 Join Us
//               </Link>
//             </div>

//             {/* Mobile Right Section - Donate + Join Us Button + Menu Button */}
//             <div className="flex items-center space-x-1 sm:space-x-2 lg:hidden flex-shrink-0">
//               {/* Mobile Donate Button */}
//               <Link to="/donate" className="flex">
//                 <button
//                   className="flex items-center justify-center text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap h-[36px] sm:h-[40px]"
//                   style={{ 
//                     background: 'linear-gradient(135deg, #2C2C2C 0%, #6B4B4B 100%)',
//                     boxShadow: '0 1px 4px rgba(139, 21, 56, 0.2)'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.background = 'linear-gradient(135deg, #6B4B4B 0%, #2C2C2C 100%)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.background = 'linear-gradient(135deg, #2C2C2C 0%, #6B4B4B 100%)';
//                   }}
//                 >
//                   <span>Donate</span>
//                 </button>
//               </Link>

//               {/* Mobile Join Us Button */}
//               <Link to="/volunteers" className="flex">
//                 <button
//                   className="flex items-center justify-center text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap h-[36px] sm:h-[40px]"
//                   style={{ 
//                     background: 'linear-gradient(135deg, #C41E3A 0%, #8B1538 100%)',
//                     boxShadow: '0 1px 4px rgba(139, 21, 56, 0.2)'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.background = 'linear-gradient(135deg, #8B1538 0%, #C41E3A 100%)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.background = 'linear-gradient(135deg, #C41E3A 0%, #8B1538 100%)';
//                   }}
//                 >
//                   Join
//                 </button>
//               </Link>

//               {/* Mobile Menu Button */}
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="lg:hidden p-1.5 sm:p-2 rounded text-rich-charcoal hover:text-sacred-crimson hover:bg-soft-rose transition-all duration-200 flex-shrink-0 h-[36px] sm:h-[40px] w-[36px] sm:w-[40px] flex items-center justify-center"
//                 aria-label="Toggle menu"
//               >
//                 {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
//               </button>
//             </div>
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
//             className="bg-warm-ivory border-t shadow-lg"
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
//                         : 'text-rich-charcoal hover:text-sacred-crimson hover:bg-soft-rose'
//                     }`}
//                     style={{
//                       backgroundColor: isActivePath(item.path) ? '#C41E3A' : undefined
//                     }}
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
                
//                 {/* Mobile Get Involved Dropdown */}
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
                  
//                   {/* Mobile Dropdown Items */}
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
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Spacer */}
//       <div className="h-1 lg:h-0"></div>
//     </>
  
//   );
// };

// export default Header;


// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsMenuOpen(false);
//     setIsDropdownOpen(false);
//     setIsMobileDropdownOpen(false);
//   }, [location]);

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
//     { name: 'Temples', path: '/temples' },
//     { name: 'Seva', path: '/seva' },
//     { name: 'Services', path: '/services' }
//   ];

//   const dropdownItems = [
//     { name: 'Donate now', path: '/donate' },
//     { name: 'Volunteers', path: '/volunteers' },
//     { name: 'Contact us', path: '/contact' }
//   ];

//   const isActivePath = (path) => {
//     if (path === '/' && location.pathname === '/') return true;
//     if (path !== '/' && location.pathname.startsWith(path)) return true;
//     return false;
//   };

//   const isGetInvolvedActive = () => {
//     return dropdownItems.some(item => isActivePath(item.path));
//   };

//   return (
//     <React.Fragment>
//       <div className="hidden lg:block bg-gray-800 text-white py-2 border-b border-gray-700">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center text-sm">
//             <div className="flex items-center space-x-4 xl:space-x-8">
//               <div className="flex items-center space-x-2">
//                 <Mail size={16} className="text-red-500 flex-shrink-0" />
//                 <a 
//                   href="mailto:social.adiyogifoundation@gmail.com"
//                   className="truncate hover:text-red-500 transition-colors duration-300"
//                 >
//                   social.adiyogifoundation@gmail.com
//                 </a>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Phone size={16} className="text-red-500 flex-shrink-0" />
//                 <a 
//                   href="tel:+919175033022"
//                   className="hover:text-red-500 transition-colors duration-300"
//                 >
//                   +91 9175033022
//                 </a>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <span className="text-red-500 font-medium whitespace-nowrap">🕉️ ॐ नमः शिवाय</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <header 
//         className={`sticky top-0 z-50 transition-all duration-300 ${
//           isScrolled 
//             ? 'bg-white backdrop-blur-lg shadow-xl border-b border-gray-200' 
//             : 'bg-white backdrop-blur-md shadow-lg border-b border-gray-100'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            
//             <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0 min-w-0 max-w-[65%] sm:max-w-none">
//               <div className="relative flex-shrink-0">
//                 <div className="w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
//                   <img 
//                     src="/WhatsApp Image 2025-07-14 at 7.33.21 PM.jpeg" 
//                     alt="Adiyogi Foundation Logo" 
//                     className="w-full h-full object-contain rounded-full bg-white shadow-sm" 
//                   />
//                 </div>
//               </div>
//               <div className="min-w-0 flex-1">
//                 <div className="flex flex-col lg:flex-row lg:items-baseline lg:space-x-1">
//                   <h1 className="text-sm sm:text-lg lg:text-2xl font-bold text-gray-800 group-hover:text-red-700 transition-colors duration-300 truncate leading-tight">
//                     Adiyogi
//                   </h1>
//                   <h2 className="text-xs sm:text-base lg:text-2xl font-bold text-red-600 group-hover:text-red-700 transition-colors duration-300 truncate leading-tight">
//                     Foundation
//                   </h2>
//                 </div>
//                 <p className="hidden sm:block text-xs font-medium -mt-1 group-hover:text-red-600 transition-colors duration-300 truncate leading-tight text-gray-600">
//                   Rebuilding Purpose. Restoring Dharma.
//                 </p>
//               </div>
//             </Link>

//             <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   className={`px-3 xl:px-4 py-2 rounded-lg text-sm xl:text-base font-medium transition-all duration-200 relative whitespace-nowrap ${
//                     isActivePath(item.path)
//                       ? 'text-white bg-red-600 shadow-md'
//                       : 'text-gray-700 hover:text-red-600 hover:bg-gray-100'
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
              
//               <div className="relative" ref={dropdownRef}>
//                 <button
//                   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                   onMouseEnter={() => setIsDropdownOpen(true)}
//                   className={`flex items-center space-x-1 px-3 xl:px-4 py-2 rounded-lg text-sm xl:text-base font-medium transition-all duration-200 whitespace-nowrap ${
//                     isGetInvolvedActive()
//                       ? 'text-white bg-red-600 shadow-md'
//                       : 'text-gray-700 hover:text-red-600 hover:bg-gray-100'
//                   }`}
//                 >
//                   <span>Get Involved</span>
//                   <ChevronDown size={16} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
//                 </button>
                
//                 <div 
//                   className={`absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg transition-all duration-200 z-50 border border-gray-200 ${
//                     isDropdownOpen 
//                       ? 'opacity-100 translate-y-0 pointer-events-auto' 
//                       : 'opacity-0 -translate-y-2 pointer-events-none'
//                   }`}
//                   onMouseLeave={() => setIsDropdownOpen(false)}
//                 >
//                   <div className="py-2">
//                     {dropdownItems.map((item) => (
//                       <Link
//                         key={item.name}
//                         to={item.path}
//                         className={`block px-4 py-2 text-sm font-medium transition-all duration-200 ${
//                           isActivePath(item.path)
//                             ? 'text-white bg-red-600'
//                             : 'text-gray-700 hover:text-red-600 hover:bg-gray-100'
//                         }`}
//                         onClick={() => setIsDropdownOpen(false)}
//                       >
//                         {item.name}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </nav>

//             <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 flex-shrink-0">
//               <Link to="/donate">
//                 <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 xl:px-5 py-2.5 rounded-lg font-semibold text-sm xl:text-base transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap">
//                   Donate
//                 </button>
//               </Link>
//               <Link
//                 to="/volunteers"
//                 className="bg-red-600 hover:bg-red-700 text-white px-5 xl:px-6 py-2.5 rounded-lg font-semibold text-sm xl:text-base transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
//               >
//                 Join Us
//               </Link>
//             </div>

//             <div className="flex items-center space-x-1 sm:space-x-2 lg:hidden flex-shrink-0">
//               <Link to="/donate" className="flex">
//                 <button className="bg-gray-800 hover:bg-gray-700 text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap h-[36px] sm:h-[40px]">
//                   Donate
//                 </button>
//               </Link>
//               <Link to="/volunteers" className="flex">
//                 <button className="bg-red-600 hover:bg-red-700 text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap h-[36px] sm:h-[40px]">
//                   Join
//                 </button>
//               </Link>
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="lg:hidden p-1.5 sm:p-2 rounded text-gray-700 hover:text-red-600 hover:bg-gray-100 transition-all duration-200 flex-shrink-0 h-[36px] sm:h-[40px] w-[36px] sm:w-[40px] flex items-center justify-center"
//                 aria-label="Toggle menu"
//               >
//                 {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
//               </button>
//             </div>
//           </div>
//         </div>

//         <div 
//           className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out z-40 ${
//             isMenuOpen 
//               ? 'opacity-100 translate-y-0 pointer-events-auto' 
//               : 'opacity-0 -translate-y-4 pointer-events-none'
//           }`}
//         >
//           <div className="bg-white border-t shadow-lg border-gray-200">
//             <div className="max-w-7xl mx-auto px-2 sm:px-4 py-3 sm:py-4">
//               <div className="space-y-1">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     to={item.path}
//                     className={`block px-3 sm:px-4 py-2.5 sm:py-3 rounded text-sm sm:text-base font-medium transition-all duration-200 ${
//                       isActivePath(item.path)
//                         ? 'text-white bg-red-600'
//                         : 'text-gray-700 hover:text-red-600 hover:bg-gray-100'
//                     }`}
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
//                         ? 'text-white bg-red-600'
//                         : 'text-gray-700 hover:text-red-600 hover:bg-gray-100'
//                     }`}
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
//                         className={`block px-3 sm:px-4 py-2 rounded text-sm font-medium transition-all duration-200 ${
//                           isActivePath(item.path)
//                             ? 'text-white bg-red-600'
//                             : 'text-gray-700 hover:text-red-600 hover:bg-gray-100'
//                         }`}
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
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="h-1 lg:h-0"></div>
//     </React.Fragment>
//   );
// };

// export default Header;



import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Heart, ChevronDown } from 'lucide-react';


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
    { name: 'Temples', path: '/temples' },
    { name: 'Seva', path: '/seva' },
    {name:'Services',path:'/services'}
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
      <div className="hidden lg:block bg-rich-charcoal text-warm-ivory py-2 border-b border-soft-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4 xl:space-x-8">
             
<div className="flex items-center space-x-2">
  <Mail size={16} className="text-sacred-crimson flex-shrink-0" />
  <a 
    href="mailto:social.adiyogifoundation@gmail.com"
    className="truncate hover:text-sacred-crimson transition-colors duration-300"
  >
    social.adiyogifoundation@gmail.com
  </a>
</div>

<div className="flex items-center space-x-2">
  <Phone size={16} className="text-sacred-crimson flex-shrink-0" />
  <a 
    href="tel:+919175033022"
    className="hover:text-sacred-crimson transition-colors duration-300"
  >
    +91 9175033022
  </a>
</div>


            </div>
            <div className="flex items-center">
              <span className="text-sacred-crimson font-medium whitespace-nowrap">🕉️ ॐ नमः शिवाय</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300  ${
          isScrolled 
            ? 'bg-warm-ivory backdrop-blur-lg shadow-xl border-b border-soft-rose' 
            : 'bg-warm-ivory backdrop-blur-md shadow-lg border-b border-soft-rose/50'
        }`}
        style={{
          boxShadow: isScrolled 
            ? '0 4px 12px rgba(196, 30, 58, 0.15)' 
            : '0 2px 8px rgba(196, 30, 58, 0.1)'
        }}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            
            {/* Logo - Optimized for mobile */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0 min-w-0 max-w-[65%] sm:max-w-none">
<div className="relative flex-shrink-0">
  <div className="w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
    <img 
      src="/WhatsApp Image 2025-07-14 at 7.33.21 PM.jpeg" 
      alt="Adiyogi Foundation Logo" 
      className="w-full h-full object-contain rounded-full bg-white shadow-sm" 
    />
  </div>
</div>
             

              <div className="min-w-0 flex-1">
  <div className="flex flex-col lg:flex-row lg:items-baseline lg:space-x-1">
    <h1 className="text-sm sm:text-lg lg:text-2xl font-bold text-rich-charcoal group-hover:text-deep-ruby transition-colors duration-300 truncate leading-tight">
      Adiyogi
    </h1>
    <h2 className="text-xs sm:text-base lg:text-2xl font-bold text-sacred-crimson group-hover:text-deep-ruby transition-colors duration-300 truncate leading-tight">
     Foundation
    </h2>
  </div>
  
  <p className="hidden sm:block text-xs font-medium -mt-1 group-hover:text-sacred-crimson transition-colors duration-300 truncate leading-tight" style={{ color: '#6B4B4B' }}>
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
                      ? 'text-white bg-sacred-crimson shadow-md'
                      : 'text-rich-charcoal hover:text-sacred-crimson hover:bg-soft-rose'
                  }`}
                  style={{
                    backgroundColor: isActivePath(item.path) ? '#C41E3A' : undefined,
                    boxShadow: isActivePath(item.path) ? '0 2px 8px rgba(139, 21, 56, 0.25)' : undefined
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
                      ? 'text-white bg-sacred-crimson shadow-md'
                      : 'text-rich-charcoal hover:text-sacred-crimson hover:bg-soft-rose'
                  }`}
                  style={{
                    backgroundColor: isGetInvolvedActive() ? '#C41E3A' : undefined,
                    boxShadow: isGetInvolvedActive() ? '0 2px 8px rgba(139, 21, 56, 0.25)' : undefined
                  }}
                >
                  <span>Get Involved</span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Desktop Dropdown Menu */}
                <div 
                  className={`absolute top-full left-0 mt-1 w-48 bg-warm-ivory rounded-lg shadow-lg transition-all duration-200 z-50 ${
                    isDropdownOpen 
                      ? 'opacity-100 translate-y-0 pointer-events-auto' 
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                  style={{ 
                    border: '1px solid #F4E8E8',
                    boxShadow: '0 4px 12px rgba(196, 30, 58, 0.15)'
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
                            ? 'text-white bg-sacred-crimson'
                            : 'text-rich-charcoal hover:text-sacred-crimson hover:bg-soft-rose'
                        }`}
                        style={{
                          backgroundColor: isActivePath(item.path) ? '#C41E3A' : undefined
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

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 flex-shrink-0">
              <Link to='/donate'>
               <button
             
                className="flex items-center space-x-2 text-white px-4 xl:px-5 py-2.5 rounded-lg font-semibold text-sm xl:text-base transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
                style={{ 
                  background: 'linear-gradient(135deg, #2C2C2C 0%, #6B4B4B 100%)',
                  boxShadow: '0 2px 8px rgba(139, 21, 56, 0.25)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #6B4B4B 0%, #2C2C2C 100%)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #2C2C2C 0%, #6B4B4B 100%)';
                }}
              >
                <span>Donate</span>
              </button>
              </Link>
             

              <Link
                to="/volunteers"
                className="text-white px-5 xl:px-6 py-2.5 rounded-lg font-semibold text-sm xl:text-base transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
                style={{ 
                  background: 'linear-gradient(135deg, #C41E3A 0%, #8B1538 100%)',
                  boxShadow: '0 2px 8px rgba(139, 21, 56, 0.25)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #8B1538 0%, #C41E3A 100%)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #C41E3A 0%, #8B1538 100%)';
                }}
              >
                Join Us
              </Link>
            </div>

            {/* Mobile Right Section - Donate + Join Us Button + Menu Button */}
            <div className="flex items-center space-x-1 sm:space-x-2 lg:hidden flex-shrink-0">
              {/* Mobile Donate Button */}
              <Link to='/donate' className="flex">
                <button
                  className="flex items-center justify-center text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap h-[36px] sm:h-[40px]"
                  style={{ 
                    background: 'linear-gradient(135deg, #2C2C2C 0%, #6B4B4B 100%)',
                    boxShadow: '0 1px 4px rgba(139, 21, 56, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #6B4B4B 0%, #2C2C2C 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #2C2C2C 0%, #6B4B4B 100%)';
                  }}
                >
                  <span>Donate</span>
                </button>
              </Link>

              {/* Mobile Join Us Button */}
              <Link to="/volunteers" className="flex">
                <button
                  className="flex items-center justify-center text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap h-[36px] sm:h-[40px]"
                  style={{ 
                    background: 'linear-gradient(135deg, #C41E3A 0%, #8B1538 100%)',
                    boxShadow: '0 1px 4px rgba(139, 21, 56, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #8B1538 0%, #C41E3A 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #C41E3A 0%, #8B1538 100%)';
                  }}
                >
                  Join
                </button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-1.5 sm:p-2 rounded text-rich-charcoal hover:text-sacred-crimson hover:bg-soft-rose transition-all duration-200 flex-shrink-0 h-[36px] sm:h-[40px] w-[36px] sm:w-[40px] flex items-center justify-center"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
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
            className="bg-warm-ivory border-t shadow-lg"
            style={{ 
              borderTopColor: '#F4E8E8',
              boxShadow: '0 4px 12px rgba(196, 30, 58, 0.15)'
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
                        ? 'text-white bg-sacred-crimson'
                        : 'text-rich-charcoal hover:text-sacred-crimson hover:bg-soft-rose'
                    }`}
                    style={{
                      backgroundColor: isActivePath(item.path) ? '#C41E3A' : undefined
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Get Involved Dropdown */}
                <div>
                  <button
                    onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                    className={`w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 rounded text-sm sm:text-base font-medium transition-all duration-200 ${
                      isGetInvolvedActive()
                        ? 'text-white bg-sacred-crimson'
                        : 'text-rich-charcoal hover:text-sacred-crimson hover:bg-soft-rose'
                    }`}
                    style={{
                      backgroundColor: isGetInvolvedActive() ? '#C41E3A' : undefined
                    }}
                  >
                    <span>Get Involved</span>
                    <ChevronDown size={16} className={`sm:w-5 sm:h-5 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Mobile Dropdown Items */}
                  <div className={`ml-3 sm:ml-4 mt-1 space-y-1 overflow-hidden transition-all duration-200 ${
                    isMobileDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    {dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`block px-3 sm:px-4 py-2 rounded text-sm sm:text-sm font-medium transition-all duration-200 ${
                          isActivePath(item.path)
                            ? 'text-white bg-sacred-crimson'
                            : 'text-rich-charcoal hover:text-sacred-crimson hover:bg-soft-rose'
                        }`}
                        style={{
                          backgroundColor: isActivePath(item.path) ? '#C41E3A' : undefined
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
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-1 lg:h-0"></div>

      <style jsx>{`
        .text-rich-charcoal { color: #2C2C2C; }
        .text-sacred-crimson { color: #C41E3A; }
        .text-deep-ruby { color: #8B1538; }
        .bg-warm-ivory { background-color: #FFFEF7; }
        .bg-rose-cream { background-color: #FDF8F8; }
        .bg-rich-charcoal { background-color: #2C2C2C; }
        .bg-sacred-crimson { background-color: #C41E3A; }
        .bg-soft-rose { background-color: #F4E8E8; }
        .border-soft-rose { border-color: #F4E8E8; }
        .hover\\:text-sacred-crimson:hover { color: #C41E3A; }
        .hover\\:text-deep-ruby:hover { color: #8B1538; }
        .hover\\:bg-soft-rose:hover { background-color: #F4E8E8; }
        
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
            font-size: 0.7rem;
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