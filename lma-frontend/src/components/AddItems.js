import "../LoginPage.css";
import React, { useState } from "react";
import axios from 'axios';
import {Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

function AddItems() {
  
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
  const initialFormData={
    itemId: '',
    itemDescription: '',
    itemMake: '',
    itemCategory: '',
    issueStatus: '',
    itemCost: '',
  }
  const [reqSuccess, setReqSuccess] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [reqFail, setReqFail] = useState(false);
  const [errorMessages, setErrorMessages] = useState({
    itemId: '',
    itemDescription: '',
    itemMake: '',
    itemCategory: '',
    issueStatus: '',
    itemCost: '',
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
      const response = await axios.post('http://localhost:8081/addItems', formData, {headers});
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
          <h4 className="pagetitle">Item Master Data Details</h4>
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
                    <div className="mb-3" style={{marginLeft:15, marginRight:55}}>
                      <label htmlFor="username" className="form-label">
                        Item ID
                      </label>
                      <input
                        
                        className={`form-control form-control-sm ${
                          errorMessages.itemId && "is-invalid"
                        }`}
                        type="number"
                        name="itemId"
                        value={formData.itemId}
                        onChange={handleInputChange}
                        style={{ border: "1px solid black" }}
                      />
                      {errorMessages.itemId && (
                        <div className="invalid-feedback">
                          {errorMessages.itemId}
                        </div>
                      )}
                    </div>
                    <div className="mb-3" style={{marginLeft:15, marginRight:55}}>
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
                    <div className="mb-3">
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
                    <div className="mb-3">
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
                    <div className="mb-3">
                      <label>
                        Issue Status
                        <select  name="issueStatus"
          value={formData.issueStatus}
          onChange={handleInputChange}>
            <option value="" selected disabled hidden>Select status</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                                       </select>
                      </label>
                    </div>
                    <div className="mb-3" style={{marginLeft:15, marginRight:55}}>
                      <label htmlFor="username" className="form-label">
                        Item Cost
                      </label>
                      <input
                        
                        className={`form-control form-control-sm ${
                          errorMessages.itemCost && "is-invalid"
                        }`}
                        type="number"
                        name="itemCost"
                        value={formData.itemCost}
                        onChange={handleInputChange}
                        style={{ border: "1px solid black" }}
                      />
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
                          Add Data
                          
                        </button>
                      </center>
                    </div>
                    {reqSuccess && <center><div className="successMsg">Item is added successfully</div></center>}
                    {reqFail && <center><div className="failMsg">Error occured. Could not add item.</div></center>}    
                  </form>
                </div>
              </div>
            </div>
          </div>
          
<Link to="/adashboard" /*style={{textDecorationColor:"black"}}*/>
                <center><Button variant="primary" style={{marginTop:30, backgroundColor:"#f8f9fa", color:"black", padding:"12px"}}>Go to Admin Dashboard</Button></center>
              </Link>
        </div>
      </div>
    </div>
  );
}

export default AddItems;
