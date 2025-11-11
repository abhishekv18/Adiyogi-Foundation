
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Cookie = () => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const consent = localStorage.getItem("cookieConsent");
//     if (!consent) setVisible(true);
//   }, []);

//   const handleAccept = () => {
//     localStorage.setItem("cookieConsent", "accepted");
//     setVisible(false);
//   };

//   const handleDecline = () => {
//     localStorage.setItem("cookieConsent", "declined");
//     setVisible(false);
//   };

//   return (
//     <AnimatePresence>
//       {visible && (
//         <motion.div
//           initial={{ y: 100, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: 100, opacity: 0 }}
//           transition={{ duration: 0.5 }}
//           className="fixed bottom-0 sm:bottom-6 md:bottom-8 
//                      left-0 right-0 sm:left-4 sm:right-4 md:left-8 md:right-8
//                      sm:mx-auto
//                      w-full sm:w-auto sm:max-w-[calc(100%-2rem)] md:max-w-[calc(100%-4rem)] lg:max-w-[800px] xl:max-w-[900px] 2xl:max-w-[1000px]
//                      bg-white text-gray-900 
//                      p-4 sm:p-5 md:p-6 lg:p-7
//                      rounded-t-2xl sm:rounded-2xl 
//                      shadow-2xl border border-gray-200 
//                      z-50"
//         >
//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 lg:gap-6">
//             {/* 🍪 Cookie Icon + Text */}
//             <div className="flex items-start gap-3 lg:gap-4 flex-1 w-full min-w-0">
//               <div className="text-2xl sm:text-xl lg:text-2xl flex-shrink-0 mt-0.5">🍪</div>
//               <div className="flex-1 min-w-0">
//                 <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
//                   We use cookies to enhance your experience and analyze site traffic.{" "}
//                   <a
//                     href="/cookie-policy"
//                     className="underline text-[#6a0dad] hover:text-[#5a0c9d] transition-colors whitespace-nowrap font-medium"
//                   >
//                     Learn more
//                   </a>
//                   .
//                 </p>
//               </div>
//             </div>

//             {/* ✅ Buttons */}
//             <div className="flex gap-2 sm:gap-3 w-full sm:w-auto sm:flex-shrink-0">
//               <button
//                 onClick={handleDecline}
//                 className="flex-1 sm:flex-none 
//                            px-4 sm:px-5 lg:px-6
//                            py-2 sm:py-2.5 lg:py-2.5
//                            text-sm sm:text-base
//                            bg-gray-100 text-gray-700 
//                            border border-gray-300 rounded-lg 
//                            hover:bg-gray-200 
//                            transition-all duration-200 
//                            font-medium
//                            whitespace-nowrap"
//               >
//                 Decline
//               </button>
//               <button
//                 onClick={handleAccept}
//                 className="flex-1 sm:flex-none 
//                            px-4 sm:px-5 lg:px-6
//                            py-2 sm:py-2.5 lg:py-2.5
//                            text-sm sm:text-base
//                            bg-[#6a0dad] text-white 
//                            font-medium rounded-lg 
//                            hover:bg-[#5a0c9d] 
//                            transition-all duration-200 
//                            shadow-md hover:shadow-lg
//                            whitespace-nowrap"
//               >
//                 Accept
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Cookie;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Cookie = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 sm:bottom-6 md:bottom-8 
                     left-0 right-0 sm:left-4 sm:right-4 md:left-8 md:right-8
                     sm:mx-auto
                     w-full sm:w-auto sm:max-w-[calc(100%-2rem)] md:max-w-[calc(100%-4rem)] 
                     lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[850px]
                     bg-white text-gray-900 
                     p-3 sm:p-4 md:p-5 lg:p-5
                     rounded-t-2xl sm:rounded-2xl 
                     shadow-2xl border border-gray-200 
                     z-50"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 lg:gap-5">
            {/* 🍪 Cookie Icon + Text */}
            <div className="flex items-start gap-2 lg:gap-3 flex-1 w-full min-w-0">
              <div className="text-xl sm:text-2xl flex-shrink-0 mt-0.5">🍪</div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base text-gray-700 leading-relaxed">
                  We use cookies to enhance your experience and analyze site traffic.{" "}
                  <a
                    href="/cookie-policy"
                    className="underline text-[#6a0dad] hover:text-[#5a0c9d] transition-colors whitespace-nowrap font-medium"
                  >
                    Learn more
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* ✅ Buttons */}
            <div className="flex gap-2 sm:gap-3 w-full sm:w-auto sm:flex-shrink-0">
              <button
                onClick={handleDecline}
                className="flex-1 sm:flex-none 
                           px-3 sm:px-4 lg:px-5
                           py-1.5 sm:py-2 lg:py-2
                           text-xs sm:text-sm lg:text-sm
                           bg-gray-100 text-gray-700 
                           border border-gray-300 rounded-lg 
                           hover:bg-gray-200 
                           transition-all duration-200 
                           font-medium
                           whitespace-nowrap"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 sm:flex-none 
                           px-3 sm:px-4 lg:px-5
                           py-1.5 sm:py-2 lg:py-2
                           text-xs sm:text-sm lg:text-sm
                           bg-[#6a0dad] text-white 
                           font-medium rounded-lg 
                           hover:bg-[#5a0c9d] 
                           transition-all duration-200 
                           shadow-md hover:shadow-lg
                           whitespace-nowrap"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cookie;
