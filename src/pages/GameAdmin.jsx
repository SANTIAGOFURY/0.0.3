import React, { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase"; // Adjust the path to your firebase.js file

function AdminGames() {
  const [games, setGames] = useState([]);
  const [form, setForm] = useState({
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

  // Filters
  const [filterTitle, setFilterTitle] = useState("");
  const [filterId, setFilterId] = useState("");
  const [filterGenre, setFilterGenre] = useState("");

  // Load games from Firestore with realtime updates
  useEffect(() => {
    const q = query(collection(db, "games"), orderBy("title"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const gamesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGames(gamesData);
    });
    return unsubscribe;
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  // Reset form to empty and clear editing
  const resetForm = () => {
    setForm({
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

  // Add or update game in Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      alert("Title is required");
      return;
    }

    const newGame = {
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

    try {
      if (editingId) {
        const gameDoc = doc(db, "games", editingId);
        await updateDoc(gameDoc, newGame);
      } else {
        await addDoc(collection(db, "games"), newGame);
      }
      resetForm();
    } catch (error) {
      alert("Error saving game: " + error.message);
    }
  };

  // Prepare form for editing a game
  const handleEdit = (game) => {
    setEditingId(game.id);
    setForm({
      title: game.title,
      price: game.price,
      cover: game.cover,
      rating: game.rating,
      genre: game.genre,
      platform: game.platform,
      releaseYear: game.releaseYear,
      descriptionShort: game.description?.short || "",
      descriptionSystem: (game.description?.system || []).join(", "),
      descriptionPerformance: (game.description?.performance || []).join(", "),
      descriptionFeatures: (game.description?.features || []).join(", "),
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Delete game from Firestore
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this game?")) {
      try {
        await deleteDoc(doc(db, "games", id));
        if (editingId === id) resetForm();
      } catch (error) {
        alert("Error deleting game: " + error.message);
      }
    }
  };

  // Filter games list
  const filteredGames = games.filter((game) => {
    const titleMatch = game.title
      .toLowerCase()
      .includes(filterTitle.toLowerCase());
    const idMatch = filterId ? game.id.includes(filterId.trim()) : true;
    const genreMatch = game.genre
      .toLowerCase()
      .includes(filterGenre.toLowerCase());
    return titleMatch && idMatch && genreMatch;
  });

  return (
    <div
      className="admin-container"
      style={{ maxWidth: 1200, margin: "2rem auto", padding: "1rem" }}
    >
      <h1 style={{ textAlign: "center" }}>Admin: Manage Games</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          background: "#f9f9f9",
          padding: "1.5rem",
          borderRadius: 8,
          boxShadow: "0 0 12px rgba(0,0,0,0.1)",
          marginBottom: "2rem",
        }}
      >
        <h2>{editingId ? "Edit Game" : "Add New Game"}</h2>

        {/* Title */}
        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label>Title *</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            placeholder="Game title"
            style={{
              width: "100%",
              padding: "0.4rem 0.6rem",
              fontSize: "1rem",
            }}
          />
        </div>

        {/* Price */}
        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label>Price</label>
          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder='e.g. "$39.99"'
            style={{
              width: "100%",
              padding: "0.4rem 0.6rem",
              fontSize: "1rem",
            }}
          />
        </div>

        {/* Cover */}
        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label>Cover Image URL</label>
          <input
            name="cover"
            value={form.cover}
            onChange={handleChange}
            placeholder="e.g. /images/Covers/game.jpg"
            style={{
              width: "100%",
              padding: "0.4rem 0.6rem",
              fontSize: "1rem",
            }}
          />
        </div>

        {/* Rating */}
        <div className="form-group" style={{ marginBottom: "1rem" }}>
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
            style={{
              width: "100%",
              padding: "0.4rem 0.6rem",
              fontSize: "1rem",
            }}
          />
        </div>

        {/* Genre */}
        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label>Genre</label>
          <input
            name="genre"
            value={form.genre}
            onChange={handleChange}
            placeholder="Action, RPG, etc."
            style={{
              width: "100%",
              padding: "0.4rem 0.6rem",
              fontSize: "1rem",
            }}
          />
        </div>

        {/* Platform */}
        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label>Platform</label>
          <input
            name="platform"
            value={form.platform}
            onChange={handleChange}
            placeholder="PC, PS4, Xbox, etc."
            style={{
              width: "100%",
              padding: "0.4rem 0.6rem",
              fontSize: "1rem",
            }}
          />
        </div>

        {/* Release Year */}
        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label>Release Year</label>
          <input
            name="releaseYear"
            value={form.releaseYear}
            onChange={handleChange}
            placeholder="e.g. 2013"
            style={{
              width: "100%",
              padding: "0.4rem 0.6rem",
              fontSize: "1rem",
            }}
          />
        </div>

        {/* Description Short */}
        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label>Description - Short</label>
          <textarea
            name="descriptionShort"
            value={form.descriptionShort}
            onChange={handleChange}
            placeholder="Brief summary"
            rows={2}
            style={{
              width: "100%",
              padding: "0.4rem 0.6rem",
              fontSize: "1rem",
              resize: "vertical",
            }}
          />
        </div>

        {/* Description System */}
        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label>Description - System Requirements (comma separated)</label>
          <textarea
            name="descriptionSystem"
            value={form.descriptionSystem}
            onChange={handleChange}
            placeholder="e.g. OS: Windows 10, Processor: Intel Core i7"
            rows={2}
            style={{
              width: "100%",
              padding: "0.4rem 0.6rem",
              fontSize: "1rem",
              resize: "vertical",
            }}
          />
        </div>

        {/* Description Performance */}
        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label>Description - Performance Features (comma separated)</label>
          <textarea
            name="descriptionPerformance"
            value={form.descriptionPerformance}
            onChange={handleChange}
            placeholder="e.g. High fidelity graphics, Improved AI"
            rows={2}
            style={{
              width: "100%",
              padding: "0.4rem 0.6rem",
              fontSize: "1rem",
              resize: "vertical",
            }}
          />
        </div>

        {/* Description Features */}
        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label>Description - Game Features (comma separated)</label>
          <textarea
            name="descriptionFeatures"
            value={form.descriptionFeatures}
            onChange={handleChange}
            placeholder="e.g. Stealth and combat mechanics, Memorable story"
            rows={2}
            style={{
              width: "100%",
              padding: "0.4rem 0.6rem",
              fontSize: "1rem",
              resize: "vertical",
            }}
          />
        </div>

        {/* Buttons */}
        <div
          style={{ display: "flex", gap: "1rem", justifyContent: "flex-end" }}
        >
          <button
            type="submit"
            style={{
              padding: "0.6rem 1.2rem",
              backgroundColor: "#4a90e2",
              color: "white",
              border: "none",
              borderRadius: 5,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {editingId ? "Save Changes" : "Add Game"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              style={{
                padding: "0.6rem 1.2rem",
                backgroundColor: "#ccc",
                color: "#333",
                border: "none",
                borderRadius: 5,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Filters */}
      <section style={{ marginBottom: "1rem" }}>
        <h2>Filter Games</h2>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "1rem",
          }}
        >
          <input
            type="text"
            placeholder="Search by Title"
            value={filterTitle}
            onChange={(e) => setFilterTitle(e.target.value)}
            style={{
              flex: "1",
              minWidth: 150,
              padding: "0.4rem 0.6rem",
              fontSize: "1rem",
            }}
          />
          <input
            type="text"
            placeholder="Search by ID"
            value={filterId}
            onChange={(e) => setFilterId(e.target.value)}
            style={{
              flex: "1",
              minWidth: 150,
              padding: "0.4rem 0.6rem",
              fontSize: "1rem",
            }}
          />
          <input
            type="text"
            placeholder="Search by Genre"
            value={filterGenre}
            onChange={(e) => setFilterGenre(e.target.value)}
            style={{
              flex: "1",
              minWidth: 150,
              padding: "0.4rem 0.6rem",
              fontSize: "1rem",
            }}
          />
        </div>
      </section>

      {/* Games List */}
      <section>
        <h2>Existing Games</h2>
        {filteredGames.length === 0 ? (
          <p>No games found matching filters.</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {filteredGames.map((game) => (
              <div
                key={game.id}
                style={{
                  background: "white",
                  borderRadius: 10,
                  boxShadow: "0 3px 8px rgba(0,0,0,0.12)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <img
                  src={game.cover || "/images/default-cover.png"}
                  alt={game.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: 140,
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
                <div
                  style={{
                    padding: "0.8rem 1rem",
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <h3 style={{ margin: "0 0 0.4rem 0", color: "#222" }}>
                    {game.title}
                  </h3>
                  <p
                    style={{
                      margin: "0.15rem 0",
                      fontSize: "0.9rem",
                      color: "#555",
                    }}
                  >
                    <strong>ID:</strong> {game.id}
                  </p>
                  <p
                    style={{
                      margin: "0.15rem 0",
                      fontSize: "0.9rem",
                      color: "#555",
                    }}
                  >
                    <strong>Price:</strong> {game.price || "N/A"}
                  </p>
                  <p
                    style={{
                      margin: "0.15rem 0",
                      fontSize: "0.9rem",
                      color: "#555",
                    }}
                  >
                    <strong>Rating:</strong> {game.rating ?? "N/A"}
                  </p>
                  <p
                    style={{
                      margin: "0.15rem 0",
                      fontSize: "0.9rem",
                      color: "#555",
                    }}
                  >
                    <strong>Genre:</strong> {game.genre || "N/A"}
                  </p>
                  <p
                    style={{
                      margin: "0.15rem 0",
                      fontSize: "0.9rem",
                      color: "#555",
                    }}
                  >
                    <strong>Platform:</strong> {game.platform || "N/A"}
                  </p>
                  <p
                    style={{
                      margin: "0.15rem 0",
                      fontSize: "0.9rem",
                      color: "#555",
                    }}
                  >
                    <strong>Release Year:</strong> {game.releaseYear || "N/A"}
                  </p>

                  <div
                    style={{
                      marginTop: "0.7rem",
                      display: "flex",
                      gap: "0.7rem",
                    }}
                  >
                    <button
                      onClick={() => handleEdit(game)}
                      style={{
                        flex: 1,
                        padding: "0.4rem 0",
                        fontWeight: 600,
                        borderRadius: 5,
                        border: "none",
                        cursor: "pointer",
                        color: "white",
                        backgroundColor: "#4caf50",
                        transition: "background-color 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#3b8e3a")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#4caf50")
                      }
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(game.id)}
                      style={{
                        flex: 1,
                        padding: "0.4rem 0",
                        fontWeight: 600,
                        borderRadius: 5,
                        border: "none",
                        cursor: "pointer",
                        color: "white",
                        backgroundColor: "#e74c3c",
                        transition: "background-color 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#c0392b")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#e74c3c")
                      }
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
