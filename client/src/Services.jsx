

// import React, { useState } from 'react';
// import { 
//   Star, 
//   Home, 
//   Building2, 
//   Factory, 
//   Store, 
//   Eye, 
//   Compass, 
//   Heart,
//   ChevronRight,
//   X,
//   Phone,
//   Mail,
//   Clock,
//   Users,
//   Award,
//   CheckCircle,
//   ArrowRight,
//   BookOpen,
//   Sparkles
// } from 'lucide-react';

// const ServicesPage = () => {
//   const [activeTab, setActiveTab] = useState('astrology');

//   const services = [
//     {
//       id: 'astrology',
//       title: 'Astrology Consultation',
//       icon: Star,
//       shortDesc: 'Real guidance through astrology for self-understanding and life clarity',
//       gradient: 'from-red-500 to-rose-600',
//       lightGradient: 'from-red-50 to-rose-50',
//       content: {
//         title: 'Real Guidance Through Astrology',
//         subtitle: 'Discover Your True Self & Life Purpose',
//         description: 'At Adiyogi Foundation, we believe astrology is a tool for self-understanding, not fortune-telling. Our services are designed to help you gain clarity, confidence, and direction in the areas of life that matter most.',
//         services: [
//           {
//             name: 'Self-Knowledge & Life Guidance',
//             desc: 'Understand yourself on a deeper level. Learn about your strengths, inner drives, and areas for personal growth.',
//             features: ['Natural personality analysis', 'Emotional patterns understanding', 'Personal growth guidance']
//           },
//           {
//             name: 'Relationship Understanding',
//             desc: 'Find harmony in your relationships through astrological insights.',
//             features: ['Communication style analysis', 'Compatibility assessment', 'Conflict resolution guidance']
//           },
//           {
//             name: 'Career & Purpose Clarity',
//             desc: 'Find work that feels meaningful and aligns with your natural talents.',
//             features: ['Natural skills exploration', 'Work environment guidance', 'Career direction clarity']
//           },
//           {
//             name: 'Support for Parents',
//             desc: 'Understand your child\'s nature and needs through astrological insights.',
//             features: ['Child personality analysis', 'Communication tips', 'Learning style guidance']
//           },
//           {
//             name: 'One-on-One Astrology Session',
//             desc: 'Personal consultation with experienced astrologers.',
//             features: ['Direct consultation', 'Specific question answers', 'Personalized guidance']
//           }
//         ],
//         whyChoose: [
//           'Human-centered approach - No predictions, just insight and support',
//           'Privacy respected - All information stays 100% confidential',
//           'Reports made with care - Thoughtfully written, not machine-generated',
//           'Clarity-focused - Designed to help you feel more sure, not confused'
//         ]
//       }
//     },
//     {
//       id: 'vastu-home',
//       title: 'Vastu for Home',
//       icon: Home,
//       shortDesc: 'Transform your home into a thriving hub of positive energy and prosperity',
//       gradient: 'from-rose-600 to-red-600',
//       lightGradient: 'from-rose-50 to-red-50',
//       content: {
//         title: 'Vastu Dosha Report for Home',
//         subtitle: 'Create a Harmonious Living Space',
//         description: 'Transform your home into a thriving hub of success with expert Vastu guidance from Adiyogi Foundation.',
//         auditAreas: [
//           'External Factors Assessment',
//           'Setback Activities Analysis',
//           'Cut and Extended Parts Evaluation',
//           'Activities Direction Alignment',
//           'Decor Objects Placement Check',
//           'Anti-Prakriti Factors Identification',
//           'Divine and Demonic Influences',
//           'Astro Vastu Check'
//         ],
//         activityAreas: [
//           'Drawing Room', 'Pooja Room', 'Bedroom', 'Kitchen', 'Dining Area',
//           'Study Room', 'Toilet', 'Bar Room', 'Store', 'Utility Spaces'
//         ],
//         process: [
//           'Certified surveyor creates detailed to-scale plan',
//           '12 types of audits conducted by Vastu experts',
//           'Problem identification and discussion',
//           'Step-by-step implementation measures',
//           'Energy alignment with cosmic forces',
//           'Marma points remedies application',
//           'Intuitive Devta diagnosis and remedies'
//         ]
//       }
//     },
//     {
//       id: 'vastu-office',
//       title: 'Vastu for Office',
//       icon: Building2,
//       shortDesc: 'Enhance your office success, sales, cash flow, and customer relationships',
//       gradient: 'from-red-600 to-rose-700',
//       lightGradient: 'from-red-50 to-rose-50',
//       content: {
//         title: 'Vastu Dosha Report for Office',
//         subtitle: 'Optimize Your Business Energy',
//         description: 'Enhance your office\'s success, including sales, cash flow, customer relationships, and overall prosperity through expert Vastu analysis.',
//         impactAreas: [
//           'Sales Enhancement',
//           'Cash Flow',
//           'Customer Relations',
//           'Team Productivity',
//           'Business Growth',
//           'Decision Making'
//         ],
//         auditAreas: [
//           'External Factors Assessment',
//           'Setback Activities Identification',
//           'Cut and Extended Areas Analysis',
//           'Activities in Incorrect Directions',
//           'Incorrect Placement of Decor Objects',
//           'Anti-Prakriti Factors',
//           'Divine and Demonic Influences',
//           'Astro Vastu Check'
//         ],
//         activityAreas: [
//           'Reception Area', 'Manager Cabin', 'Conference Room', 'Workstations', 'Accounts Section',
//           'Marketing Department', 'IT Section', 'Storage Room', 'Pantry', 'Restrooms'
//         ],
//         implementation: [
//           'Certified surveyor measures workplace and creates detailed plan',
//           'Various audits conducted on surveyed maps',
//           'Problem identification and step-by-step resolution',
//           'Entrance, toilets, sewage, directional strengths addressed',
//           'Five elements balanced for harmony',
//           'Activities and utilities relocated using Vastu techniques',
//           'Energy alignment with cosmic energy and horoscope',
//           'Marma points remedies for enhanced energy flow',
//           'Intuitive Devta diagnosis and remedies'
//         ]
//       }
//     },
//     {
//       id: 'vastu-factory',
//       title: 'Vastu for Factory',
//       icon: Factory,
//       shortDesc: 'Enhance production quality, sales, orders, and address departmental issues',
//       gradient: 'from-rose-700 to-red-700',
//       lightGradient: 'from-rose-50 to-red-50',
//       content: {
//         title: 'Vastu Dosha Report for Factory',
//         subtitle: 'Maximize Industrial Efficiency',
//         description: 'Whether it\'s a new or existing factory, Adiyogi Foundation helps enhance production quality, sales, orders, cash flow, banking support, and address departmental issues.',
//         impactAreas: [
//           'Production Quality',
//           'Sales & Orders',
//           'Cash Flow',
//           'Banking Support',
//           'Labor Relations',
//           'Safety & Security',
//           'Overall Prosperity'
//         ],
//         auditAreas: [
//           'External Factors Assessment',
//           'Production Line Analysis',
//           'Raw Material Storage Evaluation',
//           'Machinery Placement Check',
//           'Worker Safety Areas',
//           'Quality Control Sections',
//           'Administrative Offices',
//           'Energy Flow Assessment'
//         ],
//         activityAreas: [
//           'Production Floor', 'Raw Material Store', 'Finished Goods Store', 'Quality Control', 'Maintenance Section',
//           'Admin Office', 'Canteen', 'Security Gate', 'Parking Area', 'Utility Areas'
//         ],
//         implementation: [
//           'Detailed survey and to-scale plan creation',
//           'Seven types of audits by experts',
//           'Problem discussion and step-by-step measures',
//           'Seating, raw material & machinery positioning per 5 Elements theory',
//           'Relocation or rectification using Vastu techniques',
//           'Interior adjustments following Vastu principles',
//           'Energy alignment with cosmic energy and horoscope',
//           'Marma points remedies for energy enhancement',
//           'Devta energy assessment and harmonization'
//         ]
//       }
//     },
//     {
//       id: 'vastu-commercial',
//       title: 'Vastu for Commercial/Industry',
//       icon: Store,
//       shortDesc: 'Assess divine energies and optimize commercial properties for success',
//       gradient: 'from-red-700 to-rose-800',
//       lightGradient: 'from-red-50 to-rose-50',
//       content: {
//         title: 'Vastu Dosha Report for Commercial/Industry',
//         subtitle: 'Divine Energy Assessment',
//         description: 'An experienced Adiyogi Foundation Vastu Acharya will visit your commercial property to assess the strength of 33 Devtas (divine energies) and 12 Asuras (negative forces) using intuition and Bhoomi Nadi (earth energy reading).',
//         impactAreas: [
//           'Project Completion',
//           'Leasing Success',
//           'Sales & Orders',
//           'Banking Support',
//           'Customer Relations',
//           'Overall Prosperity'
//         ],
//         auditAreas: [
//           'Divine Energy Assessment',
//           'Site Layout Analysis',
//           'Commercial Viability Check',
//           'Customer Flow Patterns',
//           'Tenant Satisfaction Areas',
//           'Financial Energy Zones',
//           'Security & Safety Aspects',
//           'Future Growth Potential'
//         ],
//         activityAreas: [
//           'Reception Lobby', 'Retail Spaces', 'Office Suites', 'Common Areas', 'Food Court',
//           'Parking Areas', 'Service Areas', 'Security Desk', 'Maintenance Room', 'Storage Areas'
//         ],
//         implementation: [
//           'Certified surveyor creates to-scale plan including surroundings',
//           'Seven types of audits conducted by experts',
//           'Goals and concerns consultation and advice',
//           'Five elements balancing - earth strength, road hits, entrance, toilets, sewage, directional forces',
//           'Activity & utility objects relocation using Vastu techniques',
//           'Sales office & interior decor realignment',
//           'Energy harmonization with cosmic energy and horoscope',
//           'Marma points remedies for positive energy enhancement',
//           'Intuitive Devta energies assessment and harmonization'
//         ]
//       }
//     }
//   ];

