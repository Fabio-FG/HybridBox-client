import "./HomePage.css";

function HomePage() {
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

      {/* Landing page stuff */}
      <div className="box">
        <h3>How does HybridBox work?</h3>

        <p>
          HybridBox generates the best deal available for you by cross-searching
          the prices and sales promotions from global Internet Service Providers
          and Media companies and applying a HybridBox member discount on top of
          it! HybridBox has many protocols with different international
          providers.{" "}
        </p>
      </div>

      <div className="box">
        <h3>Why HybridBox</h3>
        <div className="why-box">
          <p>Quality</p>
          <p>
            HybridBox believes that quality is part of having an excellent
            product. Therefore excellence and quality are imprint in HybridBox's
            values.
          </p>
          <p>Price</p>
          <p>
            We believe that everyone should have the same opportunities and so
            HybridBox tries to accomodate to all types of socio-economic
            classes.
          </p>
          <p>Freedom</p>
          <p>
            Because HybridBox believes that freedom is part of Human nature. In
            this day and age with so many restricted freedom aspects in our
            lives, HybridBox brings real freedom to the users.
          </p>
        </div>
      </div>


      <div className="bg-wrapper">
      <div className="box">

        <h3>Don't know what to choose? Check these deals</h3>
        <p>
          HybridBox provides pre-made TV stream deals that include some of the
          most popular channels and streaming services for those who have a hard
          time on what to pick.
        </p>
      </div>
        <div className="deals-container">
          <div className="deal-box">
            <div className="deal-wrapper">
              <h3>Netflix n' chill</h3>
              <p>Netflix</p>
              <p>TVCine 1</p>
              <p>TVCine 2</p>
              <p>TVCine 3</p>
              <p>TVCine 4</p>
            </div>
            <div className="btn-wrapper">
              <button className="learn-btn">Learn More</button>
            </div>
          </div>
          <div className="deal-box">
            <div className="deal-wrapper">
              <h3>The AmazoNimate</h3>
              <p>Amazon Prime</p>
              <p>Discovery Channel</p>
              <p>Disney +</p>
              <p>Nickelodeon</p>
              <p>Crunchyroll</p>
            </div>
            <div className="btn-wrapper">
              <button className="learn-btn">Learn More</button>
            </div>
          </div>
          <div className="deal-box">
            <div className="deal-wrapper">
              <h3>The Oriental</h3>
              <p>Tencent Video</p>
              <p>iQIYI</p>
              <p>KBS World</p>
              <p>Phoenix Channel</p>
              <p>NHK</p>
            </div>
            <div className="btn-wrapper">
              <button className="learn-btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <h3>Latest additions</h3>
        {/* slider if possible */}
      </div>
    </div>
  );
}

export default HomePage;
