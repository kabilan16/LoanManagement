import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <div className="navbar">
      
       
            <Link to="/">Home</Link>
          
            <Link to="/userlogin">user login</Link>
          
            <Link to="/adminlogin">admin login</Link>
          
      
      </div>

      <Outlet />
    </>
  )
};

export default Layout;