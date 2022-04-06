import React, { useState } from 'react'
import ItemList from './ItemList';
import Spinner from '../common/Spinner';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getProducts } from '../services/products';

const ItemListContainer = ({greeting={}}) => {
  const [loaded, setLoaded ] = useState(false);
  const [products, setProducts ] = useState([]);

  const { id} = useParams();


  useEffect(()=>{
    setLoaded(false);

    getProducts(id)
    .then((result) => {
      result.length ? setProducts(result) : setProducts([]);
    })
    .catch(e=>{
      setProducts([]);
    })
    .finally(() => {
      setLoaded(true);
    })
  }, [id]);

  return (
    <>
      <div className="max-w-2xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        {greeting.hasOwnProperty('name') && <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">¡Hola, {greeting.name}! Tenemos estos productos para vos:</h2>}
        {loaded ? <ItemList items={products}/> : <Spinner /> }
      </div>
    </>
  )
}

export default ItemListContainer