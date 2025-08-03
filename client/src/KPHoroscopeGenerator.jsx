// import React, { useState } from 'react';
// import { Calendar, MapPin, User, Phone, Mail, Clock, Star, Shield, Award, Users, CheckCircle } from 'lucide-react';

// const KPHoroscopeGenerator = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     birthDate: '',
//     birthTime: '',
//     birthPlace: '',
//     phone: '',
//     email: ''
//   });
  
//   const [isLoading, setIsLoading] = useState(false);

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
    
//     try {
//       await new Promise(resolve => setTimeout(resolve, 2000));
//       console.log('Form submitted:', formData);
//       alert('This page is in working');
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Something went wrong. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Banner Section */}
//       <div className="relative overflow-hidden">
//         {/* Background image with opacity */}
//         <div
//           className="absolute inset-0 bg-center bg-cover bg-scroll"
//           style={{
//             backgroundImage: `url('/240_F_625375202_1wXfmVX8fUxylIWwiiCWf7UZwLBqdh9J.jpg')`,
//             opacity: 0.3,
//           }}
//         ></div>

//         {/* Gradient overlay */}
//        <div className="absolute inset-0 bg-gradient-to-br from-red-900/35 to-red-800/30 z-0"></div>

//         {/* Main Content */}
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
//           <div className="text-center">
//             {/* Trust Badges */}
//             <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
//               <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm sm:text-base text-gray-700 shadow-md">
//                 <Users className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2 text-[#C41E3A]" />
//                 5K+ Users
//               </div>
//               <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm sm:text-base text-gray-700 shadow-md">
//                 <Award className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2 text-[#C41E3A]" />
//                 99.9% Accurate
//               </div>
//               <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm sm:text-base text-gray-700 shadow-md">
//                 <Shield className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2 text-[#C41E3A]" />
//                 Secure
//               </div>
//             </div>

//             {/* Icon and Title */}
//             <div className="flex justify-center mb-4 sm:mb-6">
//               <div className="relative">
//                 <div
//                   className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-lg"
//                   style={{ backgroundColor: '#C41E3A' }}
//                 >
//                   <Star className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-pulse" />
//                 </div>
//                 <div
//                   className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-md"
//                   style={{ backgroundColor: '#8B1538' }}
//                 >
//                   <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
//                 </div>
//               </div>
//             </div>

//             <h1
//               className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2"
//               style={{ color: '#2C2C2C' }}
//             >
//               KP Horoscope <span style={{ color: '#C41E3A' }}>Generator</span>
//             </h1>
            
//             <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 mb-8">
//               Get your personalized Krishnamurti Paddhati horoscope with Swiss Ephemeris precision. 
//               Professional astrological calculations trusted by experts worldwide.
//             </p>

//             {/* Key Features */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 max-w-4xl mx-auto">
//               <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg">
//                 <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">Precise Calculations</h3>
//                 <p className="text-sm sm:text-base text-gray-600">Swiss Ephemeris powered accuracy</p>
//               </div>
//               <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg">
//                 <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">Instant Delivery</h3>
//                 <p className="text-sm sm:text-base text-gray-600">PDF report within minutes</p>
//               </div>
//               <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg">
//                 <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">Professional Grade</h3>
//                 <p className="text-sm sm:text-base text-gray-600">Trusted by astrologers</p>
//               </div>
//             </div>

//             {/* Pricing */}
//             <div className="inline-block bg-white/95 backdrop-blur-sm border-2 border-[#C41E3A]/30 px-6 sm:px-8 py-4 sm:py-6 rounded-2xl shadow-xl">
//               <div className="flex items-center justify-center gap-4">
//                 <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">₹501</span>
//                 <div className="text-left">
//                   <div className="text-lg sm:text-xl text-gray-500 line-through">₹1001</div>
//                   <div className="bg-[#C41E3A] text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold">50% OFF</div>
//                 </div>
//               </div>
//               <div className="text-sm sm:text-base text-gray-600 mt-2 font-medium">Limited Time Offer</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Form Section */}
//       <div className="py-12 sm:py-16 lg:py-20 bg-rose-50">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-3xl mx-auto">
            
//             <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
//               {/* Header */}
//               <div className="bg-gradient-to-r from-[#E24A5B] to-[#A73750] px-6 sm:px-8 py-6 sm:py-8 text-center text-white">
//                 <h2 className="text-2xl sm:text-3xl font-bold mb-2">Generate Your Horoscope</h2>
//                 <p className="text-white/90 text-sm sm:text-base">Enter your birth details for accurate calculations</p>
//               </div>
              
//               <div className="p-6 sm:p-8 lg:p-10">
//                 {/* Trust Indicators */}
//                 <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 text-sm">
//                   <div className="flex items-center gap-2 text-[#C41E3A]">
//                     <CheckCircle className="w-4 h-4" />
//                     <span className="font-medium">SSL Secured</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-[#C41E3A]">
//                     <CheckCircle className="w-4 h-4" />
//                     <span className="font-medium">Data Protected</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-[#C41E3A]">
//                     <CheckCircle className="w-4 h-4" />
//                     <span className="font-medium">Instant PDF</span>
//                   </div>
//                 </div>

//                 <div className="space-y-8">
//                   {/* Personal Details */}
//                   <div>
//                     <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-6 flex items-center gap-3 pb-2 border-b-2 border-[#C41E3A]/20">
//                       <User className="w-5 h-5 text-[#C41E3A]" />
//                       Personal Details
//                     </h3>
                    
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">
//                           Full Name *
//                         </label>
//                         <input
//                           type="text"
//                           name="fullName"
//                           value={formData.fullName}
//                           onChange={handleInputChange}
//                           required
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-[#C41E3A] transition-all duration-200 bg-gray-50 focus:bg-white"
//                           placeholder="Enter your full name"
//                         />
//                       </div>
                      
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">
//                           Phone Number *
//                         </label>
//                         <div className="relative">
//                           <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
//                           <input
//                             type="tel"
//                             name="phone"
//                             value={formData.phone}
//                             onChange={handleInputChange}
//                             required
//                             className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-[#C41E3A] transition-all duration-200 bg-gray-50 focus:bg-white"
//                             placeholder="9876543210"
//                           />
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="mt-4 sm:mt-6">
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Email Address *
//                       </label>
//                       <div className="relative">
//                         <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
//                         <input
//                           type="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           required
//                           className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-[#C41E3A] transition-all duration-200 bg-gray-50 focus:bg-white"
//                           placeholder="your.email@example.com"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Birth Details */}
//                   <div className="bg-gray-50/70 rounded-xl p-4 sm:p-6 border border-gray-200">
//                     <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-6 flex items-center gap-3 pb-2 border-b-2 border-[#C41E3A]/20">
//                       <Calendar className="w-5 h-5 text-[#C41E3A]" />
//                       Birth Details
//                       <span className="text-xs bg-[#C41E3A] text-white px-2 py-1 rounded-full ml-auto font-normal">Required</span>
//                     </h3>
                    
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">
//                           Birth Date *
//                         </label>
//                         <input
//                           type="date"
//                           name="birthDate"
//                           value={formData.birthDate}
//                           onChange={handleInputChange}
//                           required
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-[#C41E3A] transition-all duration-200 bg-white"
//                         />
//                       </div>
                      
//                       <div>
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">
//                           Birth Time *
//                         </label>
//                         <div className="relative">
//                           <Clock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
//                           <input
//                             type="time"
//                             name="birthTime"
//                             value={formData.birthTime}
//                             onChange={handleInputChange}
//                             required
//                             className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-[#C41E3A] transition-all duration-200 bg-white"
//                           />
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="mt-4 sm:mt-6">
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Birth Place *
//                       </label>
//                       <div className="relative">
//                         <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
//                         <input
//                           type="text"
//                           name="birthPlace"
//                           value={formData.birthPlace}
//                           onChange={handleInputChange}
//                           required
//                           className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-[#C41E3A] transition-all duration-200 bg-white"
//                           placeholder="City, State, Country"
//                         />
//                       </div>
//                       <p className="text-sm text-gray-500 mt-2 italic">
//                         Exact location ensures accurate calculations
//                       </p>
//                     </div>
//                   </div>

//                   {/* Report Features */}
//                   <div className="bg-white border border-[#C41E3A]/20 rounded-xl p-4 sm:p-6 shadow-sm">
//                     <h4 className="font-bold text-gray-800 text-center text-lg sm:text-xl mb-6">Your KP Report Includes</h4>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
//                       {[
//                         'Janm Kundali Chart',
//                         'Cusp Chart Analysis',
//                         '12 Houses Details',
//                         'Planetary Positions',
//                         'Nakshatra Analysis',
//                         'Mahadasha Periods'
//                       ].map((feature, index) => (
//                         <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3 border border-gray-100">
//                           <CheckCircle className="w-4 h-4 text-[#C41E3A] flex-shrink-0" />
//                           <span className="font-medium text-gray-700 text-sm">{feature}</span>
//                         </div>
//                       ))}
//                     </div>
                    
//                     <div className="text-center">
//                       <div className="inline-flex items-center bg-gradient-to-r from-[#E24A5B] to-[#A73750] text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
//                         <Award className="w-4 h-4 mr-2" />
//                         Swiss Ephemeris Powered
//                       </div>
//                     </div>
//                   </div>

//                   {/* Submit Button */}
//                   {/* <button
//                     type="submit"
//                     onClick={handleSubmit}
//                     disabled={isLoading}
//                     className="w-full bg-gradient-to-r from-[#E24A5B] to-[#A73750] hover:from-[#A73750] hover:to-[#C41E3A] disabled:opacity-70 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl text-lg transform hover:scale-[1.02]"
//                   >
//                     {isLoading ? (
//                       <>
//                         <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                         </svg>
//                         Processing...
//                       </>
//                     ) : (
//                       <>
//                         <Star className="w-5 h-5" />
//                         Generate My Horoscope - ₹501
//                       </>
//                     )}
//                   </button> */}
//                   <button
//   type="submit"
//   onClick={handleSubmit}
//   disabled={isLoading}
//   className="w-full bg-gradient-to-r from-[#E24A5B] to-[#A73750] hover:from-[#A73750] hover:to-[#C41E3A] disabled:opacity-70 text-white font-bold 
//     py-3 px-4 sm:py-4 sm:px-6 
//     rounded-xl transition-all duration-300 flex items-center justify-center 
//     gap-2 sm:gap-3 shadow-lg hover:shadow-xl 
//     text-base sm:text-lg transform hover:scale-[1.02]"
// >
//   {isLoading ? (
//     <>
//       <svg
//         className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//       >
//         <circle
//           className="opacity-25"
//           cx="12"
//           cy="12"
//           r="10"
//           stroke="currentColor"
//           strokeWidth="4"
//         ></circle>
//         <path
//           className="opacity-75"
//           fill="currentColor"
//           d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//         ></path>
//       </svg>
//       <span className="text-sm sm:text-base">Processing...</span>
//     </>
//   ) : (
//     <>
//       <Star className="w-5 h-5 flex-shrink-0" />
//       <span className="text-sm sm:text-base lg:text-lg whitespace-nowrap text-center">
//         Generate My Horoscope – ₹501
//       </span>
//     </>
//   )}
// </button>

//                 </div>
//               </div>
//             </div>

           
//             <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mt-8 border border-gray-100">
//               <div className="text-center">
//                 <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Trusted Worldwide</h3>
//                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
//                   <div className="text-center">
//                     <div className="text-2xl sm:text-3xl font-bold text-[#C41E3A] mb-1">5K+</div>
//                     <div className="text-gray-600 text-sm sm:text-base font-medium">Customers</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl sm:text-3xl font-bold text-[#C41E3A] mb-1">99.9%</div>
//                     <div className="text-gray-600 text-sm sm:text-base font-medium">Accuracy</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl sm:text-3xl font-bold text-[#C41E3A] mb-1">24/7</div>
//                     <div className="text-gray-600 text-sm sm:text-base font-medium">Support</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl sm:text-3xl font-bold text-[#C41E3A] mb-1">15+</div>
//                     <div className="text-gray-600 text-sm sm:text-base font-medium">Years</div>
//                   </div>
//                 </div>
                
//                 <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600">
//                   <div className="flex items-center gap-2">
//                     <Shield className="w-4 h-4 text-green-500" />
//                     <span className="font-medium">SSL Encrypted</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <CheckCircle className="w-4 h-4 text-blue-500" />
//                     <span className="font-medium">Secure Payment</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Award className="w-4 h-4 text-yellow-500" />
//                     <span className="font-medium">Certified Process</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default KPHoroscopeGenerator;



import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, User, Phone, Mail, Clock, Star, Shield, Award, Users, CheckCircle, Search, Globe, Loader } from 'lucide-react';

const KPHoroscopeGenerator = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    phone: '',
    email: '',
    latitude: '',
    longitude: '',
    timezone: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const searchTimeoutRef = useRef(null);
  const suggestionBoxRef = useRef(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Function to search locations using Nominatim API
  const searchLocations = async (query) => {
    if (query.length < 3) {
      setLocationSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    setIsSearching(true);
    
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5&addressdetails=1`
      );
      
      if (response.ok) {
        const data = await response.json();
        const suggestions = data.map(item => ({
          name: item.display_name,
          lat: parseFloat(item.lat),
          lng: parseFloat(item.lon),
          city: item.address?.city || item.address?.town || item.address?.village || '',
          state: item.address?.state || '',
          country: item.address?.country || '',
          timezone: getTimezoneFromCountry(item.address?.country_code || '')
        }));
        
        setLocationSuggestions(suggestions);
        setShowSuggestions(true);
        setFormData({
           fullName: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    phone: '',
    email: '',
    latitude: '',
    longitude: '',
    timezone: ''
        });
      }
    } catch (error) {
      console.error('Error fetching locations:', error);
      setLocationSuggestions([]);
    } finally {
      setIsSearching(false);
    }
  };

  // Simple timezone mapping based on country code
  const getTimezoneFromCountry = (countryCode) => {
    const timezoneMap = {
      'in': 'Asia/Kolkata',
      'us': 'America/New_York',
      'gb': 'Europe/London',
      'au': 'Australia/Sydney',
      'ca': 'America/Toronto',
      'de': 'Europe/Berlin',
      'fr': 'Europe/Paris',
      'jp': 'Asia/Tokyo',
      'cn': 'Asia/Shanghai',
      'br': 'America/Sao_Paulo'
    };
    return timezoneMap[countryCode?.toLowerCase()] || 'UTC';
  };

  // Handle birth place input change with debounced search
  const handleBirthPlaceChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      birthPlace: value,
      latitude: '',
      longitude: '',
      timezone: ''
    });

    // Clear previous timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // Set new timeout for search
    searchTimeoutRef.current = setTimeout(() => {
      searchLocations(value);
    }, 500);
  };

  // Handle location selection
  const handleLocationSelect = (location) => {
    setFormData({
      ...formData,
      birthPlace: location.name,
      latitude: location.lat.toString(),
      longitude: location.lng.toString(),
      timezone: location.timezone
    });
    setShowSuggestions(false);
    setLocationSuggestions([]);
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionBoxRef.current && !suggestionBoxRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.latitude || !formData.longitude) {
      alert('Please select a valid location from the suggestions to get accurate coordinates.');
      return;
    }
    
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      alert('Form submitted successfully! Your horoscope will be generated with the precise coordinates.');
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner Section */}
      <div className="relative overflow-hidden">
        {/* Background image with opacity */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-scroll"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            opacity: 0.3,
          }}
        ></div>

        {/* Gradient overlay */}
       <div className="absolute inset-0 bg-gradient-to-br from-red-900/35 to-red-800/30 z-0"></div>

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm sm:text-base text-gray-700 shadow-md">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2 text-[#C41E3A]" />
                5K+ Users
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm sm:text-base text-gray-700 shadow-md">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2 text-[#C41E3A]" />
                99.9% Accurate
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm sm:text-base text-gray-700 shadow-md">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2 text-[#C41E3A]" />
                Secure
              </div>
            </div>

            {/* Icon and Title */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="relative">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: '#C41E3A' }}
                >
                  <Star className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-pulse" />
                </div>
                <div
                  className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-md"
                  style={{ backgroundColor: '#8B1538' }}
                >
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
              </div>
            </div>

            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2"
              style={{ color: '#2C2C2C' }}
            >
              KP Horoscope <span style={{ color: '#C41E3A' }}>Generator</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 mb-8">
              Get your personalized Krishnamurti Paddhati horoscope with Swiss Ephemeris precision. 
              Professional astrological calculations trusted by experts worldwide.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 max-w-4xl mx-auto">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">Precise Calculations</h3>
                <p className="text-sm sm:text-base text-gray-600">Swiss Ephemeris powered accuracy</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">Instant Delivery</h3>
                <p className="text-sm sm:text-base text-gray-600">PDF report within minutes</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">Professional Grade</h3>
                <p className="text-sm sm:text-base text-gray-600">Trusted by astrologers</p>
              </div>
            </div>

            {/* Pricing */}
            <div className="inline-block bg-white/95 backdrop-blur-sm border-2 border-[#C41E3A]/30 px-6 sm:px-8 py-4 sm:py-6 rounded-2xl shadow-xl">
              <div className="flex items-center justify-center gap-4">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">₹501</span>
                <div className="text-left">
                  <div className="text-lg sm:text-xl text-gray-500 line-through">₹1001</div>
                  <div className="bg-[#C41E3A] text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold">50% OFF</div>
                </div>
              </div>
              <div className="text-sm sm:text-base text-gray-600 mt-2 font-medium">Limited Time Offer</div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="py-12 sm:py-16 lg:py-20 bg-rose-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#E24A5B] to-[#A73750] px-6 sm:px-8 py-6 sm:py-8 text-center text-white">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">Generate Your Horoscope</h2>
                <p className="text-white/90 text-sm sm:text-base">Enter your birth details for accurate calculations</p>
              </div>
              
              <div className="p-6 sm:p-8 lg:p-10">
                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 text-sm">
                  <div className="flex items-center gap-2 text-[#C41E3A]">
                    <CheckCircle className="w-4 h-4" />
                    <span className="font-medium">SSL Secured</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#C41E3A]">
                    <CheckCircle className="w-4 h-4" />
                    <span className="font-medium">Data Protected</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#C41E3A]">
                    <CheckCircle className="w-4 h-4" />
                    <span className="font-medium">Instant PDF</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Details */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-6 flex items-center gap-3 pb-2 border-b-2 border-[#C41E3A]/20">
                      <User className="w-5 h-5 text-[#C41E3A]" />
                      Personal Details
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-[#C41E3A] transition-all duration-200 bg-gray-50 focus:bg-white"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-[#C41E3A] transition-all duration-200 bg-gray-50 focus:bg-white"
                            placeholder="9876543210"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 sm:mt-6">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-[#C41E3A] transition-all duration-200 bg-gray-50 focus:bg-white"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Birth Details */}
                  <div className="bg-gray-50/70 rounded-xl p-4 sm:p-6 border border-gray-200">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-6 flex items-center gap-3 pb-2 border-b-2 border-[#C41E3A]/20">
                      <Calendar className="w-5 h-5 text-[#C41E3A]" />
                      Birth Details
                      <span className="text-xs bg-[#C41E3A] text-white px-2 py-1 rounded-full ml-auto font-normal">Required</span>
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Birth Date *
                        </label>
                        <input
                          type="date"
                          name="birthDate"
                          value={formData.birthDate}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-[#C41E3A] transition-all duration-200 bg-white"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Birth Time *
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <input
                            type="time"
                            name="birthTime"
                            value={formData.birthTime}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-[#C41E3A] transition-all duration-200 bg-white"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 sm:mt-6">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Birth Place *
                      </label>
                      <div className="relative" ref={suggestionBoxRef}>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          {isSearching && (
                            <Loader className="absolute right-3 top-3 w-5 h-5 text-[#C41E3A] animate-spin" />
                          )}
                          <input
                            type="text"
                            name="birthPlace"
                            value={formData.birthPlace}
                            onChange={handleBirthPlaceChange}
                            required
                            className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-[#C41E3A] transition-all duration-200 bg-white"
                            placeholder="Start typing city name..."
                            autoComplete="off"
                          />
                        </div>
                        
                        {/* Location Suggestions */}
                        {showSuggestions && locationSuggestions.length > 0 && (
                          <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto">
                            {locationSuggestions.map((location, index) => (
                              <div
                                key={index}
                                onClick={() => handleLocationSelect(location)}
                                className="p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                              >
                                <div className="flex items-start gap-3">
                                  <Globe className="w-5 h-5 text-[#C41E3A] mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div className="font-medium text-gray-800 text-sm">
                                      {location.city && `${location.city}, `}
                                      {location.state && `${location.state}, `}
                                      {location.country}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">
                                      Lat: {location.lat.toFixed(4)}, Lng: {location.lng.toFixed(4)}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      <p className="text-sm text-gray-500 mt-2 italic">
                        Start typing to search for your birth location. Exact coordinates ensure accurate calculations.
                      </p>
                      
                      {/* Coordinates Display */}
                      {formData.latitude && formData.longitude && (
                        <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                          <div className="flex items-center gap-2 text-green-700">
                            <CheckCircle className="w-4 h-4" />
                            <span className="text-sm font-medium">Location Confirmed</span>
                          </div>
                          <div className="text-xs text-green-600 mt-1">
                            Coordinates: {parseFloat(formData.latitude).toFixed(4)}°, {parseFloat(formData.longitude).toFixed(4)}°
                            {formData.timezone && ` • Timezone: ${formData.timezone}`}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Report Features */}
                  <div className="bg-white border border-[#C41E3A]/20 rounded-xl p-4 sm:p-6 shadow-sm">
                    <h4 className="font-bold text-gray-800 text-center text-lg sm:text-xl mb-6">Your KP Report Includes</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                      {[
                        'Janm Kundali Chart',
                        'Cusp Chart Analysis',
                        '12 Houses Details',
                        'Planetary Positions',
                        'Nakshatra Analysis',
                        'Mahadasha Periods'
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3 border border-gray-100">
                          <CheckCircle className="w-4 h-4 text-[#C41E3A] flex-shrink-0" />
                          <span className="font-medium text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <div className="inline-flex items-center bg-gradient-to-r from-[#E24A5B] to-[#A73750] text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
                        <Award className="w-4 h-4 mr-2" />
                        Swiss Ephemeris Powered
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading || !formData.latitude || !formData.longitude}
                    className="w-full bg-gradient-to-r from-[#E24A5B] to-[#A73750] hover:from-[#A73750] hover:to-[#C41E3A] disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold 
                      py-3 px-4 sm:py-4 sm:px-6 
                      rounded-xl transition-all duration-300 flex items-center justify-center 
                      gap-2 sm:gap-3 shadow-lg hover:shadow-xl 
                      text-base sm:text-lg transform hover:scale-[1.02] disabled:transform-none"
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span className="text-sm sm:text-base">Processing...</span>
                      </>
                    ) : (
                      <>
                        <Star className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm sm:text-base lg:text-lg whitespace-nowrap text-center">
                          Generate My Horoscope – ₹501
                        </span>
                      </>
                    )}
                  </button>

                  {(!formData.latitude || !formData.longitude) && (
                    <p className="text-center text-sm text-amber-600 bg-amber-50 border border-amber-200 rounded-lg p-3">
                      Please select a location from the search suggestions to enable horoscope generation.
                    </p>
                  )}
                </form>
              </div>
            </div>

           
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mt-8 border border-gray-100">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Trusted Worldwide</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#C41E3A] mb-1">5K+</div>
                    <div className="text-gray-600 text-sm sm:text-base font-medium">Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#C41E3A] mb-1">99.9%</div>
                    <div className="text-gray-600 text-sm sm:text-base font-medium">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#C41E3A] mb-1">24/7</div>
                    <div className="text-gray-600 text-sm sm:text-base font-medium">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#C41E3A] mb-1">15+</div>
                    <div className="text-gray-600 text-sm sm:text-base font-medium">Years</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span className="font-medium">SSL Encrypted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span className="font-medium">Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="font-medium">Certified Process</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KPHoroscopeGenerator;