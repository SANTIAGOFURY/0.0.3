import React from "react";
import { useCart } from "../context/CartContext";
import "../Css/Cart.css"; // Add your cart styles here
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="empty-msj">
        <p className="empty">Your cart is empty.</p>
        <Link to="/products">
          <button>Visit Our Products Page</button>
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
                  <button
                    className="remove-btn "
                    onClick={() => removeFromCart(game.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="payement"></section>
    </>
  );
}

export default Cart;
