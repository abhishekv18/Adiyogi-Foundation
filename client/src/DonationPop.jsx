
// import React, { useState, useEffect } from 'react';
// import { X, Users, Landmark, Heart } from 'lucide-react';
// import { Link, useNavigate } from 'react-router-dom';

// const DonationPopup = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const hasShownPopup = sessionStorage.getItem('donation-popup-shown');
//     if (!hasShownPopup) {
//       const timer = setTimeout(() => {
//         setIsVisible(true);
//         setIsAnimating(true);
//         sessionStorage.setItem('donation-popup-shown', 'true');
//       }, 2000);
//       return () => clearTimeout(timer);
//     }
//   }, []);

//   const handleClose = () => {
//     setIsAnimating(false);
//     setTimeout(() => setIsVisible(false), 300);
//   };

//   const handleDonate = () => {
//     setIsVisible(false);
//     setTimeout(() => navigate("/donate"), 300);
//   };

//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
//       {/* Backdrop */}
//       <div
//         className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
//           isAnimating ? 'opacity-100' : 'opacity-0'
//         }`}
//         onClick={handleClose}
//       />

//       {/* Card */}
//       <div
//         className={`relative bg-[#FFFEF7] rounded-2xl shadow-2xl w-full max-w-[20rem] sm:max-w-[22rem] mx-auto transform transition-all duration-300 ${
//           isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
//         }`}
//       >
//         {/* Close Button */}
//         <button
//           onClick={handleClose}
//           className="absolute top-1 right-0 p-2 text-[#2C2C2C] hover:text-white bg-transparent hover:bg-[#C41E3A] rounded-full z-20"
//         >
//           <X size={18} />
//         </button>

//         {/* Header */}
//         <div className="relative bg-gradient-to-br from-[#C41E3A] to-[#8B1538] text-white px-3 py-3.5 rounded-t-2xl overflow-hidden">
//           <img
//             src="/istockphoto-992280502-612x612.jpg"
//             alt="Temple"
//             className="absolute inset-0 w-full h-full object-cover opacity-20"
//           />
//           <div className="relative z-10">
//             <div className="flex items-center gap-2 mb-1">
//               <div className="bg-white/20 p-2 rounded-full">
//                 <Landmark className="w-5 h-5 text-white" />
//               </div>
//               <h2 className="text-lg sm:text-xl font-semibold">
//                 Help Restore Dharma
//               </h2>
//             </div>
//             <p className="text-[#F4E8E8] text-xs">
//               Every brick rebuilds faith.
//             </p>
//           </div>
//         </div>

//         {/* Body */}
//         <div className="px-[14px] py-[14px] sm:px-[18px] sm:py-[18px]">
//           {/* Impact Stats */}
//           <div className="grid grid-cols-2 gap-3 mb-4">
//             <div className="text-center p-2 bg-[#FDF8F8] rounded-lg border border-[#F4E8E8]">
//               <Landmark className="w-4 h-4 text-[#C41E3A] mx-auto mb-1" />
//               <div className="text-base font-bold text-[#2C2C2C]">2+</div>
//               <div className="text-xs text-[#2C2C2C]">Temples Saved</div>
//             </div>
//             <div className="text-center p-2 bg-[#FDF8F8] rounded-lg border border-[#F4E8E8]">
//               <Users className="w-4 h-4 text-[#C41E3A] mx-auto mb-1" />
//               <div className="text-base font-bold text-[#2C2C2C]">500+</div>
//               <div className="text-xs text-[#2C2C2C]">Devotees Joined</div>
//             </div>
//           </div>

//           {/* Separator */}
//           <div className="flex items-center justify-center text-[#C41E3A] text-xs font-medium mb-3">
//             <Heart className="w-3 h-3 mr-1" />
//             Make a Difference
//             <Heart className="w-3 h-3 ml-1" />
//           </div>

//           {/* QR + Button */}
//           <div className="flex flex-col items-center gap-2">
//             <img
//               src="/WhatsApp Image 2025-08-03 at 14.22.14_ea0b4173.jpg"
//               alt="Donate QR"
//               className="w-24 h-24 border border-[#F4E8E8] rounded-md shadow-sm"
//             />
//             <p className="text-[11px] text-[#6B4B4B] -mt-1">
//               Scan to support instantly
//             </p>

