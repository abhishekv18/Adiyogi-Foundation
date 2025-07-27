// import React from 'react';
// import { Heart, Users, Eye, Target, Flower, Mountain, Sun, Globe, BookOpen, HandHeart, Star, Compass } from 'lucide-react';

// const AboutUs = () => {
//   const journeySteps = [
//     { from: "Confusion", to: "Stillness", icon: <Mountain className="w-5 h-5" /> },
//     { from: "Stillness", to: "Clarity", icon: <Sun className="w-5 h-5" /> },
//     { from: "Clarity", to: "Purpose", icon: <Target className="w-5 h-5" /> },
//     { from: "Purpose", to: "Dharma", icon: <Flower className="w-5 h-5" /> },
//     { from: "Burnout", to: "Silence", icon: <Mountain className="w-5 h-5" /> },
//     { from: "Silence", to: "Reflection", icon: <Eye className="w-5 h-5" /> },
//     { from: "Reflection", to: "Redirection", icon: <Compass className="w-5 h-5" /> },
//     { from: "Redirection", to: "Service", icon: <HandHeart className="w-5 h-5" /> },
//     { from: "Disconnection", to: "Inquiry", icon: <BookOpen className="w-5 h-5" /> },
//     { from: "Inquiry", to: "Wisdom", icon: <Sun className="w-5 h-5" /> },
//     { from: "Wisdom", to: "Belonging", icon: <Users className="w-5 h-5" /> },
//     { from: "Belonging", to: "Impact", icon: <Globe className="w-5 h-5" /> }
//   ];

//   const beliefs = [
//     {
//       title: "Spirituality as Anchor",
//       description: "We believe spirituality is not an escape, but an anchor that grounds us in truth and purpose.",
//       icon: <Mountain className="w-8 h-8" />
//     },
//     {
//       title: "Ancient Wisdom, Modern Application", 
//       description: "Ancient truths are not outdated they are underapplied. We bridge timeless wisdom with contemporary needs.",
//       icon: <BookOpen className="w-8 h-8" />
//     },
//     {
//       title: "Universal Spirituality",
//       description: "Everyone, believer or skeptic, can benefit from deeper self-awareness, community care, and conscious living.",
//       icon: <Users className="w-8 h-8" />
//     },
//     {
//       title: "Transformation is Possible",
//       description: "We hold the unwavering belief that transformation is possible in people, places, and entire communities.",
//       icon: <Star className="w-8 h-8" />
//     }
//   ];

//   const workAreas = [
//     {
//       title: "Spiritual Well-being",
//       description: "Nurturing inner peace and spiritual growth through ancient practices and modern understanding.",
//       image: "/public/istockphoto-1494999342-612x612.jpg"
//     },
//     {
//       title: "Environmental Stewardship", 
//       description: "Caring for our sacred Earth through conscious action and sustainable practices.",
//       image: "/public/istockphoto-1496447289-612x612.jpg"
//     },
//     {
//       title: "Educational Equity",
//       description: "Ensuring access to transformative education that honors both knowledge and wisdom.",
//       image: "/public/istockphoto-1392742688-612x612.jpg"
//     },
//     {
//       title: "Humanitarian Service",
//       description: "Serving humanity with compassion, dignity, and unwavering commitment to justice.",
//       image: "/public/about us/istockphoto-537311780-612x612 (1).webp"
//     }
//   ];

//   return (
//     <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #FDF8F8 0%, #F4E8E8 100%)'}}>
      
//       {/* Hero Section with Vision */}
//       <section className="py-20 px-4 relative overflow-hidden">
//          <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-red-800/20"></div>
//         <div
//   className="absolute inset-0 bg-center bg-cover bg-fixed opacity-25"
//   style={{
//     backgroundImage: `url('/public/istockphoto-178757243-612x612.jpg')`,
    
//      backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundAttachment:"fixed"
//   }}
// ></div>

        
//         <div className="max-w-6xl mx-auto text-center relative z-10">
//   <div className="mb-8">
  
//      <h1 className="text-6xl font-bold mb-6" style={{ color: '#2C2C2C' }}>
//       About Adiyogi Foundation
//     </h1> 
     
