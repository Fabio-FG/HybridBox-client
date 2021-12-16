import "./CustomList.css";
import { useState, useEffect } from "react";
/* import { AuthContext } from "../../context/auth.context"; */
import authService from "../../services/auth.service";
import { Link } from "react-router-dom";

function CustomList({ isAdded }) {
  const [cartChannels, setCartChannels] = useState([""]);
  const [cartStreams, setCartStreams] = useState([]);
  /* const { user } = useContext(AuthContext); */

  //variables for the channels price
  const channelPrice = cartChannels.reduce((a, c) => a + c.channelPrice, 0);
  const streamPrice = cartStreams.reduce((a, c) => a + c.streamPrice, 0);

  const itemPrice = channelPrice + streamPrice;

  let discountPrice = 0;

  //Discount conditional
  if (itemPrice === 0) {
    discountPrice = 0;
  } else if (itemPrice < 17) {
    discountPrice = 1.2;
  } else {
    discountPrice = 1.6;
  }
  //Total price with the discount
  const totalPrice = itemPrice - discountPrice;

  const getUser = async () => {
    const response = await authService.getUser();
    setCartChannels(response.data.listOfChannels);
    setCartStreams(response.data.listOfStreams);

    console.log(response.data);
    /* addChannel(cartChannels) */
  };

  useEffect(() => {
    getUser();
  }, [isAdded]);

  /*   useEffect(() => {
    getUser();
  }, [isDeleted]); */

  return (
    <div className="customList">
      <h3>My HybridBox</h3>
      {/* conditional if the channels or streams are empty display the image */}
      {(cartChannels.length === 0 || cartStreams.lenght === 0) && (
        <div>Cart is empty</div>
      )}

      <div className="item">
        {cartChannels.map((channel) => {
          return (
            <div className="list-container">
              <div className="cart-container-box" key={channel._id}>
                <Link to={`/channels/${channel._id}`}>
                  <img
                    src={channel.channelImage}
                    alt={channel.channelName}
                    className="listed-channel-img"
                  />
                </Link>
                <br></br>
                {channel.channelName}
              </div>
            </div>
          );
        })}

        {/* STREAMS INTO THE BASKET */}

        {cartStreams.map((stream) => {
          return (
            <div className="list-container">
              <div className="cart-container-box" key={stream._id}>
                <Link to={`/streams/${stream._id}`}>
                  <img
                    src={stream.streamImage}
                    alt={stream.streamName}
                    className="listed-channel-img"
                  />
                </Link>
                <br></br>
                {stream.streamName}
              </div>
            </div>
          );
        })}
      </div>
      {(cartChannels.length !== 0 || cartStreams.length !== 0 ) && (
        <>
          <div className="price-container">
            <hr></hr>
            <div className="price-text">
              <div>Items Price: {itemPrice.toFixed(2)}€</div>
              <div>Channel Price: {channelPrice.toFixed(2)}€</div>
              <div>Stream Price: {streamPrice.toFixed(2)}€</div>
              <div>Discount:{discountPrice.toFixed(2)}€</div>
              <div className="total-price">
                <b>Total: </b> {totalPrice.toFixed(2)}€
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CustomList;
