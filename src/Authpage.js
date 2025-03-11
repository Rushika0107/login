import React, { useState } from "react";

// Inline style objects for the entire page and components
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, #6a11cb, #2575fc)",
  },
  box: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    width: "350px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  header: {
    marginBottom: "20px",
    color: "#333",
  },
  error: {
    color: "red",
    marginBottom: "10px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    color: "#333",
    marginBottom: "15px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "5px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  button: {
    background: "#007bff",
    color: "#fff",
    border: "none",
    padding: "12px",
    width: "100%",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
    transition: "background 0.3s",
  },
  toggle: {
    marginTop: "15px",
    fontSize: "14px",
  },
  link: {
    color: "#007bff",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

function Login({ toggleAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic authentication logic (for demo purposes)
    if (email === "test@example.com" && password === "password123") {
      alert("Login successful!");
      // Redirect or set authentication state as needed
    } else {
      setError("Invalid email or password");
    }
  };

  return (
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
      </form>
      <div style={styles.toggle}>
        Don't have an account?{" "}
        <span style={styles.link} onClick={toggleAuth}>
          Sign Up
        </span>
      </div>
    </div>
  );
}

function Signup({ toggleAuth }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation: check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // In a real app, send a request to your backend here.
    alert("Sign up successful!");
    // Optionally clear the form or redirect the user
  };

  return (
    <div style={styles.box}>
      <h2 style={styles.header}>Sign Up</h2>
      {error && <p style={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Username:</label>
          <input
            type="text"
            style={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
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
        <div style={styles.inputGroup}>
          <label style={styles.label}>Confirm Password:</label>
          <input
            type="password"
            style={styles.input}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
          />
        </div>
        <button type="submit" style={styles.button}>
          Sign Up
        </button>
      </form>
      <div style={styles.toggle}>
        Already have an account?{" "}
        <span style={styles.link} onClick={toggleAuth}>
          Login
        </span>
      </div>
    </div>
  );
}

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => setIsLogin(!isLogin);

  return (
    <div style={styles.container}>
      {isLogin ? (
        <Login toggleAuth={toggleAuth} />
      ) : (
        <Signup toggleAuth={toggleAuth} />
      )}
    </div>
  );
}

export default AuthPage;
