import "./HomePage.css";
import "animate.css/animate.min.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";


function HomePage() {
  //use effect for the scroll animations
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="intro-container">
        <img
          src="https://hd-report.com/wp-content/uploads/2015/10/sling-tv-channels-grid-color-1280px.jpg"
          alt="channel-grid"
          className="tv-grid"
        />
        {/* <h1>Home Page</h1> */}

        <h3 className="intro-text">
          Customise your TV channels deals with HybridBox. Now you can truly see
          what you pay for.
        </h3>
      </div>

 
      <div className="box-1" > {/* data-aos="fade-up" */}
        <div className="how-wrapper">
          <h3>How does HybridBox work?</h3>

          <p>
            HybridBox generates the best deal available for you by
            cross-searching the prices and sales promotions from global Internet
            Service Providers and Media companies and applying a HybridBox
            member discount on top of it! HybridBox has many protocols with
            different international providers.
          </p>
        </div>
      </div>

 
      <div className="box">
        <h2 className="why-title">Why HybridBox</h2>
        <div className="why-box">
         
          <div data-aos="fade-left" className="quality-box">
            <h5 className="quality-title">Quality</h5>
            <p className="quality-text">
              HybridBox believes that quality is part of having an excellent
              product. Therefore excellence and quality are imprint in
              HybridBox's values.
            </p>
          </div>
          <div data-aos="fade-right" className="price-box">
            <h5 className="price-title">Price</h5>
            <p className="price-text">
              We believe that everyone should have the same opportunities and so
              HybridBox tries to accomodate to all types of socio-economic
              classes.
            </p>
          </div>
          <div data-aos="fade-left" className="freedom-box">
            <h5 className="freedom-title">Freedom</h5>
            <p className="freedom-text">
              Because HybridBox believes that freedom is part of Human nature.
              In this day and age with so many restricted freedom aspects in our
              lives, HybridBox brings real freedom to the users.
            </p>
          </div>
        </div>
      </div>
  
      <div className="bg-wrapper">
        <div className="box">
          <h3 className="dunno-title">Don't know what to choose?</h3>
          <p className="deals-text">
            HybridBox provides pre-made TV stream deals that include some of the
            most popular on-demand channels and streaming services for those who
            have a hard time on what to pick. Check them out!
          </p>
        </div>
        <div className="deals-container">
          <div data-aos="flip-right" className="deal-box" id="flip-1-box">
            <div className="flip-box">
              <div className="deal-wrapper">
                <h3>Netflix n' chill</h3>
                <div className="deal-list">
                  <p>Netflix</p>
                  <p>TVCine Package</p>
                  <p>Fox Movies</p>
                  <p>HBO</p>
                  <p>Hulu</p>
                </div>
              </div>
              <div className="btn-wrapper">
                <Link to="/channels" className="learn-btn" >Learn More</Link>
              </div>
            </div>
          </div>
          <div data-aos="flip-right" className="deal-box" id="flip-2-box">
            <div className="flip-box">
              <div className="deal-wrapper">
                <h3>The AmazoNimate</h3>
                <div className="deal-list">
                  <p>Amazon Prime</p>
                  <p>Discovery Channel</p>
                  <p>Disney +</p>
                  <p>Nickelodeon</p>
                  <p>Crunchyroll</p>
                </div>
              </div>
              <div className="btn-wrapper">
              <Link to="/channels" className="learn-btn" >Learn More</Link>
              </div>
            </div>
          </div>
          <div data-aos="flip-right" className="deal-box" id="flip-3-box">
           
              <div className="deal-wrapper">
                <h3>The Oriental</h3>
                <div className="deal-list">
                  <p>Tencent Video</p>
                  <p>iQIYI</p>
                  <p>KBS World</p>
                  <p>Phoenix Channel</p>
                  <p>NHK</p>
                </div>
              </div>
              <div className="btn-wrapper">
              <Link to="/channels" className="learn-btn" >Learn More</Link>
              </div>
            
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default HomePage;
