import "../LoginPage.css";
import React from "react";
import { Carousel, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

function UserDashboard() {
  const location=useLocation();
  const passedProp = location.state && location.state.passedProp;
  
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
  
  console.log("received data: ",passedProp);
  return (
    <div>
   
  <div>
  <Button variant="dark" style={{ position: 'absolute', right: '0', marginRight:'15px'}} onClick={handleLogout}>Logout</Button></div>
      <center>
        <h3 className="pagetitle" style={{marginTop:25}}>User Dashboard</h3>
      </center>

      <Carousel>
        <Carousel.Item>
          <Card style={{height:'50%', width:'35%'}}>
            <Card.Body>
              <img src="https://th.bing.com/th/id/OIP.Vup-jpUySBKbg_aOASIN_gHaE7?pid=ImgDet&rs=1" style={{ marginRight:'10px'}}></img>
              <Card.Text>List of loan cards applied by you</Card.Text>
              <Link to="/viewloans" state={{ passedProp }}>
                <Button variant="primary">View Loans</Button>
              </Link>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{height:'50%', width:'35%'}}>
            <Card.Body>
            <img src="https://www.primeclassicdesign.com/images/leather-sectionals-sofas/peach-italian-leather-sectional-corner-couch-small-size-a973.jpg" style={{ marginRight:'10px', height:'270px', width:'95%'}}></img>
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
          <Card style={{height:'50%', width:'35%'}}>
            <Card.Body style={{marginTop:10}}>
              <img src="https://www.wisebread.com/files/fruganomics/blog-images/hand_giving_and_hand_receiving_money.jpg" style={{ marginRight:'10px', width:'95%'}}></img>
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
