import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';
import Spinner from '../common/Spinner';
import { getProduct } from '../fakeApi/products';

const ItemDetailContainer = ({id}) => {
    const [ item, setItem ] = useState({});
    const [ loaded, setLoaded ] = useState(false);

    const getItem = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(getProduct(id));
            }, 2000)
        });
    };

    useEffect(()=> {
        setLoaded(false);
        getItem()
        .then((result) => {
            setItem(result);
        })
        .catch((error) => {
            throw error
        })
        .finally(() => {
            setLoaded(true);
        });        
    }, [id]);

    return (
        <>
            {loaded ? <ItemDetail item={item}/> : <Spinner /> }
        </>   
    )
}

export default ItemDetailContainer