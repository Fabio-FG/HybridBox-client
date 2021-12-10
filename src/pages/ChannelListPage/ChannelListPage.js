
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



function ChannelListPage() {
    const [ channels, setChannels] = useState([]);
    const [ streams, setStreams ] = useState([])

    const getAllChannels = async () => {
        try {
            const response = await axios.get("http://localhost:5005/channels");
            setChannels(response.data)
        } catch (error) {
            console.log(error);
        }
    };

    //Useeffect hook
    useEffect(() => {
        getAllChannels();
    }, [])

    return ( 
        <div>
            <h1>Channel list</h1>
            {channels.map((oneChannel) => {
                return (
                    <div className="channelCard" key={oneChannel._id}>
                    <Link to={"/channels/" + oneChannel._id}>
                    <h4>{oneChannel.channelName}</h4>
                    </Link>
                    <p>{oneChannel.genre}</p>
                    <button>Add to my HybridBox</button>
                    </div>
                )
            })}
            <h1>Streaming Services list</h1>
            {}

        </div>
     );
}

export default ChannelListPage;