import { useState } from "react";

function Feedback() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState("");

  const handleClear = () => {
    setName("");
    setMessage("");
    setRating("");
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        width: "90%",
        margin: "20px auto",
        padding: "20px",
        boxShadow: "0 0 10px rgba(172, 18, 18, 0.1)",
        borderRadius: "8px",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
        backgroundColor: "#1591EA",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "10px",
          fontSize: "1.8rem",
        }}
      >
        React Feedback App
      </h1>
      <h2
        style={{
          textAlign: "center",
          color: "blue",
          marginBottom: "20px",
          fontSize: "1.2rem",
        }}
      >
        Feedback Form
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "5px" }}>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "90%", padding: "8px" }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "5px" }}>Message:</label>
          <textarea
            placeholder="Write your feedback"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              width: "90%",
              padding: "8px",
              resize: "vertical",
              minHeight: "80px",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "5px" }}>Rating:</label>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            style={{ width: "120px", padding: "8px" }}
          >
            <option value="">Select rating</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Poor">Poor</option>
          </select>
        </div>

        <button
          onClick={handleClear}
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            marginTop: "10px",
            width: "120px",
          }}
        >
          Clear Form
        </button>
      </div>

      <div
        style={{
          marginTop: "20px",
          borderTop: "1px solid #ccc",
          paddingTop: "10px",
        }}
      >
        <h3 style={{ fontSize: "1.2rem" }}>Live Preview:</h3>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Message:</strong> {message}
        </p>
        <p>
          <strong>Rating:</strong> {rating}
        </p>
      </div>
    </div>
  );
}

export default Feedback;
