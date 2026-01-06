import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

function Header({ title }) {
  const navigate = useNavigate();
  const currentUser = localStorage.getItem('currentUser');
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  const userData = users[currentUser] || { name: 'User' };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <header className="campus-header">
      <h1 className="page-title">📊 Dashboard</h1>
      <div className="header-actions">
        <button 
          className="notification-btn" 
          onClick={() => navigate('/dashboard/notices')}
          title="Notifications"
        >
          🔔
          <span className="notification-badge">1</span>
        </button>
        <div 
          className="user-profile" 
          onClick={() => navigate('/dashboard/profile')}
        >
          <span className="user-avatar">👤</span>
          <span className="user-name" id="headerUserName">
            {userData.name}
          </span>
        </div>
        <button className="logout-btn-desktop" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
