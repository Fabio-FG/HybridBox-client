import "./StreamDetailPage.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function StreamDetailPage() {
  //Streams states hook
  const [stream, setStream] = useState("");
  const { streamId } = useParams();

  //function to get details of a streaming service id

  const getStream = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5005/streams/" + streamId
      );
      const oneStream = response.data;

      setStream(oneStream);
    } catch (error) {
      console.log(error);
    }
  };

  //use Effect hook for the stream to display it once initialization

  useEffect(() => {
    getStream();
  }, []);

  return (
    <div>
      {stream && (
        <>
          <div className="stream">
           
            <img src={stream.streamImage} 
            className="details-logo-img"alt="streamLogo" />
            {/* <p>
        Official Page: <Link to={stream.streamWebsite}>Netflix</Link>
      </p> */}
            <h2 className="details-title">Stream details</h2>
            <div className="channel-info-text">
            <p>
              <b>Channel Name:</b> {stream.streamName}
            </p>
            <p>
              <b>Channel Genre:</b> {stream.genre}
            </p>
            <p>
              <b>Official Page:</b> <Link to="">{stream.streamWebsite}</Link>
            </p>
          </div>
          <div className="description-text">
            <p>
              <b>About:</b>
              <br></br>
              {stream.description}
            </p>
          </div>
          <p>
            <b>Price:</b> {stream.streamPrice}€
          </p>

          <div className="btn-container">
           

            <Link to="/channels">
              <button className="goback-btn">Back</button>
            </Link>
          </div>
          </div>
        </>
      )}
    </div>
  );
}

export default StreamDetailPage;
