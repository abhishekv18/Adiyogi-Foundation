import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCookie, FaCookieBite, FaShieldAlt, FaChartBar, 
  FaAd, FaCog, FaBan, FaChevronDown, FaChevronUp,
  FaArrowLeft, FaArrowUp, FaExternalLinkAlt
} from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const CookiePolicy = () => {
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

  const cookieData = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: <FaCookie className="text-purple-600" />,
      content: `Adiyogi Foundation ("we", "us", "our") is committed to protecting and respecting your privacy. We will always take reasonable and appropriate measures to prevent the unauthorized use or disclosure of your ("you", "your" or "user") personal data.

Adiyogi Foundation uses cookies across https://adiyogifoundation.org.in/ to save your session as you browse this website, store your preferences, perform statistical analytics, deliver personalized advertisements to you, and enhance your browsing experience.

This Cookie Policy explains how and why we use cookies and the choices you have. This Cookie Policy should be read together with our Privacy Policy and Terms and Conditions. Except as otherwise stated in this policy, the Privacy Policy shall govern the way we collect and process data via cookies.

This policy describes the usage of information captured using cookies that Adiyogi Foundation collects from you when you access or use the Website.`
    },
    {
      id: 'what-are-cookies',
      title: 'What are Cookies?',
      icon: <FaCookieBite className="text-purple-600" />,
      content: `A cookie is a small data or text file that Adiyogi Foundation stores on your computer, mobile, tablet, or other devices when you visit our website, to the extent you agree to such storage.

The saving of a cookie on a device is governed by the user-defined settings of the web browser or device.`
    },
    {
      id: 'why-cookies',
      title: 'Why Do We Need These Cookies?',
      icon: <FaShieldAlt className="text-purple-600" />,
      content: `We use cookies to offer you a more tailored experience by understanding and remembering your browsing preferences. We use cookies for various purposes such as:

• To provide you with our services and offer a better browsing experience.
• To identify your browser and device.
• To provide you with personalized advertisements.
• To provide you with personalized recommendations.
• To distinguish you from other users and improve your browsing experience.
• To store your preferences.
• For fraud detection and prevention.
• To measure and analyze website usage and improve ergonomics and visibility of content.
• To analyze visits to our pages in real time and offer varied ads suited to user interests.
• Cookies may also be saved by social media tools if you use such functionalities (e.g., Facebook, Google, Twitter, LinkedIn).`
    },
    {
      id: 'cookie-categories',
      title: 'What Categories of Cookies Do We Collect?',
      icon: <FaChartBar className="text-purple-600" />,
      content: `We use different types of cookies for various purposes:`,
      table: {
        headers: ['Sr. No', 'Cookie Category', 'Description'],
        rows: [
          {
            number: '1',
            category: 'Necessary',
            description: 'Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.'
          },
          {
            number: '2',
            category: 'Preference',
            description: 'Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.'
          },
          {
            number: '3',
            category: 'Statistics',
            description: 'Statistic cookies help website owners understand how visitors interact with websites by collecting and reporting information anonymously.'
          },
          {
            number: '4',
            category: 'Marketing',
            description: 'Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.'
          }
        ]
      }
    },
    {
      id: 'your-choices',
      title: 'Your Choices: Accepting or Refusing Cookies',
      icon: <FaCog className="text-purple-600" />,
      content: `You have a choice on how we use cookies with respect to your use of the Platform and access to our services. Please note that if you limit our ability to use cookies, you may not be able to access all or parts of our website.

The saving of a cookie on a device is governed by the user-defined settings of your browser or device. If you have accepted the option to allow the collecting and saving of cookies through your browser or device, they will be integrated into the pages and content you have viewed and may be temporarily stored in a dedicated location on your browser or device. Such cookies will be readable only by their issuer.`
    },
    {
      id: 'disabling-cookies',
      title: 'Disabling Cookies',
      icon: <FaBan className="text-purple-600" />,
      content: `The effect of disabling cookies depends on which cookies you disable. In general, the Website may not operate properly if all cookies are switched off. If you disable all cookies, you may deteriorate your overall user experience since it may no longer be personalized to you, and certain customized settings (like login information) may not be saved.

All modern browsers allow you to change your cookie preferences through their settings. These settings are typically found in the "options" or "preferences" menu. The following links may be helpful:

• Google Chrome
• Safari
• Firefox
• Microsoft Edge

To find information relating to other browsers, please visit the browser developer's website.

If you are primarily concerned about cookies being generated by advertising partners, you may be able to turn these off by going to an online preferences management site or other similar service.`
    },
    {
      id: 'device-info',
      title: 'Device Information',
      icon: <FaCog className="text-purple-600" />,
      content: `Any mobile, browser, or online platform on which you access and use our services comes pre-loaded with certain permissions, without which we cannot provide you with the services. Each platform has its own permission system for procuring your consent. Depending on the platform you use (Web, Android, iOS, Windows, etc.), your device or browser will either alert you or require your consent before proceeding.`
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      icon: <FaShieldAlt className="text-purple-600" />,
      content: `Please see our Privacy Policy for more information on how you can request access, rectification, and erasure, and for any other queries regarding your device information that we have collected and processed.`
    },
    {
      id: 'contact',
      title: 'Contact Information',
      icon: <FaCookie className="text-purple-600" />,
      content: `If you have any queries regarding this Cookie Policy, please reach out to us at:

📩 Privacy@adiyogifoundation.org.in`
    }
  ];

  const formatContent = (content) => {
    return content.split('\n').map((line, index) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine === '') {
        return <br key={index} />;
      }
      
      // Handle bullet points
      if (trimmedLine.startsWith('• ')) {
        return (
          <div key={index} className="flex items-start mb-2 ml-4">
            <span className="mr-2 mt-1">•</span>
            <span className="text-gray-700 flex-1">{trimmedLine.substring(2)}</span>
          </div>
        );
      }
      
      // Handle email/contact info
      if (trimmedLine.includes('📩')) {
        return (
          <div key={index} className="flex items-center mb-2">
            <span className="text-lg mr-2">📩</span>
            <span className="text-gray-700 font-medium">{trimmedLine.substring(2)}</span>
          </div>
        );
      }
      
      // Regular text
      return (
        <p key={index} className="mb-3 text-gray-700">
          {trimmedLine}
        </p>
      );
    });
  };

  const browserLinks = {
    'Google Chrome': 'https://support.google.com/chrome/answer/95647',
    'Safari': 'https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac',
    'Firefox': 'https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences',
    'Microsoft Edge': 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09'
  };

  return (
    <>
      <Helmet>
        <title>Cookie Policy | Adiyogi Foundation</title>
        <meta name="description" content="Learn about how Adiyogi Foundation uses cookies to enhance your browsing experience and your choices regarding cookie settings." />
        <meta name="keywords" content="Adiyogi Foundation Cookie Policy, Cookies, Privacy, Website Tracking, Browser Settings" />
        <link rel="canonical" href="https://www.adiyogifoundation.org.in/cookie-policy" />

        <meta property="og:title" content="Cookie Policy | Adiyogi Foundation" />
        <meta property="og:description" content="Understand how we use cookies and manage your preferences for a better browsing experience." />
        <meta property="og:url" content="https://www.adiyogifoundation.org.in/cookie-policy" />
        <meta property="og:image" content="https://www.adiyogifoundation.org.in/Adiyogifoundation logo_02.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cookie Policy | Adiyogi Foundation" />
        <meta name="twitter:description" content="Learn about cookie usage and management on Adiyogi Foundation's website." />
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
          <div className="flex justify-center items-center gap-3 mb-4">
            <FaCookie className="text-3xl text-[#6a0dad]" />
            <h1 className="text-3xl md:text-4xl font-bold text-[#6a0dad]">Cookie Policy</h1>
          </div>
          <div className="w-16 h-1 bg-[#6a0dad] mx-auto my-4"></div>
          <p className="text-[#6a0dad] font-semibold">www.adiyogifoundation.org.in</p>
          <p className="text-gray-500 italic mt-2">Last Updated: {new Date().toLocaleDateString()}</p>
        </header>

        {/* Introduction Banner */}
        <div className="mb-8">
          <div className="bg-purple-50 border-l-4 border-[#6a0dad] p-6 rounded">
            <h3 className="text-xl font-semibold text-[#6a0dad] flex items-center gap-2">
              <FaCookieBite className="text-[#6a0dad]" /> About Our Cookie Usage
            </h3>
            <p className="mt-2">
              This policy explains how we use cookies and similar technologies to enhance your experience 
              on our website. By using our website, you consent to our use of cookies as described in this policy.
            </p>
          </div>
        </div>

        {/* Cookie Policy Sections */}
        <div className="space-y-4 mb-8">
          {cookieData.map((section) => (
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
                className={`overflow-hidden transition-all duration-300 ${activeSections[section.id] ? 'max-h-[2000px]' : 'max-h-0'}`}
              >
                <div className="p-4 bg-white">
                  {formatContent(section.content)}
                  
                  {/* Render table for cookie categories */}
                  {section.table && (
                    <div className="mt-4 overflow-x-auto">
                      <table className="min-w-full border border-gray-300">
                        <thead>
                          <tr className="bg-gray-100">
                            {section.table.headers.map((header, index) => (
                              <th 
                                key={index}
                                className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800"
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, rowIndex) => (
                            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              <td className="border border-gray-300 px-4 py-3 font-medium">{row.number}</td>
                              <td className="border border-gray-300 px-4 py-3 font-medium text-[#6a0dad]">{row.category}</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700">{row.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  
                  {/* Render browser links for disabling cookies section */}
                  {section.id === 'disabling-cookies' && (
                    <div className="mt-4 space-y-2">
                      {Object.entries(browserLinks).map(([browser, link]) => (
                        <a
                          key={browser}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[#6a0dad] hover:text-[#ff00ff] transition-colors"
                        >
                          • {browser} <FaExternalLinkAlt size={12} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
    

        {/* Footer */}
        <footer className="text-center pt-6 border-t border-gray-200">
          <p className="text-gray-600">© {new Date().getFullYear()} Adiyogi Foundation. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default CookiePolicy;