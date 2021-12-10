import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Searchbar from "../../components/Searchbar/Searchbar";

function ChannelListPage() {
  const [channels, setChannels] = useState([]);
  const [streams, setStreams] = useState([]);


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
  }, [])


  //DISPLAYING ON THE SCREEN

  return (
    <div>
      <h1>Channel list</h1>


      
      <Searchbar /> 
      {channels.map((oneChannel) => {
        return (
          <div className="channelCard" key={oneChannel._id}>
            <Link to={"/channels/" + oneChannel._id}>
              <h4>{oneChannel.channelName}</h4>
            </Link>
            <p>{oneChannel.genre}</p>
            <button>Add to my HybridBox</button>
          </div>
        );
      })}
      <h1>Streaming Services list</h1>´
      
      {streams.map((oneStream) => {
          return(
              <div className="streamCard" key={oneStream._id}>
              <Link to={"/streams/" + oneStream._id}><h4>{oneStream.streamName}</h4></Link>
              <button>Add to my HybridBox</button>
              
              </div>
          )
      })}
    </div>
  );
}

export default ChannelListPage;
