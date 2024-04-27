// axiosConfig.js // src/api/axiosConfig.js //

import axios from 'axios';

const BASE_URL = 'fsd09-fitclub-f1be9639ec86.herokuapp.com/api';


export default axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});

export const axiosJWT = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});

axios.interceptors.response.use(
  response => response,
  error => {
    console.error('API call failed: ', error.response || error.message);
    alert('An error occurred while fetching data! API!');
    return Promise.reject(error);
  }
);