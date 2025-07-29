// import React, { useEffect, useState } from 'react';
// import { Heart, Phone, QrCode, Building, CreditCard, Star, Quote, Users, Target, CheckCircle, Copy, MessageCircle } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

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
//     { number: "₹2.5 Crore", label: "Total Donations Received", icon: Target },
//     { number: "15", label: "Temples Restored", icon: Building },
//     { number: "50,000+", label: "Lives Transformed", icon: Users },
//     { number: "100+", label: "Active Programs", icon: CheckCircle }
//   ];

//   return (
//     <div className="min-h-screen" style={{ backgroundColor: '#FDF8F8' }}>


//       {/* Hero Section */}
   

// <section className="py-20 px-4 relative overflow-hidden">
//   {/* Gradient overlay */}
//   <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-red-800/20"></div>

//   {/* Fixed background image */}
//   <div
//     className="absolute inset-0 bg-center bg-cover bg-fixed opacity-25"
//     style={{
//       backgroundImage: `url('/public/Stone-mason-working-on-restoring-the-Vatsala-Durga-temple-in-Bhaktapur-Nepal-.jpg')`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundAttachment: 'fixed',
//     }}
//   ></div>

//   {/* Foreground content */}
//   <div className="max-w-6xl mx-auto text-center relative z-10">
//     {/* Badge */}
//     <div
//       className="inline-flex items-center space-x-2 mb-6 px-4 py-3 rounded-full"
//       style={{
//         backgroundColor: '#FFFEF7',
//         border: '1px solid #F4E8E8',
//       }}
//     >
//       <Heart className="w-5 h-5" style={{ color: '#C41E3A' }} />
//       <span className="text-sm font-medium" style={{ color: '#C41E3A' }}>
//         Join Our Sacred Mission
//       </span>
//     </div>

//     {/* Heading */}
//     <h1 className="text-6xl font-bold mb-6" style={{ color: '#2C2C2C' }}>
//       Support the Divine
//       <span className="block text-5xl mt-2" style={{ color: '#C41E3A' }}>
//         Transformation
//       </span>
//     </h1>

//     {/* Blurred box with content */}
//     <div
//       className="bg-white rounded-3xl p-12 mt-2 shadow-2xl mb-12 backdrop-blur-sm"
//       style={{
//         backgroundColor: 'rgba(255, 254, 247, 0.95)',
//         boxShadow: '0 8px 32px rgba(196, 30, 58, 0.2)',
//       }}
//     >
//       <p
//         className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
//         style={{ color: '#6B4B4B' }}
//       >
//         Your generous donation helps us restore ancient temples, conduct spiritual programs,
//         and spread the divine wisdom of Adiyogi to seekers worldwide.
//       </p>

//       {/* Suggested amounts */}
//       <div className="flex flex-wrap justify-center gap-4">
//         <div
//           className="px-6 py-3 rounded-lg"
//           style={{
//             backgroundColor: '#FFFEF7',
//             border: '1px solid #F4E8E8',
//           }}
//         >
//           <span className="text-sm" style={{ color: '#6B4B4B' }}>
//             Suggested Amount:
//           </span>
//           <span className="font-bold ml-2" style={{ color: '#C41E3A' }}>
//             ₹1,001
//           </span>
//         </div>
//         <div
//           className="px-6 py-3 rounded-lg"
//           style={{
//             backgroundColor: '#FFFEF7',
//             border: '1px solid #F4E8E8',
//           }}
//         >
//           <span className="text-sm" style={{ color: '#6B4B4B' }}>
//             Or any amount that
//           </span>
//           <span className="font-bold ml-2" style={{ color: '#C41E3A' }}>
//             touches your heart
//           </span>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//       {/* Impact Stats */}
//       <div className="max-w-6xl mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {impactStats.map((stat, index) => (
//             <div key={index} className="text-center p-6 rounded-xl" style={{ backgroundColor: '#FFFEF7', boxShadow: '0 4px 12px rgba(196, 30, 58, 0.15)' }}>
//               <stat.icon className="w-8 h-8 mx-auto mb-4" style={{ color: '#C41E3A' }} />
//               <div className="text-2xl font-bold mb-2" style={{ color: '#C41E3A' }}>{stat.number}</div>
//               <div className="text-sm" style={{ color: '#6B4B4B' }}>{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Donation Methods */}
//       <div className="max-w-4xl mx-auto px-4 py-12">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4" style={{ color: '#2C2C2C' }}>Choose Your Donation Method</h2>
//           <p className="text-lg" style={{ color: '#6B4B4B' }}>Select the most convenient way to contribute to our sacred mission</p>
//         </div>

