import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1';

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('[API Error Interceptor]:', error.response?.data || error.message);
    return Promise.reject(error.response?.data || { message: error.message });
  }
);
