import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: parseInt(process.env.VUE_APP_TIMEOUT) || 5000,
});

export default instance;
