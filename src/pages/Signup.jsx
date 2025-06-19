import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    return age;
  };

  const friendlyErrorMessage = (code) => {
    switch (code) {
      case "auth/email-already-in-use":
        return "This email is already registered.";
      case "auth/invalid-email":
        return "Enter a valid email address.";
      case "auth/weak-password":
        return "Password too weak. Use at least 6 characters.";
      default:
        return "Something went wrong. Please try again.";
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!dob) return setError("Please enter your date of birth.");
    const age = calculateAge(dob);
    if (age < 10) return setError("You must be at least 10 years old.");

    if (password !== confirmPassword)
      return setError("Passwords do not match.");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName: fullName });
      navigate("/");
    } catch (err) {
      setError(friendlyErrorMessage(err.code || err.message));
    }
  };

  const handleGoogleSignup = async () => {
    setError("");
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      navigate("/");
    } catch (err) {
      setError("Google sign-in error: " + friendlyErrorMessage(err.code));
    }
  };

  const handleGithubSignup = async () => {
    setError("");
    try {
      await signInWithPopup(auth, new GithubAuthProvider());
      navigate("/");
    } catch (err) {
      setError("GitHub sign-in error: " + friendlyErrorMessage(err.code));
    }
  };

  return (
    <div className="auth-container signup-container">
      <h2>Create an Account</h2>
      {error && <p className="signup-error">{error}</p>}

      <button className="oauth-btn google" onClick={handleGoogleSignup}>
        <FcGoogle size={22} /> Continue with Google
      </button>
      <button className="oauth-btn github" onClick={handleGithubSignup}>
        <FaGithub size={22} /> Continue with GitHub
      </button>

      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
          max={new Date().toISOString().split("T")[0]}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          pattern="^\+?\d{7,15}$"
          title="Enter a valid phone number (7 to 15 digits)"
          required
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password field with visibility toggle */}
        <div className="password-input-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
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

        {/* Confirm Password with toggle */}
        <div className="password-input-wrapper">
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <span
            className="toggle-password-icon"
            onClick={() => setShowConfirm((prev) => !prev)}
          >
            {showConfirm ? (
              <MdVisibilityOff size={20} />
            ) : (
              <MdVisibility size={20} />
            )}
          </span>
        </div>

        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default Signup;
