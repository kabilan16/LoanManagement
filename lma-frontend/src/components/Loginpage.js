import '../LoginPage.css'
function LoginPage(){
    return (<div>
        <center><h4 className="lma">Loan Management Application</h4></center>
      <div className="adminLogin">
        <center><h4>Admin Login</h4></center>
        <div className="loginForm">
         <center> <form style={{backgroundColor: "beige", borderRadius: "20px", padding: "30px", maxWidth: "450px"}}>
          <label>Enter Admin User ID:
        <input type="text" name='userID'/>
      </label>
      <label>Enter Admin Password:
        <input type="password" name='userpass' />
      </label>
      <input type="submit" value="login" className="submitbtn"/>
          </form></center>
        </div>
      </div>
      </div>);
}

export default  LoginPage;
