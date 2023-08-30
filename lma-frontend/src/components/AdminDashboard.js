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
          <Card style={{height:'50%', width:'35%'}} >
            <Card.Body >
            
              <Card.Title>Customer Data Management</Card.Title>
              <img src="https://cdn0.iconfinder.com/data/icons/ios-edge-line-1/25/Add-Users-1024.png" style={{ marginRight:'10px', height:'30%', width:'30%'}}></img>
              <Card.Text>Adding new users/customers details</Card.Text>
              <Link to="/addcustomer">
                <Button variant="primary">Add users</Button>
              </Link>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{height:'50%', width:'35%'}}>
            <Card.Body>
            
              <Card.Title>Customer Data Management</Card.Title>
              <img src="https://th.bing.com/th/id/R.fb22e1f3ba92bf49ad0b852d09930f24?rik=z5P9%2fqODvDK7xw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_384698.png&ehk=5NYFMuKwIGLqcQwUzQQ1YtjFG%2fYh%2bX0U0TLCyrmpvQ8%3d&risl=&pid=ImgRaw&r=0" style={{ marginRight:'10px', height:'30%', width:'30%'}}></img>
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
          <Card style={{height:'50%', width:'35%'}}>
            <Card.Body>
            
              <Card.Title>Loan Card Management</Card.Title>
              <img src="https://cdn4.iconfinder.com/data/icons/interface-essential-1/24/addition-edit-task-edition-checklist-clipboard-add-form-512.png" style={{ marginRight:'10px', height:'30%', width:'30%'}}></img>
<Card.Text>Add details for new Loan cards</Card.Text>
              <Link to="/loancarddata">
                <Button variant="primary">Add Loan Card </Button>
              </Link>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{height:'50%', width:'35%'}}>
            <Card.Body>
            
              <Card.Title>Loan Card Management</Card.Title>
              <img src="https://th.bing.com/th/id/R.d16db990cdc487363d9c74a7f755e828?rik=6KTv7ax3cimBZg&riu=http%3a%2f%2ffreevector.co%2fwp-content%2fuploads%2f2011%2f12%2f84380-edit-button.png&ehk=jFwqsCs7QYz7kW29p2jvVLMWQWh8yIscy0cXirD21ug%3d&risl=&pid=ImgRaw&r=0" style={{ marginRight:'10px', height:'30%', width:'30%'}}></img>
<Card.Text>Edit details for existing Loan cards</Card.Text>
              <Link to="/loandataedit">
                <Button variant="primary">Edit Loan Card </Button>
              </Link>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{height:'50%', width:'35%'}}>
            <Card.Body>
            
              <Card.Title>Items Management</Card.Title>
              <img src="https://cdn0.iconfinder.com/data/icons/fashion-clothes-2/48/4-256.png" style={{ marginRight:'10px', height:'30%', width:'30%'}}></img>
<Card.Text>Add details about an item</Card.Text>
              <Link to="/additems">
                <Button variant="primary">Add Item</Button>
              </Link>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{height:'50%', width:'35%'}}>
            <Card.Body>
            
              <Card.Title>Items Management</Card.Title>
              <img src="https://cdn4.iconfinder.com/data/icons/user-interface-176/32/UIF-175-512.png" style={{ marginRight:'10px', height:'30%', width:'30%'}}></img>
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
