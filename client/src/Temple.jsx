// import React, { useState } from 'react';
// import { Calendar, MapPin, Heart, Users, Star, ChevronDown, ChevronUp, Eye, Compass, Building, Zap, Clock, CheckCircle, Circle, DotIcon } from 'lucide-react';

// const Temple = () => {
//   const [expandedTemple, setExpandedTemple] = useState(null);

//   const toggleTemple = (index) => {
//     setExpandedTemple(expandedTemple === index ? null : index);
//   };

//   // Om Symbol Component
//   const OmSymbol = ({ className, color = "#C41E3A" }) => (
//     <svg viewBox="0 0 100 100" className={className} fill={color}>
//       <path d="M15,35 Q20,25 35,30 Q45,35 40,50 Q35,65 25,60 Q15,55 15,45 Z M45,25 Q55,20 65,25 Q75,30 70,40 Q65,50 55,45 Q45,40 45,30 Z M25,70 Q35,65 45,70 Q55,75 50,85 Q45,95 35,90 Q25,85 25,75 Z"/>
//       <circle cx="70" cy="70" r="8"/>
//     </svg>
//   );

//   // Lotus Symbol Component
//   const LotusSymbol = ({ className, color = "#C41E3A" }) => (
//     <svg viewBox="0 0 100 100" className={className} fill={color}>
//       <path d="M50,20 Q30,30 25,50 Q30,70 50,80 Q70,70 75,50 Q70,30 50,20 Z"/>
//       <path d="M50,30 Q35,35 30,50 Q35,65 50,70 Q65,65 70,50 Q65,35 50,30 Z" fill="#8B1538"/>
//       <circle cx="50" cy="50" r="5" fill="#FFFEF7"/>
//     </svg>
//   );

//   const temples = [
//     {
//       name: "Kshetra 1 - Shri Radhakrishna Mandir",
//       status: "Launching Soon",
//       description: "A brief on location, historic relevance, restoration plan.",
//       detailedDescription: "This ancient temple dedicated to Lord Krishna and Radha has stood for over 400 years as a beacon of devotion. The intricate stone carvings and sacred geometry of its architecture represent the pinnacle of medieval temple craftsmanship.",
//       image: "/public/WhatsApp Image 2025-06-26 at 6.30.42 PM.jpeg",
//       progress: 25,
//       location: "Vrindavan, Uttar Pradesh",
//       significance: "Ancient spiritual center with rich cultural heritage dating back centuries.",
//       historicalRelevance: "Built in 1623 CE during the Mughal period, this temple survived multiple invasions and remains a testament to the unwavering faith of devotees.",
//       restorationPlan: "Phase 1: Structural assessment and foundation strengthening. Phase 2: Restoration of original frescoes and carvings. Phase 3: Sacred ritual space consecration.",
//       fundingNeeded: "₹15,00,000",
//       communityImpact: "Serves 5,000+ devotees daily, provides spiritual education to 200+ children",
//       expectedCompletion: "December 2025"
//     },
//     {
//       name: "Kshetra 2 - Mata Durga Shakti Peeth", 
//       status: "Under Survey",
//       description: "Why this temple matters and what needs rebuilding.",
//       detailedDescription: "One of the 51 Shakti Peethas, this sacred site holds immense significance in Hindu tradition. The temple's deteriorating condition threatens to erase centuries of spiritual heritage and community gathering.",
//       image: "/public/WhatsApp Image 2025-06-27 at 2.16.47 AM.jpeg",
//       progress: 20,
//       location: "Haridwar, Uttarakhand",
//       significance: "Community gathering place requiring structural restoration and spiritual renewal.",
//       historicalRelevance: "Legend states that Sati's right hand fell here, making it one of the most powerful Shakti Peethas for devotees seeking divine blessings.",
//       restorationPlan: "Complete reconstruction of the main shrine, restoration of ancient water channels, and creation of accessible pathways for elderly devotees.",
//       fundingNeeded: "₹25,00,000",
//       communityImpact: "Central to Navratri celebrations for 10,000+ devotees, supports 50+ local artisan families",
//       expectedCompletion: "March 2026"
//     }
//   ];

//   const timelineEvents = [
//     { 
//       period: "2025 Q1", 
//       event: "Survey & Community Consultation", 
//       status: "current",
//       description: "Comprehensive site assessment, community meetings, and spiritual leader consultations",
//       icon: Eye
//     },
//     { 
//       period: "2025 Q2", 
//       event: "Temple 1 Restoration Begins", 
//       status: "upcoming",
//       description: "Foundation work, structural repairs, and artisan team mobilization",
//       icon: Building
//     },
//     { 
//       period: "2025 Q4", 
//       event: "Temple 1 Consecration + Public Opening", 
//       status: "upcoming",
//       description: "Sacred consecration ceremony, community celebration, and official reopening",
//       icon: Star
//     },
//     { 
//       period: "2026 Q1", 
//       event: "Temple 2 Project Initiation", 
//       status: "future",
//       description: "Begin restoration of second sacred site with enhanced community involvement",
//       icon: Compass
//     }
//   ];

//   const spiritualValues = [
//     {
//       title: "Consecration",
//       description: "Not just conservation, but spiritual awakening of sacred spaces",
//       icon: Zap,
//       color: "#C41E3A"
//     },
//     {
//       title: "Community",
//       description: "Working hand-in-hand with local communities and spiritual leaders",
//       icon: Users,
//       color: "#8B1538"
//     },
//     {
//       title: "Heritage",
//       description: "Preserving architectural and cultural legacy for future generations",
//       icon: Building,
//       color: "#C41E3A"
//     },
//     {
//       title: "Devotion",
//       description: "Honoring the divine through dedicated service and reverence",
//       icon: Heart,
//       color: "#8B1538"
//     }
//   ];

