import axios from "axios";

const API_KEY = import.meta.env.VITE_GITHUB_TOKEN;

export const fetchUserData = async (username, location = "", minRepos = 0) => {
  try {
    const headers = API_KEY ? { Authorization: `token ${API_KEY}` } : {};

    
    try {
      const exactRes = await axios.get(
        `https://api.github.com/users/${username}`,
        { headers }
      );
      return [exactRes.data]; 
    } catch (exactError) {
      
    }

        let query = `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const searchRes = await axios.get(
      `https://api.github.com/search/users?q=${query}`,
      { headers }
    );
    return searchRes.data.items || [];
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    throw error;
  }
};
