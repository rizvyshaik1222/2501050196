import React, { useState } from 'react';
import '../../styles/Dashboard.css';

function Profile() {
  const currentUser = localStorage.getItem('currentUser');
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  const userData = users[currentUser] || { name: 'User', email: 'user@example.com' };

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: userData.name,
    email: userData.email,
    phone: '+1 (555) 123-4567',
    rollNumber: 'STU-2023-001',
    department: 'Computer Science',
    semester: '3rd',
    dob: '15-01-2003',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    const updatedUsers = { ...users };
    updatedUsers[currentUser] = {
      ...updatedUsers[currentUser],
      name: formData.name,
      email: formData.email,
    };
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setEditMode(false);
    alert('Profile updated successfully!');
  };

  return (
    <div>
      <div className="profile-header">
        <div className="profile-avatar">👤</div>
        <div className="profile-info">
          <h1>{formData.name}</h1>
          <p>{formData.rollNumber}</p>
          <p>{formData.department}</p>
        </div>
      </div>

      {!editMode ? (
        <div className="content-card">
          <button className="btn" onClick={() => setEditMode(true)}>
            Edit Profile
          </button>
          <div style={{ marginTop: '20px' }}>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
            <p><strong>Roll Number:</strong> {formData.rollNumber}</p>
            <p><strong>Department:</strong> {formData.department}</p>
            <p><strong>Semester:</strong> {formData.semester}</p>
            <p><strong>Date of Birth:</strong> {formData.dob}</p>
          </div>
        </div>
      ) : (
        <div className="content-card">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="department">Department</label>
            <input
              id="department"
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
            />
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="btn" onClick={handleSave}>
              Save Changes
            </button>
            <button className="btn btn-secondary" onClick={() => setEditMode(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
