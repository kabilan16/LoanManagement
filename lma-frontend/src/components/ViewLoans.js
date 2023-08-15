import "../LoginPage.css";

import React from "react";
import { Table } from "react-bootstrap";
function ViewLoans() {
  return (
    <div>
      <center>
        <h3 className="pagetitle">Loan Cards Availed</h3>
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
            <th>Loan ID</th>
            <th>Loan Type</th>
            <th>Duration</th>
            <th>Card Issue Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>5</td>
            <td>12/01/2023</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane</td>
            <td>6</td>
            <td>28/03/2023</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </Table>
    </div>
  );
}

export default ViewLoans;
