// import { useState } from "react";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const UserRegister = () => {
//   const navigate = useNavigate();

//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//     contact: "",
//     street: "",
//     city: "",
//     pincode: "",
//     roles: "",
//     age: "",
//     gender: "",
//   });

//   const handleUserInput = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const saveUser = (e) => {
//     e.preventDefault();

//     // Get existing users from local storage or initialize an empty array
//     const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

//     // Check if the user already exists
//     const userExists = existingUsers.find((u) => u.email === user.email);
//     if (userExists) {
//       toast.error("User already exists with this email!", {
//         position: "top-center",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//       return; // Stop further execution
//     }

//     // Add the new user to the array
//     existingUsers.push(user);
    
//     // Save updated user data back to local storage
//     localStorage.setItem("users", JSON.stringify(existingUsers));

//     toast.success("User registered successfully!", {
//       position: "top-center",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//     });

//     // Redirect to login page after registration
//     setTimeout(() => {
//       navigate("/user/login");
//     }, 2000); // Redirect after 2 seconds
//   };

//   return (
//     <div>
//       <div className="mt-2 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
//         <div
//           className="card form-card border-color text-color custom-bg"
//           style={{ width: "50rem" }}
//         >
//           <div className="card-header bg-color custom-bg-text text-center">
//             <h5 className="card-title">Register Passenger</h5>
//           </div>
//           <div className="card-body">
//             <form className="row g-3" onSubmit={saveUser}>
//               <div className="col-md-6 mb-3 text-color">
//                 <label htmlFor="name" className="form-label">
//                   <b>Passenger Name</b>
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="name"
//                   name="name"
//                   onChange={handleUserInput}
//                   value={user.name}
//                 />
//               </div>

//               <div className="col-md-6 mb-3 text-color">
//                 <b>
//                   <label className="form-label">Email Id</label>
//                 </b>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   name="email"
//                   onChange={handleUserInput}
//                   value={user.email}
//                 />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label htmlFor="password" className="form-label">
//                   <b>Password</b>
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   name="password"
//                   onChange={handleUserInput}
//                   value={user.password}
//                 />
//               </div>
//               <div className="col-md-6 mb-3 text-color">
//                 <label htmlFor="gender" className="form-label">
//                   <b>User Gender</b>
//                 </label>
//                 <select
//                   onChange={handleUserInput}
//                   className="form-control"
//                   name="gender"
//                 >
//                   <option value="0">Select Gender</option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                 </select>
//               </div>

//               <div className="col-md-6 mb-3">
//                 <label htmlFor="contact" className="form-label">
//                   <b>Contact No</b>
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="contact"
//                   name="contact"
//                   onChange={handleUserInput}
//                   value={user.contact}
//                 />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label htmlFor="age" className="form-label">
//                   <b>Age</b>
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="age"
//                   name="age"
//                   onChange={handleUserInput}
//                   value={user.age}
//                 />
//               </div>

//               <div className="col-md-6 mb-3">
//                 <label htmlFor="street" className="form-label">
//                   <b> Street</b>
//                 </label>
//                 <textarea
//                   className="form-control"
//                   id="street"
//                   name="street"
//                   rows="3"
//                   onChange={handleUserInput}
//                   value={user.street}
//                 />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label htmlFor="city" className="form-label">
//                   <b>City</b>
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="city"
//                   name="city"
//                   onChange={handleUserInput}
//                   value={user.city}
//                 />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label htmlFor="pincode" className="form-label">
//                   <b>Pincode</b>
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="pincode"
//                   name="pincode"
//                   onChange={handleUserInput}
//                   value={user.pincode}
//                 />
//               </div>

//               <div className="d-flex aligns-items-center justify-content-center">
//                 <input
//                   type="submit"
//                   className="btn bg-color custom-bg-text"
//                   value="Register User"
//                 />
//               </div>
//               <ToastContainer />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserRegister;

// import { useState } from "react";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const UserRegister = () => {
//   const navigate = useNavigate();

//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//     contact: "",
//     street: "",
//     city: "",
//     pincode: "",
//     roles: "",
//     age: "",
//     gender: "",
//   });

//   const handleUserInput = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const saveUser = (e) => {
//     e.preventDefault();

//     // Store user data in local storage
//     localStorage.setItem("user", JSON.stringify(user));

//     // Show success toast message
//     toast.success("Registration successful!", {
//       position: "top-center",
//       autoClose: 1000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });

