import axios from "axios";

const instance = axios.create({
  baseURL: "https://messaging-app-backend-jjc8.onrender.com"
});

export default instance;
