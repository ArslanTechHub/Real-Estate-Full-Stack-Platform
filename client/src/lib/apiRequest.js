import axios from "axios";

const apiRequest = axios.create({
    // baseURL: "http://localhost:8800/api",
        baseURL: "https://real-estate-full-stack-platform-1.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;


