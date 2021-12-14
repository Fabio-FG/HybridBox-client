import { Link } from "react-router-dom";
import './Authentication.css'
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Authentication() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <div>
      {/* <Link to="/signup">
              <button className="btn">Sign Up</button>
            </Link>

            <Link to="/login">
              <button className="btn">Login</button>
            </Link> */}
      <div className="dropdown">
        <button className="dropbtn">MyHybridBox</button>
        <div className="dropdown-content">
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
         
          
        </div>
      </div>
    </div>
  );
}

export default Authentication;