//     // Redirect to login page after a short delay
//     setTimeout(() => {
//       navigate("/user/login");
//     }, 1000);
//   };

//   return (
//     <div>
//       <div className="mt-2 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
//         <div
//           className="card form-card border-color text-color custom-bg"
//           style={{ width: "50rem" }}
//         >
//           <div className="card-header bg-color custom-bg-text text-center">
//             <h5 className="card-title">Register Passenger</h5>
//           </div>
//           <div className="card-body">
//             <form className="row g-3" onSubmit={saveUser}>
//               <div className="col-md-6 mb-3 text-color">
//                 <label htmlFor="name" className="form-label">
//                   <b>Passenger Name</b>
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="name"
//                   name="name"
//                   onChange={handleUserInput}
//                   value={user.name}
//                   required
//                 />
//               </div>

//               <div className="col-md-6 mb-3 text-color">
//                 <b>
//                   <label className="form-label">Email Id</label>
//                 </b>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   name="email"
//                   onChange={handleUserInput}
//                   value={user.email}
//                   required
//                 />
//               </div>

//               <div className="col-md-6 mb-3">
//                 <label htmlFor="password" className="form-label">
//                   <b>Password</b>
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   name="password"
//                   onChange={handleUserInput}
//                   value={user.password}
//                   required
//                 />
//               </div>

//               <div className="col-md-6 mb-3 text-color">
//                 <label htmlFor="gender" className="form-label">
//                   <b>User Gender</b>
//                 </label>
//                 <select
//                   onChange={handleUserInput}
//                   className="form-control"
//                   name="gender"
//                   required
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                 </select>
//               </div>

//               <div className="col-md-6 mb-3">
//                 <label htmlFor="contact" className="form-label">
//                   <b>Contact No</b>
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="contact"
//                   name="contact"
//                   onChange={handleUserInput}
//                   value={user.contact}
//                   required
//                 />
//               </div>

//               <div className="col-md-6 mb-3">
//                 <label htmlFor="age" className="form-label">
//                   <b>Age</b>
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="age"
//                   name="age"
//                   onChange={handleUserInput}
//                   value={user.age}
//                   required
//                 />
//               </div>

//               <div className="col-md-6 mb-3">
//                 <label htmlFor="street" className="form-label">
//                   <b>Street</b>
//                 </label>
//                 <textarea
//                   className="form-control"
//                   id="street"
//                   name="street"
//                   rows="3"
//                   onChange={handleUserInput}
//                   value={user.street}
//                   required
//                 />
//               </div>

//               <div className="col-md-6 mb-3">
//                 <label htmlFor="city" className="form-label">
//                   <b>City</b>
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="city"
//                   name="city"
//                   onChange={handleUserInput}
//                   value={user.city}
//                   required
//                 />
//               </div>

//               <div className="col-md-6 mb-3">
//                 <label htmlFor="pincode" className="form-label">
//                   <b>Pincode</b>
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="pincode"
//                   name="pincode"
//                   onChange={handleUserInput}
//                   value={user.pincode}
//                   required
//                 />
//               </div>

//               <div className="d-flex aligns-items-center justify-content-center">
//                 <input
//                   type="submit"
//                   className="btn bg-color custom-bg-text"
//                   value="Register User"
//                 />
//               </div>
//               <ToastContainer />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserRegister;

// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

// const UserRegister = () => {
//   const navigate = useNavigate();

//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//     contact: "",
//     street: "",
//     city: "",
//     pincode: "",
//     age: "",
//     gender: "",
//   });

//   const handleUserInput = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const saveUser = (e) => {
//     e.preventDefault();
    
//     // Save user data to local storage
//     localStorage.setItem("user", JSON.stringify(user));

//     // Show success message
//     toast.success("User registered successfully!", {
//       position: "top-center",
//       autoClose: 1000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//     });

//     // Redirect to login page after 1 second
//     setTimeout(() => {
//       navigate("/user/login");
//     }, 1000);
//   };

