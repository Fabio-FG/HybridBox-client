import "./ChannelListPage.css";
import channelsService from "../../services/channels.service";
import streamsService from "../../services/streams.service";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Searchbar from "../../components/Searchbar/Searchbar";
import CustomList from "../../components/CustomList/CustomList";

function ChannelListPage({ channelsProp }) {
  // contains all the channels and streams in the DB
  const [channels, setChannels] = useState([]);
  const [streams, setStreams] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  const [searchChannels, setSearchChannels] = useState([]);



  //SEARCH BAR FILTER

  const filterChannelList = (char) => {
    let filteredChannel;
    //check if the search is empty
    if (char === "") {
      setChannels(channels); //if its empty show all the channels
    } else {
      filteredChannel = channels.filter((oneChannel) => {
        return oneChannel.channelName
          .toLowerCase()
          .includes(char.toLowerCase());
      });
      setChannels(filteredChannel);
      console.log(filteredChannel);
    }
  };

  //function to get all channels
  const getAllChannels = async () => {
    try {
      //using services to get all channels from the backend
      const response = await channelsService.getAllChannels();
      /* const response = await axios.get("http://localhost:5005/channels"); */
      setChannels(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //Useeffect hook
  useEffect(() => {
    getAllChannels();
  }, []);

  //function to add the channel to my list
  const addChannel = async (id) => {
    try {
      //Used service to get the value from the DB on the backend
      const addedItem = await channelsService.addChannel(id);

      setIsAdded(!isAdded);
    } catch (error) {
      console.log(error);
    }
  };

  //function to delete a channel from my list
  const deleteChannel = async (id) => {
    try {
      //use service to get the value and promise from the backend
      const deletedItem = await channelsService.deleteChannel(id);
      /* setIsDeleted(!isDeleted);
      console.log(isDeleted); */

      setIsAdded(!isAdded);
    } catch (error) {
      console.log(error);
    }
  };

  /* ---------------------------------------------------STREAMS------------------------------------ */
  const getAllStreams = async () => {
    try {
      const response = await streamsService.getAllStreams();
      /*  const response = await axios.get("http://localhost:5005/streams"); */
      setStreams(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //Add stream

  const addStream = async (id) => {
    try {
      const addedItem = await streamsService.addStream(id);
      setIsAdded(!isAdded);
      console.log("adding");
    } catch (error) {
      console.log(error);
    }
  };

  //function to delete a channel from my list
  const deleteStream = async (id) => {
    try {
      //use service to get the value and promise from the backend
      const deletedItem = await streamsService.deleteChannel(id);
      /* setIsDeleted(!isDeleted);
      console.log(isDeleted); */

      setIsAdded(!isAdded);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllStreams();
  }, []);

  //DISPLAYING ON THE SCREEN

  return (
    <div>
      <h1>Channel list</h1>

      <h2 className="channel-list-title">Channel list</h2>
      <Searchbar filterChannelList={filterChannelList} />

      <div className="main-wrapper">
      <div className="services-wrapper">
        

      <div className="channel-container">
        {channels.map((oneChannel) => {
          return (
            <div className="channelCard" key={oneChannel._id}>
              <div className="info-container">
                <Link
                  to={"/channels/" + oneChannel._id}
                  className="link-service"
                >
                  <img
                    src={oneChannel.channelImage}
                    alt={oneChannel.channelName}
                    className="channel-img"
                  />
                  <h4>{oneChannel.channelName}</h4>
                </Link>
              </div>
              <button
                onClick={() => addChannel(oneChannel._id)}
                className="add-btn"
              >
                Add to HybridBox
              </button>
              {/* Delete button */}
              <button
                onClick={() => deleteChannel(oneChannel._id)}
                className="add-btn"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
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
                Add to HybridBox
              </button>
              <button
                onClick={() => deleteStream(oneStream._id)}
                className="add-btn"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      </div>
      <div className="custom-list-wrapper">
        <CustomList isAdded={isAdded} />
      </div>
      </div>
    </div>
  );
}

export default ChannelListPage;
