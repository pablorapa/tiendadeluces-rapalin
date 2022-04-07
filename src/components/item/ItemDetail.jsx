import React, { useState, useContext } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({item}) => {

    const { id, name, price, description, stock, initial, details, imageAlt, imageSrc}  = item;

    const [qty, setQty] = useState(initial);

    const { addItem , isInCart} = useContext(CartContext);

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
      <div className="pt-6 lg:ml-24">
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr]">
          <div className="lg:pr-8">
            <div className="w-full h-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                    src={imageSrc}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    alt={imageAlt}
                />
            </div>
          </div>
          <div className="mt-4 lg:ml-8 lg:mt-0 lg:row-span-4">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{name}</h1>
            <p className="mt-2 text-3xl text-gray-900">${price}</p>
            <p className="mt-2 text-base text-gray-900">{description}</p>
            <p className="mt-1 mb-4 text-sm text-gray-500">Stock disponible: {stock}</p>
            <div className="mt-8">
                {
                    isInCart(id) ?
                        <>
                            <div className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-green-700 bg-green-100 border border-green-400">
                                <div slot="avatar">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle w-5 h-5 mx-2">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                </div>
                                <span className="font-medium">Agregado con éxito!</span>
                            </div>
                            <Link to="/cart">
                                <button className="mt-2 w-full bg-emerald-500 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white">
                                    Ir al carrito
                                </button>
                            </Link>
                        </>
                    :
                        <ItemCount stock={stock} initial={initial} qty={qty} setQty={setQty} handleAddCart={handleAddCart}/>
                }
            </div>
            <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Detalles</h2>
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