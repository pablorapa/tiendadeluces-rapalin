import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { ErrorContext } from '../../context/ErrorContext';
import { generateOrder } from '../services/orders';
import CheckoutForm from './CheckoutForm';
import SuccessfulPage from './SuccessfulPage';

const Checkout = () => {

    const { cart, itemsTotal, removeItem, itemsAmount, clear } = useContext(CartContext);
    const { handleError } = useContext(ErrorContext);
    const [orderId, setOrderId] = useState(null);


    const handleSubmit = async(buyer) => {
        generateOrder(buyer, cart, itemsAmount, setOrderId, clear)
            .catch(e => {
                handleError(e);
            });
    }

    return (
        orderId ?
            <SuccessfulPage orderId={orderId} />
            :
            <div className="container p-12 mx-auto">
                <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                    <div className="flex flex-col md:w-full">
                        <h2 className="mb-4 font-bold md:text-xl text-heading ">Dirección de envío
                        </h2>
                        <CheckoutForm submitAction={handleSubmit} />
                    </div>
                    <div className="flex flex-col w-full ml-0 md:ml-5 lg:ml-12 lg:w-2/5">
                        <div className="pt-12 md:pt-0 2xl:ps-4">
                            <h2 className="text-xl font-bold">Resumen de compra
                            </h2>
                            {cart.map((item, idx) => (
                                <div key={idx} className="mt-8">
                                    <div className="flex flex-col space-y-4">
                                        <div className="flex space-x-4">
                                            <img src={item.imageSrc} alt={item.imageAlt}
                                                className="h-24 w-24" />
                                            <div>
                                                <h2 className="text-xl font-bold">{item.name}</h2>
                                                <p>Precio: {`$${item.price}`}</p>
                                                <p>Cantidad: {`${item.qty}`}</p>
                                            </div>
                                            <div>
                                                <svg onClick={() => removeItem(item.id)} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="flex p-4 mt-4">
                                <h2 className="text-xl font-bold"> {itemsTotal()} producto{Number(itemsTotal()) === 1 ? '' : 's'}</h2>
                            </div>
                            <div
                                className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Subtotal<span className="ml-2">${itemsAmount()}</span></div>
                            <div
                                className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Costo envío <span className="ml-2">$400</span></div>
                            <div
                                className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Total<span className="ml-2">${Number(itemsAmount()) + 400}</span></div>
                        </div>
                    </div>
                </div>
            </div >
    )
}

export default Checkout