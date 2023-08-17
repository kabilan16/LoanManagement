import "../LoginPage.css";

import React from "react";
import { Button, Table } from "react-bootstrap";
function LoanDataEdit() {
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
          <tr>
            <td>L02</td>
            <td>Stationary</td>
            <td>1</td>
            <td><Button className="button1">Edit</Button> <Button className="button1">Delete</Button></td>
          </tr>
          <tr>
            <td>L03</td>
            <td>Crockery</td>
            <td>2</td>
            <td><Button className="button1">Edit</Button> <Button className="button1">Delete</Button></td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </Table>
    </div>
  );
}

export default LoanDataEdit;
