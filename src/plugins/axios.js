import axios from "axios";

axios.defaults.baseURL =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com";

export const get = (url, params) => {
  return axios.get(`${url}`, { params: params });
};
