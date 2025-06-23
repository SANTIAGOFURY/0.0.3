import React, { useState, useEffect } from "react";
import gamesData from "../Data/games";
import "../Css/AdminGames.css"; // We'll define styles here

function AdminGames() {
  // Load from localStorage or fallback to gamesData
  const [games, setGames] = useState(() => {
    const saved = localStorage.getItem("adminGames");
    return saved ? JSON.parse(saved) : gamesData;
  });

  const [form, setForm] = useState({
    id: null,
    title: "",
    price: "",
    cover: "",
    rating: "",
    genre: "",
    platform: "",
    releaseYear: "",
    descriptionShort: "",
    descriptionSystem: "",
    descriptionPerformance: "",
    descriptionFeatures: "",
  });

  const [editingId, setEditingId] = useState(null);

  // Persist changes to localStorage
  useEffect(() => {
    localStorage.setItem("adminGames", JSON.stringify(games));
  }, [games]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  // Reset form
  const resetForm = () => {
    setForm({
      id: null,
      title: "",
      price: "",
      cover: "",
      rating: "",
      genre: "",
      platform: "",
      releaseYear: "",
      descriptionShort: "",
      descriptionSystem: "",
      descriptionPerformance: "",
      descriptionFeatures: "",
    });
    setEditingId(null);
  };

  // Add or update game
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      alert("Title is required");
      return;
    }

    // Prepare new game object
    const newGame = {
      id: editingId ?? Date.now(),
      title: form.title.trim(),
      price: form.price.trim(),
      cover: form.cover.trim(),
      rating: parseFloat(form.rating) || 0,
      genre: form.genre.trim(),
      platform: form.platform.trim(),
      releaseYear: form.releaseYear.trim(),
      description: {
        short: form.descriptionShort.trim(),
        system: form.descriptionSystem
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        performance: form.descriptionPerformance
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        features: form.descriptionFeatures
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      },
    };

    if (editingId !== null) {
      // Edit existing game
      setGames((prev) => prev.map((g) => (g.id === editingId ? newGame : g)));
    } else {
      // Add new game
      setGames((prev) => [newGame, ...prev]);
    }

    resetForm();
  };

  // Edit button clicked
  const handleEdit = (game) => {
    setEditingId(game.id);
    setForm({
      id: game.id,
      title: game.title,
      price: game.price,
      cover: game.cover,
      rating: game.rating,
      genre: game.genre,
      platform: game.platform,
      releaseYear: game.releaseYear,
      descriptionShort: game.description.short,
      descriptionSystem: game.description.system.join(", "),
      descriptionPerformance: game.description.performance.join(", "),
      descriptionFeatures: game.description.features.join(", "),
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Delete button clicked
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this game?")) {
      setGames((prev) => prev.filter((g) => g.id !== id));
      if (editingId === id) resetForm();
    }
  };

  return (
    <div className="admin-container">
      <h1>Admin: Manage Games</h1>

      <form className="admin-form" onSubmit={handleSubmit}>
        <h2>{editingId !== null ? "Edit Game" : "Add New Game"}</h2>

        <div className="form-group">
          <label>Title *</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            placeholder="Game title"
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder='e.g. "$39.99"'
          />
        </div>

        <div className="form-group">
          <label>Cover Image URL</label>
          <input
            name="cover"
            value={form.cover}
            onChange={handleChange}
            placeholder="e.g. /images/Covers/game.jpg"
          />
        </div>

        <div className="form-group">
          <label>Rating</label>
          <input
            name="rating"
            type="number"
            min="0"
            max="5"
            step="0.1"
            value={form.rating}
            onChange={handleChange}
            placeholder="0 to 5"
          />
        </div>

        <div className="form-group">
          <label>Genre</label>
          <input
            name="genre"
            value={form.genre}
            onChange={handleChange}
            placeholder="Action, RPG, etc."
          />
        </div>

        <div className="form-group">
          <label>Platform</label>
          <input
            name="platform"
            value={form.platform}
            onChange={handleChange}
            placeholder="PC, PS4, Xbox, etc."
          />
        </div>

        <div className="form-group">
          <label>Release Year</label>
          <input
            name="releaseYear"
            value={form.releaseYear}
            onChange={handleChange}
            placeholder="e.g. 2013"
          />
        </div>

        <div className="form-group">
          <label>Description - Short</label>
          <textarea
            name="descriptionShort"
            value={form.descriptionShort}
            onChange={handleChange}
            placeholder="Brief summary"
            rows={2}
          />
        </div>

        <div className="form-group">
          <label>Description - System Requirements (comma separated)</label>
          <textarea
            name="descriptionSystem"
            value={form.descriptionSystem}
            onChange={handleChange}
            placeholder="e.g. OS: Windows 10, Processor: Intel Core i7"
            rows={2}
          />
        </div>

        <div className="form-group">
          <label>Description - Performance Features (comma separated)</label>
          <textarea
            name="descriptionPerformance"
            value={form.descriptionPerformance}
            onChange={handleChange}
            placeholder="e.g. High fidelity graphics, Improved AI"
            rows={2}
          />
        </div>

        <div className="form-group">
          <label>Description - Game Features (comma separated)</label>
          <textarea
            name="descriptionFeatures"
            value={form.descriptionFeatures}
            onChange={handleChange}
            placeholder="e.g. Stealth and combat mechanics, Memorable story"
            rows={2}
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn-save">
            {editingId !== null ? "Save Changes" : "Add Game"}
          </button>
          {editingId !== null && (
            <button type="button" className="btn-cancel" onClick={resetForm}>
              Cancel
            </button>
          )}
        </div>
      </form>

      <hr />

      <section className="games-list">
        <h2>Existing Games</h2>
        {games.length === 0 ? (
          <p>No games available.</p>
        ) : (
          <div className="games-grid">
            {games.map((game) => (
              <div key={game.id} className="game-card-admin">
                <img
                  src={game.cover || "/images/default-cover.png"}
                  alt={game.title}
                  loading="lazy"
                />
                <div className="game-info-admin">
                  <h3>{game.title}</h3>
                  <p>
                    <strong>Price:</strong> {game.price || "N/A"}
                  </p>
                  <p>
                    <strong>Rating:</strong> {game.rating ?? "N/A"}
                  </p>
                  <p>
                    <strong>Genre:</strong> {game.genre || "N/A"}
                  </p>
                  <p>
                    <strong>Platform:</strong> {game.platform || "N/A"}
                  </p>
                  <p>
                    <strong>Release Year:</strong> {game.releaseYear || "N/A"}
                  </p>

                  <div className="btns-admin">
                    <button
                      className="btn-edit"
                      onClick={() => handleEdit(game)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(game.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default AdminGames;
