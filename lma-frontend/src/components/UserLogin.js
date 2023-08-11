import '../LoginPage.css'
function UserLogin(){
    return (<div>
        <h4 className="lma">Loan Management Application</h4>
      <div className="adminLogin">
        <h4>User Login</h4>
        <div className="loginForm">
          <form>
          <label>Enter User ID:
        <input type="text" name='userID'/>
      </label>
      <label>Enter User Password:
        <input type="password" name='userpass' />
      </label>
      <input type="submit" value="login" className="submitbtn"/>
          </form>
        </div>
      </div>
      </div>);
}

export default  UserLogin;
