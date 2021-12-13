import "./Navbar.css";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  // Get the value from the context
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="Navbar">
      {/* Logo  redirecting to the home page*/}
      <div className="logo">
        <Link to="/">
          <h1>HybridBox</h1>
        </Link>
      </div>

      <div className="nav-container">
        <Link to="/channels">Channels</Link>


        {!isLoggedIn && (
          <>
            <Link to="/signup">
              <button className="btn">Sign Up</button>
            </Link>

            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          </>
        )}

        <div className="profile-img-wrapper">
          {user && (
            <Link to="/profile">
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