//   const activeService = services.find(s => s.id === activeTab);
   
//   const downloadBrochure = () => {
//     const brochureContent = generateBrochureContent();
//     const blob = new Blob([brochureContent], { type: 'text/html' });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = `Adiyogi-Foundation-${activeService.title.replace(/\s+/g, '-')}-Brochure.html`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     URL.revokeObjectURL(url);
//   };

//   const generateBrochureContent = () => {
//     return `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Adiyogi Foundation - ${activeService.title} Brochure</title>
//     <style>
//         body {
//             font-family: 'Arial', sans-serif;
//             line-height: 1.6;
//             color: #333;
//             max-width: 800px;
//             margin: 0 auto;
//             padding: 20px;
//             background: linear-gradient(135deg, #fee2e2 0%, #fef2f2 100%);
//         }
//         .header {
//             text-align: center;
//             background: linear-gradient(135deg, #dc2626 0%, #e11d48 100%);
//             color: white;
//             padding: 30px;
//             border-radius: 15px;
//             margin-bottom: 30px;
//         }
//         .header h1 {
//             margin: 0;
//             font-size: 2.5em;
//             font-weight: bold;
//         }
//         .header p {
//             margin: 10px 0 0 0;
//             font-size: 1.2em;
//             opacity: 0.9;
//         }
//         .section {
//             background: white;
//             padding: 25px;
//             margin-bottom: 20px;
//             border-radius: 15px;
//             box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//             border: 1px solid #fee2e2;
//         }
//         .section h2 {
//             color: #dc2626;
//             border-bottom: 2px solid #dc2626;
//             padding-bottom: 10px;
//             margin-bottom: 20px;
//         }
//         .section h3 {
//             color: #991b1b;
//             margin-top: 25px;
//         }
//         .list-item {
//             background: #fef2f2;
//             padding: 15px;
//             margin: 10px 0;
//             border-left: 4px solid #dc2626;
//             border-radius: 8px;
//         }
//         .list-item h4 {
//             margin: 0 0 10px 0;
//             color: #991b1b;
//         }
//         .features {
//             display: grid;
//             grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//             gap: 15px;
//             margin-top: 15px;
//         }
//         .feature {
//             background: #fee2e2;
//             padding: 10px;
//             border-radius: 8px;
//             text-align: center;
//             font-weight: bold;
//             color: #991b1b;
//         }
//         .contact-info {
//             background: linear-gradient(135deg, #dc2626 0%, #e11d48 100%);
//             color: white;
//             padding: 25px;
//             border-radius: 15px;
//             text-align: center;
//         }
//         .contact-info h2 {
//             margin-top: 0;
//             border: none;
//             color: white;
//         }
//         .contact-details {
//             display: flex;
//             justify-content: center;
//             gap: 40px;
//             flex-wrap: wrap;
//             margin: 20px 0;
//         }
//         .contact-item {
//             display: flex;
//             align-items: center;
//             gap: 10px;
//         }
//         .stats {
//             display: grid;
//             grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
//             gap: 20px;
//             margin: 20px 0;
//         }
//         .stat {
//             text-align: center;
//             background: rgba(255, 255, 255, 0.1);
//             padding: 15px;
//             border-radius: 10px;
//         }
//         .stat-number {
//             font-size: 2em;
//             font-weight: bold;
//             display: block;
//         }
//         @media print {
//             body {
//                 background: white;
//             }
//             .section {
//                 box-shadow: none;
//                 border: 1px solid #ccc;
//             }
//         }
//     </style>
// </head>
// <body>
//     <div class="header">
//         <h1>Adiyogi Foundation</h1>
//         <p>${activeService.title}</p>
//     </div>

//     <div class="section">
//         <h2>${activeService.content.title}</h2>
//         <p><strong>${activeService.content.subtitle}</strong></p>
//         <p>${activeService.content.description}</p>
//     </div>

//     ${activeService.id === 'astrology' ? `
//     <div class="section">
//         <h2>Our Services</h2>
//         ${activeService.content.services.map(service => `
//             <div class="list-item">
//                 <h4>${service.name}</h4>
//                 <p>${service.desc}</p>
//                 <div class="features">
//                     ${service.features.map(feature => `<div class="feature">${feature}</div>`).join('')}
//                 </div>
//             </div>
//         `).join('')}
//     </div>

//     <div class="section">
//         <h2>Why Choose Us</h2>
//         ${activeService.content.whyChoose.map(reason => `
//             <div class="list-item">
//                 <p>${reason}</p>
//             </div>
//         `).join('')}
//     </div>
//     ` : `
//     ${activeService.content.impactAreas ? `
//     <div class="section">
//         <h2>Areas of Impact</h2>
//         <div class="features">
//             ${activeService.content.impactAreas.map(area => `<div class="feature">${area}</div>`).join('')}
//         </div>
//     </div>
//     ` : ''}

//     ${activeService.content.auditAreas ? `
//     <div class="section">
//         <h2>Comprehensive Audit Areas</h2>
//         ${activeService.content.auditAreas.map(area => `
//             <div class="list-item">
//                 <p>${area}</p>
//             </div>
//         `).join('')}
//     </div>
//     ` : ''}

//     ${activeService.content.activityAreas ? `
//     <div class="section">
//         <h2>Activity Areas Covered</h2>
//         <div class="features">
//             ${activeService.content.activityAreas.map(area => `<div class="feature">${area}</div>`).join('')}
//         </div>
//     </div>
//     ` : ''}

//     ${activeService.content.implementation ? `
//     <div class="section">
//         <h2>Our Implementation Process</h2>
//         ${activeService.content.implementation.map((step, index) => `
//             <div class="list-item">
//                 <h4>Step ${index + 1}</h4>
//                 <p>${step}</p>
//             </div>
//         `).join('')}
//     </div>
//     ` : ''}
//     `}

//     <div class="contact-info">
//         <h2>Contact Us</h2>
//         <p>Ready to transform your life? Get in touch with our experts today!</p>
//         <div class="contact-details">
//             <div class="contact-item">
//                 <span>📞</span>
//                 <span>+91 99999 99999</span>
//             </div>
//             <div class="contact-item">
//                 <span>✉️</span>
//                 <span>info@adiyogi.org</span>
//             </div>
//         </div>
//         <div class="stats">
//             <div class="stat">
//                 <span class="stat-number">1000+</span>
//                 <span>Happy Clients</span>
//             </div>
//             <div class="stat">
//                 <span class="stat-number">15+</span>
//                 <span>Years Experience</span>
//             </div>
//             <div class="stat">
//                 <span class="stat-number">5000+</span>
//                 <span>Consultations</span>
//             </div>
//             <div class="stat">
//                 <span class="stat-number">99%</span>
//                 <span>Satisfaction Rate</span>
//             </div>
//         </div>
//     </div>
// </body>
// </html>`;
//   };
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden">
//   {/* Gradient Overlay */}
//   <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-red-800/20 z-0"></div>

//   {/* Background Image with Fixed Attachment */}
//   <div
//     className="absolute inset-0 opacity-15 z-0"
//     style={{
//       backgroundImage: "url('/public/istockphoto-137340137-612x612.jpg')",
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundAttachment: 'fixed'
//     }}
//   ></div>

//   {/* Foreground Content */}
//   <div className="relative max-w-7xl mx-auto px-5 py-20 z-10">
//     <div className="text-center" style={{ color: '#2C2C2C' }}>
//       <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8" style={{ backgroundColor: '#C41E3A' }}>
//         <Sparkles className="w-10 h-10 text-white" />
//       </div>
//       <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
//         Our Services
//       </h1>
//       <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed" style={{ color: '#2C2C2C' }}>
//         Transform your life through the ancient wisdom of Astrology and Vastu Shastra with our expert guidance and personalized consultations
//       </p>
//       <div className="flex flex-wrap items-center justify-center gap-8" style={{ color: '#2C2C2C' }}>
//         <div className="flex items-center space-x-3">
//           <Clock className="w-6 h-6" />
//           <span className="text-lg">Available 24/7</span>
//         </div>
//         <div className="flex items-center space-x-3">
//           <Users className="w-6 h-6" />
//           <span className="text-lg">Expert Consultants</span>
//         </div>
//         <div className="flex items-center space-x-3">
//           <Award className="w-6 h-6" />
//           <span className="text-lg">Certified Practitioners</span>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>


