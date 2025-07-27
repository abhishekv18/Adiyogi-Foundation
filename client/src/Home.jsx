

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   ArrowRight, Heart, Users, MapPin, BookOpen, Phone, Mail, TreePine, 
//   Droplets, GraduationCap, Utensils, Sprout, Shirt, Instagram, Youtube, 
//   Linkedin, MessageCircle, Star, Award, Globe, Leaf, Mountain, Sun,
//     Crown, Shield, Flame, Eye,
//     BookTemplate,
//     Flower,X,
//     Landmark,
//     Droplet,
//     BookOpenCheck,
//     Soup
// } from 'lucide-react';
// import Hero from './componenets/ui/Hero';
// import { motion, AnimatePresence } from 'framer-motion';


// const Home = () => {
//   const [activeIndex, setActiveIndex] = useState(null);
// // const sevaProjects = [
// //       {
// //     title: 'Apaha Sujala',
// //     subtitle: 'Water Protection',
// //     icon: <Droplets className="w-8 h-8" />,
// //     description: 'Monitoring, restoring, and protecting India\'s rivers, wells, and lakes.',
// //     link: '/seva#apaha-sujala',
// //     color: 'from-[#FFFEF7] to-[#F4E8E8]', // Warm Ivory to Soft Rose
// //     iconBg: 'bg-[#2C2C2C]', // Rich Charcoal
// //     stats: '25 Water Bodies Cleaned'
// //   },
// //   {
// //     title: 'Sanatan Samridhi',
// //     subtitle: 'Sacred Site Restoration',
// //     icon: <BookTemplate className="w-8 h-8" />,
// //     description: 'Reviving decaying temples, shrines, and pilgrimage paths physically and spiritually.',
// //     link: '/seva#sanatan-samridhi',
// //     color: 'from-[#FDF8F8] to-[#FFFEF7]', // Rose Cream to Warm Ivory
// //     iconBg: 'bg-[#C41E3A]', // Sacred Crimson
// //     stats: '12 Temples Restored'
// //   },
// //   {
// //     title: 'PRN Gyan Sarovar',
// //     subtitle: 'Free & Inclusive Education',
// //     icon: <GraduationCap className="w-8 h-8" />,
// //     description: 'Free schooling, life skill mentoring, and values based education to underserved children.',
// //     link: '/seva#prn-gyan-sarovar',
// //     color: 'from-[#F4E8E8] to-[#FFFEF7]', // Soft Rose to Warm Ivory
// //     iconBg: 'bg-[#2C2C2C]', // Rich Charcoal
// //     stats: '500+ Children Educated'
// //   },
// //   {
// //     title: 'Pawan Putra',
// //     subtitle: 'Tree Plantation & Air Quality',
// //     icon: <TreePine className="w-8 h-8" />,
// //     description: 'Greening barren lands and purifying air through native tree drives.',
// //     link: '/seva#pawan-putra',
// //     color: 'from-[#FFFEF7] to-[#FDF8F8]', // Warm Ivory to Rose Cream
// //     iconBg: 'bg-[#C41E3A]', // Sacred Crimson
// //     stats: '10,000+ Trees Planted'
// //   },
// //   {
// //     title: 'Anna Purna Brahma',
// //     subtitle: 'Food Distribution & Nutrition',
// //     icon: <Utensils className="w-8 h-8" />,
// //     description: 'Free meals, nutrition education, and food recovery networks for the underserved.',
// //     link: '/seva#anna-purna-brahma',
// //     color: 'from-[#FDF8F8] to-[#F4E8E8]', // Rose Cream to Soft Rose
// //     iconBg: 'bg-[#2C2C2C]', // Rich Charcoal
// //     stats: '50,000+ Meals Served'
// //   },
// //   {
// //     title: 'Dhara Dhanya',
// //     subtitle: 'Soil Health & Organic Farming',
// //     icon: <Sprout className="w-8 h-8" />,
// //     description: 'Training farmers in soil regeneration, organic practices, and water wise agriculture.',
// //     link: '/seva#dhara-dhanya',
// //     color: 'from-[#FFFEF7] to-[#FDF8F8]', // Warm Ivory to Rose Cream
// //   iconBg: 'bg-[#8B1538]', // Deep Ruby
// //     stats: '200+ Farmers Trained'
// //   }
// // ];
// // const programs = [
// //   {
// //     title: "Sanatan Samridhi",
// //     subtitle: "Save Temples, Preserve Culture",
// //     highlights: [
// //       "Restore and revitalize old Hindu temples.",
// //       "Support temple renovation and religious practices.",
// //       "Preserve spiritual heritage of Sanatan Dharma."
// //     ],
// //     fullDescription: `Focused on restoring and revitalizing old, broken-down Hindu temples and sacred sites. 
// //     Supports temple renovation, encourages community responsibility, and promotes harmony while reviving cultural and spiritual traditions.`,
// //   },
// //   {
// //     title: "Apha Sujala",
// //     subtitle: "For Clean and Living Waters",
// //     highlights: [
// //       "Reduce water pollution.",
// //       "Promote clean drinking water access.",
// //       "Sustainable aquatic ecosystem practices."
// //     ],
// //     fullDescription: `Focused on reducing water pollution and ensuring safe drinking water for all. 
// //     It combines science, policy, and community efforts to secure long-term water sustainability.`,
// //   },
// //   {
// //     title: "PRN Gyan Sarovar",
// //     subtitle: "Education for All",
// //     highlights: [
// //       "Free education access.",
// //       "Inclusive learning environments.",
// //       "Empowers the underprivileged."
// //     ],
// //     fullDescription: `Aims to provide free quality education to underprivileged children across levels. 
// //     Promotes social equity through inclusive learning and support for the marginalized.`,
// //   },
// //   {
// //     title: "Pawan Putra",
// //     subtitle: "Each Breath is a Gift",
// //     highlights: [
// //       "Tree plantations for clean air.",
// //       "Native species to purify and cool.",
// //       "Environmental awareness campaigns."
// //     ],
// //     fullDescription: `Organizes tree plantations in cities and villages to combat air pollution. 
// //     It promotes eco-restoration, carbon capture, and community engagement.`,
// //   },
// //   {
// //     title: "Anna Purna Brahma",
// //     subtitle: "Food is Divine",
// //     highlights: [
// //       "Run free food programs.",
// //       "Promote sustainable farming.",
// //       "Empower local food security."
// //     ],
// //     fullDescription: `Combats hunger by operating community kitchens and sustainable food systems. 
// //     It emphasizes food dignity and nourishment for all.`,
// //   },
// //   {
// //     title: "Dhara Danya",
// //     subtitle: "Save Soil, Sustain Life",
// //     highlights: [
// //       "Restore soil health.",
// //       "Encourage organic practices.",
// //       "Build soil-conscious communities."
// //     ],
// //     fullDescription: `Focuses on soil restoration and sustainable farming. 
// //     Supports farmers in adopting practices like agroforestry and moisture conservation for long-term soil vitality.`,
// //   },
// // ];
// const programs = [
//   {
//     title: "Sanatan Samridhi",
//     subtitle: "Save Temples, Preserve Culture",
//     highlights: [
//       "Restore and revitalize old Hindu temples.",
//       "Support temple renovation and religious practices.",
//       "Preserve spiritual heritage of Sanatan Dharma."
//     ],
//     fullDescription:
//       "Focused on restoring and revitalizing old, broken-down Hindu temples and sacred sites. Supports temple renovation, encourages community responsibility, and promotes harmony while reviving cultural and spiritual traditions.",
//     icon: <Landmark className="w-8 h-8" />,
//     iconBg: "bg-[#C41E3A]"
//   },
//   {
//     title: "Apha Sujala",
//     subtitle: "For Clean and Living Waters",
//     highlights: [
//       "Reduce water pollution.",
//       "Promote clean drinking water access.",
//       "Sustainable aquatic ecosystem practices."
//     ],
//     fullDescription:
//       "Focused on reducing water pollution and ensuring safe drinking water for all. Combines science, policy, and community efforts to secure long-term water sustainability.",
//     icon: <Droplet className="w-8 h-8" />,
//     iconBg: "bg-[#00796B]"
//   },
//   {
//     title: "PRN Gyan Sarovar",
//     subtitle: "Education for All",
//     highlights: [
//       "Free education access.",
//       "Inclusive learning environments.",
//       "Empowers the underprivileged."
//     ],
//     fullDescription:
//       "Aims to provide free quality education to underprivileged children across levels. Promotes social equity through inclusive learning and support for the marginalized.",
//     icon: <BookOpenCheck className="w-8 h-8" />,
//     iconBg: "bg-[#6A1B9A]"
//   },
//   {
//     title: "Pawan Putra",
//     subtitle: "Each Breath is a Gift",
//     highlights: [
//       "Tree plantations for clean air.",
//       "Native species to purify and cool.",
//       "Environmental awareness campaigns."
//     ],
//     fullDescription:
//       "Organizes tree plantations in cities and villages to combat air pollution. Promotes eco-restoration, carbon capture, and community engagement.",
//     icon: <Leaf className="w-8 h-8" />,
//     iconBg: "bg-[#2E7D32]"
//   },
//   {
//     title: "Anna Purna Brahma",
//     subtitle: "Food is Divine",
//     highlights: [
//       "Run free food programs.",
//       "Promote sustainable farming.",
//       "Empower local food security."
//     ],
//     fullDescription:
//       "Combats hunger by operating community kitchens and sustainable food systems. Emphasizes food dignity and nourishment for all.",
//     icon: <Soup className="w-8 h-8" />,
//     iconBg: "bg-[#EF6C00]"
//   },
//   {
//     title: "Dhara Danya",
//     subtitle: "Save Soil, Sustain Life",
//     highlights: [
//       "Restore soil health.",
//       "Encourage organic practices.",
//       "Build soil conscious communities."
//     ],
//     fullDescription:
//       "Focuses on soil restoration and sustainable farming. Supports farmers in adopting practices like agroforestry and moisture conservation for long-term soil vitality.",
//     icon: <Sprout className="w-8 h-8" />,
//     iconBg: "bg-[#795548]"
//   }
// ];


