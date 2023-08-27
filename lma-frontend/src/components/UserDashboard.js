import "../LoginPage.css";
import React from "react";
import { Carousel, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
function UserDashboard() {
  const location=useLocation();
  const passedProp = location.state && location.state.passedProp;
  console.log("received data: ",passedProp);
  return (
    <div>
      <center>
        <h3 className="pagetitle">User Dashboard</h3>
      </center>

      <Carousel>
        <Carousel.Item>
          <Card>
            <Card.Body>
              <Card.Text>List of loan cards applied by you</Card.Text>
              <Link to="/viewloans" state={{ passedProp }}>
                <Button variant="primary">View Loans</Button>
              </Link>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Body>
              <Card.Text>
                Select the required products and apply for loan
              </Card.Text>
                            <Link to="/applyloan" state={{ passedProp }}>
                <Button variant="primary">Apply Loan</Button>
              </Link>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Body>
              <Card.Text>List of items purchased by you</Card.Text>
              <Link to="/viewitems" state={{ passedProp }}>
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
