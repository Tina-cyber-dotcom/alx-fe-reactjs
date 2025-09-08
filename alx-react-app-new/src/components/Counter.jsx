import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        border: "2px solid #ccc",
        padding: "20px",
        margin: "20px auto",
        borderRadius: "12px",
        width: "250px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ color: "#006666" }}>Counter App</h2>
      <p style={{ fontSize: "20px", margin: "15px 0" }}>
        Current Count: <span style={{ fontWeight: "bold" }}>{count}</span>
      </p>
      <button
        style={{ margin: "5px", padding: "10px 15px", cursor: "pointer" }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        style={{ margin: "5px", padding: "10px 15px", cursor: "pointer" }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <button
        style={{
          margin: "5px",
          padding: "10px 15px",
          cursor: "pointer",
          backgroundColor: "#ff6666",
          color: "white",
          border: "none",
          borderRadius: "6px",
        }}
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