//         {/* Tab Navigation */}
//         <div className="flex flex-wrap justify-center mb-8 gap-2">
//           {donationMethods.map((method) => (
//             <button
//               key={method.id}
//               onClick={() => setActiveTab(method.id)}
//               className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
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
//                   e.target.style.backgroundColor = '#8B1538';
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
//               <method.icon className="w-5 h-5" />
//               <span>{method.label}</span>
//             </button>
//           ))}
//         </div>

//         {/* Tab Content */}
//         <div className="p-8 rounded-xl" style={{ backgroundColor: '#FFFEF7', boxShadow: '0 4px 12px rgba(196, 30, 58, 0.15)' }}>
//           {activeTab === 'qr' && (
//             <div className="text-center">
//               <h3 className="text-2xl font-bold mb-6" style={{ color: '#2C2C2C' }}>Scan QR Code to Donate</h3>
//               <div className="inline-block p-6 rounded-xl mb-6" style={{ backgroundColor: '#FDF8F8', border: '2px solid #C41E3A' }}>
//                 <div className="w-48 h-48 mx-auto bg-white rounded-lg flex items-center justify-center">
//                   <QrCode className="w-32 h-32" style={{ color: '#C41E3A' }} />
//                 </div>
//               </div>
//               <p className="text-lg mb-4" style={{ color: '#6B4B4B' }}>
//                 Scan this QR code with any UPI app like GPay, PhonePe, or Paytm
//               </p>
//               <div className="flex justify-center space-x-4">
//                 <div className="px-4 py-2 rounded-lg" style={{ backgroundColor: '#F4E8E8' }}>
//                   <span className="font-medium" style={{ color: '#C41E3A' }}>UPI ID: adiyogi@paytm</span>
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeTab === 'upi' && (
//             <div className="text-center">
//               <h3 className="text-2xl font-bold mb-6" style={{ color: '#2C2C2C' }}>UPI Payment Details</h3>
//               <div className="max-w-md mx-auto space-y-4">
//                 <div className="p-4 rounded-lg" style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
//                   <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>UPI ID</label>
//                   <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#FFFEF7', border: '1px solid #F4E8E8' }}>
//                     <span className="font-mono font-medium" style={{ color: '#2C2C2C' }}>adiyogi@paytm</span>
//                     <button
//                       onClick={() => copyToClipboard('adiyogi@paytm', 'upi')}
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
//                     <span className="font-medium" style={{ color: '#2C2C2C' }}>Adiyogi Spiritual Foundation</span>
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
//               <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#2C2C2C' }}>Bank Transfer Details</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-4">
//                   <div className="p-4 rounded-lg" style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
//                     <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>Account Name</label>
//                     <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#FFFEF7', border: '1px solid #F4E8E8' }}>
//                       <span className="font-medium" style={{ color: '#2C2C2C' }}>Adiyogi Spiritual Foundation</span>
//                       <button
//                         onClick={() => copyToClipboard('Adiyogi Spiritual Foundation', 'account')}
//                         className="p-2 rounded-lg transition-colors duration-200"
//                         style={{ backgroundColor: copiedText === 'account' ? '#8B1538' : '#C41E3A', color: 'white' }}
//                       >
//                         <Copy className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>

//                   <div className="p-4 rounded-lg" style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
//                     <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>Account Number</label>
//                     <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#FFFEF7', border: '1px solid #F4E8E8' }}>
//                       <span className="font-mono font-medium" style={{ color: '#2C2C2C' }}>1234567890123456</span>
//                       <button
//                         onClick={() => copyToClipboard('1234567890123456', 'accno')}
//                         className="p-2 rounded-lg transition-colors duration-200"
//                         style={{ backgroundColor: copiedText === 'accno' ? '#8B1538' : '#C41E3A', color: 'white' }}
//                       >
//                         <Copy className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>

//                   <div className="p-4 rounded-lg" style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
//                     <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>IFSC Code</label>
//                     <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#FFFEF7', border: '1px solid #F4E8E8' }}>
//                       <span className="font-mono font-medium" style={{ color: '#2C2C2C' }}>SBIN0001234</span>
//                       <button
//                         onClick={() => copyToClipboard('SBIN0001234', 'ifsc')}
//                         className="p-2 rounded-lg transition-colors duration-200"
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
//                       <span className="font-medium" style={{ color: '#2C2C2C' }}>State Bank of India</span>
//                     </div>
//                   </div>

//                   <div className="p-4 rounded-lg" style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
//                     <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>Branch</label>
//                     <div className="p-3 rounded-lg" style={{ backgroundColor: '#FFFEF7', border: '1px solid #F4E8E8' }}>
//                       <span className="font-medium" style={{ color: '#2C2C2C' }}>Coimbatore Main Branch</span>
//                     </div>
//                   </div>

//                   <div className="p-4 rounded-lg" style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
//                     <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>Account Type</label>
//                     <div className="p-3 rounded-lg" style={{ backgroundColor: '#FFFEF7', border: '1px solid #F4E8E8' }}>
//                       <span className="font-medium" style={{ color: '#2C2C2C' }}>Current Account</span>
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
//               <h3 className="text-2xl font-bold mb-6" style={{ color: '#2C2C2C' }}>Donate via WhatsApp</h3>
//               <div className="max-w-md mx-auto">
//                 <div className="p-6 rounded-xl mb-6" style={{ backgroundColor: '#FDF8F8', border: '2px solid #C41E3A' }}>
//                   <MessageCircle className="w-16 h-16 mx-auto mb-4" style={{ color: '#C41E3A' }} />
//                   <h4 className="text-xl font-bold mb-2" style={{ color: '#2C2C2C' }}>Connect with Us</h4>
//                   <p className="text-sm mb-4" style={{ color: '#6B4B4B' }}>
//                     Send us a message on WhatsApp and our team will guide you through the donation process
//                   </p>
//                   <div className="p-3 rounded-lg mb-4" style={{ backgroundColor: '#FFFEF7', border: '1px solid #F4E8E8' }}>
//                     <div className="flex items-center justify-between">
//                       <span className="font-mono font-medium" style={{ color: '#2C2C2C' }}>+91 98765 43210</span>
//                       <button
//                         onClick={() => copyToClipboard('+91 98765 43210', 'whatsapp')}
//                         className="p-2 rounded-lg transition-colors duration-200"
//                         style={{ backgroundColor: copiedText === 'whatsapp' ? '#8B1538' : '#C41E3A', color: 'white' }}
//                       >
//                         <Copy className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                   {copiedText === 'whatsapp' && (
//                     <p className="text-sm mb-4" style={{ color: '#C41E3A' }}>Phone number copied!</p>
//                   )}
//                   <a
//                     href="https://wa.me/919876543210?text=Hello%2C%20I%20want%20to%20donate%20to%20Adiyogi%20Foundation"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-medium text-white transition-all duration-200"
//                     style={{ backgroundColor: '#25D366', boxShadow: '0 2px 8px rgba(37, 211, 102, 0.25)' }}
//                     onMouseEnter={(e) => e.target.style.backgroundColor = '#1DA851'}
//                     onMouseLeave={(e) => e.target.style.backgroundColor = '#25D366'}
//                   >
//                     <MessageCircle className="w-5 h-5" />
//                     <span>Open WhatsApp</span>
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
//       <div className="max-w-6xl mx-auto px-4 py-16">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4" style={{ color: '#2C2C2C' }}>What Our Donors Say</h2>
//           <p className="text-lg" style={{ color: '#6B4B4B' }}>Hear from those who have joined our sacred mission</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="p-6 rounded-xl" style={{ backgroundColor: '#FFFEF7', boxShadow: '0 4px 12px rgba(196, 30, 58, 0.15)' }}>
//               <div className="flex items-center mb-4">
//                 <Quote className="w-8 h-8 mr-3" style={{ color: '#C41E3A' }} />
//                 <div className="flex space-x-1">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#C41E3A' }} />
//                   ))}
//                 </div>
//               </div>
//               <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.text}</p>
//               <div className="border-t pt-4" style={{ borderColor: '#F4E8E8' }}>
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <p className="font-semibold" style={{ color: '#2C2C2C' }}>{testimonial.name}</p>
//                     <p className="text-sm" style={{ color: '#6B4B4B' }}>{testimonial.location}</p>
//                   </div>
//                   <div className="text-right">
//                     <p className="font-bold" style={{ color: '#C41E3A' }}>{testimonial.donation}</p>
//                     <p className="text-xs" style={{ color: '#6B4B4B' }}>Donated</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Contact Section */}
//       <div className="py-16" style={{ backgroundColor: '#FFFEF7' }}>
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-6" style={{ color: '#2C2C2C' }}>Need Help?</h2>
//           <p className="text-lg mb-8" style={{ color: '#6B4B4B' }}>
//             Our dedicated support team is here to assist you with your donation
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="p-6 rounded-xl" style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
//               <Phone className="w-8 h-8 mx-auto mb-4" style={{ color: '#C41E3A' }} />
//               <h3 className="font-bold mb-2" style={{ color: '#2C2C2C' }}>Call Us</h3>
//               <p style={{ color: '#6B4B4B' }}>+91 98765 43210</p>
//               <p className="text-sm mt-1" style={{ color: '#6B4B4B' }}>Mon-Sat: 9 AM - 6 PM</p>
//             </div>
            
import React, { useEffect, useState } from 'react';
import { Heart, Phone, QrCode, Building, CreditCard, Star, Quote, Users, Target, CheckCircle, Copy, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
    <div className="min-h-screen" style={{ backgroundColor: '#FDF8F8' }}>


      {/* Hero Section */}
   

{/* <section className="py-12 sm:py-16 md:py-20 px-4 relative overflow-hidden">
  
  <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-red-800/20"></div>

  
  <div
    className="absolute inset-0 bg-center bg-cover bg-fixed opacity-25"
    style={{
      backgroundImage: `url('/Stone-mason-working-on-restoring-the-Vatsala-Durga-temple-in-Bhaktapur-Nepal-.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}
  ></div>

 
  <div className="max-w-6xl mx-auto text-center relative z-10">
    
    <div
      className="inline-flex items-center space-x-2 mb-4 sm:mb-6 px-3 sm:px-4 py-2 sm:py-3 rounded-full"
      style={{
        backgroundColor: '#FFFEF7',
        border: '1px solid #F4E8E8',
      }}
    >
      <Heart className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#C41E3A' }} />
      <span className="text-xs sm:text-sm font-medium" style={{ color: '#C41E3A' }}>
        Join Our Sacred Mission
      </span>
    </div>

   
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6" style={{ color: '#2C2C2C' }}>
      Support the Divine
      <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-1 sm:mt-2" style={{ color: '#C41E3A' }}>
        Transformation
      </span>
    </h1>

    
    <div
      className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mt-2 shadow-2xl mb-8 sm:mb-12 backdrop-blur-sm"
      style={{
        backgroundColor: 'rgba(255, 254, 247, 0.95)',
        boxShadow: '0 8px 32px rgba(196, 30, 58, 0.2)',
      }}
    >
      <p
        className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed"
        style={{ color: '#6B4B4B' }}
      >
        Your generous donation helps us restore ancient temples, conduct spiritual programs,
        and spread the divine wisdom of Adiyogi to seekers worldwide.
      </p>

     
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
        <div
          className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg"
          style={{
            backgroundColor: '#FFFEF7',
            border: '1px solid #F4E8E8',
          }}
        >
          <span className="text-xs sm:text-sm" style={{ color: '#6B4B4B' }}>
            Suggested Amount:
          </span>
          <span className="font-bold ml-2" style={{ color: '#C41E3A' }}>
            ₹1,001
          </span>
        </div>
        <div
          className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg"
          style={{
            backgroundColor: '#FFFEF7',
            border: '1px solid #F4E8E8',
          }}
        >
          <span className="text-xs sm:text-sm" style={{ color: '#6B4B4B' }}>
            Or any amount that
          </span>
          <span className="font-bold ml-2" style={{ color: '#C41E3A' }}>
            touches your heart
          </span>
        </div>
      </div>
    </div>
  </div>
</section> */}

<section className="py-12 sm:py-16 md:py-20 px-4 relative overflow-hidden">
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-red-800/20 z-0"></div>

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-fixed opacity-25 z-0"
    style={{
      backgroundImage: `url('/Stone-mason-working-on-restoring-the-Vatsala-Durga-temple-in-Bhaktapur-Nepal-.jpg')`,
    }}
  ></div>

  {/* Main Content */}
  <div className="max-w-6xl mx-auto text-center relative z-10">
    {/* Badge */}
    <div className="inline-flex items-center space-x-2 mb-4 sm:mb-6 px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-[#F4E8E8] bg-[#FFFEF7]">
      <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#C41E3A]" />
      <span className="text-xs sm:text-sm font-medium text-[#C41E3A]">
        Join Our Sacred Mission
      </span>
    </div>

    {/* Title */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-800">
      Support the Divine
      <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-1 sm:mt-2 text-[#C41E3A]">
        Transformation
      </span>
    </h1>

    {/* Donation Card */}
    <div className="bg-[#FFFEF7]/95 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mt-2 shadow-2xl backdrop-blur-sm mb-8 sm:mb-12">
      <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed text-[#6B4B4B]">
        Your generous donation helps us restore ancient temples, conduct spiritual programs,
        and spread the divine wisdom of Adiyogi to seekers worldwide.
      </p>

      {/* Suggested Amounts */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
        <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-[#F4E8E8] bg-[#FFFEF7]">
          <span className="text-xs sm:text-sm text-[#6B4B4B]">Suggested Amount:</span>
          <span className="font-bold ml-2 text-[#C41E3A]">₹1,001</span>
        </div>
        <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-[#F4E8E8] bg-[#FFFEF7]">
          <span className="text-xs sm:text-sm text-[#6B4B4B]">Or any amount that</span>
          <span className="font-bold ml-2 text-[#C41E3A]">touches your heart</span>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Impact Stats */}
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FFFEF7', boxShadow: '0 4px 12px rgba(196, 30, 58, 0.15)' }}>
              <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4" style={{ color: '#C41E3A' }} />
              <div className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2" style={{ color: '#C41E3A' }}>{stat.number}</div>
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
                backgroundColor: activeTab === method.id ? '#C41E3A' : '#FFFEF7',
                border: `1px solid ${activeTab === method.id ? '#C41E3A' : '#F4E8E8'}`,
                boxShadow: activeTab === method.id ? '0 2px 8px rgba(139, 21, 56, 0.25)' : 'none',
                color: activeTab === method.id ? 'white' : '#6B4B4B'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== method.id) {
                  e.target.style.backgroundColor = '#C41E3A';
                  e.target.style.color = 'white';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== method.id) {
                  e.target.style.backgroundColor = '#FFFEF7';
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
        <div className="p-6 sm:p-8 rounded-xl" style={{ backgroundColor: '#FFFEF7', boxShadow: '0 4px 12px rgba(196, 30, 58, 0.15)' }}>
          {activeTab === 'qr' && (
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: '#2C2C2C' }}>Scan QR Code to Donate</h3>
              <div className="inline-block p-4 sm:p-6 rounded-xl mb-4 sm:mb-6" style={{ backgroundColor: '#FDF8F8', border: '2px solid #C41E3A' }}>
                <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto bg-white rounded-lg flex items-center justify-center">
                  <img
                  src='/volunteers/WhatsApp Image 2025-07-05 at 8.36.53 PM (1).jpeg'
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36" style={{ color: '#C41E3A' }} 
                  />
                 
                </div>
              </div>
              <p className="text-base sm:text-lg mb-3 sm:mb-4" style={{ color: '#6B4B4B' }}>
                Scan this QR code with any UPI app like GPay, PhonePe, or Paytm
              </p>
              <div className="flex justify-center space-x-4">
                <div className="px-3 sm:px-4 py-2 rounded-lg" style={{ backgroundColor: '#F4E8E8' }}>
                  <span className="font-medium text-sm sm:text-base" style={{ color: '#C41E3A' }}>UPI ID: aaditya.niikam-2@okaxis</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'upi' && (
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: '#2C2C2C' }}>UPI Payment Details</h3>
              <div className="max-w-md mx-auto space-y-4">
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>UPI ID</label>
                  <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#FFFEF7', border: '1px solid #F4E8E8' }}>
                    <span className="font-mono font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>aaditya.niikam-2@okaxis</span>
                    <button
                      onClick={() => copyToClipboard('aaditya.niikam-2@okaxis', 'upi')}
                      className="p-2 rounded-lg transition-colors duration-200"
                      style={{ backgroundColor: copiedText === 'upi' ? '#8B1538' : '#C41E3A', color: 'white' }}
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  {copiedText === 'upi' && (
                    <p className="text-sm mt-2" style={{ color: '#C41E3A' }}>UPI ID copied to clipboard!</p>
                  )}
                </div>
                
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>Beneficiary Name</label>
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#FFFEF7', border: '1px solid #F4E8E8' }}>
                    <span className="font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>Adiyogi Foundation</span>
                  </div>
                </div>

                <div className="text-sm p-4 rounded-lg" style={{ backgroundColor: '#F4E8E8', color: '#6B4B4B' }}>
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
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>Account Name</label>
                    <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#FFFEF7', border: '1px solid #F4E8E8' }}>
                      <span className="font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>Adiyogi Foundation</span>
                      <button
                        onClick={() => copyToClipboard('Adiyogi Foundation', 'account')}
                        className="p-2 rounded-lg transition-colors duration-200 flex-shrink-0"
                        style={{ backgroundColor: copiedText === 'account' ? '#8B1538' : '#C41E3A', color: 'white' }}
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>Account Number</label>
                    <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#FFFEF7', border: '1px solid #F4E8E8' }}>
                      <span className="font-mono font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>50200112612132</span>
                      <button
                        onClick={() => copyToClipboard('50200112612132', 'accno')}
                        className="p-2 rounded-lg transition-colors duration-200 flex-shrink-0"
                        style={{ backgroundColor: copiedText === 'accno' ? '#8B1538' : '#C41E3A', color: 'white' }}
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>IFSC Code</label>
                    <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#FFFEF7', border: '1px solid #F4E8E8' }}>
                      <span className="font-mono font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>HDFC0008382</span>
                      <button
                        onClick={() => copyToClipboard('HDFC0008382', 'ifsc')}
                        className="p-2 rounded-lg transition-colors duration-200 flex-shrink-0"
                        style={{ backgroundColor: copiedText === 'ifsc' ? '#8B1538' : '#C41E3A', color: 'white' }}
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>Bank Name</label>
                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#FFFEF7', border: '1px solid #F4E8E8' }}>
                      <span className="font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>HDFC BANK</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>Branch</label>
                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#FFFEF7', border: '1px solid #F4E8E8' }}>
                      <span className="font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>Badlapur West Branch</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#6B4B4B' }}>Account Type</label>
                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#FFFEF7', border: '1px solid #F4E8E8' }}>
                      <span className="font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>Current Account</span>
                    </div>
                  </div>
                </div>
              </div>

              {copiedText && (
                <div className="mt-4 text-center">
                  <p className="text-sm" style={{ color: '#C41E3A' }}>Details copied to clipboard!</p>
                </div>
              )}

              <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#F4E8E8' }}>
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
                <div className="p-4 sm:p-6 rounded-xl mb-4 sm:mb-6" style={{ backgroundColor: '#FDF8F8', border: '2px solid #C41E3A' }}>
                  <MessageCircle className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" style={{ color: '#C41E3A' }} />
                  <h4 className="text-lg sm:text-xl font-bold mb-2" style={{ color: '#2C2C2C' }}>Connect with Us</h4>
                  <p className="text-sm mb-3 sm:mb-4" style={{ color: '#6B4B4B' }}>
                    Send us a message on WhatsApp and our team will guide you through the donation process
                  </p>
                  <div className="p-3 rounded-lg mb-3 sm:mb-4" style={{ backgroundColor: '#FFFEF7', border: '1px solid #F4E8E8' }}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>+91 9175033022</span>
                      <button
                        onClick={() => copyToClipboard('+91 9175033022', 'whatsapp')}
                        className="p-2 rounded-lg transition-colors duration-200 flex-shrink-0"
                        style={{ backgroundColor: copiedText === 'whatsapp' ? '#8B1538' : '#C41E3A', color: 'white' }}
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  {copiedText === 'whatsapp' && (
                    <p className="text-sm mb-3 sm:mb-4" style={{ color: '#C41E3A' }}>Phone number copied!</p>
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
                <div className="text-sm p-4 rounded-lg" style={{ backgroundColor: '#F4E8E8', color: '#6B4B4B' }}>
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
            <div key={index} className="p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FFFEF7', boxShadow: '0 4px 12px rgba(196, 30, 58, 0.15)' }}>
              <div className="flex items-center mb-3 sm:mb-4">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3" style={{ color: '#C41E3A' }} />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" style={{ color: '#C41E3A' }} />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{testimonial.text}</p>
              <div className="border-t pt-3 sm:pt-4" style={{ borderColor: '#F4E8E8' }}>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-sm sm:text-base" style={{ color: '#2C2C2C' }}>{testimonial.name}</p>
                    <p className="text-xs sm:text-sm" style={{ color: '#6B4B4B' }}>{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-sm sm:text-base" style={{ color: '#C41E3A' }}>{testimonial.donation}</p>
                    <p className="text-xs" style={{ color: '#6B4B4B' }}>Donated</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-12 sm:py-16" style={{ backgroundColor: '#FFFEF7' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{ color: '#2C2C2C' }}>Need Help?</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8" style={{ color: '#6B4B4B' }}>
            Our dedicated support team is here to assist you with your donation.
          </p>
          
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
              <Phone className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4" style={{ color: '#C41E3A' }} />
              <h3 className="font-bold mb-2 text-base sm:text-lg" style={{ color: '#2C2C2C' }}>Call Us</h3>
              <p className="text-sm sm:text-base" style={{ color: '#6B4B4B' }}>+91 9175033022</p>
              <p className="text-xs sm:text-sm mt-1" style={{ color: '#6B4B4B' }}>Mon-Sat: 9 AM - 6 PM</p>
            </div>
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
              <MessageCircle className="w-8 h-8 mx-auto mb-4" style={{ color: '#C41E3A' }} />
              <h3 className="font-bold mb-2" style={{ color: '#2C2C2C' }}>WhatsApp</h3>
              <p style={{ color: '#6B4B4B' }}>+91 9175033022</p>
              <p className="text-sm mt-1" style={{ color: '#6B4B4B' }}>Quick response guaranteed</p>
            </div>
          </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

  {/* Call Us */}
  <a href="tel:+919175033022" className="block">
    <div className="p-4 sm:p-6 rounded-xl cursor-pointer hover:shadow-md transition"
         style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
      <Phone className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4" style={{ color: '#C41E3A' }} />
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
         style={{ backgroundColor: '#FDF8F8', border: '1px solid #F4E8E8' }}>
      <MessageCircle className="w-8 h-8 mx-auto mb-4" style={{ color: '#C41E3A' }} />
      <h3 className="font-bold mb-2" style={{ color: '#2C2C2C' }}>WhatsApp</h3>
      <p style={{ color: '#6B4B4B' }}>+91 9175033022</p>
      <p className="text-sm mt-1" style={{ color: '#6B4B4B' }}>Quick response guaranteed</p>
    </div>
  </a>

</div>

        </div>
      </div>

    </div>
  );
};

export default DonationPage;