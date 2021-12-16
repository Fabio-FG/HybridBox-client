import { Link } from "react-router-dom";
import './Authentication.css'


function Authentication() {
  
  return (
    <div>
      
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
