import "../LoginPage.css";

import React from "react";
import { Button, Table } from "react-bootstrap";
function ItemMasterEditDetails() {
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
          <tr>
            <td>102</td>
            <td>Dining Table</td>
            <td>Y</td>
            <td>Wooden</td>
            <td>Furniture</td>
            <td>15000</td>
            <td><Button className="button1">Edit</Button> <Button className="button1">Delete</Button></td>
          </tr>
          <tr>
            <td>103</td>
            <td>Dining Set</td>
            <td>N</td>
            <td>Glass</td>
            <td>Crockery</td>
            <td>9000</td>
            <td><Button className="button1">Edit</Button> <Button className="button1">Delete</Button></td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </Table>
    </div>
  );
}

export default ItemMasterEditDetails;
