import React from 'react'
import { Link } from 'react-router-dom'

const SuccessfulPage = ({ orderId }) => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh_-_15rem)]">
      <div className="px-40 py-5 mt-20 flex flex-col items-center">

        <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
          ¡Gracias por tu compra!
        </h6>

        <p className="mb-8 text-center text-gray-600 md:text-lg">
          Tu número de orden es: {orderId}
        </p>

        <Link to="/" className="px-6 py-3 text-sm font-semibold text-white bg-gray-600 text-center">
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

export default SuccessfulPage