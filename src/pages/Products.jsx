import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import genres from "../Data/Genres";
import "../Css/Products.css";
import { useCart } from "../context/CartContext";
import Toast from "../components/Toast";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Products() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedGenre = queryParams.get("genre");

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState(null);
  const { addToCart } = useCart();

  // Fetch games from Firestore once on component mount
  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        const gamesCollection = collection(db, "games");
        const snapshot = await getDocs(gamesCollection);
        const gamesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setGames(gamesData);
      } catch (error) {
        console.error("Error fetching games from Firestore:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  // Filter games by search term or genre
  const displayedGames = searchTerm
    ? games.filter((game) =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : selectedGenre
    ? games.filter(
        (game) => game.genre?.toLowerCase() === selectedGenre.toLowerCase()
      )
    : games;

  const handleAddToCart = (game) => {
    addToCart(game);
    setMessage(`${game.title} added to cart!`);
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <div className="products-layout">
      <aside className="products-sidebar">
        <h3>Genres</h3>
        <ul className="genre-list">
          {genres.map((genre) => (
            <li key={genre.id}>
              <Link
                to={`/products?genre=${genre.name}`}
                className={selectedGenre === genre.name ? "active-genre" : ""}
              >
                {genre.icon} {genre.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <div className="products-page">
        <input
          type="text"
          placeholder="Search games..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <h2 className="products-title">
          {searchTerm
            ? `Search results for "${searchTerm}"`
            : selectedGenre
            ? `${selectedGenre} Games`
            : "All Games"}
        </h2>

        {loading ? (
          <p className="loading-msg">Loading games...</p>
        ) : displayedGames.length === 0 ? (
          <p className="no-games-msg">No games found.</p>
        ) : (
          <div className="products-grid">
            {displayedGames.map((game) => (
              <div key={game.id} className="game-card">
                <div className="image-wrapper">
                  <img
                    src={game.cover || "/images/default-cover.png"}
                    alt={game.title}
                  />
                  <div className="card-content">
                    <h3>{game.title}</h3>
                    <p className="price">{game.price || "N/A"}</p>
                    <p className="rating">⭐ {game.rating ?? "N/A"}</p>
                    <Link to={`/product/${game.id}`} className="btn-secondary">
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
        )}
      </div>

      <Toast message={message} visible={!!message} />
    </div>
  );
}

export default Products;
