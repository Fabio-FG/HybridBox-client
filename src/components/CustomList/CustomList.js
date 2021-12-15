import "./CustomList.css";
import { useState, useEffect, useContext } from "react";
/* import { AuthContext } from "../../context/auth.context"; */
import authService from "../../services/auth.service";

function CustomList({ addChannel, isAdded }) {
  const [cartChannels, setCartChannels] = useState([]);
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
    console.log(response.data);
    /* addChannel(cartChannels) */
  };

  useEffect(() => {
    getUser();
  }, [isAdded]);

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
                {channel.channelName}
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
