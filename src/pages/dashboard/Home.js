import React from 'react';
import '../../styles/Dashboard.css';

function Home() {
  return (
    <div>
      <div className="welcome-section">
        <h1>Welcome! 👋</h1>
        <p>Here's an overview of your student activities</p>
      </div>

      <div className="campus-stats-grid">
        <div className="campus-stat-card">
          <div className="stat-icon">✓</div>
          <div className="stat-label">Attendance</div>
          <div className="stat-value">92%</div>
        </div>
        <div className="campus-stat-card">
          <div className="stat-icon">⭐</div>
          <div className="stat-label">GPA</div>
          <div className="stat-value">3.8</div>
        </div>
        <div className="campus-stat-card">
          <div className="stat-icon">📚</div>
          <div className="stat-label">Courses</div>
          <div className="stat-value">5</div>
        </div>
        <div className="campus-stat-card">
          <div className="stat-icon">✏️</div>
          <div className="stat-label">Assignments</div>
          <div className="stat-value">3</div>
        </div>
      </div>

      <div className="fee-section">
        <div className="fee-header">
          <div>
            <div className="fee-title">
              <span className="fee-icon">💳</span>
              <h2>Fee Details & Payment</h2>
            </div>
            <p className="fee-subtitle">Your tuition and other fees at a glance.</p>
          </div>
          <button className="pay-online-btn">Pay Online →</button>
        </div>

        <div className="fee-cards-grid">
          <div className="fee-card">
            <h3 className="fee-card-title">Tuition Fee</h3>
            <p className="fee-amount">₹2,15,000</p>
            <span className="fee-badge paid">✓ Paid</span>
          </div>
          <div className="fee-card">
            <h3 className="fee-card-title">Library Fee</h3>
            <p className="fee-amount">₹2,450</p>
            <span className="fee-badge paid">✓ Paid</span>
          </div>
          <div className="fee-card">
            <h3 className="fee-card-title">Laboratory Fee</h3>
            <p className="fee-amount">₹10,600</p>
            <span className="fee-badge due">⚠ Due: Jan 15</span>
          </div>
          <div className="fee-card">
            <h3 className="fee-card-title">Student Activity Fee</h3>
            <p className="fee-amount">₹6,225</p>
            <span className="fee-badge paid">✓ Paid</span>
          </div>
        </div>

        <div className="fee-summary">
          <div className="fee-summary-item">
            <span className="fee-summary-label">Total Amount Due:</span>
            <span className="fee-summary-value due-amount">₹10,600</span>
          </div>
          <div className="fee-summary-item">
            <span className="fee-summary-label">Total Paid:</span>
            <span className="fee-summary-value paid-amount">₹2,23,675</span>
          </div>
        </div>
      </div>

      <p className="helper-text">
        Select an option from the menu to explore more details.
      </p>
    </div>
  );
}

export default Home;
