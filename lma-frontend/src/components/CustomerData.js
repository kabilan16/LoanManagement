
import "../LoginPage.css";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Table } from "react-bootstrap";
import { Modal, Paper } from '@mui/material';

import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function CustomerData() {

  const [employees, setEmployees] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editEmployee, setEditEmployee] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deletedEmployeeId, setDeletedEmployeeId] = useState(null);
  
const navigate = useNavigate();
  const handleLogout = (event) => {
    navigate("/");
    localStorage.clear();
    
  }
  const storedToken = localStorage.getItem('jwtToken');
  const headers = {
    'Authorization': `Bearer ${storedToken}`,
    'Content-Type': 'application/json',
    // Other headers as needed
  };
  
const jwt= localStorage.getItem('jwtToken');

  useEffect(() => {

  if(jwt===null || jwt=== undefined)
  {
    navigate("/");
  }
    const delay = 500;
    setTimeout(() => {
      axios.get('http://localhost:8081/getAllEmployee',{headers})
        .then(response => {
          console.log('Fetched data:', response.data);
          setEmployees(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, delay);
  }, ["no response "]);

  const handleEdit = (employee) => {
    setIsEditing(true);
    setEditEmployee(employee);
  };

  const handleEditSubmit = async (editedEmployee) => {
    try {
      await axios.put(`http://localhost:8081/editEmployee`, editedEmployee, {headers});
      const updatedEmployees = employees.map(emp =>
        emp.employeeId === editedEmployee.employeeId ? editedEmployee : emp
      );
      setEmployees(updatedEmployees);
      setIsEditing(false);
      setEditEmployee(null);
      // Simulate a refresh effect for 700ms
      setTimeout(() => {
        setIsEditing(false);
      }, 700);
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  const handleDelete = async (employeeId) => {
    setIsDeleting(true);
    setDeletedEmployeeId(employeeId);
    try {
      await axios.delete(`http://localhost:8081/deleteEmployee/${employeeId}`, {headers});
      setEmployees(employees.filter(emp => emp.employeeId !== employeeId));
      // Simulate a refresh effect for 700ms
      setTimeout(() => {
        setIsDeleting(false);
      }, 700);
    } catch (error) {
      console.error('Error deleting employee:', error);
      setIsDeleting(false);
    }
  };

  const EditForm = ({ employee, onClose, onSubmit }) => {
    const [formData, setFormData] = useState(employee);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        await axios.put(`http://localhost:8081/editEmployee`, formData, {headers});
        onSubmit(formData); // Notify the parent component about the update
        onClose(); // Close the edit form
      } catch (error) {
        console.error('Error updating employee:', error);
      }
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          {/* <div>
            <label>Employee ID:</label>
            <input
              type="number"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleInputChange}
              readOnly // To prevent editing the ID
            />
          </div>
          <div>
            <label>Employee Name:</label>
            <input
              type="text"
              name="employeeName"
              value={formData.employeeName}
              onChange={handleInputChange}
            />
          </div> */}
          <div>
            <label>Designation:</label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
            />
          </div>
          {/* <div>
            <label>Department:</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Date of Joining:</label>
            <input
              type="date"
              name="dateOfJoining"
              value={formData.dateOfJoining}
              onChange={handleInputChange}
            />
          </div> */}
          <br></br>
          <button type="submit" style={{marginRight: "5px"}}>Submit</button>
          <button onClick={onClose}>Cancel</button>
        </form>
      </div>
    );
  };
  


  return (
    <div>
      <div>
  <Button variant="dark" style={{ position: 'absolute', right: '0'}} onClick={handleLogout}>Logout</Button>
  </div>
      <center>
        <h3 className="pagetitle">Loan Management Application</h3>
      </center>
      <center>
        <h3 className="pagetitle">Customer Master Data Details</h3>
      </center>
      <center>
        <div className="userDetails">
          {/*<p>Employee id: xyz</p>
          <p>Designation: xyz</p>
  <p>Department: xyz</p>*/}
        </div>
      </center>
      <Table bordered hover responsive className="custom-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Description</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Gender</th>
            <th>Date_of_birth</th>
            <th>Date_of_Joining</th>
            <th style={{minWidth:'200px'}}>Changes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Ram</td>
            <td>Manager</td>
            <td>Finance</td>
            <td>Male</td>
            <td>1973-01-01</td>
            <td>2000-01-01</td>
            <td><Button className="button1" >Edit</Button> <Button classNmae="button1">Delete</Button></td>
          </tr>
          
          {/* Add more rows as needed */}
          
          {employees.map(item => (
            <tr>
          <td key={item.employeeId}>{item.employeeId}</td>
          <td key={item.employeeId}>{item.employeeName}</td>
          <td key={item.employeeId}>{item.designation}</td>
          <td key={item.employeeId}>{item.department}</td>
          <td key={item.employeeId}>Male</td>
          <td key={item.employeeId}>{item.dateOfBirth}</td>
          <td key={item.employeeId}>{item.dateOfJoining}</td>
          <td><Button className="button1"  onClick={() => handleEdit(item)}>Edit</Button> 
          <Button className="button1" onClick={() => handleDelete(item.employeeId)}>Delete</Button></td>
          </tr>
        ))}
          
        </tbody>
      </Table>
      <Modal open={isEditing} onClose={() => setIsEditing(false)}>
        <div className="modal-container">
          <Paper elevation={3} className="modal-paper">
            <EditForm
              employee={editEmployee}
              onClose={() => setIsEditing(false)}
              onSubmit={handleEditSubmit}
            />
          </Paper>
        </div>
      </Modal>
      {isDeleting && <div>Deleting...</div>}
      
<Link to="/adashboard">
                <center><Button variant="primary" style={{marginTop:30, backgroundColor:"#f8f9fa", color:"black", padding:"12px"}}>Go to Admin Dashboard</Button></center>
              </Link>
    </div>
  );
}

export default CustomerData;
