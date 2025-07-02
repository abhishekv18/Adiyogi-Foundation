// import React, { useState, useEffect } from 'react';
// import { Heart, Droplets, GraduationCap, TreePine, Utensils, Sprout, Shirt, MapPin, Users, Star, ArrowRight, Circle, Award, Target, Calendar, Globe, ChevronDown, Play, Camera, BookOpen, Leaf } from 'lucide-react';

// const SevaProjectsPage = () => {
//   const [hoveredProject, setHoveredProject] = useState(null);
//   const [activeTab, setActiveTab] = useState('all');
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const projects = [
//     {
//       id: 1,
//       title: "Sanatan Samridhi",
//       subtitle: "Sacred Site Restoration",
//       description: "We revive decaying temples, shrines, and pilgrimage paths—physically and spiritually. With local involvement and cultural respect, we ensure these spaces remain alive, inclusive, and community-powered.",
//       fullDescription: "Through meticulous archaeological research and community collaboration, we restore ancient temples to their former glory while preserving their spiritual essence. Our restoration projects include structural repairs, artistic conservation, and the revival of traditional rituals and ceremonies.",
//       icon: Circle,
//       category: "heritage",
//       color: "#C41E3A",
//       participants: "2,500+",
//       locations: "45 Sites",
//       status: "Active",
//       founded: "2019",
//       impact: "Ancient traditions preserved",
//       imageUrl: "/public/istockphoto-542316008-612x612 (1).jpg",
//       // achievements: ["15 UNESCO heritage sites restored", "50+ traditional craftsmen trained", "100,000+ pilgrims served annually"]
//     },
//     {
//       id: 2,
//       title: "Apaha Sujala",
//       subtitle: "Water Protection",
//       description: "Monitoring, restoring, and protecting India's rivers, wells, and lakes. From pollution control to local water awareness, this is our call to clean, sacred water.",
//       fullDescription: "Our comprehensive water conservation program combines traditional water harvesting techniques with modern technology. We work with local communities to clean water bodies, install filtration systems, and educate about water conservation practices.",
//       icon: Droplets,
//       category: "environment",
//       color: "#C41E3A",
//       participants: "1,800+",
//       locations: "32 Rivers",
//       status: "Expanding",
//       founded: "2020",
//       impact: "Clean water for all",
//       imageUrl: "/public/istockphoto-671568704-612x612.jpg",
//       // achievements: ["12 rivers cleaned", "200+ wells restored", "50,000+ families have clean water"]
//     },
//     {
//       id: 3,
//       title: "PRN Gyan Sarovar",
//       subtitle: "Free & Inclusive Education",
//       description: "We believe education is a dharmic right. We offer free schooling, life-skill mentoring, and values-based education to underserved children—nurturing wise, capable future citizens.",
//       fullDescription: "Our holistic education approach combines academic excellence with moral values, practical skills, and spiritual wisdom. We provide free education from primary to higher secondary level, along with vocational training and character development programs.",
//       icon: GraduationCap,
//       category: "education",
//       color: "#C41E3A",
//       participants: "5,200+",
//       locations: "68 Centers",
//       status: "Growing",
//       founded: "2018",
//       impact: "Future leaders shaped",
//       imageUrl: "/public/istockphoto-1395727822-612x612.jpg",
//       // achievements: ["10,000+ children educated", "95% graduation rate", "500+ teachers trained"]
//     },
//     {
//       id: 4,
//       title: "Pawan Putra",
//       subtitle: "Tree Plantation & Air Quality",
//       description: "Greening barren lands and purifying air through native tree drives and pollution awareness. Each tree is a prayer. Each orchard, a future forest.",
//       fullDescription: "Our reforestation initiative focuses on planting native species to restore ecological balance. We create urban forests, establish community orchards, and implement air quality monitoring systems while educating communities about environmental conservation.",
//       icon: TreePine,
//       category: "environment",
//       color: "#C41E3A",
//       participants: "3,400+",
//       locations: "156 Sites",
//       status: "Thriving",
//       founded: "2019",
//       impact: "Cleaner air, greener earth",
//       imageUrl: "/public/istockphoto-1254698338-612x612.jpg",
//       // achievements: ["500,000+ trees planted", "25% air quality improvement", "50 urban forests created"]
//     },
//     {
//       id: 5,
//       title: "Anna Purna Brahma",
//       subtitle: "Food Distribution & Nutrition",
//       description: "Free meals, nutrition education, and food recovery networks for the underserved. Mobile vans, temple kitchens, and community gardens feed both body and soul.",
//       fullDescription: "Our comprehensive food security program ensures no one goes hungry while promoting nutrition education and sustainable food practices. We operate community kitchens, mobile food units, and establish urban gardens to provide fresh, healthy meals.",
//       icon: Utensils,
//       category: "social",
//       color: "#C41E3A",
//       participants: "4,100+",
//       locations: "89 Kitchens",
//       status: "Serving",
//       founded: "2017",
//       impact: "Nourishing communities",
//       imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop&crop=center",
//       // achievements: ["2 million meals served", "Zero food waste achieved", "150 community gardens established"]
//     },
//     {
//       id: 6,
//       title: "Dhara Dhanya",
//       subtitle: "Soil Health & Organic Farming",
//       description: "Our earth must eat well too. We train farmers in soil regeneration, organic practices, and water-wise agriculture to restore fertility and dignity to farming.",
//       fullDescription: "We empower farmers with sustainable agricultural practices that restore soil health and increase crop yields naturally. Our program includes organic farming training, soil testing, composting techniques, and market linkage for organic produce.",
//       icon: Sprout,
//       category: "environment",
//       color: "#C41E3A",
//       participants: "2,900+",
//       locations: "234 Farms",
//       status: "Cultivating",
//       founded: "2020",
//       impact: "Sustainable farming future",
//       imageUrl: "/public/istockphoto-953464358-612x612.jpg",
//       // achievements: ["5,000+ farmers trained", "40% yield increase", "Pesticide-free cultivation"]
//     },
//     {
//       id: 7,
//       title: "Daya ke Dhaage",
//       subtitle: "Clothing Bank",
//       description: "A compassionate, community-led effort where the well-off donate clean, wearable clothes and those in need 'withdraw' what fits them with dignity.",
//       fullDescription: "Our innovative clothing distribution system operates like a dignified shopping experience for those in need. We collect, clean, and organize donated clothes in boutique-style centers where people can choose what they need with respect and privacy.",
//       icon: Shirt,
//       category: "social",
//       color: "#C41E3A",
//       participants: "1,600+",
//       locations: "28 Centers",
//       status: "Sharing",
//       founded: "2021",
//       impact: "Dignity through giving",
//       imageUrl: "/public/download (5).jpeg",
//       // achievements: ["100,000+ garments distributed", "Zero waste clothing model", "Community dignity preserved"]
//     }
//   ];

//   const categories = [
//     { id: 'all', name: 'All Projects', icon: Globe },
//     { id: 'heritage', name: 'Heritage', icon: Circle },
//     { id: 'environment', name: 'Environment', icon: Leaf },
//     { id: 'education', name: 'Education', icon: BookOpen },
//     { id: 'social', name: 'Social Welfare', icon: Heart }
//   ];

//   const filteredProjects = activeTab === 'all' 
//     ? projects 
//     : projects.filter(project => project.category === activeTab);

//   const stats = [
//     { number: "50+", label: "Active Volunteers", icon: Users },
//     { number: "4", label: "Project Sites", icon: MapPin },
//     { number: "2k+", label: "Lives Impacted", icon: Heart },
//     { number: "3", label: "Core Initiatives", icon: Target }
//   ];

//   return (
//     <div style={{ 
//       backgroundColor: '#FDF8F8', 
//       minHeight: '100vh',
//       fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
//     }}>
     
// <section className="relative overflow-hidden py-16 px-3">
//   {/* ✅ Rose Gradient Overlay */}
//   <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-red-800/20 z-0"></div>

//   {/* ✅ Background Image with Fixed Attachment */}
//   <div
//     className="absolute inset-0 bg-center bg-cover bg-fixed z-0 opacity-15"
//     style={{
//       backgroundImage: "url('/public/premium_photo-1697729603226-8c8627dfc12b.avif')", // ✅ Adjust path if needed
//     }}
//   ></div>

//   {/* ✅ Main Content */}
//   <div className="relative z-10" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
//     <div style={{
//       display: 'inline-flex',
//       alignItems: 'center',
//       gap: '1rem',
//       marginBottom: '2rem',
//       marginTop: "2rem"
//     }}>
//       <h1 style={{
//         fontSize: '3.5rem',
//         fontWeight: '800',
//         color: '#2C2C2C',
//         margin: 0,
//         letterSpacing: '-0.02em',
//       }}>
//         Seva Projects
//       </h1>
//     </div>

//     {/* <div style={{
//       width: '120px',
//       height: '4px',
//       backgroundColor: '#FFFEF7',
//       margin: '0 auto 2rem auto',
//       borderRadius: '2px',
//       boxShadow: '0 2px 10px rgba(255,255,255,0.3)'
//     }}></div> */}

//     <p style={{
//       fontSize: '1.25rem',
//       color: '#2C2C2C',
//       maxWidth: '800px',
//       margin: '0 auto 3rem auto',
//       lineHeight: '1.8',
//       fontWeight: '400',
//     }}>
//       While our programs serve the self, our <span style={{ fontWeight: '700' }}>Seva Projects</span> serve the world.
//       These ground-level initiatives work in areas where pain is physical hunger, pollution, clothing, education and respond with hands, hearts, and heritage.
//     </p>

//     <div style={{
//       fontSize: '1rem',
//       color: '#C41E3A',
//       fontWeight:'500',
//       fontStyle: 'italic',
//       marginBottom: '2rem'
//     }}>
//       "सेवा परमो धर्मः" - Service is the highest dharma
//     </div>

//     <button style={{
//       padding: '1rem 2.5rem',
//       backgroundColor: '#FFFEF7',
//       color: '#C41E3A',
//       border: 'none',
//       borderRadius: '50px',
//       fontSize: '1.1rem',
//       fontWeight: '600',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease',
//       display: 'inline-flex',
//       alignItems: 'center',
//       gap: '0.5rem',
//       boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
//       transform: 'translateY(0)',
//     }}
//       onMouseEnter={(e) => {
//         e.target.style.transform = 'translateY(-2px)';
//         e.target.style.boxShadow = '0 6px 25px rgba(0,0,0,0.3)';
//       }}
//       onMouseLeave={(e) => {
//         e.target.style.transform = 'translateY(0)';
//         e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
//       }}>
//       <Play size={20} />
//       Explore Our Impact
//     </button>
//   </div>
// </section>

//       {/* Stats Section */}
//       <section style={{
//         background: 'linear-gradient(135deg, #FFFEF7 0%, #F4E8E8 100%)',
//         padding: '4rem 0',
//         borderBottom: '1px solid #F4E8E8'
//       }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//             gap: '3rem',
//             textAlign: 'center'
//           }}>
//             {stats.map((stat, index) => {
//               const IconComponent = stat.icon;
//               return (
//                 <div key={index} style={{
//                   position: 'relative'
//                 }}>
//                   <div style={{
//                     width: '80px',
//                     height: '80px',
//                     borderRadius: '50%',
//                     backgroundColor: '#C41E3A',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     margin: '0 auto 1.5rem auto',
//                     boxShadow: '0 8px 25px rgba(196, 30, 58, 0.3)'
//                   }}>
//                     <IconComponent size={32} style={{ color: '#FFFEF7' }} />
//                   </div>
//                   <h3 style={{
//                     fontSize: '2.5rem',
//                     fontWeight: '800',
//                     color: '#C41E3A',
//                     margin: '0 0 0.5rem 0'
//                   }}>
//                     {stat.number}
//                   </h3>
//                   <p style={{
//                     fontSize: '1.1rem',
//                     color: '#2C2C2C',
//                     margin: 0,
//                     fontWeight: '500'
//                   }}>
//                     {stat.label}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Category Filter */}
//       <section style={{ padding: '2rem 0', backgroundColor: '#FFFEF7' }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
//           <div style={{
//             display: 'flex',
//             gap: '1rem',
//             justifyContent: 'center',
//             flexWrap: 'wrap'
//           }}>
//             {categories.map((category) => {
//               const IconComponent = category.icon;
//               const isActive = activeTab === category.id;
//               return (
//                 <button
//                   key={category.id}
//                   onClick={() => setActiveTab(category.id)}
//                   style={{
//                     padding: '0.75rem 1.5rem',
//                     backgroundColor: isActive ? '#C41E3A' : 'transparent',
//                     color: isActive ? '#FFFEF7' : '#2C2C2C',
//                     border: '2px solid #C41E3A',
//                     borderRadius: '50px',
//                     fontSize: '0.95rem',
//                     fontWeight: '600',
//                     cursor: 'pointer',
//                     transition: 'all 0.3s ease',
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '0.5rem'
//                   }}
//                 >
//                   <IconComponent size={18} />
//                   {category.name}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Projects Grid */}
//       <main style={{ padding: '4rem 0' }}>
//         <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1rem' }}>
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
//             gap: '2.5rem',
//             marginBottom: '4rem'
//           }}>
//             {filteredProjects.map((project) => {
//               const IconComponent = project.icon;
//               const isHovered = hoveredProject === project.id;
              
//               return (
//                 <div
//                   key={project.id}
//                   onMouseEnter={() => setHoveredProject(project.id)}
//                   onMouseLeave={() => setHoveredProject(null)}
//                   style={{
//                     background: '#FFFEF7',
//                     borderRadius: '20px',
//                     overflow: 'hidden',
//                     boxShadow: isHovered 
//                       ? '0 20px 40px rgba(196, 30, 58, 0.25)' 
//                       : '0 8px 25px rgba(196, 30, 58, 0.15)',
//                     border: '1px solid #F4E8E8',
//                     transition: 'all 0.4s ease',
//                     transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
//                     cursor: 'pointer',
//                     position: 'relative'
//                   }}
//                 >
//                   {/* Project Image */}
//                   <div style={{
//                     position: 'relative',
//                     height: '200px',
//                     overflow: 'hidden'
//                   }}>
//                     <img 
//                       src={project.imageUrl} 
//                       alt={project.title}
//                       style={{
//                         width: '100%',
//                         height: '100%',
//                         objectFit: 'cover',
//                         transition: 'transform 0.4s ease',
//                         transform: isHovered ? 'scale(1.1)' : 'scale(1)'
//                       }}
//                     />
//                     <div style={{
//                       position: 'absolute',
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       bottom: 0,
//                       background: `linear-gradient(135deg, rgba(196, 30, 58, 0.${isHovered ? '4' : '2'}) 0%, rgba(139, 21, 56, 0.${isHovered ? '6' : '3'}) 100%)`,
//                       transition: 'all 0.4s ease'
//                     }}></div>
                    
//                     {/* Category Badge */}
//                     <div style={{
//                       position: 'absolute',
//                       top: '1rem',
//                       right: '1rem',
//                       backgroundColor: '#FFFEF7',
//                       color: '#C41E3A',
//                       padding: '0.5rem 1rem',
//                       borderRadius: '20px',
//                       fontSize: '0.8rem',
//                       fontWeight: '600',
//                       textTransform: 'capitalize'
//                     }}>
//                       {project.category}
//                     </div>

//                     {/* Status Badge */}
//                     <div style={{
//                       position: 'absolute',
//                       bottom: '1rem',
//                       left: '1rem',
//                       backgroundColor: '#C41E3A',
//                       color: '#FFFEF7',
//                       padding: '0.5rem 1rem',
//                       borderRadius: '20px',
//                       fontSize: '0.8rem',
//                       fontWeight: '600',
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '0.25rem'
//                     }}>
//                       <div style={{
//                         width: '8px',
//                         height: '8px',
//                         borderRadius: '50%',
//                         backgroundColor: '#FFFEF7'
//                       }}></div>
//                       {project.status}
//                     </div>
//                   </div>

//                   {/* Project Content */}
//                   <div style={{ padding: '2rem' }}>
//                     {/* Project Header */}
//                     <div style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '1rem',
//                       marginBottom: '1.5rem'
//                     }}>
//                       <div style={{
//                         width: '60px',
//                         height: '60px',
//                         backgroundColor: isHovered ? '#C41E3A' : '#F4E8E8',
//                         borderRadius: '15px',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         transition: 'all 0.3s ease'
//                       }}>
//                         <IconComponent 
//                           size={28} 
//                           style={{ 
//                             color: isHovered ? '#FFFEF7' : '#C41E3A',
//                             transition: 'color 0.3s ease'
//                           }} 
//                         />
//                       </div>
//                       <div>
//                         <h3 style={{
//                           fontSize: '1.4rem',
//                           fontWeight: '700',
//                           color: '#2C2C2C',
//                           margin: '0 0 0.25rem 0'
//                         }}>
//                           {project.title}
//                         </h3>
//                         <p style={{
//                           fontSize: '0.9rem',
//                           color: '#C41E3A',
//                           margin: 0,
//                           fontWeight: '600',
//                           fontStyle: 'italic'
//                         }}>
//                           {project.subtitle}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Project Description */}
//                     <p style={{
//                       color: '#2C2C2C',
//                       lineHeight: '1.6',
//                       fontSize: '0.95rem',
//                       marginBottom: '1.5rem'
//                     }}>
//                       {project.description}
//                     </p>

//                     {/* Project Impact */}
//                     <div style={{
//                       backgroundColor: '#F4E8E8',
//                       padding: '1rem',
//                       borderRadius: '12px',
//                       marginBottom: '1.5rem'
//                     }}>
//                       <div style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '0.5rem',
//                         marginBottom: '0.5rem'
//                       }}>
//                         <Award size={16} style={{ color: '#C41E3A' }} />
//                         <span style={{
//                           fontSize: '0.85rem',
//                           fontWeight: '600',
//                           color: '#C41E3A'
//                         }}>
//                           Key Impact
//                         </span>
//                       </div>
//                       <p style={{
//                         fontSize: '0.9rem',
//                         color: '#2C2C2C',
//                         margin: 0,
//                         fontWeight: '500'
//                       }}>
//                         {project.impact}
//                       </p>
//                     </div>

//                     {/* Project Stats */}
//                     {/* <div style={{
//                       display: 'grid',
//                       gridTemplateColumns: 'repeat(3, 1fr)',
//                       gap: '1rem',
//                       marginBottom: '1.5rem'
//                     }}>
//                       <div style={{ textAlign: 'center' }}>
//                         <div style={{
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           gap: '0.25rem',
//                           marginBottom: '0.25rem'
//                         }}>
//                           <Users size={16} style={{ color: '#C41E3A' }} />
//                           <span style={{
//                             fontSize: '0.9rem',
//                             fontWeight: '700',
//                             color: '#2C2C2C'
//                           }}>
//                             {project.participants}
//                           </span>
//                         </div>
//                         <span style={{
//                           fontSize: '0.75rem',
//                           color: '#6B4B4B'
//                         }}>
//                           Volunteers
//                         </span>
//                       </div>
                      
//                       <div style={{ textAlign: 'center' }}>
//                         <div style={{
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           gap: '0.25rem',
//                           marginBottom: '0.25rem'
//                         }}>
//                           <MapPin size={16} style={{ color: '#C41E3A' }} />
//                           <span style={{
//                             fontSize: '0.9rem',
//                             fontWeight: '700',
//                             color: '#2C2C2C'
//                           }}>
//                             {project.locations}
//                           </span>
//                         </div>
//                         <span style={{
//                           fontSize: '0.75rem',
//                           color: '#6B4B4B'
//                         }}>
//                           Locations
//                         </span>
//                       </div>
                      
//                       <div style={{ textAlign: 'center' }}>
//                         <div style={{
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           gap: '0.25rem',
//                           marginBottom: '0.25rem'
//                         }}>
//                           <Calendar size={16} style={{ color: '#C41E3A' }} />
//                           <span style={{
//                             fontSize: '0.9rem',
//                             fontWeight: '700',
//                             color: '#2C2C2C'
//                           }}>
//                             {project.founded}
//                           </span>
//                         </div>
//                         <span style={{
//                           fontSize: '0.75rem',
//                           color: '#6B4B4B'
//                         }}>
//                           Founded
//                         </span>
//                       </div>
//                     </div> */}

//                     {/* Action Buttons */}
//                     <div style={{
//                       display: 'flex',
//                       gap: '0.75rem'
//                     }}>
//                       <button style={{
//                         flex: 1,
//                         padding: '0.875rem 1.5rem',
//                         backgroundColor: isHovered ? '#8B1538' : '#C41E3A',
//                         color: '#FFFEF7',
//                         border: 'none',
//                         borderRadius: '12px',
//                         fontSize: '0.9rem',
//                         fontWeight: '600',
//                         cursor: 'pointer',
//                         transition: 'all 0.3s ease',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         gap: '0.5rem'
//                       }}>
//                         <Heart size={16} />
//                         Join Seva
//                       </button>
                      
//                       <button style={{
//                         padding: '0.875rem',
//                         backgroundColor: 'transparent',
//                         color: '#C41E3A',
//                         border: '2px solid #C41E3A',
//                         borderRadius: '12px',
//                         cursor: 'pointer',
//                         transition: 'all 0.3s ease'
//                       }}>
//                         <ArrowRight size={16} />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Call to Action Section */}
//        <div style={{
//           background: 'linear-gradient(135deg, rgba(196, 30, 58, 0.7) 0%, rgba(139, 21, 56, 1) 100%)',
//             borderRadius: '20px',
//             padding: '3rem 2rem',
//             textAlign: 'center',
//             color: '#FFFEF7'
//           }}>
//             <div style={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               gap: '1rem',
//               marginBottom: '1.5rem'
//             }}>
//               <Heart size={32} style={{ color: '#FFFEF7' }} />
//               <h2 style={{
//                 fontSize: '2rem',
//                 fontWeight: '700',
//                 margin: 0
//               }}>
//                 Begin Your Sacred Service
//               </h2>
//               <Heart size={32} style={{ color: '#FFFEF7' }} />
//             </div>
//             <p style={{
//               fontSize: '1.125rem',
//               lineHeight: '1.6',
//               marginBottom: '2rem',
//               maxWidth: '600px',
//               margin: '0 auto 2rem auto',
//               opacity: 0.95
//             }}>
//               Every act of seva transforms not just the world, but the one who serves. 
//               Choose your path of service and become part of something greater than yourself.
//             </p>
//             <div style={{
//               display: 'flex',
//               gap: '1rem',
//               justifyContent: 'center',
//               flexWrap: 'wrap'
//             }}>
//               <button style={{
//                 padding: '1rem 2rem',
//                 backgroundColor: '#FFFEF7',
//                 color: '#C41E3A',
//                 border: 'none',
//                 borderRadius: '12px',
//                 fontSize: '1rem',
//                 fontWeight: '600',
//                 cursor: 'pointer',
//                 transition: 'all 0.3s ease',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '0.5rem'
//               }}>
//                 <Users size={20} />
//                 Volunteer Now
//               </button>
//               <button style={{
//                 padding: '1rem 2rem',
//                 backgroundColor: 'transparent',
//                 color: '#FFFEF7',
//                 border: '2px solid #FFFEF7',
//                 borderRadius: '12px',
//                 fontSize: '1rem',
//                 fontWeight: '600',
//                 cursor: 'pointer',
//                 transition: 'all 0.3s ease',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '0.5rem'
//               }}>
//                 <Heart size={20} />
//                 Make a Donation
//               </button>
//             </div>
//           </div>
//         </div>
//              </main>
//     </div>
//   );
// };

// export default SevaProjectsPage;







import React, { useState, useEffect } from 'react';
import { Heart, Droplets, GraduationCap, TreePine, Utensils, Sprout, Shirt, MapPin, Users, Star, ArrowRight, Circle, Award, Target, Calendar, Globe, ChevronDown, Play, Camera, BookOpen, Leaf } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SevaProjectsPage = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
const navigate=useNavigate();

 const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      navigate('/admin-dashboard');
    }
  }, [user]);
  useEffect(() => {









    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Sanatan Samridhi",
      subtitle: "Sacred Site Restoration",
      description: "We revive decaying temples, shrines, and pilgrimage paths—physically and spiritually. With local involvement and cultural respect, we ensure these spaces remain alive, inclusive, and community-powered.",
      fullDescription: "Through meticulous archaeological research and community collaboration, we restore ancient temples to their former glory while preserving their spiritual essence. Our restoration projects include structural repairs, artistic conservation, and the revival of traditional rituals and ceremonies.",
      icon: Circle,
      category: "heritage",
      color: "#C41E3A",
      participants: "2,500+",
      locations: "45 Sites",
      status: "Active",
      founded: "2019",
      impact: "Ancient traditions preserved",
      imageUrl: "/public/istockphoto-542316008-612x612 (1).jpg",
    },
    {
      id: 2,
      title: "Apaha Sujala",
      subtitle: "Water Protection",
      description: "Monitoring, restoring, and protecting India's rivers, wells, and lakes. From pollution control to local water awareness, this is our call to clean, sacred water.",
      fullDescription: "Our comprehensive water conservation program combines traditional water harvesting techniques with modern technology. We work with local communities to clean water bodies, install filtration systems, and educate about water conservation practices.",
      icon: Droplets,
      category: "environment",
      color: "#C41E3A",
      participants: "1,800+",
      locations: "32 Rivers",
      status: "Expanding",
      founded: "2020",
      impact: "Clean water for all",
      imageUrl: "/public/istockphoto-671568704-612x612.jpg",
    },
    {
      id: 3,
      title: "PRN Gyan Sarovar",
      subtitle: "Free & Inclusive Education",
      description: "We believe education is a dharmic right. We offer free schooling, life-skill mentoring, and values-based education to underserved children—nurturing wise, capable future citizens.",
      fullDescription: "Our holistic education approach combines academic excellence with moral values, practical skills, and spiritual wisdom. We provide free education from primary to higher secondary level, along with vocational training and character development programs.",
      icon: GraduationCap,
      category: "education",
      color: "#C41E3A",
      participants: "5,200+",
      locations: "68 Centers",
      status: "Growing",
      founded: "2018",
      impact: "Future leaders shaped",
      imageUrl: "/public/istockphoto-1395727822-612x612.jpg",
    },
    {
      id: 4,
      title: "Pawan Putra",
      subtitle: "Tree Plantation & Air Quality",
      description: "Greening barren lands and purifying air through native tree drives and pollution awareness. Each tree is a prayer. Each orchard, a future forest.",
      fullDescription: "Our reforestation initiative focuses on planting native species to restore ecological balance. We create urban forests, establish community orchards, and implement air quality monitoring systems while educating communities about environmental conservation.",
      icon: TreePine,
      category: "environment",
      color: "#C41E3A",
      participants: "3,400+",
      locations: "156 Sites",
      status: "Thriving",
      founded: "2019",
      impact: "Cleaner air, greener earth",
      imageUrl: "/public/istockphoto-1254698338-612x612.jpg",
    },
    {
      id: 5,
      title: "Anna Purna Brahma",
      subtitle: "Food Distribution & Nutrition",
      description: "Free meals, nutrition education, and food recovery networks for the underserved. Mobile vans, temple kitchens, and community gardens feed both body and soul.",
      fullDescription: "Our comprehensive food security program ensures no one goes hungry while promoting nutrition education and sustainable food practices. We operate community kitchens, mobile food units, and establish urban gardens to provide fresh, healthy meals.",
      icon: Utensils,
      category: "social",
      color: "#C41E3A",
      participants: "4,100+",
      locations: "89 Kitchens",
      status: "Serving",
      founded: "2017",
      impact: "Nourishing communities",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop&crop=center",
    },
    {
      id: 6,
      title: "Dhara Dhanya",
      subtitle: "Soil Health & Organic Farming",
      description: "Our earth must eat well too. We train farmers in soil regeneration, organic practices, and water-wise agriculture to restore fertility and dignity to farming.",
      fullDescription: "We empower farmers with sustainable agricultural practices that restore soil health and increase crop yields naturally. Our program includes organic farming training, soil testing, composting techniques, and market linkage for organic produce.",
      icon: Sprout,
      category: "environment",
      color: "#C41E3A",
      participants: "2,900+",
      locations: "234 Farms",
      status: "Cultivating",
      founded: "2020",
      impact: "Sustainable farming future",
      imageUrl: "/public/istockphoto-953464358-612x612.jpg",
    },
    {
      id: 7,
      title: "Daya ke Dhaage",
      subtitle: "Clothing Bank",
      description: "A compassionate, community-led effort where the well-off donate clean, wearable clothes and those in need 'withdraw' what fits them with dignity.",
      fullDescription: "Our innovative clothing distribution system operates like a dignified shopping experience for those in need. We collect, clean, and organize donated clothes in boutique-style centers where people can choose what they need with respect and privacy.",
      icon: Shirt,
      category: "social",
      color: "#C41E3A",
      participants: "1,600+",
      locations: "28 Centers",
      status: "Sharing",
      founded: "2021",
      impact: "Dignity through giving",
      imageUrl: "/public/download (5).jpeg",
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: Globe },
    { id: 'heritage', name: 'Heritage', icon: Circle },
    { id: 'environment', name: 'Environment', icon: Leaf },
    { id: 'education', name: 'Education', icon: BookOpen },
    { id: 'social', name: 'Social Welfare', icon: Heart }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const stats = [
    { number: "50+", label: "Active Volunteers", icon: Users },
    { number: "4", label: "Project Sites", icon: MapPin },
    { number: "2k+", label: "Lives Impacted", icon: Heart },
    { number: "3", label: "Core Initiatives", icon: Target }
  ];

  return (
    <div style={{ 
      backgroundColor: '#FDF8F8', 
      minHeight: '100vh',
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
    }}>
     
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-red-800/20 z-0"></div>

        <div
          className="absolute inset-0 bg-center bg-cover bg-fixed z-0 opacity-15"
          style={{
            backgroundImage: "url('/public/premium_photo-1697729603226-8c8627dfc12b.avif')",
          }}
        ></div>

        <div className="relative z-10" style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          textAlign: 'center' 
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: isMobile ? '1.5rem' : '2rem',
            marginTop: isMobile ? '1rem' : '2rem',
            flexDirection: isMobile ? 'column' : 'row'
          }}>
            <h1 style={{
              fontSize: isMobile ? '2.5rem' : '3.5rem',
              fontWeight: '800',
              color: '#2C2C2C',
              margin: 0,
              letterSpacing: '-0.02em',
              lineHeight: 1.2
            }}>
              Seva Projects
            </h1>
          </div>

          <p style={{
            fontSize: isMobile ? '1rem' : '1.25rem',
            color: '#2C2C2C',
            maxWidth: '800px',
            margin: '0 auto 3rem auto',
            lineHeight: '1.8',
            fontWeight: '400',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            While our programs serve the self, our <span style={{ fontWeight: '700' }}>Seva Projects</span> serve the world.
            These ground-level initiatives work in areas where pain is physical hunger, pollution, clothing, education and respond with hands, hearts, and heritage.
          </p>

          <div style={{
            fontSize: isMobile ? '0.9rem' : '1rem',
            color: '#C41E3A',
            fontWeight:'500',
            fontStyle: 'italic',
            marginBottom: isMobile ? '1.5rem' : '2rem'
          }}>
            "सेवा परमो धर्मः" - Service is the highest dharma
          </div>
<Link to='/contact'>
   <button style={{
            padding: isMobile ? '0.875rem 1.75rem' : '1rem 2.5rem',
            backgroundColor: '#FFFEF7',
            color: '#C41E3A',
            border: 'none',
            borderRadius: '50px',
            fontSize: isMobile ? '1rem' : '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            transform: 'translateY(0)',
          }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 25px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
            }}>
            <Play size={isMobile ? 18 : 20} />
            Explore Our Impact
          </button>
</Link>
       
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        background: 'linear-gradient(135deg, #FFFEF7 0%, #F4E8E8 100%)',
        padding: isMobile ? '2rem 0' : '4rem 0',
        borderBottom: '1px solid #F4E8E8'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: isMobile ? '0 1rem' : '0 1rem' 
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: isMobile ? '1.5rem' : '3rem',
            textAlign: 'center'
          }}>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} style={{
                  position: 'relative'
                }}>
                  <div style={{
                    width: isMobile ? '60px' : '80px',
                    height: isMobile ? '60px' : '80px',
                    borderRadius: '50%',
                    backgroundColor: '#C41E3A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem auto',
                    boxShadow: '0 8px 25px rgba(196, 30, 58, 0.1)'
                  }}>
                    <IconComponent size={isMobile ? 24 : 32} style={{ color: '#FFFEF7' }} />
                  </div>
                  <h3 style={{
                    fontSize: isMobile ? '1.75rem' : '2.5rem',
                    fontWeight: '800',
                     color: '#E53935',
                    margin: '0 0 0.5rem 0'
                  }}>
                    {stat.number}
                  </h3>
                  <p style={{
                    fontSize: isMobile ? '0.9rem' : '1.1rem',
                    color: '#5C5C5C',
                    margin: 0,
                    fontWeight: '500'
                  }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ 
        padding: isMobile ? '1.5rem 0' : '2rem 0', 
        backgroundColor: '#FFFEF7' 
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: isMobile ? '0 1rem' : '0 1rem' 
        }}>
          {/* <div style={{
            display: 'flex',
            gap: isMobile ? '0.5rem' : '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            overflowX: isMobile ? 'auto' : 'visible',
            paddingBottom: isMobile ? '0.5rem' : '0',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': {
              display: 'none'
            }
          }}> */}
          <div
  className="no-scrollbar"
  style={{
    display: 'flex',
    gap: isMobile ? '0.5rem' : '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    overflowX: isMobile ? 'auto' : 'visible',
    paddingBottom: isMobile ? '0.5rem' : '0',
  }}
