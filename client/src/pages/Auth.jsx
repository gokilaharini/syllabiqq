import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "../styles/auth.css";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);

  const switchToSignup = () => {
    setIsFlipping(true);
  };

  const switchToLogin = () => {
    setIsFlipping(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className={`card-inner ${isFlipping ? 'flipping' : ''}`}>
          <div className="card-front">
            <Login switchToSignup={switchToSignup} />
          </div>
          <div className="card-back">
            <Signup switchToLogin={switchToLogin} />
          </div>
        </div>
      </div>
    </div>
  );
}