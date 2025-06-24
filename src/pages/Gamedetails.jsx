import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import "../Css/GameDetails.css";
import { useCart } from "../context/CartContext";
import Toast from "../components/Toast";

function GameDetails() {
  const { id } = useParams(); // Firestore document ID
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchGame() {
      setLoading(true);
      try {
        const docRef = doc(db, "games", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setGame({ id: docSnap.id, ...docSnap.data() });
          setError(null);
        } else {
          setError("Game not found.");
        }
      } catch (err) {
        setError("Failed to load game data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchGame();
  }, [id]);

  const handleAddToCart = () => {
    if (game) {
      addToCart(game);
      setMessage(`${game.title} added to cart!`);
      setTimeout(() => setMessage(null), 3000);
    }
  };

  if (loading) return <p>Loading game details...</p>;
  if (error)
    return (
      <div className="not-found">
        <p>{error}</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );

  return (
    <div className="game-details-page">
      <div className="game-details">
        <img
          src={game.cover || "/images/default-cover.png"}
          alt={game.title}
          className="game-img"
        />

        <div className="game-info">
          <h2>{game.title}</h2>
          <p>
            <strong>Genre:</strong> {game.genre || "N/A"}
          </p>
          <p>
            <strong>Platform:</strong> {game.platform || "N/A"}
          </p>
          <p>
            <strong>Release Year:</strong> {game.releaseYear || "N/A"}
          </p>
          <p>
            <strong>Price:</strong> {game.price || "N/A"}
          </p>

          <div className="game-description">
            <h3>Description</h3>
            <p>{game.description?.short || "No description available."}</p>

            {game.description?.system?.length > 0 && (
              <>
                <h4>System Requirements:</h4>
                <ul>
                  {game.description.system.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {game.description?.performance?.length > 0 && (
              <>
                <h4>Performance Features:</h4>
                <ul>
                  {game.description.performance.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {game.description?.features?.length > 0 && (
              <>
                <h4>Game Features:</h4>
                <ul>
                  {game.description.features.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <button className="btn-buy" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="btn-back" onClick={() => navigate(-1)}>
            ⬅ Back
          </button>
        </div>
      </div>

      <Toast message={message} visible={!!message} />
    </div>
  );
}

export default GameDetails;
