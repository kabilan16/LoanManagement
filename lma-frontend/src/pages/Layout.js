import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    const linkStyle=
    {
        marginTop: "5px",
        padding: "5px",
        backgroundColor: "beige",
        fontWeight: "bold",
        borderRadius: "1px"
    };
  return (
    <>
    <div className="navbar">
      
       
            <Link to="/" style={linkStyle}>Home</Link>
          
            <Link to="/userlogin" style={linkStyle}>user login</Link>
          
            <Link to="/adminlogin" style={linkStyle}>admin login</Link>
          
      
      </div>

      <Outlet />
    </>
  )
};

export default Layout;