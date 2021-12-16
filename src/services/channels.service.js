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
  createChannel = (requestBody) => {
    return this.api.post("/api/channels", requestBody);
  };

  //Post /add channels
  addChannel = (id) => {
    return this.api.post(`api/users/channels/${id}`, { isAdding: true });
  };

  // GET /api/channels
  getAllChannels = () => {
    return this.api.get("/api/channels");
  };

  // GET /api/channels/:projectId
  getChannel = (channelId) => {
    return this.api.get(`/api/channels/${channelId}`);
  };

  // PUT /api/channels/:channelId
  updateChannel = (channelId, requestBody) => {
    return this.api.put(`/api/channels/${channelId}`, requestBody);
  };

  // DELETE /api/channels/delete/:projectId
  deleteChannel = (id) => {
    return this.api.post(`api/users/channels/${id}`, { isAdding: false });
  };
}

// Create one instance of the service
const channelsService = new ChannelsService();

export default channelsService;
