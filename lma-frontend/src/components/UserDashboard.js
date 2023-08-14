import "../LoginPage.css";
function UserDashboard() {
  return (
    <div>
      <center>
        <h3 className="pagetitle">User Dashboard</h3>
      </center>
      <br></br>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button className="adashboard">View loans</button>
        <button className="adashboard"> Apply for loans</button>
        <button className="adashboard">View Items Purchased</button>
      </div>
    </div>
  );
}

export default UserDashboard;
