import React from 'react';
import "./ItemCount.css";

const ItemCount = ({ stock = 0, initial = 0, qty = 0, setQty, handleAddCart, isButtonVisible = true }) => {

    return (
        <>
            <div className="item-count-container">
                <button disabled={qty === initial}>
                    <svg className="item-count-buttons" viewBox="0 0 448 512" onClick={() => setQty(qty > initial ? qty - 1 : initial)}>
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                    </svg>
                </button>
                <input className="item-count-input" type="text" value={qty} disabled />
                <button disabled={qty === stock}>
                    <svg className="item-count-buttons" viewBox="0 0 448 512" onClick={() => setQty(qty < stock ? qty + 1 : stock)}>
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                    </svg>
                </button>
            </div>
            {isButtonVisible &&
                <button onClick={handleAddCart} disabled={stock === 0} className="btn-default">
                    Agregar al carrito
                </button>
            }
        </>
    )
}

export default ItemCount