>
  {/* content here */}


            {categories.map((category) => {
              const IconComponent = category.icon;
              const isActive = activeTab === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  style={{
                    padding: isMobile ? '0.5rem 1rem' : '0.75rem 1.5rem',
                    backgroundColor: isActive ? '#C41E3A' : 'transparent',
                    color: isActive ? '#FFFEF7' : '#2C2C2C',
                    border: '2px solid #C41E3A',
                    borderRadius: '50px',
                    fontSize: isMobile ? '0.85rem' : '0.95rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    whiteSpace: 'nowrap',
                    flexShrink: 0
                  }}
                >
                  <IconComponent size={isMobile ? 16 : 18} />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <main style={{ 
        padding: isMobile ? '2rem 0' : '4rem 0',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{ 
          padding: isMobile ? '0 1rem' : '0 1rem',
          marginBottom: isMobile ? '2rem' : '4rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(420px, 1fr))',
            gap: isMobile ? '1.5rem' : '2.5rem',
          }}>
            {filteredProjects.map((project) => {
              const IconComponent = project.icon;
              const isHovered = hoveredProject === project.id && !isMobile;
              
              return (
                <div
                  key={project.id}
                  onMouseEnter={() => !isMobile && setHoveredProject(project.id)}
                  onMouseLeave={() => !isMobile && setHoveredProject(null)}
                  style={{
                    background: '#FFFEF7',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: isHovered 
                      ? '0 20px 40px rgba(196, 30, 58, 0.25)' 
                      : '0 8px 25px rgba(196, 30, 58, 0.15)',
                    border: '1px solid #F4E8E8',
                    transition: 'all 0.4s ease',
                    transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                >
                  {/* Project Image */}
                  <div style={{
                    position: 'relative',
                    height: isMobile ? '180px' : '200px',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease',
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, rgba(196, 30, 58, 0.${isHovered ? '4' : '2'}) 0%, rgba(139, 21, 56, 0.${isHovered ? '6' : '3'}) 100%)`,
                      transition: 'all 0.4s ease'
                    }}></div>
                    
                    {/* Category Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      backgroundColor: '#FFFEF7',
                      color: '#C41E3A',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      textTransform: 'capitalize'
                    }}>
                      {project.category}
                    </div>

                    {/* Status Badge */}
                    <div style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1rem',
                      backgroundColor: '#C41E3A',
                      color: '#FFFEF7',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#FFFEF7'
                      }}></div>
                      {project.status}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div style={{ 
                    padding: isMobile ? '1.5rem' : '2rem' 
                  }}>
                    {/* Project Header */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: isMobile ? '0.75rem' : '1rem',
                      marginBottom: isMobile ? '1rem' : '1.5rem'
                    }}>
                      <div style={{
                        width: isMobile ? '50px' : '60px',
                        height: isMobile ? '50px' : '60px',
                        backgroundColor: isHovered ? '#C41E3A' : '#F4E8E8',
                        borderRadius: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease'
                      }}>
                        <IconComponent 
                          size={isMobile ? 24 : 28} 
                          style={{ 
                            color: isHovered ? '#FFFEF7' : '#C41E3A',
                            transition: 'color 0.3s ease'
                          }} 
                        />
                      </div>
                      <div>
                        <h3 style={{
                          fontSize: isMobile ? '1.2rem' : '1.4rem',
                          fontWeight: '700',
                          color: '#2C2C2C',
                          margin: '0 0 0.25rem 0'
                        }}>
                          {project.title}
                        </h3>
                        <p style={{
                          fontSize: isMobile ? '0.8rem' : '0.9rem',
                          color: '#C41E3A',
                          margin: 0,
                          fontWeight: '600',
                          fontStyle: 'italic'
                        }}>
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Project Description */}
                    <p style={{
                      color: '#2C2C2C',
                      lineHeight: '1.6',
                      fontSize: isMobile ? '0.9rem' : '0.95rem',
                      marginBottom: isMobile ? '1rem' : '1.5rem'
                    }}>
                      {project.description}
                    </p>

                    {/* Project Impact */}
                    <div style={{
                      backgroundColor: '#F4E8E8',
                      padding: isMobile ? '0.75rem' : '1rem',
                      borderRadius: '12px',
                      marginBottom: isMobile ? '1rem' : '1.5rem'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.5rem'
                      }}>
                        <Award size={isMobile ? 14 : 16} style={{ color: '#C41E3A' }} />
                        <span style={{
                          fontSize: isMobile ? '0.8rem' : '0.85rem',
                          fontWeight: '600',
                          color: '#C41E3A'
                        }}>
                          Key Impact
                        </span>
                      </div>
                      <p style={{
                        fontSize: isMobile ? '0.85rem' : '0.9rem',
                        color: '#2C2C2C',
                        margin: 0,
                        fontWeight: '500'
                      }}>
                        {project.impact}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div style={{
                      display: 'flex',
                      gap: isMobile ? '0.5rem' : '0.75rem'
                    }}>
                      <button style={{
                        flex: 1,
                        padding: isMobile ? '0.75rem 1rem' : '0.875rem 1.5rem',
                        backgroundColor: isHovered ? '#8B1538' : '#C41E3A',
                        color: '#FFFEF7',
                        border: 'none',
                        borderRadius: '12px',
                        fontSize: isMobile ? '0.85rem' : '0.9rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                      }}>
                        <Heart size={isMobile ? 14 : 16} />
                        Join Seva
                      </button>
                      
                      <button style={{
                        padding: isMobile ? '0.75rem' : '0.875rem',
                        backgroundColor: 'transparent',
                        color: '#C41E3A',
                        border: '2px solid #C41E3A',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}>
                        <ArrowRight size={isMobile ? 14 : 16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action Section */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(196, 30, 58, 0.7) 0%, rgba(139, 21, 56, 1) 100%)',
            borderRadius: '20px',
            padding: isMobile ? '2rem 1rem' : '3rem 2rem',
            textAlign: 'center',
            color: '#FFFEF7',
            marginTop: isMobile ? '2rem' : '3rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: isMobile ? '0.5rem' : '1rem',
              marginBottom: isMobile ? '1rem' : '1.5rem',
              flexWrap: 'wrap'
            }}>
              <Heart size={isMobile ? 24 : 32} style={{ color: '#FFFEF7' }} />
              <h2 style={{
                fontSize: isMobile ? '1.5rem' : '2rem',
                fontWeight: '700',
                margin: 0
              }}>
                Begin Your Sacred Service
              </h2>
              <Heart size={isMobile ? 24 : 32} style={{ color: '#FFFEF7' }} />
            </div>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.125rem',
              lineHeight: '1.6',
              marginBottom: isMobile ? '1.5rem' : '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem auto',
              opacity: 0.95,
              padding: isMobile ? '0 0.5rem' : '0'
            }}>
              Every act of seva transforms not just the world, but the one who serves. 
              Choose your path of service and become part of something greater than yourself.
            </p>
            <div style={{
              display: 'flex',
              gap: isMobile ? '0.75rem' : '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link to='/volunteers'>
               <button style={{
                padding: isMobile ? '0.875rem 1.25rem' : '1rem 2rem',
                backgroundColor: '#FFFEF7',
                color: '#C41E3A',
                border: 'none',
                borderRadius: '12px',
                fontSize: isMobile ? '0.9rem' : '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Users size={isMobile ? 18 : 20} />
                Volunteer Now
              </button>
              </Link>
             <Link to='/donate'>
               <button style={{
                padding: isMobile ? '0.875rem 1.25rem' : '1rem 2rem',
                backgroundColor: 'transparent',
                color: '#FFFEF7',
                border: '2px solid #FFFEF7',
                borderRadius: '12px',
                fontSize: isMobile ? '0.9rem' : '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Heart size={isMobile ? 18 : 20} />
                Make a Donation
              </button>
             </Link>
            
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SevaProjectsPage;