//       {/* Services Navigation */}
//       <div className="bg-white shadow-lg sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex overflow-x-auto space-x-1 py-4">
//             {services.map((service) => {
//               const IconComponent = service.icon;
//               const isActive = activeTab === service.id;
//               return (
//                 <button
//                   key={service.id}
//                   onClick={() => setActiveTab(service.id)}
//                   className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
//                     isActive
//                       ? `bg-gradient-to-r ${service.gradient} text-white shadow-lg`
//                       : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
//                   }`}
//                 >
//                   <IconComponent className="w-5 h-5" />
//                   <span>{service.title}</span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Service Content */}
//       <div className="max-w-7xl mx-auto px-6 py-16">
//         {activeService && (
//           <div className="space-y-12">
//             {/* Service Header */}
//             <div className={`bg-gradient-to-br ${activeService.lightGradient} rounded-3xl p-12 border border-red-100`}>
//               <div className="text-center">
//                 <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${activeService.gradient} text-white rounded-2xl mb-6`}>
//                   <activeService.icon className="w-8 h-8" />
//                 </div>
//                 <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//                   {activeService.content.title}
//                 </h2>
//                 <p className="text-xl text-red-600 font-semibold mb-6">
//                   {activeService.content.subtitle}
//                 </p>
//                 <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
//                   {activeService.content.description}
//                 </p>
//               </div>
//             </div>

//             {/* Astrology Services */}
//             {activeService.id === 'astrology' && (
//               <>
//                 <div className="grid lg:grid-cols-2 gap-8">
//                   {activeService.content.services.map((item, index) => (
//                     <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
//                       <div className="flex items-start space-x-4">
//                         <div className={`w-12 h-12 bg-gradient-to-r ${activeService.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
//                           <BookOpen className="w-6 h-6 text-white" />
//                         </div>
//                         <div className="flex-1">
//                           <h4 className="text-xl font-bold text-gray-800 mb-3">{item.name}</h4>
//                           <p className="text-gray-600 mb-4 leading-relaxed">{item.desc}</p>
//                           <ul className="space-y-2">
//                             {item.features.map((feature, i) => (
//                               <li key={i} className="flex items-center text-gray-700">
//                                 <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
//                                 <span>{feature}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
                
//                 <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
//                   <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why People Choose Us</h4>
//                   <div className="grid md:grid-cols-2 gap-6">
//                     {activeService.content.whyChoose.map((reason, index) => (
//                       <div key={index} className="flex items-start space-x-4">
//                         <Heart className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
//                         <span className="text-gray-700 leading-relaxed">{reason}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </>
//             )}

//                 {/* Vastu Services */}
//                 {activeService.id !== 'astrology' && (
//                   <>
//                     {/* Impact Areas */}
//                     {activeService.content.impactAreas && (
//                       <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
//                         <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">Areas of Impact</h4>
//                         <div className="grid md:grid-cols-3 gap-4">
//                           {activeService.content.impactAreas.map((area, index) => (
//                             <div key={index} className={`bg-gradient-to-r ${activeService.lightGradient} p-4 rounded-xl text-center border border-red-100`}>
//                               <span className="font-semibold text-red-700">{area}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Audit Areas and Activity Areas */}
//                     {(activeService.content.auditAreas || activeService.content.activityAreas) && (
//                       <div className="grid lg:grid-cols-2 gap-8">
//                         {activeService.content.auditAreas && (
//                           <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
//                             <h4 className="text-xl font-bold text-gray-800 mb-6">Comprehensive Audit Areas</h4>
//                             <ul className="space-y-3">
//                               {activeService.content.auditAreas.map((area, index) => (
//                                 <li key={index} className="flex items-center text-gray-700">
//                                   <Compass className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
//                                   <span>{area}</span>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         )}
                        
//                         {activeService.content.activityAreas && (
//                           <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
//                             <h4 className="text-xl font-bold text-gray-800 mb-6">Activity Areas Covered</h4>
//                             <div className="grid grid-cols-2 gap-3">
//                               {activeService.content.activityAreas.map((area, index) => (
//                                 <div key={index} className={`bg-gradient-to-r ${activeService.lightGradient} px-4 py-2 rounded-lg text-center border border-red-100`}>
//                                   <span className="text-red-700 font-medium text-sm">{area}</span>
//                                 </div>
//                               ))}
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     )}

//                     {/* Implementation Process */}
//                     {activeService.content.implementation && (
//                       <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
//                         <h4 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Implementation Process</h4>
//                         <div className="grid md:grid-cols-2 gap-6">
//                           {activeService.content.implementation.map((step, index) => (
//                             <div key={index} className="flex items-start space-x-4">
//                               <div className={`w-8 h-8 bg-gradient-to-r ${activeService.gradient} text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0`}>
//                                 {index + 1}
//                               </div>
//                               <div className="flex-1">
//                                 <p className="text-gray-700 leading-relaxed">{step}</p>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </>
//                 )}

//             {/* CTA Section */}
//             {/* <div className={` text-white rounded-2xl p-12 shadow-xl`}style={{   background: 'linear-gradient(135deg, rgba(196, 30, 58, 0.7) 0%, rgba(139, 21, 56, 1) 100%)'
// , boxShadow: '0 8px 32px rgba(196, 30, 58, 0.15)' }}> */}
// <div
//   className={`text-white rounded-2xl p-12 shadow-xl`}
//   style={{
//     backgroundImage: `
//       linear-gradient(135deg, rgba(196, 30, 58, 0.6) 0%, rgba(139, 21, 56, 0.7) 100%),
//       url('/public/istockphoto-1455552376-612x612.webp')
//     `,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     boxShadow: '0 8px 32px rgba(196, 30, 58, 0.17)'
//   }}
// >

//               <div className="text-center">
//                 <h4 className="text-3xl font-bold mb-4">Ready to Get Started?</h4>
//                 <p className="text-xl mb-8 text-red-100">
//                   Take the first step towards transformation with our expert consultation
//                 </p>
//                 <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
//                   <div className="flex items-center space-x-3">
//                     <Phone className="w-5 h-5" />
//                     <span className="text-lg">+91 99999 99999</span>
//                   </div>
//                   <div className="flex items-center space-x-3">
//                     <Mail className="w-5 h-5" />
//                     <span className="text-lg">info@adiyogi.org</span>
//                   </div>
//                 </div>
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                   <button className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
//                     <span>Book Free Consultation</span>
//                     <ArrowRight className="w-5 h-5" />
//                   </button>
//                   <button onClick={downloadBrochure} className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-red-600 transition-all duration-300">
//                     Download Brochure
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Stats Section */}
//       <div className=" text-white py-20" style={{   background: 'linear-gradient(135deg, rgba(196, 30, 58, 0.7) 0%, rgba(139, 21, 56, 1) 100%)'
// , boxShadow: '0 8px 32px rgba(196, 30, 58, 0.15)' }}>
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl font-bold mb-4">Trusted by Thousands</h3>
//             <p className="text-xl text-red-100">Our track record speaks for itself</p>
//           </div>
//           <div className="grid md:grid-cols-4 gap-8 text-center">
//             <div className="space-y-2">
//               <div className="text-5xl font-bold">1000+</div>
//               <div className="text-red-100 text-lg">Happy Clients</div>
//             </div>
//             <div className="space-y-2">
//               <div className="text-5xl font-bold">15+</div>
//               <div className="text-red-100 text-lg">Years Experience</div>
//             </div>
//             <div className="space-y-2">
//               <div className="text-5xl font-bold">5000+</div>
//               <div className="text-red-100 text-lg">Consultations</div>
//             </div>

