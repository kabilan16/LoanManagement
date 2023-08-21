import "../LoginPage.css";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Table } from "react-bootstrap";
import { Modal, Paper } from '@mui/material';

function LoanDataEdit() {
  const [employees, setEmployees] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editEmployee, setEditEmployee] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deletedEmployeeId, setDeletedEmployeeId] = useState(null);

  useEffect(() => {
    
    const delay = 500;
    setTimeout(() => {
      axios.get('http://localhost:8081/getAllLoanCardDetails')
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
      await axios.put(`http://localhost:8081/updateLoanDetails`, editedEmployee);
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
      await axios.delete(`http://localhost:8081/deleteLoanDetails/${employeeId}`);
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
        await axios.put(`http://localhost:8081/updateLoanDetails`, formData);
        onSubmit(formData); // Notify the parent component about the update
        onClose(); // Close the edit form
      } catch (error) {
        console.error('Error updating employee:', error);
      }
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Loan ID:</label>
            <input
              type="number"
              name="loanId"
              value={formData.loanId}
              onChange={handleInputChange}
              readOnly // To prevent editing the ID
            />
          </div>
          <div>
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
          <div>
            <label>Loan Duration in months:</label>
            <input
              type="number"
              name="durationInMonths"
              value={formData.durationInMonths}
              onChange={handleInputChange}
            />
          </div>
                    <br></br>
          <button type="submit" style={{marginRight: "5px"}}>Submit</button>
          <button onClick={onClose}>Cancel</button>
        </form>
      </div>
    );
  };
  


  return (
    <div>
      <center>
        <h3 className="pagetitle">Loan Management Application</h3>
      </center>
      <center>
        <h3 className="pagetitle">Loan Master Data Details</h3>
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
            <th>Loan ID</th>
            <th>Loan Type</th>
            <th>Duration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>L01</td>
            <td>Furniture</td>
            <td>5</td>
            <td><Button className="button1">Edit</Button> <Button classNmae="button1">Delete</Button></td>
          </tr>
          
          {employees.map(item => (
            <tr>
          <td key={item.employeeId}>{item.loanId}</td>
          <td key={item.employeeId}>{item.loanType}</td>
          <td key={item.employeeId}>{item.durationInMonths}</td>
          
          <td><Button className="button1" onClick={() => handleEdit(item)}>Edit</Button> 
          <Button className="button1" onClick={() => handleDelete(item.loanId)}>Delete</Button></td>
          </tr>
        ))}
          {/* Add more rows as needed */}
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
    </div>
  );
}

export default LoanDataEdit;
