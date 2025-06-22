import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; 
import "../Css/Home.css";
import games from "../Data/FeatcheredGames";
import genres from "../Data/Genres";

function Home() {
  const [message, setMessage] = useState(null);
  const { addToCart } = useCart();

  const handleAddToCart = (game) => {
    addToCart(game);
    setMessage(`${game.title} added to cart!`);
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <>
      <section className="Hero-Section">
        <div className="Hero-container">
          <h4>
            Welcome to Zonoj Store<span>.</span>
          </h4>
          <h1>
            Zonoj Store<span>.</span>
          </h1>
          <p>
            Zonoj Game Store is an online platform where gamers can discover and
            buy top video games. We offer a wide selection of popular titles
            across genres like Action, Racing, RPG, and more. Our store features
            both new releases and timeless classics at competitive prices. Each
            game comes with detailed info, cover images, and system
            requirements. Users can create an account to access their cart, game
            details, and personalized features. Secure login options include
            email, Google, and GitHub authentication. Payments can be made via
            PayPal, bank transfer, or cryptocurrency. We prioritize fast
            delivery of digital keys and 24/7 customer support. Gamers can
            easily search, filter, and explore based on their favorite
            categories. Zonoj Store is built for gamers, by gamers — level up
            your experience today!
          </p>
          <Link to="/products">
            <button>Visit Our Products Page</button>
          </Link>
        </div>
        <div className="Hero-Image">
          <img src="/public/images/logo img.jpg" alt="Zonoj Store Logo" />
        </div>
      </section>
      {message && <div className="cart-message">{message}</div>}
      <section className="featured-section">
        <h2>Featured Games</h2>
        <div className="container">
          {games.map((game) => (
            <div key={game.id} className="game-card">
              <div className="image-wrapper">
                <img src={game.cover} alt={game.title} loading="lazy" />
                <div className="card-content">
                  <h3>{game.title}</h3>
                  <p className="price">{game.price}</p>
                  <p className="rating">⭐ {game.rating}</p>
                  <Link to={`/product/${game.id}`} className="btn-detail">
                    View Details
                  </Link>
                  <button
                    className="btn-add"
                    onClick={() => handleAddToCart(game)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="Home-genres">
        <h2>Explore by Genre</h2>
        <div className="genres-container">
          {genres.map((genre) => (
            <Link
              to={`/products?genre=${genre.name}`}
              className="genre-card"
              key={genre.id}
            >
              <span className="icon">{genre.icon}</span>
              <span className="text">{genre.name}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
