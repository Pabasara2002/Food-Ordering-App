import { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/frontend_assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={(event) => event.preventDefault()}>
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <button type="button" onClick={() => setShowLogin(false)} aria-label="Close sign in form">
            <img src={assets.cross_icon} alt="" />
          </button>
        </div>
        <div className="login-popup-inputs">
          {currentState === "Sign Up" && <input type="text" placeholder="Your name" required />}
          <input type="text" inputMode="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button className="login-submit" type="submit">
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <label className="login-popup-condition">
          <input type="checkbox" required />
          <span>By continuing, I agree to the terms of use and privacy policy.</span>
        </label>
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <button type="button" onClick={() => setCurrentState("Sign Up")}>
              Click here
            </button>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <button type="button" onClick={() => setCurrentState("Login")}>
              Login here
            </button>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
