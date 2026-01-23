import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // таймаут 10 секунд
});

// Response interceptor — централизованная обработка ошибок
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Можно добавить глобальный лог ошибок
    console.error('Axios error:', error.response?.status, error.response?.data);
    return Promise.reject(error);
  }
);

export default axiosInstance;
