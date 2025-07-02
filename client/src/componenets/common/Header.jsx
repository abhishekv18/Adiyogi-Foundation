
// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, Phone, Mail, Heart, ChevronDown } from 'lucide-react';
// import DonationPopupButton from '../../DonationPopupButton';

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
//             <div className="flex items-center space-x-8">
//               <div className="flex items-center space-x-2">
//                 <Mail size={16} className="text-sacred-crimson" />
//                 <span>social.adiyogifoundation@gmail.com</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Phone size={16} className="text-sacred-crimson" />
//                 <span>+91 XXXXXXXXXX</span>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <span className="text-sacred-crimson font-medium">🕉️ ॐ नमः शिवाय</span>
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
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16 lg:h-20">
            
//             {/* Logo */}
//             <Link to="/" className="flex items-center space-x-3 group">
//               <div className="relative">
//                 <div 
//                   className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform duration-300"
//                   style={{ background: 'linear-gradient(135deg, #C41E3A 0%, #8B1538 100%)' }}
//                 >
//                   ॐ
//                 </div>
//               </div>
//               <div className="hidden sm:block">
//                 <h1 className="text-xl lg:text-2xl font-bold text-rich-charcoal group-hover:text-deep-ruby transition-colors duration-300">
//                   Adiyogi <span className="text-sacred-crimson">Foundation</span>
//                 </h1>
//                 <p className="text-xs font-medium -mt-1 group-hover:text-sacred-crimson transition-colors duration-300" style={{ color: '#6B4B4B' }}>
//                   Rebuilding Purpose. Restoring Dharma. Reviving the Sacred.
//                 </p>
//               </div>
//             </Link>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex items-center space-x-1">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   className={`px-4 py-2 rounded-lg text-[15px] font-medium transition-all duration-200 relative ${
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
//                   className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
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
//                   className={`absolute top-full left-0 mt-1 w-48 bg-warm-ivory rounded-lg shadow-lg transition-all duration-200 ${
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
//             <div className="hidden lg:flex items-center space-x-3">
//               <button
//                onClick={() => setIsPopupOpen(true)}
//                 className="flex items-center space-x-2 text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
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
// {isPopupOpen && (
//   <DonationPopupButton 
//     isOpen={isPopupOpen} 
//     onClose={() => setIsPopupOpen(false)} 
//   />
// )}
//               <Link
//                 to="/volunteers"
//                 className="text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
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
//             <div className="flex items-center space-x-2 lg:hidden">
//               {/* Mobile Donate Button */}
//               <button
//               onClick={() => setIsPopupOpen(true)}
//                 className="flex items-center space-x-1 text-white px-3 py-2 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg"
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
// {isPopupOpen && (
//   <DonationPopupButton 
//     isOpen={isPopupOpen} 
//     onClose={() => setIsPopupOpen(false)} 
//   />
// )}
//               {/* Mobile Join Us Button */}
//               <Link
//                 to="/volunteers"
//                 className="text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg"
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
//                 Join
//               </Link>

//             {/* Mobile Menu Button - Only show on mobile */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="lg:hidden p-2 rounded-lg text-rich-charcoal hover:text-sacred-crimson hover:bg-soft-rose transition-all duration-200"
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation - Fixed positioning and animation */}
//         <div 
//           className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out ${
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
//             <div className="max-w-7xl mx-auto px-4 py-4">
//               <div className="space-y-1">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     to={item.path}
//                     className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
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
//                     className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
//                       isGetInvolvedActive()
//                         ? 'text-white bg-sacred-crimson'
//                         : 'text-rich-charcoal hover:text-sacred-crimson hover:bg-soft-rose'
//                     }`}
//                     style={{
//                       backgroundColor: isGetInvolvedActive() ? '#C41E3A' : undefined
//                     }}
//                   >
//                     <span>Get Involved</span>
//                     <ChevronDown size={16} className={`transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
//                   </button>
                  
