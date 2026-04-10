import axios from './axios.js';

const itemApi = {
  getItems: () => axios.get('/api/items'),
  getItem: (id) => axios.get(`/api/items/${id}`),
  createItem: (data) => axios.post('/api/items', data),
  updateItem: (id, data) => axios.put(`/api/items/${id}`, data),
  deleteItem: (id) => axios.delete(`/api/items/${id}`),
  getStats: () => axios.get('/api/items/stats'),
};

export default itemApi;

