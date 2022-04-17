import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ErrorContext } from '../../../context/ErrorContext';
import "./ErrorPage.css";

const ErrorPage = () => {

    const { error } = useContext(ErrorContext);
    const navigate = useNavigate();


    useEffect(() => {
        if (!error)
            navigate("/"); // eslint-disable-next-line
    }, [error]);

    return (
        <div className="rose-container-full">
            <div className="error-page-container">

                <h6 className="error-page-title">
                    La operación no pudo ser realizada
                </h6>
                <p className="error-page-message">
                    {error}
                </p>
                <Link to="/" className="btn-default-sm">
                    Volver al inicio
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage