import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const data = await fetchUserData(query); // should return data.items
      if (data.items.length === 0) {
        setError("Looks like we can't find the user 😢");
      } else {
        setUsers(data.items);
      }
    } catch (err) {
      setError("Looks like we can't find the user 😢");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow p-2 rounded-l-md border-2 border-purple-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        <button
          type="submit"
          className="bg-pink-400 text-black font-bold px-4 rounded-r-md hover:bg-pink-300 transition"
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
