import "./Searchbar.css";
import React from "react";
import { useState } from "react";

function Searchbar({ filterChannelList, filterStreamList }) {
  //Use State for the searchbar
  const [search, setSearch] = useState("");

  //searchn input handle
  const handleSearch = (event) => {
    //set the state to the event
    setSearch(event.target.value);
    filterChannelList(event.target.value);
    filterStreamList(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search channel"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Searchbar;
