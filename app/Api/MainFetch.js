import axios from 'axios';

// Create an Axios instance
export const api = axios.create({
  baseURL: 'https://project-management-backend-rqh3.onrender.com/api',
//   timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

