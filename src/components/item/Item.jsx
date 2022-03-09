import React from 'react'
import ItemCount from './ItemCount'

const Item = ({product}) => {

    const addToCart = (qty) => {
        console.log(`se agregaron ${qty} items al carrito del producto ${product.name}`);
    }

    return (
        <a key={product.id} href={product.href} className="group">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            <p className="mt-1 mb-4 text-sm text-gray-500">Stock disponible: {product.stock}</p>
            <ItemCount stock={product.stock} initial={product.initial} onAdd={addToCart}/>

            
        </a>
  )
}

export default Item