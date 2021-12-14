import React from 'react';
import { useState , useEffect } from 'react';


function Searchbar({filterChannelList, filterStreamList}) {
    //Use State for the searchbar
    const [search, setSearch] = useState()


    //searchn input handle
    const handleSearch = (event) => {
        //set the state to the event
        setSearch(event.target.value);
        filterChannelList(event.target.value);

        //set the state to the stream event
        filterStreamList(event.target.value);
    }


  return (
    <form>
      <input type="text" placeholder="Search channel" value={search} onChange={handleSearch}/>
    </form>
  );
}

export default Searchbar;
