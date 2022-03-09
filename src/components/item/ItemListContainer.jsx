import React from 'react'
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {
  const name = greeting.name;

  return (
    <div className="bg-red-50">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">¡Hola, {name}! Tenemos estos productos para vos:</h2>
        <ItemList/>
      </div>
    </div>
  )
}

export default ItemListContainer