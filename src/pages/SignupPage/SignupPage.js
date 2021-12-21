import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import "./SignupPage.css";
import imageBg from '../../bg-images/6.jpg'

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = async (e) => {
    try {
      e.preventDefault();
      // Create an object representing the request body
      const requestBody = { email, password, name };

      // or with a service
      await authService.signup(requestBody);

      // If the request is successful navigate to login page
      navigate("/login");
    } catch (error) {
      // If the request resolves with an error, set the error message in the state
      setErrorMessage("Enter valid credentials.");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-bg">
      <img src={imageBg} alt="bg" className="signup-bg"/>
        <div className="signup-wrapper">
          <h1>Sign Up</h1>

          <form onSubmit={handleSignupSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleName}
              placeholder="Name"
            />

            <label>Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleEmail}
              placeholder="Email"
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
              placeholder="Password"
            />

            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <p>Already have account?</p>
          <Link to={"/login"} className="login-link">
            {" "}
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
