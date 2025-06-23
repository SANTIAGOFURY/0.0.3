import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import games from "../Data/games";
import "../Css/GameDetails.css";
import { useCart } from "../context/CartContext";
import Toast from "../components/Toast"; // ✅ Import Toast

function GameDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [message, setMessage] = useState(null); // ✅ Use message state

  const game = games.find((g) => g.id.toString() === id);

  if (!game) {
    return <div className="not-found">Game not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart(game);
    setMessage(`${game.title} added to cart!`);
    setTimeout(() => setMessage(null), 3000);
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

          <div className="game-description">
            <h3>Description</h3>
            <p>{game.description.short}</p>
            <h4>System Requirements:</h4>
            <ul>
              {game.description.system.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h4>Performance Features:</h4>
            <ul>
              {game.description.performance.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h4>Game Features:</h4>
            <ul>
              {game.description.features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <button className="btn-buy" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="btn-back" onClick={() => navigate(-1)}>
            ⬅ Back
          </button>
        </div>
      </div>

      {/* ✅ Toast Message */}
      <Toast message={message} visible={!!message} />
    </div>
  );
}

export default GameDetails;
