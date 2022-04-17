import React, { useState, useContext } from 'react'
import ItemCount from '../itemCount/ItemCount'
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {

    const { id, name, price, description, stock, initial, details, imageAlt, imageSrc, category } = item;

    const [qty, setQty] = useState(initial);

    const { addItem, isInCart, categories } = useContext(CartContext);

    const categorySelected = categories.find(cat => cat.id === category)

    const handleAddCart = () => {
        const itemToCart = {
            id,
            name,
            price,
            qty,
            stock,
            initial,
            imageSrc,
            imageAlt
        }
        addItem(itemToCart);
    }

    return (
        <div className="bg-red-50">
            <Breadcrumb level1={{ id: category, name: categorySelected.name }} level2={{ name: name }} />
            <div className="lg:ml-24">
                <div className="item-detail-container">
                    <div className="lg:pr-8">
                        <div className="item-detail-img-container">
                            <img
                                src={imageSrc}
                                className="item-detail-img"
                                alt={imageAlt}
                            />
                        </div>
                    </div>
                    <div className="item-detail">
                        <h1 className="item-detail-title">{name}</h1>
                        <p className="item-detail-price">${price}</p>
                        <p className="item-detail-description">{description}</p>
                        <p className="item-detail-stock">Stock disponible: {stock}</p>
                        <div className="mt-8">
                            {
                                isInCart(id) ?
                                    <>
                                        <div className="item-detail-successful">
                                            <div slot="avatar">
                                                <svg width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle w-5 h-5 mx-2">
                                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                </svg>
                                            </div>
                                            <span className="font-medium">Agregado con éxito!</span>
                                        </div>
                                        <Link to="/cart">
                                            <button className="btn-success">
                                                Ir al carrito
                                            </button>
                                        </Link>
                                    </>
                                    :
                                    <ItemCount stock={stock} initial={initial} qty={qty} setQty={setQty} handleAddCart={handleAddCart} />
                            }
                        </div>
                        <div className="mt-10">
                            <h2 className="item-detail-detail">Detalles</h2>
                            <div className="mt-4 space-y-6">
                                <p className="text-sm text-gray-600">{details}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail