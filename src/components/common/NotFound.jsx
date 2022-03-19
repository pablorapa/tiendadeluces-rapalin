import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
      <div className="flex items-center justify-center">
        <div className="px-40 py-5 mt-20 flex flex-col items-center">
          <h1 className="font-bold text-red-500 text-9xl">404</h1>

          <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            Oh! Parece que tenemos un problema.
          </h6>

          <p className="mb-8 text-center text-gray-600 md:text-lg">
            La página solicitada no existe.
          </p>

          <Link to="/" className="px-6 py-3 text-sm font-semibold text-white bg-gray-600 text-center">
              Volver al inicio
          </Link>
        </div>
      </div>
  )
}

export default NotFound