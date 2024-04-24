//feature: apj.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 130000,
});

// apiClient.interceptors.request.use(
//   (config) => {
//     const userDetails = localStorage.getItem("user");

//     if (userDetails) {
//       const token = JSON.parse(userDetails).token;
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );

export const login = async (data) => {
  try {
    return await apiClient.post("/login", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post("/register", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {

  }
})

// export const url = "http://localhost:5000/api";

// export const setHeaders = () => {
//   const headers = {
//     headers: {
//       "x-auth-token": localStorage.getItem("token"),
//     },
//   };

//   return headers;
// };
//...
// await axios.get(`${url}/user`, setHeaders());
