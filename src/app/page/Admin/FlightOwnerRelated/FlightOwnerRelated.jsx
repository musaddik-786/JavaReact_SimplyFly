import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../AirlineRelated/AirlineRelated.css';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import Card from '../../../Components/Card'; 
import addImage from '../../images/add.jpg';


const FlightOwnerRelated = () => {
    const navigate = useNavigate();
  
    return (
        <>
            <AdminNavbar />
            <div className="airline-related-container">
                <h1>Flight-Owner Management</h1>
                <div className="airline-cards-container">
                    <Card
                        title="Add Flightowner"
                        route="/add-flightowner"
                        backgroundImage={addImage}
                    />
                    <Card
                        title="Find Flightowner"
                        route="/find-flightowner-by-username"
                        backgroundImage={addImage}
                    />
                    <Card
                        title="Update Flightowner"
                        route="/update-flightownerprofile"
                        backgroundImage={addImage}
                    />
                    <Card
                        title="List all Flightowner"
                        route="/list-all-flightowners "
                        backgroundImage={addImage}
                    />
                    <Card
                        title="Remove Flightowner"
                        route="/remove-flightowner-by-username"
                        backgroundImage={addImage}
                    />
                   <Card
                        title="Flightowner with airline"
                        route="/flight-owner-by-airline"
                        backgroundImage={addImage}
                    />



                </div>
            </div>
        </>
    );
  };
  
  export default FlightOwnerRelated;