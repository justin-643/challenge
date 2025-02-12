import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock } from "lucide-react";

// Simple login page
const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Sample credentials (you can replace this with real authentication)
  const validCredentials = {
    username: "admin",
    password: "password123",
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username === validCredentials.username && password === validCredentials.password) {
      // Redirect to main content page on success
      setIsAuthenticated(true);
      navigate("/Admin");
    } else {
      setError("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="login-page"> 
      <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
        <User className="login-icon" /> 
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
        <Lock className="login-icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /> 
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      {error && <p className="error-message" >{error}</p>}
      <div className="thread thread1"></div>
    <div className="thread thread2"></div>
    <div className="thread thread3"></div>
    <div className="thread thread4"></div>
    </div>
    </div>
  );
};

export default Login;