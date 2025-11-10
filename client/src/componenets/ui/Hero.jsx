
// import React, { useState, useEffect } from 'react';
// import { ArrowRight, Heart, Sunrise, ChevronLeft, ChevronRight } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const HeroWithCarousel = () => {
//   // Temple and spiritual images for carousel
//   const carouselImages = [
//     {
//       url: '/public/istockphoto-508628776-612x612.webp',
//       title: 'Ancient Temple Architecture',
//       description: 'Sacred spaces that inspire devotion and inner peace'
//     },
//     {
//       url: '/public/photo-1687966248642-ee5b41a8c967.avif',
//       title: 'Meditation & Mindfulness',
//       description: 'Journey inward through ancient practices'
//     },
//     {
//       url: '/public/istockphoto-494659822-612x612.jpg',
//       title: 'Divine Architecture',
//       description: 'Masterpieces of spiritual craftsmanship'
//     },
//     {
//       url: '/public/istockphoto-658871288-612x612.jpg',
//       title: 'Sacred Rituals',
//       description: 'Timeless traditions connecting us to the divine'
//     },
//     {
//       url: '/public/istockphoto-1318601691-612x612.jpg',
//       title: 'Mountain Serenity',
//       description: 'Nature as the ultimate temple'
//     },
//     {
//       url: '/public/istockphoto-1767111793-612x612.jpg',
//       title: 'Yoga & Wellness',
//       description: 'Harmonizing body, mind, and spirit'
//     },
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [visibleImages, setVisibleImages] = useState(3);

//   // Responsive visible images
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 768) setVisibleImages(1);
//       else if (window.innerWidth < 1024) setVisibleImages(2);
//       else setVisibleImages(3);
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Auto-advance carousel with proper looping
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => {
//         const maxIndex = carouselImages.length - visibleImages;
//         return prevIndex >= maxIndex ? 0 : prevIndex + 1;
//       });
//     }, 4000); // Slightly faster transition

//     return () => clearInterval(interval);
//   }, [carouselImages.length, visibleImages]);

//   const nextSlide = () => {
//     setCurrentImageIndex((prevIndex) => {
//       const maxIndex = carouselImages.length - visibleImages;
//       return prevIndex >= maxIndex ? 0 : prevIndex + 1;
//     });
//   };

//   const prevSlide = () => {
//     setCurrentImageIndex((prevIndex) => {
//       const maxIndex = carouselImages.length - visibleImages;
//       return prevIndex === 0 ? maxIndex : prevIndex - 1;
//     });
//   };

//   // Calculate total slides for dot indicators
//   const totalSlides = Math.max(1, carouselImages.length - visibleImages );

//   return (
//     <>
    

// <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-5 sm:pt-9 lg:pt-11 pb-12 sm:pb-20">
//   {/* Video Background */}
//   <div className="absolute inset-0">
//     <video
//       autoPlay
//       muted
//       loop
//       playsInline
//       className="w-full h-full object-cover"
//       poster="/WhatsApp Image 2025-07-27 at 14.40.43_2e3b5f4c.jpg" // Fallback image
//     >
//       <source src="/WhatsApp Video 2025-10-20 at 9.29.01 AM.mp4" type="video/mp4" />
//       <source src="/WhatsApp Video 2025-10-20 at 9.29.01 AM.mp4" type="video/mp4" />
//       {/* Fallback image if video doesn't load */}
//       <img
//         src="/WhatsApp Image 2025-07-27 at 14.40.43_2e3b5f4c.jpg"
//         alt="Sacred Temple Background"
//         className="w-full h-full object-cover"
//       />
//     </video>
//     <div
//       className="absolute inset-0"
//       style={{
//         background:
//           'linear-gradient(to right, rgba(253, 248, 248, 0.6) 0%, rgba(244, 232, 232, 0.5) 50%, rgba(253, 248, 248, 0.6) 100%)',
//       }}
//     ></div>
//   </div>

//   <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
    
//     {/* Logo */}
//     <div className="flex justify-center mb-4 sm:mb-6 lg:mb-3 mt-0">
// <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-full overflow-hidden transition-all duration-300 ease-in-out">
//   <img
//     src="/WhatsApp Image 2025-10-23 at 10.04.29 PM.jpeg"
//     alt="Adiyogi Foundation Logo"
//     className="w-full h-full object-cover rounded-full scale-90 hover:scale-95 transition-transform duration-300"
//   />
// </div>
// </div>

//     {/* Heading */}
//     <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg text-[#2C2C2C] mb-3 sm:mb-4">
//       <span className="text-[#C41E3A]">Adiyogi Foundation</span>
//     </h1>

//     {/* Subheading */}
//     <p className="text-lg md:text-xl lg:text-2xl font-semibold tracking-wide text-[#8B1538] drop-shadow-md mb-4 sm:mb-6">
//       Rebuilding Purpose. Restoring Dharma. Reviving the Sacred.
//     </p>

//     {/* Quote */}
//     <div className="px-3 sm:px-4 mb-4 sm:mb-6">
//       <p className="text-lg sm:text-lg md:text-xl lg:text-2xl font-medium text-[#6B4B4B] leading-relaxed">
//         "Rooted in sacred knowledge, guided by selfless service we rise together as a community, restoring dharma with every step."
//       </p>
//       <p className="mt-3 text-sm sm:text-sm lg:text-base italic text-[#C41E3A]">
//         A reflection of clarity, compassion, and collective awakening.
//       </p>
//     </div>

//     {/* Buttons */}
//     <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-6 px-4">
//       <Link to="/volunteers">
//         <button
//           className="w-full sm:w-auto px-7 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-lg sm:text-lg transition-transform duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 transform hover:scale-105"
//           style={{
//             backgroundColor: '#C41E3A',
//             boxShadow: '0 2px 8px rgba(139, 21, 56, 0.25)',
//             color: '#FFFEF7',
//           }}
//         >
//           <span>Begin Your Journey</span>
//           <ArrowRight size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
//         </button>
//       </Link>

//       <Link to="/donate">
//         <button
//           className="w-full sm:w-auto border-2 px-7 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-lg sm:text-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 hover:text-red-600"
//           style={{
//             borderColor: '#C41E3A',
//             color: '#C41E3A',
//             backgroundColor: 'rgba(255, 254, 247, 0.9)',
//           }}
//         >
//           <Heart size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
//           <span>Support Our Mission</span>
//         </button>
//       </Link>
//     </div>
//   </div>
// </section>



//       {/* Image Carousel Section */}



// <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-[#FFFEF7] to-[#FDF8F8] relative overflow-hidden">
      
//   <div className="absolute inset-0 bg-[url('/pattern/om-light.svg')] opacity-5 bg-center bg-no-repeat bg-cover pointer-events-none"></div>

//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch relative z-10">
    
//     {/* Image Section - Now with tighter control */}
//     <motion.div
//       initial={{ opacity: 0, x: -30 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.7 }}
//       className="rounded-lg sm:rounded-xl overflow-hidden shadow-lg order-2 md:order-1 w-full h-[280px] sm:h-[340px] md:h-[420px] lg:h-[480px] flex justify-end"
//     >
//       <img
//         src="/WhatsApp Image 2025-07-26 at 22.16.56_5bdc78ff.jpg"
//         alt="Aditya Parshuram Nikam"
//         className="h-full w-full sm:w-auto object-cover object-right"
//       />
//     </motion.div>

//     {/* Text Content Section */}
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="order-1 md:order-2 py-2 sm:py-4 text-center md:text-left flex flex-col justify-center"
//     >
//       <div className="mx-auto md:mx-0 max-w-md">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-[#2C2C2C]">
//           Our <span className="text-[#C41E3A]">Founder's</span> Journey
//         </h1>

//         <p className="text-sm sm:text-base md:text-lg text-[#8B1538] font-medium mb-3 sm:mb-4">
//           A personal quest turned into a collective purpose from inner seeking to sacred service.
//         </p>
//       </div>

//       <div className="space-y-2 sm:space-y-3 text-[#2C2C2C]/80 text-sm sm:text-base leading-relaxed max-h-[280px] sm:max-h-[320px] overflow-y-auto px-1 sm:px-2 scroll-smooth">
//         <p>
//           Slowly, I began revisiting the ancient insights I'd grown up hearing: <strong>Vastu Shastra</strong>, <strong>Jyotish</strong>, <strong>Indian philosophy</strong>. Not to seek answers, but to reconnect. What began as curiosity, became clarity.
//         </p>
//         <p>
//           The Adiyogi Foundation wasn't born from a plan it emerged from a need. A need to slow down, to reflect, and to share a space where others could do the same.
//         </p>
//         <p>
//           Today, this foundation is not about preaching. It is about remembering. About creating a sacred pause in a chaotic world where you can <strong>realign with your inner direction</strong>.
//         </p>
//         <p>
//           We don't promise shortcuts. But we promise sincerity a community of humans walking their own unique spiritual path with compassion, clarity, and courage.
//         </p>
//         <p>
//           This isn't about me. I'm still learning. And this space it's open for all who wish to walk a little deeper into themselves.
//         </p>
//       </div>
//     </motion.div>
//   </div>

//   {/* Quote Section */}
//   <div className="mt-6 sm:mt-8 md:mt-12 text-center max-w-2xl mx-auto px-4">
//     <p className="text-sm sm:text-base md:text-lg italic text-[#8B1538] mb-1 sm:mb-2">
//       "You don't have to be a saint or a seeker to belong here. Just human."
//     </p>
//     <p className="text-xs sm:text-sm text-[#C41E3A]/70">— Aditya P Nikam</p>
//     <p className="mt-1 sm:mt-2 text-xs italic text-[#2C2C2C]/60">
//       <span className="text-[#C41E3A] font-semibold">ध्यानम् आत्मा । सेवा धर्मः ।</span>  
//       <br />"Meditation is the soul, Seva is our dharma."
//     </p>
//   </div>
// </section>
//     </>
//   );
// };

// export default HeroWithCarousel;
import React, { useState, useEffect } from 'react';
import { ArrowRight, Heart, Sunrise, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroWithCarousel = () => {
  // Temple and spiritual images for carousel
  const carouselImages = [
    {
      url: '/public/istockphoto-508628776-612x612.webp',
      title: 'Ancient Temple Architecture',
      description: 'Sacred spaces that inspire devotion and inner peace'
    },
    {
      url: '/public/photo-1687966248642-ee5b41a8c967.avif',
      title: 'Meditation & Mindfulness',
      description: 'Journey inward through ancient practices'
    },
    {
      url: '/public/istockphoto-494659822-612x612.jpg',
      title: 'Divine Architecture',
      description: 'Masterpieces of spiritual craftsmanship'
    },
    {
      url: '/public/istockphoto-658871288-612x612.jpg',
      title: 'Sacred Rituals',
      description: 'Timeless traditions connecting us to the divine'
    },
    {
      url: '/public/istockphoto-1318601691-612x612.jpg',
      title: 'Mountain Serenity',
      description: 'Nature as the ultimate temple'
    },
    {
      url: '/public/istockphoto-1767111793-612x612.jpg',
      title: 'Yoga & Wellness',
      description: 'Harmonizing body, mind, and spirit'
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(3);

  // Responsive visible images
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleImages(1);
      else if (window.innerWidth < 1024) setVisibleImages(2);
      else setVisibleImages(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-advance carousel with proper looping
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const maxIndex = carouselImages.length - visibleImages;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 4000); // Slightly faster transition

    return () => clearInterval(interval);
  }, [carouselImages.length, visibleImages]);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => {
      const maxIndex = carouselImages.length - visibleImages;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => {
      const maxIndex = carouselImages.length - visibleImages;
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  };

  // Calculate total slides for dot indicators
  const totalSlides = Math.max(1, carouselImages.length - visibleImages );

  return (
    <>
    

<section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-5 sm:pt-9 lg:pt-11 pb-12 sm:pb-20">
  {/* Video Background */}
  <div className="absolute inset-0">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
      poster="/WhatsApp Image 2025-07-27 at 14.40.43_2e3b5f4c.jpg" // Fallback image
    >
      <source src="/WhatsApp Video 2025-10-20 at 9.29.01 AM.mp4" type="video/mp4" />
      <source src="/WhatsApp Video 2025-10-20 at 9.29.01 AM.mp4" type="video/mp4" />
      {/* Fallback image if video doesn't load */}
      {/* <img
        src="/WhatsApp Image 2025-07-27 at 14.40.43_2e3b5f4c.jpg"
        alt="Sacred Temple Background"
        className="w-full h-full object-cover"
      /> */}
    </video>
    <div
      className="absolute inset-0"
      style={{
        background:
          'linear-gradient(to right, rgba(255, 255, 255, 0.2) 0%, rgba(248, 240, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 100%)',
      }}
    ></div>
  </div>

  <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
    
    {/* Logo */}
    <div className="flex justify-center mb-4 sm:mb-6 lg:mb-3 mt-0">
<div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-full overflow-hidden transition-all duration-300 ease-in-out">
  <img
    src="/INSTA.jpg"
    alt="Adiyogi Foundation Logo"
    className="w-full h-full object-cover rounded-full scale-90 hover:scale-95 transition-transform duration-300"
  />
</div>
</div>

    {/* Heading */}
    <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg text-[#2C2C2C] mb-3 sm:mb-4">
      <span className="text-[#6a0dad]">Adiyogi Foundation</span>
    </h1>

    {/* Subheading */}
    {/* <p className="text-lg md:text-xl lg:text-2xl font-semibold tracking-wide text-[#5a0ba5] drop-shadow-md mb-4 sm:mb-6">
      Rebuilding Purpose. Restoring Dharma. Reviving the Sacred.
    </p> */}

    {/* Quote */}
    <div className="px-3 sm:px-4 mb-4 sm:mb-6">
      <p className="text-lg sm:text-lg md:text-xl lg:text-2xl font-medium text-[#6B4B4B] leading-relaxed">
        "Rooted in sacred knowledge, guided by selfless service we rise together as a community, restoring dharma with every step."
      </p>
      <p className="mt-3 text-sm sm:text-sm lg:text-base italic text-[#6a0dad]">
        A reflection of clarity, compassion, and collective awakening.
      </p>
    </div>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-10  px-4">
      <Link to="/volunteers">
        <button
          className="w-full sm:w-auto px-7 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-lg sm:text-lg transition-transform duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 transform hover:scale-105"
          style={{
            backgroundColor: '#6a0dad',
            boxShadow: '0 2px 8px rgba(106, 13, 173, 0.25)',
            color: '#FFFEF7',
          }}
        >
          <span>Begin Your Journey</span>
          <ArrowRight size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </Link>

      <Link to="/donate">
        <button
          className="w-full sm:w-auto border-2 px-7 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-lg sm:text-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 hover:text-[#6a0dad]"
          style={{
            borderColor: '#6a0dad',
            color: '#6a0dad',
            backgroundColor: 'rgba(255, 254, 247, 0.9)',
          }}
        >
          <Heart size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Support Our Mission</span>
        </button>
      </Link>
    </div>
  </div>
</section>



      {/* Image Carousel Section */}



<section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-[#FFFEF7] to-[#FFFFFF] relative overflow-hidden">
      
  <div className="absolute inset-0 bg-[url('/pattern/om-light.svg')] opacity-5 bg-center bg-no-repeat bg-cover pointer-events-none"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch relative z-10">
    
    {/* Image Section - Now with tighter control */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="rounded-lg sm:rounded-xl overflow-hidden shadow-lg order-2 md:order-1 w-full h-[280px] sm:h-[340px] md:h-[420px] lg:h-[480px] flex justify-end"
    >
      <img
        src="/WhatsApp Image 2025-07-26 at 22.16.56_5bdc78ff.jpg"
        alt="Aditya Parshuram Nikam"
        className="h-full w-full sm:w-auto object-cover object-right"
      />
    </motion.div>

    {/* Text Content Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="order-1 md:order-2 py-2 sm:py-4 text-center md:text-left flex flex-col justify-center"
    >
      <div className="mx-auto md:mx-0 max-w-md">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-[#2C2C2C]">
          Our <span className="text-[#6a0dad]">Founder's</span> Journey
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-[#5a0ba5] font-medium mb-3 sm:mb-4">
          A personal quest turned into a collective purpose from inner seeking to sacred service.
        </p>
      </div>

      <div className="space-y-2 sm:space-y-3 text-[#2C2C2C]/80 text-sm sm:text-base leading-relaxed max-h-[280px] sm:max-h-[320px] overflow-y-auto px-1 sm:px-2 scroll-smooth">
        <p>
          Slowly, I began revisiting the ancient insights I'd grown up hearing: <strong>Vastu Shastra</strong>, <strong>Jyotish</strong>, <strong>Indian philosophy</strong>. Not to seek answers, but to reconnect. What began as curiosity, became clarity.
        </p>
        <p>
          The Adiyogi Foundation wasn't born from a plan it emerged from a need. A need to slow down, to reflect, and to share a space where others could do the same.
        </p>
        <p>
          Today, this foundation is not about preaching. It is about remembering. About creating a sacred pause in a chaotic world where you can <strong>realign with your inner direction</strong>.
        </p>
        <p>
          We don't promise shortcuts. But we promise sincerity a community of humans walking their own unique spiritual path with compassion, clarity, and courage.
        </p>
        <p>
          This isn't about me. I'm still learning. And this space it's open for all who wish to walk a little deeper into themselves.
        </p>
      </div>
    </motion.div>
  </div>

  {/* Quote Section */}
  <div className="mt-6 sm:mt-8 md:mt-12 text-center max-w-2xl mx-auto px-4">
    <p className="text-sm sm:text-base md:text-lg italic text-[#5a0ba5] mb-1 sm:mb-2">
      "You don't have to be a saint or a seeker to belong here. Just human."
    </p>
    <p className="text-xs sm:text-sm text-[#6a0dad]/70">— Aditya P Nikam</p>
    <p className="mt-1 sm:mt-2 text-xs italic text-[#2C2C2C]/60">
      <span className="text-[#6a0dad] font-semibold">ध्यानम् आत्मा । सेवा धर्मः ।</span>  
      <br />"Meditation is the soul, Seva is our dharma."
    </p>
  </div>
</section>
    </>
  );
};

export default HeroWithCarousel;