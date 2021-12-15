import "./../ChannelListPage/ChannelListPage.css";
import channelsService from "../../services/channels.service";
import streamsService from "../../services/streams.service";
import authService from "../../services/auth.service";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Searchbar from "../../components/Searchbar/Searchbar";
import CustomList from "../../components/CustomList/CustomList";
import ChannelListPage from "./../ChannelListPage/ChannelListPage";
import StreamListPage from "../StreamListPage/StreamListPage";

/* filterChannelList={filterChannelList}
        filterStreamList={filterStreamList} */
function TvGridPage() {
  const [isAdded, setIsAdded] = useState(false);

  return (
    <div>
        <Searchbar />
      <div className="main-wrapper">

        <div className="services-wrapper">
          <div>
            <ChannelListPage />
          </div>
          <div>
            <StreamListPage />
          </div>
        </div>
        <div className="custom-list-wrapper">
          <CustomList isAdded={isAdded} />
        </div>
      </div>
    </div>
  );
}

export default TvGridPage;
