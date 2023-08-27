import "../LoginPage.css";
import React, { useState } from "react";
import axios from 'axios';
function LoanCardData() {
  const [formData, setFormData] = useState({
    loanId: '',
    loanType: '',
    durationInMonths: ''
  });

  const [errorMessages, setErrorMessages] = useState({
    loanId: '',
    loanType: '',
    durationInMonths: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
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
      const response = await axios.post('http://localhost:8081/addLoanDetails', formData);
      console.log('Response:', response.data);
      // Handle success or do something with the response
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  return (
    <div>
      <div className="adminLogin">
        <center>
          <h4 className="pagetitle">Loan Card Master Data Details</h4>
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
                    <div className="mb-3" style={{marginRight:25}}>
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
                    
                    <div className="mb-3" style={{marginRight:25}}>
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

export default LoanCardData;
