import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import Authentication from "../Authentication/Authentication";

function Navbar() {
  // Get the value from the context
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  //Eventlistener for the hamburguer and click
  /*   const hamburguer = document.querySelector(".hamburguer");
   */

  /*   window.onload=function(){
  hamburguer.addEventListener("click", function () {
    this.classList.toggle('is-active');
  });
  } */
  return (
    <div className="container">
      {/* this should be a header */}
      <header className="header">
        <Link to="/" className="logo">
          <h1>HybridBox</h1>
        </Link>
        <input type="checkbox" className="nav-toggle" id="nav-toggle" />
        <label for="nav-toggle" className="nav-toggle-label">
          <span>X</span>
        </label>
        {/* Logo  redirecting to the home page*/}

        <nav className="nav-container">
          <Link to="/channels" className="link-style">
            Channels
          </Link>

          {!isLoggedIn && (
            <>
              <div className="test-wrap">

                <Authentication />
              </div>
            
            </>
          )}

          {isLoggedIn && (
            <>
              <button onClick={logOutUser} className="logout-btn">
                Logout
              </button>
            </>
          )}

          <div className="profile-img-wrapper">
            {user && (
              <Link to="/profile" className="link-profile">
                <img
                  className="profile-img"
                  src={user.image}
                  alt="profile"
                  style={{
                    height: "40px",
                    width: "40px",
                    marginTop: "2px",
                  }}
                />
              </Link>
            )}
          </div>
          <i className="fa fa-bars" style={{color:"white"}}></i>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
