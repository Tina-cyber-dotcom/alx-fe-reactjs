import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#2a1f3d", // fallback for checker
        background: "linear-gradient(90deg, #2a1f3d, #3b2760, #4c2f80)", // butterfly-dark gradient
        padding: "12px 20px",
        display: "flex",
        justifyContent: "center",
        gap: "25px",
        borderBottom: "2px solid #9b6aff",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <Link
        to="/"
        style={{
          color: "#f8d9ff",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        🦋 Home
      </Link>
      <Link
        to="/about"
        style={{
          color: "#f8d9ff",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        About
      </Link>
      <Link
        to="/services"
        style={{
          color: "#f8d9ff",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        Services
      </Link>
      <Link
        to="/contact"
        style={{
          color: "#f8d9ff",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
