import axios from "axios";
import Vue from "vue";

Vue.use(axios);

export default axios.create({
  baseURL: `https://picsum.photos/v2/list?page=2&limit=50`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
