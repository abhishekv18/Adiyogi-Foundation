// src/api.js
import axios from 'axios';

const baseURL = import.meta.env.DEV
  ? '/api' // proxy in local dev
  : import.meta.env.VITE_API_URL || 'https://adiyogi-foundation-5oye.onrender.com';

const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
