import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ErrorContext } from '../../context/ErrorContext';

const ErrorPage = () => {

    const { error } = useContext(ErrorContext);
    const navigate = useNavigate();


    useEffect(() => {
        if (!error)
            navigate("/");
    }, [error]);

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh_-_15rem)]">
            <div className="px-40 py-5 flex flex-col items-center">

                <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                    La operación no pudo ser realizada
                </h6>
                <p className="mb-8 text-center text-gray-600 text-2xl">
                    {error}
                </p>
                <Link to="/" className="px-6 py-3 text-sm font-semibold text-white bg-gray-600 text-center">
                    Volver al inicio
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage