import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../Css/Cart.css";
import Toast from "../components/Toast";

function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const [message, setMessage] = useState(null);

  const handleRemove = (id, title) => {
    removeFromCart(id);
    setMessage(`${title} removed from cart!`);
    setTimeout(() => setMessage(null), 3000);
  };

  const totalPrice = cartItems
    .reduce((sum, game) => {
      const price = parseFloat(game.price.replace("$", ""));
      return sum + price;
    }, 0)
    .toFixed(2);

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
      </section>

      {/* ✅ Payment Section */}
      <section className="payment-summary">
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
            Total Price: <strong>${totalPrice}</strong>
          </p>
        </div>

        <button className="checkout-btn">Proceed to Checkout</button>
      </section>

      {/* ✅ Toast Message */}
      <Toast message={message} visible={!!message} />
    </>
  );
}

export default Cart;