//   const transformationPath = [
//     { 
//       from: 'Confusion', 
//       to: 'Clarity', 
//       via: 'Stillness',
//       icon: <Eye className="w-6 h-6" />,
//       description: 'Through meditation and self inquiry, we move from mental chaos to crystal clear understanding.'
//     },
//     { 
//       from: 'Burnout', 
//       to: 'Service', 
//       via: 'Reflection',
//       icon: <Flame className="w-6 h-6" />,
//       description: 'Inner reflection transforms exhaustion into purposeful, sustainable service to humanity.'
//     },
//     { 
//       from: 'Disconnection', 
//       to: 'Impact', 
//       via: 'Wisdom',
//       icon: <Flower className="w-6 h-6" />,
//       description: 'Ancient wisdom bridges the gap between individual growth and collective transformation.'
//     }
//   ];

//   const impactStats = [
//     { 
//       number: '10,000+', 
//       label: 'Trees Planted',
//       icon: <TreePine className="w-8 h-8 text-[#C41E3A]" />,
//       description: 'Native species across 15 states'
//     },
//     { 
//       number: '500+', 
//       label: 'Children Educated',
//       icon: <GraduationCap className="w-8 h-8 text-[#8B1538]" />,
//       description: 'Free quality education provided'
//     },
//     { 
//       number: '25+', 
//       label: 'Sacred Sites Restored',
//       icon: <BookTemplate className="w-8 h-8 text-[#C41E3A]" />,
//       description: 'Temples and heritage sites revived'
//     },
//     { 
//       number: '200+', 
//       label: 'Active Volunteers',
//       icon: <Users className="w-8 h-8 text-[#8B1538]" />,
//       description: 'Dedicated seva warriors'
//     }
//   ];

//   const coreValues = [
//     { name: 'Dharma', icon: <Shield className="w-5 h-5" />, color: 'bg-[#C41E3A]' },
//     { name: 'Dignity', icon: <Crown className="w-5 h-5" />, color: 'bg-[#8B1538]' },
//     { name: 'Service', icon: <Heart className="w-5 h-5" />, color: 'bg-[#C41E3A]' },
//     { name: 'Sustainability', icon: <Leaf className="w-5 h-5" />, color: 'bg-[#8B1538]' },
//     { name: 'Synchronicity', icon: <Star className="w-5 h-5" />, color: 'bg-[#C41E3A]' }
//   ];

//   const testimonials = [
//     {
//       text: "The foundation transformed not just our village temple, but our entire community's spirit.",
//       author: "Radha Devi",
//       location: "Vrindavan, UP",
//       role: "Village Elder"
//     },
//     {
//       text: "Through their education program, my children learned values alongside academics.",
//       author: "Ravi Kumar",
//       location: "Haridwar, UK",
//       role: "Parent"
//     },
//     {
//       text: "Their organic farming methods doubled our yield while healing our soil.",
//       author: "Gopal Singh",
//       location: "Rajasthan",
//       role: "Farmer"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#FDF8F8] to-[#FFFEF7]">
//       {/* Hero Section */}
//       <Hero />

//       {/* Sacred Quote Section */}
//       <section className="py-16 bg-gradient-to-r from-[#2C2C2C] to-[#2C2C2C] relative overflow-hidden">
//     <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-20"></div>

//         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
//           <div className="mb-6">
//             <Sun className="w-16 h-16 text-[#C41E3A] mx-auto mb-4 opacity-80" />
//           </div>
//           <blockquote className="text-2xl lg:text-3xl text-[#FFFEF7] font-light italic leading-relaxed mb-6">
//             "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः।<br />
//             तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम॥"
//           </blockquote>
//           <p className="text-[#C41E3A] text-lg">
//             Where there is Krishna and Arjuna, there is prosperity, victory, and eternal dharma.
//           </p>
//         </div>
//       </section>
//       {/* Transformation Journey */}
//       <section className="py-20 bg-[#FDF8F8] relative">
//         <div className="absolute inset-0 bg-gradient-to-br from-[#C41E3A]/5 to-[#8B1538]/5"></div>
//         <div className="max-w-7xl mx-auto px-4 relative z-10">
//           <div className="text-center mb-16">
//             <div className="flex justify-center mb-6">
//               <Flower className="w-12 h-12 text-[#C41E3A]" />
//             </div>
//             <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
//               The Path of <span className="text-[#C41E3A]">Transformation</span>
//             </h2>
           
//             <p className="text-2xl text-[#2C2C2C] max-w-4xl mx-auto font-light leading-relaxed">
//               "We do not build temples; we rebuild purpose and restore lives through the eternal wisdom of dharma."
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//             {transformationPath.map((path, index) => (
//               <div key={index} className="relative group">
//                 <div className="bg-[#FFFEF7] p-8 rounded-2xl shadow-xl border border-[#F4E8E8] hover:border-[#C41E3A] transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2">
//                   <div className="text-center mb-6">
//                     <div className="w-16 h-16 bg-gradient-to-br from-[#FDF8F8] to-[#F4E8E8] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
//                       <span className="text-[#C41E3A] text-xl font-bold">{path.from}</span>
//                     </div>
//                   </div>
                  
