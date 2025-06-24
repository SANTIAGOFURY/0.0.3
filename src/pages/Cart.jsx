import React, { useRef, useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import "../Css/Cart.css";
import Toast from "../components/Toast";

function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const [message, setMessage] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const paymentRef = useRef();
  const navigate = useNavigate();

  // Example fixed exchange rate (you could fetch this from an API instead)
  const EXCHANGE_RATE = 10; // 1 USD = 10 MAD

  const handleRemove = (id, title) => {
    removeFromCart(id);
    setMessage(`${title} removed from cart!`);
    setTimeout(() => setMessage(null), 3000);
  };

  // Calculate prices in MAD and USD
  const totalPriceMAD = cartItems
    .reduce((sum, game) => {
      const price = parseFloat(game.price.replace("$", "").replace(",", ""));
      return sum + (isNaN(price) ? 0 : price);
    }, 0)
    .toFixed(2);

  const totalPriceUSD = (totalPriceMAD / EXCHANGE_RATE).toFixed(2);

  const handleClickOutside = (e) => {
    if (paymentRef.current && !paymentRef.current.contains(e.target)) {
      setShowPayment(false);
    }
  };

  useEffect(() => {
    if (showPayment) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPayment]);

  if (cartItems.length === 0) {
    return (
      <div className="empty-msj">
        <p className="empty">🛒 Your cart is empty.</p>
        <Link to="/products">
          <button className="empty-btn">Visit Our Products Page</button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="cart-section">
        <h2>Your Cart</h2>
        <div className="cart-container">
          {cartItems.map((game) => (
            <div key={game.id} className="game-cart-card">
              <div className="image-wrapper">
                <img src={game.cover} alt={game.title} />
                <div className="card-cart-content">
                  <h3>{game.title}</h3>
                  {game.rating && <p className="rating">⭐ {game.rating}</p>}
                  <p className="price">Price: {game.price}</p>
                  <Link to={`/product/${game.id}`} className="btn-detail">
                    View Details
                  </Link>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(game.id, game.title)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="payment-toggle">
          <button className="checkout-btn" onClick={() => setShowPayment(true)}>
            Show Payment Summary
          </button>
        </div>
      </section>

      {showPayment && (
        <div className="payment-overlay">
          <div className="payment-summary" ref={paymentRef}>
            <h2>Payment Summary</h2>

            <div className="summary-items">
              {cartItems.map((item) => (
                <div key={item.id} className="summary-item">
                  <span>{item.title}</span>
                  <span>{item.price}</span>
                </div>
              ))}
            </div>

            <div className="summary-total">
              <p>Total Items: {cartItems.length}</p>
              <p>
                Total: <strong>{totalPriceMAD} MAD</strong>{" "}
                <span style={{ fontSize: "0.9rem", color: "#aaa" }}>
                  (~${totalPriceUSD} USD)
                </span>
              </p>
            </div>

            <button
              className="checkout-btn"
              onClick={() =>
                navigate("/checkout", {
                  state: {
                    totalPriceUSD,
                    totalPriceMAD,
                    cartItems,
                  },
                })
              }
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

      <Toast message={message} visible={!!message} />
    </>
  );
}

export default Cart;
