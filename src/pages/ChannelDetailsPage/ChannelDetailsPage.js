import './ChannelDetailsPage.css'
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ChannelDetailPage() {
  //channel states hook
  const [channel, setChannel] = useState(null);
  const { channelId } = useParams();

  console.log("the channel", channel);

  //function to get the details of one channel id
  const getChannel = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5005/channels/" + channelId
      );

      const oneChannel = response.data;
      console.log("One channel", oneChannel);

      setChannel(oneChannel);
    } catch (error) {
      console.log(error);
    }
  };

  //Useeffect hook
  useEffect(() => {
    getChannel();
  }, []);

  //DISPLAYING THIS
  return (
    <div>
      <h2>Channel Details</h2>
      {channel && (
        <>
          <p>{channel.channelName}</p>
          <img
            src={channel.channelImage}
            alt="channelLogo"
            style={{
              height: "200px",
              width: "250px",
            }}
          />
          <p>{channel.genre}</p>
          <p>
            Official Page: <Link to="">{channel.channelWebsite}</Link>
          </p>
          <div className="description-text">
            <p>{channel.description}</p>
          </div>
          <p>
            <b>Price:</b> {channel.channelPrice}€
          </p>

          <div className="btn-container">
            <div className="add-btn">
              <button>Add Hybrid Box</button>
            </div>
            <Link to="/" className="goback-btn">
              Back
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default ChannelDetailPage;
