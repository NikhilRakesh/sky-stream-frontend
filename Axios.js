
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://skystreamservers.com:3000/api',
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;