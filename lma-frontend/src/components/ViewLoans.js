import "../LoginPage.css";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Table } from "react-bootstrap";
function ViewLoans() {
  const [employees, setEmployees] = useState([]);
  const location = useLocation();
  const passedProp = location.state && location.state.passedProp;
  console.log(passedProp)
  let prevEmployeeId = null;
  let prevDesignation = null;
  let prevDepartment = null;
  useEffect(() => {
    
    const delay = 500;
    setTimeout(() => {
      axios.get(`http://localhost:8081/getAllLoanDetails/${passedProp}`)
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
        <h3 className="pagetitle">Loan Cards Availed</h3>
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
            <th>Loan ID</th>
            <th>Loan Type</th>
            <th>Duration</th>
            <th>Card Issue Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>30</td>
            <td>Dummy data</td>
            <td>5</td>
            <td>12/01/2023</td>
          </tr>
          {employees.map(emp => (
            <tr>
          <td key={emp.loanId}>{emp.loanId}</td>
          <td key={emp.loanId}>{emp.loanType}</td>
          <td key={emp.loanId}>{emp.durationInMonths}</td>
          <td key={emp.loanId}>{emp.cardIssueDate}</td>
          
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

export default ViewLoans;
