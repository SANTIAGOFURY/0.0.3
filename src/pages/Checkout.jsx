import React, { useState } from "react";
import "../Css/Checkout.css";

function Checkout() {
  const [selectedMethod, setSelectedMethod] = useState("bank");
  const [proofFile, setProofFile] = useState(null);

  const handleFileChange = (e) => {
    setProofFile(e.target.files[0]);
  };

  const handleSubmitProof = () => {
    if (!proofFile) {
      alert("Please upload a payment proof.");
      return;
    }
    alert("Proof submitted successfully!");
  };

  return (
    <div className="checkout">
      <div className="checkout-page">
        <h2>Choose Your Payment Method</h2>

        <div className="payment-methods">
          <button
            className={selectedMethod === "bank" ? "active" : ""}
            onClick={() => setSelectedMethod("bank")}
          >
            🏦 Bank Transfer
          </button>
          <button
            className={selectedMethod === "card" ? "active" : ""}
            onClick={() => setSelectedMethod("card")}
          >
            💳 Card (CMI)
          </button>
          <button
            className={selectedMethod === "wallet" ? "active" : ""}
            onClick={() => setSelectedMethod("wallet")}
          >
            📱 Mobile Wallet
          </button>
        </div>

        {/* BANK TRANSFER */}
        {selectedMethod === "bank" && (
          <div className="payment-section">
            <h3>Bank Transfer Details</h3>
            <p>Send the total amount to:</p>
            <ul>
              <li>Bank: CIH Bank</li>
              <li>RIB: 123 456 789 0000123456789 87</li>
              <li>Beneficiary: Said Bouaziz</li>
            </ul>
            <label>
              Upload Payment Proof:
              <input type="file" onChange={handleFileChange} />
            </label>
            <button onClick={handleSubmitProof}>Submit Proof</button>
          </div>
        )}

        {/* CARD PAYMENT */}
        {selectedMethod === "card" && (
          <div className="payment-section">
            <h3>Secure Card Payment (via CMI)</h3>
            <p>You will be redirected to a secure CMI payment page.</p>
            <a
              href="https://your-cmi-payment-link.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Pay with Visa / MasterCard / CIH / BMCE</button>
            </a>
          </div>
        )}

        {/* MOBILE WALLET */}
        {selectedMethod === "wallet" && (
          <div className="payment-section">
            <h3>Pay with Wallet</h3>
            <p>Send payment to one of the numbers below:</p>
            <ul>
              <li>Orange Money: 06 12 34 56 78</li>
              <li>Inwi Money: 06 98 76 54 32</li>
              <li>MT Cash: 06 11 22 33 44</li>
            </ul>
            <label>
              Upload Payment Screenshot:
              <input type="file" onChange={handleFileChange} />
            </label>
            <button onClick={handleSubmitProof}>Submit Proof</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
