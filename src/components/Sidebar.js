import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { icon: '📊', label: 'Dashboard', path: '/dashboard/home' },
    { icon: '✓', label: 'Attendance', path: '/dashboard/attendance' },
    { icon: '⭐', label: 'Marks', path: '/dashboard/grades' },
    { icon: '📅', label: 'Timetable', path: '/dashboard/courses' },
    { icon: '📅', label: 'Events', path: '/dashboard/events' },
    { icon: '✏️', label: 'Assignments', path: '/dashboard/assignments' },
    { icon: '🏆', label: 'Achievements', path: '/dashboard/achievements' },
    { icon: '🔔', label: 'Notices', path: '/dashboard/notices' },
    { icon: '👨‍🏫', label: 'Faculty', path: '/dashboard/faculty' },
    { icon: '👤', label: 'Profile', path: '/dashboard/profile' },
    { icon: '🧮', label: 'GPA Calculator', path: '/dashboard/gpa' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <aside className="campus-sidebar">
      <div className="campus-brand">
        <div className="brand-icon">🎓</div>
        <h1 className="brand-name">Student Connect</h1>
      </div>

      <nav className="campus-nav">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`campus-nav-item ${
              location.pathname === item.path ? 'active' : ''
            }`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-text">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="campus-sidebar-footer">
        <button className="campus-nav-item" onClick={handleLogout}>
          <span className="nav-icon">🚪</span>
          <span className="nav-text">Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
