import React, { useContext, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import Spinner from '../../Common/Spinner/Spinner';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getProducts } from '../../../services/products';
import { CartContext } from '../../../context/CartContext';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { ErrorContext } from '../../../context/ErrorContext';
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [loaded, setLoaded] = useState(false);
  const [products, setProducts] = useState([]);

  const { id } = useParams();
  const { categories } = useContext(CartContext);
  const categorySelected = categories.find(cat => cat.id === id) || {};
  const { handleError } = useContext(ErrorContext);


  useEffect(() => {
    setLoaded(false);

    getProducts(id)
      .then((result) => {
        result.length ? setProducts(result) : setProducts([]);
        setLoaded(true);
      })
      .catch(e => {
        setProducts([]);
        handleError({ message: e.message });
      })// eslint-disable-next-line
  }, [id]);

  return (
    <>
      {id && <Breadcrumb level1={{ id, name: categorySelected.name }} />}
      {loaded ?
        <div className="item-list-container-container">
          {products.length && <ItemList items={products} />}
        </div>
        :
        <Spinner />}
    </>
  )
}

export default ItemListContainer