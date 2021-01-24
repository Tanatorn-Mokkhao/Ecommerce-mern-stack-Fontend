import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:2000/api",
  withCredentials: true,
});

export default axiosInstance;
