import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'
import ItemCount from '../../products/itemCount/ItemCount';
import './CartItem.css';

export const CartItem = ({ item }) => {

    const { name, id, price, qty, stock, initial, imageSrc, imageAlt } = item;

    const { removeItem, replaceItemQty } = useContext(CartContext);

    const setItemQty = (newQty) => {
        replaceItemQty(id, newQty)
    }

    return (
        <li className="cart-item-container">
            <Link to={`/item/${id}`} className="cart-item-link">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="cart-item-link-img"
                />
            </Link>

            <div className="cart-item-detail-container">
                <div>
                    <div className="cart-item-detail">
                        <h3 className='w-4/12'>
                            <Link to={`/item/${id}`}> {name} </Link>
                        </h3>
                        <ItemCount stock={stock} initial={initial} qty={qty} setQty={setItemQty} isButtonVisible={false} />
                        <p className="ml-4">$ {price}</p>
                    </div>
                </div>
                <div className="cart-item-detail-btn-container">
                    <div className="flex">
                        <button type="button" onClick={() => removeItem(id)} className="cart-item-detail-btn">
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </li>
    )
}
