import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
    const addToCart = (qty) => {
        console.log(`se agregaron ${qty} items al carrito del producto ${item.name}`);
    }

  return ( 
    <div className="bg-red-50">
      <div className="pt-6 lg:ml-24">
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr]">
          <div className="lg:pr-8">
            <div className="w-full h-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                src={`/products/prod${item.id}.png`}
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
            </div>
          </div>
          <div className="mt-4 lg:ml-8 lg:mt-0 lg:row-span-4">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{item.name}</h1>
            <p className="mt-2 text-3xl text-gray-900">${item.price}</p>
            <p className="mt-2 text-base text-gray-900">{item.description}</p>
            <p className="mt-1 mb-4 text-sm text-gray-500">Stock disponible: {item.stock}</p>
            <div className="mt-8">
                <ItemCount stock={item.stock} initial={item.initial} onAdd={addToCart}/>
            </div>
            <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Detalles</h2>
                <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600">{item.details}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail