import React, { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [qty, setQty] = useState(initial);

    return (
    <>
        <div className="flex justify-center">
            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512" onClick={() => setQty(qty > initial ? qty - 1 : initial)}>
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
            </svg>

            <input className="mx-2 border text-center w-8" type="text" value={qty} disabled/>

            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512" onClick={() => setQty(qty < stock ? qty + 1 : stock)}>
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
            </svg>
        </div>
        <button type="submit" onClick={() => onAdd(qty)} className="mt-3 w-full bg-slate-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:border-gray-500">
            Agregar al carrito
        </button>
    </>
    )
}

export default ItemCount