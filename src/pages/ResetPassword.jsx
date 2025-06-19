import { useState } from "react";
import "./../Css/reset.css";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Reset link sent! Redirecting to login...");
      // Redirect after 3 seconds
      setTimeout(() => navigate("/login"), 3000);
    } catch (error) {
      const err = error instanceof Error ? error : new Error("Unknown error");
      setError(err.message);
    }
  };

  return (
    <div className="auth-reset-container">
      <h2>Reset Password</h2>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="signup-error">{error}</p>}

      <form onSubmit={handleReset}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
}

export default ResetPassword;
