import { useState, useEffect } from "react";
import "./../Css/auth.css";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        navigate("/"); // Redirect if already logged in
      }
    });
    return () => unsubscribe();
  }, [navigate]);

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
    <>
      <div className="cont-auth">
        <svg
          id="blob-1"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M26.5,-41.4C35.6,-35.4,45.2,-30.2,51.7,-21.9C58.3,-13.5,61.9,-2,54.9,3.9C47.8,9.8,30.1,10.3,20.7,13.8C11.2,17.4,10.2,24.2,7.4,24.9C4.6,25.6,0.1,20.2,-5.3,18.4C-10.6,16.6,-16.9,18.3,-20.1,16.4C-23.3,14.5,-23.5,9,-30.2,0.8C-37,-7.4,-50.2,-18.2,-48.1,-21.6C-46,-25,-28.5,-21.1,-17.9,-26.3C-7.3,-31.6,-3.7,-46,2.5,-50C8.7,-53.9,17.4,-47.3,26.5,-41.4Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          id="blob-2"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M26.5,-41.4C35.6,-35.4,45.2,-30.2,51.7,-21.9C58.3,-13.5,61.9,-2,54.9,3.9C47.8,9.8,30.1,10.3,20.7,13.8C11.2,17.4,10.2,24.2,7.4,24.9C4.6,25.6,0.1,20.2,-5.3,18.4C-10.6,16.6,-16.9,18.3,-20.1,16.4C-23.3,14.5,-23.5,9,-30.2,0.8C-37,-7.4,-50.2,-18.2,-48.1,-21.6C-46,-25,-28.5,-21.1,-17.9,-26.3C-7.3,-31.6,-3.7,-46,2.5,-50C8.7,-53.9,17.4,-47.3,26.5,-41.4Z"
            transform="translate(100 100)"
          />
        </svg>

        <h2 className="heading">
          If you want to check your Cart and Pay you need to Sign First!
        </h2>

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

          {!user && (
            <>
              <button className="oauth-btn google" onClick={handleGoogleLogin}>
                <FcGoogle size={22} />
                Sign in with Google
              </button>
              <button className="oauth-btn github" onClick={handleGithubLogin}>
                <FaGithub size={22} />
                Sign in with GitHub
              </button>
            </>
          )}

          <p>
            Don’t have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
