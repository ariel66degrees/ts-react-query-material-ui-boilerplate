// src/api/axiosConfig.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://60c394cb2df2cb00178ab7f2.mockapi.io/api/v1", // MockAPI endpoint
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
