import { useState } from "react";
import "./../Css/auth.css";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const friendlyErrorMessage = (code) => {
    switch (code) {
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/user-disabled":
        return "This user account has been disabled.";
      case "auth/user-not-found":
        return "No account found with this email.";
      case "auth/wrong-password":
        return "Incorrect password. Please try again.";
      case "auth/popup-closed-by-user":
        return "Sign-in popup closed before completing. Please try again.";
      case "auth/cancelled-popup-request":
        return "Multiple sign-in requests detected. Please try again.";
      default:
        return "Oops! Something went wrong. Please try again.";
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(friendlyErrorMessage(err.code || err.message));
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      setError(
        "Google sign-in failed: " +
          friendlyErrorMessage(err.code || err.message)
      );
    }
  };

  const handleGithubLogin = async () => {
    setError("");
    try {
      await signInWithPopup(auth, githubProvider);
      navigate("/");
    } catch (err) {
      setError(
        "GitHub sign-in failed: " +
          friendlyErrorMessage(err.code || err.message)
      );
    }
  };

  return (
    <div className="auth-container">
      <h2>Welcome Back 👋</h2>

      {error && <p className="signup-error">{error}</p>}

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="password-input-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="toggle-password-icon"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <MdVisibilityOff size={20} />
            ) : (
              <MdVisibility size={20} />
            )}
          </span>
        </div>

        <p className="forgot-password-container">
          <a href="/forgot-password" className="forgot-password-link">
            Forgot password?
          </a>
        </p>

        <button type="submit">Login</button>
      </form>

      <button className="oauth-btn google" onClick={handleGoogleLogin}>
        <FcGoogle size={22} />
        Sign in with Google
      </button>

      <button className="oauth-btn github" onClick={handleGithubLogin}>
        <FaGithub size={22} />
        Sign in with GitHub
      </button>

      <p>
        Don’t have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
};

export default Login;
