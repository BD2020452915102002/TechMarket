//feature: apj.js
import axios from "axios";
require("dotenv").config();

export const url = process.env.SERVER;

export const setHeaders = () => {
  return {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };
};

const apiClient = axios.create({
  baseURL: url,
  timeout: 130000,
});

export const api = axios.create({
  baseURL: url,
});

export const loginUser = async (data) => {
  try {
    return await apiClient.post("/login", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const registerUser = async (data) => {
  try {
    return await apiClient.post("/register", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
