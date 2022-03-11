import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';
import Spinner from '../common/Spinner';
import { getProduct } from '../fakeApi/products';

const ItemDetailContainer = ({id}) => {
    const [ product, setProduct ] = useState({});
    const [ loaded, setLoaded ] = useState(false);

    const promiseMock = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(getProduct(id));
        }, 2000)
    });

    useEffect(()=> {
        setLoaded(false);
        promiseMock.then((result) => {
            setProduct(result);
        }).finally(() => {
            setLoaded(true);
        });        
    }, [id]);

    return (
        <>
            {loaded ? <ItemDetail product={product}/> : <Spinner /> }
        </>   
    )
}

export default ItemDetailContainer