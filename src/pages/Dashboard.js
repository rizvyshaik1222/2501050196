import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Home from './dashboard/Home';
import Attendance from './dashboard/Attendance';
import Grades from './dashboard/Grades';
import Courses from './dashboard/Courses';
import Events from './dashboard/Events';
import Assignments from './dashboard/Assignments';
import Achievements from './dashboard/Achievements';
import Notices from './dashboard/Notices';
import Faculty from './dashboard/Faculty';
import Profile from './dashboard/Profile';
import GPA from './dashboard/GPA';
import '../styles/Dashboard.css';

function Dashboard() {
  const getPageTitle = () => {
    const path = window.location.pathname.split('/').pop();
    const titles = {
      home: '📊 Dashboard',
      attendance: '📋 Attendance Record',
      grades: '⭐ Marks & Grades',
      courses: '📅 Timetable',
      events: '📅 Events',
      assignments: '✏️ Assignments',
      achievements: '🏆 Achievements',
      notices: '🔔 Notices',
      faculty: '👨‍🏫 Faculty',
      profile: '👤 Profile',
      gpa: '🧮 GPA Calculator',
    };
    return titles[path] || 'Dashboard';
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="campus-main">
        <Header title={getPageTitle()} />
        <section className="campus-content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/grades" element={<Grades />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/events" element={<Events />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/gpa" element={<GPA />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
