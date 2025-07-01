import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-7 right-5 md:right-2 z-50 group p-2
        bg-[#C41E3A] text-white
        hover:bg-[#8B1538]
        rounded-full 
        transform transition-all duration-500 ease-out
        hover:scale-110 hover:translate-y-0
        active:scale-95
        shadow-[0_4px_12px_rgba(196,30,58,0.25)]
        ${show ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'}
      `}
      aria-label="Scroll to top"
      title="Scroll to Top"
    >
      <span className="block transition-transform duration-300 group-hover:rotate-12 text-md font-semibold">↑</span>
    </button>
  );
};

export default ScrollToTopButton;
