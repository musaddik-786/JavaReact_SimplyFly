import React, { useState } from 'react';
import HomePage from './app/page/Home/HomePage.jsx';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import AboutUs from './app/page/AboutUs.jsx';
import ContactUs from './app/page/ContactUs.jsx';
import Footer from './app/page/Footer/Footer.jsx';
import UserLoginForm from './app/page/Login/UserLoginForm.jsx';
import UserRegister from './app/page/Userregister/UserRegister.jsx';
import 'semantic-ui-css/semantic.min.css';
import SignInCustomer from './app/page/SignIn/SignIncustomer'; // Separate components for roles
import SignInAdmin from './app/page/SignIn/SignInadmin.jsx';
import SignInFlightOwner from './app/page/SignIn/SignInFlightowner';
// import SignIn from './app/page/SignIn/SignIn';
import FindAirportByLocation from './app/page/Admin/AirportsRelated/FindAirportByLocation.jsx';
import FindAirport from './app/page/Admin/AirportsRelated/FindAirport.jsx';
import AirportRelated from './app/page/Admin/AirportsRelated/AirportRelated.jsx';
import AddAirport from './app/page/Admin/AirportsRelated/AddAirport.jsx';
import SignIn from './app/page/SignIn/SignIn.jsx';
import ProtectedRoute from './app/page/ProtectedRoute/ProtectedRoute.jsx';
import ListAirports from './app/page/Admin/AirportsRelated/ListAirports.jsx';
import RemoveAirports from './app/page/Admin/AirportsRelated/RemoveAirport.jsx';
import UpdateAirport from './app/page/Admin/AirportsRelated/UpdateAirport.jsx';
import FlightResults from './app/page/Home/FlightResults.jsx';
import SeatSelection from './app/page/Home/SeatSelection.jsx';
import BookingForm from './app/page/Home/BookingForm.jsx';
import BookingSummary from './app/page/Home/BookingSummary.jsx';
import { BookingProvider } from './app/Context/BookingContext.js';
// import FlightOwnerDashboard from './app/page/FlightOwnerDasboard/FlightOwnerDashboard';
import UpdateFlightOwnerProfile from './app/page/FlightOwner/Updateprofile/UpdateFlightownerProfile';
import GetAirportsInfo from './app/page/FlightOwner/Airports Information/GetAirportsInfo';
import GetAirportByCode from './app/page/FlightOwner/Airports Information/GetAirportByCode.jsx';
import GetAirportByLocation from './app/page/FlightOwner/Airports Information/GetAirportByLocation';
import GetAllAirports from './app/page/FlightOwner/Airports Information/GetAllAirports';
import FlightsManagement from './app/page/FlightOwner/FlightsManagement/FlightsManagement';
import GetAllFlights from './app/page/FlightOwner/FlightsManagement/GetAllFlights';
import GetFlightsByUsername from './app/page/FlightOwner/FlightsManagement/GetFlightsByUsername';
import GetFlightsByAirlineId from './app/page/FlightOwner/FlightsManagement/GetFlightsByAirlineId';
import AddFlight from './app/page/FlightOwner/FlightsManagement/AddFlight';
import UpdateFlight from './app/page/FlightOwner/FlightsManagement/UpdateFlight';
import RemoveFlights from './app/page/FlightOwner/FlightsManagement/RemoveFlight';
import FlightScheduleManagement from './app/page/FlightOwner/FlightSchedulesManagement/FlightScheduleManagement';
import GetAllScheduledFlights from './app/page/FlightOwner/FlightSchedulesManagement/GetAllScheduledFlights';
import GetScheduledFlightsByUsername from './app/page/FlightOwner/FlightSchedulesManagement/GetSchdeuledFlightsByUsername';
import GetFlightsScheduledById from './app/page/FlightOwner/FlightSchedulesManagement/GetFlightScheduledById';
import ScheduleFlight from './app/page/FlightOwner/FlightSchedulesManagement/ScheduleFlight';
import CancelFlightSchedule from './app/page/FlightOwner/FlightSchedulesManagement/CancelFlightSchedule';
import UpdateSchedule from './app/page/FlightOwner/FlightSchedulesManagement/UpdateSchedule';
import FlightOwnerDashboard from './app/page/FlightOwner/Dashboard/FlightOwnerDashboard.jsx';
import AdminDashboard from './app/page/Admin/Dashboard/AdminDashboard.jsx';
import GetAllCustomers from './app/page/Admin/Customers/GetAllCustomers.jsx';
import GetAllBookings from './app/page/Admin/Bookings/GetallBookings.jsx';
import AirlineRelated from './app/page/Admin/AirlineRelated/AirlineRelated.jsx';
import AddAirline from './app/page/Admin/AirlineRelated/AddAirline.jsx';
import ListAirlines from './app/page/Admin/AirlineRelated/ListAirline.jsx';
import RemoveAirlines from './app/page/Admin/AirlineRelated/RemoveAirline.jsx';
import FindAirline from './app/page/Admin/AirlineRelated/FindAirline.jsx';
import UpdateAirline from './app/page/Admin/AirlineRelated/UpdateAirline.jsx';
import FlightOwnerRelated from './app/page/Admin/FlightOwnerRelated/FlightOwnerRelated.jsx';
import AddFlightOwner from './app/page/Admin/FlightOwnerRelated/AddFlightOnwer.jsx';
import ListFlightOwners from './app/page/Admin/FlightOwnerRelated/ListFlightOwner.jsx';
import RemoveFlightOwner from './app/page/Admin/FlightOwnerRelated/RemoveFlightOwner.jsx';
import FindFlightOwner from './app/page/Admin/FlightOwnerRelated/FindFlightOwner.jsx';
import UpdateFlightOwner from './app/page/Admin/FlightOwnerRelated/UpdateFlightOwner.jsx';



