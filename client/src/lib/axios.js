import axios from "axios";

// 
const BACKEND_URL = "https://threew-chat-app-2-0.onrender.com/api";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5001/api"
      : BACKEND_URL,
  withCredentials: true, // send cookies
});