//                   <div className="flex flex-col items-center mb-6">
//                     <div className="flex items-center space-x-3 mb-4">
//                       <div className="text-[#C41E3A]">{path.icon}</div>
//                       <span className="text-[#C41E3A] font-semibold text-lg">{path.via}</span>
//                     </div>
//                     <div className="w-1 h-8 bg-gradient-to-b from-[#C41E3A] to-transparent mb-4"></div>
//                     <ArrowRight className="text-[#C41E3A] transform rotate-90" size={24} />
//                   </div>
                  
//                   <div className="text-center mb-6">
//                     <div className="w-16 h-16 bg-gradient-to-br from-[#C41E3A] to-[#8B1538] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
//                       <span className="text-[#FFFEF7] text-xl font-bold">{path.to}</span>
//                     </div>
//                   </div>
                  
//                   <p className="text-[#2C2C2C]/70 text-center leading-relaxed">
//                     {path.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <div className="max-w-6xl mx-auto">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div className="bg-[#FFFEF7] p-10 rounded-2xl shadow-xl border border-[#F4E8E8] relative overflow-hidden">
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#C41E3A]/10 to-transparent rounded-bl-full"></div>
//                 <div className="relative z-10">
//                   <div className="flex items-center mb-6">
//                     <Mountain className="w-8 h-8 text-[#C41E3A] mr-3" />
//                     <h3 className="text-2xl font-bold text-[#C41E3A]">We Believe</h3>
//                   </div>
//                   <div className="space-y-4">
//                     <div className="flex items-start group">
//                       <div className="w-2 h-2 bg-[#C41E3A] rounded-full mt-3 mr-4 group-hover:scale-150 transition-transform duration-300"></div>
//                       <p className="text-[#2C2C2C] leading-relaxed">Spirituality is not an escape, but an anchor that grounds us in truth and purpose.</p>
//                     </div>
//                     <div className="flex items-start group">
//                       <div className="w-2 h-2 bg-[#C41E3A] rounded-full mt-3 mr-4 group-hover:scale-150 transition-transform duration-300"></div>
//                       <p className="text-[#2C2C2C] leading-relaxed">Ancient truths are not outdated they are timeless wisdom waiting to be rediscovered.</p>
//                     </div>
//                     <div className="flex items-start group">
//                       <div className="w-2 h-2 bg-[#C41E3A] rounded-full mt-3 mr-4 group-hover:scale-150 transition-transform duration-300"></div>
//                       <p className="text-[#2C2C2C] leading-relaxed">Everyone believer or skeptic can benefit from deeper self-awareness and inner peace.</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="bg-[#FFFEF7] p-10 rounded-2xl shadow-xl border border-[#F4E8E8] relative overflow-hidden">
//                 <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#C41E3A]/10 to-transparent rounded-tr-full"></div>
//                 <div className="relative z-10">
//                   <div className="flex items-center mb-6">
//                     <Globe className="w-8 h-8 text-[#C41E3A] mr-3" />
//                     <h3 className="text-2xl font-bold text-[#C41E3A]">Our Vision</h3>
//                   </div>
//                   <div className="space-y-4">
//                     <div className="flex items-start group">
//                       <div className="w-2 h-2 bg-[#C41E3A] rounded-full mt-3 mr-4 group-hover:scale-150 transition-transform duration-300"></div>
//                       <p className="text-[#2C2C2C] leading-relaxed">Spirituality transcends religion it's universal wisdom for all humanity.</p>
//                     </div>
//                     <div className="flex items-start group">
//                       <div className="w-2 h-2 bg-[#C41E3A] rounded-full mt-3 mr-4 group-hover:scale-150 transition-transform duration-300"></div>
//                       <p className="text-[#2C2C2C] leading-relaxed">Ancient knowledge holds the keys to healing modern suffering and disconnection.</p>
//                     </div>
//                     <div className="flex items-start group">
//                       <div className="w-2 h-2 bg-[#C41E3A] rounded-full mt-3 mr-4 group-hover:scale-150 transition-transform duration-300"></div>
//                       <p className="text-[#2C2C2C] leading-relaxed">Transformation is possible in individuals, communities, and sacred spaces.</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Seva Projects */}
//       {/* <section className="py-20 bg-[#FFFEF7] relative">
//         <div className="absolute inset-0 bg-gradient-to-br from-[#FDF8F8]/30 to-transparent"></div>
//         <div className="max-w-7xl mx-auto px-4 relative z-10">
//           <div className="text-center mb-16">
//             <div className="flex justify-center mb-6">
//               <Heart className="w-12 h-12 text-[#C41E3A]" />
//             </div>
//             <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
//               Our <span className="text-[#C41E3A]">Seva</span> Projects
//             </h2>
            
//             <p className="text-xl text-[#2C2C2C] max-w-5xl mx-auto leading-relaxed">
//               While our programs serve the self, our Seva Projects serve the world. These ground level 
//               initiatives work where pain is practical responding with hands, hearts, and the wisdom of our heritage.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {sevaProjects.map((project, index) => (
//               <Link key={index} to={project.link} className="group">
//                 <div className={`bg-gradient-to-br ${project.color} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#F4E8E8] hover:border-[#C41E3A] transform hover:-translate-y-2`}>
//                   <div className="relative mb-6">
//                     <div className={`w-16 h-16 ${project.iconBg} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
//                       {project.icon}
//                     </div>
//                     <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#C41E3A] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   </div>
                  
//                   <h3 className="text-xl font-bold text-[#2C2C2C] mb-2 group-hover:text-[#C41E3A] transition-colors duration-300">
//                     {project.title}
//                   </h3>
//                   <h4 className="text-[#C41E3A] font-semibold mb-4 text-lg">{project.subtitle}</h4>
//                   <p className="text-[#2C2C2C]/80 leading-relaxed mb-4">{project.description}</p>
                  
//                   <div className="flex items-center justify-between mt-6">
//                     <span className="text-sm font-semibold text-[#2C2C2C]/60">{project.stats}</span>
//                     <div className="flex items-center text-[#C41E3A] font-medium">
//                       <span className="mr-2">Learn More</span>
//                       <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section> */}
//   <section className="py-24 bg-gradient-to-br from-[#FDF8F8] via-[#FFFEF7] to-[#FDF8F8] relative overflow-hidden">
//       {/* Decorative background elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-32 h-32 bg-[#C41E3A]/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#8B1538]/5 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#C41E3A]/3 rounded-full blur-2xl"></div>
//       </div>
      
//       {/* Subtle pattern overlay */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, rgba(196, 30, 58, 0.1) 1px, transparent 0)`,
//           backgroundSize: '20px 20px'
//         }}></div>
//       </div>
      
//       <div className="max-w-7xl mx-auto px-4 relative z-10">
//         <div className="text-center mb-20">
//           <div className="flex justify-center mb-8">
//             <div className="relative">
//               <div className="absolute inset-0 bg-[#C41E3A]/20 rounded-full blur-xl scale-150"></div>
//               <div className="relative bg-gradient-to-br from-[#C41E3A] to-[#8B1538] p-4 rounded-full shadow-2xl">
//                 <Flower className="w-12 h-12 text-white" />
//               </div>
//             </div>
//           </div>
//           <h2 className="text-5xl lg:text-6xl font-bold text-[#2C2C2C] mb-8 tracking-tight">
//             Our <span className="bg-gradient-to-r from-[#C41E3A] to-[#8B1538] bg-clip-text text-transparent">Programs</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#C41E3A] to-[#8B1538] mx-auto mb-8 rounded-full"></div>
//           <p className="text-xl font-semibold text-[#2C2C2C] max-w-4xl mx-auto leading-relaxed opacity-90">
//             Our Seva is sacred it manifests through transformative programs that merge ancient dharma with practical service to uplift life and spirit.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {programs.map((prog, i) => (
//             <div
//               key={i}
//               onClick={() => setActiveIndex(i)}
//               className="cursor-pointer group relative overflow-hidden"
//             >
//               {/* Card with enhanced styling */}
//               <div className="relative p-8 bg-white/80 backdrop-blur-sm border border-[#F4E8E8]/60 hover:border-[#C41E3A]/40 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group-hover:bg-white/90">
                
