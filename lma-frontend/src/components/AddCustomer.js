import "../LoginPage.css";
import React, { useState } from "react";
import axios from 'axios';
function AddCustomer() {
  const [formData, setFormData] = useState({
    employeeId: '',
    employeeName: '',
    designation: '',
    department: '',
    dateOfBirth: '',
    dateOfJoining: '',
  });

  const [errorMessages, setErrorMessages] = useState({
    employeeId: '',
    employeeName: '',
    designation: '',
    department: '',
    dateOfBirth: '',
    dateOfJoining: '',
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

    // Validate form fields
    const newErrorMessages = {};
    for (const field in formData) {
      if (formData[field] === '') {
        newErrorMessages[field] = `${field} is required`;
      }
    }
    setErrorMessages(newErrorMessages);

    // If any errors, prevent the POST request
    if (Object.keys(newErrorMessages).length > 0) {
      return;
    }

    try {
      console.log("form data:", formData);
      const response = await axios.post('http://localhost:8081/addEmployee', formData);
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
          <h4 className="pagetitle">Customer Master Data Details</h4>
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
                        Employee ID
                      </label>
                      <input
                        
                        className={`form-control form-control-sm ${
                          errorMessages.employeeId && "is-invalid"
                        }`}
                        type="number"
                        name="employeeId"
                        value={formData.employeeId}
                        onChange={handleInputChange}
                        style={{ border: "1px solid black" }}
                      />
                      {errorMessages.employeeId && (
                        <div className="invalid-feedback">
                          {errorMessages.employeeId}
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="itemDesc" className="form-label">
                        Employee Name
                      </label>
                      <input
                        type="text"
                        className={`form-control form-control-sm ${
                          errorMessages.employeeName && "is-invalid"
                        }`}
                        name="employeeName"
          value={formData.employeeName}
          onChange={handleInputChange}
                        style={{ border: "1px solid black" }}
                        // value={username}
                        // onChange={handleUsernameChange}
                      />
                      {errorMessages.employeeName}
                    </div>
                    <div className="mb-3">
                      <label>
                        Department
                        <select 
                        name="department"
                        value={formData.department}
          onChange={handleInputChange}>
                          <option value="finance">Finance</option>
                          <option value="hr">HR</option>
                          <option value="sales">Sales</option>
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
                        Designation
                        <select  name="designation"
          value={formData.designation}
          onChange={handleInputChange}>
                          <option value="manager">Manager</option>
                          <option value="executive">Executive</option>
                          <option value="srexecutive">Sr. Executive</option>
                          <option value="clerk">Clerk</option>
                        </select>
                      </label>
                    </div>
                    <div className="mb-3">
                      <div className="datefield">
                        <label>Date of Birth</label>
                        <input type="date" name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleInputChange} />
          <div className="invalid-feedback">{errorMessages.dateOfBirth}</div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="datefield">
                        <label>Date of Joining</label>
                        <input type="date" name="dateOfJoining"
          value={formData.dateOfJoining}
          onChange={handleInputChange}/>
          <div className="invalid-feedback">{errorMessages.dateOfJoining}</div>
                      </div>
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

export default AddCustomer;
