import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! 🦋");
  };

  return (
    <div
      style={{
        padding: "30px",
        background: "linear-gradient(180deg, #1e1b29, #2c1f47)",
        minHeight: "80vh",
        color: "#f8d9ff",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <h1 style={{ color: "#e0b3ff" }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{
            display: "block",
            margin: "10px 0",
            padding: "10px",
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #9b6aff",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            display: "block",
            margin: "10px 0",
            padding: "10px",
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #9b6aff",
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{
            display: "block",
            margin: "10px 0",
            padding: "10px",
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #9b6aff",
          }}
        />
        <button
          type="submit"
          style={{
            background: "#9b6aff",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
