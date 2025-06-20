import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import games from "../Data/games";
import "../Css/GameDetails.css";
import { useCart } from "../context/CartContext";

function GameDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [showMessage, setShowMessage] = useState(false);

  const game = games.find((g) => g.id.toString() === id);

  if (!game) {
    return <div className="not-found">Game not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart(game);
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000); // Hide message after 3 seconds
  };

  return (
    <div className="game-details-page">
      <div className="game-details">
        <img src={game.cover} alt={game.title} className="game-img" />

        <div className="game-info">
          <h2>{game.title}</h2>
          <p>
            <strong>Genre:</strong> {game.genre}
          </p>
          <p>
            <strong>Platform:</strong> {game.platform}
          </p>
          <p>
            <strong>Release Year:</strong> {game.releaseYear}
          </p>
          <p>
            <strong>Price:</strong> {game.price}
          </p>
          <p className="game-description">{game.description}</p>

          <button className="btn-buy" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button onClick={() => navigate(-1)} className="btn-back">
            ⬅ Back
          </button>

          {showMessage && (
            <div className="add-cart-message">Game added to cart!</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GameDetails;