//   const restorationStats = [
//     { number: "500+", label: "Years of Combined Temple History", icon: Clock },
//     { number: "15,000+", label: "Community Members Served", icon: Users },
//     { number: "2", label: "Sacred Sites Under Restoration", icon: Building },
//     { number: "100%", label: "Community-Led Approach", icon: Heart }
//   ];

//   return (
//     <div className="min-h-screen" style={{ backgroundColor: '#FDF8F8' }}>
//       {/* Hero Section */}
//       <div className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-red-800/20"></div>
//         <div 
//           className="absolute inset-0 opacity-15"
//           style={{
//             backgroundImage: "url('https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&h=800&fit=crop&crop=center')",
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundAttachment:"fixed"
//           }}
//         ></div>
//         <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <div className="flex justify-center mb-8">
//               <div className="p-5 rounded-full shadow-lg" style={{ backgroundColor: '#C41E3A' }}>
//                 <OmSymbol className="w-16 h-16" color="#FFFEF7" />
//               </div>
//             </div>
//             <h1 className="text-6xl font-bold mb-7" style={{ color: '#2C2C2C' }}>
//               Sacred Temple Restoration
//             </h1>
//             <p className="text-xl max-w-4xl mx-auto leading-relaxed mb-8" style={{ color: '#2C2C2C' }}>
//               Our temple work isn't just conservation, it's consecration. We identify neglected sacred sites, 
//               then work with local communities, artisans, and spiritual leaders to restore their physical 
//               structure and spiritual energy.
//             </p>
//             <div className="flex justify-center items-center space-x-6 mb-8">
//               <LotusSymbol className="w-8 h-8" />
//               <div className="w-12 h-0.5" style={{ backgroundColor: '#C41E3A' }}></div>
//               <OmSymbol className="w-8 h-8" />
//               <div className="w-12 h-0.5" style={{ backgroundColor: '#C41E3A' }}></div>
//               <LotusSymbol className="w-8 h-8" />
//             </div>
//             <button
//               className="px-8 py-4 rounded-lg font-semibold text-white text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
//               style={{ 
//                 backgroundColor: '#8B1538',
//                 boxShadow: '0 4px 20px rgba(139, 21, 56, 0.3)'
//               }}
//             >
//               Join Our Sacred Mission
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Project Overview */}
//       <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
//         <div className="text-center mb-20">
//           <h2 className="text-4xl font-bold mb-6" style={{ color: '#2C2C2C' }}>
//             Project Overview
//           </h2>
//           {/* <div className="w-32 h-1 mx-auto mb-8" style={{ backgroundColor: '#C41E3A' }}></div> */}
//           <p className="text-lg max-w-5xl mx-auto leading-relaxed" style={{ color: '#2C2C2C' }}>
//             Through deep reverence and community collaboration, we breathe new life into forgotten sanctuaries, 
//             ensuring these sacred spaces continue to serve as beacons of spiritual light for generations to come. 
//             Each restoration project is a sacred journey of healing, renewal, and divine reconnection.
//           </p>
//         </div>

//         {/* Spiritual Values Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
//           {spiritualValues.map((value, index) => (
//             <div
//               key={index}
//               className="text-center p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
//               style={{ 
//                 backgroundColor: '#FFFEF7',
//                 boxShadow: '0 4px 12px rgba(196, 30, 58, 0.15)'
//               }}
//             >
//               <div className="flex justify-center mb-4">
//                 <div className="p-4 rounded-full" style={{ backgroundColor: value.color }}>
//                   <value.icon className="w-8 h-8 text-white" />
//                 </div>
//               </div>
//               <h3 className="text-xl font-bold mb-3" style={{ color: '#2C2C2C' }}>
//                 {value.title}
//               </h3>
//               <p style={{ color: '#6B4B4B' }}>
//                 {value.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Stats Section */}
//         <div className="mb-20">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {restorationStats.map((stat, index) => (
//               <div key={index} className="text-center p-6 rounded-lg" style={{ backgroundColor: '#FFFEF7' }}>
//                 <div className="flex justify-center mb-4">
//                   <stat.icon className="w-10 h-10" style={{ color: '#C41E3A' }} />
//                 </div>
//                 <div className="text-3xl font-bold mb-2" style={{ color: '#C41E3A' }}>
//                   {stat.number}
//                 </div>
//                 <div className="text-sm font-medium" style={{ color: '#2C2C2C' }}>
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Temples List */}
//         <div className="mb-24">
//           <h3 className="text-3xl font-bold text-center mb-4" style={{ color: '#2C2C2C' }}>
//             Temples List
//           </h3>
//           <p className="text-center mb-12" style={{ color: '#6B4B4B' }}>
//             (Collapsible Sections per temple)
//           </p>
          
//           <div className="space-y-12">
//             {temples.map((temple, index) => (
//               <div 
//                 key={index}
//                 className="rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
//                 style={{ 
//                   backgroundColor: '#FFFEF7',
//                   boxShadow: '0 8px 32px rgba(196, 30, 58, 0.15)'
//                 }}
//               >
//                 <div className="lg:flex">
//                   <div className="lg:w-1/2 relative">
//                     <img 
//                       src={temple.image} 
//                       alt={temple.name}
//                       className="w-full h-80 lg:h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//                     <div className="absolute bottom-4 left-4 right-4">
//                       <div className="flex items-center text-white">
//                         <MapPin className="w-4 h-4 mr-2" />
//                         <span className="text-sm font-medium">{temple.location}</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="lg:w-1/2 p-8 lg:p-12">
//                     <div className="flex justify-between items-start mb-6">
//                       <h4 className="text-2xl lg:text-3xl font-bold pr-4" style={{ color: '#2C2C2C' }}>
//                         {temple.name}
//                       </h4>
//                       <span 
//                         className="px-4 py-2 rounded-full text-sm font-bold text-white whitespace-nowrap"
//                         style={{ backgroundColor: temple.status === 'Launching Soon' ? '#8B1538' : '#C41E3A' }}
//                       >
//                         {temple.status}
//                       </span>
//                     </div>
                    
