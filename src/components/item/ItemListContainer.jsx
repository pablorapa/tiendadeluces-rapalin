import React, { useState } from 'react'
import ItemList from './ItemList';
import prodImg1 from '../../assets/vela1.png'
import prodImg2 from '../../assets/vela2.png'
import Spinner from '../common/Spinner';

const ItemListContainer = ({greeting}) => {
  const [name, setName ] = useState(greeting.name);
  const [loaded, setLoaded ] = useState(false);
  const [products, setProducts ] = useState({});

  const productsDefault = [
    {
      id: 1,
      name: 'Vela decorativa simple',
      href: '#',
      imageSrc: prodImg1,
      imageAlt: "Vela decorativa.",
      price: '$ 300',
      stock: 10,
      initial: 1,
    },
    {
        id: 2,
        name: 'Vela decorativa con apagavela',
        href: '#',
        imageSrc: prodImg2,
        imageAlt: "Vela con apagavela.",
        price: '$ 380',
        stock: 0,
        initial: 0,
      }
  ]

  const promiseMock = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(productsDefault);
    }, 2000)
  });

  promiseMock.then((result) => {
    setProducts(result);
  }).finally(() => {
    setLoaded(true);
  });

  return (
    <>
      <div className="max-w-2xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">¡Hola, {name}! Tenemos estos productos para vos:</h2>
        {loaded ? <ItemList items={products}/> : <Spinner /> }
      </div>
    </>
  )
}

export default ItemListContainer