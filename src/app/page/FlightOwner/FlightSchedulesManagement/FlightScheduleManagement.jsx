import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FlightScheduleManagement.css'; // Create a CSS file for styling
import FlightOwnerNavbar from '../Navbar/FlightOwnerNavbar';
import Card from '../../../Components/Card'; // Assuming you have a reusable Card component
import ScheduleFlight from '../../images/ScheduleFlight.avif';
import CancelFlight from '../../images/CancelFlight.avif';
import UpdateSchedule from '../../images/UpdateSchedule.jpeg';
import GetAllScheduledFlights from '../../images/GetAllScheduledFlights.webp';
import GetMyScheduledFlights from '../../images/GetMyScheduledFlights.webp';
import GetFlightsScheduledById from '../../images/GetFlightsScheduledById.webp';

const FlightScheduleManagement = () => {
  const navigate = useNavigate();

  return (
    <>
      <FlightOwnerNavbar />
      <div className="flight-schedule-management-container">
        <h1>Flight Schedule Management</h1>
        <div className="flight-schedule-cards-container">
          <Card
            title="Schedule Flight"
            route="/flightowner/schedule-flight"
            backgroundImage={ScheduleFlight}
          />
          <Card
            title="Cancel Flight"
            route="/flightowner/cancel-flight"
            backgroundImage={CancelFlight}
          />
          <Card
            title="Update Schedule"
            route="/flightowner/update-schedule"
            backgroundImage={UpdateSchedule}
          />
          <Card
            title="Get All Scheduled Flights"
            route="/flightowner/all-scheduled-flights"
            backgroundImage={GetAllScheduledFlights}
          />
          <Card
            title="Get My Scheduled Flights"
            route="/flightowner/flights-scheduled-by-me"
            backgroundImage={GetMyScheduledFlights}
          />
          <Card
            title="Get Flights Scheduled by ID"
            route="/flightowner/flights-scheduled-by-id"
            backgroundImage={GetFlightsScheduledById}
          />
        </div>
      </div>
    </>
  );
};

export default FlightScheduleManagement;
