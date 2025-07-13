
// import React, { useState, useEffect } from 'react';
// import { ArrowRight, Heart, Sunrise, ChevronLeft, ChevronRight } from 'lucide-react';
// import { motion } from 'framer-motion';
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
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         {/* Background Image - Professional spiritual/temple image */}
//         <div className="absolute inset-0">
//           <img
//             src="/public/istockphoto-542316008-612x612.jpg"
//             alt="Sacred Temple Background"
//             className="w-full h-full object-cover"
//           />
//           {/* Rose Cream overlay to maintain brand colors */}
//           <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(253, 248, 248, 0.9) 0%, rgba(244, 232, 232, 0.85) 50%, rgba(253, 248, 248, 0.9) 100%)' }}></div>
//         </div>

//         {/* Decorative elements */}
//         <div className="absolute inset-0 opacity-40 bg-repeat" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C41E3A' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        
//         {/* Decorative Sunrise icon */}
//         <div className="absolute top-20 right-20 opacity-20" style={{ color: '#C41E3A' }}>
//           <Sunrise size={120} />
//         </div>

//         {/* Main Content */}
//         <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
//           {/* ॐ Symbol */}
//           <div className="mb-8">
//             <div className="w-28 h-28 mx-auto rounded-full flex items-center justify-center text-6xl font-bold shadow-2xl border-4" style={{ 
//               background: 'linear-gradient(135deg, #C41E3A 0%, #8B1538 100%)',
//               color: '#FFFEF7',
//               borderColor: 'rgba(255, 254, 247, 0.4)'
//             }}>
//               ॐ
//             </div>
//           </div>

//           {/* Main Heading */}
//           <h1 className="text-5xl lg:text-8xl font-bold mb-6 drop-shadow-lg" style={{ color: '#2C2C2C' }}>
//             Adiyogi <span style={{ color: '#C41E3A' }}>Foundation</span>
//           </h1>

//           {/* Tagline Bar */}
        

//           {/* Tagline Text */}
//           <p className="text-xl lg:text-3xl font-semibold mb-8 tracking-wide drop-shadow-md" style={{ color: '#8B1538' }}>
//             Rebuilding Purpose. Restoring Dharma. Reviving the Sacred.
//           </p>

//           {/* Intro Message */}
//          <div className="max-w-4xl mx-auto mb-12 px-4">
//   <p className="text-2xl sm:text-2xl font-semibold text-center leading-relaxed text-[#2C2C2C]">
//     “Rooted in sacred knowledge, guided by selfless service we rise together as a community, restoring dharma with every step.”
//   </p>
//   <p className="mt-4 text-center italic text-[#C41E3A] text-sm sm:text-base">
//      A reflection of clarity, compassion, and collective awakening.
//   </p>
// </div>


//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <button className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 transform hover:scale-105" style={{ 
//               background: 'linear-gradient(135deg, #C41E3A 0%, #8B1538 100%)',
//               color: '#FFFEF7'
//             }}>
//               <span>Begin Your Journey</span>
//               <ArrowRight size={20} />
//             </button>
//             <button className="border-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 hover:text-red-600" style={{ 
//               borderColor: '#C41E3A',
//               color: '#C41E3A',
//               backgroundColor: 'rgba(255, 254, 247, 0.8)'
//             }} onMouseEnter={(e) => {
//              // e.target.style.backgroundColor = '#C41E3A';
//               //e.target.style.color = '#FFFEF7';
//             }} onMouseLeave={(e) => {
//               e.target.style.backgroundColor = 'rgba(255, 254, 247, 0.8)';
//               e.target.style.color = '#C41E3A';
//             }}>
//               <Heart size={20} />
//               <span>Support Our Mission</span>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Image Carousel Section */}


     
//   <section className="py-28 bg-gradient-to-br from-[#FFFEF7] to-[#FDF8F8] relative overflow-hidden">
//   {/* Optional Om watermark */}
//   <div className="absolute inset-0 bg-[url('/pattern/om-light.svg')] opacity-5 bg-center bg-no-repeat bg-cover pointer-events-none"></div>

