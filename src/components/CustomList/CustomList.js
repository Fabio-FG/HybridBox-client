import './CustomList.css'
import { useState, useEffect, useContext } from "react";
/* import { AuthContext } from "../../context/auth.context"; */
import authService from "../../services/auth.service";

function CustomList({ addChannel }) {
  const [cartChannels, setCartChannels] = useState([]);
  /* const { user } = useContext(AuthContext); */
  const getUser = async () => {
    const response = await authService.getUser();
    setCartChannels(response.data.listOfChannels);
    console.log(response.data);
  };

  useEffect(() => {
    getUser();
    setCartChannels(cartChannels)
  }, []);

  return (
    <div className="customList">
      <h3>MyHybrid Box Custom list </h3>
      {/* conditional */}
      {/*  {cartChannels.length === 0 && <div>Cart is empty</div>} */}

      <div className="item">
        {cartChannels.map((channel) => {
         return <div className="cart-container-box"><aside>{channel.channelName}</aside></div>;
        })}
      </div>
    </div>
  );
}

export default CustomList;
