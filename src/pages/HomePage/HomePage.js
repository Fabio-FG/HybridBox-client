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
      </div>
      <div className="box">
        <h3>Why HybridBox</h3>
        <p>Quality</p>
        <p>Price</p>
        <p>Freedom</p>
      </div>
      <div className="box">
        <h3>Don't know what to choose? Check these deals</h3>
        <p>HybridBox provides pre-made TV stream deals that include some of the most popular channels and streaming services for those who have a hard time on what to pick.</p>
        <div className="deals-container">
          <div className="deal-box">Deal 1</div>
          <div className="deal-box">Deal 2</div>
          <div className="deal-box">Deal 3</div>
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