import React, { useEffect, useState } from 'react';
import { 
  Star, 
  Home, 
  Building2, 
  Factory, 
  Store, 
  Eye, 
  Compass, 
  Heart,
  ChevronRight,
  X,
  Phone,
  Mail,
  Clock,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('astrology');

const navigate=useNavigate();

 const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      navigate('/admin-dashboard');
    }
  }, [user]);


  const services = [
    {
      id: 'astrology',
      title: 'Astrology Consultation',
      icon: Star,
      shortDesc: 'Real guidance through astrology for self-understanding and life clarity.',
      gradient: 'from-red-500 to-rose-600',
      lightGradient: 'from-red-50 to-rose-50',
      content: {
        title: 'Real Guidance Through Astrology',
        subtitle: 'Discover Your True Self & Life Purpose',
        description: 'At Adiyogi Foundation, we believe astrology is a tool for self-understanding, not fortune-telling. Our services are designed to help you gain clarity, confidence, and direction in the areas of life that matter most.',
        services: [
          {
            name: 'Self-Knowledge & Life Guidance',
            desc: 'Understand yourself on a deeper level. Learn about your strengths, inner drives, and areas for personal growth.',
            features: ['Natural personality analysis', 'Emotional patterns understanding', 'Personal growth guidance']
          },
          {
            name: 'Relationship Understanding',
            desc: 'Find harmony in your relationships through astrological insights.',
            features: ['Communication style analysis', 'Compatibility assessment', 'Conflict resolution guidance']
          },
          {
            name: 'Career & Purpose Clarity',
            desc: 'Find work that feels meaningful and aligns with your natural talents.',
            features: ['Natural skills exploration', 'Work environment guidance', 'Career direction clarity']
          },
          {
            name: 'Support for Parents',
            desc: 'Understand your child\'s nature and needs through astrological insights.',
            features: ['Child personality analysis', 'Communication tips', 'Learning style guidance']
          },
          {
            name: 'One-on-One Astrology Session',
            desc: 'Personal consultation with experienced astrologers.',
            features: ['Direct consultation', 'Specific question answers', 'Personalized guidance']
          }
        ],
        whyChoose: [
          'Human-centered approach - No predictions, just insight and support.',
          'Privacy respected - All information stays 100% confidential.',
          'Reports made with care - Thoughtfully written, not machine-generated.',
          'Clarity-focused - Designed to help you feel more sure, not confused.'
        ]
      }
    },
    {
      id: 'vastu-home',
      title: 'Vastu for Home',
      icon: Home,
      shortDesc: 'Transform your home into a thriving hub of positive energy and prosperity.',
      gradient: 'from-rose-600 to-red-600',
      lightGradient: 'from-rose-50 to-red-50',
      content: {
        title: 'Vastu Dosha Report for Home',
        subtitle: 'Create a Harmonious Living Space',
        description: 'Transform your home into a thriving hub of success with expert Vastu guidance from Adiyogi Foundation.',
        auditAreas: [
          'External Factors Assessment',
          'Setback Activities Analysis',
          'Cut and Extended Parts Evaluation',
          'Activities Direction Alignment',
          'Decor Objects Placement Check',
          'Anti-Prakriti Factors Identification',
          'Divine and Demonic Influences',
          'Astro Vastu Check'
        ],
        activityAreas: [
          'Drawing Room', 'Pooja Room', 'Bedroom', 'Kitchen', 'Dining Area',
          'Study Room', 'Toilet', 'Bar Room', 'Store', 'Utility Spaces'
        ],
        process: [
          'Certified surveyor creates detailed to-scale plan',
          '12 types of audits conducted by Vastu experts',
          'Problem identification and discussion',
          'Step-by-step implementation measures',
          'Energy alignment with cosmic forces',
          'Marma points remedies application',
          'Intuitive Devta diagnosis and remedies'
        ]
      }
    },
    {
      id: 'vastu-office',
      title: 'Vastu for Office',
      icon: Building2,
      shortDesc: 'Enhance your office success, sales, cash flow, and customer relationships.',
      gradient: 'from-red-600 to-rose-700',
      lightGradient: 'from-red-50 to-rose-50',
      content: {
        title: 'Vastu Dosha Report for Office',
        subtitle: 'Optimize Your Business Energy',
        description: 'Enhance your office\'s success, including sales, cash flow, customer relationships, and overall prosperity through expert Vastu analysis.',
        impactAreas: [
          'Sales Enhancement',
          'Cash Flow',
          'Customer Relations',
          'Team Productivity',
          'Business Growth',
          'Decision Making'
        ],
        auditAreas: [
          'External Factors Assessment',
          'Setback Activities Identification',
          'Cut and Extended Areas Analysis',
          'Activities in Incorrect Directions',
          'Incorrect Placement of Decor Objects',
          'Anti-Prakriti Factors',
          'Divine and Demonic Influences',
          'Astro Vastu Check'
        ],
        activityAreas: [
          'Reception Area', 'Manager Cabin', 'Conference Room', 'Workstations', 'Accounts Section',
          'Marketing Department', 'IT Section', 'Storage Room', 'Pantry', 'Restrooms'
        ],
        implementation: [
          'Certified surveyor measures workplace and creates detailed plan',
          'Various audits conducted on surveyed maps',
          'Problem identification and step-by-step resolution',
          'Entrance, toilets, sewage, directional strengths addressed',
          'Five elements balanced for harmony',
          'Activities and utilities relocated using Vastu techniques',
          'Energy alignment with cosmic energy and horoscope',
          'Marma points remedies for enhanced energy flow',
          'Intuitive Devta diagnosis and remedies'
        ]
      }
    },
    {
      id: 'vastu-factory',
      title: 'Vastu for Factory',
      icon: Factory,
      shortDesc: 'Enhance production quality, sales, orders, and address departmental issues.',
      gradient: 'from-rose-700 to-red-700',
      lightGradient: 'from-rose-50 to-red-50',
      content: {
        title: 'Vastu Dosha Report for Factory',
        subtitle: 'Maximize Industrial Efficiency',
        description: 'Whether it\'s a new or existing factory, Adiyogi Foundation helps enhance production quality, sales, orders, cash flow, banking support, and address departmental issues.',
        impactAreas: [
          'Production Quality',
          'Sales & Orders',
          'Cash Flow',
          'Banking Support',
          'Labor Relations',
          'Safety & Security',
          'Overall Prosperity'
        ],
        auditAreas: [
          'External Factors Assessment',
          'Production Line Analysis',
          'Raw Material Storage Evaluation',
          'Machinery Placement Check',
          'Worker Safety Areas',
          'Quality Control Sections',
          'Administrative Offices',
          'Energy Flow Assessment'
        ],
        activityAreas: [
          'Production Floor', 'Raw Material Store', 'Finished Goods Store', 'Quality Control', 'Maintenance Section',
          'Admin Office', 'Canteen', 'Security Gate', 'Parking Area', 'Utility Areas'
        ],
        implementation: [
          'Detailed survey and to-scale plan creation',
          'Seven types of audits by experts',
          'Problem discussion and step-by-step measures',
          'Seating, raw material & machinery positioning per 5 Elements theory',
          'Relocation or rectification using Vastu techniques',
          'Interior adjustments following Vastu principles',
          'Energy alignment with cosmic energy and horoscope',
          'Marma points remedies for energy enhancement',
          'Devta energy assessment and harmonization'
        ]
      }
    },
    {
      id: 'vastu-commercial',
      title: 'Vastu for Commercial/Industry',
      icon: Store,
      shortDesc: 'Assess divine energies and optimize commercial properties for success.',
      gradient: 'from-red-700 to-rose-800',
      lightGradient: 'from-red-50 to-rose-50',
      content: {
        title: 'Vastu Dosha Report for Commercial/Industry',
        subtitle: 'Divine Energy Assessment',
        description: 'An experienced Adiyogi Foundation Vastu Acharya will visit your commercial property to assess the strength of 33 Devtas (divine energies) and 12 Asuras (negative forces) using intuition and Bhoomi Nadi (earth energy reading).',
        impactAreas: [
          'Project Completion',
          'Leasing Success',
          'Sales & Orders',
          'Banking Support',
          'Customer Relations',
          'Overall Prosperity'
        ],
        auditAreas: [
          'Divine Energy Assessment',
          'Site Layout Analysis',
          'Commercial Viability Check',
          'Customer Flow Patterns',
          'Tenant Satisfaction Areas',
          'Financial Energy Zones',
          'Security & Safety Aspects',
          'Future Growth Potential'
        ],
        activityAreas: [
          'Reception Lobby', 'Retail Spaces', 'Office Suites', 'Common Areas', 'Food Court',
          'Parking Areas', 'Service Areas', 'Security Desk', 'Maintenance Room', 'Storage Areas'
        ],
        implementation: [
          'Certified surveyor creates to-scale plan including surroundings',
          'Seven types of audits conducted by experts',
          'Goals and concerns consultation and advice',
          'Five elements balancing - earth strength, road hits, entrance, toilets, sewage, directional forces',
          'Activity & utility objects relocation using Vastu techniques',
          'Sales office & interior decor realignment',
          'Energy harmonization with cosmic energy and horoscope',
          'Marma points remedies for positive energy enhancement',
          'Intuitive Devta energies assessment and harmonization'
        ]
      }
    }
  ];

  const activeService = services.find(s => s.id === activeTab);
   
  const downloadBrochure = () => {
    const brochureContent = generateBrochureContent();
    const blob = new Blob([brochureContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Adiyogi-Foundation-${activeService.title.replace(/\s+/g, '-')}-Brochure.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const generateBrochureContent = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adiyogi Foundation - ${activeService.title} Brochure</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: linear-gradient(135deg, #fee2e2 0%, #fef2f2 100%);
        }
        .header {
            text-align: center;
            background: linear-gradient(135deg, #dc2626 0%, #e11d48 100%);
            color: white;
            padding: 30px;
            border-radius: 15px;
            margin-bottom: 30px;
        }
        .header h1 {
            margin: 0;
            font-size: 2.5em;
            font-weight: bold;
        }
        .header p {
            margin: 10px 0 0 0;
            font-size: 1.2em;
            opacity: 0.9;
        }
        .section {
            background: white;
            padding: 25px;
            margin-bottom: 20px;
            border-radius: 15px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border: 1px solid #fee2e2;
        }
        .section h2 {
            color: #dc2626;
            border-bottom: 2px solid #dc2626;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }
        .section h3 {
            color: #991b1b;
            margin-top: 25px;
        }
        .list-item {
            background: #fef2f2;
            padding: 15px;
            margin: 10px 0;
            border-left: 4px solid #dc2626;
            border-radius: 8px;
        }
        .list-item h4 {
            margin: 0 0 10px 0;
            color: #991b1b;
        }
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 15px;
        }
        .feature {
            background: #fee2e2;
            padding: 10px;
            border-radius: 8px;
            text-align: center;
            font-weight: bold;
            color: #991b1b;
        }
        .contact-info {
            background: linear-gradient(135deg, #dc2626 0%, #e11d48 100%);
            color: white;
            padding: 25px;
            border-radius: 15px;
            text-align: center;
        }
        .contact-info h2 {
            margin-top: 0;
            border: none;
            color: white;
        }
        .contact-details {
            display: flex;
            justify-content: center;
            gap: 40px;
            flex-wrap: wrap;
            margin: 20px 0;
        }
        .contact-item {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .stat {
            text-align: center;
            background: rgba(255, 255, 255, 0.1);
            padding: 15px;
            border-radius: 10px;
        }
        .stat-number {
            font-size: 2em;
            font-weight: bold;
            display: block;
        }
        @media print {
            body {
                background: white;
            }
            .section {
                box-shadow: none;
                border: 1px solid #ccc;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Adiyogi Foundation</h1>
        <p>${activeService.title}</p>
    </div>

    <div class="section">
        <h2>${activeService.content.title}</h2>
        <p><strong>${activeService.content.subtitle}</strong></p>
        <p>${activeService.content.description}</p>
    </div>

    ${activeService.id === 'astrology' ? `
    <div class="section">
        <h2>Our Services</h2>
        ${activeService.content.services.map(service => `
            <div class="list-item">
                <h4>${service.name}</h4>
                <p>${service.desc}</p>
                <div class="features">
                    ${service.features.map(feature => `<div class="feature">${feature}</div>`).join('')}
                </div>
            </div>
        `).join('')}
    </div>

    <div class="section">
        <h2>Why Choose Us</h2>
        ${activeService.content.whyChoose.map(reason => `
            <div class="list-item">
                <p>${reason}</p>
            </div>
        `).join('')}
    </div>
    ` : `
    ${activeService.content.impactAreas ? `
    <div class="section">
        <h2>Areas of Impact</h2>
        <div class="features">
            ${activeService.content.impactAreas.map(area => `<div class="feature">${area}</div>`).join('')}
        </div>
    </div>
    ` : ''}

    ${activeService.content.auditAreas ? `
    <div class="section">
        <h2>Comprehensive Audit Areas</h2>
        ${activeService.content.auditAreas.map(area => `
            <div class="list-item">
                <p>${area}</p>
            </div>
        `).join('')}
    </div>
    ` : ''}

    ${activeService.content.activityAreas ? `
    <div class="section">
        <h2>Activity Areas Covered</h2>
        <div class="features">
            ${activeService.content.activityAreas.map(area => `<div class="feature">${area}</div>`).join('')}
        </div>
    </div>
    ` : ''}

    ${activeService.content.implementation ? `
    <div class="section">
        <h2>Our Implementation Process</h2>
        ${activeService.content.implementation.map((step, index) => `
            <div class="list-item">
                <h4>Step ${index + 1}</h4>
                <p>${step}</p>
            </div>
        `).join('')}
    </div>
    ` : ''}
    `}

    <div class="contact-info">
        <h2>Contact Us</h2>
        <p>Ready to transform your life? Get in touch with our experts today!</p>
        <div class="contact-details">
            <div class="contact-item">
                <span>📞</span>
                <span>+91 9175033022</span>
            </div>
            <div class="contact-item">
                <span>✉️</span>
                <span>social.adiyogifoundation@gmail.com</span>
            </div>
        </div>
        <div class="stats">
            <div class="stat">
                <span class="stat-number">100+</span>
                <span>Happy Clients</span>
            </div>
            <div class="stat">
                <span class="stat-number">15+</span>
                <span>Years Experience</span>
            </div>
            <div class="stat">
                <span class="stat-number">500+</span>
                <span>Consultations</span>
            </div>
            <div class="stat">
                <span class="stat-number">99%</span>
                <span>Satisfaction Rate</span>
            </div>
        </div>
    </div>
</body>
</html>`;
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-red-800/20 z-0"></div>

        {/* Background Image with Fixed Attachment */}
        <div
          className="absolute inset-0 opacity-20 z-0"
          style={{
            backgroundImage: "url('/istockphoto-137340137-612x612.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        ></div>

        {/* Foreground Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20 lg:py-24 z-10">
          <div className="text-center" style={{ color: '#2C2C2C' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full mb-6 md:mb-8" style={{ backgroundColor: '#C41E3A' }}>
              <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 md:mb-12 max-w-3xl md:max-w-4xl mx-auto leading-relaxed" style={{ color: '#2C2C2C' }}>
              Transform your life through the ancient wisdom of Astrology and Vastu Shastra with our expert guidance and personalized consultations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8" style={{ color: '#2C2C2C' }}>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-base sm:text-lg">Available 24/7</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-base sm:text-lg">Expert Consultants</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-base sm:text-lg">Certified Practitioners</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Navigation */}
      <div className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex overflow-x-auto pb-2 hide-scrollbar">
            <div className="flex space-x-1 py-3 md:py-4">
              {services.map((service) => {
                const IconComponent = service.icon;
                const isActive = activeTab === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    className={`flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-2 sm:py-3 md:py-4 rounded-lg md:rounded-xl font-medium sm:font-semibold transition-all duration-300 whitespace-nowrap ${
                      isActive
                        ? `bg-gradient-to-r ${service.gradient} text-white shadow-lg`
                        : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">{service.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Service Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {activeService && (
          <div className="space-y-8 md:space-y-12">
            {/* Service Header */}
            <div className={`bg-gradient-to-br ${activeService.lightGradient} rounded-xl md:rounded-2xl lg:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-red-100`}>
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r ${activeService.gradient} text-white rounded-lg sm:rounded-xl md:rounded-2xl mb-4 sm:mb-5 md:mb-6`}>
                  <activeService.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
                  {activeService.content.title}
                </h2>
                <p className="text-lg sm:text-xl text-red-600 font-semibold mb-4 sm:mb-5 md:mb-6">
                  {activeService.content.subtitle}
                </p>
                <p className="text-base sm:text-lg text-gray-700 max-w-3xl md:max-w-4xl mx-auto leading-relaxed">
                  {activeService.content.description}
                </p>
              </div>
            </div>

            {/* Astrology Services */}
            {activeService.id === 'astrology' && (
              <>
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                  {activeService.content.services.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl md:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${activeService.gradient} rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{item.name}</h4>
                          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{item.desc}</p>
                          <ul className="space-y-1 sm:space-y-2">
                            {item.features.map((feature, i) => (
                              <li key={i} className="flex items-center text-sm sm:text-base text-gray-700">
                                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white rounded-xl md:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">Why People Choose Us</h4>
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    {activeService.content.whyChoose.map((reason, index) => (
                      <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                        <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0 mt-0.5 sm:mt-1" />
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Vastu Services */}
            {activeService.id !== 'astrology' && (
              <>
                {/* Impact Areas */}
                {activeService.content.impactAreas && (
                  <div className="bg-white rounded-xl md:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">Areas of Impact</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                      {activeService.content.impactAreas.map((area, index) => (
                        <div key={index} className={`bg-gradient-to-r ${activeService.lightGradient} p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl text-center border border-red-100`}>
                          <span className="text-xs sm:text-sm md:text-base font-medium sm:font-semibold text-red-700">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Audit Areas and Activity Areas */}
                {(activeService.content.auditAreas || activeService.content.activityAreas) && (
                  <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                    {activeService.content.auditAreas && (
                      <div className="bg-white rounded-xl md:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
                        <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">Comprehensive Audit Areas</h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {activeService.content.auditAreas.map((area, index) => (
                            <li key={index} className="flex items-center text-sm sm:text-base text-gray-700">
                              <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-2 sm:mr-3 flex-shrink-0" />
                              <span>{area}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {activeService.content.activityAreas && (
                      <div className="bg-white rounded-xl md:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
                        <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">Activity Areas Covered</h4>
                        <div className="grid grid-cols-2 gap-2 sm:gap-3">
                          {activeService.content.activityAreas.map((area, index) => (
                            <div key={index} className={`bg-gradient-to-r ${activeService.lightGradient} px-2 sm:px-3 py-1 sm:py-2 rounded-md sm:rounded-lg text-center border border-red-100`}>
                              <span className="text-xs sm:text-sm text-red-700 font-medium">{area}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Implementation Process */}
                {activeService.content.implementation && (
                  <div className="bg-white rounded-xl md:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8 text-center">Our Implementation Process</h4>
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      {activeService.content.implementation.map((step, index) => (
                        <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                          <div className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r ${activeService.gradient} text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0`}>
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* CTA Section */}
            <div
              className={`text-white rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl`}
              style={{
                backgroundImage: `
                  linear-gradient(135deg, rgba(196, 30, 58, 0.6) 0%, rgba(139, 21, 56, 0.7) 100%),
                  url('/istockphoto-1455552376-612x612.webp')
                `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                boxShadow: '0 8px 32px rgba(196, 30, 58, 0.17)'
              }}
            >
              <div className="text-center">
                <h4 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Get Started?</h4>
                <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-red-100">
                  Take the first step towards transformation with our expert consultation.
                </p>
                <div className="flex flex-col md:flex-row gap-4 sm:gap-6 justify-center items-center mb-6 sm:mb-8">
                  {/* <div className="flex items-center space-x-2 sm:space-x-3">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-base sm:text-lg">+91 9175033022</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-base sm:text-lg">social.adiyogifoundation@gmail.com</span>
                  </div> */}
                 <div className="flex items-center space-x-2 sm:space-x-3">
  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-300" />
  <a
    href="tel:+919175033022"
    className="text-base sm:text-lg font-medium text-gray-800 dark:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
    aria-label="Call us at +91 9175033022"
  >
    +91 9175033022
  </a>
</div>

<div className="flex items-center space-x-2 sm:space-x-3">
  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-300" />
  <a
    href="mailto:social.adiyogifoundation@gmail.com"
    className="text-base sm:text-lg font-medium text-gray-800 dark:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
    aria-label="Email us at social.adiyogifoundation@gmail.com"
  >
    social.adiyogifoundation@gmail.com
  </a>
</div>


                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link to='/contact'>
                    <button className="bg-white text-red-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 hover:scale-x-105">
                    <span className="text-sm sm:text-base">Book Free Consultation</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  </Link>
                
                  <button onClick={downloadBrochure} className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-white hover:text-red-600 transition-all duration-300 text-sm sm:text-base">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="text-white py-12 sm:py-16 md:py-20" style={{ background: 'linear-gradient(135deg, rgba(196, 30, 58, 0.7) 0%, rgba(139, 21, 56, 1) 100%)', boxShadow: '0 8px 32px rgba(196, 30, 58, 0.15)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Trusted by Thousands</h3>
            <p className="text-lg sm:text-xl text-red-100">Our track record speaks for itself.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            <div className="space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold">100+</div>
              <div className="text-red-100 text-sm sm:text-base md:text-lg">Happy Clients</div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold">15+</div>
              <div className="text-red-100 text-sm sm:text-base md:text-lg">Years Experience</div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold">500+</div>
              <div className="text-red-100 text-sm sm:text-base md:text-lg">Consultations</div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold">99%</div>
              <div className="text-red-100 text-sm sm:text-base md:text-lg">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;