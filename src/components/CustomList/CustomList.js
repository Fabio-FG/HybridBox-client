function CustomList({cartChannels, addChannel}) {

    return ( 
        <div className="customList">
            <h3>Custom list 1</h3>
            {/* conditional */}
            {cartChannels.length === 0 && <div>Cart is empty</div> }

        </div>
     );
}

export default CustomList;