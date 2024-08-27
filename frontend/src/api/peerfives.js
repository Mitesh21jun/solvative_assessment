import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const createUser = (name) => {
  return axios.post(`${API_BASE_URL}/users`, { name });
};
export const getAllUsers = (name) => {
  return axios.get(`${API_BASE_URL}/users`, { name });
};

export const editUser = (id, name) => {
  return axios.put(`${API_BASE_URL}/users/${id}`, { name });
};

export const getUser = (id) => {
  return axios.get(`${API_BASE_URL}/users/${id}`);
};

export const createTransaction = (fromUserId, toUserId, points,) => {
  return axios.post(`${API_BASE_URL}/p5`, { fromUserId, toUserId, points });
};

export const getAllTransactions = () => {
  return axios.get(`${API_BASE_URL}/p5`);
};
export const getTransactionsById = (id) => {
  return axios.get(`${API_BASE_URL}/p5/${id}`);
};
export const getUserCredit = (id) => {
  return axios.get(`${API_BASE_URL}/p5/credit/${id}`);
};
export const getUserDebit = (id) => {
  return axios.get(`${API_BASE_URL}/p5/debit/${id}`);
};

export const deleteTransaction = (id) => {
  return axios.delete(`${API_BASE_URL}/p5/${id}`);
};
