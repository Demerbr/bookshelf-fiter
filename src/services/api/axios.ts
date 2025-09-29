import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Log da URL da API para debug
if (process.env.NODE_ENV === 'development') {
  console.log('🔗 API Base URL:', api.defaults.baseURL);
}

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
    
    // Tratamento específico para diferentes tipos de erro
    if (error.code === 'ECONNREFUSED' || error.code === 'ERR_NETWORK') {
      console.error("❌ API não está disponível. Verifique se o servidor está rodando em:", api.defaults.baseURL);
    } else if (error.response?.status === 404) {
      console.warn("⚠️ Recurso não encontrado");
    } else if (error.response?.status >= 500) {
      console.error("🔥 Erro interno do servidor");
    } else {
      console.error("❌ API Error:", message);
    }
    
    return Promise.reject(error);
  }
);

export default api;