//     <div
//       className="w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center shadow-lg"
//       style={{ backgroundColor: '#C41E3A' }}
//     >
//       <Flower className="w-10 h-10 text-white" />
//     </div>
//   </div>

//   <div
//     className="bg-white rounded-3xl p-16 shadow-2xl mb-16 backdrop-blur-sm"
//     style={{
//       backgroundColor: 'rgba(255, 254, 247, 0.95)',
//       boxShadow: '0 8px 32px rgba(196, 30, 58, 0.2)',
//     }}
//   >
//     <h2 className="text-4xl font-bold mb-10" style={{ color: '#C41E3A' }}>
//       Our Sacred Vision
//     </h2>
//     <p
//       className="text-2xl leading-relaxed max-w-5xl mx-auto font-light"
//       style={{ color: '#2C2C2C' }}
//     >
//       Adiyogi Foundation is rooted in the timeless wisdom of Bharat, striving to awaken the sacred in
//       every heart and space. Through the restoration of temples, spiritual education, and acts of
//       service, we envision a world where <span style={{ color: '#C41E3A', fontWeight: 'bold' }}>
//       dharma, dignity, and inner clarity</span> are not just ideals but lived experiences.
//     </p>


//   </div>
// </div>

//       </section>

//       {/* About Us with Founder Section */}
//       <section className="py-16 px-5">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
//             <div className="order-2 lg:order-1">
//               <h2 className="text-5xl font-bold mb-10" style={{color: '#2C2C2C'}}>About Us</h2>
//               <div className="space-y-8">
//                 <p className="text-xl leading-relaxed">
//                   Born from a blend of <span style={{color: '#C41E3A', fontWeight: 'bold'}}>contemplation and commitment</span>, Adiyogi Foundation brings together seekers, 
//                   volunteers, educators, and visionaries. We operate at the intersection of spirituality and social reform 
//                   where rebuilding temples also means rebuilding lives.
//                 </p>
//                 <p className="text-xl leading-relaxed">
//                   Our work spans across spiritual well-being, environmental stewardship, educational equity, and 
//                   humanitarian service each rooted in the <span style={{color: '#C41E3A', fontWeight: 'bold'}}>yogic principle of inner clarity</span> as the first act of service.
//                 </p>
//                 <div className="flex items-center space-x-6 pt-6">
//                   <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{backgroundColor: '#C41E3A'}}>
//                     <Heart className="w-8 h-8 text-white" />
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-bold" style={{color: '#2C2C2C'}}>Compassionate Action</h4>
//                     <p className="text-gray-600">Every initiative rooted in love and service</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="order-1 lg:order-2 relative">
//               <div className="relative">
//                 <img 
//                   src="/public/WhatsApp Image 2025-06-26 at 11.46.34 AM.jpeg" 
//                   alt="Founder portrait" 
//                   className="w-full rounded-3xl shadow-2xl"
//                   style={{boxShadow: '0 8px 32px rgba(196, 30, 58, 0.3)'}}
//                 />
//                 <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-8 shadow-xl max-w-sm" style={{backgroundColor: '#FFFEF7'}}>
//                   <h4 className="text-xl font-bold mb-3" style={{color: '#2C2C2C'}}>Founder's Vision</h4>
//                   <p className="text-gray-600 italic">
//                     "Through ancient insights and modern tools, we empower clarity that lasts."
//                   </p>
//                   <div className="w-12 h-1 mt-4" style={{backgroundColor: '#C41E3A'}}></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Work Areas Grid */}
//       <section className="py-20 px-4 bg-white" style={{backgroundColor: '#FFFEF7'}}>
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold mb-6" style={{color: '#2C2C2C'}}>Our Work Spans Four Pillars</h2>
            
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-12">
//             {workAreas.map((area, index) => (
//               <div key={index} className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500" style={{boxShadow: '0 8px 32px rgba(196, 30, 58, 0.15)'}}>
//                 <div className="aspect-w-16 aspect-h-12 relative">
//                   <img 
//                     src={area.image} 
//                     alt={area.title}
//                     className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
//                 </div>
//                 <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
//                   <h3 className="text-2xl font-bold mb-3">{area.title}</h3>
//                   <p className="text-gray-200 leading-relaxed">{area.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Purpose Section with Quote */}
//       <section className="py-20 px-4 relative">
//         <div className="absolute inset-0 opacity-10">
//           <img 
//             src="/public/about us/istockphoto-503981202-612x612.webp" 
//             alt="Temple background" 
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="max-w-6xl mx-auto relative z-10">
//           <div className="text-center mb-20">
//             <h2 className="text-5xl font-bold mb-8" style={{color: '#2C2C2C'}}>Our Purpose</h2>
//             <div className="bg-white rounded-3xl p-16 shadow-2xl" style={{backgroundColor: 'rgba(255, 254, 247, 0.95)', boxShadow: '0 8px 32px rgba(196, 30, 58, 0.2)'}}>
//               <div className="w-16 h-16 mx-auto mb-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#C41E3A'}}>
//                 <Target className="w-8 h-8 text-white" />
//               </div>
//               <blockquote className="text-3xl font-medium italic mb-8 text-center" style={{color: '#C41E3A'}}>
//                 "We do not build temples; we rebuild purpose and restore lives."
//               </blockquote>
//               <p className="text-xl text-center max-w-4xl mx-auto" style={{color: '#2C2C2C'}}>
//                 Our projects are designed as pathways from confusion to clarity, from crisis to dharma. 
//                 Every offering is a response to a deep modern need.
//               </p>
//             </div>
//           </div>

