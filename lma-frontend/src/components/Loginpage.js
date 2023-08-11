import '../LoginPage.css'
function LoginPage(){
    return (<div>
        <h4 className="lma">Loan Management Application</h4>
      <div className="adminLogin">
        <h4>Admin Login</h4>
        <div className="loginForm">
          <form>
          <label>Enter Admin User ID:
        <input type="text" name='userID'/>
      </label>
      <label>Enter Admin Password:
        <input type="password" name='userpass' />
      </label>
      <input type="submit" value="login" className="submitbtn"/>
          </form>
        </div>
      </div>
      </div>);
}

export default  LoginPage;
