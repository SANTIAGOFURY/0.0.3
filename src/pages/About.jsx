import React from "react";
import { Link } from "react-router-dom";
import "../Css/About.css";

function About() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <h1>About Zonoj Store</h1>
        <p>
          Your ultimate gaming marketplace — passion meets digital adventure.
        </p>
      </section>

      {/* Who We Are */}
      <section className="about-section who-we-are">
        <h2>Who We Are</h2>
        <p>
          Zonoj Store is a gamer-powered marketplace where passion meets digital
          adventure. We bring top games, instant delivery, and secure shopping
          to players worldwide.
        </p>
      </section>

      {/* Our Mission */}
      <section className="about-section mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make premium games affordable and accessible to
          everyone, with instant delivery and 24/7 support — no compromises.
        </p>
      </section>

      {/* What We Offer */}
      <section className="about-section what-we-offer">
        <h2>What We Offer</h2>
        <ul>
          <li>Instant game key delivery</li>
          <li>Secure payments</li>
          <li>Verified products</li>
          <li>Global support</li>
          <li>Genre-based browsing</li>
          <li>Game details & system requirements</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="about-section .why-choose">
        <h2>Why Choose Us</h2>
        <div className="reasons">
          <div className="reason-card">
            <span role="img" aria-label="Shield">
              🛡️
            </span>
            <h3>Safe & Secure</h3>
            <p>All transactions are encrypted to keep your data safe.</p>
          </div>
          <div className="reason-card">
            <span role="img" aria-label="Lightning">
              ⚡
            </span>
            <h3>Instant Delivery</h3>
            <p>Your game keys are delivered immediately after purchase.</p>
          </div>
          <div className="reason-card">
            <span role="img" aria-label="Money Bag">
              💰
            </span>
            <h3>Affordable Prices</h3>
            <p>We offer competitive pricing on all the latest titles.</p>
          </div>
          <div className="reason-card">
            <span role="img" aria-label="Headphones">
              🎧
            </span>
            <h3>24/7 Support</h3>
            <p>Get help anytime with our responsive support team.</p>
          </div>
        </div>
      </section>

      {/* Meet the Creator */}
      {/* Meet the Team */}
      <section className="about-section meet-the-team">
        <h2>Meet the Team</h2>
        <div className="team-cards">
          <div className="creator-card">
            <div>
              <h3>Said Bouaziz</h3>
              <p>
                Web Developer — crafting the digital experience for Zonoj Store.
              </p>
            </div>
          </div>

          <div className="creator-card">
            <div>
              <h3>Yassine Baya</h3>
              <p>Gamer — providing the real player’s perspective.</p>
            </div>
          </div>

          <div className="creator-card">
            <div>
              <h3>Soufiane Akerkaoui</h3>
              <p>Video Editor & Gamer — bringing the store visuals to life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="about-section contact-cta">
        <h2>Get in Touch</h2>
        <p>
          Questions? Feedback? We’re here for you!{" "}
          <Link to="/contact" className="contact-link">
            Contact us
          </Link>{" "}
          or visit our{" "}
          <Link to="/products" className="products-link">
            store
          </Link>
          .
        </p>
      </section>
      {/* Notice Section */}
      <section className="about-section notice-section">
        <h2>Important Notice</h2>
        <p>
          Some people think our domain and store name might be controversial or
          offensive, but we want to assure you that Zonoj Store is committed to
          inclusivity, respect, and welcoming gamers from all backgrounds. Our
          name has no racist meaning or intent.
        </p>
      </section>
    </main>
  );
}

export default About;