//   <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
//     {/* Founder Image */}
//     <motion.div
//       initial={{ opacity: 0, x: -50 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8 }}
//       className="rounded-3xl overflow-hidden shadow-2xl"
//     >
//       <img
//         src="/public/WhatsApp Image 2025-06-26 at 1.44.13 PM.jpeg"
//         alt="Aditya Parshuram Nikam"
//         className="w-full h-auto object-cover"
//       />
//     </motion.div>

//     {/* Founder Story */}
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.9 }}
//     >
//       <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#2C2C2C]">
//         Our <span className="text-[#C41E3A]">Founder’s</span> Journey
//       </h1>

//       <p className="text-md text-[#8B1538] font-medium mb-6">
//         A personal quest turned into a collective purpose from inner seeking to sacred service.
//       </p>

//       <div
//         className="space-y-5 text-[#2C2C2C]/80 text-base leading-relaxed max-h-[500px] overflow-y-auto pr-2 scroll-smooth scrollbar-thin scrollbar-thumb-[#C41E3A]/30 scrollbar-track-transparent"
//       >
//         <p>
//           I never imagined I’d be starting something like the Adiyogi Foundation. I spent years pursuing a traditional career real estate, finance, ambition but something always felt... missing.
//         </p>
//         <p>
//           It wasn’t about failure or success. It was about <strong>meaning</strong>. Even in moments of achievement, a quiet voice echoed within
//           <em className="text-[#C41E3A]"> what is all this for?</em>
//         </p>
//         <p>
//           Slowly, I began revisiting the ancient insights I’d grown up hearing: <strong>Vastu Shastra</strong>, <strong>Jyotish</strong>, <strong>Indian philosophy</strong>. Not to seek answers, but to reconnect. What began as curiosity, became clarity.
//         </p>
//         <p>
//           The Adiyogi Foundation wasn’t born from a plan it emerged from a need. A need to slow down, to reflect, and to share a space where others could do the same.
//         </p>
//         <p>
//           Today, this foundation is not about preaching. It is about remembering. About creating a sacred pause in a chaotic world where you can <strong>realign with your inner direction</strong>.
//         </p>
//         <p>
//           We don’t promise shortcuts. But we promise sincerity a community of humans walking their own unique spiritual path with compassion, clarity, and courage.
//         </p>
//         <p>
//           This isn’t about me. I’m still learning. And this space it’s open for all who wish to walk a little deeper into themselves.
//         </p>
//       </div>
//     </motion.div>
//   </div>

//   {/* Quote Banner */}
//   <div className="mt-20 text-center max-w-3xl mx-auto px-4">
//     <p className="text-xl italic text-[#8B1538] mb-2">
//       “You don’t have to be a saint or a seeker to belong here. Just human.”
//     </p>
//     <p className="text-sm text-[#C41E3A]/70">— Aditya Parshuram Nikam</p>
//     <p className="mt-4 text-sm italic text-[#2C2C2C]/60">
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Background Image - Professional spiritual/temple image */}
        <div className="absolute inset-0">
          <img
            src="/istockphoto-542316008-612x612.jpg"
            alt="Sacred Temple Background"
            className="w-full h-full object-cover"
          />
          {/* Rose Cream overlay to maintain brand colors */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(253, 248, 248, 0.9) 0%, rgba(244, 232, 232, 0.85) 50%, rgba(253, 248, 248, 0.9) 100%)' }}></div>
        </div>

   

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          {/* ॐ Symbol */}
          <div className="mb-6 sm:mb-8">
            {/* <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto rounded-full flex items-center justify-center text-3xl sm:text-4xl md:text-6xl font-bold shadow-2xl" style={{ 
              background: 'linear-gradient(135deg, #C41E3A 0%, #8B1538 100%)',
              color: '#FFFEF7',
              borderColor: 'rgba(255, 254, 247, 0.4)'
            }}>
             <img src="/public/WhatsApp Image 2025-07-13 at 12.20.36 PM.jpeg" alt="Adiyogi Foundation Logo" className="w-full h-full object-cover rounded-full" />
            </div> */}
<div 
  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto rounded-full shadow-2xl overflow-hidden"
