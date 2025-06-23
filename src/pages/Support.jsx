import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import "../Css/Support.css";

const faqs = [
  {
    question: "How quickly can I expect support?",
    answer: "Our team responds within 24 hours, often much faster.",
  },
  {
    question: "Can I request a refund?",
    answer:
      "Yes, refunds are handled on a case-by-case basis within 14 days of purchase.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept PayPal, credit cards, bank transfers, and cryptocurrencies.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((item, i) => (
          <div key={i} className="faq-item">
            <button
              className={`faq-question ${activeIndex === i ? "active" : ""}`}
              onClick={() => toggle(i)}
              aria-expanded={activeIndex === i}
            >
              {item.question}
              <span className="faq-icon">{activeIndex === i ? "−" : "+"}</span>
            </button>
            {activeIndex === i && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

function SupportContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [captchaValue, setCaptchaValue] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const SERVICE_ID = "service_a5tjyrp";
  const TEMPLATE_ID = "template_vcapcdr";
  const USER_ID = "0cf2iCtF6qcy9Yu3_"; 
    //  
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please verify that you are not a robot.");
      return;
    }

    setSending(true);

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        USER_ID
      )
      .then(
        () => {
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          setCaptchaValue(null);
          setSending(false);
        },
        (error) => {
          alert("Oops! Something went wrong. Please try again.");
          console.error("EmailJS error:", error);
          setSending(false);
        }
      );
  };

  return (
    <main className="support-contact-page">
      <FAQ />

      <section className="support-section">
        <h1>Support</h1>
        <p>
          Have questions or need help? Our 24/7 support team is here for you.
          You can reach us via the contact form below, and we'll respond as soon
          as possible.
        </p>
        <ul>
          <li>
            <strong>Email:</strong> support@zonojstore.com
          </li>
          <li>
            <strong>Phone:</strong> +1 234 567 8901
          </li>
          <li>
            <strong>Live Chat:</strong> Available 24/7 on our website
          </li>
        </ul>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              disabled={sending}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              disabled={sending}
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here"
              rows={5}
              disabled={sending}
            />
          </label>

          <ReCAPTCHA
            sitekey="6Leeb2orAAAAAOKt2mUR0RTIPyjRxzttLHzUAn4e"
            onChange={handleCaptchaChange}
          />

          <button type="submit" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>

        {submitted && (
          <p className="submit-success">
            Thank you! Your message has been sent.
          </p>
        )}
      </section>

      <section className="social-map-section">
        <h2>Find Us Online</h2>
        <div className="social-links">
          <a
            href="https://facebook.com/zonojstore"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/zonojstore"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com/zonojstore"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>

        <div className="map-container">
          <iframe
            title="Zonoj Store Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019191432489!2d-122.41941518468133!3d37.77492977975969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c967a1b29%3A0x60c32a06f6f35aa2!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1687481448625!5m2!1sen!2sus"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}

export default SupportContact;
