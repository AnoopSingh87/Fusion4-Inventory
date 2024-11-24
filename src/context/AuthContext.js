// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create Auth Context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username, password) => {
    // Implement login logic (e.g., API call)
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Implement logout logic (e.g., API call)
    setIsAuthenticated(false);
  };

  // Optionally, check for existing sessions on component mount
  useEffect(() => {
    // Check for saved authentication status (e.g., from localStorage)
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
