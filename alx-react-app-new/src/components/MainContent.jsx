function MainContent() {
  return (
    <main
      style={{
        padding: "20px",
        backgroundColor: "#e6f7ff",
        minHeight: "200px",
        borderRadius: "10px",
        margin: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "teal",
          marginBottom: "15px",
          fontSize: "28px",
        }}
      >
        Welcome to My City List
      </h2>
      <p
        style={{
          lineHeight: "1.6",
          fontSize: "16px",
          textAlign: "justify",
          color: "#333",
        }}
      >
        Here you’ll find some of my favorite cities from around the world, each
        with unique cultures, landmarks, and experiences to explore. 🌍
      </p>
    </main>
  );
}

export default MainContent;
