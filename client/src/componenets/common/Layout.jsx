

// import React from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import WhatsAppDrawer from '../../FloatingWhatsAppButton';
// import DonationPopup from '../../DonationPop';

// const Layout = ({ children }) => {
//   return (
//     <div className="min-h-screen bg-rose-cream">
//       {/* Header Component */}
//       <Header />
      
//       {/* Main Content Area */}
//       <main className="flex-1">
//         {children}
//       </main>
      
//       {/* Footer Component */}
//       <Footer />
//       <WhatsAppDrawer/>
//       <DonationPopup/>
//     </div>
//   );
// };

// export default Layout;


import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import WhatsAppDrawer from '../../FloatingWhatsAppButton';
import DonationPopup from '../../DonationPop';
import ScrollToTopButton from '../../ScrollToTopButton';
import { useLocation } from 'react-router-dom';
import Cookie from './Cookie';
// const Layout = ({ children }) => {

//  const location = useLocation();

//   const hideLayoutRoutes = ['/admin-login','/admin-dashboard','/blog/:id']; // pages where we hide header & footer

//   const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

//   return (
//     <div className="min-h-screen bg-rose-cream">
//        {!shouldHideLayout && <Header />}

     
//         <motion.main
          
//           className="flex-1"
//             initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: 'easeOut' }}
//         >
//           {children}
//         </motion.main>

//        {!shouldHideLayout && (
//         <>
//            <Footer />
//       <WhatsAppDrawer />
//       <ScrollToTopButton/>
//       <DonationPopup />
//         </>
//       )}

    
//     </div>
//   );
// };
const Layout = ({ children }) => {
  const location = useLocation();
  
  // Hide layout for admin routes and any blog page
  const hideLayoutRoutes = ['/admin-login', '/admin-dashboard'];
  const isBlogPage = location.pathname.startsWith('/blog/');
  const isProductPage = location.pathname.startsWith('/product/');
const isCheckPage = location.pathname.startsWith('/checkout');
const isTermsPage = location.pathname.startsWith('/terms-conditions');
const isOrderSuccessPage = location.pathname.startsWith('/order-success');
const isCookiePage = location.pathname.startsWith('/cookie-policy');
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname) || isBlogPage || isProductPage || isCheckPage || isOrderSuccessPage || isTermsPage || isCookiePage;
useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "accepted") {
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-QYGRD0L7ZB";
      script.async = true;
      document.body.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-QYGRD0L7ZB");
    } else {
      console.log("Cookies declined — not loading analytics");
    }
  }, []);

  // ✅ 2️⃣ Track route changes (page views)
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "accepted" && window.gtag) {
      window.gtag("config", "G-QYGRD0L7ZB", {
        page_path: location.pathname,
      });
    }
  }, [location]);
  return (
    <div className="min-h-screen bg-rose-cream">
       {!shouldHideLayout && <Header />}

        <motion.main
          className="flex-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {children}
        </motion.main>

       {!shouldHideLayout && (
        <>
          <Footer />
          <WhatsAppDrawer />
          <ScrollToTopButton/>
          <DonationPopup />
          <Cookie/>
        </>
       )}
    </div>
  );
};
export default Layout;
