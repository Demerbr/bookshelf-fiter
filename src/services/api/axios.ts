import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor para logs (dev)
api.interceptors.request.use(
  (config) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`🚀 ${config.method?.toUpperCase()} ${config.url}`);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor para tratamento de erros
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.error("API Error:", message);
    
    // Tratamento específico para diferentes tipos de erro
    if (error.response?.status === 404) {
      console.warn("Resource not found");
    } else if (error.response?.status >= 500) {
      console.error("Server error");
    }
    
    return Promise.reject(error);
  }
);

export default api;
