import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "517951c8289943718a26298a26315466",
  },
});
