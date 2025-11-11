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
//           className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] bg-gray-900 text-white p-4 rounded-2xl shadow-2xl z-50 flex flex-col md:flex-row items-center justify-between gap-3"
//         >
//           <p className="text-sm text-gray-300">
//             🍪 We use cookies to improve your experience and analyze site usage.
//             By continuing to use this site, you consent to our cookies.{" "}
//             <a
//               href="/terms-conditions"
//               className="underline text-[#ff00ff] hover:text-[#ff66ff]"
//             >
//               Learn more
//             </a>
//           </p>

//           <div className="flex gap-2">
//             <button
//               onClick={handleDecline}
//               className="px-4 py-1.5 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
//             >
//               Decline
//             </button>
//             <button
//               onClick={handleAccept}
//               className="px-4 py-1.5 bg-[#6a0dad] text-white font-medium rounded-lg hover:bg-[#5a0c9d] transition"
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
          className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] bg-gray-900 text-white p-4 rounded-2xl shadow-2xl z-50 flex flex-col md:flex-row items-center justify-between gap-3"
        >
          <p className="text-sm text-gray-300">
            🍪 We use cookies to improve your experience and analyze site usage.
            By continuing to use this site, you consent to our cookies.{" "}
            <a
              href="/terms-conditions"
              className="underline text-[#ff00ff] hover:text-[#ff66ff]"
            >
              Learn more
            </a>
          </p>

          <div className="flex gap-2">
            <button
              onClick={handleDecline}
              className="px-4 py-1.5 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-1.5 bg-[#6a0dad] text-white font-medium rounded-lg hover:bg-[#5a0c9d] transition"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cookie;