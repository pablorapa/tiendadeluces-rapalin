import React from 'react'
import Item from './Item'
import { Link } from 'react-router-dom'


const ItemList = ({items}) => {

  return (
    
      items.length ? 
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {items.map((item, idx) => (
              <Item key={idx} item={item}/>
          ))}
      </div>
    : 
        <div className="flex items-center justify-center">
          <div className="px-40 py-5 mt-20 flex flex-col items-center">
            <h2 className='text-2xl mb-8 text-center text-gray-600'>No tenemos productos en esta categoria.</h2>
            <Link to="/" className="px-6 py-3 mt-4 text-sm font-semibold text-white bg-gray-600 text-center">
              Volver al inicio
            </Link>
          </div>
        </div>
  )
}

export default ItemList