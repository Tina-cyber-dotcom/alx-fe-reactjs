import React from "react";
import Search from "./components/Search"; // 

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-950 to-black text-pink-200 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-pink-300 mb-6">
        🦋 GitHub User Search
      </h1>
      <Search />
    </div>
  );
}

export default App;
