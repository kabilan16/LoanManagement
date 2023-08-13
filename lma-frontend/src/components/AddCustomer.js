import '../LoginPage.css'
import React, { useState } from 'react';
function AddCustomer(){
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState({});

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (username.trim() === '') {
      validationErrors.username = 'Username is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Perform login logic here
      console.log('Login successful');
    }
  };

    return (<div>
        <center><h4 className="lma">Loan Management Application</h4></center>
      <div className="adminLogin">
        <center><h4>Customer Master Data Details</h4></center>
        <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="card-body">
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Employee ID
                  </label>
                  <input
                    type="text"
                    className={`form-control form-control-sm ${errors.username && 'is-invalid'}`}
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                  {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="itemDesc" className="form-label">
                    Employee Name
                  </label>
                  <input
                    type="text"
                    className={`form-control form-control-sm ${errors.username && 'is-invalid'}`}
                    id="empName"
                    // value={username}
                    // onChange={handleUsernameChange}
                  />
                  {/* {errors.username && <div className="invalid-feedback">{errors.username}</div>} */}
                </div>
                <div className="mb-3">
                <label>
        Department
        <select>
            <option value="finance">Finance</option>
            <option value="hr">HR</option>
            <option value="sales">Sales</option>
        </select>
      </label>
      </div>
      <div className="mb-3">
      <label>
        Gender
        <select>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
      </label>
      
      </div>
      <div className="mb-3">
      <label>
        Designation
        <select>
            <option value="manager">Manager</option>
            <option value="executive">Executive</option>
            <option value="srexecutive">Sr. Executive</option>
            <option value="clerk">Clerk</option>
        </select>
      </label>
                </div>
                <div className="mb-3">
                <div><label>Date of Birth</label>
      <input type="date" /></div>
      
                </div>
                <div className="mb-3">
                <div><label>Date of Joining</label>
      <input type="date" /></div>
      
                </div>
                <div className="d-grid">
                 <center> <button type="submit" className="btn btn-primary" style={{maxWidth: "200px"}}>
                    Add Data
                  </button></center>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
        
        
      </div>
      </div>);
}

export default  AddCustomer;
