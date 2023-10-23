 
 import axios from 'axios';

 const axiosInstance = axios.create({
    baseURL: 'http://192.168.29.169:3000/api/',
    timeout: 5000, 
    headers: {
      'Content-Type': 'application/json',
    },
  });

  export default axiosInstance;