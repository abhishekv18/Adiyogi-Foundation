        
// import React, { useEffect, useState } from 'react';
// import { Heart, Phone, QrCode, Building, CreditCard, Star, Quote, Users, Target, CheckCircle, Copy, MessageCircle } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
// const DonationPage = () => {




// const navigate=useNavigate();

//  const user = useSelector((state) => state.auth.user);

//   useEffect(() => {
//     if (user) {
//       navigate('/admin-dashboard');
//     }
//   }, [user]);



//   const [activeTab, setActiveTab] = useState('qr');
//   const [copiedText, setCopiedText] = useState('');

//   const copyToClipboard = (text, type) => {
//     navigator.clipboard.writeText(text);
//     setCopiedText(type);
//     setTimeout(() => setCopiedText(''), 2000);
//   };

//   const donationMethods = [
//     { id: 'qr', label: 'QR Code', icon: QrCode },
//     { id: 'upi', label: 'UPI ID', icon: CreditCard },
//     { id: 'bank', label: 'Bank Transfer', icon: Building },
//     { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle }
//   ];

//   const testimonials = [
//     {
//       name: "Priya Sharma",
//       location: "Mumbai, Maharashtra",
//       donation: "₹5,000",
//       text: "Supporting Adiyogi Foundation has been the most meaningful contribution of my life. Their temple restoration work is truly divine.",
//       rating: 5
//     },
//     {
//       name: "Rajesh Kumar",
//       location: "Chennai, Tamil Nadu", 
//       donation: "₹10,000",
//       text: "The spiritual programs have transformed my life. I'm honored to support this sacred mission of preserving our heritage.",
//       rating: 5
//     },
//     {
//       name: "Meera Patel",
//       location: "Ahmedabad, Gujarat",
//       donation: "₹25,000",
//       text: "Every rupee donated helps restore our ancient temples and keeps our spiritual traditions alive for future generations.",
//       rating: 5
//     }
//   ];

//   const impactStats = [
//     { number: "₹2,25,500+", label: "Total Donations Received", icon: Target },
//     { number: "2+", label: "Temples Restored", icon: Building },
//     { number: "500+", label: "Lives Transformed", icon: Users },
//     { number: "2+", label: "Active Programs", icon: CheckCircle }
//   ];

//   return (
//     <>
//     <Helmet>
//   <title>Donate | Adiyogi Foundation</title>
//   <meta name="description" content="Support Adiyogi Foundation’s mission by making a donation towards Dharma revival, seva programs, and spiritual initiatives." />
//   <meta name="keywords" content="Donate Adiyogi Foundation, Support Dharma, Spiritual Donations, Charity India" />
//   <link rel="canonical" href="https://www.adiyogifoundation.org.in/donate" />

//   <meta property="og:title" content="Donate | Adiyogi Foundation" />
//   <meta property="og:description" content="Contribute to Adiyogi Foundation and support Dharma revival programs." />
//   <meta property="og:url" content="https://www.adiyogifoundation.org.in/donate" />
//   <meta property="og:image" content="https://www.adiyogifoundation.org.in/Adiyogifoundation logo_02.png" />

//   <meta name="twitter:card" content="summary_large_image" />
//   <meta name="twitter:title" content="Donate | Adiyogi Foundation" />
//   <meta name="twitter:description" content="Make a donation to support the Dharma revival initiatives of Adiyogi Foundation." />
//   <meta name="twitter:image" content="https://www.adiyogifoundation.org.in/Adiyogifoundation logo_02.png" />
// </Helmet>
//   <div className="min-h-screen" style={{ backgroundColor: '#FDF8F8' }}>


    
// <section className="py-12 sm:py-16 md:py-20 px-4 relative overflow-hidden">
//   {/* Video Background */}
//   <div className="absolute inset-0">
//     <video
//       autoPlay
//       muted
//       loop
//       playsInline
//       className="w-full h-full object-cover"
//       poster="/WhatsApp Image 2025-07-30 at 17.31.29_425d6f60.jpg"
//     >
//       <source src="/Donate .mp4" type="video/mp4" />
//       {/* Fallback image if video doesn't load */}
//       <img
//         src="/WhatsApp Image 2025-07-30 at 17.31.29_425d6f60.jpg"
//         alt="Sacred Temple Background"
//         className="w-full h-full object-cover"
//       />
//     </video>
    
//     {/* Gradient Overlay */}
//     <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-red-800/30 z-0"></div>
//   </div>

