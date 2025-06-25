import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import "../Css/Home.css";
import genres from "../Data/Genres";
import Toast from "../components/Toast";

function Home() {
  const [featuredGames, setFeaturedGames] = useState([]);
  const [message, setMessage] = useState(null);
  const { addToCart } = useCart();

  // Fetch featured games from Firestore and limit to 10
  useEffect(() => {
    const fetchFeaturedGames = async () => {
      try {
        const q = query(collection(db, "games"), where("featured", "==", true));
        const snapshot = await getDocs(q);
        const fetchedGames = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .slice(0, 10); // Limit to 10 featured games
        setFeaturedGames(fetchedGames);
      } catch (error) {
        console.error("Error fetching featured games:", error);
      }
    };

    fetchFeaturedGames();
  }, []);

  const handleAddToCart = (game) => {
    addToCart(game);
    setMessage(`${game.title} added to cart!`);
    setTimeout(() => setMessage(null), 3000);
  };

  const reasons = [
    {
      icon: "🛡️",
      title: "Safe & Secure",
      desc: "All transactions are encrypted to keep your data safe.",
    },
    {
      icon: "⚡",
      title: "Instant Delivery",
      desc: "Your game keys are delivered immediately after purchase.",
    },
    {
      icon: "💰",
      title: "Affordable Prices",
      desc: "We offer competitive pricing on all the latest titles.",
    },
    {
      icon: "🎧",
      title: "24/7 Support",
      desc: "Get help anytime with our responsive support team.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
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
            across genres like Action, Racing, RPG, and more. Secure login, fast
            delivery, and multiple payment options make your experience
            seamless.
          </p>
          <Link to="/products">
            <button>Visit Our Products Page</button>
          </Link>
        </div>
        <div className="Hero-Image">
          <img src="/images/logo img.jpg" alt="Zonoj Store Logo" />
        </div>
      </section>

      {/* Featured Games */}
      <section className="featured-section">
        <h2>Featured Games</h2>
        <div className="container">
          {featuredGames.length === 0 ? (
            <p style={{ color: "#ccc", textAlign: "center" }}>
              No featured games available.
            </p>
          ) : (
            featuredGames.map((game) => (
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
            ))
          )}
        </div>
      </section>

      {/* Genre Section */}
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

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>💡 Why Choose ZonoJ Store?</h2>
        <div className="reasons">
          {reasons.map((r, i) => (
            <div className="reason-card" key={i}>
              <span className="icon">{r.icon}</span>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Toast Notification */}
      <Toast message={message} visible={!!message} />
    </>
  );
}

export default Home;
