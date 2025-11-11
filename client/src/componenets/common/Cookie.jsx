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
//           className="fixed bottom-0 sm:bottom-4 left-1/2 -translate-x-1/2 w-full sm:w-[95%] md:w-[90%] lg:w-[800px] max-w-[95vw] bg-gray-900 text-white p-4 sm:p-5 rounded-t-xl sm:rounded-2xl shadow-2xl z-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-5"
//         >
//           <div className="flex items-start gap-3 flex-1">
//             <div className="text-lg sm:text-xl mt-0.5">🍪</div>
//             <p className="text-sm sm:text-base text-gray-200 leading-relaxed flex-1">
//               We use cookies to enhance your experience and analyze site traffic.{" "}
//               <a
//                 href="/privacy"
//                 className="inline-block underline text-[#ff00ff] hover:text-[#ff66ff] whitespace-nowrap ml-1"
//               >
//                 Learn more
//               </a>
//             </p>
//           </div>

//           <div className="flex gap-3 w-full sm:w-auto justify-end">
//             <button
//               onClick={handleDecline}
//               className="px-4 sm:px-6 py-2.5 sm:py-2 text-sm bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200 min-w-[80px]"
//             >
//               Decline
//             </button>
//             <button
//               onClick={handleAccept}
//               className="px-4 sm:px-6 py-2.5 sm:py-2 text-sm bg-[#6a0dad] text-white font-medium rounded-lg hover:bg-[#5a0c9d] transition-colors duration-200 min-w-[80px]"
//             >
//               Accept
//             </button>
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
          className="fixed bottom-0 sm:bottom-5 left-0 sm:left-1/2 sm:-translate-x-1/2 w-full sm:w-[95%] md:w-[85%] lg:w-[700px] xl:w-[800px] sm:max-w-[95vw] bg-gray-900 text-white p-4 sm:p-5 md:p-6 rounded-t-2xl sm:rounded-2xl shadow-2xl z-50"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
            {/* 🍪 Cookie Icon + Text */}
            <div className="flex items-start gap-3 flex-1 w-full">
              <div className="text-2xl sm:text-xl flex-shrink-0">🍪</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  We use cookies to enhance your experience and analyze site traffic.{" "}
                  <a
                    href="/terms-conditions"
                    className="underline text-[#ff00ff] hover:text-[#ff66ff] transition-colors whitespace-nowrap"
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
                className="flex-1 sm:flex-none px-5 sm:px-6 py-2.5 text-sm sm:text-base bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-200 font-medium"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 sm:flex-none px-5 sm:px-6 py-2.5 text-sm sm:text-base bg-[#6a0dad] text-white font-medium rounded-lg hover:bg-[#5a0c9d] transition-all duration-200 shadow-lg hover:shadow-xl"
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
