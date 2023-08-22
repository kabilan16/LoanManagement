import "../LoginPage.css";

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Table } from "react-bootstrap";
import { Modal, Paper } from '@mui/material';

function ItemMasterEditDetails() {
  const [employees, setEmployees] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editEmployee, setEditEmployee] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deletedEmployeeId, setDeletedEmployeeId] = useState(null);

  useEffect(() => {
    
    const delay = 500;
    setTimeout(() => {
      axios.get('http://localhost:8081/getAllItem')
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
      await axios.put(`http://localhost:8081/updateItem`, editedEmployee);
      const updatedEmployees = employees.map(emp =>
        emp.itemID === editedEmployee.itemId ? editedEmployee : emp
      );
      setEmployees(updatedEmployees);
      setIsEditing(false);
      setEditEmployee(null);
      // Simulate a refresh effect for 700ms
      setTimeout(() => {
        setIsEditing(false);
      }, 700);
    } catch (error) {
      console.error('Error updating items:', error);
    }
  };

  const handleDelete = async (employeeId) => {
    setIsDeleting(true);
    setDeletedEmployeeId(employeeId);
    try {
      await axios.delete(`http://localhost:8081/deleteItemDetails/${employeeId}`);
      setEmployees(employees.filter(emp => emp.itemId !== employeeId));
      // Simulate a refresh effect for 700ms
      setTimeout(() => {
        setIsDeleting(false);
      }, 700);
    } catch (error) {
      console.error('Error deleting items:', error);
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
        await axios.put(`http://localhost:8081/updateItem`, formData);
        onSubmit(formData); // Notify the parent component about the update
        onClose(); // Close the edit form
      } catch (error) {
        console.error('Error updating item:', error);
      }
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Item ID:</label>
            <input
              type="number"
              name="itemId"
              value={formData.itemId}
              onChange={handleInputChange}
              readOnly // To prevent editing the ID
            />
          </div>
          <div>
            <label>Item Description:</label>
            <input
              type="text"
              name="itemDesc"
              value={formData.itemDescription}
              onChange={handleInputChange}
              readOnly // To prevent editing the ID
            />
          </div>
          <div>
          <label>
                      Issue Status
                        <select 
                        name="issueStatus"
                        value={formData.issueStatus}
          onChange={handleInputChange}>
                        <option value="" selected disabled hidden>Select status</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>

          </select>
          </label> 
          </div>
          <div>
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
          <div>
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
          <div>
          <label >
                        Item Cost
                      </label>
                      <input
                        
                        type="number"
                        name="itemCost"
                        value={formData.itemCost}
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
            <th>Item ID</th>
            <th>Description</th>
            <th>Item Status</th>
            <th>Item Make</th>
            <th>Item Category</th>
            <th>Item Valuation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>101</td>
            <td>Tea Table</td>
            <td>Y</td>
            <td>Wooden</td>
            <td>Furniture</td>
            <td>5000</td>
            <td><Button className="button1">Edit</Button> <Button classNmae="button1">Delete</Button></td>
          </tr>
          {employees.map(item => (
            <tr>
          <td key={item.itemId}>{item.itemId}</td>
          <td key={item.itemId}>{item.itemDescription}</td>
          <td key={item.itemId}>{item.issueStatus}</td>
          <td key={item.itemId}>{item.itemMake}</td>
          <td key={item.itemId}>{item.itemCategory}</td>
          <td key={item.itemId}>{item.itemCost}</td>
          
          <td><Button className="button1" onClick={() => handleEdit(item)}>Edit</Button> 
          <Button className="button1" onClick={() => handleDelete(item.itemId)}>Delete</Button></td>
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

export default ItemMasterEditDetails;
