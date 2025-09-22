import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const githubAPI = axios.create({
  baseURL: "https://api.github.com",
  headers: API_KEY
    ? { Authorization: `token ${API_KEY}` }
    : {}, 
});

export const searchUsers = (username) => {
  return githubAPI.get(`/search/users?q=${username}`);
};

export const getUserDetails = (username) => {
  return githubAPI.get(`/users/${username}`);
};

export default githubAPI;
