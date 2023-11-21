import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ce2114a3616d4910b008fca200585c58",
  },
});
