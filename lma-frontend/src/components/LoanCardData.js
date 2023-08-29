import "../LoginPage.css";
import React, { useState } from "react";
import axios from 'axios';
import {Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

function LoanCardData() {

  const initialFormData={
    loanId: '',
    loanType: '',
    durationInMonths: ''
  };
  const [reqSuccess, setReqSuccess] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [reqFail, setReqFail] = useState(false);
  
const navigate = useNavigate();
  const handleLogout = (event) => {
    navigate("/");
    localStorage.clear();
    
  }
  
const jwt= localStorage.getItem('jwtToken');
useEffect(()=>
{
  if(jwt===null || jwt=== undefined)
  {
    navigate("/");
  }
},[]);
  const [errorMessages, setErrorMessages] = useState({
    loanId: '',
    loanType: '',
    durationInMonths: ''
  });

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
    const storedToken = localStorage.getItem('jwtToken');
  const headers = {
    'Authorization': `Bearer ${storedToken}`,
    'Content-Type': 'application/json',
    // Other headers as needed
  };
    try {
      console.log("form data:", formData);
      const response = await axios.post('http://localhost:8081/addLoanDetails', formData, {headers});
      console.log('Response:', response.data);
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
        <div>
  <Button variant="dark" style={{ position: 'absolute', right: '0', marginRight:'15px'}} onClick={handleLogout}>Logout</Button></div>
        <center>
          <h4 className="pagetitle">Loan Card Master Data Details</h4>
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
                    <div className="mb-3" style={{marginLeft:"10px", marginRight:"50px"}}>
                      <label htmlFor="username" className="form-label">
                        Loan ID
                      </label>
                      <input
                        
                        className={`form-control form-control-sm ${
                          errorMessages.employeeId && "is-invalid"
                        }`}
                        type="number"
                        name="loanId"
                        value={formData.loanId}
                        onChange={handleInputChange}
                        style={{ border: "1px solid black" }}
                      />
                      {errorMessages.loanId && (
                        <div className="invalid-feedback">
                          {errorMessages.loanId}
                        </div>
                      )}
                    </div>
                    
                    <div className="mb-3">
                      <label>
                        Loan Type
                        <select 
                        name="loanType"
                        value={formData.loanType}
          onChange={handleInputChange}
          
          >
            <option value="" selected disabled hidden>Select Loan Type</option>
                          <option value="Furniture">Furniture</option>
                          <option value="Crockery">Crockery</option>
                          <option value="Stationary">Stationary</option>
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
                    
                    <div className="mb-3"style={{marginLeft:"10px", marginRight:"50px"}} >
                      <label htmlFor="username" className="form-label">
                        Loan Duration In Months
                      </label>
                      <input
                        
                        className={`form-control form-control-sm ${
                          errorMessages.durationInMonths && "is-invalid"
                        }`}
                        type="number"
                        name="durationInMonths"
                        value={formData.durationInMonths}
                        onChange={handleInputChange}
                        style={{ border: "1px solid black" }}
                      />
                      {errorMessages.durationInMonths && (
                        <div className="invalid-feedback">
                          {errorMessages.durationInMonths}
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
                          Add Data
                          
                        </button>
                      </center>
                    </div>
                    {reqSuccess && <center><div className="successMsg">Loan Card is added successfully</div></center>}
                    {reqFail && <center><div className="failMsg">Error occured. Could not add loan card.</div></center>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
<Link to="/adashboard">
                <center><Button variant="primary" style={{marginTop:30, backgroundColor:"#f8f9fa", color:"black", padding:"12px"}} >Go to Admin Dashboard</Button></center>
              </Link>
      </div>
    </div>
  );
}

export default LoanCardData;
