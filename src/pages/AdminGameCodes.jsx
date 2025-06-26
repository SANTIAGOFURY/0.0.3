import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import "../Css/GamedminCodes.css";
import { db } from "../firebase";
import Papa from "papaparse"; // for CSV parsing
import { saveAs } from "file-saver"; // for CSV export
import Toast from "../components/Toast";

function AdminGameCodes() {
  const { gameId } = useParams();

  const [codes, setCodes] = useState([]);
  const [code, setCode] = useState("");
  const [type, setType] = useState("Steam");
  const [originPrice, setOriginPrice] = useState("");
  const [coefficient, setCoefficient] = useState(1.5);
  const [buyingPrice, setBuyingPrice] = useState("");
  const [filterUsed, setFilterUsed] = useState("all");
  const [filterType, setFilterType] = useState("all");

  // Handle missing Game ID
  if (!gameId) {
    return <p>Missing Game ID in URL.</p>;
  }

  // Automatically calculate the buying price
  useEffect(() => {
    const origin = parseFloat(originPrice);
    if (!isNaN(origin) && origin > 0 && coefficient > 0) {
      setBuyingPrice((origin * coefficient).toFixed(2));
    } else {
      setBuyingPrice("");
    }
  }, [originPrice, coefficient]);

  // Fetch codes with filters inside useEffect
  useEffect(() => {
    if (!gameId) return;

    const fetchCodes = async () => {
      try {
        const codesRef = collection(db, "games", gameId, "codes");
        const q = query(codesRef, orderBy("code"));
        const snapshot = await getDocs(q);
        let results = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (filterUsed !== "all") {
          const usedBool = filterUsed === "used";
          results = results.filter((c) => c.used === usedBool);
        }
        if (filterType !== "all") {
          results = results.filter((c) => c.type === filterType);
        }

        setCodes(results);
      } catch (error) {
        Toast.error("Failed to fetch codes: " + error.message);
      }
    };

    fetchCodes();
  }, [gameId, filterUsed, filterType]);

  const addCode = async () => {
    const origin = parseFloat(originPrice);
    const buying = parseFloat(buyingPrice);
    if (!code.trim()) return Toast.error("Please enter a code.");
    if (isNaN(origin) || origin <= 0)
      return Toast.error("Enter a valid origin price.");
    if (isNaN(buying) || buying <= 0)
      return Toast.error("Buying price calculation failed.");

    try {
      const profit = +(buying - origin).toFixed(2);
      const codesRef = collection(db, "games", gameId, "codes");

      await addDoc(codesRef, {
        code: code.trim(),
        type,
        used: false,
        originPrice: origin,
        buyingPrice: buying,
        profit,
        expiresAt: null,
      });

      setCode("");
      setOriginPrice("");
      setBuyingPrice("");
      Toast.success("Code added!");

      // Refresh codes list after adding
      const q = query(codesRef, orderBy("code"));
      const snapshot = await getDocs(q);
      setCodes(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      Toast.error("Failed to add code: " + error.message);
    }
  };

  const deleteCode = async (id) => {
    try {
      await deleteDoc(doc(db, "games", gameId, "codes", id));
      Toast.success("Code deleted");

      // Refresh codes list after deleting
      const codesRef = collection(db, "games", gameId, "codes");
      const q = query(codesRef, orderBy("code"));
      const snapshot = await getDocs(q);
      setCodes(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      Toast.error("Failed to delete code: " + error.message);
    }
  };

  const markUsed = async (id, current) => {
    try {
      await updateDoc(doc(db, "games", gameId, "codes", id), {
        used: !current,
      });

      // Refresh codes list after marking used/unused
      const codesRef = collection(db, "games", gameId, "codes");
      const q = query(codesRef, orderBy("code"));
      const snapshot = await getDocs(q);
      setCodes(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      Toast.error("Failed to update code status: " + error.message);
    }
  };

  const handleCSVUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      complete: async (results) => {
        try {
          const codesRef = collection(db, "games", gameId, "codes");

          for (const row of results.data) {
            const origin = parseFloat(row.originPrice);
            if (!row.code || isNaN(origin) || origin <= 0) continue;

            const buyingPrice = +(origin * coefficient).toFixed(2);
            const profit = +(buyingPrice - origin).toFixed(2);

            await addDoc(codesRef, {
              code: row.code.trim(),
              type: row.type || "Steam",
              used: false,
              originPrice: origin,
              buyingPrice,
              profit,
              expiresAt: null,
            });
          }

          Toast.success("Bulk upload complete");

          // Refresh codes list after bulk upload
          const q = query(codesRef, orderBy("code"));
          const snapshot = await getDocs(q);
          setCodes(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        } catch (error) {
          Toast.error("Failed during bulk upload: " + error.message);
        }
      },
    });
  };

  const exportCSV = () => {
    if (codes.length === 0) return Toast.error("No codes to export");
    const csv = Papa.unparse(codes);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, `codes-${gameId}.csv`);
  };

  return (
    <div className="admin-game-codes-container">
      <h2>Admin - Manage Keys for Game ID: {gameId}</h2>

      <div className="filters">
        <select
          value={filterUsed}
          onChange={(e) => setFilterUsed(e.target.value)}
        >
          <option value="all">All</option>
          <option value="used">Used</option>
          <option value="unused">Unused</option>
        </select>

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="all">All Types</option>
          <option value="Steam">Steam</option>
          <option value="Epic">Epic</option>
          <option value="Xbox">Xbox</option>
          <option value="PlayStation">PlayStation</option>
        </select>

        <button className="btn-export" onClick={exportCSV}>
          Export to CSV
        </button>

        <input type="file" accept=".csv" onChange={handleCSVUpload} />
      </div>

      <div className="code-form">
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter game code"
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Steam">Steam</option>
          <option value="Epic">Epic</option>
          <option value="Xbox">Xbox</option>
          <option value="PlayStation">PlayStation</option>
        </select>
        <input
          value={originPrice}
          type="number"
          placeholder="Origin Price"
          onChange={(e) => setOriginPrice(e.target.value)}
        />
        <input
          value={coefficient}
          type="number"
          step="0.1"
          onChange={(e) => setCoefficient(parseFloat(e.target.value))}
          title="Coefficient to multiply origin price by to get buying price"
        />
        <input
          value={buyingPrice}
          type="number"
          placeholder="Buying Price (calculated)"
          readOnly
        />
        <button className="btn-add" onClick={addCode}>
          Add Code
        </button>
      </div>

      <ul className="codes-list">
        {codes.map((c) => (
          <li key={c.id} className={c.used ? "code-used" : ""}>
            <strong>{c.code}</strong> ({c.type}) -{" "}
            {c.used ? "Used" : "Available"}
            <br />
            💰 Origin: {c.originPrice} MAD | 🛒 Buy: {c.buyingPrice} MAD | 📈
            Profit: {c.profit} MAD
            <br />
            <button className="btn-mark" onClick={() => markUsed(c.id, c.used)}>
              {c.used ? "Mark Available" : "Mark Used"}
            </button>
            <button className="btn-delete" onClick={() => deleteCode(c.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminGameCodes;
