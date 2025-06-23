import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "../Css/Cart.css";
import { Link } from "react-router-dom";
import Toast from "../components/Toast"; // ✅ Import Toast component

function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const [message, setMessage] = useState(null); // ✅ Toast message state

  const handleRemove = (id, title) => {
    removeFromCart(id);
    setMessage(`${title} removed from cart!`);
    setTimeout(() => setMessage(null), 3000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="empty-msj">
        <p className="empty">🛒 Your cart is empty.</p>{" "}
        <Link to="/products">
          <button className="empty-btn">Visit Our Products Page</button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="cart-section">
        <h2>Your Cart Elements</h2>
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

      {/* Optional future payment section */}
      <section className="payement"></section>

      {/* ✅ Toast Message */}
      <Toast message={message} visible={!!message} />
    </>
  );
}

export default Cart;
2;