//   {/* Main Content */}
//   <div className="max-w-6xl mx-auto text-center relative z-10">
//     {/* Badge */}
//     <div className="inline-flex items-center space-x-2 mb-4 sm:mb-6 px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-[#F4E8E8] bg-[#FFFEF7]">
//       <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#C41E3A]" />
//       <span className="text-xs sm:text-sm font-medium text-[#C41E3A]">
//         Join Our Sacred Mission
//       </span>
//     </div>

//     {/* Title */}
//     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-800">
//       Support the Divine
//       <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-1 sm:mt-2 text-[#C41E3A]">
//         Transformation
//       </span>
//     </h1>

//     <div className="bg-[#FFFEF7]/95 rounded-2xl sm:rounded-3xl px-3 py-6 sm:px-4 sm:py-7 md:px-7 md:py-12 mt-2 shadow-2xl backdrop-blur-sm mb-8 sm:mb-12 max-w-3xl mx-auto">
//       <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 leading-relaxed text-[#6B4B4B] text-center">
//         Your generous donation helps us restore ancient temples, conduct spiritual programs,
//         and spread the divine wisdom of Adiyogi to seekers worldwide.
//       </p>

//       <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
//         <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-[#F4E8E8] bg-[#FFFEF7]">
//           <span className="text-xs sm:text-sm text-[#6B4B4B]">Suggested Amount:</span>
//           <span className="font-bold ml-2 text-[#C41E3A]">₹1,001</span>
//         </div>
//         <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-[#F4E8E8] bg-[#FFFEF7]">
//           <span className="text-xs sm:text-sm text-[#6B4B4B]">Or any amount that</span>
//           <span className="font-bold ml-2 text-[#C41E3A]">touches your heart</span>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//       {/* Impact Stats */}
//       <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
//           {impactStats.map((stat, index) => (
//             <div key={index} className="text-center p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FFFEF7', boxShadow: '0 4px 12px rgba(196, 30, 58, 0.15)' }}>
//               <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4" style={{ color: '#C41E3A' }} />
//               <div className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2" style={{ color: '#C41E3A' }}>{stat.number}</div>
//               <div className="text-xs sm:text-sm" style={{ color: '#6B4B4B' }}>{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Donation Methods */}
//       <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
//         <div className="text-center mb-8 sm:mb-12">
//           <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: '#2C2C2C' }}>Choose Your Donation Method</h2>
//           <p className="text-base sm:text-lg" style={{ color: '#6B4B4B' }}>Select the most convenient way to contribute to our sacred mission.</p>
//         </div>

//         {/* Tab Navigation */}
//         <div className="flex flex-wrap justify-center mb-6 sm:mb-8 gap-2">
//           {donationMethods.map((method) => (
//             <button
//               key={method.id}
//               onClick={() => setActiveTab(method.id)}
//               className={`flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-200 ${
//                 activeTab === method.id 
//                   ? 'text-white shadow-lg' 
//                   : 'hover:text-white'
//               }`}
//               style={{ 
//                 backgroundColor: activeTab === method.id ? '#C41E3A' : '#FFFEF7',
//                 border: `1px solid ${activeTab === method.id ? '#C41E3A' : '#F4E8E8'}`,
//                 boxShadow: activeTab === method.id ? '0 2px 8px rgba(139, 21, 56, 0.25)' : 'none',
//                 color: activeTab === method.id ? 'white' : '#6B4B4B'
//               }}
//               onMouseEnter={(e) => {
//                 if (activeTab !== method.id) {
//                   e.target.style.backgroundColor = '#C41E3A';
//                   e.target.style.color = 'white';
//                 }
//               }}
//               onMouseLeave={(e) => {
//                 if (activeTab !== method.id) {
//                   e.target.style.backgroundColor = '#FFFEF7';
//                   e.target.style.color = '#6B4B4B';
//                 }
//               }}
//             >
//               <method.icon className="w-4 h-4 sm:w-5 sm:h-5" />
//               <span className="text-sm sm:text-base">{method.label}</span>
//             </button>
//           ))}
//         </div>

//         {/* Tab Content */}
//         <div className="p-6 sm:p-8 rounded-xl" style={{ backgroundColor: '#FFFEF7', boxShadow: '0 4px 12px rgba(196, 30, 58, 0.15)' }}>
//           {activeTab === 'qr' && (
//             <div className="text-center">
//               <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: '#2C2C2C' }}>Scan QR Code to Donate</h3>
//               <div className="inline-block p-4 sm:p-6 rounded-xl mb-4 sm:mb-6" style={{ backgroundColor: '#FDF8F8', border: '2px solid #C41E3A' }}>
//                 <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto bg-white rounded-lg flex items-center justify-center">
//                   <img
//                   src='/WhatsApp Image 2025-08-03 at 14.22.14_ea0b4173.jpg'
//                   className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36" style={{ color: '#C41E3A' }} 
//                   />
                 