//                   {/* Mobile Dropdown Items */}
//                   <div className={`ml-4 mt-1 space-y-1 overflow-hidden transition-all duration-200 ${
//                     isMobileDropdownOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
//                   }`}>
//                     {dropdownItems.map((item) => (
//                       <Link
//                         key={item.name}
//                         to={item.path}
//                         className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
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
//       `}</style>
//     </>
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
              {/* <div className="flex items-center space-x-2">
                <Mail size={16} className="text-sacred-crimson flex-shrink-0" />
                <span className="truncate">social.adiyogifoundation@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-sacred-crimson flex-shrink-0" />
                <span>+91 9175033022</span>
              </div> */}
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
        <div className="max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 xs:h-14 sm:h-16 lg:h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-1 xs:space-x-2 sm:space-x-3 group flex-shrink-0 min-w-0">
              <div className="relative flex-shrink-0">
                <div 
                  className="w-6 xs:w-7 sm:w-8 h-6 xs:h-7 sm:h-8 rounded-full flex items-center justify-center text-white font-bold text-sm xs:text-base sm:text-lg group-hover:scale-105 transition-transform duration-300"
                  style={{ background: 'linear-gradient(135deg, #C41E3A 0%, #8B1538 100%)' }}
                >
                  ॐ
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-sm xs:text-base sm:text-lg lg:text-2xl font-bold text-rich-charcoal group-hover:text-deep-ruby transition-colors duration-300 truncate leading-tight">
                  Adiyogi <span className="text-sacred-crimson">Foundation</span>
                </h1>
                <p className="hidden xxs:block text-[10px] xs:text-xs font-medium -mt-0.5 xs:-mt-1 group-hover:text-sacred-crimson transition-colors duration-300 truncate leading-tight" style={{ color: '#6B4B4B' }}>
                  Rebuilding Purpose. Restoring Dharma. Reviving the Sacred.
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
            <div className="flex items-center space-x-0.5 xs:space-x-1 sm:space-x-2 lg:hidden flex-shrink-0">
              <Link to='/donate'>
                     <button
            
                className="flex items-center text-white px-1.5 xs:px-2 sm:px-3 py-1 xs:py-1.5 sm:py-2 rounded text-[10px] xs:text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap min-h-[32px] xs:min-h-[36px] sm:min-h-[40px]"
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
              {/* Mobile Donate Button */}
       

              {/* Mobile Join Us Button */}
              <Link
                to="/volunteers"
                className="text-white px-1.5 xs:px-2 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded text-[10px] xs:text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap min-h-[32px] xs:min-h-[36px] sm:min-h-[40px] flex items-center"
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
              </Link>

            {/* Mobile Menu Button - Only show on mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-1 xs:p-1.5 sm:p-2 rounded text-rich-charcoal hover:text-sacred-crimson hover:bg-soft-rose transition-all duration-200 flex-shrink-0 min-h-[32px] xs:min-h-[36px] sm:min-h-[40px] min-w-[32px] xs:min-w-[36px] sm:min-w-[40px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={16} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6" /> : <Menu size={16} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6" />}
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
            <div className="max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 py-2 xs:py-3 sm:py-4">
              <div className="space-y-0.5 xs:space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-2 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3 rounded text-xs xs:text-sm sm:text-base font-medium transition-all duration-200 ${
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
                    className={`w-full flex items-center justify-between px-2 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3 rounded text-xs xs:text-sm sm:text-base font-medium transition-all duration-200 ${
                      isGetInvolvedActive()
                        ? 'text-white bg-sacred-crimson'
                        : 'text-rich-charcoal hover:text-sacred-crimson hover:bg-soft-rose'
                    }`}
                    style={{
                      backgroundColor: isGetInvolvedActive() ? '#C41E3A' : undefined
                    }}
                  >
                    <span>Get Involved</span>
                    <ChevronDown size={14} className={`xs:w-4 xs:h-4 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Mobile Dropdown Items */}
                  <div className={`ml-2 xs:ml-3 sm:ml-4 mt-0.5 xs:mt-1 space-y-0.5 xs:space-y-1 overflow-hidden transition-all duration-200 ${
                    isMobileDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    {dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`block px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 rounded text-[10px] xs:text-xs sm:text-sm font-medium transition-all duration-200 ${
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
        
        /* Custom responsive breakpoints */
        @media (min-width: 360px) {
          .xxs\\:block { display: block; }
        }
        @media (min-width: 475px) {
          .xs\\:block { display: block; }
        }
        
        /* Ultra-small screen optimizations (320px and below) */
        @media (max-width: 320px) {
          .space-x-0\.5 > :not([hidden]) ~ :not([hidden]) {
            margin-left: 0.125rem;
          }
          
          /* Ensure minimum touch targets */
          button, a {
            min-height: 32px;
            min-width: 28px;
          }
          
          /* Compact text sizing */
          .text-\[10px\] {
            font-size: 10px;
            line-height: 1.2;
          }
          
          /* Reduce shadows for performance */
          .shadow-sm {
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          }
        }
        
        /* Extra small screens (321px - 359px) */
        @media (min-width: 321px) and (max-width: 359px) {
          .xs\\:w-5 { width: 1.25rem; }
          .xs\\:h-5 { height: 1.25rem; }
          .xs\\:w-7 { width: 1.75rem; }
          .xs\\:h-7 { height: 1.75rem; }
          .xs\\:text-xs { font-size: 0.75rem; }
          .xs\\:text-sm { font-size: 0.875rem; }
          .xs\\:text-base { font-size: 1rem; }
          .xs\\:px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
          .xs\\:px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
          .xs\\:py-1\.5 { padding-top: 0.375rem; padding-bottom: 0.375rem; }
          .xs\\:py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
          .xs\\:py-2\.5 { padding-top: 0.625rem; padding-bottom: 0.625rem; }
          .xs\\:py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
          .xs\\:space-x-1 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.25rem; }
          .xs\\:space-x-2 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.5rem; }
          .xs\\:space-y-1 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.25rem; }
          .xs\\:h-14 { height: 3.5rem; }
          .xs\\:min-h-\[36px\] { min-height: 36px; }
          .xs\\:min-w-\[36px\] { min-width: 36px; }
          .xs\\:-mt-1 { margin-top: -0.25rem; }
          .xs\\:block { display: block; }
        }
        
        /* Ensure proper spacing and prevent overflow */
        @media (max-width: 359px) {
          .truncate {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          
          .leading-tight {
            line-height: 1.25;
          }
          
          /* Compact mobile navigation */
          .space-y-0\.5 > :not([hidden]) ~ :not([hidden]) {
            margin-top: 0.125rem;
          }
          
          .mt-0\.5 {
            margin-top: 0.125rem;
          }
          
          .ml-2 {
            margin-left: 0.5rem;
          }
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
      `}</style>
    </>
  );
};

export default Header;


