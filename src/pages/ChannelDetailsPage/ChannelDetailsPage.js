import "./ChannelDetailsPage.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ChannelDetailPage() {
  //channel states hook
  const [channel, setChannel] = useState(null);
  const { channelId } = useParams();

  

  //function to get the details of one channel id
  const getChannel = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5005/channels/" + channelId
      );

      const oneChannel = response.data;
     

      setChannel(oneChannel);
    } catch (error) {
      console.log(error);
    }
  };

  //Useeffect hook
  useEffect(() => {
    getChannel();
  }, );

  //DISPLAYING THIS
  return (
    <div>
      {channel && (
        <>
          <img
            src={channel.channelImage}
            alt="channelLogo"
            className="details-logo-img"
          />
          <h2 className="details-title">Details</h2>
          <div className="channel-info-text">
            <p>
              <b>Channel Name:</b> {channel.channelName}
            </p>
            <p>
              <b>Channel Genre:</b> {channel.genre}
            </p>
            <p>
              <b>Official Page:</b> <Link to="">{channel.channelWebsite}</Link>
            </p>
          </div>
          <div className="description-text">
            <p>
              <b>About:</b>
              <br></br>
              {channel.description}
            </p>
          </div>
          <p>
            <b>Price:</b> {channel.channelPrice}€
          </p>

          <div className="btn-container">
           

            <Link to="/channels">
              <button className="goback-btn">Back</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default ChannelDetailPage;
