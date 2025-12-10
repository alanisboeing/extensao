// src/services/api.ts
import axios from "axios";
import { clearToken, getToken } from "./auth/token";

export const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

// Adiciona token no header
api.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Se o backend retornar 401 → token inválido ou expirado
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 403) {
      clearToken();
      window.location.href = "/login"; // redireciona automaticamente
    }
    return Promise.reject(error);
  }
);

export default api;
