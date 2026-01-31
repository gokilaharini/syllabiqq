import { useState } from "react";
import "../styles/login.css";

export default function Login({ switchToSignup }) {
  const [regNo, setRegNo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!regNo || !password) {
      alert("Please fill all fields");
      return;
    }

    console.log({ regNo, password });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-image">
          <div className="placeholder-image">
            <span>🏢</span>
          </div>
        </div>

        <div className="login-form">
          <h2>SyllabIQ</h2>
          <p className="subtitle">Smart Learning Platform</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Register Number"
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">LOG IN</button>
          </form>

          <p className="switch-link">
            Don't have an account?
            <span onClick={switchToSignup}> Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
}