import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './componenets/common/Layout';


// Import CSS
import './App.css';
import Home from './Home';
import AboutUs from './AboutUs';
import ScrollToTop from './ScrollToTop';
import Temple from './Temple';
import SevaProjectsPage from './Seva';
import ContactUs from './ContactUs';
import Volunteer from './Volunteer';
import AdminLoginPage from './admin/AdminLogin';
import ServicesPage from './Services';
import ProtectedRoute from './ProtectedRoute';
import AdminDashboard from './admin/AdminDashboard';
import DonationPage from './Donation';
import Media from './Media';
import KPHoroscopeGenerator from './KPHoroscopeGenerator';
import BlogPage from './BlogPage';

function App() {
  return (
    <Router>
      <Layout>
        <ScrollToTop/>
        <Routes>
           <Route path="/" element={<Home />} />
             <Route path="/about" element={<AboutUs />} />
               {/* <Route path="/temples" element={<Temple />} /> */}
                {/* <Route path="/horoscope" element={<KPHoroscopeGenerator />} /> */}
                   <Route path="/seva" element={<SevaProjectsPage />} />
                    <Route path="/contact" element={<ContactUs />} />
                       <Route path="/volunteers" element={<Volunteer />} />
                          <Route path="/admin-login" element={<AdminLoginPage />} />
                          <Route path="/services" element={<ServicesPage />} />
                           <Route path="/admin-dashboard" element={
                  <ProtectedRoute>
                    <AdminDashboard/>
                  </ProtectedRoute>
                 } />
                  <Route path="/donate" element={<DonationPage />} />
                  <Route path="/media" element={<Media />} />
                    <Route path="/blog/:id" element={<BlogPage />} />
        
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;