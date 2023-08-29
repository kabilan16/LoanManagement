import "../LoginPage.css";
import axios from 'axios';
import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import {Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function ApplyLoan() {
  
const navigate = useNavigate();
  const handleLogout = (event) => {
    navigate("/");
    localStorage.clear();
    
  }
  
  const location = useLocation();
  const passedProp = location.state && location.state.passedProp;
  console.log(passedProp);
  const initialFormData={
    employeeId: '',
    itemDescription: '',
    itemMake: '',
    itemCategory: '',
    itemValue: '',
  }
  const [reqSuccess, setReqSuccess] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [reqFail, setReqFail] = useState(false);
  const [postResponse, setPostResponse]=useState('');
  const [errorMessages, setErrorMessages] = useState({
    employeeId: '',
    itemDescription: '',
    itemMake: '',
    itemCategory: '',
    itemValue: '',
  });
  const storedToken = localStorage.getItem('jwtToken');
  const headers = {
    'Authorization': `Bearer ${storedToken}`,
    'Content-Type': 'application/json',
    // Other headers as needed
  };

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
      const response = await axios.post('http://localhost:8081/applyForLoan', formData , {headers});
      console.log('Response:', response.data);
      setPostResponse(response.data);
      setFormData(initialFormData);
      setReqSuccess(true);
      // Handle success or do something with the response
    } catch (error) {
      console.error('Error:', error);
      setReqFail(true);
      // Handle error
    }
  };


  return (
    <div>
      <div className="adminLogin">
        <div>  <Button variant="dark" style={{ position: 'absolute', right: '0', marginRight:'15px'}} onClick={handleLogout}>Logout</Button></div>
        <center>
          <h4 className="pagetitle">Apply for Loan</h4>
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
                    <div className="mb-3" style={{marginLeft:15, marginRight:15}}>
                      {/* <label htmlFor="username" className="form-label">
                        Employee ID
                      </label>
                      <input
                        type="number"
                        name="employeeId"
                        className={`form-control form-control-sm ${
                          errorMessages.employeeId && "is-invalid"
                        }`}
                        value={formData.employeeId}
                        onChange={handleInputChange}
                        style={{ border: "1px solid black" }}
                      />
                      {errorMessages.employeeId && (
                        <div className="invalid-feedback">
                          {errorMessages.employeeId}
                        </div>
                      )} */}
                      <label>
                        Employee ID
                        <select 
                        name="employeeId"
                        value={formData.employeeId}
          onChange={handleInputChange}
          
          >
            <option value="" selected disabled hidden>Select ID</option>
                          <option value={passedProp}>{passedProp}</option>
                          
                        </select>
                      </label>
                    </div>
                    <div className="mb-3" style={{marginRight:65, marginLeft:25}}>
                      <label htmlFor="itemDesc" className="form-label">
                        Item Description
                      </label>
                      <input
                        type="text"
                        className={`form-control form-control-sm ${
                          errorMessages.itemDescription && "is-invalid"
                        }`}
                        name="itemDescription"
          value={formData.itemDescription}
          onChange={handleInputChange}
                        style={{ border: "1px solid black" }}
                        // value={username}
                        // onChange={handleUsernameChange}
                      />
                      {errorMessages.itemDescription}
                    </div>
                    <div className="mb-3" style={{marginRight:15, marginLeft:15}}>
                      <label>
                        Item Make
                        <select 
                        name="itemMake"
                        value={formData.itemMake}
          onChange={handleInputChange}
          
          >
            <option value="" selected disabled hidden>Select Item Make</option>
                          <option value="Wooden">Wooden</option>
                          <option value="Glass">Glass</option>
                          <option value="Plastic">Plastic</option>
                        </select>
                      </label>
                    </div>
                    {/* <div className="mb-3">
                      <label>
                        Gender
                        <select>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </label>
                    </div> */}
                    <div className="mb-3"  style={{marginLeft:15, marginRight:"10px"}}>
                      <label>
                        Item Category
                        <select  name="itemCategory"
          value={formData.itemCategory}
          onChange={handleInputChange}>
            <option value="" selected disabled hidden>Select category</option>
                          <option value="Furniture">Furniture</option>
                          <option value="Crockery">Crockery</option>
                          <option value="Stationary">Stationary</option>

                        </select>
                      </label>
                    </div>
                    <div className="mb-3" style={{marginRight:"10px", marginLeft:"5px"}}>
                      <label /*style={{marginLeft:"5px"}}*/>
                        Item Value
                        <input
                          type="number"
                          className={`form-control form-control-sm ${
                            errorMessages.itemValue && "is-invalid"
                          }`}
                          
                        name="itemValue"
                        value={formData.itemValue}
                        onChange={handleInputChange}
                          style={{ border: "1px solid black" }}
                        />
                      </label>
                      {errorMessages.itemCost && (
                        <div className="invalid-feedback">
                          {errorMessages.itemCost}
                        </div>
                      )}
                    </div>
                    <div className="d-grid">
                      <center>
                        {" "}
                        <button
                          type="submit"
                          className="btn btn-primary"
                          style={{ maxWidth: "200px" }}
                        >
                          Apply Loan
                        </button>
                      </center>
                    </div>
                    {reqSuccess && <center><div className="successMsg">{postResponse}</div></center>}
                    {reqFail && <center><div className="failMsg">Error occured. Could not add item.</div></center>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {console.log("hmm:",passedProp)}
              <Link to="/udashboard" state={{ passedProp }}>
                <center><Button variant="primary" style={{marginTop:30, backgroundColor:"#f8f9fa", color:"black", padding:"12px"}}>Go back to User Dashboard</Button></center>
              </Link>
      </div>
    </div>
  );
}

export default ApplyLoan;
