import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaTelegram,
  FaDiscord,
} from "react-icons/fa";
import "../Css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Navigation Links */}
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://web.facebook.com/profile.php?id=61577150624166"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/zonoj_store/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a
              href="https://t.me/zonojGamesStore1"
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegram />
            </a>
            <a
              href="https://discord.gg/Aw5fhqGM"
              target="_blank"
              rel="noreferrer"
            >
              <FaDiscord />
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="footer-section footer-note">
          <p>
            &copy; {new Date().getFullYear()} Zonoj Store. All rights reserved.
          </p>
          <p>
            Made it with ❤️ by{" "}
            <a
              href="https://your-link.com"
              target="_blank"
              rel="noreferrer"
              className="coder-link"
            >
              The One Eye Coder
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
