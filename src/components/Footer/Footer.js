import "./Footer.css";
import { Link } from "react-router-dom";
import githubLogo from "../../icons/github.png";
import linkedinLogo from "../../icons/linkedin.png";

function Footer() {
  return (
    <div className="footer">
      <div className="text-container">
        <section className="socials">
          <Link to="https://github.com/Fabio-FG">
            <img src={githubLogo} alt="github-logo1" className="socials-logo" />
          </Link>
          <Link to="https://www.linkedin.com/in/fabiofguerreiro/">
            <img
              src={linkedinLogo}
              alt="linkedin-logo"
              className="socials-logo"
            />
          </Link>
        </section>
        
        <p>Developed by Fábio Guerreiro &copy;</p>
        <span>
          <small>2021</small>
        </span>
      </div>
    </div>
  );
}

export default Footer;
