import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  // Get the value from the context
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="Navbar">
    {/* Logo  redirecting to the home page*/}
      <Link to="/">
        <h1>HybridBox</h1>
      </Link>

      

      <Link to="/channels">Channels</Link>

      {isLoggedIn && (
        <>
          <button onClick={logOutUser}>Logout</button>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>

          <Link to="/login">
            <button>Login</button>
          </Link>
        </>
      )}

      <div className="profile-img-wrapper">
        {user && (
          <Link to="/profile">
            <img className="profile-img" src={user.profileImage} alt="profile" />
            {user.name}
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
