import React from 'react';
import '../../styles/Dashboard.css';

function Grades() {
  const gradesData = [
    { course: 'Mathematics', score: 85, grade: 'A', credit: 4.0 },
    { course: 'Physics', score: 88, grade: 'A', credit: 4.0 },
    { course: 'Chemistry', score: 82, grade: 'B+', credit: 3.5 },
    { course: 'English Literature', score: 90, grade: 'A+', credit: 4.0 },
    { course: 'Data Structures', score: 87, grade: 'A', credit: 4.0 },
  ];

  return (
    <div>
      <h2 className="section-title">
        <span className="section-icon">⭐</span>
        Marks & Grades
      </h2>
      <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Score</th>
            <th>Grade</th>
            <th>Credit Hours</th>
          </tr>
        </thead>
        <tbody>
          {gradesData.map((item, index) => (
            <tr key={index}>
              <td>{item.course}</td>
              <td>{item.score}</td>
              <td><span className="badge active">{item.grade}</span></td>
              <td>{item.credit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Grades;
