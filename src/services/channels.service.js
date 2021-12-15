import axios from "axios";

class ChannelsService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    });

    // Automatically set token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // POST /channels
  createChannel = async (requestBody) => {
    return this.api.post("/channels", requestBody);
  };

  //Post /add channels
  addChannel = async (id) => {
    return this.api.post(`api/users/channels/${id}`, {isAdding: true});
  };

  // GET /channels
  getAllChannels = async () => {
    return this.api.get("/channels");
  };

  // GET /channels/:projectId
  getChannel = async (channelId) => {
    return this.api.get(`/channels/${channelId}`);
  };

  // PUT /channels/:channelId
  updateChannel = async (channelId, requestBody) => {
    return this.api.put(`/channels/${channelId}`, requestBody);
  };

  // DELETE /channels/delete/:projectId
  deleteChannel = async (id) => {
    return this.api.post(`api/users/channels/${id}`, {isAdding: false});
  };
}

// Create one instance of the service
const channelsService = new ChannelsService();

export default channelsService;
