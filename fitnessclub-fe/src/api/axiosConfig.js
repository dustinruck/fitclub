// axiosConfig.js // src/api/axiosConfig.js //

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('API call failed: ', error.response || error.message);
    alert('An error occurred while fetching data! API!');
    return Promise.reject(error);
  }
);

export default axiosInstance;
