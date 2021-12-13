import "./ChannelListPage.css";
import channelsService from "../../services/channels.service";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Searchbar from "../../components/Searchbar/Searchbar";
import CustomList from "../../components/CustomList/CustomList";

function ChannelListPage() {
  const [channels, setChannels] = useState([]);
  const [streams, setStreams] = useState([]);
  //state for the list
  const [cartChannels, setCartChannels] = useState([]);

  console.log("my channels", channels);

  //function to get all channels
  const getAllChannels = async () => {
    try {
      const response = await axios.get("http://localhost:5005/channels");
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

  //function to add the channel to my list
  const addChannel = (channel) => {
    //variable to store the value with a find function to see if the id of the channel exists or not
    const exist = cartChannels.find(channelItem => channelItem._id === channel._id);
    //conditional - what will happen if we find the id
    if(exist){
      console.log( setCartChannels([...cartChannels, {...channels}]))
      setCartChannels([...cartChannels, {...channels}])
      
    }
  }

  
  //DISPLAYING ON THE SCREEN

  return (
    <div>
      <h1>Channel list</h1>
      <Searchbar />
      <CustomList cartChannels={cartChannels} addChannel={addChannel} />
      <h3>Channel list</h3>
      <div className="channel-container">
        {channels.map((oneChannel) => {
          return (
            <div className="channelCard" key={oneChannel._id}>
              <Link to={"/channels/" + oneChannel._id}>
                <h4>{oneChannel.channelName}</h4>
              </Link>
              <p>{oneChannel.genre}</p>
              <button onClick={addChannel} key={oneChannel._id}>
                Add to my HybridBox
              </button>
            </div>
          );
        })}
      </div>
      <h1>Streaming Services list</h1>´
      <div className="stream-container">
        {streams.map((oneStream) => {
          return (
            <div className="streamCard" key={oneStream._id}>
              <Link to={"/streams/" + oneStream._id}>
                <h4>{oneStream.streamName}</h4>
              </Link>
              <button>Add to my HybridBox</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChannelListPage;
