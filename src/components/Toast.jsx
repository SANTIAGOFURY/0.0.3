import React from "react";
import "../Css/Toast.css";

export default function Toast({ message, visible }) {
  return (
    <div className={`toast-message ${visible ? "show" : ""}`}>{message}</div>
  );
}
