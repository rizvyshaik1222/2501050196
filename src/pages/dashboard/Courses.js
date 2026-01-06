import React from 'react';
import '../../styles/Dashboard.css';

function Courses() {
  const timetableData = [
    { day: 'Monday', time: '9:00 AM - 10:30 AM', course: 'Mathematics', room: '101' },
    { day: 'Monday', time: '11:00 AM - 12:30 PM', course: 'Physics', room: '205' },
    { day: 'Tuesday', time: '9:00 AM - 10:30 AM', course: 'Chemistry', room: '301' },
    { day: 'Tuesday', time: '1:00 PM - 2:30 PM', course: 'English Literature', room: '102' },
    { day: 'Wednesday', time: '9:00 AM - 10:30 AM', course: 'Data Structures', room: 'Lab 1' },
    { day: 'Thursday', time: '10:00 AM - 11:30 AM', course: 'Mathematics', room: '101' },
  ];

  return (
    <div>
      <h2 className="section-title">
        <span className="section-icon">📅</span>
        Timetable
      </h2>
      <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Course</th>
            <th>Room</th>
          </tr>
        </thead>
        <tbody>
          {timetableData.map((item, index) => (
            <tr key={index}>
              <td>{item.day}</td>
              <td>{item.time}</td>
              <td>{item.course}</td>
              <td>{item.room}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Courses;