//                 {/* Subtle gradient background */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#FFFEF7]/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
//                 {/* Enhanced icon container */}
//                 <div className="relative mb-6">
//                   <div className={`w-16 h-16 ${prog.iconBg} rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}>
//                     <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
//                     <div className="relative z-10">
//                       {prog.icon}
//                     </div>
//                   </div>
                  
//                   {/* Floating decoration */}
//                   <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#C41E3A]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></div>
//                 </div>
                
//                 <div className="relative z-10">
//                   <h3 className="text-xl font-bold text-[#2C2C2C] group-hover:text-[#C41E3A] mb-2 transition-colors duration-300">
//                     {prog.title}
//                   </h3>
//                   <p className="text-[#C41E3A] font-semibold mb-4 opacity-90">{prog.subtitle}</p>
                  
//                   <ul className="text-sm text-[#2C2C2C]/80 space-y-2 mb-6">
//                     {prog.highlights.map((point, idx) => (
//                       <li key={idx} className="flex items-start gap-2">
//                         <div className="w-1.5 h-1.5 bg-[#C41E3A] rounded-full mt-2 flex-shrink-0"></div>
//                         <span className="leading-relaxed">{point}</span>
//                       </li>
//                     ))}
//                   </ul>
                  
//                   <div className="flex items-center gap-2 text-[#C41E3A] text-sm font-semibold group-hover:gap-3 transition-all duration-300">
//                     <span>Tap to read more</span>
//                     <div className="w-5 h-5 bg-[#C41E3A]/10 rounded-full flex items-center justify-center group-hover:bg-[#C41E3A]/20 transition-all duration-300">
//                       <svg className="w-3 h-3 text-[#C41E3A] group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Subtle border glow effect */}
//                 <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#C41E3A]/20 via-transparent to-[#8B1538]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl transform scale-105"></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <AnimatePresence>
//           {activeIndex !== null && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-center justify-center px-4"
//               onClick={() => setActiveIndex(null)}
//             >
//               <motion.div
//                 initial={{ y: 60, scale: 0.9, opacity: 0 }}
//                 animate={{ y: 0, scale: 1, opacity: 1 }}
//                 exit={{ y: 60, scale: 0.9, opacity: 0 }}
//                 transition={{ duration: 0.4, ease: "easeOut" }}
//                 className="bg-gradient-to-br from-[#FFFEF7] to-[#FDF8F8] max-w-lg w-full rounded-3xl p-8 relative shadow-2xl border border-[#F4E8E8]/50"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 {/* Enhanced close button */}
//                 <button
//                   onClick={() => setActiveIndex(null)}
//                   className="absolute top-6 right-6 w-10 h-10 bg-[#8B1538]/10 hover:bg-[#C41E3A]/20 rounded-full flex items-center justify-center text-[#8B1538] hover:text-[#C41E3A] transition-all duration-300 hover:scale-110"
//                 >
//                   <X size={20} />
//                 </button>
                
//                 {/* Modal content with enhanced styling */}
//                 <div className="pr-6">
//                   <h3 className="text-3xl font-bold bg-gradient-to-r from-[#C41E3A] to-[#8B1538] bg-clip-text text-transparent mb-3">
//                     {programs[activeIndex].title}
//                   </h3>
//                   <p className="text-[#2C2C2C] mb-6 font-semibold text-lg opacity-90">
//                     {programs[activeIndex].subtitle}
//                   </p>
//                   <div className="w-16 h-0.5 bg-gradient-to-r from-[#C41E3A] to-[#8B1538] mb-6 rounded-full"></div>
//                   <p className="text-[#2C2C2C] leading-relaxed whitespace-pre-line opacity-90">
//                     {programs[activeIndex].fullDescription}
//                   </p>
//                 </div>
                
//                 {/* Subtle background decoration */}
//                 <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#C41E3A]/5 to-transparent rounded-full -z-10"></div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
     
// <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#FDF8F8] to-[#FFFEF7]">
//   {/* 🌄 Background Image Layer */}
//   <div className="absolute inset-0 bg-[url('/public/istockphoto-502588750-612x612.jpg')] bg-cover bg-center opacity-40 mix-blend-multiply"></div>

//   {/* 🔴 SVG Red Dot Pattern Overlay */}
//   <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23C41E3A\\' fill-opacity=\\'0.05\\'%3E%3Ccircle cx=\\'30\\' cy=\\'30\\' r=\\'4\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

//   <div className="max-w-7xl mx-auto px-4 relative z-10">
//     <div className="text-center mb-16">
//       <div className="flex justify-center mb-6">
//         <Award className="w-12 h-12 text-[#C41E3A]" />
//       </div>
//       <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
//         Our <span className="text-[#C41E3A]">Impact</span>
//       </h2>
   
//       <p className="text-xl font-semibold text-[#2C2C2C]">Making a difference, one step at a time</p>
//     </div>

//     <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//       {impactStats.map((stat, index) => (
//         <div key={index} className="text-center">
//           <div className="bg-[#FFFEF7] p-8 rounded-xl shadow-lg border border-[#F4E8E8] hover:border-[#C41E3A] transition-all duration-300 hover:shadow-2xl">
//             <div className="text-4xl lg:text-5xl font-bold text-[#C41E3A] mb-2">{stat.number}</div>
//             <div className="text-[#2C2C2C] font-semibold">{stat.label}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//       {/* Call to Action */}
//       <section className="py-20 bg-[#FFFEF7]">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
//             We're not <span className="text-[#C41E3A]">hiring</span>, we're <span className="text-[#C41E3A]">inviting</span>
//           </h2>
          
//           <p className="text-xl text-[#2C2C2C] mb-12">
//             Become a Sahyogi Join our community and co create the future.
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
//             <Link to="/get-involved" className="bg-gradient-to-r from-[#C41E3A] to-[#8B1538] text-[#FFFEF7] px-8 py-4 rounded-lg font-semibold text-lg hover:from-[#8B1538] hover:to-[#C41E3A] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
//               <MessageCircle size={20} />
//               <span>Join WhatsApp Community</span>
//             </Link>
//             <Link to="/get-involved" className="border-2 border-[#C41E3A] text-[#C41E3A] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#C41E3A] hover:text-[#FFFEF7] transition-all duration-300 flex items-center justify-center space-x-2">
//               <Users size={20} />
//               <span>Volunteer with Us</span>
//             </Link>
//           </div>
          
//           <div className="bg-gradient-to-r from-[#FDF8F8] to-[#FFFEF7] p-8 rounded-xl shadow-lg border border-[#F4E8E8]">
//             <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">Core Values</h3>
//           <div className="flex flex-wrap justify-center gap-4 mb-6">
//   {Array.isArray(coreValues) &&
//     coreValues.map((value, index) =>
//       typeof value === 'object' && value.name && value.name.trim() !== '' ? (
//         <span
//           key={index}
//           className="px-4 py-2 bg-[#C41E3A] text-[#FFFEF7] rounded-full font-medium"
//         >
//           {value.name}
//         </span>
//       ) : null
//     )}
// </div>

