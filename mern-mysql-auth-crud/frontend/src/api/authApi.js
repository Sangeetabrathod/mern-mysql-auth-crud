import axios from './axios.js';

const authApi = {
  register: (data) => axios.post('/api/auth/register', data),
  login: (data) => axios.post('/api/auth/login', data),
  getMe: () => axios.get('/api/auth/me'),
  forgotPassword: (email) => axios.post('/api/auth/forgot-password', { email }),
  resetPassword: (data) => axios.post('/api/auth/reset-password', data),
};

export default authApi;

