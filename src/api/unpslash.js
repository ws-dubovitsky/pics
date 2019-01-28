import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 73898d7849b78137f678dfc341da3e59bcddc23a6359839ddd8c35565efa9cb1"
  }
});
