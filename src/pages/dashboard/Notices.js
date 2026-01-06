import React from 'react';
import '../../styles/Dashboard.css';

function Notices() {
  const noticesData = [
    { 
      title: 'Exam Schedule Released', 
      date: '5th January 2024', 
      content: 'Final examination schedule has been released. Please check your portal for detailed timetable.' 
    },
    { 
      title: 'Library Maintenance', 
      date: '3rd January 2024', 
      content: 'Library will be closed from 10th to 15th January for maintenance.' 
    },
    { 
      title: 'Semester Result Notification', 
      date: '28th December 2023', 
      content: 'Results for Fall semester will be published on 2nd January 2024.' 
    },
    { 
      title: 'Campus Closure Notice', 
      date: '20th December 2023', 
      content: 'Campus will be closed from 22nd December to 31st December for winter break.' 
    },
  ];

  return (
    <div>
      <h2 className="section-title">
        <span className="section-icon">🔔</span>
        Notices
      </h2>
      {noticesData.map((notice, index) => (
        <div key={index} className="content-card">
          <h3>{notice.title}</h3>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{notice.date}</p>
          <p>{notice.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Notices;
