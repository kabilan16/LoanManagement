import "../LoginPage.css";

import React from "react";
import { Button, Table } from "react-bootstrap";
function CustomerData() {
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
            <th>Employee ID</th>
            <th>Employee Description</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Gender</th>
            <th>Date_of_birth</th>
            <th>Date_of_Joining</th>
            <th>Changes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>E01</td>
            <td>Ram</td>
            <td>Manager</td>
            <td>Finance</td>
            <td>Male</td>
            <td>1973-01-01</td>
            <td>2000-01-01</td>
            <td><Button className="button1">Edit</Button> <Button classNmae="button1">Delete</Button></td>
          </tr>
          <tr>
            <td>E02</td>
            <td>Anita</td>
            <td>Manager</td>
            <td>Finance</td>
            <td>Female</td>
            <td>1974-01-01</td>
            <td>2001-01-01</td>
            <td><Button className="button1">Edit</Button> <Button className="button1">Delete</Button></td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </Table>
    </div>
  );
}

export default CustomerData;
