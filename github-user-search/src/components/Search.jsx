import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]); 

    try {
      const results = await fetchUserData(query, location, minRepos);

      if (!results || results.length === 0) {
        setError("Looks like we can't find the user 😢");
      } else {
        setUsers(results);
      }
    } catch (err) {
      setError("Looks like we can't find the user 😢");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 rounded-md border-2 border-purple-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        <input
          type="text"
          placeholder="Enter location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 rounded-md border-2 border-purple-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        <input
          type="number"
          placeholder="Minimum repos (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 rounded-md border-2 border-purple-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        <button
          type="submit"
          className="bg-pink-400 text-black font-bold px-4 py-2 rounded-md hover:bg-pink-300 transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-sky-400">Loading...</p>}
      {error && <p className="text-red-400">{error}</p>}

      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-purple-800 p-4 rounded-md shadow-lg flex items-center space-x-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full border-2 border-pink-300"
            />
            <div>
              <h2 className="text-pink-300 font-bold text-lg">{user.login}</h2>
              <p className="text-sky-300">
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  View GitHub Profile
                </a>
              </p>
              {user.location && (
                <p className="text-purple-200">Location: {user.location}</p>
              )}
              {user.public_repos !== undefined && (
                <p className="text-purple-200">
                  Public Repos: {user.public_repos}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
