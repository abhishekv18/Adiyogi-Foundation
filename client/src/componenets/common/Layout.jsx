

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


import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import WhatsAppDrawer from '../../FloatingWhatsAppButton';
import DonationPopup from '../../DonationPop';
import ScrollToTopButton from '../../ScrollToTopButton';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {

 const location = useLocation();

  const hideLayoutRoutes = ['/admin-login','/admin-dashboard']; // pages where we hide header & footer

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

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
        </>
      )}

    
    </div>
  );
};

export default Layout;