//                 </div>
//               </div>
//               <p className="text-base sm:text-lg mb-3 sm:mb-4" style={{ color: '#6B4B4B' }}>
//                 Scan this QR code with any UPI app like GPay, PhonePe, or Paytm
//               </p>
//               <div className="flex justify-center space-x-4">
//                 <div className="px-3 sm:px-4 py-2 rounded-lg" style={{ backgroundColor: '#F4E8E8' }}>
//                   <span className="font-medium text-sm sm:text-base" style={{ color: '#C41E3A' }}>UPI ID: 9175033022@pz</span>
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeTab === 'upi' && (
//             <div className="text-center">
//               <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: '#2C2C2C' }}>UPI Payment Details</h3>
//               <div className="max-w-md mx-auto space-y-4">
//                 <div className="p-4 rounded-lg" style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
//                   <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>UPI ID</label>
//                   <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#FFFEF7', border: '1px solid #F4E8E8' }}>
//                     <span className="font-mono font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>9175033022@pz</span>
//                     <button
//                       onClick={() => copyToClipboard('9175033022@pz', 'upi')}
//                       className="p-2 rounded-lg transition-colors duration-200"
//                       style={{ backgroundColor: copiedText === 'upi' ? '#8B1538' : '#C41E3A', color: 'white' }}
//                     >
//                       <Copy className="w-4 h-4" />
//                     </button>
//                   </div>
//                   {copiedText === 'upi' && (
//                     <p className="text-sm mt-2" style={{ color: '#C41E3A' }}>UPI ID copied to clipboard!</p>
//                   )}
//                 </div>
                
//                 <div className="p-4 rounded-lg" style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
//                   <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>Beneficiary Name</label>
//                   <div className="p-3 rounded-lg" style={{ backgroundColor: '#FFFEF7', border: '1px solid #F4E8E8' }}>
//                     <span className="font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>Adiyogi Foundation</span>
//                   </div>
//                 </div>

//                 <div className="text-sm p-4 rounded-lg" style={{ backgroundColor: '#F4E8E8', color: '#6B4B4B' }}>
//                   <p>You can use any UPI app like Google Pay, PhonePe, Paytm, or BHIM to make your donation.</p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeTab === 'bank' && (
//             <div>
//               <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center" style={{ color: '#2C2C2C' }}>Bank Transfer Details</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
//                 <div className="space-y-4">
//                   <div className="p-4 rounded-lg" style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
//                     <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>Account Name</label>
//                     <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#FFFEF7', border: '1px solid #F4E8E8' }}>
//                       <span className="font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>Adiyogi Foundation</span>
//                       <button
//                         onClick={() => copyToClipboard('Adiyogi Foundation', 'account')}
//                         className="p-2 rounded-lg transition-colors duration-200 flex-shrink-0"
//                         style={{ backgroundColor: copiedText === 'account' ? '#8B1538' : '#C41E3A', color: 'white' }}
//                       >
//                         <Copy className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>

//                   <div className="p-4 rounded-lg" style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
//                     <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>Account Number</label>
//                     <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#FFFEF7', border: '1px solid #F4E8E8' }}>
//                       <span className="font-mono font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>50200112612132</span>
//                       <button
//                         onClick={() => copyToClipboard('50200112612132', 'accno')}
//                         className="p-2 rounded-lg transition-colors duration-200 flex-shrink-0"
//                         style={{ backgroundColor: copiedText === 'accno' ? '#8B1538' : '#C41E3A', color: 'white' }}
//                       >
//                         <Copy className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>

//                   <div className="p-4 rounded-lg" style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
//                     <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>IFSC Code</label>
//                     <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#FFFEF7', border: '1px solid #F4E8E8' }}>
//                       <span className="font-mono font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>HDFC0008382</span>
//                       <button
//                         onClick={() => copyToClipboard('HDFC0008382', 'ifsc')}
//                         className="p-2 rounded-lg transition-colors duration-200 flex-shrink-0"
//                         style={{ backgroundColor: copiedText === 'ifsc' ? '#8B1538' : '#C41E3A', color: 'white' }}
//                       >
//                         <Copy className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   <div className="p-4 rounded-lg" style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
//                     <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>Bank Name</label>
//                     <div className="p-3 rounded-lg" style={{ backgroundColor: '#FFFEF7', border: '1px solid #F4E8E8' }}>
//                       <span className="font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>HDFC BANK</span>
//                     </div>
//                   </div>

//                   <div className="p-4 rounded-lg" style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
//                     <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>Branch</label>
//                     <div className="p-3 rounded-lg" style={{ backgroundColor: '#FFFEF7', border: '1px solid #F4E8E8' }}>
//                       <span className="font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>Badlapur West Branch</span>
//                     </div>
//                   </div>

//                   <div className="p-4 rounded-lg" style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
//                     <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>Account Type</label>
//                     <div className="p-3 rounded-lg" style={{ backgroundColor: '#FFFEF7', border: '1px solid #F4E8E8' }}>
//                       <span className="font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>Current Account</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {copiedText && (
//                 <div className="mt-4 text-center">
//                   <p className="text-sm" style={{ color: '#C41E3A' }}>Details copied to clipboard!</p>
//                 </div>
//               )}

//               <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#F4E8E8' }}>
//                 <p className="text-sm" style={{ color: '#6B4B4B' }}>
//                   <strong>Note:</strong> Please mention "Donation for Adiyogi Foundation" in the transfer remarks for easy identification.
//                 </p>
//               </div>
//             </div>
//           )}

//           {activeTab === 'whatsapp' && (
//             <div className="text-center">
//               <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: '#2C2C2C' }}>Donate via WhatsApp</h3>
//               <div className="max-w-md mx-auto">
//                 <div className="p-4 sm:p-6 rounded-xl mb-4 sm:mb-6" style={{ backgroundColor: '#FDF8F8', border: '2px solid #C41E3A' }}>
//                   <MessageCircle className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" style={{ color: '#C41E3A' }} />
//                   <h4 className="text-lg sm:text-xl font-bold mb-2" style={{ color: '#2C2C2C' }}>Connect with Us</h4>
//                   <p className="text-sm mb-3 sm:mb-4" style={{ color: '#6B4B4B' }}>
//                     Send us a message on WhatsApp and our team will guide you through the donation process
//                   </p>
//                   <div className="p-3 rounded-lg mb-3 sm:mb-4" style={{ backgroundColor: '#FFFEF7', border: '1px solid #F4E8E8' }}>
//                     <div className="flex items-center justify-between">
//                       <span className="font-mono font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>+91 9175033022</span>
//                       <button
//                         onClick={() => copyToClipboard('+91 9175033022', 'whatsapp')}
//                         className="p-2 rounded-lg transition-colors duration-200 flex-shrink-0"
//                         style={{ backgroundColor: copiedText === 'whatsapp' ? '#8B1538' : '#C41E3A', color: 'white' }}
//                       >
//                         <Copy className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                   {copiedText === 'whatsapp' && (
//                     <p className="text-sm mb-3 sm:mb-4" style={{ color: '#C41E3A' }}>Phone number copied!</p>
//                   )}
//                   <a
//                     href="https://wa.me/919175033022?text=Hello%2C%20I%20want%20to%20donate%20to%20Adiyogi%20Foundation"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-white transition-all duration-200"
//                     style={{ backgroundColor: '#25D366', boxShadow: '0 2px 8px rgba(37, 211, 102, 0.25)' }}
//                     onMouseEnter={(e) => e.target.style.backgroundColor = '#1DA851'}
//                     onMouseLeave={(e) => e.target.style.backgroundColor = '#25D366'}
//                   >
//                     <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
//                     <span className="text-sm sm:text-base">Open WhatsApp</span>
//                   </a>
//                 </div>
//                 <div className="text-sm p-4 rounded-lg" style={{ backgroundColor: '#F4E8E8', color: '#6B4B4B' }}>
//                   <p>Our support team is available from 9 AM to 6 PM (IST) to assist you with your donation.</p>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Testimonials */}
//       <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
//         <div className="text-center mb-8 sm:mb-12">
//           <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: '#2C2C2C' }}>What Our Donors Say</h2>
//           <p className="text-base sm:text-lg" style={{ color: '#6B4B4B' }}>Hear from those who have joined our sacred mission.</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FFFEF7', boxShadow: '0 4px 12px rgba(196, 30, 58, 0.15)' }}>
//               <div className="flex items-center mb-3 sm:mb-4">
//                 <Quote className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3" style={{ color: '#C41E3A' }} />
//                 <div className="flex space-x-1">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" style={{ color: '#C41E3A' }} />
//                   ))}
//                 </div>
//               </div>
//               <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{testimonial.text}</p>
//               <div className="border-t pt-3 sm:pt-4" style={{ borderColor: '#F4E8E8' }}>
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <p className="font-semibold text-sm sm:text-base" style={{ color: '#2C2C2C' }}>{testimonial.name}</p>
//                     <p className="text-xs sm:text-sm" style={{ color: '#6B4B4B' }}>{testimonial.location}</p>
//                   </div>
//                   <div className="text-right">
//                     <p className="font-bold text-sm sm:text-base" style={{ color: '#C41E3A' }}>{testimonial.donation}</p>
//                     <p className="text-xs" style={{ color: '#6B4B4B' }}>Donated</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Contact Section */}
//       <div className="py-12 sm:py-16" style={{ backgroundColor: '#FFFEF7' }}>
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{ color: '#2C2C2C' }}>Need Help?</h2>
//           <p className="text-base sm:text-lg mb-6 sm:mb-8" style={{ color: '#6B4B4B' }}>
//             Our dedicated support team is here to assist you with your donation.
//           </p>
         
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

