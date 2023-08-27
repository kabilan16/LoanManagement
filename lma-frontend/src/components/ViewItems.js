import "../LoginPage.css";

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import {Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function ViewItems() {
  const [employees, setEmployees] = useState([]);
  const location = useLocation();
  const passedProp = location.state && location.state.passedProp;
  console.log(passedProp)
  let prevEmployeeId = null;
  let prevDesignation = null;
  let prevDepartment = null;
  const storedToken = localStorage.getItem('jwtToken');
  const headers = {
    'Authorization': `Bearer ${storedToken}`,
    'Content-Type': 'application/json',
    // Other headers as needed
  };
  useEffect(() => {
    
    const delay = 500;
    setTimeout(() => {
      axios.get(`http://localhost:8081/getDetails/${passedProp}`, {headers})
        .then(response => {
          console.log('Fetched data:', response.data);
          setEmployees(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, delay);
  }, ["no response "]);
  return (
    <div>
      <center>
        <h3 className="pagetitle">Items Purchased</h3>
      </center>
      

{

employees.map((loan, index) => {
        const {
          employeeId,
          designation,
          department,
          
        } = loan;

        // Only display employee details if they are different from the previous entry
        

        const displayEmployeeDetails =
          employeeId !== prevEmployeeId ||
          designation !== prevDesignation ||
          department !== prevDepartment;

        prevEmployeeId = employeeId;
        prevDesignation = designation;
        prevDepartment = department;
        return(
        <div key={index}>
            {displayEmployeeDetails && (
              <center>
              <div className="userDetails"> 
             <p >Employee ID: {employeeId}</p>
             <p >Designation: {designation}</p>
             <p >Department: {department}</p>
             </div>
         </center>
            )}
            </div>
            );
      })}
      <Table bordered hover responsive className="custom-table">
        <thead>
          <tr>
            <th>Issue ID</th>
            <th>Item Description</th>
            <th>Item Make</th>
            <th>Item Category</th>
            <th>Item Valuation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Dummy data</td>
            <td>Dummy data</td>
            <td>Dummy data</td>
            <td>5000</td>
          </tr>

          {employees.map(emp => (
            <tr>
          <td key={emp.issueId}>{emp.issueId}</td>
          <td key={emp.issueId}>{emp.itemDescription}</td>
          <td key={emp.issueId}>{emp.itemMake}</td>
          <td key={emp.issueId}>{emp.itemCategory}</td>
          <td key={emp.issueId}>{emp.itemValuation}</td>
          
          </tr>
        ))}
          {/* Add more rows as needed */}
        </tbody>
      </Table>
      {console.log("hmm:",passedProp)}
              <Link to="/udashboard" state={{ passedProp }}>
                <center><Button variant="primary">Go back to User Dashboard</Button></center>
              </Link>
    </div>
  );
}

export default ViewItems;
