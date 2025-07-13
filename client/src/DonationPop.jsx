import React, { useState, useEffect } from 'react';
import { X, Users, Landmark } from 'lucide-react'; // Use Landmark as temple icon

const DonationPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const hasShownPopup = sessionStorage.getItem('donation-popup-shown');
    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
        sessionStorage.setItem('donation-popup-shown', 'true');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />

      <div
        className={`relative bg-[#FFFEF7] rounded-2xl shadow-2xl w-full max-w-sm mx-auto transform transition-all duration-300 ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        <button
          onClick={handleClose}
          className="absolute top-1 right-0 p-2 text-[#2C2C2C] hover:text-white bg-transparent hover:bg-[#C41E3A] rounded-full z-20"
        >
          <X size={18} />
        </button>

        <div className="relative bg-gradient-to-br from-[#C41E3A] to-[#8B1538] text-white p-4 rounded-t-2xl overflow-hidden">
          <img
            src="/istockphoto-992280502-612x612.jpg"
            alt="Temple"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-white/20 p-2 rounded-full">
                <Landmark className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg sm:text-xl font-semibold">
                Preserve the Divine. Restore Our Temples.
              </h2>
            </div>
            <p className="text-[#F4E8E8] text-xs sm:text-sm">
              Your support helps revive sacred spaces, rituals, and heritage.
            </p>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5">
            <div className="text-center p-2 bg-[#FDF8F8] rounded-lg border border-[#F4E8E8]">
              <Landmark className="w-4 h-4 text-[#C41E3A] mx-auto mb-1" />
              <div className="text-base font-bold text-[#2C2C2C]">2+</div>
              <div className="text-xs text-[#2C2C2C]">Temples Restored</div>
            </div>
            <div className="text-center p-2 bg-[#FDF8F8] rounded-lg border border-[#F4E8E8]">
              <Users className="w-4 h-4 text-[#C41E3A] mx-auto mb-1" />
              <div className="text-base font-bold text-[#2C2C2C]">500+</div>
              <div className="text-xs text-[#2C2C2C]">Devotees Reached</div>
            </div>
          </div>

          <div className="text-center mb-5">
            <p className="text-[#2C2C2C] text-xs sm:text-sm mb-3">
              Scan the QR below to offer your sacred donation.
            </p>
            <div className="flex justify-center">
              <img
                src="/volunteers/WhatsApp Image 2025-07-05 at 8.36.53 PM (1).jpeg"
                alt="Donate QR"
                className="w-32 h-32 border border-[#F4E8E8] rounded-md shadow-sm"
              />
            </div>
          </div>

          <p className="text-center text-[11px] text-[#6B4B4B]">
            Thank you for being a guardian of heritage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationPopup;