import axios from "axios";
  
export default axios.create({

  baseURL: process.env.HOST_BALANCER,
  headers: {
    "Content-type": "application/json"
  }
});
