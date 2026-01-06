import React from 'react';
import '../../styles/Dashboard.css';

function Events() {
  const eventsData = [
    { event: 'Annual Technical Fest', date: '15th March 2024', location: 'Main Campus' },
    { event: 'Cultural Night', date: '20th April 2024', location: 'Auditorium' },
    { event: 'Sports Day', date: '5th May 2024', location: 'Sports Ground' },
    { event: 'Graduation Ceremony', date: '25th May 2024', location: 'Main Hall' },
  ];

  return (
    <div>
      <h2 className="section-title">
        <span className="section-icon">🎉</span>
        Events
      </h2>
      <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Event</th>
            <th>Date</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {eventsData.map((item, index) => (
            <tr key={index}>
              <td>{item.event}</td>
              <td>{item.date}</td>
              <td>{item.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Events;
