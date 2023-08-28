// import "../LoginPage.css";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function LoginPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});

//   const navigate = useNavigate();

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//     clearError("username");
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     clearError("password");
//   };

//   const clearError = (fieldName) => {
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [fieldName]: "",
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const validationErrors = {};

//     if (username.trim() === "") {
//       validationErrors.username = "Username is required";
//     }

//     if (password.trim() === "") {
//       validationErrors.password = "Password is required";
//     }

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       // Check if username and password match predefined values
//       const predefinedUsers = {
//         // Add your predefined usernames and passwords here
//         "kabilan@gmail.com": "kabilan",
//         "kabilan@wellsfargo.com": "wellsfargo",
//         "yashaswini@gmail.com":"WellsFargo"
//       };

//       if (predefinedUsers[username] === password) {
//         navigate("/adashboard"); // Redirect using navigate function
//       } else {
//         setErrors({ login: "Invalid username or password" });
//       }
//     }
//   };

//   return (
//     <div>
//       <div className="adminLogin">
//         <center>
//           <h4 className="pagetitle">Admin Login</h4>
//         </center>
//         <div className="container mt-5">
//           <div className="row justify-content-center">
//             <div className="col-md-6">
//               <div
//                 className="card shadow p-4"
//                 style={{ backgroundColor: "#f8f9fa", borderRadius: "25px" }}
//               >
//                 <div className="card-body">
//                   <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                       <label htmlFor="username" className="form-label">
//                         Admin Username
//                       </label>
//                       <input
//                         type="text"
//                         className={`form-control form-control-sm ${
//                           errors.username && "is-invalid"
//                         }`}
//                         id="username"
//                         value={username}
//                         onChange={handleUsernameChange}
//                       />
//                       {errors.username && (
//                         <div className="invalid-feedback">
//                           {errors.username}
//                         </div>
//                       )}
//                     </div>
//                     <div className="mb-3">
//                       <label htmlFor="password" className="form-label">
//                         Admin Password
//                       </label>
//                       <input
//                         type="password"
//                         className={`form-control form-control-sm ${
//                           errors.password && "is-invalid"
//                         }`}
//                         id="password"
//                         value={password}
//                         onChange={handlePasswordChange}
//                       />
//                       {errors.password && (
//                         <div className="invalid-feedback">
//                           {errors.password}
//                         </div>
//                       )}
//                     </div>
//                     {errors.login && <span>{errors.login}</span>}

//                     <div className="d-grid">
//                       <center>
//                         {" "}
//                         <button
//                           type="submit"
//                           className="btn btn-primary"
//                           style={{ maxWidth: "120px" }}
//                         >
//                           Login
//                         </button>
//                       </center>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;

import "../LoginPage.css";
import axios from 'axios';
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
function LoginPage() {
  
  const initialFormData={
    username: '',
    password: ''
  }
  const [reqSuccess, setReqSuccess] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [reqFail, setReqFail] = useState(false);
  const [postResponse, setPostResponse]=useState('');
  const [errorMessages, setErrorMessages] = useState({
    username: '',
    password: ''});

  const navigate = useNavigate();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReqSuccess(false);
    setReqFail(false);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("inside handle submit1");

    // Validate form fields
    const newErrorMessages = {};
    for (const field in formData) {
      if (formData[field] === '') {
        newErrorMessages[field] = `${field} is required`;
      }
    }
    console.log("inside handle submit2");
    setErrorMessages(newErrorMessages);
    console.log("inside handle submit3");
    // If any errors, prevent the POST request
    if (Object.keys(newErrorMessages).length > 0) {
      console.log("inside handle submit4");
      return;
    }
    
    try {
      console.log("form data:", formData);
      const response = await axios.post('http://localhost:8081/UserLogin/authenticate', formData);
      console.log('Response:', response.data);
      let jwtToken = response.data.jwtToken; // Assuming the response has a 'token' field
    // Store the token in localStorage
      console.log("jwtToken: ",jwtToken);
      localStorage.setItem('jwtToken', jwtToken);
      setPostResponse(response.data);
      setFormData(initialFormData);
      setReqSuccess(true);
      navigate("/adashboard");
      // Handle success or do something with the response
      // if (response.data === "credentials are correct" ) {
      //         navigate("/adashboard");
      //       } else {
      //         setErrorMessages({ login: "Invalid username or password" });
      //       }
    } catch (error) {
      console.error('Error:', error);
      setReqFail(true);
      // Handle error
    }
  // const handleUsernameChange = (e) => {
  //   setUsername(e.target.value);
  //   clearError("username");
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  //   clearError("password");
  // };

  // const clearError = (fieldName) => {
  //   setErrors((prevErrors) => ({
  //     ...prevErrors,
  //     [fieldName]: "",
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const validationErrors = {};

  //   if (username.trim() === "") {
  //     validationErrors.username = "Username is required";
  //   }

  //   if (password.trim() === "") {
  //     validationErrors.password = "Password is required";
  //   }

  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //   } else {
  //     const predefinedUsers = {
  //       "kabilan@gmail.com": "kabilan",
  //       "kabilan@wellsfargo.com": "wellsfargo",
  //     };

  //     if (predefinedUsers[username] === password) {
  //       navigate("/udashboard");
  //     } else {
  //       setErrors({ login: "Invalid username or password" });
  //     }
  //   }
  };

  return (
    <div>
      <div className="adminLogin">
        <center>
          <h4 className="pagetitle">Admin Login</h4>
        </center>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div
                className="card shadow p-4"
                style={{ backgroundColor: "#f8f9fa", borderRadius: "25px" }}
              >
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3" style={{marginRight:20}}>
                      <label htmlFor="username" className="form-label">
                        Admin ID
                      </label>
                      <input
                        
                        className={`form-control form-control-sm ${
                          errorMessages.username && "is-invalid"
                        }`}
                        type="number"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                      />
                      {errorMessages.employeeId && (
                        <div className="invalid-feedback">
                          {errorMessages.username}
                        </div>
                      )}
                    </div>
                    <div className="mb-3" style={{marginRight:20}}>
                      <label htmlFor="password" className="form-label">
                        Admin Password
                      </label>
                      <input
                        type="password"
                        className={`form-control form-control-sm ${
                          errorMessages.password && "is-invalid"
                        }`}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                      {errorMessages.password && (
                        <div className="invalid-feedback">
                          {errorMessages.password}
                        </div>
                      )}
                    </div>
                    
                    <div className="d-grid">
                      <center>
                        {" "}
                        <button
                          type="submit"
                          className="btn btn-primary"
                          style={{ maxWidth: "120px" }}
                        >
                          Login
                        </button>
                      </center>
                    </div>
                    {/* <p>{postResponse}</p> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
