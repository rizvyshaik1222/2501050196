import React from 'react';
import '../../styles/Dashboard.css';

function Assignments() {
  const assignmentsData = [
    { subject: 'Mathematics', title: 'Calculus Problem Set', dueDate: '15th Jan 2024', status: 'Pending' },
    { subject: 'Physics', title: 'Mechanics Lab Report', dueDate: '10th Jan 2024', status: 'Submitted' },
    { subject: 'Chemistry', title: 'Organic Chemistry Essay', dueDate: '20th Jan 2024', status: 'Pending' },
    { subject: 'Data Structures', title: 'Algorithm Implementation', dueDate: '8th Jan 2024', status: 'Submitted' },
  ];

  return (
    <div>
      <h2 className="section-title">
        <span className="section-icon">✏️</span>
        Assignments
      </h2>
      <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Title</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {assignmentsData.map((item, index) => (
            <tr key={index}>
              <td>{item.subject}</td>
              <td>{item.title}</td>
              <td>{item.dueDate}</td>
              <td>
                <span className={`badge ${item.status === 'Submitted' ? 'active' : 'warning'}`}>
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

export default Assignments;