//                     <p className="mb-6 text-lg leading-relaxed" style={{ color: '#2C2C2C' }}>
//                       {temple.description}
//                     </p>

//                     <div className="mb-8">
//                       <div className="flex justify-between items-center mb-3">
//                         <span className="font-semibold" style={{ color: '#2C2C2C' }}>
//                           Restoration Progress
//                         </span>
//                         <div className="flex items-center">
//                           <span className="text-lg font-bold mr-2" style={{ color: '#C41E3A' }}>
//                             {temple.progress}%
//                           </span>
//                           <CheckCircle className="w-5 h-5" style={{ color: temple.progress > 20 ? '#C41E3A' : '#F4E8E8' }} />
//                         </div>
//                       </div>
//                       <div className="w-full rounded-full h-3 shadow-inner" style={{ backgroundColor: '#F4E8E8' }}>
//                         <div 
//                           className="h-3 rounded-full transition-all duration-500 shadow-sm"
//                           style={{ 
//                             backgroundColor: '#C41E3A',
//                             width: `${temple.progress}%`,
//                             background: `linear-gradient(90deg, #C41E3A 0%, #8B1538 100%)`
//                           }}
//                         ></div>
//                       </div>
//                     </div>

//                     <button
//                       onClick={() => toggleTemple(index)}
//                       className="flex items-center justify-between w-full p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-md"
//                       style={{ 
//                         borderColor: expandedTemple === index ? '#C41E3A' : '#F4E8E8',
//                         backgroundColor: expandedTemple === index ? '#F4E8E8' : 'transparent'
//                       }}
//                     >
//                       <span className="font-semibold text-lg" style={{ color: '#2C2C2C' }}>
//                         Explore Sacred Details
//                       </span>
//                       {expandedTemple === index ? 
//                         <ChevronUp className="w-6 h-6" style={{ color: '#C41E3A' }} /> : 
//                         <ChevronDown className="w-6 h-6" style={{ color: '#C41E3A' }} />
//                       }
//                     </button>

//                     {expandedTemple === index && (
//                       <div className="mt-6 space-y-6">
//                         <div className="p-6 rounded-lg" style={{ backgroundColor: '#F4E8E8' }}>
//                           <h5 className="font-bold text-lg mb-3" style={{ color: '#2C2C2C' }}>
//                             Historical Significance
//                           </h5>
//                           <p className="mb-4 leading-relaxed" style={{ color: '#2C2C2C' }}>
//                             {temple.historicalRelevance}
//                           </p>
                          
//                           <div className="grid md:grid-cols-2 gap-6 mb-6">
//                             <div>
//                               <h6 className="font-semibold mb-2" style={{ color: '#8B1538' }}>
//                                 Funding Needed
//                               </h6>
//                               <p className="text-lg font-bold" style={{ color: '#C41E3A' }}>
//                                 {temple.fundingNeeded}
//                               </p>
//                             </div>
//                             <div>
//                               <h6 className="font-semibold mb-2" style={{ color: '#8B1538' }}>
//                                 Expected Completion
//                               </h6>
//                               <p className="font-medium" style={{ color: '#2C2C2C' }}>
//                                 {temple.expectedCompletion}
//                               </p>
//                             </div>
//                           </div>

//                           <div className="mb-6">
//                             <h6 className="font-semibold mb-2" style={{ color: '#8B1538' }}>
//                               Community Impact
//                             </h6>
//                             <p style={{ color: '#2C2C2C' }}>
//                               {temple.communityImpact}
//                             </p>
//                           </div>

//                           <div className="mb-6">
//                             <h6 className="font-semibold mb-2" style={{ color: '#8B1538' }}>
//                               Restoration Plan
//                             </h6>
//                             <p style={{ color: '#2C2C2C' }}>
//                               {temple.restorationPlan}
//                             </p>
//                           </div>
                          
//                           <div className="flex flex-col sm:flex-row gap-4">
//                             <button
//                               className="flex-1 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
//                               style={{ 
//                                 backgroundColor: '#8B1538',
//                                 boxShadow: '0 4px 16px rgba(139, 21, 56, 0.25)'
//                               }}
//                             >
//                               <Heart className="w-5 h-5 inline mr-2" />
//                               Support Restoration
//                             </button>
//                             <button
//                               className="flex-1 px-6 py-3 rounded-lg font-semibold border-2 transition-all duration-300 hover:shadow-md"
//                               style={{ 
//                                 borderColor: '#C41E3A',
//                                 color: '#C41E3A',
//                                 backgroundColor: 'transparent'
//                               }}
//                             >
//                               <Users className="w-5 h-5 inline mr-2" />
//                               Join Community
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Timeline Section */}
//         <div className="mb-20">
//           <h3 className="text-3xl font-bold text-center mb-4" style={{ color: '#2C2C2C' }}>
//             Roadmap Timeline
//           </h3>
//           <p className="text-center mb-12" style={{ color: '#6B4B4B' }}>
//             (Visual Timeline Suggested)
//           </p>
          
//           <div className="max-w-5xl mx-auto">
//             <div className="relative">
//               <div 
//                 className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full"
//                 style={{ backgroundColor: '#F4E8E8' }}
//               ></div>
              
