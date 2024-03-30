 
 import axios from 'axios';

 const axiosInstance = axios.create({
    baseURL: 'http://154.26.136.90:3000/api',
    timeout: 5000, 
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  export default axiosInstance;