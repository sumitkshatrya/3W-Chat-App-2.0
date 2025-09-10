import axios from 'axios';

const BACKEND_URL = "http://localhost:5001";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : BACKEND_URL,
  withCredentials: true,
});