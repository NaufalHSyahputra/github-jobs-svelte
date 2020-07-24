import axios from "axios";

axios.defaults.baseURL =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com";

export const get = (params) => {
  return axios.get("/positions.json", { params: params });
};
