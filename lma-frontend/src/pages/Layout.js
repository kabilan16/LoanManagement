import { Outlet, Link } from "react-router-dom";
import "../navbar.css";
const Layout = () => {
  const linkStyle = {
    color: "white",
    fontWeight: "bold",
    padding: "10px",
    textDecoration: "none",
  };
  return (
    <>
      <div className="navbar">
        <div className="left">
          <Link to="/" style={linkStyle}>
            Loan Management Application
          </Link>
        </div>
        <div className="right">
          <Link to="/userlogin" style={linkStyle}>
            User Login
          </Link>

          <Link to="/adminlogin" style={linkStyle}>
            Admin Login
          </Link>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
