import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

const Card = ({ title, route, backgroundImage }) => {
  const navigate = useNavigate();

  return (
    <div
      className="airport-card"
      onClick={() => navigate(route)}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
