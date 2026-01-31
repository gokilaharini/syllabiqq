import { useState } from "react";
import "../styles/signup.css";

export default function Signup({ switchToLogin }) {
  const [rollNo, setRollNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    
    if (!rollNo || !email || !password || !confirm) {
      alert("Please fill all fields");
      return;
    }
    
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }
    
    console.log({ rollNo, email, password });
    alert("Signup successful!");
    switchToLogin();
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-image">
          <div className="placeholder-image">
            <span>📚</span>
          </div>
        </div>

        <div className="signup-form">
          <h2>Join SyllabIQ</h2>
          <p className="subtitle">Create Your Learning Account</p>

          <form onSubmit={handleSignup}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Roll Number"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
            </div>

            <button type="submit">CREATE ACCOUNT</button>
          </form>

          <p className="switch-link">
            Already have an account?
            <span onClick={switchToLogin}> Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}