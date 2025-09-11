function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #1e1b29, #2c1f47, #3d2a68)", // dark butterfly sky
        color: "#f8d9ff", // soft pastel text
        textAlign: "center",
        padding: "15px",
        marginTop: "30px",
        borderTop: "2px solid #9b6aff", // purple accent
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <p style={{ fontSize: "14px", margin: "5px 0" }}>
        © {new Date().getFullYear()} My Company 🦋
      </p>
      <p style={{ fontSize: "12px", margin: "5px 0", opacity: 0.8 }}>
        Spreading wings of creativity and innovation
      </p>
    </footer>
  );
}

export default Footer;
