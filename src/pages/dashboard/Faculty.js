import React from 'react';
import '../../styles/Dashboard.css';

function Faculty() {
  const facultyData = [
    { name: 'Dr. John Smith', subject: 'Mathematics', email: 'john.smith@university.edu', office: 'Room 401' },
    { name: 'Prof. Sarah Johnson', subject: 'Physics', email: 'sarah.johnson@university.edu', office: 'Room 402' },
    { name: 'Dr. Michael Brown', subject: 'Chemistry', email: 'michael.brown@university.edu', office: 'Room 403' },
    { name: 'Prof. Emily Davis', subject: 'English Literature', email: 'emily.davis@university.edu', office: 'Room 404' },
    { name: 'Dr. Robert Wilson', subject: 'Computer Science', email: 'robert.wilson@university.edu', office: 'Room 405' },
  ];

  return (
    <div>
      <h2 className="section-title">
        <span className="section-icon">👨‍🏫</span>
        Faculty
      </h2>
      <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Email</th>
            <th>Office</th>
          </tr>
        </thead>
        <tbody>
          {facultyData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.subject}</td>
              <td>{item.email}</td>
              <td>{item.office}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Faculty;
