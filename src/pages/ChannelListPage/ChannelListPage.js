import "./ChannelListPage.css";
import channelsService from "../../services/channels.service";
import streamsService from "../../services/streams.service";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Searchbar from "../../components/Searchbar/Searchbar";
import CustomList from "../../components/CustomList/CustomList";
import addIcon from "../../icons/add-icon.svg";
import deleteIcon from "../../icons/delete-icon.svg";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";

function ChannelListPage({ channelsProp }) {
  // contains all the channels and streams in the DB
  const [channels, setChannels] = useState([]);
  const [streams, setStreams] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  const [searchChannels, setSearchChannels] = useState([]);
  const [searchStreams, setSearchStreams] = useState([]);

  //SEARCH BAR FILTER

  const filterChannelList = (char) => {
    let filteredChannel;
    filteredChannel = channels.filter((oneChannel) => {
      return oneChannel.channelName.toLowerCase().includes(char.toLowerCase());
    });
    setSearchChannels(filteredChannel);
  };

  //SEARCH BAR FILTER FOR STREAMS

  const filterStreamList = (char) => {
    let filteredStream;
    filteredStream = streams.filter((oneStream) => {
      return oneStream.streamName.toLowerCase().includes(char.toLowerCase());
    });
    setSearchStreams(filteredStream);
  };

  //function to get all channels
  const getAllChannels = async () => {
    try {
      //using services to get all channels from the backend
      const response = await channelsService.getAllChannels();
      setChannels(response.data);
      setSearchChannels(response.data);
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
      await channelsService.addChannel(id);

      setIsAdded(!isAdded);
    } catch (error) {
      console.log(error);
    }
  };

  //function to delete a channel from my list
  const deleteChannel = async (id) => {
    try {
      //use service to get the value and promise from the backend
      await channelsService.deleteChannel(id);

      setIsAdded(!isAdded);
    } catch (error) {
      console.log(error);
    }
  };

  /* ---------------------------------------------------STREAMS------------------------------------ */
  const getAllStreams = async () => {
    try {
      const response = await streamsService.getAllStreams();
      setStreams(response.data);
      setSearchStreams(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //Add stream

  const addStream = async (id) => {
    try {
      await streamsService.addStream(id);
      setIsAdded(!isAdded);
    } catch (error) {
      console.log(error);
    }
  };

  //function to delete a channel from my list
  const deleteStream = async (id) => {
    try {
      //use service to get the value and promise from the backend
      await streamsService.deleteChannel(id);

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
    <ScrollToTopButton /> 
    <div className="search-container">

      <Searchbar
        filterChannelList={filterChannelList}
        filterStreamList={filterStreamList}
      />
    </div>
      <h1 className="channel-list-title">Channel and Stream Services</h1>

      <div className="main-wrapper">
        <div className="services-wrapper">
          <h2 className="channel-list-title">Channel grid</h2>
          <div className="channel-container">
            {searchChannels.map((oneChannel) => {
              return (
                <div className="channelCard" key={oneChannel._id}>
                  <div className="info-container">
                    <Link
                      to={"/channels/" + oneChannel._id}
                      className="link-service"
                    >
                      {oneChannel.channelImage && (
                        <img
                          src={oneChannel.channelImage}
                          alt={oneChannel.channelName}
                          className="channel-img"
                        />
                      )}
                      <h4>{oneChannel.channelName}</h4>
                    </Link>
                  </div>

                  <div className="btn-wrapper">
                    <button
                      onClick={() => addChannel(oneChannel._id)}
                      className="add-btn"
                    >
                      <img src={addIcon} alt="" className="icon" />
                    </button>
                    {/* Delete button */}
                    <button
                      onClick={() => deleteChannel(oneChannel._id)}
                      className="add-btn"
                    >
                      <img src={deleteIcon} alt="" className="icon" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Streams render */}
          <h1 className="channel-list-title">Streaming Services grid</h1>
          <div className="stream-container">
            {searchStreams.map((oneStream) => {
              return (
                <div className="streamCard" key={oneStream._id}>
                  <div className="info-container">
                    <Link
                      to={"/streams/" + oneStream._id}
                      className="link-service"
                    >
                      <img
                        src={oneStream.streamImage}
                        alt={oneStream.streamName}
                        className="stream-img"
                      />
                      <h4>{oneStream.streamName}</h4>
                    </Link>
                  </div>
                  <div className="btn-wrapper">
                    <button
                      onClick={() => addStream(oneStream._id)}
                      key={oneStream._id}
                      className="add-btn"
                    >
                      <img src={addIcon} alt="" className="icon" />
                    </button>
                    <button
                      onClick={() => deleteStream(oneStream._id)}
                      className="add-btn"
                    >
                      <img src={deleteIcon} alt="" className="icon" />
                    </button>
                  </div>
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
