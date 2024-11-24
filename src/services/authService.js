// frontend/src/services/authService.js

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/'; // The base URL of your backend

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Login user
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}login`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Logout user
export const logoutUser = () => {
  localStorage.removeItem('user'); // Remove user token from local storage
};
