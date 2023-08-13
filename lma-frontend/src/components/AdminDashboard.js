import '../LoginPage.css'
function AdminDashboard(){
    return (<div>
       <center> <h4 className="lma">Loan Management Application</h4>    </center>
      <center><h3>Admin Dashboard</h3></center>
      <br></br>
     <div style={{display: "flex", justifyContent: "space-around"}}> <button className="adashboard">Customer Data Management</button>
      <button className="adashboard"> Loan Card Management</button>
      <button className="adashboard">Items Master Card</button>
      </div>
      </div>);
}

export default  AdminDashboard;