//           {/* Transformation Journey */}
//           <div className="mb-20">
//             <h3 className="text-4xl font-bold text-center mb-16" style={{color: '#2C2C2C'}}>Transformation Journey</h3>
//             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
//               {journeySteps.map((step, index) => (
//                 <div key={index} className="text-center group">
//                   <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105" style={{boxShadow: '0 4px 20px rgba(139, 21, 56, 0.15)'}}>
//                     <div className="flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{color: '#C41E3A'}}>
//                       {step.icon}
//                     </div>
//                     <div className="text-sm font-medium mb-3" style={{color: '#2C2C2C'}}>{step.from}</div>
//                     <div className="w-8 h-0.5 mx-auto mb-3 group-hover:w-12 transition-all duration-300" style={{backgroundColor: '#C41E3A'}}></div>
//                     <div className="text-sm font-bold" style={{color: '#C41E3A'}}>{step.to}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Beliefs Section */}
//       <section className="py-20 px-4 bg-white" style={{backgroundColor: '#FFFEF7'}}>
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <h2 className="text-5xl font-bold mb-6" style={{color: '#2C2C2C'}}>What We Believe</h2>
//             {/* <div className="w-20 h-1 mx-auto mb-8" style={{backgroundColor: '#C41E3A'}}></div> */}
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Our foundation is built on timeless principles that guide every action and decision we make.
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-10">
//             {beliefs.map((belief, index) => (
//               <div key={index} className="group">
//                 <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105 h-full" style={{backgroundColor: '#FFFEF7', boxShadow: '0 8px 32px rgba(196, 30, 58, 0.15)'}}>
//                   <div className="flex items-center mb-6">
//                     <div className="w-16 h-16 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#F4E8E8', color: '#C41E3A'}}>
//                       {belief.icon}
//                     </div>
//                     <h3 className="text-2xl font-bold" style={{color: '#C41E3A'}}>{belief.title}</h3>
//                   </div>
//                   <p className="text-lg text-gray-700 leading-relaxed">{belief.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Spirituality for All Section */}
//       <section className="py-20 px-4 relative overflow-hidden">
//         <div className="absolute inset-0">
//           <img 
//             src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
//             alt="Meditation background" 
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-red-800/80"></div>
//         </div>
        
