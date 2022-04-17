import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="rose-container-full">
      <div className="not-found-container">
        <h1 className="not-found-main-title">404</h1>

        <h6 className="not-found-title">
          Oh! Parece que tenemos un problema.
        </h6>

        <p className="not-found-message">
          La página solicitada no existe.
        </p>

        <Link to="/" className="btn-default-sm">
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

export default NotFound