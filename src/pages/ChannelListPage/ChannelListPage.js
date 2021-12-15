import "./ChannelListPage.css";
import channelsService from "../../services/channels.service";
import streamsService from "../../services/streams.service";
import authService from "../../services/auth.service";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Searchbar from "../../components/Searchbar/Searchbar";
import CustomList from "../../components/CustomList/CustomList";

function ChannelListPage() {
  // contains all the channels and streams in the DB
  const [channels, setChannels] = useState([]);
  const [streams, setStreams] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  let isAdding;

  //copy of channels
  const [copyChannels, setCopyChannels] = useState([]);

  //state for the list

  //state for the search filter
  const [channelFilter, setChannelFilter] = useState([]);
  //state for the stream filter
  const [streamFilter, setStreamFilter] = useState(channels);

  //function to get all channels
  const getAllChannels = async () => {
    try {
      //using services to get all channels from the backend
      const response = await channelsService.getAllChannels();
      /* const response = await axios.get("http://localhost:5005/channels"); */
      setChannels(response.data);
      setCopyChannels(response.data);
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

  //SEARCH BAR FILTER

  const filterChannelList = (char) => {
    let filteredChannel;
    //check if the search is empty
    if (char === "") {
      filteredChannel = setChannels(channels); //if its empty show all the channels
    } else {
      filteredChannel = channels.filter((oneChannel) => {
        return oneChannel.channelName
          .toLowerCase()
          .includes(char.toLowerCase());
      });
    }
    setChannels(filteredChannel);
    setCopyChannels(copyChannels);
  };

  useEffect(() => {}, []);

  //SEARCH FILTER for Streams
  const filterStreamList = (char) => {
    let filteredStream;
    //check if the search is empty
    if (char === "") {
      filteredStream = streamFilter; //if its empty show all the channels
    } else {
      filteredStream = channels.filter((oneChannel) => {
        return oneChannel.channelName
          .toLowerCase()
          .includes(char.toLowerCase());
      });
    }
    setChannels(filteredStream);
  };

  //DISPLAYING ON THE SCREEN

  return (
    <div>
      <h1>Channel list</h1>

      <h2 className="channel-list-title">Channel list</h2>
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
                key={oneChannel._id}
                className="add-btn"
              >
                Add to HybridBox
              </button>
              {/* Delete button */}
              <button
                onClick={() => deleteChannel(oneChannel._id)}
                key={oneChannel._id}
                className="add-btn"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChannelListPage;
