// src/pages/LoginPage.js
import "./LoginPage.css";

import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";
import imageBg from "../../bg-images/6.jpg";


function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  // Get the function for saving and verifying the token
  const { logInUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = async (e) => {
    try {
      e.preventDefault();
      const requestBody = { email, password };

      // or with a service
      const response = await authService.login(requestBody);

      // Save the token and set the user as logged in ...
      const token = response.data.authToken;
      logInUser(token);

      navigate("/");
    } catch (error) {
      // If the request resolves with an error, set the error message in the state
      setErrorMessage("Enter valid credentials.");
    }
  };




  return (
    <div className="login-page">
      <div className="login-bg">
        <img src={imageBg} alt="bg" className="login-bg" />
        <div className="login-wrapper">
          <h1 className="title">Login</h1>

          <form onSubmit={handleLoginSubmit}>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleEmail}
              placeholder="Email"
            />

            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
              placeholder="Password"
            />

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <p className="no-acc">Don't have an account yet?</p>
          <Link to={"/signup"} className="signup-link">
            {" "}
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
