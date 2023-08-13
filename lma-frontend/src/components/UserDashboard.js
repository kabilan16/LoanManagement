import '../LoginPage.css'
function UserDashboard(){
    return (<div>
       <center> <h4 className="lma">Loan Management Application</h4>    </center>
      <center><h3>User Dashboard</h3></center>
      <br></br>
      <div style={{display: "flex", justifyContent: "space-around"}}>
      <button className="adashboard">View loans</button>
      <button className="adashboard"> Apply for loans</button>
      <button className="adashboard">View Items Purchased</button>
      </div>
      </div>);
}

export default  UserDashboard;
