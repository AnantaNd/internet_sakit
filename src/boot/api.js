import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL ,
	// || "http://192.168.189.12:5000/",
  timeout: parseInt(process.env.VUE_APP_TIMEOUT) || 5000,
});

export default instance;
