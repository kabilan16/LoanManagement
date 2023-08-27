import "../LoginPage.css";
import React from "react";
import { Carousel, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function UserDashboard() {
  return (
    <div>
      <center>
        <h3 className="pagetitle" style={{marginTop:25}}>User Dashboard</h3>
      </center>

      <Carousel >
        <Carousel.Item>
          <Card style={{height:200}}>
            <Card.Body>
              <Card.Text style={{marginTop:10}}>List of loan cards applied by you</Card.Text>
              <Link to="/viewloans">
                <Button variant="primary">View Loans</Button>
              </Link>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{height:200}}>
            <Card.Body>
              <Card.Text>
                Select the required products and apply for loan
              </Card.Text>
              <Link to="/applyloan">
                <Button variant="primary">Apply Loan</Button>
              </Link>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{height:200}}>
            <Card.Body style={{marginTop:10}}>
              <Card.Text>List of items purchased by you</Card.Text>
              <Link to="/viewitems">
                <Button variant="primary">View Items</Button>
              </Link>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UserDashboard;
