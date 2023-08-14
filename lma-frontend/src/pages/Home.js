import "../LoginPage.css";
import Typewriter from "typewriter-effect";
function Home() {
  return (
    <div>
      <div className="adminLogin">
        <div className="homeleft">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              strings: [
                "WELCOME TO LOAN MANAGEMENT APPLICATION",
                "Head over to the navbar to Login as User or Admin",
              ],
            }}
          />
        </div>
        <div className="homeright">
          {/* <img
            src={
              "https://savvyhrms.com/wp-content/uploads/2020/11/loan-management-768x576.jpg"
            }
          /> */}
          <p>
            A web application that provides a facility for GIS Global employees
            to purchase items from GIS Global Mart and facilitates flexible
            loans to purchase items.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
