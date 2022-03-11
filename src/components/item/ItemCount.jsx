import React, { useState } from 'react'

const ItemCount = ({stock=0, initial=0, onAdd}) => {
    const [qty, setQty] = useState(initial);

    return (
        <>
            <div className="flex justify-center">
                <button disabled={qty === initial}>
                    <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512" onClick={() => setQty(qty > initial ? qty - 1 : initial)}>
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                    </svg>
                </button>
                <input className="mx-2 border text-center w-8" type="text" value={qty} disabled/>
                <button disabled={qty === stock}>
                    <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512" onClick={() => setQty(qty < stock ? qty + 1 : stock)}>
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                    </svg>
                </button>
            </div>
            <button type="submit" onClick={() => stock !== 0 ? onAdd(qty) : null} disabled={stock === 0} className="mt-5 w-full bg-slate-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:border-gray-500 disabled:bg-slate-500">
                Agregar al carrito
            </button>
        </>
    )
}

export default ItemCount