//               {timelineEvents.map((event, index) => (
//                 <div key={index} className="relative mb-12 last:mb-0">
//                   <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
//                     <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
//                       <div 
//                         className="p-6 rounded-lg shadow-lg"
//                         style={{ backgroundColor: '#FFFEF7' }}
//                       >
//                         <div className="flex items-center mb-3" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
//                           <event.icon className="w-6 h-6 mr-2" style={{ color: '#C41E3A' }} />
//                           <span className="font-bold text-lg" style={{ color: event.status === 'current' ? '#C41E3A' : '#2C2C2C' }}>
//                             {event.period}
//                           </span>
//                         </div>
//                         <h4 className="font-bold text-xl mb-2" style={{ color: '#2C2C2C' }}>
//                           {event.event}
//                         </h4>
//                         <p style={{ color: '#6B4B4B' }}>
//                           {event.description}
//                         </p>
//                       </div>
//                     </div>
                    
//                     <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white shadow-lg"
//                          style={{ backgroundColor: event.status === 'current' ? '#C41E3A' : event.status === 'upcoming' ? '#8B1538' : '#F4E8E8' }}>
//                       {event.status === 'current' && <div className="w-full h-full rounded-full animate-pulse" style={{ backgroundColor: '#C41E3A' }}></div>}
//                     </div>
                    
//                     <div className="w-1/2"></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="text-center p-12 rounded-xl" style={{   background: 'linear-gradient(135deg, rgba(196, 30, 58, 0.7) 0%, rgba(139, 21, 56, 1) 100%)'
// , boxShadow: '0 8px 32px rgba(196, 30, 58, 0.15)' }}>
//           <div className="flex justify-center mb-6">
//             <LotusSymbol className="w-16 h-16" />
//           </div>
//           <h3 className="text-3xl font-bold mb-4" style={{   color: '#FFFEF7' }}>
//             Be Part of This Sacred Mission
//           </h3>
//           <p className="text-lg mb-8 max-w-3xl mx-auto" style={{  color: '#FFFEF7' }}>
//             Every contribution, whether through funds, time, or prayers, helps restore these ancient sanctuaries 
//             to their divine glory. Join us in preserving spiritual heritage for future generations.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button
//               className="px-8 py-4 rounded-lg font-semibold text-white text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
//               style={{ 
//                 backgroundColor: '#C41E3A',
//                 boxShadow: '0 4px 20px rgba(196, 30, 58, 0.3)'
//               }}
//             >
//               <Heart className="w-5 h-5 inline mr-2" />
//               Donate Now
//             </button>
//             <button
//               className="px-8 py-4 rounded-lg font-semibold border-2 text-lg transition-all duration-300 hover:shadow-lg"
//               style={{ 
//                 borderColor: '#8B1538',
//                  color: '#FFFEF7',
//                 backgroundColor: 'transparent'
//               }}
//             >
//               <Users className="w-5 h-5 inline mr-2" />
//               Volunteer with Us
//             </button>
//           </div>
//         </div>


//       </div>
//     </div>
//   );
// };

// export default Temple;







import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Heart, Users, Star, ChevronDown, ChevronUp, Eye, Compass, Building, Zap, Clock, CheckCircle, Circle, DotIcon, Satellite } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Temple = () => {





const navigate=useNavigate();

 const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      navigate('/admin-dashboard');
    }
  }, [user]);





  // const [expandedTemple, setExpandedTemple] = useState(null);

  // const toggleTemple = (index) => {
  //   setExpandedTemple(expandedTemple === index ? null : index);
  // };

  // Om Symbol Component
  const OmSymbol = ({ className, color = "#C41E3A" }) => (
    <svg viewBox="0 0 100 100" className={className} fill={color}>
      <path d="M15,35 Q20,25 35,30 Q45,35 40,50 Q35,65 25,60 Q15,55 15,45 Z M45,25 Q55,20 65,25 Q75,30 70,40 Q65,50 55,45 Q45,40 45,30 Z M25,70 Q35,65 45,70 Q55,75 50,85 Q45,95 35,90 Q25,85 25,75 Z"/>
      <circle cx="70" cy="70" r="8"/>
    </svg>
  );

  // Lotus Symbol Component
  const LotusSymbol = ({ className, color = "#C41E3A" }) => (
    <svg viewBox="0 0 100 100" className={className} fill={color}>
      <path d="M50,20 Q30,30 25,50 Q30,70 50,80 Q70,70 75,50 Q70,30 50,20 Z"/>
      <path d="M50,30 Q35,35 30,50 Q35,65 50,70 Q65,65 70,50 Q65,35 50,30 Z" fill="#8B1538"/>
      <circle cx="50" cy="50" r="5" fill="#FFFEF7"/>
    </svg>
  );

 
const temples = [
  {
    name: "Shri Dev Ganpati Mandir",
    status: "Launching Soon",
    description: "A forgotten temple in Koikin, discovered during a peaceful agyatvas in October 2022. Though neglected, the spiritual energy remains alive.",
    detailedDescription: "In October 2022, during a peaceful agyatvas, I visited Koikin a beautiful coastal town known for its clean beaches and lush surroundings. While spending quiet time there, I came across an old temple that caught my heart. It was the Shri Dev Ganpati Mandir. The temple was in a neglected state, walls aged, nature slowly taking over but the spiritual energy around it was still alive. There was a deep sense of calm, like Bappa was silently waiting to be remembered. That moment stayed with me.",
    image: "/public/WhatsApp Image 2025-06-27 at 2.16.47 AM.jpeg",
    progress: 10,
    location: "Koikin, Coastal Maharashtra",
    significance: "A forgotten coastal temple with untouched spiritual energy, waiting to be restored to its former glory.",
    historicalRelevance: "This ancient Ganpati temple has stood silently by the coast for decades, its walls weathered by time and sea breeze. Despite its neglected state, the divine presence of Bappa remains palpable, creating an atmosphere of profound peace and spiritual connection.",
    restorationPlan: "Phase 1: Complete structural assessment and foundation strengthening. Phase 2: Restoration of original architecture while preserving coastal heritage. Phase 3: Sacred consecration ceremony and community space development.",
    fundingNeeded: "₹3,00,00,000",
    communityImpact: "Will serve the entire coastal community, preserve local heritage, and create a spiritual center for thousands of devotees",
    expectedCompletion: "December 2026",
    story: "Now, we are planning to raise funds to restore and rebuild this sacred temple, with respect to its history and the peaceful beauty of Koikin. If you believe in preserving our heritage and sacred spaces, we welcome your support be it through contributions, volunteering, or simply spreading the word. Let's come together and bring Shri Dev Ganpati Mandir back to life. 🙏"
  }
];

