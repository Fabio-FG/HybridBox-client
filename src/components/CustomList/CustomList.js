import "./CustomList.css";
import { useState, useEffect, useContext } from "react";
/* import { AuthContext } from "../../context/auth.context"; */
import authService from "../../services/auth.service";

function CustomList({ isAdded }) {
  const [cartChannels, setCartChannels] = useState([]);
  const [cartStreams, setCartStreams] = useState([]);
  /* const { user } = useContext(AuthContext); */
  

  //variables for the channels price
  const itemsPrice = cartChannels.reduce((a, c) => a + c.channelPrice, 0);
  let discountPrice = 0;

  //Discount conditional
  if (itemsPrice === 0) {
    discountPrice = 0;
  } else if (itemsPrice < 20) {
    discountPrice = 1;
  } else {
    discountPrice = 1.6;
  }
  //Total price with the discount
  const totalPrice = itemsPrice - discountPrice;

  const getUser = async () => {
    const response = await authService.getUser();
    setCartChannels(response.data.listOfChannels);
    /* setCartStreams(response.data.listOfStreams); */

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
      {/* conditional */}
      {cartChannels.length === 0 && <div>Cart is empty</div>}

      <div className="item">
        {cartChannels.map((channel) => {
          return (
            <div className="list-container">
              <div className="cart-container-box" key={channel._id}>
                <img
                  src={channel.channelImage}
                  alt={channel.channelName}
                  className="listed-channel-img"
                />
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
                <img
                  src={stream.channelImage}
                  alt={stream.channelName}
                  className="listed-channel-img"
                />
                <br></br>
                {stream.channelName}
              </div>
            </div>
          );
        })}
      </div>
      {cartChannels.length !== 0 && (
        <>
          <div className="price-container">
            <hr></hr>
            <div>Items Price: {itemsPrice.toFixed(2)}€</div>
            <div>Discount:{discountPrice.toFixed(2)}€</div>
            <div>Total: {totalPrice.toFixed(2)}€</div>
          </div>
        </>
      )}
    </div>
  );
}

export default CustomList;
