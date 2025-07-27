
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
    
{/* <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
  <div className="absolute inset-0">
    <img
      src="/WhatsApp Image 2025-07-26 at 22.16.56_530cabac.jpg"
      alt="Sacred Temple Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0" style={{
      background: 'linear-gradient(to right, rgba(253, 248, 248, 0.92) 0%, rgba(244, 232, 232, 0.85) 50%, rgba(253, 248, 248, 0.92) 100%)'
    }}></div>
  </div>

  <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
   
    <div className="flex justify-center">
      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full shadow-2xl overflow-hidden bg-white">
        <img
          src="/WhatsApp Image 2025-07-27 at 02.18.25_b5e40d14.jpg"
          alt="Adiyogi Foundation Logo"
          className="w-full h-full object-contain rounded-full"
        />
      </div>
    </div>

   
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg text-[#2C2C2C]">
      Adiyogi <span className="text-[#C41E3A]">Foundation</span>
    </h1>

   
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-wide text-[#8B1538] drop-shadow-md">
      Rebuilding Purpose. Restoring Dharma. Reviving the Sacred.
    </p>

   
    <div className="px-2 sm:px-4">
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-[#2C2C2C] leading-relaxed">
        "Rooted in sacred knowledge, guided by selfless service we rise together as a community, restoring dharma with every step."
      </p>
      <p className="mt-2 text-xs sm:text-sm lg:text-base italic text-[#C41E3A]">
        A reflection of clarity, compassion, and collective awakening.
      </p>
    </div>

   
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4 px-4">
      <Link to='/volunteers'>
        <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-transform duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 transform hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #C41E3A 0%, #8B1538 100%)',
            color: '#FFFEF7'
          }}>
          <span>Begin Your Journey</span>
          <ArrowRight size={18} className="sm:w-5 sm:h-5" />
        </button>
      </Link>
      
      <Link to='/donate'>
        <button
          className="w-full sm:w-auto border-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 hover:text-red-600"
          style={{
            borderColor: '#C41E3A',
            color: '#C41E3A',
            backgroundColor: 'rgba(255, 254, 247, 0.9)'
          }}
        >
          <Heart size={18} className="sm:w-5 sm:h-5" />
          <span>Support Our Mission</span>
        </button>
      </Link>
    </div>
  </div>
</section> */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
  {/* <div className="absolute inset-0">
    <img
      src="/WhatsApp Image 2025-07-27 at 14.40.43_2e3b5f4c.jpg"
      alt="Sacred Temple Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0" style={{
      background: 'linear-gradient(to right, rgba(253, 248, 248, 0.92) 0%, rgba(244, 232, 232, 0.85) 50%, rgba(253, 248, 248, 0.92) 100%)'
    }}></div>
  </div> */}
<div className="absolute inset-0">
  <img
    src="/WhatsApp Image 2025-07-27 at 14.40.43_2e3b5f4c.jpg"
    alt="Sacred Temple Background"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0" style={{
    background: 'linear-gradient(to right, rgba(253, 248, 248, 0.86) 0%, rgba(244, 232, 232, 0.81) 50%, rgba(253, 248, 248, 0.86) 100%)'
  }}></div>
