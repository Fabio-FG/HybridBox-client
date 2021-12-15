import "./../ChannelListPage/ChannelListPage.css";
import channelsService from "../../services/channels.service";
import streamsService from "../../services/streams.service";
import authService from "../../services/auth.service";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Searchbar from "../../components/Searchbar/Searchbar";
import CustomList from "../../components/CustomList/CustomList";

function StreamListPage() {
  //function to get all streams

  const getAllStreams = async () => {
    try {
      const response = await streamsService.getAllStreams();
      /*  const response = await axios.get("http://localhost:5005/streams"); */
      setStreams(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllStreams();
  }, []);

  //Add stream

  const addStream = async (id) => {
    try {
      const addedItem = await channelsService.addStream(id);
      setIsAdded(!isAdded);
      console.log("adding");
    } catch (error) {
      console.log(error);
    }
  };

  const [streams, setStreams] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  return (
    <div>
      {/* Streams render */}
      <h1 className="channel-list-title">Streaming Services list</h1>
      <div className="stream-container">
        {streams.map((oneStream) => {
          return (
            <div className="streamCard" key={oneStream._id}>
              <div className="info-container">
                <Link to={"/streams/" + oneStream._id} className="link-service">
                  <img
                    src={oneStream.streamImage}
                    alt={oneStream.streamName}
                    className="stream-img"
                  />
                  <h4>{oneStream.streamName}</h4>
                </Link>
              </div>
              <button
                onClick={() => addStream(oneStream._id)}
                key={oneStream._id}
                className="add-btn"
              >
                Add to my HybridBox
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StreamListPage;
