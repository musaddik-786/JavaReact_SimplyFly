import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FlightManagement.css'; // Create a CSS file for styling
import FlightOwnerNavbar from '../Navbar/FlightOwnerNavbar';
import Card from '../../../Components/Card'; // Assuming you have a reusable Card component
import flightImage from '../../images/AddNewFlight.avif'; // Add an image for flight-related cards
import UpdateFlight from '../../images/UpdateFlight.avif'; // Add an image for flight-related cards
import GetAllFlights from '../../images/GetAllFlights.avif'; // Add an image for flight-related cards
import GetMyFlights from '../../images/GetMyFlights.avif'; // Add an image for flight-related cards
import GetFlightsByAirline from '../../images/GetFlightsByAirline.avif';
import RemoveFlight from '../../images/RemoveFlight.avif';


const FlightsManagement = () => {
  const navigate = useNavigate();

  return (
    <>
      <FlightOwnerNavbar />
      <div className="flights-management-container">
        <h1>Flights Management</h1>
        <div className="flights-cards-container">
          <Card
            title="Add New Flight"
            route="/flightowner/add-flight"
            backgroundImage={flightImage}
          />
          <Card
            title="Update Flight"
            route="/flightowner/update-flight"
            backgroundImage={UpdateFlight}
          />
          <Card
            title="Get All Flights"
            route="/flightowner/all-flights"
            backgroundImage={GetAllFlights}
          />
          <Card
            title="Get My Flights"
            route="/flightowner/flights-by-owner"
            backgroundImage={GetMyFlights}
          />
          <Card
            title="Get Flights by Airline"
            route="/flightowner/flights-by-airline"
            backgroundImage={GetFlightsByAirline}
          />
          <Card
            title="Remove a Flight"
            route="/flightowner/remove-flight"
            backgroundImage={RemoveFlight}
          />
        </div>
      </div>
    </>
  );
};

export default FlightsManagement;
