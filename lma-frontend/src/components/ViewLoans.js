import "../LoginPage.css";
import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { Table } from "react-bootstrap";
function ViewLoans() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    
    const delay = 500;
    setTimeout(() => {
      axios.get('http://localhost:8081/getAllLoanDetails/21')
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
          {employees.map(emp => (
           <center>
           <div className="userDetails"> 
          <p key={emp.employeeId}>Employee ID: {emp.employeeId}</p>
          <p key={emp.employeeId}>Designation: {emp.designation}</p>
          <p key={emp.employeeId}>Department: {emp.department}</p>
          </div>
      </center>
          
        ))}

        
        
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
    </div>
  );
}

export default ViewLoans;
