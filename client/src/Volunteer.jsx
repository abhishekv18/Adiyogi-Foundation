

import React, { useEffect, useState } from 'react';
import { Heart, Users, Phone, Mail, User, MapPin, MessageSquare, Award, Shield, Flower, Circle, Flower2, X, } from 'lucide-react';
import { FaOm } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';

const Volunteer = () => {
  const [loading, setLoading] = useState(false);
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      navigate('/admin-dashboard');
    }
  }, [user]);

  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    message: '',
    skills: ''
  });

    const [errors, setErrors] = useState({
    phone: '',
    email: ''
  });
  const volunteers = [
     {
      id: 1,
      name: "Mr. Jitendra Jadhav",
      title: "Engineering Specialist",
      role: "Head of Mumbai & Navi Mumbai District",
      image: "/public/volunteers/WhatsApp Image 2025-07-04 at 6.06.33 PM.jpeg",
      bio: "Jitendra combines technical expertise with spiritual dedication to oversee our temple restoration projects in Mumbai region with precision and devotion.",
      skills: ["Project Management", "Structural Engineering", "Team Leadership"],
      contact: "jitendra.j@adiyogi.org"
    },
    {
      id: 2,
      name: "Mansi Nerkar",
      title: "Strategic Advisor",
      role: "Star Volunteer",
      image: "/public/volunteers/WhatsApp Image 2025-07-04 at 6.06.04 PM.jpeg",
      bio: "Mansi's strategic vision helps guide our foundation's long-term goals. Her ability to connect spiritual principles with practical implementation is invaluable.",
      skills: ["Strategic Planning", "Community Building", "Event Management"],
      contact: "mansi.nerkar@adiyogi.org"
    },
    
   {
      id: 3,
      name: "Mr. Pankaj Ambatkar",
      title: "Celebrity Numerologist",
      role: "District Head, Dadra and Nagar Haveli district",
      image: "/public/volunteers/WhatsApp Image 2025-07-04 at 6.07.02 PM.jpeg",
      bio: "With over 15 years of experience in numerology and spiritual guidance, Pankaj brings profound wisdom to our foundation. His expertise helps align our initiatives with cosmic energies for maximum impact.",
      skills: ["Numerology", "Spiritual Counseling", "Leadership"],
      contact: "contact@pankajambatkar.com"
    },
    {
      id: 4,
      name: "Atul Thombare",
      title: "Architectural Expert",
      role: "Head of Surveying & Architectural Planning",
      image: "/public/volunteers/WhatsApp Image 2025-07-04 at 6.06.05 PM.jpeg",
      bio: "Atul ensures our temple restoration projects maintain architectural authenticity while meeting modern standards. His eye for detail preserves the sacred geometry of ancient designs.",
      skills: ["Architectural Design", "Surveying", "Heritage Conservation"],
      contact: "atul.t@adiyogi.org"
    },
    {
      id: 5,
      name: "Mr. Chaitanya Wagh",
      title: "MBA International Marketing",
      role: "Volunteer | Marketing",
      image: "/public/volunteers/WhatsApp Image 2025-07-04 at 7.39.43 PM.jpeg",
      bio: "Chaitanya's international marketing expertise helps us spread our message globally. He develops strategies that connect ancient wisdom with modern audiences.",
      skills: ["Digital Marketing", "Brand Strategy", "International Relations"],
      contact: "chaitanya.wagh@adiyogi.org"
    },
  ];

  const handleVolunteerClick = (volunteer) => {
    setSelectedVolunteer(volunteer);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedVolunteer(null);
  };

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

    const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^[6-9]\d{9}$/;
    return re.test(phone);
  };

  const handleChange = (e) => {
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
      const res = await axios.post(`${process.env.VITE_API_URL}/api/volunteer/add`, formData, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success("Details Send Successfully", {
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
          skills: ''
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Failed To Send Details');
    } finally {
      setLoading(false);
    }
  };


// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setLoading(true);
//   try {
//     const res = await axios.post('http://localhost:5000/api/volunteer/add', formData, {
//       headers: { 'Content-Type': 'application/json' },
//       withCredentials: true,
//     });

//     if (res.data.success) {
//       toast.success("Details Send Successfully", {
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
//         skills: ''
//       });
//     }
//   } catch (error) {
//     console.error(error);
//     toast.error(error.response?.data?.message || 'Failed To Send Details');
    
//   } finally {
//     setLoading(false);
//   }
// };





  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FDF8F8' }}>
      {/* Hidden Admin Access - Subtle and positioned discretely */}
      <div className="fixed bottom-4 left-4 z-40">
        <div className="relative">
          <button
            onClick={() => setShowAdminLogin(!showAdminLogin)}
            className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 border border-white border-opacity-20"
            title="Admin Access"
          >
            <Shield size={20} style={{ color: '#C41E3A' }} />
          </button>
          
          {showAdminLogin && (
            <div className="absolute bottom-16 left-0 bg-white rounded-xl shadow-2xl border p-3 w-60 z-50">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                <Shield className="h-4 w-4 mr-2 "style={{ color: '#C41E3A' }} />
                Admin Access
              </h3>
              <Link to="/admin-login">
                <button
                  className="w-full px-4 py-2 bg-gradient-to-t from-sacred-crimson to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 font-medium"
                >
                  Admin Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden py-12 md:py-20 px-4">
        <div
          className="absolute inset-0 bg-center bg-cover bg-fixed z-0"
          style={{
            backgroundImage: "url('/public/about us/istockphoto-825022486-612x612.webp')",
            opacity: 0.25,
          }}
        ></div>

        <div className="absolute inset-0 z-0 bg-gradient-to-br from-red-900/30 to-red-800/20"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="relative">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center animate-pulse" style={{ backgroundColor: '#C41E3A' }}>
                <Circle size={20} fill="white" className="text-white" />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-red-100 to-transparent rounded-full blur-lg opacity-50"></div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4" style={{ color: '#2C2C2C' }}>
            Join the <span style={{ color: '#C41E3A' }}>Sacred Journey</span>
          </h1>

          <p className="text-base md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-2" style={{ color: '#6B4B4B' }}>
            Become a volunteer with Adiyogi Foundation and be part of a divine mission to preserve ancient wisdom, 
            restore sacred temples, and spread spiritual consciousness across the world.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 md:space-x-8 text-center">
            <div className="flex flex-col items-center">
              <Heart size={28} style={{ color: '#C41E3A' }} className="mb-2" />
              <span className="text-sm font-medium" style={{ color: '#2C2C2C' }}>Seva & Service</span>
            </div>
            <div className="flex flex-col items-center">
              <Users size={28} style={{ color: '#C41E3A' }} className="mb-2" />
              <span className="text-sm font-medium" style={{ color: '#2C2C2C' }}>Community Unity</span>
            </div>
            <div className="flex flex-col items-center">
              <Flower2 size={28} style={{ color: '#C41E3A' }} className="mb-2" />
              <span className="text-sm font-medium" style={{ color: '#2C2C2C' }}>Spiritual Growth</span>
            </div>
          </div>
        </div>
      </div>
   <div className="max-w-6xl mx-auto mt-2 px-4 py-7 md:py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-5" style={{ color: '#2C2C2C' }}>
            Our Dedicated <span style={{ color: '#C41E3A' }}>Volunteers</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#6B4B4B' }}>
         Meet the passionate individuals who dedicate their time and expertise to our spiritual mission.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {volunteers.map((volunteer) => (
            <div 
              key={volunteer.id}
              onClick={() => handleVolunteerClick(volunteer)}
              className="cursor-pointer group transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden rounded-xl shadow-md h-full" style={{ backgroundColor: '#FFFEF7' }}>
               <div className="relative pt-[100%] overflow-hidden">
  <img
    src={volunteer.image}
    alt={volunteer.name}
    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />
</div>
                <div className="p-4">
                  <h3 className="font-bold text-lg" style={{ color: '#2C2C2C' }}>{volunteer.name}</h3>
                  <p className="text-sm mb-1" style={{ color: '#C41E3A' }}>{volunteer.title}</p>
                  <p className="text-xs" style={{ color: '#6B4B4B' }}>{volunteer.role}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium">View Profile →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
     
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          
          {/* Left Side - Information */}
          <div className="space-y-6 md:space-y-8">
            <div className="p-6 md:p-10 rounded-2xl shadow-lg" style={{ backgroundColor: '#FFFEF7', boxShadow: '0 4px 12px rgba(196, 30, 58, 0.15)' }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6" style={{ color: '#2C2C2C' }}>
                Why Volunteer with Us?
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F4E8E8' }}>
                    <Circle size={18} style={{ color: '#C41E3A' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2" style={{ color: '#2C2C2C' }}>Sacred Service (Seva)</h3>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#6B4B4B' }}>
                      Engage in selfless service that purifies the soul and connects you with the divine essence of giving.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F4E8E8' }}>
                    <Flower size={18} style={{ color: '#C41E3A' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2" style={{ color: '#2C2C2C' }}>Spiritual Growth</h3>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#6B4B4B' }}>
                      Deepen your spiritual practice through meaningful work that aligns with ancient wisdom traditions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F4E8E8' }}>
                    <Heart size={18} style={{ color: '#C41E3A' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2" style={{ color: '#2C2C2C' }}>Divine Connection</h3>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#6B4B4B' }}>
                      Join a community of like-minded souls working together to preserve and share sacred knowledge.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Volunteer Opportunities */}
            <div className="p-6 md:p-8 rounded-2xl shadow-lg" style={{ backgroundColor: '#FFFEF7', boxShadow: '0 4px 12px rgba(196, 30, 58, 0.15)' }}>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6" style={{ color: '#2C2C2C' }}>
                Volunteer Opportunities
              </h3>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="text-center p-3 md:p-4 rounded-lg" style={{ backgroundColor: '#F4E8E8' }}>
                  <Users size={20} style={{ color: '#C41E3A' }} className="mx-auto mb-1 md:mb-2" />
                  <span className="text-xs md:text-sm font-medium" style={{ color: '#2C2C2C' }}>Community Outreach</span>
                </div>
                <div className="text-center p-3 md:p-4 rounded-lg" style={{ backgroundColor: '#F4E8E8' }}>
                  <Award size={20} style={{ color: '#C41E3A' }} className="mx-auto mb-1 md:mb-2" />
                  <span className="text-xs md:text-sm font-medium" style={{ color: '#2C2C2C' }}>Event Organization</span>
                </div>
                <div className="text-center p-3 md:p-4 rounded-lg" style={{ backgroundColor: '#F4E8E8' }}>
                  <Flower size={20} style={{ color: '#C41E3A' }} className="mx-auto mb-1 md:mb-2" />
                  <span className="text-xs md:text-sm font-medium" style={{ color: '#2C2C2C' }}>Temple Restoration</span>
                </div>
                <div className="text-center p-3 md:p-4 rounded-lg" style={{ backgroundColor: '#F4E8E8' }}>
                  <Circle size={20} style={{ color: '#C41E3A' }} className="mx-auto mb-1 md:mb-2" />
                  <span className="text-xs md:text-sm font-medium" style={{ color: '#2C2C2C' }}>Spiritual Programs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-6 md:p-8 rounded-2xl shadow-lg" style={{ backgroundColor: '#FFFEF7', boxShadow: '0 4px 12px rgba(196, 30, 58, 0.15)' }}>
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4" style={{ color: '#2C2C2C' }}>
                Begin Your Sacred Service
              </h2>
              <p className="text-xs md:text-sm" style={{ color: '#6B4B4B' }}>
                Fill out this form to join our volunteer community and start your journey of seva.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2" style={{ color: '#2C2C2C' }}>
                  Full Name *
                </label>
                <div className="relative">
                  <User size={16} style={{ color: '#C41E3A' }} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
                    style={{ 
                      borderColor: '#F4E8E8',
                      focusRingColor: '#C41E3A',
                      backgroundColor: '#FFFEF7'
                    }}
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Phone Field */}
              {/* <div>
                <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2" style={{ color: '#2C2C2C' }}>
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone size={16} style={{ color: '#C41E3A' }} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
                    style={{ 
                      borderColor: '#F4E8E8',
                      focusRingColor: '#C41E3A',
                      backgroundColor: '#FFFEF7'
                    }}
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

            
              <div>
                <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2" style={{ color: '#2C2C2C' }}>
                  Email Address *
                </label>
                <div className="relative">
                  <Mail size={16} style={{ color: '#C41E3A' }} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
                    style={{ 
                      borderColor: '#F4E8E8',
                      focusRingColor: '#C41E3A',
                      backgroundColor: '#FFFEF7'
                    }}
                    placeholder="Enter your email address"
                  />
                </div>
              </div> */}
 <div>
    <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2" style={{ color: '#2C2C2C' }}>
      Phone Number *
    </label>
    <div className="relative">
      <Phone size={16} style={{ color: '#C41E3A' }} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        maxLength="10"
        className={`w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 ${
          errors.phone ? 'border-red-500' : 'border-[#F4E8E8]'
        }`}
        style={{ 
          backgroundColor: '#FFFEF7'
        }}
        placeholder="9876543210"
      />
    </div>
    {errors.phone && (
      <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
    )}
  </div>

  {/* Email Field */}
  <div>
    <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2" style={{ color: '#2C2C2C' }}>
      Email Address *
    </label>
    <div className="relative">
      <Mail size={16} style={{ color: '#C41E3A' }} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className={`w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 ${
          errors.email ? 'border-red-500' : 'border-[#F4E8E8]'
        }`}
        style={{ 
          backgroundColor: '#FFFEF7'
        }}
        placeholder="your.email@example.com"
      />
    </div>
    {errors.email && (
      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
    )}
  </div>

              {/* City Field */}
              <div>
                <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2" style={{ color: '#2C2C2C' }}>
                  City *
                </label>
                <div className="relative">
                  <MapPin size={16} style={{ color: '#C41E3A' }} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
                    style={{ 
                      borderColor: '#F4E8E8',
                      focusRingColor: '#C41E3A',
                      backgroundColor: '#FFFEF7'
                    }}
                    placeholder="Enter your city"
                  />
                </div>
              </div>

              {/* Skills Field */}
              <div>
                <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2" style={{ color: '#2C2C2C' }}>
                  Skills & Expertise
                </label>
                <div className="relative">
                  <Award size={16} style={{ color: '#C41E3A' }} className="absolute left-3 top-3 md:top-4" />
                  <textarea
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    rows="2"
                    className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 resize-none"
                    style={{ 
                      borderColor: '#F4E8E8',
                      focusRingColor: '#C41E3A',
                      backgroundColor: '#FFFEF7'
                    }}
                    placeholder="Share your skills, talents, or areas of expertise..."
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2" style={{ color: '#2C2C2C' }}>
                  Message & Motivation
                </label>
                <div className="relative">
                  <MessageSquare size={16} style={{ color: '#C41E3A' }} className="absolute left-3 top-3 md:top-4" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 resize-none"
                    style={{ 
                      borderColor: '#F4E8E8',
                      focusRingColor: '#C41E3A',
                      backgroundColor: '#FFFEF7'
                    }}
                    placeholder="Tell us what motivates you to volunteer and how you'd like to contribute..."
                  />
                </div>
              </div>

         

<button
  type="submit"
  disabled={loading}
  className="w-full py-3 md:py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
  style={{ 
    backgroundColor: '#C41E3A',
    boxShadow: '0 2px 8px rgba(139, 21, 56, 0.25)'
  }}
>
  {loading ? (
    <div className="flex items-center justify-center space-x-2">
      <svg
        className="animate-spin h-5 w-5 text-white"
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
      <span className="text-sm md:text-base">Sending...</span>
    </div>
  ) : (
    <div className="flex items-center justify-center space-x-2">
      <Heart size={18} />
      <span className="text-sm md:text-base">Begin Sacred Service</span>
    </div>
  )}
</button>


            </form>

          
          </div>
        </div>
  {/* <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-5" style={{ color: '#2C2C2C' }}>
            Our Dedicated <span style={{ color: '#C41E3A' }}>Volunteers</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#6B4B4B' }}>
         Meet the passionate individuals who dedicate their time and expertise to our spiritual mission.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {volunteers.map((volunteer) => (
            <div 
              key={volunteer.id}
              onClick={() => handleVolunteerClick(volunteer)}
              className="cursor-pointer group transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden rounded-xl shadow-md h-full" style={{ backgroundColor: '#FFFEF7' }}>
               <div className="relative pt-[100%] overflow-hidden">
  <img
    src={volunteer.image}
    alt={volunteer.name}
    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />
</div>
                <div className="p-4">
                  <h3 className="font-bold text-lg" style={{ color: '#2C2C2C' }}>{volunteer.name}</h3>
                  <p className="text-sm mb-1" style={{ color: '#C41E3A' }}>{volunteer.title}</p>
                  <p className="text-xs" style={{ color: '#6B4B4B' }}>{volunteer.role}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium">View Profile →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Volunteer Modal */}
{showModal && selectedVolunteer && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black bg-opacity-50 backdrop-blur-sm">
    <div
      className="
        relative w-full 
        max-w-[90vw] sm:max-w-sm md:max-w-lg
        max-h-[80vh] sm:max-h-[75vh] md:max-h-[70vh] 
        overflow-y-auto rounded-xl shadow-2xl animate-fade-in"
      style={{ backgroundColor: '#FFFEF7' }}
    >
      <button
        onClick={handleCloseModal}
        className="absolute top-3 right-3 z-10 p-1 rounded-full hover:bg-red-50 transition-colors"
        style={{ color: '#C41E3A' }}
      >
        <X size={20} />
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Image Section */}
        <div className="relative w-full h-[140px] sm:h-[170px] md:h-auto bg-gray-100">
          <img
            src={selectedVolunteer.image}
            alt={selectedVolunteer.name}
            className="w-full h-full object-cover object-[center_40%]"
          />
        </div>

        {/* Content Section */}
        <div className="p-3 sm:p-4 md:p-5 md:col-span-2">
          <h3 className="text-lg sm:text-xl font-bold mb-1 text-[#2C2C2C]">
            {selectedVolunteer.name}
          </h3>
          <p className="text-sm sm:text-base mb-1 text-[#C41E3A]">
            {selectedVolunteer.title}
          </p>
          <p className="text-xs font-medium mb-3 text-[#6B4B4B]">
            {selectedVolunteer.role}
          </p>

          <div className="mb-3">
            <h4 className="font-semibold text-sm mb-1 text-[#2C2C2C]">About</h4>
            <p className="text-xs text-[#6B4B4B]">{selectedVolunteer.bio}</p>
          </div>

          <div className="mb-3">
            <h4 className="font-semibold text-sm mb-1 text-[#2C2C2C]">Key Skills</h4>
            <div className="flex flex-wrap gap-2">
              {selectedVolunteer.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 rounded-full text-[10px] font-medium"
                  style={{ backgroundColor: '#F4E8E8', color: '#C41E3A' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        
        </div>
      </div>
    </div>
  </div>
)}



        {/* Bottom Quote Section */}
        <div className="mt-8 md:mt-16 text-center p-6 md:p-8 rounded-2xl" style={{ backgroundColor: '#FFFEF7', border: '2px solid #F4E8E8' }}>
          <FaOm size={24} style={{ color: '#C41E3A' }} className="mx-auto mb-3 md:mb-4" />
          <blockquote className="text-lg md:text-xl font-medium italic mb-3 md:mb-4" style={{ color: '#2C2C2C' }}>
            "Seva is not just service to others, but service to the divine that resides in all beings."
          </blockquote>
          <p className="text-xs md:text-sm" style={{ color: '#C41E3A' }}>
            - Ancient Vedic Wisdom
          </p>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;

