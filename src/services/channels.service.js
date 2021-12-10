import axios from "axios";


class ChannelsService {
    constructor(){
        this.api = axios.create({
            baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
        });


        //Set token in the header for every request
        this.api.interceptors.request.use((config) => {
            //Retrieve the JWT token from the local storage
            const storedToken = localStorage.getItem("authToken");

            if(storedToken) {
                config.headers = {Authorization: `Bearer ${storedToken}`};
            }

            return config;
        })
    }

    //POST channels

    
    


}