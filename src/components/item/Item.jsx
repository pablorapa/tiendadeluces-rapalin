import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {

    const { id, name, price } = item;

    return (
        <Link to={`/item/${id}`} key={id} className="group">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                src={`/products/prod${id}.png`}
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                alt={name}
                />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">${price}</p>
        </Link>
  )
}

export default Item