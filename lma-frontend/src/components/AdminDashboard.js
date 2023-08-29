import "../LoginPage.css";

import React from "react";
import { Carousel, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

function AdminDashboard() {
  const navigate = useNavigate();
  const handleLogout = (event) => {
    navigate("/");
    localStorage.clear();
    
  }
  
const jwt= localStorage.getItem('jwtToken');
useEffect(()=>
{
  if(jwt===null || jwt=== undefined)
  {
    navigate("/");
  }
},[]);
  return (
    <div>
      <div>
      <Button variant="dark" style={{ position: 'absolute', right: '0', marginRight:'15px'}} onClick={handleLogout}>Logout</Button>
      </div>
      <center>
        <h3 className="pagetitle">Admin Dashboard</h3>
      </center>
      
      <Carousel>
        <Carousel.Item>
          <Card>
            <Card.Body>
              <Card.Title>Customer Data Management</Card.Title>
              <Card.Text>Adding new users/customers details</Card.Text>
              <Link to="/addcustomer">
                <Button variant="primary">Add users</Button>
              </Link>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Body>
              <Card.Title>Customer Data Management</Card.Title>
              <Card.Text>
                Editing the existing users/customers details
              </Card.Text>
              <Link to="/customerdata">
                <Button variant="primary">Edit users</Button>
              </Link>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Body>
              <Card.Title>Loan Card Management</Card.Title>
              <Card.Text>Add details for new Loan cards</Card.Text>
              <Link to="/loancarddata">
                <Button variant="primary">Add Loan Card </Button>
              </Link>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Body>
              <Card.Title>Loan Card Management</Card.Title>
              <Card.Text>Edit details for existing Loan cards</Card.Text>
              <Link to="/loandataedit">
                <Button variant="primary">Edit Loan Card </Button>
              </Link>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Body>
              <Card.Title>Items Management</Card.Title>
              <Card.Text>Add details about an item</Card.Text>
              <Link to="/additems">
                <Button variant="primary">Add Item</Button>
              </Link>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Body>
              <Card.Title>Items Management</Card.Title>
              <Card.Text>Edit details of existing items</Card.Text>
              <Link to="/itemmastereditdetails">
                <Button variant="primary">Edit Items</Button>
              </Link>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default AdminDashboard;
