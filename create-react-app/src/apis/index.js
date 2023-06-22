import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

API.auth = {
  login: data => API.post('/auth/login', data),
  register: data => API.post('/auth/register', data),
}

export default API;
