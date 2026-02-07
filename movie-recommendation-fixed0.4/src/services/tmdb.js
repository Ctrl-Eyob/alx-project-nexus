import axios from "axios";

const tmdb = axios.create({
  baseURL: process.env.REACT_APP_TMDB_BASE_URL,
  params: {
    api_key: process.env.REACT_APP_TMDB_KEY,
  },
});

export default tmdb;
