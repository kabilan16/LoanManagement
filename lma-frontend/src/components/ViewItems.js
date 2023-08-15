import "../LoginPage.css";

import React from "react";
import { Table } from "react-bootstrap";
function ViewItems() {
  return (
    <div>
      <center>
        <h3 className="pagetitle">Items Purchased</h3>
      </center>
      <center>
        <div className="userDetails">
          <p>Employee id: xyz</p>
          <p>Designation: xyz</p>
          <p>Department: xyz</p>
        </div>
      </center>
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
            <td>Table</td>
            <td>Wooden</td>
            <td>Furniture</td>
            <td>5000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Tea Set</td>
            <td>Glass</td>
            <td>Crockery</td>
            <td>2000</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </Table>
    </div>
  );
}

export default ViewItems;
