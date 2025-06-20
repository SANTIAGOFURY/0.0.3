import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import games from "../Data/games";
import genres from "../Data/Genres";
import "../Css/Products.css";

function Products() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedGenre = queryParams.get("genre");

  const [searchTerm, setSearchTerm] = useState("");

  const displayedGames = searchTerm
    ? games.filter((game) =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : selectedGenre
    ? games.filter(
        (game) => game.genre?.toLowerCase() === selectedGenre.toLowerCase()
      )
    : games;

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

        {displayedGames.length === 0 ? (
          <p className="no-games-msg">No games found.</p>
        ) : (
          <div className="products-grid">
            {displayedGames.map((game) => (
              <div key={game.id} className="game-card">
                <div className="image-wrapper">
                  <img src={game.cover} alt={game.title} />
                  <div className="card-content">
                    <h3>{game.title}</h3>
                    <p className="price">{game.price}</p>
                    <p className="rating">⭐ {game.rating}</p>
                    <Link to={`/product/${game.id}`} className="btn-secondary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
