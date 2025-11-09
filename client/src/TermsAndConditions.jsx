// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   FaGlobe, FaUserPlus, FaUser, FaBan, FaCopyright, 
//   FaTrademark, FaShieldAlt, FaGavel, FaExclamationTriangle, 
//   FaEnvelope, FaBalanceScale, FaChevronDown, FaChevronUp,
//   FaArrowLeft, FaArrowUp
// } from 'react-icons/fa';
// import { Helmet } from 'react-helmet';
// const TermsAndConditions = () => {
//   const [activeSections, setActiveSections] = useState({});
//   const [showBackToTop, setShowBackToTop] = useState(false);

//   // Handle scroll event to show/hide back to top button
//   useEffect(() => {
//     const handleScroll = () => {
//       setShowBackToTop(window.scrollY > 300);
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleSection = (section) => {
//     setActiveSections(prev => ({
//       ...prev,
//       [section]: !prev[section]
//     }));
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const termsData = [
//     {
//       id: 'website-access',
//       title: 'Website Access, Services and Availability',
//       icon: <FaGlobe className="text-sacred-red" />,
//       content: `This Website is made available free of charge to access. However, the Foundation reserves the right to charge subscription, membership, donation processing fees, or any other fees from a user, in respect of certain service(s) and products provided on this Website.`
//     },
//     {
//       id: 'registration',
//       title: 'Registration',
//       icon: <FaUserPlus className="text-sacred-red" />,
//       content: `In general, you can access and visit our Website without registering on the Website or otherwise revealing your identity or any personal information about yourself. However, access to certain Services features and Content may require completion of a simple registration process by the user.`
//     },
//     {
//       id: 'user-profile',
//       title: 'User Profile / Registration',
//       icon: <FaUser className="text-sacred-red" />,
//       content: `a. Users may register with us for a subscription, donation account, or product purchases on the Website ("User Profile"), which may enable them to have complete access of our Website, avail certain Services and also receive our newsletters/alerts. By completing the online registration process on the Website, you confirm your acceptance of these Terms and our Privacy Policy.

// b. To complete your registration or donation, you may be required to provide your full name, email address, mobile number, billing/shipping address, and other details. You must provide complete and accurate information about yourself. You undertake that you will notify us and update this information to keep it current.

// c. You are responsible for protecting the information you provide on the Website including but not limited to your username, email address, contact details and mobile number.

// d. Our Services and our Website are intended for a general audience and you confirm your acceptance and compliance with these Terms to use the Website.`
//     },
//     {
//       id: 'suspension',
//       title: 'Suspension of Access',
//       icon: <FaBan className="text-sacred-red" />,
//       content: `We may suspend or terminate your registration, donation account, or access to all or any part of the Website at any time, if you breach these Terms in our reasonable opinion or at our discretion for any reasons we deem fit.`
//     },
//     {
//       id: 'ip',
//       title: 'Intellectual Property',
//       icon: <FaCopyright className="text-sacred-red" />,
//       content: `All Content featured or displayed on this Website including the trademarks, logos, photos, pictures, audio, video, design, layout and all other content and intellectual property rights, belongs to and is the property of Adiyogi Foundation, and/or is used under valid license/authorization. Unauthorized copying, use, reproduction, distribution, modification, dissemination, reposting, hyper-linking, deep-linking, framing, mirroring, downloading or any other use of the Content on this Website in any manner whatsoever, without the prior written authorization of the Foundation is strictly prohibited.`
//     },
//     {
//       id: 'copyright',
//       title: 'Copyright',
//       icon: <FaCopyright className="text-sacred-red" />,
//       content: `1. Subject to these Terms, all materials, including illustrations, statements, opinions, articles, views, photographs, products, images, artwork, designs, text, graphics, logos, images, audio and video clips and software (collectively, "Content") appearing on this Website are owned or controlled by Adiyogi Foundation and/or its subsidiaries, affiliates, licensors and content suppliers and are protected by worldwide design, trademark, trade dress, copyright and other intellectual property laws. The Foundation retains copyright on all information, including text, graphics and sound and all trademarks displayed on this Website are owned by the Foundation or used under licence by its affiliates.

// 2. You may:
// - Use and display the materials only on your personal computer for personal use. The Foundation grants you a limited, personal, non-exclusive and non-transferable license only for such use.
// - Print copies of the information on this Website for your personal use only and store the files on your computer for personal use.

// 3. You may not:
// - Copy, distribute, download, display, perform, reproduce, modify, edit, alter, enhance, broadcast, tamper with in any way or otherwise use any material contained in the Website except as expressly permitted above.
// - Copy and distribute this information on any other server, or modify or re-use text or graphics on this system or another system.
// - Reproduce any part of the Website for commercial gain or incorporate it in any other work, publication or Website, whether in hard copy or electronic format.
// - Remove any copyright, trademark or other intellectual property notices contained in the original material from any material copied or printed off from the Website.
// - Link to this Website without our express written consent.`
//     },
//     {
//       id: 'trademarks',
//       title: 'Trademarks',
//       icon: <FaTrademark className="text-sacred-red" />,
//       content: `This Website and the Content therein are intended solely for personal, non-commercial use by the users of this Website. All logos, trademarks, service marks, trade names, and trade dress appearing on this Website are proprietary to Adiyogi Foundation, whether registered or unregistered, and are protected under applicable intellectual property laws.

// You may not copy, reproduce, publish, transmit, distribute, display, modify, create derivative works from, sell, or participate in any sale of, or exploit in any way, in whole or in part, any of the Content, this Website, or any related software without the prior written authorization of the Foundation.

// No right, title, or interest in any materials or software, if applicable, on this Website is transferred to you from your use of this Website. Unauthorized use of these marks is strictly prohibited.`
//     },
//     {
//       id: 'security',
//       title: 'Information Security',
//       icon: <FaShieldAlt className="text-sacred-red" />,
//       content: `We are committed to safeguard the security and confidentiality of any information you provide to us. You accept the inherent security implications of providing information over the internet and agree not to hold us responsible for any breach of security.`
//     },
//     {
//       id: 'indemnity',
//       title: 'Indemnity',
//       icon: <FaGavel className="text-sacred-red" />,
//       content: `You agree to indemnify Adiyogi Foundation, its affiliates, officers, members, and other persons involved in the creation of this Website for all damages, losses and costs (including legal costs) which arise out of or relate to your use of this Website, donations, or product purchases.`
//     },
//     {
//       id: 'liability',
//       title: 'Limitation of Liability',
//       icon: <FaExclamationTriangle className="text-sacred-red" />,
//       content: `In no event shall Adiyogi Foundation, including its affiliates and their respective officers, members, agents and partners be liable for any loss or damage whatsoever including direct, indirect, punitive, incidental and consequential damages, lost profits, or damages resulting from the use or inability to use the Website.`
//     },
//     {
//       id: 'warranty',
//       title: 'Warranty',
//       icon: <FaExclamationTriangle className="text-sacred-red" />,
//       content: `All content, information and materials on this Website are provided to you on an "AS IS" and "AS AVAILABLE" basis, without warranty or guarantee of any kind.`
//     },
//     {
//       id: 'grievances',
//       title: 'Redressal of Grievances',
//       icon: <FaEnvelope className="text-sacred-red" />,
//       content: `If you have any complaints or concerns with regards to content of this Website or to report alleged infringement of your rights in any way, or any abuse of applicable laws, breach of Terms of this Website, you may write to us at:

// 📧 privacy@adiyogifoundation.org.in (Grievance Officer)
// 📧 info@adiyogifoundation.org.in (General Queries / Donations / Products)
// 📍 Adiyogi Foundation, Badlapur, Mumbai- 421503, India.`
//     },
//     {
//       id: 'jurisdiction',
//       title: 'Applicable Law and Jurisdiction',
//       icon: <FaBalanceScale className="text-sacred-red" />,
//       content: `These Terms and Conditions are governed by and to be interpreted in accordance with the laws of India. You agree to submit to the exclusive jurisdiction of the courts located at Mumbai, India for any matter or disputes.`
//     }
//   ];

//   return (
//     <>
//     <Helmet>
//   <title>Terms & Conditions | Adiyogi Foundation</title>
//   <meta name="description" content="Read the terms and conditions for using Adiyogi Foundation’s website, seva programs, products, and services." />
//   <meta name="keywords" content="Adiyogi Foundation Terms, Conditions, Policies, Rules" />
//   <link rel="canonical" href="https://www.adiyogifoundation.org.in/term-conditions" />

//   <meta property="og:title" content="Terms & Conditions | Adiyogi Foundation" />
//   <meta property="og:description" content="Review the policies, rules, and terms of using Adiyogi Foundation’s website and services." />
//   <meta property="og:url" content="https://www.adiyogifoundation.org.in/term-conditions" />
//   <meta property="og:image" content="https://www.adiyogifoundation.org.in/Adiyogifoundation logo_02.png" />

//   <meta name="twitter:card" content="summary_large_image" />
//   <meta name="twitter:title" content="Terms & Conditions | Adiyogi Foundation" />
//   <meta name="twitter:description" content="Read Adiyogi Foundation’s terms and conditions for seva, products, and services." />
//   <meta name="twitter:image" content="https://www.adiyogifoundation.org.in/Adiyogifoundation logo_02.png" />
// </Helmet>
//  <div className="max-w-4xl mx-auto px-4 py-8 font-sans text-gray-800 relative">
//       {/* Back to Home Button */}
//  <Link
//   to="/"
//   className="fixed top-3 left-3 z-50 inline-flex items-center gap-1.5 
//              px-3 py-1.5 text-xs
//              rounded-full shadow bg-sacred-crimson
//              text-white font-medium
//              transition-transform duration-300 hover:scale-105 hover:shadow-md
//              focus:outline-none focus:ring-2 focus:ring-sacred-crimson focus:ring-offset-2"
//   aria-label="Back to Home"
// >
//   <FaArrowLeft size={14} className="opacity-90" />
//   <span>Back</span>
// </Link>




//       {/* Back to Top Button */}
//       {showBackToTop && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-6 right-6 z-50 bg-sacred-red text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 hover:scale-110"
//           aria-label="Back to top"
//         >
//           <FaArrowUp size={18} />
//         </button>
//       )}

//       {/* Header */}
//       <header className="text-center mb-8 pt-4">
//         <h1 className="text-3xl md:text-4xl font-bold text-sacred-red mb-2">Terms & Conditions</h1>
//         <div className="w-16 h-1 bg-sacred-red mx-auto my-4"></div>
//         <p className="text-sacred-red font-semibold">www.adiyogifoundation.org.in</p>
//         <p className="text-gray-500 italic mt-2">Last Updated: {new Date().toLocaleDateString()}</p>
//       </header>

//       {/* Introduction */}
//       <div className="mb-8">
//         <div className="bg-red-50 border-l-4 border-sacred-red p-6 rounded">
//           <h3 className="text-xl font-semibold text-sacred-red flex items-center gap-2">
//             <FaExclamationTriangle className="text-sacred-red" /> Please Read Carefully
//           </h3>
//           <p className="mt-2">
//             By accessing, browsing, donating, or purchasing through this Website, you agree and 
//             acknowledge that you have read, understood and agree to be bound by the following terms 
//             and conditions of use ("Terms").
//           </p>
//         </div>
//       </div>

//       {/* Terms Sections */}
//       <div className="space-y-4 mb-8">
//         {termsData.map((section) => (
//           <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
//             <div 
//               className="flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
//               onClick={() => toggleSection(section.id)}
//             >
//               <div className="flex items-center gap-3">
//                 {section.icon}
//                 <h3 className="text-lg font-medium">{section.title}</h3>
//               </div>
//               <span className="text-gray-500">
//                 {activeSections[section.id] ? <FaChevronUp /> : <FaChevronDown />}
//               </span>
//             </div>
//             <div 
//               className={`overflow-hidden transition-all duration-300 ${activeSections[section.id] ? 'max-h-96' : 'max-h-0'}`}
//             >
//               <div className="p-4 bg-white">
//                 {section.content.split('\n').map((paragraph, idx) => (
//                   <p key={idx} className="mb-3">{paragraph}</p>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Footer */}
//       <footer className="text-center pt-6 border-t border-gray-200">
//         <p className="text-gray-600">© {new Date().getFullYear()} Adiyogi Foundation. All rights reserved.</p>
//       </footer>

//       {/* Custom style for sacred red color */}
//       <style jsx>{`
//         .text-sacred-red {
//           color: #d32f2f;
//         }
//         .bg-sacred-red {
//           background-color: #d32f2f;
//         }
//         .border-sacred-red {
//           border-color: #d32f2f;
//         }
//       `}</style>
//     </div>
//     </>
   
//   );
// };

// export default TermsAndConditions;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaGlobe, FaUserPlus, FaUser, FaBan, FaCopyright, 
  FaTrademark, FaShieldAlt, FaGavel, FaExclamationTriangle, 
  FaEnvelope, FaBalanceScale, FaChevronDown, FaChevronUp,
  FaArrowLeft, FaArrowUp
} from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const TermsAndConditions = () => {
  const [activeSections, setActiveSections] = useState({});
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll event to show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSection = (section) => {
    setActiveSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const termsData = [
    {
      id: 'website-access',
      title: 'Website Access, Services and Availability',
      icon: <FaGlobe className="text-purple-600" />,
      content: `This Website is made available free of charge to access. However, the Foundation reserves the right to charge subscription, membership, donation processing fees, or any other fees from a user, in respect of certain service(s) and products provided on this Website.`
    },
    {
      id: 'registration',
      title: 'Registration',
      icon: <FaUserPlus className="text-purple-600" />,
      content: `In general, you can access and visit our Website without registering on the Website or otherwise revealing your identity or any personal information about yourself. However, access to certain Services features and Content may require completion of a simple registration process by the user.`
    },
    {
      id: 'user-profile',
      title: 'User Profile / Registration',
      icon: <FaUser className="text-purple-600" />,
      content: `a. Users may register with us for a subscription, donation account, or product purchases on the Website ("User Profile"), which may enable them to have complete access of our Website, avail certain Services and also receive our newsletters/alerts. By completing the online registration process on the Website, you confirm your acceptance of these Terms and our Privacy Policy.

b. To complete your registration or donation, you may be required to provide your full name, email address, mobile number, billing/shipping address, and other details. You must provide complete and accurate information about yourself. You undertake that you will notify us and update this information to keep it current.

c. You are responsible for protecting the information you provide on the Website including but not limited to your username, email address, contact details and mobile number.

d. Our Services and our Website are intended for a general audience and you confirm your acceptance and compliance with these Terms to use the Website.`
    },
    {
      id: 'suspension',
      title: 'Suspension of Access',
      icon: <FaBan className="text-purple-600" />,
      content: `We may suspend or terminate your registration, donation account, or access to all or any part of the Website at any time, if you breach these Terms in our reasonable opinion or at our discretion for any reasons we deem fit.`
    },
    {
      id: 'ip',
      title: 'Intellectual Property',
      icon: <FaCopyright className="text-purple-600" />,
      content: `All Content featured or displayed on this Website including the trademarks, logos, photos, pictures, audio, video, design, layout and all other content and intellectual property rights, belongs to and is the property of Adiyogi Foundation, and/or is used under valid license/authorization. Unauthorized copying, use, reproduction, distribution, modification, dissemination, reposting, hyper-linking, deep-linking, framing, mirroring, downloading or any other use of the Content on this Website in any manner whatsoever, without the prior written authorization of the Foundation is strictly prohibited.`
    },
    {
      id: 'copyright',
      title: 'Copyright',
      icon: <FaCopyright className="text-purple-600" />,
      content: `1. Subject to these Terms, all materials, including illustrations, statements, opinions, articles, views, photographs, products, images, artwork, designs, text, graphics, logos, images, audio and video clips and software (collectively, "Content") appearing on this Website are owned or controlled by Adiyogi Foundation and/or its subsidiaries, affiliates, licensors and content suppliers and are protected by worldwide design, trademark, trade dress, copyright and other intellectual property laws. The Foundation retains copyright on all information, including text, graphics and sound and all trademarks displayed on this Website are owned by the Foundation or used under licence by its affiliates.

2. You may:
- Use and display the materials only on your personal computer for personal use. The Foundation grants you a limited, personal, non-exclusive and non-transferable license only for such use.
- Print copies of the information on this Website for your personal use only and store the files on your computer for personal use.

3. You may not:
- Copy, distribute, download, display, perform, reproduce, modify, edit, alter, enhance, broadcast, tamper with in any way or otherwise use any material contained in the Website except as expressly permitted above.
- Copy and distribute this information on any other server, or modify or re-use text or graphics on this system or another system.
- Reproduce any part of the Website for commercial gain or incorporate it in any other work, publication or Website, whether in hard copy or electronic format.
- Remove any copyright, trademark or other intellectual property notices contained in the original material from any material copied or printed off from the Website.
- Link to this Website without our express written consent.`
    },
    {
      id: 'trademarks',
      title: 'Trademarks',
      icon: <FaTrademark className="text-purple-600" />,
      content: `This Website and the Content therein are intended solely for personal, non-commercial use by the users of this Website. All logos, trademarks, service marks, trade names, and trade dress appearing on this Website are proprietary to Adiyogi Foundation, whether registered or unregistered, and are protected under applicable intellectual property laws.

You may not copy, reproduce, publish, transmit, distribute, display, modify, create derivative works from, sell, or participate in any sale of, or exploit in any way, in whole or in part, any of the Content, this Website, or any related software without the prior written authorization of the Foundation.

No right, title, or interest in any materials or software, if applicable, on this Website is transferred to you from your use of this Website. Unauthorized use of these marks is strictly prohibited.`
    },
    {
      id: 'security',
      title: 'Information Security',
      icon: <FaShieldAlt className="text-purple-600" />,
      content: `We are committed to safeguard the security and confidentiality of any information you provide to us. You accept the inherent security implications of providing information over the internet and agree not to hold us responsible for any breach of security.`
    },
    {
      id: 'indemnity',
      title: 'Indemnity',
      icon: <FaGavel className="text-purple-600" />,
      content: `You agree to indemnify Adiyogi Foundation, its affiliates, officers, members, and other persons involved in the creation of this Website for all damages, losses and costs (including legal costs) which arise out of or relate to your use of this Website, donations, or product purchases.`
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      icon: <FaExclamationTriangle className="text-purple-600" />,
      content: `In no event shall Adiyogi Foundation, including its affiliates and their respective officers, members, agents and partners be liable for any loss or damage whatsoever including direct, indirect, punitive, incidental and consequential damages, lost profits, or damages resulting from the use or inability to use the Website.`
    },
    {
      id: 'warranty',
      title: 'Warranty',
      icon: <FaExclamationTriangle className="text-purple-600" />,
      content: `All content, information and materials on this Website are provided to you on an "AS IS" and "AS AVAILABLE" basis, without warranty or guarantee of any kind.`
    },
    {
      id: 'grievances',
      title: 'Redressal of Grievances',
      icon: <FaEnvelope className="text-purple-600" />,
      content: `If you have any complaints or concerns with regards to content of this Website or to report alleged infringement of your rights in any way, or any abuse of applicable laws, breach of Terms of this Website, you may write to us at:

📧 privacy@adiyogifoundation.org.in (Grievance Officer)
📧 info@adiyogifoundation.org.in (General Queries / Donations / Products)
📍 Adiyogi Foundation, Badlapur, Mumbai- 421503, India.`
    },
    {
      id: 'jurisdiction',
      title: 'Applicable Law and Jurisdiction',
      icon: <FaBalanceScale className="text-purple-600" />,
      content: `These Terms and Conditions are governed by and to be interpreted in accordance with the laws of India. You agree to submit to the exclusive jurisdiction of the courts located at Mumbai, India for any matter or disputes.`
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Adiyogi Foundation</title>
        <meta name="description" content="Read the terms and conditions for using Adiyogi Foundation's website, seva programs, products, and services." />
        <meta name="keywords" content="Adiyogi Foundation Terms, Conditions, Policies, Rules" />
        <link rel="canonical" href="https://www.adiyogifoundation.org.in/term-conditions" />

        <meta property="og:title" content="Terms & Conditions | Adiyogi Foundation" />
        <meta property="og:description" content="Review the policies, rules, and terms of using Adiyogi Foundation's website and services." />
        <meta property="og:url" content="https://www.adiyogifoundation.org.in/term-conditions" />
        <meta property="og:image" content="https://www.adiyogifoundation.org.in/Adiyogifoundation logo_02.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms & Conditions | Adiyogi Foundation" />
        <meta name="twitter:description" content="Read Adiyogi Foundation's terms and conditions for seva, products, and services." />
        <meta name="twitter:image" content="https://www.adiyogifoundation.org.in/Adiyogifoundation logo_02.png" />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 py-8 font-sans text-gray-800 relative bg-white">
        {/* Back to Home Button */}
        <Link
          to="/"
          className="fixed top-3 left-3 z-50 inline-flex items-center gap-1.5 
                     px-3 py-1.5 text-xs
                     rounded-full shadow bg-[#6a0dad]
                     text-white font-medium
                     transition-transform duration-300 hover:scale-105 hover:shadow-md
                     focus:outline-none focus:ring-2 focus:ring-[#6a0dad] focus:ring-offset-2"
          aria-label="Back to Home"
        >
          <FaArrowLeft size={14} className="opacity-90" />
          <span>Back</span>
        </Link>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 bg-[#6a0dad] text-white p-3 rounded-full shadow-lg hover:bg-[#ff00ff] transition-all duration-300 hover:scale-110"
            aria-label="Back to top"
          >
            <FaArrowUp size={18} />
          </button>
        )}

        {/* Header */}
        <header className="text-center mb-8 pt-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#6a0dad] mb-2">Terms & Conditions</h1>
          <div className="w-16 h-1 bg-[#6a0dad] mx-auto my-4"></div>
          <p className="text-[#6a0dad] font-semibold">www.adiyogifoundation.org.in</p>
          <p className="text-gray-500 italic mt-2">Last Updated: {new Date().toLocaleDateString()}</p>
        </header>

        {/* Introduction */}
        <div className="mb-8">
          <div className="bg-purple-50 border-l-4 border-[#6a0dad] p-6 rounded">
            <h3 className="text-xl font-semibold text-[#6a0dad] flex items-center gap-2">
              <FaExclamationTriangle className="text-[#6a0dad]" /> Please Read Carefully
            </h3>
            <p className="mt-2">
              By accessing, browsing, donating, or purchasing through this Website, you agree and 
              acknowledge that you have read, understood and agree to be bound by the following terms 
              and conditions of use ("Terms").
            </p>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-4 mb-8">
          {termsData.map((section) => (
            <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <div 
                className="flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
                onClick={() => toggleSection(section.id)}
              >
                <div className="flex items-center gap-3">
                  {section.icon}
                  <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
                </div>
                <span className="text-gray-500">
                  {activeSections[section.id] ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
              <div 
                className={`overflow-hidden transition-all duration-300 ${activeSections[section.id] ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="p-4 bg-white">
                  {section.content.split('\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-3 text-gray-700">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center pt-6 border-t border-gray-200">
          <p className="text-gray-600">© {new Date().getFullYear()} Adiyogi Foundation. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default TermsAndConditions;