//         <div className="max-w-6xl mx-auto text-center relative z-10">
//           <div className="text-white">
//             <div className="w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm">
//               <Users className="w-10 h-10 text-white" />
//             </div>
//             <h2 className="text-5xl font-bold mb-8">Spirituality for All</h2>
//             <p className="text-2xl mb-8 max-w-5xl mx-auto font-light leading-relaxed">
//               That ancient knowledge holds keys to modern suffering.<br/>
//               That transformation is possible in people and places.
//             </p>
//             <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 mb-12">
//               <p className="text-xl mb-8 leading-relaxed">
//                 Spirituality is not just for the renunciant; it is a toolkit for the entrepreneur, the student, the homemaker. 
//                 Through ancient insights and modern tools, we empower clarity that lasts.
//               </p>
//               <p className="text-lg italic">
//                 "That everyone believer or skeptic can benefit from deeper self-awareness, community care, and conscious living. 
//                 That spirituality is for all, regardless of belief."
//               </p>
//             </div>
//             <button className="bg-white text-red-600 px-12 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl">
//               Join Our Mission
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Ancient Knowledge Section */}
//       <section className="py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="relative">
//               <img 
//                 src="/public/istockphoto-1221349438-612x612.webp" 
//                 alt="Ancient wisdom" 
//                 className="w-full rounded-3xl shadow-2xl"
//                 style={{boxShadow: '0 8px 32px rgba(196, 30, 58, 0.3)'}}
//               />
//               <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full flex items-center justify-center" style={{backgroundColor: '#C41E3A'}}>
//                 <BookOpen className="w-16 h-16 text-white" />
//               </div>
//             </div>
//             <div>
//               <h2 className="text-4xl font-bold mb-8" style={{color: '#2C2C2C'}}>Ancient Knowledge, Modern Solutions</h2>
//               <div className="space-y-6">
//                 <p className="text-xl leading-relaxed">
//                   We believe that <span style={{color: '#C41E3A', fontWeight: 'bold'}}>ancient knowledge holds keys to modern suffering</span>. 
//                   The wisdom traditions of the world contain profound insights that remain as relevant today as they were millennia ago.
//                 </p>
//                 <p className="text-xl leading-relaxed">
//                   Our approach bridges the gap between timeless spiritual principles and contemporary challenges, 
//                   offering practical solutions rooted in eternal truths.
//                 </p>
//                 <div className="flex items-start space-x-4 pt-6">
//                   <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#F4E8E8'}}>
//                     <Star className="w-6 h-6" style={{color: '#C41E3A'}} />
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-bold mb-2" style={{color: '#2C2C2C'}}>Timeless Wisdom</h4>
//                     <p className="text-gray-600">Applying ancient insights to solve modern challenges with compassion and clarity.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default AboutUs;




import React, { useEffect } from 'react';
import { Heart, Users, Eye, Target, Flower, Mountain, Sun, Globe, BookOpen, HandHeart, Star, Compass, Leaf } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AboutUs = () => {



const navigate=useNavigate();

 const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      navigate('/admin-dashboard');
    }
  }, [user]);




  const journeySteps = [
    { from: "Confusion", to: "Stillness", icon: <Mountain className="w-5 h-5" /> },
    { from: "Stillness", to: "Clarity", icon: <Sun className="w-5 h-5" /> },
    { from: "Clarity", to: "Purpose", icon: <Target className="w-5 h-5" /> },
    { from: "Purpose", to: "Dharma", icon: <Flower className="w-5 h-5" /> },
    { from: "Burnout", to: "Silence", icon: <Mountain className="w-5 h-5" /> },
    { from: "Silence", to: "Reflection", icon: <Eye className="w-5 h-5" /> },
    { from: "Reflection", to: "Redirection", icon: <Compass className="w-5 h-5" /> },
    { from: "Redirection", to: "Service", icon: <HandHeart className="w-5 h-5" /> },
    { from: "Disconnection", to: "Inquiry", icon: <BookOpen className="w-5 h-5" /> },
    { from: "Inquiry", to: "Wisdom", icon: <Sun className="w-5 h-5" /> },
    { from: "Wisdom", to: "Belonging", icon: <Users className="w-5 h-5" /> },
    { from: "Belonging", to: "Impact", icon: <Globe className="w-5 h-5" /> }
  ];

  const beliefs = [
    {
      title: "Spirituality as Anchor",
      description: "We believe spirituality is not an escape, but an anchor that grounds us in truth and purpose.",
      icon: <Mountain className="w-8 h-8" />
    },
    {
      title: "Ancient Wisdom, Modern Application", 
      description: "Ancient truths are not outdated they are underapplied. We bridge timeless wisdom with contemporary needs.",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      title: "Universal Spirituality",
      description: "Everyone, believer or skeptic, can benefit from deeper self-awareness, community care, and conscious living.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Transformation is Possible",
      description: "We hold the unwavering belief that transformation is possible in people, places, and entire communities.",
      icon: <Star className="w-8 h-8" />
    }
  ];

  const workAreas = [
    {
      title: "Spiritual Well-being",
      description: "Nurturing inner peace and spiritual growth through ancient practices and modern understanding.",
      image: "/istockphoto-1494999342-612x612.jpg"
    },
    {
      title: "Environmental Stewardship", 
      description: "Caring for our sacred Earth through conscious action and sustainable practices.",
      image: "/istockphoto-1496447289-612x612.jpg"
    },
    {
      title: "Educational Equity",
      description: "Ensuring access to transformative education that honors both knowledge and wisdom.",
      image: "/istockphoto-1392742688-612x612.jpg"
    },
    {
      title: "Humanitarian Service",
      description: "Serving humanity with compassion, dignity, and unwavering commitment to justice.",
      image: "/about us/istockphoto-537311780-612x612 (1).webp"
    }
  ];

  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #FDF8F8 0%, #F4E8E8 100%)'}}>
      
      {/* Hero Section with Vision */}
     
