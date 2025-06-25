import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { auth, googleProvider, githubProvider } from "../firebase";
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
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        navigate("/"); // Redirect if already signed in
      }
    });
    return () => unsubscribe();
  }, [navigate]);

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
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      setError("Google sign-in error: " + friendlyErrorMessage(err.code));
    }
  };

  const handleGithubSignup = async () => {
    setError("");
    try {
      await signInWithPopup(auth, githubProvider);
      navigate("/");
    } catch (err) {
      setError("GitHub sign-in error: " + friendlyErrorMessage(err.code));
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

        <div className="auth-container signup-container">
          <h2>Create an Account</h2>
          {error && <p className="signup-error">{error}</p>}

          {!user && (
            <>
              <button className="oauth-btn google" onClick={handleGoogleSignup}>
                <FcGoogle size={22} /> Continue with Google
              </button>
              <button className="oauth-btn github" onClick={handleGithubSignup}>
                <FaGithub size={22} /> Continue with GitHub
              </button>
            </>
          )}

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
      </div>
    </>
  );
};

export default Signup;