//   {/* Call Us */}
//   <a href="tel:+919175033022" className="block">
//     <div className="p-4 sm:p-6 rounded-xl cursor-pointer hover:shadow-md transition"
//          style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
//       <Phone className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4" style={{ color: '#C41E3A' }} />
//       <h3 className="font-bold mb-2 text-base sm:text-lg" style={{ color: '#2C2C2C' }}>Call Us</h3>
//       <p className="text-sm sm:text-base" style={{ color: '#6B4B4B' }}>+91 9175033022</p>
//       <p className="text-xs sm:text-sm mt-1" style={{ color: '#6B4B4B' }}>Mon-Sat: 9 AM - 6 PM</p>
//     </div>
//   </a>

//   {/* WhatsApp */}
//   <a
//      href="https://wa.me/919175033022?text=Hello%2C%20I%20want%20to%20donate%20to%20Adiyogi%20Foundation"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="block"
//   >
//     <div className="p-6 rounded-xl cursor-pointer hover:shadow-md transition"
//          style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
//       <MessageCircle className="w-8 h-8 mx-auto mb-4" style={{ color: '#C41E3A' }} />
//       <h3 className="font-bold mb-2" style={{ color: '#2C2C2C' }}>WhatsApp</h3>
//       <p style={{ color: '#6B4B4B' }}>+91 9175033022</p>
//       <p className="text-sm mt-1" style={{ color: '#6B4B4B' }}>Quick response guaranteed</p>
//     </div>
//   </a>