{/* <section className="py-12 sm:py-16 md:py-20 px-4 relative overflow-hidden">
  
  <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-red-800/20 z-0"></div>

 
  <div
    className="absolute inset-0 bg-center bg-cover opacity-25 z-0"
    style={{
      backgroundImage: `url('/istockphoto-178757243-612x612.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}
  ></div>

  
  <div className="max-w-6xl mx-auto text-center relative z-10">
    <div className="mb-6 sm:mb-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2 text-rich-charcoal">
        About Adiyogi Foundation
      </h1>

      <div
        className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 rounded-full flex items-center justify-center shadow-lg"
        style={{ backgroundColor: '#C41E3A' }}
      >
        <Flower className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
      </div>
    </div>

    <div
      className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 shadow-2xl mb-12 sm:mb-16 backdrop-blur-sm mx-2 sm:mx-4"
      style={{
        backgroundColor: 'rgba(255, 254, 247, 0.95)',
        boxShadow: '0 8px 32px rgba(196, 30, 58, 0.2)',
      }}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-10 text-sacred-crimson">
        Our Sacred Vision
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl leading-relaxed max-w-5xl mx-auto font-light px-2 text-rich-charcoal">
        Adiyogi Foundation is rooted in the timeless wisdom of Bharat, striving to awaken the sacred in
        every heart and space. Through the restoration of temples, spiritual education, and acts of
        service, we envision a world where <span className="text-sacred-crimson font-bold">
        dharma, dignity, and inner clarity</span> are not just ideals but lived experiences.
      </p>
    </div>
  </div>
</section> */}
<section className="py-10 sm:py-14 md:py-20 px-4 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-red-800/20 z-0"></div>

  <div
    className="absolute inset-0 bg-center bg-cover opacity-15 z-0"
    style={{
      backgroundImage: `url('/istockphoto-178757243-612x612.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}
  ></div>

  <div className="max-w-6xl mx-auto text-center relative z-10">
    {/* Heading & Icon */}
    <div className="mb-6 sm:mb-10">
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2 ">
       <span className='text-[#8C6C6C]'>Adiyogi</span>  <span className="text-[#C41E3A]">Foundation</span>
      </h1>

      <div
        className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 mx-auto mb-6 sm:mb-8 rounded-full flex items-center justify-center shadow-lg"
        style={{ backgroundColor: '#C41E3A' }}
      >
        <Flower className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
      </div>
    </div>

    {/* Content Card */}
    <div
      className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 lg:p-16 shadow-2xl mb-10 sm:mb-14 backdrop-blur-sm mx-2 sm:mx-4"
      style={{
        backgroundColor: 'rgba(255, 254, 247, 0.95)',
        boxShadow: '0 8px 32px rgba(196, 30, 58, 0.2)',
      }}
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-8 text-sacred-crimson">
        Our Sacred Vision
      </h2>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-5xl mx-auto font-light px-2 text-rich-charcoal">
        Adiyogi Foundation is rooted in the timeless wisdom of Bharat, striving to awaken the sacred in
        every heart and space. Through the restoration of temples, spiritual education, and acts of
        service, we envision a world where <span className="text-sacred-crimson font-bold">
        dharma, dignity, and inner clarity
        </span> are not just ideals but lived experiences.
      </p>
    </div>
  </div>
</section>

      {/* About Us with Founder Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center mb-16 sm:mb-24">
            {/* <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-10" style={{color: '#2C2C2C'}}>About Us</h2>
              <div className="space-y-6 sm:space-y-8">
                <p className="text-lg sm:text-xl leading-relaxed">
                  Born from a blend of <span style={{color: '#C41E3A', fontWeight: 'bold'}}>contemplation and commitment</span>, Adiyogi Foundation brings together seekers, 
                  volunteers, educators, and visionaries. We operate at the intersection of spirituality and social reform 
                  where rebuilding temples also means rebuilding lives.
                </p>
                <p className="text-lg sm:text-xl leading-relaxed">
                  Our work spans across spiritual well-being, environmental stewardship, educational equity, and 
                  humanitarian service each rooted in the <span style={{color: '#C41E3A', fontWeight: 'bold'}}>yogic principle of inner clarity</span> as the first act of service.
                </p>
                <div className="flex items-center space-x-4 sm:space-x-6 pt-4 sm:pt-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#C41E3A'}}>
                    <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold" style={{color: '#2C2C2C'}}>Compassionate Action</h4>
                    <p className="text-sm sm:text-base text-gray-600">Every initiative rooted in love and service</p>
                  </div>

                </div>
              </div>
            </div> */}
  <div className="order-2 lg:order-1">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-10" style={{color: '#2C2C2C'}}>About Us</h2>
      <div className="space-y-6 sm:space-y-8">
        <p className="text-lg sm:text-xl leading-relaxed">
          Born from a blend of <span style={{color: '#C41E3A', fontWeight: 'bold'}}>contemplation and commitment</span>, Adiyogi Foundation brings together seekers, 
          volunteers, educators, and visionaries. We operate at the intersection of spirituality and social reform 
          where rebuilding temples also means rebuilding lives.
        </p>
        <p className="text-lg sm:text-xl leading-relaxed">
          Our work spans across spiritual well-being, environmental stewardship, educational equity, and 
          humanitarian service each rooted in the <span style={{color: '#C41E3A', fontWeight: 'bold'}}>yogic principle of inner clarity</span> as the first act of service.
        </p>
        
        <div className="flex items-center space-x-4 sm:space-x-6 pt-4 sm:pt-6">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#C41E3A'}}>
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold" style={{color: '#2C2C2C'}}>Compassionate Action</h4>
            <p className="text-sm sm:text-base text-gray-600">Every initiative rooted in love and service</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 sm:space-x-6 pt-4 sm:pt-6">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#C41E3A'}}>
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold" style={{color: '#2C2C2C'}}>Unity in Diversity</h4>
            <p className="text-sm sm:text-base text-gray-600">Bringing together seekers from all walks of life</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 sm:space-x-6 pt-4 sm:pt-6">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#C41E3A'}}>
            <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold" style={{color: '#2C2C2C'}}>Sacred Ecology</h4>
            <p className="text-sm sm:text-base text-gray-600">Honoring the earth as our temple</p>
          </div>
        </div>
      </div>
    </div>
              <div className="order-1 lg:order-2 relative">
        <div className="relative">
          <img 
            src="/WhatsApp Image 2025-06-26 at 11.46.34 AM.jpeg" 
            alt="Founder portrait" 
            className="w-full rounded-2xl sm:rounded-3xl shadow-2xl"
            style={{boxShadow: '0 8px 32px rgba(196, 30, 58, 0.3)'}}
          />
          {/* Modified vision card with responsive positioning */}
          <div className="absolute hidden md:block right-4 sm:-bottom-8 sm:-right-8 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-xl max-w-xs sm:max-w-sm" 
               style={{
                 backgroundColor: '#FFFEF7',
                 // On small screens, ensure it doesn't overlap with image bottom
                 bottom: '1rem',
                 right: '1rem',
                 // On larger screens, use the original positioning
                 '@media (min-width: 640px)': {
                   bottom: '-2rem',
                   right: '-2rem'
                 }
               }}>
            <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{color: '#2C2C2C'}}>Founder's Vision</h4>
            <p className="text-sm sm:text-base text-gray-600 italic">
              "Through ancient insights and modern tools, we empower clarity that lasts."
            </p>
            <div className="w-8 sm:w-12 h-1 mt-3 sm:mt-4" style={{backgroundColor: '#C41E3A'}}></div>
          </div>
        </div>
      </div>
          </div>
        </div>
      </section>

      {/* Work Areas Grid */}
      <section className="py-16 sm:py-20 px-4 bg-white" style={{backgroundColor: '#FFFEF7'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2" style={{color: '#2C2C2C'}}>Our Work Spans Four Pillars</h2>
            
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {workAreas.map((area, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500" style={{boxShadow: '0 8px 32px rgba(196, 30, 58, 0.15)'}}>
                <div className="aspect-w-16 aspect-h-12 relative">
                  <img 
                    src={area.image} 
                    alt={area.title}
                    className="w-full h-64 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{area.title}</h3>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose Section with Quote */}
      <section className="py-16 sm:py-20 px-4 relative">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/about us/istockphoto-503981202-612x612.webp" 
            alt="Temple background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 px-2" style={{color: '#2C2C2C'}}>Our Purpose</h2>
            <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl mx-2 sm:mx-4" style={{backgroundColor: 'rgba(255, 254, 247, 0.95)', boxShadow: '0 8px 32px rgba(196, 30, 58, 0.2)'}}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 sm:mb-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#C41E3A'}}>
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium italic mb-6 sm:mb-8 text-center px-2" style={{color: '#C41E3A'}}>
                "We do not build temples; we rebuild purpose and restore lives."
              </blockquote>
              <p className="text-lg sm:text-xl text-center max-w-4xl mx-auto px-2" style={{color: '#2C2C2C'}}>
                Our projects are designed as pathways from confusion to clarity, from crisis to dharma. 
                Every offering is a response to a deep modern need.
              </p>
            </div>
          </div>

          {/* Transformation Journey */}
          <div className="mb-16 sm:mb-20">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-16 px-2" style={{color: '#2C2C2C'}}>Transformation Journey</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
              {journeySteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105" style={{boxShadow: '0 4px 20px rgba(139, 21, 56, 0.15)'}}>
                    <div className="flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300" style={{color: '#C41E3A'}}>
                      {step.icon}
                    </div>
                    <div className="text-xs sm:text-sm font-medium mb-2 sm:mb-3" style={{color: '#2C2C2C'}}>{step.from}</div>
                    <div className="w-6 sm:w-8 h-0.5 mx-auto mb-2 sm:mb-3 group-hover:w-8 sm:group-hover:w-12 transition-all duration-300" style={{backgroundColor: '#C41E3A'}}></div>
                    <div className="text-xs sm:text-sm font-bold" style={{color: '#C41E3A'}}>{step.to}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs Section */}
      <section className="py-16 sm:py-20 px-4 bg-white" style={{backgroundColor: '#FFFEF7'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2" style={{color: '#2C2C2C'}}>What We Believe</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Our foundation is built on timeless principles that guide every action and decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {beliefs.map((belief, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105 h-full" style={{backgroundColor: '#FFFEF7', boxShadow: '0 8px 32px rgba(196, 30, 58, 0.15)'}}>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" style={{backgroundColor: '#F4E8E8', color: '#C41E3A'}}>
                      {belief.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold" style={{color: '#C41E3A'}}>{belief.title}</h3>
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{belief.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spirituality for All Section */}
      <section className="py-16 sm:py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Meditation background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-red-800/80"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="text-white px-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">Spirituality for All</h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-5xl mx-auto font-light leading-relaxed">
              That ancient knowledge holds keys to modern suffering.<br className="hidden sm:block"/>
              That transformation is possible in people and places.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12">
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed">
                Spirituality is not just for the renunciant; it is a toolkit for the entrepreneur, the student, the homemaker. 
                Through ancient insights and modern tools, we empower clarity that lasts.
              </p>
              <p className="text-sm sm:text-base md:text-lg italic">
                "That everyone believer or skeptic can benefit from deeper self-awareness, community care, and conscious living. 
                That spirituality is for all, regardless of belief."
              </p>
            </div>
            <Link to='/volunteers'>
             <button className="bg-white text-red-600 px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl">
              Join Our Mission
            </button>
            </Link>
           
          </div>
        </div>
      </section>

      {/* Ancient Knowledge Section */}
      {/* <section className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="/public/istockphoto-490378481-612x612.webp" 
                alt="Ancient wisdom" 
                className="w-full rounded-2xl sm:rounded-3xl shadow-2xl"
                style={{boxShadow: '0 8px 32px rgba(196, 30, 58, 0.3)'}}
              />
              <div className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 w-20 h-20 sm:w-32 sm:h-32 rounded-full flex items-center justify-center" style={{backgroundColor: '#C41E3A'}}>
                <BookOpen className="w-10 h-10 sm:w-16 sm:h-16 text-white" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8" style={{color: '#2C2C2C'}}>Ancient Knowledge, Modern Solutions</h2>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-lg sm:text-xl leading-relaxed">
                  We believe that <span style={{color: '#C41E3A', fontWeight: 'bold'}}>ancient knowledge holds keys to modern suffering</span>. 
                  The wisdom traditions of the world contain profound insights that remain as relevant today as they were millennia ago.
                </p>
                <p className="text-lg sm:text-xl leading-relaxed">
                  Our approach bridges the gap between timeless spiritual principles and contemporary challenges, 
                  offering practical solutions rooted in eternal truths.
                </p>
                <div className="flex items-start space-x-3 sm:space-x-4 pt-4 sm:pt-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#F4E8E8'}}>
                    <Star className="w-5 h-5 sm:w-6 sm:h-6" style={{color: '#C41E3A'}} />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold mb-1 sm:mb-2" style={{color: '#2C2C2C'}}>Timeless Wisdom</h4>
                    <p className="text-sm sm:text-base text-gray-600">Applying ancient insights to solve modern challenges with compassion and clarity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
<section className="py-16 sm:py-20 px-4">
  <div className="max-w-6xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
      <div className="relative order-2 lg:order-1">
        <img 
          src="/istockphoto-490378481-612x612.webp" 
          alt="Ancient wisdom" 
          className="w-full rounded-2xl sm:rounded-3xl shadow-2xl"
          style={{ boxShadow: '0 8px 32px rgba(196, 30, 58, 0.3)' }}
        />
        <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C41E3A' }}>
          <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8" style={{ color: '#2C2C2C' }}>
          Ancient Knowledge, Modern Solutions
        </h2>
        <div className="space-y-4 sm:space-y-6">
          <p className="text-lg sm:text-xl leading-relaxed">
            We believe that <span style={{ color: '#C41E3A', fontWeight: 'bold' }}>ancient knowledge holds keys to modern suffering</span>. 
            The wisdom traditions of the world contain profound insights that remain as relevant today as they were millennia ago.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed">
            Our approach bridges the gap between timeless spiritual principles and contemporary challenges, 
            offering practical solutions rooted in eternal truths.
          </p>
          <div className="flex items-start space-x-3 sm:space-x-4 pt-4 sm:pt-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F4E8E8' }}>
              <Star className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#C41E3A' }} />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-1 sm:mb-2" style={{ color: '#2C2C2C' }}>
                Timeless Wisdom
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                Applying ancient insights to solve modern challenges with compassion and clarity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default AboutUs;