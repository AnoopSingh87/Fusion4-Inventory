// src/App.js
import React, { Suspense, lazy,  } from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'; // Assuming Navbar is not async loaded
import Footer from './Components/Footer/Footer'; // Import Footer component
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import { DataProvider } from './context/DataContext'; // Context Provider for centralized state management
import {  AuthProvider } from './context/AuthContext'; // Import Auth context
import './App.css';

// Lazy loading components to optimize performance by code splitting
const Home = lazy(() => import('./pages/Home/Home'));
const Products = lazy(() => import('./pages/Products/Products'));
const Suppliers = lazy(() => import('./pages/Suppliers/Suppliers'));
const Customers = lazy(() => import('./pages/Customers/Customers'));
const UserProfilePage = lazy(() => import('./pages/Profile/Profile'));
const Reports = lazy(() => import('./pages/Reports/Reports'));
const SettingPage = lazy(() => import('./pages/Settings/Settings'));
const DashboardPage = lazy(() => import('./Components/Dashboard/Dashboardpage')); // Ensure correct path
const LoginPage = lazy(() => import('./Components/Auth/Login')); // Login page
const RegisterPage = lazy(() => import('./Components/Auth/Register')); // Register page

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <DataProvider>
          <div id="root">
            <Navbar />
            <div className="app-content">
              {/* Use Suspense for fallback loading components */}
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/suppliers" element={<Suppliers />} />
                  <Route path="/customers" element={<Customers />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/dashboard" element={<DashboardPage/>} />
                  <Route path="/profile" element={<UserProfilePage/>} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/settings" element={<SettingPage/>} />
                </Routes>
              </Suspense>
            </div>
            {/* Add the Footer here to ensure it's visible on every page */}
            <Footer />
          </div>
        </DataProvider>
      </AuthProvider>
    </Router>
  );
};

// PrivateRoute Component to protect routes


export default App;
