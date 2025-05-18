import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AirlineRelated.css';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import Card from '../../../Components/Card'; 
import addImage from '../../images/add.jpg';
// import findImage from '../images/add.jpg';
// import locationImage from '../images/add.jpg';
// import listImage from '../images/add.jpg';
// import removeImage from '../images/add.jpg';
// import updateImage from '../images/add.jpg';

// const AirlineRelated = () => {
//   const navigate = useNavigate();

//   return (
//     <>
//       <AdminNavbar />
//       <div className="airline-related-container">
//         <h1>Airline Management</h1>
//         <div className="airline-cards-container">
//           <Card
//                     title="Add Airline"
//                     route="/add-airline"
//                     backgroundImage={addImage}
//           />
//           <Card
//             title="Update Airline by ID"
//             onClick={() => navigate('/update-airline')}
//             backgroundImage={addImage} 
//           />
//           <Card
//             title="List All Airlines"
//             onClick={() => navigate('/list-airlines')}
//             backgroundImage={addImage} 
//           />
//           <Card
//             title="Delete Airline"
//             onClick={() => navigate('/delete-airline')}
//             backgroundImage={addImage}
//           />
//           <Card
//             title="Get Airline by ID"
//             onClick={() => navigate('/find-airline-id')}
//             backgroundImage={addImage} 
//           />
//         </div>
//       </div>
//     </>
//   );
// };
const AirlineRelated = () => {
  const navigate = useNavigate();

  return (
      <>
          <AdminNavbar />
          <div className="airline-related-container">
              <h1>Airline Management</h1>
              <div className="airline-cards-container">
                  <Card
                      title="Add Airline"
                      route="/add-airline"
                      backgroundImage={addImage}
                  />
                  <Card
                      title="Update Airline by ID"
                      route="/update-airline"
                      backgroundImage={addImage}
                  />
                  <Card
                      title="List All Airlines"
                      route="/list-airlines"
                      backgroundImage={addImage}
                  />
                  <Card
                      title="Delete Airline"
                      route="/delete-airline"
                      backgroundImage={addImage}
                  />
                  <Card
                      title="Get Airline by ID"
                      route="/find-airline-id"
                      backgroundImage={addImage}
                  />
              </div>
          </div>
      </>
  );
};

export default AirlineRelated;