function CustomList({ cartChannels, addChannel }) {
  console.log("ADD", cartChannels);
  return (
    <div className="customList">
      <h3>Custom list </h3>
      {/* conditional */}
      {cartChannels.length === 0 && <div>Cart is empty</div>}

      <div className="map">
         
          {cartChannels}
      </div>

      
    </div>
  );
}

export default CustomList;