//   return (
//     <div>
//       <div className="mt-2 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
//         <div
//           className="card form-card border-color text-color custom-bg"
//           style={{ width: "50rem" }}
//         >
//           <div className="card-header bg-color custom-bg-text text-center">
//             <h5 className="card-title">Register Passenger</h5>
//           </div>
//           <div className="card-body">
//             <form className="row g-3" onSubmit={saveUser}>
//               {/* Align input fields vertically */}
//               <div className="col-md-12 mb-3 text-color">
//                 <label htmlFor="name" className="form-label">
//                   <b>Passenger Name</b>
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="name"
//                   name="name"
//                   onChange={handleUserInput}
//                   value={user.name}
//                   required
//                 />
//               </div>
//               <div className="col-md-12 mb-3 text-color">
//                 <label htmlFor="email" className="form-label">
//                   <b>Email Id</b>
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   name="email"
//                   onChange={handleUserInput}
//                   value={user.email}
//                   required
//                 />
//               </div>
//               <div className="col-md-12 mb-3">
//                 <label htmlFor="password" className="form-label">
//                   <b>Password</b>
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   name="password"
//                   onChange={handleUserInput}
//                   value={user.password}
//                   required
//                 />
//               </div>
//               <div className="col-md-12 mb-3 text-color">
//                 <label htmlFor="gender" className="form-label">
//                   <b>User Gender</b>
//                 </label>
//                 <select
//                   onChange={handleUserInput}
//                   className="form-control"
//                   name="gender"
//                   required
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                 </select>
//               </div>
//               <div className="col-md-12 mb-3">
//                 <label htmlFor="contact" className="form-label">
//                   <b>Contact No</b>
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="contact"
//                   name="contact"
//                   onChange={handleUserInput}
//                   value={user.contact}
//                   required
//                 />
//               </div>
//               <div className="col-md-12 mb-3">
//                 <label htmlFor="age" className="form-label">
//                   <b>Age</b>
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="age"
//                   name="age"
//                   onChange={handleUserInput}
//                   value={user.age}
//                   required
//                 />
//               </div>
//               <div className="col-md-12 mb-3">
//                 <label htmlFor="street" className="form-label">
//                   <b>Street</b>
//                 </label>
//                 <textarea
//                   className="form-control"
//                   id="street"
//                   name="street"
//                   rows="3"
//                   onChange={handleUserInput}
//                   value={user.street}
//                   required
//                 />
//               </div>
//               <div className="col-md-12 mb-3">
//                 <label htmlFor="city" className="form-label">
//                   <b>City</b>
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="city"
//                   name="city"
//                   onChange={handleUserInput}
//                   value={user.city}
//                   required
//                 />
//               </div>
//               <div className="col-md-12 mb-3">
//                 <label htmlFor="pincode" className="form-label">
//                   <b>Pincode</b>
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="pincode"
//                   name="pincode"
//                   onChange={handleUserInput}
//                   value={user.pincode}
//                   required
//                 />
//               </div>
//               <div className="d-flex aligns-items-center justify-content-center">
//                 <input
//                   type="submit"
//                   className="btn bg-color custom-bg-text"
//                   value="Register User"
//                 />
//               </div>
//               <ToastContainer />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserRegister;

// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";
// import { Button, Form, Header, Container, Segment } from "semantic-ui-react";

// const UserRegister = () => {
//   const navigate = useNavigate();

//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//     contact: "",
//     street: "",
//     city: "",
//     pincode: "",
//     age: "",
//     gender: "",
//   });

//   const handleUserInput = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const saveUser = (e) => {
//     e.preventDefault();

//     // Save user data to local storage
//     localStorage.setItem("user", JSON.stringify(user));

//     // Show success message
//     toast.success("User registered successfully!", {
//       position: "top-center",
//       autoClose: 1000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//     });

//     // Redirect to login page after 1 second
//     setTimeout(() => {
//       navigate("/user/login");
//     }, 1000);
//   };

//   return (
//     <Container className="mt-5">
//       <Segment>
//         <Header as="h2" textAlign="center">
//           Register Passenger
//         </Header>
//         <Form onSubmit={saveUser}>
//           <Form.Field>
//             <label><b>Passenger Name</b></label>
//             <input
//               type="text"
//               name="name"
//               onChange={handleUserInput}
//               value={user.name}
//               required
//             />
//           </Form.Field>
//           <Form.Field>
//             <label><b>Email Id</b></label>
//             <input
//               type="email"
//               name="email"
//               onChange={handleUserInput}
//               value={user.email}
//               required
//             />
//           </Form.Field>
//           <Form.Field>
//             <label><b>Password</b></label>
//             <input
//               type="password"
//               name="password"
//               onChange={handleUserInput}
//               value={user.password}
//               required
//             />
//           </Form.Field>
//           <Form.Field>
//             <label><b>User Gender</b></label>
//             <select
//               name="gender"
//               onChange={handleUserInput}
//               required
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//             </select>
//           </Form.Field>
//           <Form.Field>
//             <label><b>Contact No</b></label>
//             <input
//               type="number"
//               name="contact"
//               onChange={handleUserInput}
//               value={user.contact}
//               required
//             />
//           </Form.Field>
//           <Form.Field>
//             <label><b>Age</b></label>
//             <input
//               type="number"
//               name="age"
//               onChange={handleUserInput}
//               value={user.age}
//               required
//             />
//           </Form.Field>
//           <Form.Field>
//             <label><b>Street</b></label>
//             <textarea
//               name="street"
//               rows="3"
//               onChange={handleUserInput}
//               value={user.street}
//               required
//             />
//           </Form.Field>
//           <Form.Field>
//             <label><b>City</b></label>
//             <input
//               type="text"
//               name="city"
//               onChange={handleUserInput}
//               value={user.city}
//               required
//             />
//           </Form.Field>
//           <Form.Field>
//             <label><b>Pincode</b></label>
//             <input
//               type="number"
//               name="pincode"
//               onChange={handleUserInput}
//               value={user.pincode}
//               required
//             />
//           </Form.Field>
//           <Button type="submit" color="blue">Register User</Button>
//           <ToastContainer />
//         </Form>
//       </Segment>
//     </Container>
//   );
// };

// export default UserRegister;

// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";
// import { Button, Form, Header, Container, Segment } from "semantic-ui-react";

// const UserRegister = () => {
//   const navigate = useNavigate();

//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//     contact: "",
//     street: "",
//     city: "",
//     pincode: "",
//     age: "",
//     gender: "",
//     role: "", // Added role field
//   });

//   const handleUserInput = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const saveUser = (e) => {
//     e.preventDefault();

//     // Save user data to local storage
//     localStorage.setItem("user", JSON.stringify(user));

//     // Show success message
//     toast.success("User registered successfully!", {
//       position: "top-center",
//       autoClose: 1000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//     });

//     // Redirect to login page after 1 second
//     setTimeout(() => {
//       navigate("/user/login");
//     }, 1000);
//   };

//   return (
//     <Container className="mt-5" textAlign="center">
//       <Segment style={{ maxWidth: "500px", margin: "0 auto" }}>
//         <Header as="h2">Register Passenger</Header>
//         <Form onSubmit={saveUser}>
//           <Form.Field>
//             <label><b>Passenger Name</b></label>
//             <input
//               type="text"
//               name="name"
//               onChange={handleUserInput}
//               value={user.name}
//               required
//             />
//           </Form.Field>
//           <Form.Field>
//             <label><b>Email Id</b></label>
//             <input
//               type="email"
//               name="email"
//               onChange={handleUserInput}
//               value={user.email}
//               required
//             />
//           </Form.Field>
//           <Form.Field>
//             <label><b>Password</b></label>
//             <input
//               type="password"
//               name="password"
//               onChange={handleUserInput}
//               value={user.password}
//               required
//             />
//           </Form.Field>
//           <Form.Field>
//             <label><b>User Gender</b></label>
//             <select
//               name="gender"
//               onChange={handleUserInput}
//               required
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//             </select>
//           </Form.Field>
//           <Form.Field>
//             <label><b>Contact No</b></label>
//             <input
//               type="number"
//               name="contact"
//               onChange={handleUserInput}
//               value={user.contact}
//               required
//             />
//           </Form.Field>
//           <Form.Field>
//             <label><b>Age</b></label>
//             <input
//               type="number"
//               name="age"
//               onChange={handleUserInput}
//               value={user.age}
//               required
//             />
//           </Form.Field>
//           <Form.Field>
//             <label><b>Street</b></label>
//             <textarea
//               name="street"
//               rows="3"
//               onChange={handleUserInput}
//               value={user.street}
//               required
//             />
//           </Form.Field>
//           <Form.Field>
//             <label><b>City</b></label>
//             <input
//               type="text"
//               name="city"
//               onChange={handleUserInput}
//               value={user.city}
//               required
//             />
//           </Form.Field>
//           <Form.Field>
//             <label><b>Pincode</b></label>
//             <input
//               type="number"
//               name="pincode"
//               onChange={handleUserInput}
//               value={user.pincode}
//               required
//             />
//           </Form.Field>
//           <Form.Field>
//             <label><b>Role</b></label>
//             <select
//               name="role"
//               onChange={handleUserInput}
//               required
//             >
//               <option value="">Select Role</option>
//               <option value="Admin">Admin</option>
//               <option value="User">User</option>
//               <option value="Guest">Guest</option>
//             </select>
//           </Form.Field>
//           <Button type="submit" color="blue">Register User</Button>
//           <ToastContainer />
//         </Form>
//       </Segment>
//     </Container>
//   );
// };

// export default UserRegister;

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Button, Form, Header, Container, Segment, Grid } from "semantic-ui-react";

const UserRegister = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    street: "",
    city: "",
    pincode: "",
    age: "",
    gender: "",
    role: "", 
  });

  const handleUserInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveUser = (e) => {
    e.preventDefault();

   
    localStorage.setItem("user", JSON.stringify(user));

    
    toast.success("User registered successfully!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    
    setTimeout(() => {
      navigate("/user/login");
    }, 1000);
  };

  return (
    <Container className="mt-5" textAlign="center">
      <Segment style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
        <Header as="h2">Register Passenger</Header>
      <Form onSubmit={saveUser}>
        <Form.Field>
        <label><b>Role</b></label>
      <select
      name="role"
      onChange={handleUserInput}
        required
    >
        <option value="">Select Role</option>
     <option value="Admin">Admin</option>
       <option value="User">User</option>
       <option value="Guest">Guest</option>
     </select>
     </Form.Field>
     
          <Grid>
       <Grid.Row>
         <Grid.Column width={6}>
           <Form.Field>
          <label><b>Passenger Name</b></label>
          <input
            type="text"
                 name="name"
          onChange={handleUserInput}
          value={user.name}
             required
           />
         </Form.Field>
       </Grid.Column>
              <Grid.Column width={6}>
                <Form.Field>
         <label><b>Email Id</b></label>
         <input
           type="email"
           name="email"
           onChange={handleUserInput}
           value={user.email}
              required
            />
          </Form.Field>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
              <Grid.Column width={6}>
      <Form.Field>
        <label><b>Password</b></label>
        <input
          type="password"
          name="password"
          onChange={handleUserInput}
                  value={user.password}
               required
             />
           </Form.Field>
         </Grid.Column>
         <Grid.Column width={6}>
             <Form.Field>
           <label><b>Contact No</b></label>
           <input
             type="number"
             name="contact"
             onChange={handleUserInput}
             value={user.contact}
                    required
                  />
                </Form.Field>
              </Grid.Column>
      </Grid.Row>
      <Grid.Row>
     <Grid.Column width={6}>
       <Form.Field>
         <label><b>Age</b></label>
     <input
           type="number"
     name="age"
        onChange={handleUserInput}
        value={user.age}
        required
          />
    </Form.Field>
        </Grid.Column>
        <Grid.Column width={6}>
          <Form.Field>
      <label><b>User Gender</b></label>
      <select
          name="gender"
          onChange={handleUserInput}
          required
        >
           <option value="">Select Gender</option>
           <option value="Male">Male</option>
               <option value="Female">Female</option>
             </select>
           </Form.Field>
         </Grid.Column>
       </Grid.Row>
       <Grid.Row>
         <Grid.Column width={12}>
           <Form.Field>
        <label><b>Street</b></label>
        <textarea
               name="street"
         rows="3"
         onChange={handleUserInput}
         value={user.street}
              required
            />
          </Form.Field>
              </Grid.Column>
            </Grid.Row>
         <Grid.Row>
           <Grid.Column width={6}>
          <Form.Field>
            <label><b>City</b></label>
            <input
              type="text"
                 name="city"
           onChange={handleUserInput}
              value={user.city}
              required
            />
          </Form.Field>
        </Grid.Column>
              <Grid.Column width={6}>
         <Form.Field>
           <label><b>Pincode</b></label>
           <input
             type="number"
             name="pincode"
             onChange={handleUserInput}
                    value={user.pincode}
              required
            />
          </Form.Field>
        </Grid.Column>
      </Grid.Row>
   </Grid>
         <Button type="submit" color="blue" fluid>Register User</Button>
         <ToastContainer />
       </Form>
     </Segment>
   </Container>
  );
};

export default UserRegister;
