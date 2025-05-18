// AdminCard.js
import React from 'react';
import './DashCard.css'; // Create a separate CSS file for styling

const DashCard = ({ image, title, onClick }) => {
  return (
    <div className="admin-card" onClick={onClick}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default DashCard;
