import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ErrorContext } from './ErrorContext';

export const ErrorProvider = ({ children }) => {
    const [error, setError] = useState("");

    const navigate = useNavigate();

    /**
     * Set error message and navigates to error page
     * @param {object} error 
     */
    const handleError = (error) => {
        setError(error.message);
        navigate("/error");
    }

    return (
        <>
            <ErrorContext.Provider value={{ error, handleError }} >
                {children}
            </ErrorContext.Provider>
        </>
    )
}
