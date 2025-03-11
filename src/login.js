import React, { useState } from "react";

function Login() {
  // Define inline styles as JavaScript objects
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f0f2f5",
    },
    box: {
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "400px",
      textAlign: "center",
    },
    header: {
      marginBottom: "20px",
      color: "#333",
    },
    error: {
      color: "red",
      fontSize: "14px",
      marginBottom: "10px",
    },
    inputGroup: {
      marginBottom: "15px",
      textAlign: "left",
    },
    label: {
      fontSize: "14px",
      color: "#555",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginTop: "5px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "16px",
      color: "#555",
      outline: "none",
    },
    button: {
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      padding: "12px",
      borderRadius: "4px",
      fontSize: "16px",
      width: "100%",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    footer: {
      marginTop: "15px",
      fontSize: "14px",
    },
    link: {
      color: "#007bff",
      textDecoration: "none",
    },
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example authentication logic
    if (email === "test@example.com" && password === "password123") {
      alert("Login successful!");
      // Redirect or update authentication state as needed
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.header}>Login</h2>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email:</label>
            <input
              type="email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password:</label>
            <input
              type="password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" style={styles.button}>
            Login
          </button>
          <div style={styles.footer}>
            <p>
              Don't have an account?{" "}
              <a href="#" style={styles.link}>
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