const successStory = {
  name: "Mahadev Temple - A Divine Transformation",
  description: "From broken roof to divine restoration - witness the miraculous transformation through satellite imagery",
  satelliteBefore: "/public/WhatsApp Image 2025-07-04 at 9.00.39 PM.jpeg",
  satelliteAfter: "/public/WhatsApp Image 2025-07-04 at 9.00.39 PM (1).jpeg",
  story: {
    hindi: "Kabhi kabhi zindagi mein kuch aise pal hote hain jo humesha ke liye yaad reh jaate hain. Aaj hum aapko dikhane ja rahe hain do tasveerein dono ek hi mandir ki. Pehli tasveer mein... mandir ki chhat tooti hui thi. Deewarein bhi kamzor pad chuki thi. Aur sabse pehle jo cheez nazar aayi... wo thi neeli plastic jo chhat tootne ke baad bachav ke liye daali gayi thi.",
    transformation: "Ek samay tha jab mandir bikhar gaya tha... Aur aaj doosri tasveer mein wohi mandir ek naye roop mein saamne khada hai. Naya, pavitra, roshan... ekdum punar nirmita.",
    philosophy: "Aksar hum kehte hain: 'Maine banwaya ye mandir.' 'Maine donate kiya, maine mehnat ki, maine waqt diya.' Par asal mein... Jo kuch bhi hota hai, jo kuch bhi banata hai sab kuch Ishwar hi karwata hai. Na humne kuch kiya, na bhagwan ne... jo bhi kiya, wo Ishwar ne hi kiya. Wo humse sirf acche karm karwata hai."
  }
};


  const [expandedTemple, setExpandedTemple] = useState(null);

  const toggleTemple = (index) => {
    setExpandedTemple(expandedTemple === index ? null : index);
  };


 
