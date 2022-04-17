import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext'
import { ErrorContext } from '../../../context/ErrorContext';
import { generateOrder } from '../../../services/orders';
import SuccessfulPage from '../../Common/SuccessfulPage/SuccessfulPage';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import "./Checkout.css";

const Checkout = () => {

    const { cart, itemsTotal, removeItem, itemsAmount, clear } = useContext(CartContext);
    const { handleError } = useContext(ErrorContext);
    const [orderId, setOrderId] = useState(null);
    const navigate = useNavigate();


    const handleSubmit = async (buyer) => {
        generateOrder(buyer, cart, itemsAmount, setOrderId, clear)
            .catch(e => {
                handleError(e);
            });
    }

    useEffect(() => {
        if (!cart.length && !orderId)
            navigate("/cart");
    })


    return (
        orderId ?
            <SuccessfulPage orderId={orderId} />
            :
            <div className="checkout-container">
                <div className="checkout-inner-container">
                    <div className="checkout-form-container">
                        <h2 className="checkout-form-header">Dirección de envío</h2>
                        <CheckoutForm submitAction={handleSubmit} />
                    </div>
                    <div className="checkout-summary-container">
                        <div className="checkout-summary-container-list">
                            <h2 className="checkout-bold-text">Resumen de compra
                            </h2>
                            {cart.map(({ imageSrc, imageAlt, price, qty, id, name }, idx) => (
                                <div key={idx} className="mt-8">
                                    <div className="checkout-item">
                                        <div className="checkout-item-list">
                                            <img src={imageSrc} alt={imageAlt}
                                                className="h-24 w-24" />
                                            <div className='min-w-[55%]'>
                                                <h2 className="checkout-bold-text">{name}</h2>
                                                <p>Precio: {`$${price}`}</p>
                                                <p>Cantidad: {`${qty}`}</p>
                                            </div>
                                            <div className='' onClick={() => removeItem(id)}>
                                                <svg className='h-5 w-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 20" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="checkout-summary-list-total-amount">
                                <h2 className="checkout-bold-text"> {itemsTotal()} producto{Number(itemsTotal()) === 1 ? '' : 's'}</h2>
                            </div>
                            <div
                                className="checkout-summary-list-item">
                                Subtotal<span className="ml-2">${itemsAmount()}</span></div>
                            <div
                                className="checkout-summary-list-item">
                                Costo envío <span className="ml-2">$400</span></div>
                            <div
                                className="checkout-summary-list-item">
                                Total<span className="ml-2">${Number(itemsAmount()) + 400}</span></div>
                        </div>
                    </div>
                </div>
            </div >
    )
}

export default Checkout