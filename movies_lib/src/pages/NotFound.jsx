import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import "../Styles/pages/NotFound.css";
import johnTravoltaGif from "../img/john-travolta-GIF.gif";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="error-message">
        <h2>ERROR 404</h2>
        <h3>page not found</h3>
      </div>
      <Link to="/">
        Voltar para Home <FaHome />
      </Link>
      <img src={johnTravoltaGif} alt="john travolta gif" />
    </div>
  );
}