//             <p className="text-[#2C2C2C] italic text-lg">
//               "Our programs are bridges… reconnecting modern needs with eternal wisdom."
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;





import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, Heart, Users, MapPin, BookOpen, Phone, Mail, TreePine, 
  Droplets, GraduationCap, Utensils, Sprout, Shirt, Instagram, Youtube, 
  Linkedin, MessageCircle, Star, Award, Globe, Leaf, Mountain, Sun,
  Crown, Shield, Flame, Eye,
  BookTemplate,
  Flower,X,
  Landmark,
  Droplet,
  BookOpenCheck,
  Soup,
  EyeOff,
  EyeIcon,
  Sparkles
} from 'lucide-react';
import Hero from './componenets/ui/Hero';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';

const Home = () => {

const navigate=useNavigate();

 const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      navigate('/admin-dashboard');
    }
  }, [user]);




  const [activeIndex, setActiveIndex] = useState(null);
  
  const programs = [
    {
      title: "Sanatan Samridhi",
      subtitle: "Save Temples, Preserve Culture",
      highlights: [
        "Restore and revitalize old Hindu temples.",
        "Support temple renovation and religious practices.",
        "Preserve spiritual heritage of Sanatan Dharma."
      ],
      fullDescription:
        "Focused on restoring and revitalizing old, broken-down Hindu temples and sacred sites. Supports temple renovation, encourages community responsibility, and promotes harmony while reviving cultural and spiritual traditions.",
      icon: <Landmark className="w-8 h-8" />,
      iconBg: "bg-[#C41E3A]"
    },
    {
      title: "Apha Sujala",
      subtitle: "For Clean and Living Waters",
      highlights: [
        "Reduce water pollution.",
        "Promote clean drinking water access.",
        "Sustainable aquatic ecosystem practices."
      ],
      fullDescription:
        "Focused on reducing water pollution and ensuring safe drinking water for all. Combines science, policy, and community efforts to secure long-term water sustainability.",
      icon: <Droplet className="w-8 h-8" />,
      iconBg: "bg-[#00796B]"
    },
    {
      title: "PRN Gyan Sarovar",
      subtitle: "Education for All",
      highlights: [
        "Free education access.",
        "Inclusive learning environments.",
        "Empowers the underprivileged."
      ],
      fullDescription:
        "Aims to provide free quality education to underprivileged children across levels. Promotes social equity through inclusive learning and support for the marginalized.",
      icon: <BookOpenCheck className="w-8 h-8" />,
      iconBg: "bg-[#6A1B9A]"
    },
    {
      title: "Pawan Putra",
      subtitle: "Each Breath is a Gift",
      highlights: [
        "Tree plantations for clean air.",
        "Native species to purify and cool.",
        "Environmental awareness campaigns."
      ],
      fullDescription:
        "Organizes tree plantations in cities and villages to combat air pollution. Promotes eco-restoration, carbon capture, and community engagement.",
      icon: <Leaf className="w-8 h-8" />,
      iconBg: "bg-[#2E7D32]"
    },
    {
      title: "Anna Purna Brahma",
      subtitle: "Food is Divine",
      highlights: [
        "Run free food programs.",
        "Promote sustainable farming.",
        "Empower local food security."
      ],
      fullDescription:
        "Combats hunger by operating community kitchens and sustainable food systems. Emphasizes food dignity and nourishment for all.",
      icon: <Soup className="w-8 h-8" />,
      iconBg: "bg-[#EF6C00]"
    },
    {
      title: "Dhara Danya",
      subtitle: "Save Soil, Sustain Life",
      highlights: [
        "Restore soil health.",
        "Encourage organic practices.",
        "Build soil conscious communities."
      ],
      fullDescription:
        "Focuses on soil restoration and sustainable farming. Supports farmers in adopting practices like agroforestry and moisture conservation for long-term soil vitality.",
      icon: <Sprout className="w-8 h-8" />,
      iconBg: "bg-[#795548]"
    }
  ];

  const transformationPath = [
    { 
      from: 'Confusion', 
      to: 'Clarity', 
      via: 'Stillness',
      icon: <Eye className="w-6 h-6" />,
      description: 'Through meditation and self inquiry, we move from mental chaos to crystal clear understanding.'
    },
    { 
      from: 'Burnout', 
      to: 'Service', 
      via: 'Reflection',
      icon: <Flame className="w-6 h-6" />,
      description: 'Inner reflection transforms exhaustion into purposeful, sustainable service to humanity.'
    },
    { 
      from: 'Disconnection', 
      to: 'Impact', 
      via: 'Wisdom',
      icon: <Flower className="w-6 h-6" />,
      description: 'Ancient wisdom bridges the gap between individual growth and collective transformation.'
    }
  ];

  const impactStats = [
    { 
      number: '10,00+', 
      label: 'Trees Planted',
      icon: <TreePine className="w-8 h-8 text-[#C41E3A]" />,
      description: 'Native species across 15 states'
    },
    { 
      number: '50+', 
      label: 'Children Educated',
      icon: <GraduationCap className="w-8 h-8 text-[#8B1538]" />,
      description: 'Free quality education provided'
    },
    { 
      number: '2+', 
      label: 'Sacred Sites Restored',
      icon: <BookTemplate className="w-8 h-8 text-[#C41E3A]" />,
      description: 'Temples and heritage sites revived'
    },
    { 
      number: '20+', 
      label: 'Active Volunteers',
      icon: <Users className="w-8 h-8 text-[#8B1538]" />,
      description: 'Dedicated seva warriors'
    }
  ];

  const coreValues = [
    { name: 'Dharma', icon: <Shield className="w-5 h-5" />, color: 'bg-[#C41E3A]' },
    { name: 'Dignity', icon: <Crown className="w-5 h-5" />, color: 'bg-[#8B1538]' },
    { name: 'Service', icon: <Heart className="w-5 h-5" />, color: 'bg-[#C41E3A]' },
    { name: 'Sustainability', icon: <Leaf className="w-5 h-5" />, color: 'bg-[#8B1538]' },
    { name: 'Synchronicity', icon: <Star className="w-5 h-5" />, color: 'bg-[#C41E3A]' }
  ];

  const testimonials = [
    {
      text: "The foundation transformed not just our village temple, but our entire community's spirit.",
      author: "Radha Devi",
      location: "Vrindavan, UP",
      role: "Village Elder"
    },
    {
      text: "Through their education program, my children learned values alongside academics.",
      author: "Ravi Kumar",
      location: "Haridwar, UK",
      role: "Parent"
    },
    {
      text: "Their organic farming methods doubled our yield while healing our soil.",
      author: "Gopal Singh",
      location: "Rajasthan",
      role: "Farmer"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF8F8] to-[#FFFEF7]">
      {/* Hero Section */}
      <Hero />

      {/* Sacred Quote Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-[#2C2C2C] to-[#2C2C2C] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-20"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="mb-4 md:mb-6">
            <Sun className="w-12 h-12 md:w-16 md:h-16 text-[#C41E3A] mx-auto mb-4 opacity-80" />
          </div>
          <blockquote className="text-xl md:text-2xl lg:text-3xl text-[#FFFEF7] font-light italic leading-relaxed mb-4 md:mb-6">
            "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः।<br />
            तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम॥"
          </blockquote>
          <p className="text-[#C41E3A] text-base md:text-lg">
            Where there is Krishna and Arjuna, there is prosperity, victory, and eternal dharma.
          </p>
        </div>
      </section>

      {/* Transformation Journey */}
      <section className="py-12 md:py-20 bg-[#FDF8F8] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C41E3A]/5 to-[#8B1538]/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <div className="flex justify-center mb-4 md:mb-6">
              <Flower className="w-10 h-10 md:w-12 md:h-12 text-[#C41E3A] animate-pulse" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4 md:mb-6">
              The Path of <span className="text-[#C41E3A]">Transformation</span>
            </h2>
            <p className="text-xl md:text-2xl text-[#2C2C2C] max-w-4xl mx-auto font-light leading-relaxed">
              "We do not build temples; we rebuild purpose and restore lives through the eternal wisdom of dharma."
            </p>
          </div>
          
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {transformationPath.map((path, index) => (
              <div key={index} className="relative group">
                <div className="bg-[#FFFEF7] p-6 md:p-8 rounded-2xl shadow-xl border border-[#F4E8E8] hover:border-[#C41E3A] transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2">
                  <div className="text-center mb-4 md:mb-6">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#FDF8F8] to-[#F4E8E8] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-[#C41E3A] text-sm md:text-base font-bold">{path.from}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center mb-4 md:mb-6">
                    <div className="flex items-center space-x-2 md:space-x-3 mb-2 md:mb-4">
                      <div className="text-[#C41E3A]">{path.icon}</div>
                      <span className="text-[#C41E3A] font-semibold text-base md:text-lg">{path.via}</span>
                    </div>
                    <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-[#C41E3A] to-transparent mb-2 md:mb-4"></div>
                    <ArrowRight className="text-[#C41E3A] transform rotate-90" size={20} />
                  </div>
                  
                  <div className="text-center mb-4 md:mb-6">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#C41E3A] to-[#8B1538] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <span className="text-[#FFFEF7] text-sm md:text-base font-bold">{path.to}</span>
                    </div>
                  </div>
                  
                  <p className="text-[#2C2C2C]/70 text-center leading-relaxed text-sm md:text-base">
                    {path.description}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-11 md:mb-16">
  {transformationPath.map((path, index) => (
    <div key={index} className="relative group h-full">
      <div className="flex flex-col justify-between h-full bg-[#FFFEF7] p-6 md:p-7 rounded-2xl shadow-xl border border-[#F4E8E8] hover:border-[#C41E3A] transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2">
        
        {/* Top Circle */}
        <div className="text-center mb-4 md:mb-6">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#FDF8F8] to-[#F4E8E8] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <span className="text-[#C41E3A] text-sm md:text-base font-bold">{path.from}</span>
          </div>
        </div>
        
        {/* Middle Line */}
        <div className="flex flex-col items-center mb-4 md:mb-6">
          <div className="flex items-center space-x-2 md:space-x-3 mb-2 md:mb-4">
            <div className="text-[#C41E3A]">{path.icon}</div>
            <span className="text-[#C41E3A] font-semibold text-base md:text-lg">{path.via}</span>
          </div>
          <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-[#C41E3A] to-transparent mb-2 md:mb-4"></div>
          <ArrowRight className="text-[#C41E3A] transform rotate-90" size={20} />
        </div>
        
        {/* Bottom Circle */}
        <div className="text-center mb-4 md:mb-6">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#C41E3A] to-[#8B1538] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
            <span className="text-[#FFFEF7] text-sm md:text-base font-bold">{path.to}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-[#2C2C2C]/70 text-center leading-relaxed text-sm md:text-base">
          {path.description}
        </p>
      </div>
    </div>
  ))}
</div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-[#FFFEF7] p-6 md:p-10 rounded-2xl shadow-xl border border-[#F4E8E8] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#C41E3A]/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4 md:mb-6">
                    <EyeIcon className="w-6 h-6 md:w-8 md:h-8 text-[#C41E3A] mr-2 md:mr-3" />
                    <h3 className="text-xl md:text-2xl font-bold text-[#C41E3A]">We Believe</h3>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start group">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#C41E3A] rounded-full mt-2 md:mt-3 mr-2 md:mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                      <p className="text-[#2C2C2C] leading-relaxed text-sm md:text-base">Spirituality is not an escape, but an anchor that grounds us in truth and purpose.</p>
                    </div>
                    <div className="flex items-start group">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#C41E3A] rounded-full mt-2 md:mt-3 mr-2 md:mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                      <p className="text-[#2C2C2C] leading-relaxed text-sm md:text-base">Ancient truths are not outdated they are timeless wisdom waiting to be rediscovered.</p>
                    </div>
                    <div className="flex items-start group">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#C41E3A] rounded-full mt-2 md:mt-3 mr-2 md:mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                      <p className="text-[#2C2C2C] leading-relaxed text-sm md:text-base">Everyone believer or skeptic can benefit from deeper self-awareness and inner peace.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#FFFEF7] p-6 md:p-10 rounded-2xl shadow-xl border border-[#F4E8E8] relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-tr from-[#C41E3A]/10 to-transparent rounded-tr-full"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4 md:mb-6">
                    <Globe className="w-6 h-6 md:w-8 md:h-8 text-[#C41E3A] mr-2 md:mr-3" />
                    <h3 className="text-xl md:text-2xl font-bold text-[#C41E3A]">Our Vision</h3>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start group">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#C41E3A] rounded-full mt-2 md:mt-3 mr-2 md:mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                      <p className="text-[#2C2C2C] leading-relaxed text-sm md:text-base">Spirituality transcends religion it's universal wisdom for all humanity.</p>
                    </div>
                    <div className="flex items-start group">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#C41E3A] rounded-full mt-2 md:mt-3 mr-2 md:mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                      <p className="text-[#2C2C2C] leading-relaxed text-sm md:text-base">Ancient knowledge holds the keys to healing modern suffering and disconnection.</p>
                    </div>
                    <div className="flex items-start group">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#C41E3A] rounded-full mt-2 md:mt-3 mr-2 md:mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                      <p className="text-[#2C2C2C] leading-relaxed text-sm md:text-base">Transformation is possible in individuals, communities, and sacred spaces.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      {/* <section className="py-12 md:py-24 bg-gradient-to-br from-[#FDF8F8] via-[#FFFEF7] to-[#FDF8F8] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 md:top-20 left-4 md:left-10 w-16 md:w-32 h-16 md:h-32 bg-[#C41E3A]/5 rounded-full blur-xl md:blur-3xl"></div>
          <div className="absolute bottom-10 md:bottom-20 right-4 md:right-10 w-20 md:w-40 h-20 md:h-40 bg-[#8B1538]/5 rounded-full blur-xl md:blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-12 md:w-24 h-12 md:h-24 bg-[#C41E3A]/3 rounded-full blur-xl md:blur-2xl"></div>
        </div>
        
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(196, 30, 58, 0.1) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-5 relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-[#C41E3A]/20 rounded-full blur-lg md:blur-xl scale-125 md:scale-150"></div>
                <div className="relative bg-gradient-to-br from-[#C41E3A] to-[#8B1538] p-3 md:p-4 rounded-full shadow-xl md:shadow-2xl">
                  <Flower className="w-8 h-8 md:w-12 md:h-12 text-white" />
                </div>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#2C2C2C] mb-6 md:mb-8 tracking-tight">
              Our <span className="bg-gradient-to-r from-[#C41E3A] to-[#8B1538] bg-clip-text text-transparent">Programs</span>
            </h2>
            <div className="w-16 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-[#C41E3A] to-[#8B1538] mx-auto mb-6 md:mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl font-semibold text-[#2C2C2C] max-w-4xl mx-auto leading-relaxed opacity-90">
              Our Seva is sacred it manifests through transformative programs that merge ancient dharma with practical service to uplift life and spirit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {programs.map((prog, i) => (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className="cursor-pointer group relative overflow-hidden"
              >
                <div className="relative p-6 md:p-8 bg-white/80 backdrop-blur-sm border border-[#F4E8E8]/60 hover:border-[#C41E3A]/40 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover:bg-white/90">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFFEF7]/50 to-transparent rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative mb-4 md:mb-6">
                    <div className={`w-12 h-12 md:w-16 md:h-16 ${prog.iconBg} rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                      <div className="relative z-10">
                        {prog.icon}
                      </div>
                    </div>
                    
                    <div className="absolute -top-1 -right-1 w-4 h-4 md:w-6 md:h-6 bg-[#C41E3A]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-lg md:text-xl font-bold text-[#2C2C2C] group-hover:text-[#C41E3A] mb-2 transition-colors duration-300">
                      {prog.title}
                    </h3>
                    <p className="text-[#C41E3A] font-semibold mb-3 md:mb-4 opacity-90 text-sm md:text-base">{prog.subtitle}</p>
                    
                    <ul className="text-xs md:text-sm text-[#2C2C2C]/80 space-y-1 md:space-y-2 mb-4 md:mb-6">
                      {prog.highlights.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#C41E3A] rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center gap-1 md:gap-2 text-[#C41E3A] text-xs md:text-sm font-semibold group-hover:gap-2 md:group-hover:gap-3 transition-all duration-300">
                      <span>Tap to read more</span>
                      <div className="w-4 h-4 md:w-5 md:h-5 bg-[#C41E3A]/10 rounded-full flex items-center justify-center group-hover:bg-[#C41E3A]/20 transition-all duration-300">
                        <svg className="w-2 h-2 md:w-3 md:h-3 text-[#C41E3A] group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#C41E3A]/20 via-transparent to-[#8B1538]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg md:blur-xl transform scale-105"></div>
                </div>
              </div>
            ))}
          </div>

          <AnimatePresence>
            {activeIndex !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-center justify-center px-4 sm:px-6"
                onClick={() => setActiveIndex(null)}
              >
                <motion.div
                  initial={{ y: 60, scale: 0.9, opacity: 0 }}
                  animate={{ y: 0, scale: 1, opacity: 1 }}
                  exit={{ y: 60, scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-gradient-to-br from-[#FFFEF7] to-[#FDF8F8] max-w-lg w-full rounded-2xl md:rounded-3xl p-6 md:p-8 relative shadow-2xl border border-[#F4E8E8]/50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setActiveIndex(null)}
                    className="absolute top-4 md:top-6 right-4 md:right-6 w-8 h-8 md:w-10 md:h-10 bg-[#8B1538]/10 hover:bg-[#C41E3A]/20 rounded-full flex items-center justify-center text-[#8B1538] hover:text-[#C41E3A] transition-all duration-300 hover:scale-110"
                  >
                    <X size={16} />
                  </button>
                  
                  <div className="pr-4 md:pr-6">
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#C41E3A] to-[#8B1538] bg-clip-text text-transparent mb-2 md:mb-3">
                      {programs[activeIndex].title}
                    </h3>
                    <p className="text-[#2C2C2C] mb-4 md:mb-6 font-semibold text-base md:text-lg opacity-90">
                      {programs[activeIndex].subtitle}
                    </p>
                    <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-[#C41E3A] to-[#8B1538] mb-4 md:mb-6 rounded-full"></div>
                    <p className="text-[#2C2C2C] leading-relaxed whitespace-pre-line opacity-90 text-sm md:text-base">
                      {programs[activeIndex].fullDescription}
                    </p>
                  </div>
                  
                  <div className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-tl from-[#C41E3A]/5 to-transparent rounded-full -z-10"></div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section> */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-[#FDF8F8] via-[#FFFEF7] to-[#FDF8F8] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 md:top-20 left-4 md:left-10 w-16 md:w-32 h-16 md:h-32 bg-[#C41E3A]/5 rounded-full blur-xl md:blur-3xl"></div>
        <div className="absolute bottom-10 md:bottom-20 right-4 md:right-10 w-20 md:w-40 h-20 md:h-40 bg-[#8B1538]/5 rounded-full blur-xl md:blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-12 md:w-24 h-12 md:h-24 bg-[#C41E3A]/3 rounded-full blur-xl md:blur-2xl"></div>
      </div>
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(196, 30, 58, 0.1) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-5 relative z-10">
        {/* Enhanced Header Section */}
        <div className="relative mb-8 md:mb-12">
          {/* Top Banner */}
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C41E3A]/10 to-[#8B1538]/10 backdrop-blur-sm px-4 py-2 md:py-3 md:px-5 rounded-full border border-[#C41E3A]/20 mb-4">
              <Sparkles className="w-4 h-4 text-[#C41E3A]" />
              <span className="text-sm font-semibold text-[#C41E3A]">Sacred Service Programs</span>
              <Star className="w-4 h-4 text-[#C41E3A]" />
            </div>
          </div>

          {/* Main Header */}
          <div className="text-center mb-8 md:mb-12">
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-[#C41E3A]/20 rounded-full blur-lg md:blur-xl scale-125 md:scale-150"></div>
                <div className="relative bg-gradient-to-br from-[#C41E3A] to-[#8B1538] p-3 md:p-4 rounded-full shadow-xl md:shadow-2xl">
                  <Flower className="w-8 h-8 md:w-12 md:h-12 text-white" />
                </div>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#2C2C2C] mb-6 md:mb-8 tracking-tight">
              Our <span className="bg-gradient-to-r from-[#C41E3A] to-[#8B1538] bg-clip-text text-transparent">Programs</span>
            </h2>
            <div className="w-16 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-[#C41E3A] to-[#8B1538] mx-auto mb-6 md:mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl font-semibold text-[#2C2C2C] max-w-4xl mx-auto leading-relaxed opacity-90">
              Our Seva is sacred it manifests through transformative programs that merge ancient dharma with practical service to uplift life and spirit.
            </p>
          </div>

          {/* Stats/Features Row */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="bg-white/60 backdrop-blur-sm border border-[#F4E8E8]/60 rounded-xl p-4 md:p-6 text-center group hover:bg-white/80 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C41E3A] to-[#8B1538] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#2C2C2C] mb-1">1000+</h3>
              <p className="text-sm text-[#C41E3A] font-semibold">Lives Transformed</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm border border-[#F4E8E8]/60 rounded-xl p-4 md:p-6 text-center group hover:bg-white/80 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C41E3A] to-[#8B1538] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#2C2C2C] mb-1">50+</h3>
              <p className="text-sm text-[#C41E3A] font-semibold">Community Centers</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm border border-[#F4E8E8]/60 rounded-xl p-4 md:p-6 text-center group hover:bg-white/80 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C41E3A] to-[#8B1538] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#2C2C2C] mb-1">25+</h3>
              <p className="text-sm text-[#C41E3A] font-semibold">Years of Service</p>
            </div>
          </div> */}
        </div>



        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {programs.map((prog, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              className="cursor-pointer group relative overflow-hidden"
            >
              <div className="relative p-6 md:p-8 bg-white/80 backdrop-blur-sm border border-[#F4E8E8]/60 hover:border-[#C41E3A]/40 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover:bg-white/90">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFFEF7]/50 to-transparent rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative mb-4 md:mb-6">
                  <div className={`w-12 h-12 md:w-16 md:h-16 ${prog.iconBg} rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                    <div className="relative z-10">
                      {prog.icon}
                    </div>
                  </div>
                  
                  <div className="absolute -top-1 -right-1 w-4 h-4 md:w-6 md:h-6 bg-[#C41E3A]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-lg md:text-xl font-bold text-[#2C2C2C] group-hover:text-[#C41E3A] mb-2 transition-colors duration-300">
                    {prog.title}
                  </h3>
                  <p className="text-[#C41E3A] font-semibold mb-3 md:mb-4 opacity-90 text-sm md:text-base">{prog.subtitle}</p>
                  
                  <ul className="text-xs md:text-sm text-[#2C2C2C]/80 space-y-1 md:space-y-2 mb-4 md:mb-6">
                    {prog.highlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#C41E3A] rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center gap-1 md:gap-2 text-[#C41E3A] text-xs md:text-sm font-semibold group-hover:gap-2 md:group-hover:gap-3 transition-all duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 text-[#C41E3A] group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
                
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#C41E3A]/20 via-transparent to-[#8B1538]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg md:blur-xl transform scale-105"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-center justify-center px-4 sm:px-6"
              onClick={() => setActiveIndex(null)}
            >
              <motion.div
                initial={{ y: 60, scale: 0.9, opacity: 0 }}
                animate={{ y: 0, scale: 1, opacity: 1 }}
                exit={{ y: 60, scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-gradient-to-br from-[#FFFEF7] to-[#FDF8F8] max-w-lg w-full rounded-2xl md:rounded-3xl p-6 md:p-8 relative shadow-2xl border border-[#F4E8E8]/50"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveIndex(null)}
                  className="absolute top-4 md:top-6 right-4 md:right-6 w-8 h-8 md:w-10 md:h-10 bg-[#8B1538]/10 hover:bg-[#C41E3A]/20 rounded-full flex items-center justify-center text-[#8B1538] hover:text-[#C41E3A] transition-all duration-300 hover:scale-110"
                >
                  <X size={16} />
                </button>
                
                <div className="pr-4 md:pr-6">
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#C41E3A] to-[#8B1538] bg-clip-text text-transparent mb-2 md:mb-3">
                    {programs[activeIndex].title}
                  </h3>
                  <p className="text-[#2C2C2C] mb-4 md:mb-6 font-semibold text-base md:text-lg opacity-90">
                    {programs[activeIndex].subtitle}
                  </p>
                  <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-[#C41E3A] to-[#8B1538] mb-4 md:mb-6 rounded-full"></div>
                  <p className="text-[#2C2C2C] leading-relaxed whitespace-pre-line opacity-90 text-sm md:text-base">
                    {programs[activeIndex].fullDescription}
                  </p>
                </div>
                
                <div className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-tl from-[#C41E3A]/5 to-transparent rounded-full -z-10"></div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
      {/* Impact Section */}
      {/* <section className="py-12 md:py-20 relative overflow-hidden bg-gradient-to-br from-[#FDF8F8] to-[#FFFEF7]">
        <div className="absolute  inset-0 bg-[url('/public/istockphoto-1195731546-612x612.jpg')] bg-cover bg-center opacity-40 mix-blend-multiply"></div>

        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23C41E3A\\' fill-opacity=\\'0.05\\'%3E%3Ccircle cx=\\'30\\' cy=\\'30\\' r=\\'4\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <div className="flex justify-center mb-4 md:mb-6">
              <Award className="w-10 h-10 md:w-12 md:h-12 text-[#C41E3A]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4 md:mb-6">
              Our <span className="text-[#C41E3A]">Impact</span>
            </h2>
            <p className="text-lg md:text-xl font-semibold text-[#2C2C2C]">Making a difference, one step at a time.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#FFFEF7] p-4 md:p-8 rounded-lg md:rounded-xl shadow-lg border border-[#F4E8E8] hover:border-[#C41E3A] transition-all duration-300 hover:shadow-2xl">
                  <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#C41E3A] mb-1 md:mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base text-[#2C2C2C] font-semibold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
<section className="py-12 md:py-20 relative overflow-hidden bg-gradient-to-br from-[#FDF8F8] to-[#FFFEF7]">
  {/* <div className="absolute inset-0 bg-[url('/public/istockphoto-1195731546-612x612.jpg')] bg-cover bg-center opacity-40 mix-blend-multiply"></div>

  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23C41E3A\\' fill-opacity=\\'0.05\\'%3E%3Ccircle cx=\\'30\\' cy=\\'30\\' r=\\'4\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div> */}
<div className="absolute inset-0 bg-[url('/WhatsApp%20Image%202025-07-26%20at%2022.16.55_306c1710.jpg')] bg-cover bg-center opacity-40 mix-blend-multiply"></div>

  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg...')] opacity-30"></div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
    <div className="text-center mb-8 md:mb-16">
      <div className="flex justify-center mb-4 md:mb-6">
        <Award className="w-10 h-10 md:w-12 md:h-12 text-[#C41E3A]" />
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4 md:mb-6">
        Our <span className="text-[#C41E3A]">Impact</span>
      </h2>
      <p className="text-lg md:text-xl font-semibold text-[#2C2C2C]">Making a difference, one step at a time.</p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
      {impactStats.map((stat, index) => (
        <div key={index} className="flex flex-col h-full">
          <div className="flex flex-col justify-center items-center flex-grow bg-[#FFFEF7] p-4 md:p-8 rounded-lg md:rounded-xl shadow-lg border border-[#F4E8E8] hover:border-[#C41E3A] transition-all duration-300 hover:shadow-2xl h-full text-center">
            <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#C41E3A] mb-1 md:mb-2">{stat.number}</div>
            <div className="text-sm md:text-base text-[#2C2C2C] font-semibold">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Call to Action */}
      <section className="py-12 md:py-20 bg-[#FFFEF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4 md:mb-6">
            We're not <span className="text-[#C41E3A]">hiring</span>, we're <span className="text-[#C41E3A]">inviting</span>
          </h2>
         
          <p className="text-lg md:text-xl text-[#2C2C2C] mb-8 md:mb-12">
            Become a Sahyogi Join our community and co create the future.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            <Link to="/contact" className="bg-gradient-to-r from-[#C41E3A] to-[#8B1538] text-[#FFFEF7] px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:from-[#8B1538] hover:to-[#C41E3A] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
              <MessageCircle size={16} />
              <span>Join Our Community</span>
            </Link>
            <Link to="/volunteers" className="border-2 border-[#C41E3A] text-[#C41E3A] px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-gradient-to-r from-[#C41E3A] to-[#8B1538] hover:text-[#FFFEF7] transition-all duration-300 flex items-center justify-center space-x-2">
              <Users size={16} />
              <span>Volunteer with Us</span>
            </Link>
          </div>
          
          <div className="bg-gradient-to-r from-[#FDF8F8] to-[#FFFEF7] p-6 md:p-8 rounded-xl shadow-lg border border-[#F4E8E8]">
            <h3 className="text-xl md:text-2xl font-bold text-[#2C2C2C] mb-3 md:mb-4">Core Values</h3>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4 md:mb-6">
              {Array.isArray(coreValues) &&
                coreValues.map((value, index) =>
                  typeof value === 'object' && value.name && value.name.trim() !== '' ? (
                    <span
                      key={index}
                      className="px-3 py-1 md:px-4 md:py-2 bg-[#C41E3A] text-[#FFFEF7] rounded-full font-medium text-sm md:text-base"
                    >
                      {value.name}
                    </span>
                  ) : null
                )}
            </div>

            <p className="text-[#2C2C2C] italic text-base md:text-lg">
              "Our programs are bridges… reconnecting modern needs with eternal wisdom."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;