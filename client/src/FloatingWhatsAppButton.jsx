
// import { useState, useEffect } from 'react';
// import { FaWhatsapp } from 'react-icons/fa';

// const WhatsAppDrawer = () => {
//   const [open, setOpen] = useState(false);
//   const [show, setShow] = useState(false);

//   // Show button after scroll
//   useEffect(() => {
//     const onScroll = () => setShow(window.scrollY > 300);
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   if (!show) return null;

//   return (
//     <>
//       {/* Floating WhatsApp Button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="fixed z-50 p-3 rounded-full shadow-lg bg-green-500 text-white hover:bg-green-600 transition-all
//                   bottom-20 right-2 md:bottom-6 md:right-10"
//         title="Chat on WhatsApp"
//       >
//         <FaWhatsapp size={24} />
//       </button>

//       {/* Drawer Panel */}
//     <div


//   className={`fixed z-40 w-[92%] max-w-[300px] rounded-2xl shadow-2xl p-4 sm:p-5 transition-all duration-500
//     ${open ? 'translate-y-0 bottom-36 lg:bottom-28 opacity-100' : 'translate-y-2 bottom-36 opacity-0'}
//     right-4 sm:right-6
//     max-h-[240px] sm:max-h-none overflow-y-auto
//     bg-gradient-to-r from-[#00695C]/95 to-[#004D40]/90 text-white`}
// >

// <p className="font-semibold text-[15px] sm:text-base mb-2 text-teal-100">
//   How can we serve you?
// </p>
// <p className="text-sm sm:text-[15px] text-teal-50 mb-4 leading-relaxed">
//   Reach out on WhatsApp for temple projects, volunteering, or spiritual guidance.
// </p>

//   <a
//     href="https://wa.me/919175033022"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="bg-green-500 hover:bg-green-600 text-white text-sm sm:text-[15px] font-medium px-4 py-2 rounded-md block text-center shadow-md transition duration-300"
//   >
//     Open WhatsApp
//   </a>
// </div>

//     </>
//   );
// };

// export default WhatsAppDrawer;



import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppDrawer = () => {
  const [show, setShow] = useState(false);

  // Show button after scroll
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <a
      href="https://wa.me/919175033022"
      target="_blank"
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
      className="fixed z-50 p-3 rounded-full shadow-lg bg-green-500 text-white hover:bg-green-600 transition-all
                 bottom-20 right-2 md:bottom-6 md:right-10"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppDrawer;
