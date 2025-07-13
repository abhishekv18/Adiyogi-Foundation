




import React, { useEffect, useState } from 'react';
import { Send, Phone, Mail, MapPin, User, MessageCircle, Heart, Flower, Star, Mountain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';

const ContactUs = () => {


const navigate=useNavigate();

 const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      navigate('/admin-dashboard');
    }
  }, [user]);




  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    message: ''
  });

  // const [focusedField, setFocusedField] = useState('');
const [loading, setLoading] = useState(false);


  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({
  //     ...prev,
  //     [name]: value
  //   }));
  // };


// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setLoading(true); 
//   try {
//     const res = await axios.post('http://localhost:5000/api/contact/add', formData, {
//       headers: { 'Content-Type': 'application/json' },
//       withCredentials: true,
//     });

//     if (res.data.success) {
//       toast.success('Details Send Successfully', {
//         icon: '✅',
//         style: {
//           border: '1px solid #28a745',
//           padding: '16px',
//           color: '#fff',
//           background: 'linear-gradient(135deg, #28a745, #218838)',
//           fontWeight: '600',
//         },
//       });

//       setFormData({
//         name: '',
//         phone: '',
//         email: '',
//         city: '',
//         message: '',
//       });
//     }
//   } catch (error) {
//     console.error(error);
//     toast.error(error.response?.data?.message || 'Failed To Send Details');
   
//   } finally {
//     setLoading(false); // Stop loading
//   }
// };
const [errors, setErrors] = useState({
    email: '',
    phone: ''
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^[6-9]\d{9}$/;
    return re.test(phone);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time validation
    if (name === 'email') {
      setErrors(prev => ({
        ...prev,
        email: value && !validateEmail(value)
          ? 'Please enter a valid email address.'
          : ''
      }));
    }

    if (name === 'phone') {
      const cleanedValue = value.replace(/[^0-9]/g, '');
      setErrors(prev => ({
        ...prev,
        phone: value && !validatePhone(cleanedValue)
          ? 'Please enter a valid 10-digit Indian mobile number.'
          : ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      email: !formData.email.trim()
        ? 'Email is required.'
        : !validateEmail(formData.email)
          ? 'Please enter a valid email address.'
          : '',
      phone: !formData.phone.trim()
        ? 'Phone number is required'
        : !validatePhone(formData.phone.replace(/[^0-9]/g, ''))
          ? 'Please enter a valid 10-digit Indian mobile number.'
          : ''
    };

    setErrors(prev => ({ ...prev, ...newErrors }));
    return Object.values(newErrors).every(error => !error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${process.env.VITE_API_URL}/api/contact/add`, formData, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success('Details Sent Successfully', {
          icon: '✅',
          style: {
            border: '1px solid #28a745',
            padding: '16px',
            color: '#fff',
            background: 'linear-gradient(135deg, #28a745, #218838)',
            fontWeight: '600',
          },
        });

        setFormData({
          name: '',
          phone: '',
          email: '',
          city: '',
          message: '',
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Failed To Send Details');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FDF8F8' }}>
      {/* Hero Section */}
      
<div className="relative overflow-hidden">
  {/* Background image with opacity */}
  <div
    className="absolute inset-0 bg-center bg-cover bg-fixed"
    style={{
      backgroundImage: `url('/public/istockphoto-2154401942-612x612.jpg')`,
      opacity: 0.3, // adjust this value (0.1 to 0.3 recommended)
    }}
  ></div>

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-red-800/20"></div>

  {/* Main Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
    <div className="text-center">
      <div className="flex justify-center mb-4 sm:mb-6">
        <div className="relative">
          <div
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#C41E3A' }}
          >
            <Flower className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <div
            className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center"
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
        Connect with the <span style={{ color: '#C41E3A' }}>Divine</span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
        Reach out to Adiyogi Foundation – Your spiritual journey begins with a
        single step. We are here to guide you on the path of enlightenment and
        inner transformation.
      </p>
    </div>
  </div>
</div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl p-6 sm:p-8 shadow-lg" style={{ 
              backgroundColor: '#FFFEF7',
              boxShadow: '0 4px 12px rgba(196, 30, 58, 0.15)'
            }}>
              <div className="text-center mb-6 sm:mb-8">
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F4E8E8' }}>
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#C41E3A' }} />
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: '#2C2C2C' }}>
                  Begin Your Spiritual Journey
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  Share your details and let us connect you with the divine wisdom.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <label className="block text-sm font-medium mb-2" style={{ color: '#2C2C2C' }}>
                    Full Name <span style={{ color: '#C41E3A' }}>*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      
                      className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border-2 transition-all duration-300 focus:outline-none"
                      style={{
                        borderColor:  '#F4E8E8',
                        backgroundColor: '#FFFEF7'
                      }}
                      placeholder="Enter your sacred name"
                      required
                    />
                  </div>
                </div>

                {/* Phone Field */}
                {/* <div className="relative">
                  <label className="block text-sm font-medium mb-2" style={{ color: '#2C2C2C' }}>
                    Phone Number <span style={{ color: '#C41E3A' }}>*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                   
                      className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border-2 transition-all duration-300 focus:outline-none"
                      style={{
                        borderColor:  '#F4E8E8',
                        backgroundColor: '#FFFEF7'
                      }}
                      placeholder="Your contact number"
                      required
                    />
                  </div>
                </div>

               
                <div className="relative">
                  <label className="block text-sm font-medium mb-2" style={{ color: '#2C2C2C' }}>
                    Email Address <span style={{ color: '#C41E3A' }}>*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    
                      className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border-2 transition-all duration-300 focus:outline-none"
                      style={{
                        borderColor:  '#F4E8E8',
                        backgroundColor: '#FFFEF7'
                      }}
                      placeholder="your.email@domain.com"
                      required
                    />
                  </div>
                </div> */}
   <div className="relative">
                  <label className="block text-sm font-medium mb-2" style={{ color: '#2C2C2C' }}>
                    Phone Number <span style={{ color: '#C41E3A' }}>*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      maxLength="10"
                      className={`w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border-2 transition-all duration-300 focus:outline-none ${
                        errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-red-300'
                      }`}
                      style={{
                        backgroundColor: '#FFFEF7'
                      }}
                      placeholder="9876543210"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                  )}
                </div>

                {/* Email Field with Validation */}
                <div className="relative">
                  <label className="block text-sm font-medium mb-2" style={{ color: '#2C2C2C' }}>
                    Email Address <span style={{ color: '#C41E3A' }}>*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border-2 transition-all duration-300 focus:outline-none ${
                        errors.email ? 'border-red-500' : 'border-gray-200 focus:border-red-300'
                      }`}
                      style={{
                        backgroundColor: '#FFFEF7'
                      }}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>
                {/* City Field */}
                <div className="relative">
                  <label className="block text-sm font-medium mb-2" style={{ color: '#2C2C2C' }}>
                    City <span style={{ color: '#C41E3A' }}>*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                    
                      className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border-2 transition-all duration-300 focus:outline-none"
                      style={{
                        borderColor:  '#F4E8E8',
                        backgroundColor: '#FFFEF7'
                      }}
                      placeholder="Your city of residence"
                      required
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label className="block text-sm font-medium mb-2" style={{ color: '#2C2C2C' }}>
                    Message <span style={{ color: '#C41E3A' }}>*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                   
                    rows="4"
                    className="w-full px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border-2 transition-all duration-300 focus:outline-none resize-none"
                    style={{
                      borderColor:  '#F4E8E8',
                      backgroundColor: '#FFFEF7'
                    }}
                    placeholder="Share your spiritual aspirations, questions, or how you'd like to connect with our foundation..."
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                {/* <button
                  type="submit"
                  className="w-full py-3 sm:py-4 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base"
                  style={{ 
                    backgroundColor: '#C41E3A',
                    boxShadow: '0 2px 8px rgba(139, 21, 56, 0.25)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#8B1538';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#C41E3A';
                  }}
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Send Sacred Message</span>
                </button> */}


                <button
  type="submit"
  disabled={loading}
  className="w-full py-3 sm:py-4 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base disabled:opacity-60 disabled:cursor-not-allowed"
  style={{
    backgroundColor: loading ? '#8B1538' : '#C41E3A',
    boxShadow: '0 2px 8px rgba(139, 21, 56, 0.25)',
  }}
  onMouseEnter={(e) => {
    if (!loading) e.target.style.backgroundColor = '#8B1538';
  }}
  onMouseLeave={(e) => {
    if (!loading) e.target.style.backgroundColor = '#C41E3A';
  }}
>
  {loading ? (
    <>
      <svg
        className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white"
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
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        />
      </svg>
      <span>Sending...</span>
    </>
  ) : (
    <>
      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
      <span>Send Sacred Message</span>
    </>
  )}
</button>

              </form>
            </div>
          </div>

          {/* Spiritual Content & Info */}
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
            
            {/* Foundation Info */}
            <div className="rounded-2xl p-6 sm:p-8" style={{ backgroundColor: '#FFFEF7' }}>
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto flex items-center justify-center mb-4" style={{ backgroundColor: '#F4E8E8' }}>
                  <Mountain className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: '#C41E3A' }} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: '#2C2C2C' }}>
                  Adiyogi Foundation
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  "Adiyogi" - The First Yogi, Lord Shiva, represents the beginning of spiritual consciousness. 
                  Our foundation is dedicated to preserving ancient wisdom, restoring sacred temples, 
                  and guiding souls on their spiritual journey.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="rounded-2xl p-6 sm:p-8" style={{ backgroundColor: '#FFFEF7' }}>
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6" style={{ color: '#2C2C2C' }}>
                Sacred Connection Points
              </h3>
              <div className="space-y-3 sm:space-y-4">
               
                <div className="flex items-center space-x-3 sm:space-x-4">
  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F4E8E8' }}>
    <Phone className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#C41E3A' }} />
  </div>
  <div>
    <p className="font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>Call Us</p>
    <a 
      href="tel:+919175033022" 
      className="text-sm sm:text-base text-gray-600 hover:text-red-600 transition-colors duration-200"
    >
      +91 9175033022
    </a>
  </div>
</div>

<div className="flex items-center space-x-3 sm:space-x-4">
  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F4E8E8' }}>
    <Mail className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#C41E3A' }} />
  </div>
  <div>
    <p className="font-medium text-sm sm:text-base" style={{ color: '#2C2C2C' }}>Email Us</p>
    <a 
      href="mailto:social.adiyogifoundation@gmail.com" 
      className="text-sm sm:text-base text-gray-600 hover:text-red-600 transition-colors duration-200 break-all"
    >
      social.adiyogifoundation@gmail.com
    </a>
  </div>
</div>
          
              </div>
            </div>

            {/* Spiritual Quote */}
            <div className="rounded-2xl p-6 sm:p-8 text-center" style={{ backgroundColor: '#FFFEF7' }}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mx-auto flex items-center justify-center mb-4" style={{ backgroundColor: '#F4E8E8' }}>
                <Heart className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#C41E3A' }} />
              </div>
              <blockquote className="text-base sm:text-lg italic mb-4" style={{ color: '#2C2C2C' }}>
                "The divine is not somewhere else. It is right here, right now, in every breath, 
                in every heartbeat, in every moment of awareness."
              </blockquote>
              <p className="text-xs sm:text-sm font-medium" style={{ color: '#C41E3A' }}>
                - Ancient Vedic Wisdom
              </p>
            </div>

            {/* Our Mission */}
            <div className="rounded-2xl p-6 sm:p-8" style={{ backgroundColor: '#FFFEF7' }}>
              <h3 className="text-lg sm:text-xl font-bold mb-4" style={{ color: '#2C2C2C' }}>
                Our Sacred Mission
              </h3>
              <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#C41E3A' }}></div>
                  <p>Preserving ancient temple architecture and spiritual heritage.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#C41E3A' }}></div>
                  <p>Guiding seekers on their path to spiritual enlightenment.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#C41E3A' }}></div>
                  <p>Spreading the timeless wisdom of yoga and meditation.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#C41E3A' }}></div>
                  <p>Building bridges between ancient wisdom and modern life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Mantra */}
      <div className="border-t-2" style={{ borderColor: '#F4E8E8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="text-center">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-2" style={{ color: '#C41E3A' }}>
              🕉️ Om Namah Shivaya 🕉️
            </p>
            <p className="text-sm sm:text-base text-gray-600">
              May your journey with us be filled with divine blessings and inner peace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;