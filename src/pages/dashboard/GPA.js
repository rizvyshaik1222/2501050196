import React, { useState } from 'react';
import '../../styles/Dashboard.css';

function GPA() {
  const [courses, setCourses] = useState([
    { subject: 'Mathematics', creditHours: 4, grade: 'A', gradePoint: 4.0 },
    { subject: 'Physics', creditHours: 4, grade: 'A', gradePoint: 4.0 },
    { subject: 'Chemistry', creditHours: 3, grade: 'B+', gradePoint: 3.3 },
    { subject: 'English', creditHours: 3, grade: 'A+', gradePoint: 4.0 },
  ]);

  const gradeMap = {
    'A+': 4.0,
    'A': 4.0,
    'A-': 3.7,
    'B+': 3.3,
    'B': 3.0,
    'B-': 2.7,
    'C+': 2.3,
    'C': 2.0,
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalHours = 0;

    courses.forEach((course) => {
      totalPoints += course.creditHours * course.gradePoint;
      totalHours += course.creditHours;
    });

    return (totalPoints / totalHours).toFixed(2);
  };

  const handleGradeChange = (index, newGrade) => {
    const updatedCourses = [...courses];
    updatedCourses[index].grade = newGrade;
    updatedCourses[index].gradePoint = gradeMap[newGrade];
    setCourses(updatedCourses);
  };

  return (
    <div>
      <div style={{ marginBottom: '30px' }}>
        <div className="campus-stat-card">
          <div className="stat-label">Current GPA</div>
          <div className="stat-value" style={{ color: 'var(--primary-color)' }}>
            {calculateGPA()}
          </div>
        </div>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Credit Hours</th>
              <th>Grade</th>
              <th>Grade Point</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.subject}</td>
                <td>{course.creditHours}</td>
                <td>
                  <select
                    value={course.grade}
                    onChange={(e) => handleGradeChange(index, e.target.value)}
                    style={{
                      padding: '4px 8px',
                      borderRadius: '4px',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    {Object.keys(gradeMap).map((grade) => (
                      <option key={grade} value={grade}>
                        {grade}
                      </option>
                    ))}
                  </select>
                </td>
                <td>{course.gradePoint.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '20px' }}>
        <p style={{ color: 'var(--text-secondary)' }}>
          <strong>Note:</strong> The GPA calculator is for reference purposes only. Official GPA will be provided by the registrar's office.
        </p>
      </div>
    </div>
  );
}

export default GPA;