// </div>

//         </div>
//       </div>

//     </div>
//     </>
  
//   );
// };

// export default DonationPage;
import React, { useEffect, useState } from 'react';
import { Heart, Phone, QrCode, Building, CreditCard, Star, Quote, Users, Target, CheckCircle, Copy, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
const DonationPage = () => {




const navigate=useNavigate();

 const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      navigate('/admin-dashboard');
    }
  }, [user]);



  const [activeTab, setActiveTab] = useState('qr');
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(''), 2000);
  };

  const donationMethods = [
    { id: 'qr', label: 'QR Code', icon: QrCode },
    { id: 'upi', label: 'UPI ID', icon: CreditCard },
    { id: 'bank', label: 'Bank Transfer', icon: Building },
    { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      donation: "₹5,000",
      text: "Supporting Adiyogi Foundation has been the most meaningful contribution of my life. Their temple restoration work is truly divine.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      location: "Chennai, Tamil Nadu", 
      donation: "₹10,000",
      text: "The spiritual programs have transformed my life. I'm honored to support this sacred mission of preserving our heritage.",
      rating: 5
    },
    {
      name: "Meera Patel",
      location: "Ahmedabad, Gujarat",
      donation: "₹25,000",
      text: "Every rupee donated helps restore our ancient temples and keeps our spiritual traditions alive for future generations.",
      rating: 5
    }
  ];

  const impactStats = [
    { number: "₹2,25,500+", label: "Total Donations Received", icon: Target },
    { number: "2+", label: "Temples Restored", icon: Building },
    { number: "500+", label: "Lives Transformed", icon: Users },
    { number: "2+", label: "Active Programs", icon: CheckCircle }
  ];

  return (
    <>
    <Helmet>
  <title>Donate | Adiyogi Foundation</title>
  <meta name="description" content="Support Adiyogi Foundation's mission by making a donation towards Dharma revival, seva programs, and spiritual initiatives." />
  <meta name="keywords" content="Donate Adiyogi Foundation, Support Dharma, Spiritual Donations, Charity India" />
  <link rel="canonical" href="https://www.adiyogifoundation.org.in/donate" />

  <meta property="og:title" content="Donate | Adiyogi Foundation" />
  <meta property="og:description" content="Contribute to Adiyogi Foundation and support Dharma revival programs." />
  <meta property="og:url" content="https://www.adiyogifoundation.org.in/donate" />
  <meta property="og:image" content="https://www.adiyogifoundation.org.in/INSTA.jpg" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Donate | Adiyogi Foundation" />
  <meta name="twitter:description" content="Make a donation to support the Dharma revival initiatives of Adiyogi Foundation." />
  <meta name="twitter:image" content="https://www.adiyogifoundation.org.in/INSTA.jpg" />
</Helmet>
  <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>


    
<section className="py-12 sm:py-16 md:py-20 px-4 relative overflow-hidden">
  {/* Video Background */}
  <div className="absolute inset-0">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
      poster="/WhatsApp Image 2025-07-30 at 17.31.29_425d6f60.jpg"
    >
      <source src="/Donate .mp4" type="video/mp4" />
      {/* Fallback image if video doesn't load */}
      {/* <img
        src="/WhatsApp Image 2025-07-30 at 17.31.29_425d6f60.jpg"
        alt="Sacred Temple Background"
        className="w-full h-full object-cover"
      /> */}
    </video>
    
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-purple-800/30 z-0"></div>
  </div>

  {/* Main Content */}
  <div className="max-w-6xl mx-auto text-center relative z-10">
    {/* Badge */}
    <div className="inline-flex items-center space-x-2 mb-4 sm:mb-6 px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-[#F0E6FF] bg-white">
      <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#6a0dad]" />
      <span className="text-xs sm:text-sm font-medium text-[#6a0dad]">
        Join Our Sacred Mission
      </span>
    </div>

    {/* Title */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-800">
      Support the Divine
      <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-1 sm:mt-2 text-[#6a0dad]">
        Transformation
      </span>
    </h1>

    <div className="bg-white/95 rounded-2xl sm:rounded-3xl px-3 py-6 sm:px-4 sm:py-7 md:px-7 md:py-12 mt-2 shadow-2xl backdrop-blur-sm mb-8 sm:mb-12 max-w-3xl mx-auto">
      <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 leading-relaxed text-[#6B4B4B] text-center">
        Your generous donation helps us restore ancient temples, conduct spiritual programs,
        and spread the divine wisdom of Adiyogi to seekers worldwide.
      </p>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
        <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-[#F0E6FF] bg-white">
          <span className="text-xs sm:text-sm text-[#6B4B4B]">Suggested Amount:</span>
          <span className="font-bold ml-2 text-[#6a0dad]">₹1,001</span>
        </div>
        <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-[#F0E6FF] bg-white">
          <span className="text-xs sm:text-sm text-[#6B4B4B]">Or any amount that</span>
          <span className="font-bold ml-2 text-[#6a0dad]">touches your heart</span>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Impact Stats */}
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 4px 12px rgba(106, 13, 173, 0.15)' }}>
              <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4" style={{ color: '#6a0dad' }} />
              <div className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2" style={{ color: '#6a0dad' }}>{stat.number}</div>
              <div className="text-xs sm:text-sm" style={{ color: '#6B4B4B' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Donation Methods */}
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: '#2C2C2C' }}>Choose Your Donation Method</h2>
          <p className="text-base sm:text-lg" style={{ color: '#6B4B4B' }}>Select the most convenient way to contribute to our sacred mission.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-6 sm:mb-8 gap-2">
          {donationMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setActiveTab(method.id)}
              className={`flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === method.id 
                  ? 'text-white shadow-lg' 
                  : 'hover:text-white'
              }`}
              style={{ 
                backgroundColor: activeTab === method.id ? '#6a0dad' : '#FFFFFF',
                border: `1px solid ${activeTab === method.id ? '#6a0dad' : '#F0E6FF'}`,
                boxShadow: activeTab === method.id ? '0 2px 8px rgba(90, 11, 165, 0.25)' : 'none',
                color: activeTab === method.id ? 'white' : '#6B4B4B'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== method.id) {
                  e.target.style.backgroundColor = '#6a0dad';
                  e.target.style.color = 'white';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== method.id) {
                  e.target.style.backgroundColor = '#FFFFFF';
                  e.target.style.color = '#6B4B4B';
                }
              }}
            >
              <method.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">{method.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8 rounded-xl" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 4px 12px rgba(106, 13, 173, 0.15)' }}>
          {activeTab === 'qr' && (
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: '#2C2C2C' }}>Scan QR Code to Donate</h3>
              <div className="inline-block p-4 sm:p-6 rounded-xl mb-4 sm:mb-6" style={{ backgroundColor: '#FFFFFF', border: '2px solid #6a0dad' }}>
                <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto bg-white rounded-lg flex items-center justify-center">
                  <img
                  src='/WhatsApp Image 2025-08-03 at 14.22.14_ea0b4173.jpg'
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36" style={{ color: '#6a0dad' }} 
                  />
                 
                </div>
              </div>
              <p className="text-base sm:text-lg mb-3 sm:mb-4" style={{ color: '#6B4B4B' }}>
                Scan this QR code with any UPI app like GPay, PhonePe, or Paytm
              </p>
              <div className="flex justify-center space-x-4">
                <div className="px-3 sm:px-4 py-2 rounded-lg" style={{ backgroundColor: '#F8F0FF' }}>
                  <span className="font-medium text-sm sm:text-base" style={{ color: '#6a0dad' }}>UPI ID: 9175033022@pz</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'upi' && (
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: '#2C2C2C' }}>UPI Payment Details</h3>
              <div className="max-w-md mx-auto space-y-4">
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0E6FF' }}>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>UPI ID</label>
                  <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0E6FF' }}>
                    <span className="font-mono font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>9175033022@pz</span>
                    <button
                      onClick={() => copyToClipboard('9175033022@pz', 'upi')}
                      className="p-2 rounded-lg transition-colors duration-200"
                      style={{ backgroundColor: copiedText === 'upi' ? '#5a0ba5' : '#6a0dad', color: 'white' }}
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  {copiedText === 'upi' && (
                    <p className="text-sm mt-2" style={{ color: '#6a0dad' }}>UPI ID copied to clipboard!</p>
                  )}
                </div>
                
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0E6FF' }}>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>Beneficiary Name</label>
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0E6FF' }}>
                    <span className="font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>Adiyogi Foundation</span>
                  </div>
                </div>

                <div className="text-sm p-4 rounded-lg" style={{ backgroundColor: '#F8F0FF', color: '#6B4B4B' }}>
                  <p>You can use any UPI app like Google Pay, PhonePe, Paytm, or BHIM to make your donation.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'bank' && (
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center" style={{ color: '#2C2C2C' }}>Bank Transfer Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0E6FF' }}>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>Account Name</label>
                    <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0E6FF' }}>
                      <span className="font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>Adiyogi Foundation</span>
                      <button
                        onClick={() => copyToClipboard('Adiyogi Foundation', 'account')}
                        className="p-2 rounded-lg transition-colors duration-200 flex-shrink-0"
                        style={{ backgroundColor: copiedText === 'account' ? '#5a0ba5' : '#6a0dad', color: 'white' }}
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0E6FF' }}>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>Account Number</label>
                    <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0E6FF' }}>
                      <span className="font-mono font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>50200112612132</span>
                      <button
                        onClick={() => copyToClipboard('50200112612132', 'accno')}
                        className="p-2 rounded-lg transition-colors duration-200 flex-shrink-0"
                        style={{ backgroundColor: copiedText === 'accno' ? '#5a0ba5' : '#6a0dad', color: 'white' }}
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0E6FF' }}>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>IFSC Code</label>
                    <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0E6FF' }}>
                      <span className="font-mono font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>HDFC0008382</span>
                      <button
                        onClick={() => copyToClipboard('HDFC0008382', 'ifsc')}
                        className="p-2 rounded-lg transition-colors duration-200 flex-shrink-0"
                        style={{ backgroundColor: copiedText === 'ifsc' ? '#5a0ba5' : '#6a0dad', color: 'white' }}
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0E6FF' }}>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>Bank Name</label>
                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0E6FF' }}>
                      <span className="font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>HDFC BANK</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0E6FF' }}>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>Branch</label>
                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0E6FF' }}>
                      <span className="font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>Badlapur West Branch</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0E6FF' }}>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>Account Type</label>
                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0E6FF' }}>
                      <span className="font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>Current Account</span>
                    </div>
                  </div>
                </div>
              </div>

              {copiedText && (
                <div className="mt-4 text-center">
                  <p className="text-sm" style={{ color: '#6a0dad' }}>Details copied to clipboard!</p>
                </div>
              )}

              <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#F8F0FF' }}>
                <p className="text-sm" style={{ color: '#6B4B4B' }}>
                  <strong>Note:</strong> Please mention "Donation for Adiyogi Foundation" in the transfer remarks for easy identification.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'whatsapp' && (
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: '#2C2C2C' }}>Donate via WhatsApp</h3>
              <div className="max-w-md mx-auto">
                <div className="p-4 sm:p-6 rounded-xl mb-4 sm:mb-6" style={{ backgroundColor: '#FFFFFF', border: '2px solid #6a0dad' }}>
                  <MessageCircle className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" style={{ color: '#6a0dad' }} />
                  <h4 className="text-lg sm:text-xl font-bold mb-2" style={{ color: '#2C2C2C' }}>Connect with Us</h4>
                  <p className="text-sm mb-3 sm:mb-4" style={{ color: '#6B4B4B' }}>
                    Send us a message on WhatsApp and our team will guide you through the donation process
                  </p>
                  <div className="p-3 rounded-lg mb-3 sm:mb-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0E6FF' }}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>+91 9175033022</span>
                      <button
                        onClick={() => copyToClipboard('+91 9175033022', 'whatsapp')}
                        className="p-2 rounded-lg transition-colors duration-200 flex-shrink-0"
                        style={{ backgroundColor: copiedText === 'whatsapp' ? '#5a0ba5' : '#6a0dad', color: 'white' }}
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  {copiedText === 'whatsapp' && (
                    <p className="text-sm mb-3 sm:mb-4" style={{ color: '#6a0dad' }}>Phone number copied!</p>
                  )}
                  <a
                    href="https://wa.me/919175033022?text=Hello%2C%20I%20want%20to%20donate%20to%20Adiyogi%20Foundation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-white transition-all duration-200"
                    style={{ backgroundColor: '#25D366', boxShadow: '0 2px 8px rgba(37, 211, 102, 0.25)' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#1DA851'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#25D366'}
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Open WhatsApp</span>
                  </a>
                </div>
                <div className="text-sm p-4 rounded-lg" style={{ backgroundColor: '#F8F0FF', color: '#6B4B4B' }}>
                  <p>Our support team is available from 9 AM to 6 PM (IST) to assist you with your donation.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: '#2C2C2C' }}>What Our Donors Say</h2>
          <p className="text-base sm:text-lg" style={{ color: '#6B4B4B' }}>Hear from those who have joined our sacred mission.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 4px 12px rgba(106, 13, 173, 0.15)' }}>
              <div className="flex items-center mb-3 sm:mb-4">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3" style={{ color: '#6a0dad' }} />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" style={{ color: '#6a0dad' }} />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{testimonial.text}</p>
              <div className="border-t pt-3 sm:pt-4" style={{ borderColor: '#F0E6FF' }}>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-sm sm:text-base" style={{ color: '#2C2C2C' }}>{testimonial.name}</p>
                    <p className="text-xs sm:text-sm" style={{ color: '#6B4B4B' }}>{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-sm sm:text-base" style={{ color: '#6a0dad' }}>{testimonial.donation}</p>
                    <p className="text-xs" style={{ color: '#6B4B4B' }}>Donated</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-12 sm:py-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{ color: '#2C2C2C' }}>Need Help?</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8" style={{ color: '#6B4B4B' }}>
            Our dedicated support team is here to assist you with your donation.
          </p>
         
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

  {/* Call Us */}
  <a href="tel:+919175033022" className="block">
    <div className="p-4 sm:p-6 rounded-xl cursor-pointer hover:shadow-md transition"
         style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0E6FF' }}>
      <Phone className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4" style={{ color: '#6a0dad' }} />
      <h3 className="font-bold mb-2 text-base sm:text-lg" style={{ color: '#2C2C2C' }}>Call Us</h3>
      <p className="text-sm sm:text-base" style={{ color: '#6B4B4B' }}>+91 9175033022</p>
      <p className="text-xs sm:text-sm mt-1" style={{ color: '#6B4B4B' }}>Mon-Sat: 9 AM - 6 PM</p>
    </div>
  </a>

  {/* WhatsApp */}
  <a
     href="https://wa.me/919175033022?text=Hello%2C%20I%20want%20to%20donate%20to%20Adiyogi%20Foundation"
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <div className="p-6 rounded-xl cursor-pointer hover:shadow-md transition"
         style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0E6FF' }}>
      <MessageCircle className="w-8 h-8 mx-auto mb-4" style={{ color: '#6a0dad' }} />
      <h3 className="font-bold mb-2" style={{ color: '#2C2C2C' }}>WhatsApp</h3>
      <p style={{ color: '#6B4B4B' }}>+91 9175033022</p>
      <p className="text-sm mt-1" style={{ color: '#6B4B4B' }}>Quick response guaranteed</p>
    </div>
  </a>

</div>

        </div>
      </div>

    </div>
    </>
  
  );
};

export default DonationPage;