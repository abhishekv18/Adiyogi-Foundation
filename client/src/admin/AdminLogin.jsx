import React, { useEffect, useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Home, Shield, Users, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { setLoading, setUser } from '../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import api from '../api';

const AdminLoginPage = () => {
   const isLoading = useSelector((state) => state.auth.loading);
   const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      // const res = await axios.post(`/api/user/login`, formData, {
      //   headers: { 'Content-Type': 'application/json' },
      //   withCredentials: true,
      // });
    
  const res = await api.post('/api/user/login', formData);

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success("Login Successfully");
        setFormData({ email: '', password: '' });
        navigate('/admin-dashboard');
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Failed To Login');
    }
    dispatch(setLoading(false));
  };

  useEffect(() => {
    if (user) {
      navigate('/admin-dashboard');
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-[#FFFEF7]">
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* <div className="flex items-center space-x-4 cursor-pointer group">
              <Link to='/' className='flex items-center space-x-2 sm:space-x-3 group flex-shrink-0 min-w-0 max-w-[65%] sm:max-w-none'>
               <div className="relative flex-shrink-0">
  <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
    <img 
      src="/WhatsApp Image 2025-07-14 at 7.33.21 PM.jpeg" 
      alt="Adiyogi Foundation Logo" 
      className="w-full h-full object-contain rounded-full bg-white shadow-sm" 
    />
  </div>
</div>
            
             
                           <div className="min-w-0 flex-1">
  <div className="flex flex-col lg:flex-row lg:items-baseline lg:space-x-1">
    <h1 className="text-sm sm:text-lg lg:text-2xl font-bold text-rich-charcoal group-hover:text-deep-ruby transition-colors duration-300 truncate leading-tight">
      Adiyogi
    </h1>
    <h2 className="text-xs sm:text-base lg:text-2xl font-bold text-sacred-crimson group-hover:text-deep-ruby transition-colors duration-300 truncate leading-tight">
     Foundation
    </h2>
  </div>
  
  <p className="hidden sm:block text-xs font-medium -mt-1 group-hover:text-sacred-crimson transition-colors duration-300 truncate leading-tight" style={{ color: '#6B4B4B' }}>
    Rebuilding Purpose. Restoring Dharma.
  </p>
</div>
  </Link>
            </div> */}
            <div className="flex items-center space-x-4 cursor-pointer group">
  <Link
    to="/"
    className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0 min-w-0 max-w-full sm:max-w-none"
  >
    <div className="relative flex-shrink-0">
      <div className="w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
        <img
          src="/WhatsApp Image 2025-07-27 at 02.18.25_b5e40d14.jpg"
          alt="Adiyogi Foundation Logo"
          className="w-full h-full object-contain rounded-full bg-white shadow-sm"
        />
      </div>
    </div>

    <div className="min-w-0 flex-1">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-1">
        {/* <h1 className="text-sm sm:text-lg lg:text-2xl font-bold text-rich-charcoal group-hover:text-deep-ruby transition-colors duration-300 leading-tight">
          Adiyogi
        </h1>
        <h2 className="text-xs sm:text-base lg:text-2xl font-bold text-sacred-crimson group-hover:text-deep-ruby transition-colors duration-300 leading-tight">
          Foundation
        </h2> */}
           <h1 className="text-sm sm:text-lg lg:text-2xl font-bold text-sacred-crimson group-hover:text-deep-ruby transition-colors duration-300 truncate leading-tight">
      Adiyogi
    </h1>
    <h2 className="text-xs sm:text-base lg:text-2xl font-bold text-sacred-crimson group-hover:text-deep-ruby transition-colors duration-300 truncate leading-tight">
     Foundation
    </h2>
      </div>

      {/* <p className="hidden sm:block text-xs font-medium -mt-1 group-hover:text-sacred-crimson transition-colors duration-300 leading-tight text-[#6B4B4B]">
        Rebuilding Purpose. Restoring Dharma.
      </p> */}
       <p className="hidden sm:block text-xs font-medium -mt-1 group-hover:text-sacred-crimson transition-colors duration-300 truncate leading-tight" style={{ color: '#6B4B4B' }}>
    Rebuilding Purpose. Restoring Dharma.
  </p>
    </div>
  </Link>
</div>

            <Link to='/'>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors">
                <Home className="h-4 w-4" />
                <span className="text-sm">Home</span>
              </button>
            </Link>
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-4rem)] pt-20">
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-sacred-crimson to-red-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white">
           <div className="max-w-md text-center">
  <div className="mb-8">
    <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6 backdrop-blur-sm">
      <Shield className="h-10 w-10 text-white" />
    </div>
    <h2 className="text-4xl font-bold mb-4">Admin CMS Portal</h2>
    <p className="text-xl text-red-100 mb-8">
      Manage blogs, insights, and divine content for the Adiyogi community.
    </p>
  </div>

  <div className="space-y-4 text-left">
    <div className="flex items-center space-x-3 bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
      <Users className="h-6 w-6 text-red-200" />
      <div>
        <h3 className="font-semibold">Content Management</h3>
        <p className="text-sm text-red-100">Create, edit, and publish spiritual blogs and updates</p>
      </div>
    </div>

    <div className="flex items-center space-x-3 bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
      <Heart className="h-6 w-6 text-red-200" />
      <div>
        <h3 className="font-semibold">Community Engagement</h3>
        <p className="text-sm text-red-100">Inspire and connect with seekers through shared wisdom</p>
      </div>
    </div>
  </div>
</div>

          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white bg-opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white bg-opacity-5 rounded-full translate-y-24 -translate-x-24"></div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sacred-crimson to-red-600 rounded-full mb-6">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Admin Login</h2>
              <p className="text-gray-600">
                Sign in to begin your sacred duties
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                    placeholder="admin@gmail.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>
              {/* <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 text-sm font-medium rounded-lg text-white bg-gradient-to-r from-sacred-crimson to-red-700 hover:from-red-600 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <div className="flex items-center">
                  Sign in to Dashboard
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button> */}
               <button
                type="submit"
                disabled={isLoading}
                  className="group relative w-full flex justify-center py-3 px-4 text-sm cursor-pointer font-medium rounded-lg text-white bg-gradient-to-r from-sacred-crimson to-red-700 hover:from-red-600 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <div className="flex items-center gap-2">
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4 text-white"
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
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      <span className="text-sm sm:text-base">Signing in...</span>
                    </>
                  ) : (
                    <>
                      <span className="text-sm sm:text-base">Sign in to Dashboard</span>
                      <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </div>
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Need help? Contact{' '}
                <a href="mailto:support@adiyogifoundation.org" className="font-medium text-red-600 hover:text-red-500">
                  support@adiyogifoundation.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <footer className="bg-[#2C2C2C] text-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="relative flex-shrink-0">
  <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
    <img 
      src="/WhatsApp Image 2025-07-27 at 02.18.25_b5e40d14.jpg" 
      alt="Adiyogi Foundation Logo" 
      className="w-full h-full object-contain rounded-full bg-white shadow-sm" 
    />
  </div>
</div>
              <div>
                <h3 className="text-lg font-bold">Adiyogi <span className='text-sacred-crimson'>Foundation</span></h3>
                <p className="text-sm text-gray-400">Rebuilding Purpose. Restoring Dharma.</p>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              © 2025 Adiyogi Foundation. All rights reserved.
            </div>
          </div>
        </div>
      </footer> */}
      <footer className="bg-[#FDFDFB] text-gray-800 border-t border-[#E8E8E8]">
  <div className="max-w-7xl mx-auto px-4 py-6">
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center space-x-3 mb-4 md:mb-0">
        <div className="relative flex-shrink-0">
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <img 
              src="/WhatsApp Image 2025-07-27 at 02.18.25_b5e40d14.jpg" 
              alt="Adiyogi Foundation Logo" 
              className="w-full h-full object-contain rounded-full bg-white shadow-sm" 
            />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">
            <span className="text-[#C41E3A]">Adiyogi Foundation</span>
          </h3>
          <p className="text-sm text-[#6B4B4B]">Rebuilding Purpose. Restoring Dharma.</p>
        </div>
      </div>
      <div className="text-sm text-gray-500">
        © 2025 Adiyogi Foundation. All rights reserved.
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};

export default AdminLoginPage;
