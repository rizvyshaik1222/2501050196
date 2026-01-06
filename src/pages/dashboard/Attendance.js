import React from 'react';
import '../../styles/Dashboard.css';

function Attendance() {
  const attendanceData = [
    { course: 'Mathematics', present: 32, total: 35, percentage: 91, status: 'Good' },
    { course: 'Physics', present: 28, total: 30, percentage: 93, status: 'Good' },
    { course: 'Chemistry', present: 30, total: 33, percentage: 91, status: 'Good' },
    { course: 'English Literature', present: 34, total: 36, percentage: 94, status: 'Excellent' },
    { course: 'Data Structures', present: 29, total: 32, percentage: 91, status: 'Good' },
  ];

  return (
    <div>
      <h2 className="section-title">
        <span className="section-icon">📋</span>
        Attendance Record
      </h2>
      <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Present</th>
            <th>Total Classes</th>
            <th>Percentage</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((item, index) => (
            <tr key={index}>
              <td>{item.course}</td>
              <td>{item.present}</td>
              <td>{item.total}</td>
              <td>{item.percentage}%</td>
              <td>
                <span className={`badge ${item.status === 'Excellent' ? 'active' : 'active'}`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Attendance;
