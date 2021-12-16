import axios from "axios";

class StreamsService {
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

  // POST /channels create
  createStream = (requestBody) => {
    return this.api.post("/api/streams/create", requestBody);
  };

  //Post /add streams
  addStream = (id) => {
    return this.api.post(`/api/users/streams/${id}`, { isAdding: true });
  };

  // GET /channels get all streams
  getAllStreams = () => {
    return this.api.get("/api/streams");
  };

  // GET /channels/:projectId
  getStream = (streamId) => {
    return this.api.get(`/api/streams/${streamId}`);
  };

  // PUT /streams/:channelId
  updateChannel = (streamId, requestBody) => {
    return this.api.put(`/api/streams/${streamId}`, requestBody);
  };

  // DELETE /channels/delete/:projectId
  deleteChannel = (id) => {
    return this.api.post(`/api/users/streams/${id}`, { isAdding: false });
  };
}

// Create one instance of the service
const streamsService = new StreamsService();

export default streamsService;
