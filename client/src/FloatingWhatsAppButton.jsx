

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
      className="fixed z-50 p-3 rounded-full shadow-lg bg-green-500 text-white 
  hover:bg-green-600 hover:scale-110 transition-transform duration-300
  bottom-20 right-4 md:bottom-6 md:right-10"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppDrawer;
