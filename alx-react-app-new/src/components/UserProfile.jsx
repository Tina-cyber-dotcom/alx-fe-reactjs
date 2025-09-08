import React from "react";

const UserProfile = (props) => {
  return (
    <div style={{ border: "1px solid gray", padding: "15px", margin: "15px", borderRadius: "8px" }}>
      <h2 style={{ color: "blue", fontSize: "22px", marginBottom: "10px" }}>{props.name}</h2>
      <p style={{ margin: "5px 0" }}>
        Age: <span style={{ fontWeight: "bold", color: "darkred" }}>{props.age}</span>
      </p>
      <p style={{ margin: "5px 0", fontStyle: "italic" }}>{props.bio}</p>
    </div>
  );
};

export default UserProfile;

