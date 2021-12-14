import { Link } from "react-router-dom";
import './Authentication.css'

function Authentication() {
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
        <div class="dropdown-content">
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
          
        </div>
      </div>
    </div>
  );
}

export default Authentication;
