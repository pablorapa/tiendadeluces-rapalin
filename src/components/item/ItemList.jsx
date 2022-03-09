import React from 'react'
import Item from './Item'


const ItemList = ({items}) => {

  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {items.map((item, idx) => (
            <Item key={idx} item={item}/>
        ))}
    </div>
  )
}

export default ItemList