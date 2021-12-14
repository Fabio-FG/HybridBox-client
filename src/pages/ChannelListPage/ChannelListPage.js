import "./ChannelListPage.css";
import channelsService from "../../services/channels.service";
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

  //state for the list
  const [cartChannels, setCartChannels] = useState([]);

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

  //function to get all streams

  const getAllStreams = async () => {
    try {
      const response = await axios.get("http://localhost:5005/streams");
      setStreams(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllStreams();
  }, []);

  const auxChannels = [];

  //function to add the channel to my list
  const addChannel = async (id) => {
    //variable to store the value with a find function to see if the id of the channel exists or not
    /*  const exist = cartChannels.find(channelItem => channelItem._id === channel._id); */
    //conditional - what will happen if we find the id
    /* if(exist){
      console.log( setCartChannels("added"));

    } */

    try {
      //Used service to get the value from the DB on the backend
      const addedItem = await channelsService.addChannel(id);
      console.log(addedItem.data);
      console.log("item added!");
      setCartChannels(addedItem.data)
      
    } catch (error) {
      console.log(error);
    }
  };

  /*  useEffect(() => {
    addChannel();
  }, []); */

  //DISPLAYING ON THE SCREEN

  return (
    <div>
      <h1>Channel list</h1>
      <Searchbar />
      <CustomList cartChannels={cartChannels} addChannel={addChannel} />
      <h2 className="channel-list-title">Channel list</h2>
      <div className="channel-container">
        {channels.map((oneChannel) => {
          return (
            <div className="channelCard" key={oneChannel._id}>
              <div className="info-container">
                <Link to={"/channels/" + oneChannel._id} className="link-service">
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
                <h4>{oneStream.streamName}</h4>
              </Link>
            </div>
              <button className="add-btn">Add to my HybridBox</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChannelListPage;
