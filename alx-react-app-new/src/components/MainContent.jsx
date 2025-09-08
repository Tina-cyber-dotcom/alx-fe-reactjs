function MainContent() {
  return (
    <main
      style={{
        padding: "25px",
        backgroundColor: "#f0f8ff", // light blue background
        minHeight: "250px",
        border: "2px solid #ccc",
        borderRadius: "12px",
        margin: "20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#006666",
          fontSize: "28px",
          marginBottom: "20px",
          textTransform: "uppercase",
        }}
      >
        Welcome to My City List
      </h2>

      <p
        style={{
          lineHeight: "1.8",
          fontSize: "18px",
          textAlign: "justify",
          color: "#444",
        }}
      >
        Here you’ll find some of my favorite cities from around the world. Each
        city has unique cultures, landmarks, and unforgettable experiences to
        explore. 🌍
      </p>

      <p
        style={{
          marginTop: "15px",
          fontSize: "18px",
          fontWeight: "bold",
          textAlign: "center",
          color: "#333",
        }}
      >
        I love to visit New York, Paris, and Tokyo.
      </p>
    </main>
  );
}

export default MainContent;
