import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db, storage } from "../firebase"; // Make sure storage is exported!
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function AdminGames() {
  const gamesCollectionRef = collection(db, "games");

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form state
  const [form, setForm] = useState({
    id: null,
    title: "",
    price: "",
    cover: "", // this will store the uploaded image URL
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

  // Fetch all games from Firestore
  const fetchGames = async () => {
    setLoading(true);
    try {
      const snapshot = await getDocs(gamesCollectionRef);
      const gamesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGames(gamesData);
    } catch (error) {
      console.error("Error fetching games:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image upload when a file is selected
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const fileName = `${file.name}-${Date.now()}`;
      const storageRef = ref(storage, `game-covers/${fileName}`);

      // Upload file
      await uploadBytes(storageRef, file);

      // Get download URL
      const url = await getDownloadURL(storageRef);

      // Save the URL in form state automatically
      setForm((prev) => ({ ...prev, cover: url }));

      alert("Image uploaded successfully!");
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Image upload failed: " + err.message);
    }
  };

  // Reset form to default empty values
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

  // Submit handler for add/update game
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      alert("Title is required");
      return;
    }

    const newGame = {
      title: form.title.trim(),
      price: form.price.trim(),
      cover: form.cover, // this is the URL from upload
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
        alert("Game updated successfully");
      } else {
        await addDoc(gamesCollectionRef, newGame);
        alert("Game added successfully");
      }
      fetchGames();
      resetForm();
    } catch (error) {
      console.error("Error saving game:", error);
      alert("Failed to save game: " + error.message);
    }
  };

  // Load game data into form for editing
  const handleEdit = (game) => {
    setEditingId(game.id);
    setForm({
      id: game.id,
      title: game.title || "",
      price: game.price || "",
      cover: game.cover || "",
      rating: game.rating || "",
      genre: game.genre || "",
      platform: game.platform || "",
      releaseYear: game.releaseYear || "",
      descriptionShort: game.description?.short || "",
      descriptionSystem: (game.description?.system || []).join(", "),
      descriptionPerformance: (game.description?.performance || []).join(", "),
      descriptionFeatures: (game.description?.features || []).join(", "),
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Delete a game by Firestore doc ID
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this game?")) return;

    try {
      const gameDoc = doc(db, "games", id);
      await deleteDoc(gameDoc);
      alert("Game deleted successfully");
      if (editingId === id) resetForm();
      fetchGames();
    } catch (error) {
      console.error("Error deleting game:", error);
      alert("Failed to delete game: " + error.message);
    }
  };

  // Filtering games
  const filteredGames = games.filter((game) => {
    const title = typeof game.title === "string" ? game.title : "";
    const genre = typeof game.genre === "string" ? game.genre : "";
    const id = game.id ? game.id.toString() : "";

    const filterTitleLower = filterTitle.toLowerCase();
    const filterGenreLower = filterGenre.toLowerCase();
    const filterIdTrim = filterId.trim();

    const titleMatch = title.toLowerCase().includes(filterTitleLower);
    const genreMatch = genre.toLowerCase().includes(filterGenreLower);
    const idMatch = filterIdTrim ? id.includes(filterIdTrim) : true;

    return titleMatch && genreMatch && idMatch;
  });

  return (
    <div
      className="admin-container"
      style={{ maxWidth: 1000, margin: "2rem auto", padding: "1rem" }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        Admin: Manage Games
      </h1>

      {/* Add / Edit Game Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#f9f9f9",
          padding: "1.5rem",
          borderRadius: 8,
          marginBottom: "2rem",
          boxShadow: "0 0 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{ marginBottom: "1rem", color: "#333", textAlign: "center" }}
        >
          {editingId ? "Edit Game" : "Add New Game"}
        </h2>

        {/* Text inputs */}
        {[
          {
            label: "Title *",
            name: "title",
            type: "text",
            placeholder: "Game title",
            required: true,
          },
          {
            label: "Price",
            name: "price",
            type: "text",
            placeholder: 'e.g. "$39.99"',
          },
          // No manual cover URL input anymore
          {
            label: "Rating",
            name: "rating",
            type: "number",
            min: 0,
            max: 5,
            step: 0.1,
            placeholder: "0 to 5",
          },
          {
            label: "Genre",
            name: "genre",
            type: "text",
            placeholder: "Action, RPG, etc.",
          },
          {
            label: "Platform",
            name: "platform",
            type: "text",
            placeholder: "PC, PS4, Xbox, etc.",
          },
          {
            label: "Release Year",
            name: "releaseYear",
            type: "text",
            placeholder: "e.g. 2013",
          },
        ].map(
          ({ label, name, type, placeholder, min, max, step, required }) => (
            <div key={name} style={{ marginBottom: "1rem" }}>
              <label
                style={{
                  display: "block",
                  fontWeight: 600,
                  marginBottom: 4,
                  color: "#555",
                }}
              >
                {label}
              </label>
              <input
                name={name}
                type={type}
                min={min}
                max={max}
                step={step}
                value={form[name]}
                onChange={handleChange}
                placeholder={placeholder}
                required={required}
                style={{
                  width: "100%",
                  padding: "0.4rem 0.6rem",
                  borderRadius: 4,
                  border: "1px solid #ccc",
                  fontSize: 16,
                  fontFamily: "inherit",
                  transition: "border-color 0.3s ease",
                }}
              />
            </div>
          )
        )}

        {/* File input for image upload */}
        <div style={{ marginBottom: "1rem" }}>
          <label
            style={{
              display: "block",
              fontWeight: 600,
              marginBottom: 4,
              color: "#555",
            }}
          >
            Upload Cover Image *
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ width: "100%" }}
          />
          {/* Preview uploaded image */}
          {form.cover && (
            <img
              src={form.cover}
              alt="Cover Preview"
              style={{
                marginTop: "0.5rem",
                maxWidth: "200px",
                borderRadius: 6,
                boxShadow: "0 0 5px rgba(0,0,0,0.15)",
              }}
            />
          )}
        </div>

        {/* Textareas for descriptions */}
        {[
          {
            label: "Description - Short",
            name: "descriptionShort",
            placeholder: "Brief summary",
            rows: 2,
          },
          {
            label: "Description - System Requirements (comma separated)",
            name: "descriptionSystem",
            placeholder: "e.g. OS: Windows 10, Processor: Intel Core i7",
            rows: 2,
          },
          {
            label: "Description - Performance Features (comma separated)",
            name: "descriptionPerformance",
            placeholder: "e.g. High fidelity graphics, Improved AI",
            rows: 2,
          },
          {
            label: "Description - Game Features (comma separated)",
            name: "descriptionFeatures",
            placeholder: "e.g. Stealth and combat mechanics, Memorable story",
            rows: 2,
          },
        ].map(({ label, name, placeholder, rows }) => (
          <div key={name} style={{ marginBottom: "1rem" }}>
            <label
              style={{
                display: "block",
                fontWeight: 600,
                marginBottom: 4,
                color: "#555",
              }}
            >
              {label}
            </label>
            <textarea
              name={name}
              value={form[name]}
              onChange={handleChange}
              placeholder={placeholder}
              rows={rows}
              style={{
                width: "100%",
                padding: "0.4rem 0.6rem",
                borderRadius: 4,
                border: "1px solid #ccc",
                fontSize: 16,
                fontFamily: "inherit",
                transition: "border-color 0.3s ease",
              }}
            />
          </div>
        ))}

        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}
        >
          <button
            type="submit"
            style={{
              backgroundColor: "#4a90e2",
              color: "#fff",
              padding: "0.6rem 1.2rem",
              border: "none",
              borderRadius: 5,
              fontWeight: 600,
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            {editingId ? "Save Changes" : "Add Game"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              style={{
                backgroundColor: "#ccc",
                color: "#333",
                padding: "0.6rem 1.2rem",
                border: "none",
                borderRadius: 5,
                fontWeight: 600,
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <hr style={{ margin: "2rem 0" }} />

      {/* Filters */}
      <section style={{ marginBottom: "1rem" }}>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Filter Games
        </h2>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <input
            type="text"
            placeholder="Search by Title"
            value={filterTitle}
            onChange={(e) => setFilterTitle(e.target.value)}
            style={{
              padding: "0.5rem",
              flex: "1 1 200px",
              borderRadius: 4,
              border: "1px solid #ccc",
              fontSize: 16,
            }}
          />
          <input
            type="text"
            placeholder="Search by ID"
            value={filterId}
            onChange={(e) => setFilterId(e.target.value)}
            style={{
              padding: "0.5rem",
              flex: "1 1 200px",
              borderRadius: 4,
              border: "1px solid #ccc",
              fontSize: 16,
            }}
          />
          <input
            type="text"
            placeholder="Search by Genre"
            value={filterGenre}
            onChange={(e) => setFilterGenre(e.target.value)}
            style={{
              padding: "0.5rem",
              flex: "1 1 200px",
              borderRadius: 4,
              border: "1px solid #ccc",
              fontSize: 16,
            }}
          />
        </div>
      </section>

      {/* Games List */}
      <section>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Existing Games
        </h2>

        {loading ? (
          <p style={{ textAlign: "center" }}>Loading games...</p>
        ) : filteredGames.length === 0 ? (
          <p style={{ textAlign: "center" }}>
            No games found matching filters.
          </p>
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
                  backgroundColor: "white",
                  borderRadius: 10,
                  boxShadow: "0 3px 8px rgba(0,0,0,0.12)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
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

                  <div
                    style={{
                      marginTop: "0.8rem",
                      display: "flex",
                      gap: "0.5rem",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      onClick={() => handleEdit(game)}
                      style={{
                        flex: 1,
                        backgroundColor: "#4a90e2",
                        border: "none",
                        color: "white",
                        padding: "0.4rem 0",
                        borderRadius: 5,
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(game.id)}
                      style={{
                        flex: 1,
                        backgroundColor: "#e94e4e",
                        border: "none",
                        color: "white",
                        padding: "0.4rem 0",
                        borderRadius: 5,
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
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
