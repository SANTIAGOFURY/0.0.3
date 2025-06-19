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
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const friendlyErrorMessage = (code) => {
    switch (code) {
      case "auth/email-already-in-use":
        return "This email is already registered. Try logging in instead.";
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/operation-not-allowed":
        return "Signing up with email and password is currently disabled.";
      case "auth/weak-password":
        return "Password is too weak. Please use at least 6 characters.";
      case "auth/popup-closed-by-user":
        return "Sign-in popup closed before completing. Please try again.";
      case "auth/cancelled-popup-request":
        return "Multiple sign-in requests detected. Please try again.";
      default:
        return "Oops! Something went wrong. Please try again.";
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!dob) {
      setError("Please enter your date of birth.");
      return;
    }

    const age = calculateAge(dob);
    if (age < 10) {
      setError("Sorry, you must be at least 10 years old to sign up.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match. Please check and try again.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: fullName,
      });

      // You can save phone/dob to Firestore here if needed

      navigate("/");
    } catch (err) {
      if (err.code) {
        setError(friendlyErrorMessage(err.code));
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Oops! Something went wrong. Please try again.");
      }
    }
  };

  const handleGoogleSignup = async () => {
    setError("");
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (err) {
      if (err.code) {
        setError("Google sign-in error: " + friendlyErrorMessage(err.code));
      } else if (err instanceof Error) {
        setError("Google sign-in failed: " + err.message);
      } else {
        setError("Google sign-in failed. Please try again.");
      }
    }
  };

  const handleGithubSignup = async () => {
    setError("");
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (err) {
      if (err.code) {
        setError("GitHub sign-in error: " + friendlyErrorMessage(err.code));
      } else if (err instanceof Error) {
        setError("GitHub sign-in failed: " + err.message);
      } else {
        setError("GitHub sign-in failed. Please try again.");
      }
    }
  };

  return (
    <div className="auth-container signup-container">
      <h2>Create an Account</h2>
      {error && <p className="signup-error">{error}</p>}

      <button className="oauth-btn google" onClick={handleGoogleSignup}>
        <FcGoogle size={22} />
        Continue with Google
      </button>
      <button className="oauth-btn github" onClick={handleGithubSignup}>
        <FaGithub size={22} />
        Continue with GitHub
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
          placeholder="Date of Birth"
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
          title="Enter a valid phone number (7 to 15 digits, optional +)"
          required
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default Signup;