const timelineEvents = [
  { 
    period: "2025 Q1", 
    event: "Survey & Community Consultation", 
    status: "current",
    description: "Comprehensive site assessment, community meetings, and spiritual leader consultations for Shri Dev Ganpati Mandir",
    icon: Eye
  },
  { 
    period: "2025 Q2", 
    event: "Ganpati Mandir Restoration Begins", 
    status: "upcoming",
    description: "Foundation work, structural repairs, and artisan team mobilization for coastal temple restoration",
    icon: Building
  },
  { 
    period: "2025 Q4", 
    event: "Ganpati Mandir Consecration", 
    status: "upcoming",
    description: "Sacred consecration ceremony, community celebration, and official reopening of Bappa's divine home",
    icon: Star
  },
  { 
    period: "2026 Q1", 
    event: "Next Sacred Site Selection", 
    status: "future",
    description: "Begin identification and planning for next temple restoration project with enhanced community involvement",
    icon: Compass
  }
]

  const spiritualValues = [
    {
      title: "Consecration",
      description: "Not just conservation, but spiritual awakening of sacred spaces",
      icon: Zap,
      color: "#C41E3A"
    },
    {
      title: "Community",
      description: "Working hand-in-hand with local communities and spiritual leaders",
      icon: Users,
        color: "#C41E3A"
    },
    {
      title: "Heritage",
      description: "Preserving architectural and cultural legacy for future generations",
      icon: Building,
      color: "#C41E3A"
    },
    {
      title: "Devotion",
      description: "Honoring the divine through dedicated service and reverence",
      icon: Heart,
        color: "#C41E3A"
    }
  ];

  const restorationStats = [
    { number: "15+", label: "Years of Combined Temple History", icon: Clock },
    { number: "50+", label: "Community Members Served", icon: Users },
    { number: "2+", label: "Sacred Sites Under Restoration", icon: Building },
    { number: "100%", label: "Community-Led Approach", icon: Heart }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FDF8F8' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-red-800/20"></div>
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&h=800&fit=crop&crop=center')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: "fixed"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="p-4 sm:p-5 rounded-full shadow-lg" style={{ backgroundColor: '#C41E3A' }}>
                <OmSymbol className="w-12 h-12 sm:w-16 sm:h-16" color="#FFFEF7" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 sm:mb-7" style={{ color: '#2C2C2C' }}>
              Sacred Temple Restoration
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl sm:max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8" style={{ color: '#2C2C2C' }}>
              Our temple work isn't just conservation, it's consecration. We identify neglected sacred sites, 
              then work with local communities, artisans, and spiritual leaders to restore their physical 
              structure and spiritual energy.
            </p>
            <div className="flex justify-center items-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
              <LotusSymbol className="w-6 h-6 sm:w-8 sm:h-8" />
              <div className="w-8 sm:w-12 h-0.5" style={{ backgroundColor: '#C41E3A' }}></div>
              <OmSymbol className="w-6 h-6 sm:w-8 sm:h-8" />
              <div className="w-8 sm:w-12 h-0.5" style={{ backgroundColor: '#C41E3A' }}></div>
              <LotusSymbol className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <Link to='/volunteers'>
             <button
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-white text-base sm:text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              style={{ 
                backgroundColor: '#C41E3A',
                boxShadow: '0 4px 20px rgba(139, 21, 56, 0.2)'
              }}
            >
              Join Our Sacred Mission
            </button>
            </Link>
           
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6" style={{ color: '#2C2C2C' }}>
            Project Overview
          </h2>
          <p className="text-base sm:text-lg max-w-4xl sm:max-w-5xl mx-auto leading-relaxed" style={{ color: '#2C2C2C' }}>
            Through deep reverence and community collaboration, we breathe new life into forgotten sanctuaries, 
            ensuring these sacred spaces continue to serve as beacons of spiritual light for generations to come. 
            Each restoration project is a sacred journey of healing, renewal, and divine reconnection.
          </p>
        </div>

        {/* Spiritual Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
          {spiritualValues.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 sm:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              style={{ 
                backgroundColor: '#FFFEF7',
                boxShadow: '0 4px 12px rgba(196, 30, 58, 0.15)'
              }}
            >
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="p-3 sm:p-4 rounded-full" style={{ backgroundColor: value.color }}>
                  <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: '#2C2C2C' }}>
                {value.title}
              </h3>
              <p className="text-sm sm:text-base" style={{ color: '#6B4B4B' }}>
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mb-12 sm:mb-14 md:mb-18">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {restorationStats.map((stat, index) => (
              <div key={index} className="text-center p-4 sm:p-6 rounded-lg" style={{ backgroundColor: '#FFFEF7' }}>
                <div className="flex justify-center mb-2 sm:mb-4">
                  <stat.icon className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: '#C41E3A' }} />
                </div>
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2" style={{ color: '#C41E3A' }}>
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm font-medium" style={{ color: '#2C2C2C' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

  <div className="min-h-screen" style={{ backgroundColor: '#FFFEF7' }}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
    <div className="mb-12 sm:mb-16 lg:mb-20">
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 px-2" style={{ color: '#2C2C2C' }}>
        Current Temple Restoration Project
      </h3>
      
      <div className="space-y-6 sm:space-y-8 lg:space-y-12">
        {temples.map((temple, index) => (
          <div 
            key={index}
            className="rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg sm:shadow-xl lg:shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl lg:hover:shadow-3xl mx-2 sm:mx-0"
            style={{ 
              backgroundColor: '#FFFEF7',
              boxShadow: '0 10px 40px rgba(196, 30, 58, 0.12), 0 4px 16px rgba(196, 30, 58, 0.08)'
            }}
          >
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 relative">
                <img 
                  src={temple.image} 
                  alt={temple.name}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 right-3 sm:right-4 lg:right-6">
                  <div className="flex items-center text-white mb-2">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium truncate">{temple.location}</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-md sm:rounded-lg p-2 sm:p-3">
                    <p className="text-white text-xs sm:text-sm leading-relaxed">
                      "A deep sense of calm, like Bappa was silently waiting to be remembered."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 xl:p-12">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 sm:mb-6">
                  <h4 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold pr-0 sm:pr-4 mb-2 sm:mb-0" style={{ color: '#2C2C2C' }}>
                    {temple.name}
                  </h4>
                  <span 
                    className="px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-white whitespace-nowrap self-start"
                    style={{ backgroundColor: '#C41E3A' }}
                  >
                    {temple.status}
                  </span>
                </div>
                
                <p className="mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: '#2C2C2C' }}>
                  {temple.description}
                </p>

                <div className="mb-6 sm:mb-8">
                  <div className="flex justify-between items-center mb-2 sm:mb-3">
                    <span className="font-semibold text-sm sm:text-base" style={{ color: '#C41E3A' }}>
                      Restoration Progress
                    </span>
                    <div className="flex items-center">
                      <span className="text-base sm:text-lg font-bold mr-2" style={{ color: '#C41E3A' }}>
                        {temple.progress}%
                      </span>
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#C41E3A' }} />
                    </div>
                  </div>
                  <div className="w-full rounded-full h-2 sm:h-3 shadow-inner" style={{ backgroundColor: '#F4E8E8' }}>
                    <div 
                      className="h-2 sm:h-3 rounded-full transition-all duration-500"
                      style={{ 
                        backgroundColor: '#C41E3A',
                        width: `${temple.progress}%`,
                        background: `linear-gradient(90deg, #C41E3A 0%, #8B1538 100%)`
                      }}
                    ></div>
                  </div>
                </div>

                <button
                  onClick={() => toggleTemple(index)}
                  className="flex items-center justify-between w-full p-3 sm:p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-md"
                  style={{ 
                    borderColor: expandedTemple === index ? '#C41E3A' : '#F4E8E8',
                    backgroundColor: expandedTemple === index ? '#F4E8E8' : 'transparent'
                  }}
                >
                  <span className="font-semibold text-sm sm:text-base lg:text-lg" style={{ color: '#2C2C2C' }}>
                    Explore Sacred Journey
                  </span>
                  {expandedTemple === index ? 
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" style={{ color: '#C41E3A' }} /> : 
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" style={{ color: '#C41E3A' }} />
                  }
                </button>

                {expandedTemple === index && (
                  <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
                    <div className="p-4 sm:p-6 rounded-lg" style={{ backgroundColor: '#F4E8E8' }}>
                      <h5 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4" style={{ color: '#2C2C2C' }}>
                        The Sacred Discovery
                      </h5>
                      <p className="mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base" style={{ color: '#2C2C2C' }}>
                        {temple.detailedDescription}
                      </p>
                      
                      <div className="p-3 sm:p-4 rounded-lg mb-4 sm:mb-6" style={{ backgroundColor: '#FFFEF7' }}>
                        <p className="text-sm sm:text-base leading-relaxed italic" style={{ color: '#8B1538' }}>
                          {temple.story}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                        <div>
                          <h6 className="font-semibold text-sm sm:text-base mb-2" style={{ color: '#8B1538' }}>
                            Funding Needed
                          </h6>
                          <p className="text-lg sm:text-xl font-bold" style={{ color: '#C41E3A' }}>
                            {temple.fundingNeeded}
                          </p>
                        </div>
                        <div>
                          <h6 className="font-semibold text-sm sm:text-base mb-2" style={{ color: '#8B1538' }}>
                            Expected Completion
                          </h6>
                          <p className="font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>
                            {temple.expectedCompletion}
                          </p>
                        </div>
                      </div>

                      <div className="mb-4 sm:mb-6">
                        <h6 className="font-semibold text-sm sm:text-base mb-2" style={{ color: '#8B1538' }}>
                          Community Impact
                        </h6>
                        <p className="text-sm sm:text-base" style={{ color: '#2C2C2C' }}>
                          {temple.communityImpact}
                        </p>
                      </div>

                      <div className="mb-4 sm:mb-6">
                        <h6 className="font-semibold text-sm sm:text-base mb-2" style={{ color: '#8B1538' }}>
                          Restoration Plan
                        </h6>
                        <p className="text-sm sm:text-base" style={{ color: '#2C2C2C' }}>
                          {temple.restorationPlan}
                        </p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Link to='/donate' className="flex-1">
                          <button
                            className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-white text-sm sm:text-base transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                            style={{ 
                              backgroundColor: '#C41E3A',
                              boxShadow: '0 4px 16px rgba(139, 21, 56, 0.2)'
                            }}
                          >
                            <Heart className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2" />
                            Support Bappa's Home
                          </button>
                        </Link>
                        <Link to='/volunteers' className="flex-1">
                          <button
                            className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base border-2 transition-all duration-300 hover:shadow-md"
                            style={{ 
                              borderColor: '#C41E3A',
                              color: '#C41E3A',
                              backgroundColor: 'transparent'
                            }}
                          >
                            <Users className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2" />
                            Join Sacred Mission
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Success Story Section */}
    <div className="mb-12 sm:mb-16 lg:mb-20">
      <div className="text-center mb-6 sm:mb-8 lg:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2" style={{ color: '#2C2C2C' }}>
          Divine Transformation
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-center max-w-4xl mx-auto leading-relaxed px-4" style={{ color: '#2C2C2C' }}>
          Witness the miraculous journey from destruction to devotion
        </p>
      </div>

      <div className="rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg sm:shadow-xl lg:shadow-2xl overflow-hidden mb-6 sm:mb-8 mx-2 sm:mx-0" style={{ backgroundColor: '#FFFEF7', boxShadow: '0 10px 40px rgba(196, 30, 58, 0.12), 0 4px 16px rgba(196, 30, 58, 0.08)' }}>
        <div className="p-4 sm:p-6 lg:p-8 xl:p-10" style={{ backgroundColor: '#F4E8E8' }}>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-6 px-2" style={{ color: '#8B1538' }}>
            {successStory.name}
          </h3>
          
          <div className="text-center mb-6 sm:mb-8">
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 px-2" style={{ color: '#C41E3A' }}>
              <Satellite className="w-5 h-5 sm:w-6 sm:h-6 inline mr-2" />
              Satellite View: Divine Transformation
            </h4>
            <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 px-2" style={{ color: '#2C2C2C' }}>
              Witness the miraculous change from above - the same location, transformed by divine grace
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="text-center">
              <h5 className="font-bold mb-2 sm:mb-3 text-base sm:text-lg px-2" style={{ color: '#8B1538' }}>
                Before - Broken & Forgotten
              </h5>
              <div className="rounded-md sm:rounded-lg overflow-hidden shadow-md sm:shadow-lg border-2 mx-2 sm:mx-0" style={{ borderColor: '#F4E8E8' }}>
                <img 
                  src={successStory.satelliteBefore} 
                  alt="Satellite view before restoration"
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
              </div>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium px-2" style={{ color: '#2C2C2C' }}>
                Broken roof, weathered walls, covered with blue plastic for protection
              </p>
            </div>
            <div className="text-center">
              <h5 className="font-bold mb-2 sm:mb-3 text-base sm:text-lg px-2" style={{ color: '#8B1538' }}>
                After - Divine Restoration
              </h5>
              <div className="rounded-md sm:rounded-lg overflow-hidden shadow-md sm:shadow-lg border-2 mx-2 sm:mx-0" style={{ borderColor: '#C41E3A' }}>
                <img 
                  src={successStory.satelliteAfter} 
                  alt="Satellite view after restoration"
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
              </div>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium px-2" style={{ color: '#2C2C2C' }}>
                Completely restored, sacred, radiant - a new spiritual haven
              </p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="p-4 sm:p-6 rounded-lg" style={{ backgroundColor: '#FFFEF7' }}>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4" style={{ color: '#2C2C2C' }}>
                {successStory.story.hindi}
              </p>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4" style={{ color: '#2C2C2C' }}>
                {successStory.story.transformation}
              </p>
              <div className="p-3 sm:p-4 rounded-lg border-l-4" style={{ backgroundColor: '#F4E8E8', borderColor: '#C41E3A' }}>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed font-medium italic" style={{ color: '#8B1538' }}>
                  {successStory.story.philosophy}
                </p>
              </div>
              <p className="text-center text-base sm:text-lg lg:text-xl font-bold mt-4 sm:mt-6" style={{ color: '#C41E3A' }}>
                Yaad rahe... jo bhi karta hai, wahi karta hai — Ishwar. 🙏
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Roadmap Timeline Section */}
    <div className="mb-12 sm:mb-16 lg:mb-20">
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 px-2" style={{ color: '#2C2C2C' }}>
        Sacred Journey Timeline
      </h3>
      <p className="text-center mb-6 sm:mb-8 lg:mb-12 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto px-4" style={{ color: '#6B4B4B' }}>
        Following the divine guidance that led to the Mahadev temple's transformation, here's our roadmap for restoring Shri Dev Ganpati Mandir
      </p>
      
      <div className="max-w-5xl mx-auto px-2 sm:px-0">
        <div className="relative">
          {/* Timeline line - hide on small screens */}
          <div 
            className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full"
            style={{ backgroundColor: '#F4E8E8' }}
          ></div>
          
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative mb-6 sm:mb-8 lg:mb-12 last:mb-0">
              {/* Mobile layout - always left aligned */}
              <div className="sm:hidden">
                <div className="flex items-start mb-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 sm:border-4 border-white shadow-lg mr-3 sm:mr-4 flex items-center justify-center flex-shrink-0"
                       style={{ backgroundColor: event.status === 'current' ? '#C41E3A' : event.status === 'upcoming' ? '#8B1538' : '#F4E8E8' }}>
                    {event.status === 'current' && <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-pulse bg-white"></div>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center mb-2 flex-wrap">
                      <event.icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" style={{ color: '#C41E3A' }} />
                      <span className="font-bold text-sm sm:text-base" style={{ color: event.status === 'current' ? '#C41E3A' : '#2C2C2C' }}>
                        {event.period}
                      </span>
                    </div>
                    <h4 className="font-bold text-base sm:text-lg mb-2" style={{ color: '#2C2C2C' }}>
                      {event.event}
                    </h4>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#6B4B4B' }}>
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Desktop layout - alternating sides */}
              <div className="hidden sm:flex items-center">
                {/* Left side card (for even index) */}
                {index % 2 === 0 && (
                  <div className="w-1/2 pr-6 lg:pr-8 text-right">
                    <div 
                      className="p-4 lg:p-6 rounded-lg lg:rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
                      style={{ 
                        backgroundColor: '#FFFEF7',
                        boxShadow: '0 8px 32px rgba(196, 30, 58, 0.1)'
                      }}
                    >
                      <div className="flex items-center mb-3 justify-end">
                        <event.icon className="w-5 h-5 lg:w-6 lg:h-6 mr-2" style={{ color: '#C41E3A' }} />
                        <span className="font-bold text-base lg:text-lg" style={{ color: event.status === 'current' ? '#C41E3A' : '#2C2C2C' }}>
                          {event.period}
                        </span>
                      </div>
                      <h4 className="font-bold text-lg lg:text-xl mb-3" style={{ color: '#2C2C2C' }}>
                        {event.event}
                      </h4>
                      <p className="text-sm lg:text-base leading-relaxed" style={{ color: '#6B4B4B' }}>
                        {event.description}
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Empty left space (for odd index) */}
                {index % 2 === 1 && <div className="w-1/2"></div>}
                
                {/* Center timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 lg:border-4 border-white shadow-lg z-10 flex items-center justify-center"
                     style={{ backgroundColor: event.status === 'current' ? '#C41E3A' : event.status === 'upcoming' ? '#8B1538' : '#F4E8E8' }}>
                  {event.status === 'current' && <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full animate-pulse bg-white"></div>}
                </div>
                
                {/* Right side card (for odd index) */}
                {index % 2 === 1 && (
                  <div className="w-1/2 pl-6 lg:pl-8 text-left">
                    <div 
                      className="p-4 lg:p-6 rounded-lg lg:rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
                      style={{ 
                        backgroundColor: '#FFFEF7',
                        boxShadow: '0 8px 32px rgba(196, 30, 58, 0.1)'
                      }}
                    >
                      <div className="flex items-center mb-3 justify-start">
                        <event.icon className="w-5 h-5 lg:w-6 lg:h-6 mr-2" style={{ color: '#C41E3A' }} />
                        <span className="font-bold text-base lg:text-lg" style={{ color: event.status === 'current' ? '#C41E3A' : '#2C2C2C' }}>
                          {event.period}
                        </span>
                      </div>
                      <h4 className="font-bold text-lg lg:text-xl mb-3" style={{ color: '#2C2C2C' }}>
                        {event.event}
                      </h4>
                      <p className="text-sm lg:text-base leading-relaxed" style={{ color: '#6B4B4B' }}>
                        {event.description}
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Empty right space (for even index) */}
                {index % 2 === 0 && <div className="w-1/2"></div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Current Temple Project Section */}
  </div>
</div>

        {/* Call to Action */}
        <div className="text-center p-8 sm:p-10 md:p-12 rounded-xl" style={{   
          background: 'linear-gradient(135deg, rgba(196, 30, 58, 0.7) 0%, rgba(139, 21, 56, 1) 100%)',
          boxShadow: '0 8px 32px rgba(196, 30, 58, 0.15)' 
        }}>
          <div className="flex justify-center mb-4 sm:mb-6">
            <LotusSymbol className="w-12 h-12 sm:w-16 sm:h-16" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: '#FFFEF7' }}>
            Be Part of This Sacred Mission
          </h3>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto" style={{ color: '#FFFEF7' }}>
            Every contribution, whether through funds, time, or prayers, helps restore these ancient sanctuaries 
            to their divine glory. Join us in preserving spiritual heritage for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to='/donate'>
             <button
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-white text-sm sm:text-base md:text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              style={{ 
                backgroundColor: '#C41E3A',
                boxShadow: '0 4px 20px rgba(196, 30, 58, 0.3)'
              }}
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2" />
              Donate Now
            </button>
            </Link>
           <Link to='/volunteers'>
            <button
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold border-2 text-sm sm:text-base md:text-lg transition-all duration-300 hover:shadow-lg"
              style={{ 
                borderColor: '#8B1538',
                color: '#FFFEF7',
                backgroundColor: 'transparent'
              }}
            >
              <Users className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2" />
              Volunteer with Us
            </button>
           </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temple;