const App = () => {
  

  return (

    <BookingProvider>

    <Router>
      
      <Routes>
        <Route path="/" element={<HomePage />} />


        <Route path="/list-airports" element={<ListAirports />} />
        {/* <Route path="/remove-airport" element={<RemoveAirports/>} /> */}
        
        <Route path="/flight-results" element={<FlightResults />} />


        <Route path="/seatselection" element={<SeatSelection />} />


        <Route path="/booking-confirmation" element={<BookingForm />} />


        <Route path="/booking-summary" element={<BookingSummary />} />


        <Route
    path="/remove-airport"
    element={
        <ProtectedRoute allowedRoles={['[Admin]']}>
           <RemoveAirports/>
        </ProtectedRoute>
    }
/>


        {/* <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} /> */}
        <Route path="/user/login" element={<SignIn />} />
        <Route path="/user/register" element={<UserRegister />} />
     
        <Route path="/SignInCustomer" element={<SignInCustomer />} />
        <Route path="/SignInAdmin" element={<SignInAdmin />} />
        <Route path="/SignInFlightOwner" element={<SignInFlightOwner />} />
       
<Route path="/SignInFlightOwner" element={<SignInFlightOwner />} />


        <Route
    path="/admin"
    element={
        <ProtectedRoute allowedRoles={['[Admin]']}>
            <AdminDashboard />
        </ProtectedRoute>
    }
/>

        <Route path="/airport-related" element={<AirportRelated />} />
        <Route path="/find-airport" element={<FindAirport />} />
        <Route path="/find-airport-location" element={<FindAirportByLocation/>} />
        <Route path="/airline-related" element={<AirlineRelated />} />
        


        {/* <Route path="/add-airport" element={<AddAirport />} /> */}
      

        <Route path="/add-airport" 
        element={
        <ProtectedRoute allowedRoles={['[Admin]']}>
            <AddAirport />
        </ProtectedRoute>
    }/>

<Route path="/update-airport" element={<UpdateAirport />} />




<Route path="/add-airline" 
        element={
        <ProtectedRoute allowedRoles={['[Admin]']}>
            <AddAirline />
        </ProtectedRoute>
    }/>


    
<Route path="/list-airlines" 
        element={
        <ProtectedRoute allowedRoles={['[Admin]']}>
            <ListAirlines />
        </ProtectedRoute>
    }/>


<Route path="/delete-airline" 
        element={
        <ProtectedRoute allowedRoles={['[Admin]']}>
            <RemoveAirlines />
        </ProtectedRoute>
    }/>

<Route
    path="/find-airline-id"
    element={
        <ProtectedRoute allowedRoles={['[Admin]']}>
            <FindAirline />
        </ProtectedRoute>
    }
/>


<Route
    path="/update-airline"
    element={
        <ProtectedRoute allowedRoles={['[Admin]']}>
            <UpdateAirline />
        </ProtectedRoute>
    }
/>


<Route
    path="/flight-owner-related"
    element={
        <ProtectedRoute allowedRoles={['[Admin]']}>
            <FlightOwnerRelated />
        </ProtectedRoute>
    }
/>

<Route
    path="/add-flightOwner"
    element={
        <ProtectedRoute allowedRoles={['[Admin]']}>
            <AddFlightOwner />
        </ProtectedRoute>
    }
/>

<Route
    path="/list-all-flightowners"
    element={
        <ProtectedRoute allowedRoles={['[Admin]']}>
            <ListFlightOwners />
        </ProtectedRoute>
    }
/>

<Route
    path="/remove-flightowner-by-username"
    element={
        <ProtectedRoute allowedRoles={['[Admin]']}>
            <RemoveFlightOwner />
        </ProtectedRoute>
    }
/>


<Route
    path="/update-flightownerprofile"
    element={
        <ProtectedRoute allowedRoles={['[Admin]']}>
            <UpdateFlightOwner />
        </ProtectedRoute>
    }
/>



<Route
    path="/flight-owner-by-airline"
    element={
        <ProtectedRoute allowedRoles={['[Admin]']}>
            <FindFlightOwner/>
        </ProtectedRoute>
    }
/>


<Route
    path="/get-bookings"
    element={
        <ProtectedRoute allowedRoles={['[Admin]']}>
            <GetAllBookings/>
        </ProtectedRoute>
    }
/>

<Route
    path="/get-customers"
    element={
        <ProtectedRoute allowedRoles={['[Admin]']}>
            <GetAllCustomers/>
        </ProtectedRoute>
    }
/>










<Route
          path="/flight-owner"
          element={
            <ProtectedRoute allowedRoles={["[FlightOwner]"]}>
              <FlightOwnerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/update-flightownerprofile/:username" // Update this path
          element={
            <ProtectedRoute allowedRoles={["[FlightOwner]"]}>
              <UpdateFlightOwnerProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/get-airports"
          element={
            <ProtectedRoute allowedRoles={["[FlightOwner]"]}>
              <GetAirportsInfo />
            </ProtectedRoute>
          }
        />

        <Route
          path="/flightowner/find-airport-code"
          element={
            <ProtectedRoute allowedRoles={["[FlightOwner]"]}>
              <GetAirportByCode />
            </ProtectedRoute>
          }
        />


        <Route 
          path = "/flightowner/find-airport-location"
          element = {
            <ProtectedRoute allowedRoles={["[FlightOwner]"]}>
              <GetAirportByLocation />
            </ProtectedRoute>
          }
        />

<Route 
          path = "/flightowner/list-all-airports"
          element = {
            <ProtectedRoute allowedRoles={["[FlightOwner]"]}>
              <GetAllAirports />
            </ProtectedRoute>
          }
        />

<Route 
          path = "/flights-management"
          element = {
            <ProtectedRoute allowedRoles={["[FlightOwner]"]}>
              <FlightsManagement/>
            </ProtectedRoute>
          }
        />


<Route 
          path = "/flightowner/all-flights"
          element = {
            <ProtectedRoute allowedRoles={["[FlightOwner]"]}>
              <GetAllFlights/>
            </ProtectedRoute>
          }
        />

<Route 
          path = "/flightowner/flights-by-owner"
          element = {
            <ProtectedRoute allowedRoles={["[FlightOwner]"]}>
              <GetFlightsByUsername/>
            </ProtectedRoute>
          }
        />

<Route 
          path = "/flightowner/flights-by-airline"
          element = {
            <ProtectedRoute allowedRoles={["[FlightOwner]"]}>
              <GetFlightsByAirlineId/>
            </ProtectedRoute>
          }
        />


<Route 
          path = "/flightowner/add-flight"
          element = {
            <ProtectedRoute allowedRoles={["[FlightOwner]"]}>
              <AddFlight/>
            </ProtectedRoute>
          }
        />





<Route 
          path = "/flightowner/update-flight"
          element = {
            <ProtectedRoute allowedRoles={["[FlightOwner]"]}>
              <UpdateFlight/>
            </ProtectedRoute>
          }
        />

<Route 
          path = "/flightowner/remove-flight"
          element = {
            <ProtectedRoute allowedRoles={["[FlightOwner]"]}>
              <RemoveFlights/>
            </ProtectedRoute>
          }
        />


<Route 
          path = "/flight-schedules-management"
          element = {
            <ProtectedRoute allowedRoles={["[FlightOwner]"]}>
              <FlightScheduleManagement />
            </ProtectedRoute>
          }
        />


<Route 
          path = "/flightowner/all-scheduled-flights"
          element = {
            <ProtectedRoute allowedRoles={["[FlightOwner]"]}>
              <GetAllScheduledFlights />
            </ProtectedRoute>
          }
        />


<Route 
          path = "/flightowner/flights-scheduled-by-me"
          element = {
            <ProtectedRoute allowedRoles={["[FlightOwner]"]}>
              <GetScheduledFlightsByUsername />
            </ProtectedRoute>
          }
        />

<Route 
          path = "/flightowner/flights-scheduled-by-id"
          element = {
            <ProtectedRoute allowedRoles={["[FlightOwner]"]}>
              <GetFlightsScheduledById />
            </ProtectedRoute>
          }
        />

<Route 
          path = "/flightowner/schedule-flight"
          element = {
            <ProtectedRoute allowedRoles={["[FlightOwner]"]}>
              <ScheduleFlight/>
            </ProtectedRoute>
          }
        />


        
<Route 
          path = "/flightowner/cancel-flight"
          element = {
            <ProtectedRoute allowedRoles={["[FlightOwner]"]}>
              <CancelFlightSchedule />
            </ProtectedRoute>
          }
        />



<Route 
          path = "/flightowner/update-schedule"
          element = {
            <ProtectedRoute allowedRoles={["[FlightOwner]"]}>
              <UpdateSchedule />
            </ProtectedRoute>
          }
        />






      </Routes>
        <Footer />
    </Router>
    </BookingProvider>

  );
};

export default App;
