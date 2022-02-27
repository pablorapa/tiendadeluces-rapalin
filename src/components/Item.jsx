import React from 'react'

const Item = ({product}) => {
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
        </a>
  )
}

export default Item