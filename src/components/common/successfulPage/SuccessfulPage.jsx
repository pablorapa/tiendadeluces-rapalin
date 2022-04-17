import React from 'react';
import { Link } from 'react-router-dom';
import "./SuccessfulPage.css";

const SuccessfulPage = ({ orderId }) => {
  return (
    <div className="rose-container-full">
      <div className="successful-page-container">

        {
          orderId ?
            <>
              <h6 className="successful-page-title">
                ¡Gracias por tu compra!
              </h6>

              <p className="successful-page-message">
                Tu número de orden es: {orderId}.
              </p>
            </>
            :
            <>
              <h6 className="successful-page-title">
                ¡Gracias por tu contacto!
              </h6>
              <p className="successful-page-message">
                Te responderemos a la brevedad.
              </p>
            </>
        }


        <Link to="/" className="btn-default-sm">
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

export default SuccessfulPage