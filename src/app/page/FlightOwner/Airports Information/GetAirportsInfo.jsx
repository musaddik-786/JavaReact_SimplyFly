import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GetAirportsInfo.css';
import FlightOwnerNavbar from '../Navbar/FlightOwnerNavbar';
import Card from '../../../Components/Card'; // Assuming you have a reusable Card component
import codeimg from '../../images/fFindAirportByCode.jpg'; // Add an image for airport-related cards
import airportImage from '../../images/FindAirportByLocation.avif';
import listallairorts from '../../images/ListAllAirports.avif'

const GetAirportsInfo = () => {
  const navigate = useNavigate();

  return (
    <>
      <FlightOwnerNavbar />
      <div className="get-airports-info-container">
        <h1>Airport Information</h1>
        <div className="airport-cards-container">
          <Card
            title="Find Airport by Code"
            route="/flightowner/find-airport-code"
            backgroundImage={airportImage}
          />
          <Card
            title="Find Airport by Location"
            route="/flightowner/find-airport-location"
            backgroundImage={codeimg}
          />
          <Card
            title="List All Airports"
            route="/flightowner/list-all-airports"
            backgroundImage={listallairorts}
          />
        </div>
      </div>
    </>
  );
};

export default GetAirportsInfo;
