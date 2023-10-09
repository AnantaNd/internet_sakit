import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL || "http://localhost:5000/",
  timeout: parseInt(process.env.VUE_APP_TIMEOUT) || 5000,
});

export default instance;