</div>
  <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
   
    {/* Logo - Larger on mobile */}
    <div className="flex justify-center">
      <div className="w-24 h-24 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full shadow-2xl overflow-hidden bg-white">
        <img
          src="/WhatsApp Image 2025-07-27 at 02.18.25_b5e40d14.jpg"
          alt="Adiyogi Foundation Logo"
          className="w-full h-full object-contain rounded-full"
        />
      </div>
    </div>

    {/* Main Heading - Larger on mobile */}
    <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg text-[#2C2C2C]">
     <span className="text-[#C41E3A]">Adiyogi Foundation</span>
    </h1>

    {/* Tagline - Larger on mobile */}
    <p className="text-lg md:text-xl lg:text-2xl font-semibold tracking-wide text-[#8B1538] drop-shadow-md">
      Rebuilding Purpose. Restoring Dharma. Reviving the Sacred.
    </p>

    {/* Quote - Larger on mobile */}
    <div className="px-3 sm:px-4">
      <p className="text-lg sm:text-lg md:text-xl lg:text-2xl font-medium text-[#6B4B4B] leading-relaxed">
        "Rooted in sacred knowledge, guided by selfless service we rise together as a community, restoring dharma with every step."
      </p>
      <p className="mt-3 text-sm sm:text-sm lg:text-base italic text-[#C41E3A]">
        A reflection of clarity, compassion, and collective awakening.
      </p>
    </div>

    {/* Buttons - Larger on mobile */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-6 px-4">
      <Link to='/volunteers'>
        <button className="w-full sm:w-auto px-8 py-4 sm:px-8 sm:py-4 rounded-lg font-semibold text-lg sm:text-lg transition-transform duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 transform hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #C41E3A 0%, #8B1538 100%)',
            color: '#FFFEF7'
          }}>
          <span>Begin Your Journey</span>
          <ArrowRight size={20} className=" w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </Link>
      
      <Link to='/donate'>
        <button
          className="w-full sm:w-auto border-2 px-8 py-4 sm:px-8 sm:py-4 rounded-lg font-semibold text-lg sm:text-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 hover:text-red-600"
          style={{
            borderColor: '#C41E3A',
            color: '#C41E3A',
            backgroundColor: 'rgba(255, 254, 247, 0.9)'
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


     
      {/* <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-[#FFFEF7] to-[#FDF8F8] relative overflow-hidden">
      
        <div className="absolute inset-0 bg-[url('/pattern/om-light.svg')] opacity-5 bg-center bg-no-repeat bg-cover pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
        
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl order-2 md:order-1"
          >
            <img
              src="/WhatsApp Image 2025-07-26 at 22.16.56_5bdc78ff.jpg"
              alt="Aditya Parshuram Nikam"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          
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
      </section> */}

{/* <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#FFFEF7] to-[#FDF8F8] relative overflow-hidden">
      
  <div className="absolute inset-0 bg-[url('/pattern/om-light.svg')] opacity-5 bg-center bg-no-repeat bg-cover pointer-events-none"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch relative z-10">
    
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl order-2 md:order-1 w-full h-full min-h-[400px] sm:min-h-[500px] flex justify-end"
    >
      <img
        src="/WhatsApp Image 2025-07-26 at 22.16.56_5bdc78ff.jpg"
        alt="Aditya Parshuram Nikam"
        className="h-full object-cover object-right"
      />
    </motion.div>

    
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="order-1 md:order-2 py-4 sm:py-6"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-[#2C2C2C]">
        Our <span className="text-[#C41E3A]">Founder's</span> Journey
      </h1>

      <p className="text-sm sm:text-base md:text-md text-[#8B1538] font-medium mb-3 sm:mb-4">
        A personal quest turned into a collective purpose from inner seeking to sacred service.
      </p>

      <div className="space-y-3 sm:space-y-4 text-[#2C2C2C]/80 text-sm sm:text-base leading-relaxed max-h-[350px] sm:max-h-[400px] overflow-y-auto pr-2 scroll-smooth scrollbar-thin scrollbar-thumb-[#C41E3A]/30 scrollbar-track-transparent">
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

  
  <div className="mt-10 sm:mt-12 md:mt-16 text-center max-w-3xl mx-auto px-4 sm:px-6">
    <p className="text-base sm:text-lg md:text-xl italic text-[#8B1538] mb-2">
      "You don't have to be a saint or a seeker to belong here. Just human."
    </p>
    <p className="text-xs sm:text-sm text-[#C41E3A]/70">— Aditya P Nikam</p>
    <p className="mt-2 sm:mt-3 text-xs sm:text-sm italic text-[#2C2C2C]/60">
      <span className="text-[#C41E3A] font-semibold">ध्यानम् आत्मा । सेवा धर्मः ।</span>  
      <br />"Meditation is the soul, Seva is our dharma."
    </p>
  </div>
</section> */}

<section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-[#FFFEF7] to-[#FDF8F8] relative overflow-hidden">
      
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
          Our <span className="text-[#C41E3A]">Founder's</span> Journey
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-[#8B1538] font-medium mb-3 sm:mb-4">
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
    <p className="text-sm sm:text-base md:text-lg italic text-[#8B1538] mb-1 sm:mb-2">
      "You don't have to be a saint or a seeker to belong here. Just human."
    </p>
    <p className="text-xs sm:text-sm text-[#C41E3A]/70">— Aditya P Nikam</p>
    <p className="mt-1 sm:mt-2 text-xs italic text-[#2C2C2C]/60">
      <span className="text-[#C41E3A] font-semibold">ध्यानम् आत्मा । सेवा धर्मः ।</span>  
      <br />"Meditation is the soul, Seva is our dharma."
    </p>
  </div>
</section>
    </>
  );
};

export default HeroWithCarousel;