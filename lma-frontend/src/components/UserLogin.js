import '../LoginPage.css'
function UserLogin(){
    return (<div>
       <center> <h4 className="lma">Loan Management Application</h4>    </center>
      <div className="adminLogin">
        <center><h4>User Login</h4></center>
        <div className="loginForm">
        <center> <form style={{backgroundColor: "beige", borderRadius: "20px", padding: "30px", maxWidth: "450px"}}>
          <label>Enter User ID:
        <input type="text" name='userID'/>
      </label>
      <label>Enter User Password:
        <input type="password" name='userpass' />
      </label>
      <input type="submit" value="login" className="submitbtn"/>
          </form></center>
        </div>
      </div>
      </div>);
}

export default  UserLogin;
