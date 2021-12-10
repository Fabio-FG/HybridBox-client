import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function StreamDetailPage() {
  //Streams states hook
  const [stream, setStream] = useState("");
  const { streamId } = useParams();

  //function to get details of a streaming service id

  const getStream = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5005/streams/" + streamId
      );
      const oneStream = response.data;

      setStream(oneStream);
    } catch (error) {
      console.log(error);
    }
  };

  //use Effect hook for the stream to display it once initialization

  useEffect(() => {
    getStream();
  }, []);

  return (
    <div className="Stream">
      <h1>Stream details</h1>
      <p>{stream.streamName}</p>
      <img src={stream.streamImage} alt="streamLogo" />
      <p>{stream.streamWebsite}</p>
      <p>Price:{stream.streamPrice}</p>
      
    </div>
  );
}

export default StreamDetailPage;
