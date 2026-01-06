import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    initializeDemoAccount();
    setIsInitialized(true);
  }, []);

  const initializeDemoAccount = () => {
    if (!localStorage.getItem('users')) {
      const users = {
        'student': { 
          password: '123456', 
          email: 'student@example.com', 
          name: 'Student' 
        }
      };
      localStorage.setItem('users', JSON.stringify(users));
    }
  };

  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route 
          path="/dashboard/*" 
          element={<ProtectedRoute><Dashboard /></ProtectedRoute>} 
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