//             <span className="text-xs text-[#C41E3A] font-medium my-1">OR</span>

//             <button
//               onClick={handleDonate}
//               className="bg-gradient-to-br from-[#C41E3A] to-[#8B1538] text-white text-xs font-medium px-4 py-2 md:px-4 lg:py-3 rounded-md shadow-sm hover:opacity-90 transition-opacity"
//             >
//               Go to Donation Page
//             </button>
//           </div>

//           <p className="text-center text-[11px] text-[#6B4B4B] mt-4">
//             Your small gift preserves sacred heritage.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DonationPopup;
import React, { useState, useEffect } from 'react';
import { X, Users, Landmark, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const DonationPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasShownPopup = sessionStorage.getItem('donation-popup-shown');
    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
        sessionStorage.setItem('donation-popup-shown', 'true');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleDonate = () => {
    setIsVisible(false);
    setTimeout(() => navigate("/donate"), 300);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />

      {/* Card */}
      <div
        className={`relative bg-white rounded-2xl shadow-2xl w-full max-w-[20rem] sm:max-w-[22rem] mx-auto transform transition-all duration-300 ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-1 right-0 p-2 text-[#2C2C2C] hover:text-white bg-transparent hover:bg-[#6a0dad] rounded-full z-20"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="relative bg-gradient-to-br from-[#6a0dad] to-[#5a0ba5] text-white px-3 py-3.5 rounded-t-2xl overflow-hidden">
          <img
            src="/istockphoto-992280502-612x612.jpg"
            alt="Temple"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-1">
              <div className="bg-white/20 p-2 rounded-full">
                <Landmark className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg sm:text-xl font-semibold">
                Help Restore Dharma
              </h2>
            </div>
            <p className="text-[#F8F0FF] text-xs">
              Every brick rebuilds faith.
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="px-[14px] py-[14px] sm:px-[18px] sm:py-[18px]">
          {/* Impact Stats */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="text-center p-2 bg-[#FFFFFF] rounded-lg border border-[#F0E6FF]">
              <Landmark className="w-4 h-4 text-[#6a0dad] mx-auto mb-1" />
              <div className="text-base font-bold text-[#2C2C2C]">2+</div>
              <div className="text-xs text-[#2C2C2C]">Temples Saved</div>
            </div>
            <div className="text-center p-2 bg-[#FFFFFF] rounded-lg border border-[#F0E6FF]">
              <Users className="w-4 h-4 text-[#6a0dad] mx-auto mb-1" />
              <div className="text-base font-bold text-[#2C2C2C]">500+</div>
              <div className="text-xs text-[#2C2C2C]">Devotees Joined</div>
            </div>
          </div>

          {/* Separator */}
          <div className="flex items-center justify-center text-[#6a0dad] text-xs font-medium mb-3">
            <Heart className="w-3 h-3 mr-1" />
            Make a Difference
            <Heart className="w-3 h-3 ml-1" />
          </div>

          {/* QR + Button */}
          <div className="flex flex-col items-center gap-2">
            <img
              src="/WhatsApp Image 2025-08-03 at 14.22.14_ea0b4173.jpg"
              alt="Donate QR"
              className="w-24 h-24 border border-[#F0E6FF] rounded-md shadow-sm"
            />
            <p className="text-[11px] text-[#6B4B4B] -mt-1">
              Scan to support instantly
            </p>

            <span className="text-xs text-[#6a0dad] font-medium my-1">OR</span>

            <button
              onClick={handleDonate}
              className="bg-gradient-to-br from-[#6a0dad] to-[#5a0ba5] text-white text-xs font-medium px-4 py-2 md:px-4 lg:py-3 rounded-md shadow-sm hover:opacity-90 transition-opacity"
            >
              Go to Donation Page
            </button>
          </div>

          <p className="text-center text-[11px] text-[#6B4B4B] mt-4">
            Your small gift preserves sacred heritage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationPopup;