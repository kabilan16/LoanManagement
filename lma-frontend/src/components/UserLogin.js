import "../LoginPage.css";
import axios from 'axios';
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
function UserLogin() {
  
  const initialFormData={
    employeeId: '',
    password: ''
  }
  const [reqSuccess, setReqSuccess] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [reqFail, setReqFail] = useState(false);
  const [postResponse, setPostResponse]=useState('');
  const [errorMessages, setErrorMessages] = useState({
    employeeId: '',
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
      const response = await axios.post('http://localhost:8081/validateUser', formData);
      console.log('Response:', response.data);
      setPostResponse(response.data);
      setFormData(initialFormData);
      setReqSuccess(true);
      // Handle success or do something with the response
      if (response.data === "credentials are correct" || response.data === "Not A User") {
              navigate("/udashboard");
            } else {
              setErrorMessages({ login: "Invalid username or password" });
            }
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
          <h4 className="pagetitle">User Login</h4>
        </center>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div
                className="card shadow p-4"
                style={{ backgroundColor: "#f8f9fa", borderRadius: "25px" }}
              >
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        User ID
                      </label>
                      <input
                        
                        className={`form-control form-control-sm ${
                          errorMessages.username && "is-invalid"
                        }`}
                        type="number"
                        name="employeeId"
                        value={formData.employeeId}
                        onChange={handleInputChange}
                      />
                      {errorMessages.employeeId && (
                        <div className="invalid-feedback">
                          {errorMessages.employeeId}
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        User Password
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
                    <p>{postResponse}</p>
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

export default UserLogin;
