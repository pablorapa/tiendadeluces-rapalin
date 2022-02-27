import React from 'react'
import Item from './Item'
import prodImg1 from '../assets/vela1.png'
import prodImg2 from '../assets/vela2.png'


const ItemList = () => {

    const products = [
        {
          id: 1,
          name: 'Vela decorativa simple',
          href: '#',
          imageSrc: prodImg1,
          imageAlt: "Vela decorativa.",
          price: '$ 300',
        },
        {
            id: 2,
            name: 'Vela decorativa con apagavela',
            href: '#',
            imageSrc: prodImg2,
            imageAlt: "Vela con apagavela.",
            price: '$ 380',
          }
      ]

  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
            <Item product={product}/>
        ))}
    </div>
  )
}

export default ItemList