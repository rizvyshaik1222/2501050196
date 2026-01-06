import React from 'react';
import '../../styles/Dashboard.css';

function Achievements() {
  const achievementsData = [
    { title: 'Dean\'s List', date: '2023', description: 'For maintaining GPA above 3.5' },
    { title: 'Best Science Project', date: '2023', description: 'Awarded for innovative research' },
    { title: 'Debate Competition Winner', date: '2022', description: 'Won intramural debate championship' },
    { title: 'Perfect Attendance', date: '2022', description: 'Achieved 100% attendance in a semester' },
  ];

  return (
    <div>
      <h2 className="section-title">
        <span className="section-icon">🏆</span>
        Achievements
      </h2>
      {achievementsData.map((item, index) => (
        <div key={index} className="content-card">
          <h3>{item.title}</h3>
          <p><strong>Year:</strong> {item.date}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Achievements;