>
  <img 
    src="/favicon.png" 
    alt="Adiyogi Foundation Logo" 
    className="w-full h-full object-contain rounded-full bg-white p-1 sm:p-1.5 md:p-2"
  />
</div>

          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-4 sm:mb-6 drop-shadow-lg px-2" style={{ color: '#2C2C2C' }}>
            Adiyogi <span style={{ color: '#C41E3A' }}>Foundation</span>
          </h1>

          {/* Tagline Bar */}
        

          {/* Tagline Text */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-6 sm:mb-8 tracking-wide drop-shadow-md px-2" style={{ color: '#8B1538' }}>
            Rebuilding Purpose. Restoring Dharma. Reviving the Sacred.
          </p>

          {/* Intro Message */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12 px-2 sm:px-4">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-center leading-relaxed text-[#2C2C2C]">
              "Rooted in sacred knowledge, guided by selfless service we rise together as a community, restoring dharma with every step."
            </p>
            <p className="mt-3 sm:mt-4 text-center italic text-[#C41E3A] text-xs sm:text-sm md:text-base">
               A reflection of clarity, compassion, and collective awakening.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
            <Link to='/volunteers'>
               <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 transform hover:scale-105" style={{ 
              background: 'linear-gradient(135deg, #C41E3A 0%, #8B1538 100%)',
              color: '#FFFEF7'
            }}>
              <span>Begin Your Journey</span>
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </button>
            </Link>
         <Link to='/donate'>
            <button className="w-full sm:w-auto border-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 hover:text-red-600" style={{ 
              borderColor: '#C41E3A',
              color: '#C41E3A',
              backgroundColor: 'rgba(255, 254, 247, 0.8)'
            }} onMouseEnter={(e) => {
            
            }} onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 254, 247, 0.8)';
              e.target.style.color = '#C41E3A';
            }}>
              <Heart size={18} className="sm:w-5 sm:h-5" />
              <span>Support Our Mission</span>
            </button>
         </Link>
         
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}


     
      <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-[#FFFEF7] to-[#FDF8F8] relative overflow-hidden">
        {/* Optional Om watermark */}
        <div className="absolute inset-0 bg-[url('/pattern/om-light.svg')] opacity-5 bg-center bg-no-repeat bg-cover pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl order-2 md:order-1"
          >
            <img
              src="/WhatsApp Image 2025-07-03 at 3.21.32 PM.jpeg"
              alt="Aditya Parshuram Nikam"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Founder Story */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="order-1 md:order-2"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-[#2C2C2C]">
              Our <span className="text-[#C41E3A]">Founder's</span> Journey
            </h1>

            <p className="text-sm sm:text-base md:text-md text-[#8B1538] font-medium mb-4 sm:mb-6">
              A personal quest turned into a collective purpose from inner seeking to sacred service.
            </p>

            <div
              className="space-y-4 sm:space-y-5 text-[#2C2C2C]/80 text-sm sm:text-base leading-relaxed max-h-[400px] sm:max-h-[500px] overflow-y-auto pr-2 scroll-smooth scrollbar-thin scrollbar-thumb-[#C41E3A]/30 scrollbar-track-transparent"
            >
              <p>
                I never imagined I'd be starting something like the Adiyogi Foundation. I spent years pursuing a traditional career real estate, finance, ambition but something always felt... missing.
              </p>
              <p>
                It wasn't about failure or success. It was about <strong>meaning</strong>. Even in moments of achievement, a quiet voice echoed within
                <em className="text-[#C41E3A]"> what is all this for?</em>
              </p>
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

        {/* Quote Banner */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-base sm:text-lg md:text-xl italic text-[#8B1538] mb-2">
            "You don't have to be a saint or a seeker to belong here. Just human."
          </p>
          <p className="text-xs sm:text-sm text-[#C41E3A]/70">— Aditya P Nikam</p>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm italic text-[#2C2C2C]/60">
            <span className="text-[#C41E3A] font-semibold">ध्यानम् आत्मा । सेवा धर्मः ।</span>  
            <br />"Meditation is the soul, Seva is our dharma."
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroWithCarousel;