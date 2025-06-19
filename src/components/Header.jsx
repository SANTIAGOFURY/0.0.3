import React, { useState } from "react";
import "./../Css/App.css";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className={menuOpen ? "menu-open" : ""}>
      <div className="head-left">
        <span className="material-symbols-outlined">flutter</span>
        <h2>
          Zonoj-Store<span>.</span>
        </h2>
      </div>

      <div className={`head-center${menuOpen ? " open" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
        </ul>
      </div>

      <div className="head-right">
        <button
          className="logout-btn"
          onClick={handleLogout}
          aria-label="Logout"
        >
          Logout
        </button>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          style={{ color: "white" }}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
