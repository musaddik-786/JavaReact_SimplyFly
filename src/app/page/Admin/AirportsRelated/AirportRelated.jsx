import React from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import Card from '../../../Components/Card'; 
import './AirportRelated.css';

import addImage from '../../images/add.jpg';
import findImage from '../../images/add.jpg';
import locationImage from '../../images/add.jpg';
import listImage from '../../images/add.jpg';
import removeImage from '../../images/add.jpg';
import updateImage from '../../images/add.jpg';

const AirportRelated = () => {
  return (
    <>
      <AdminNavbar />
      <div className="airport-related-container">
        <h1>Airport Management</h1>
        <div className="airport-cards-container">
          <Card
            title="Add Airport"
            route="/add-airport"
            backgroundImage={addImage}
          />
          <Card
            title="Find Airport by IATA Code"
            route="/find-airport"
            backgroundImage={findImage}
          />
          <Card
            title="Find Airport by Location"
            route="/find-airport-location"
            backgroundImage={locationImage}
          />
          <Card
            title="List All Airports"
            route="/list-airports"
            backgroundImage={listImage}
          />
          <Card
            title="Remove Airport"
            route="/remove-airport"
            backgroundImage={removeImage}
          />
          <Card
            title="Update Airport"
            route="/update-airport"
            backgroundImage={updateImage}
          />
        </div>
      </div>
    </>
  );
};

export default AirportRelated;
