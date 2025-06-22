import React from "react";
import "../Css/Loading.css";

function Loader() {
  return (
    <div className="spinner-cont">
      <div class="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
