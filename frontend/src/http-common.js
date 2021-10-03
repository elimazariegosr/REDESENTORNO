import axios from "axios";
  
export default axios.create({

  baseURL:'http://52.15.117.25:5001',
  headers: {
    "Content-type": "application/json"
  }
});
