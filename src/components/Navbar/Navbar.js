import "./Navbar.css";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import Authentication from "../Authentication/Authentication";

function Navbar() {
  // Get the value from the context
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="Navbar">
      {/* Logo  redirecting to the home page*/}
      <div>
        <Link to="/" className="logo">
          <h1>HybridBox</h1>
        </Link>
      </div>

      <div className="nav-container">
        <Link to="/channels" className="link-style">Channels</Link>


        {!isLoggedIn && (
          <>
          
           <Authentication />
          </>
        )}

        <div className="profile-img-wrapper">
          {user && (
            <Link to="/profile" className="link-profile">
              <img
                className="profile-img"
                src={user.profileImage}
                alt="profile"
              />
            </Link>
          )}

          
        </div>
        {isLoggedIn && (
          <>
            <button onClick={logOutUser} className="btn">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
