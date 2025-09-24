import axios from "axios";

export const fetchUserData = async (username, location = "", minRepos = 0) => {
  try {
    let query = `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const res = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return res.data.items;
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    throw error;
  }
};
