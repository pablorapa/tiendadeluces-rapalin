import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';
import Spinner from '../common/Spinner';
import { getProduct } from '../services/products';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [ item, setItem ] = useState({});
    const [ loaded, setLoaded ] = useState(false);

    const { id } = useParams();

    useEffect(()=> {
        setLoaded(false);
        getProduct(id)
            .then((result) => {             
                setItem(result);
            })
            .catch((e) => {
                throw e
            })
            .finally(() => {
                setLoaded(true);
            });        
    }, [id]);

    return (

        item ?
            loaded ? <ItemDetail item={item}/> : <Spinner />
        :  
            <div className="flex items-center justify-center">
                <div className="px-40 py-5 mt-20 flex flex-col items-center">
                    <h2 className='text-2xl mb-8 text-center text-gray-600'>Parece que este producto no existe.</h2>
                    <Link to="/" className="px-6 py-3 mt-4 text-sm font-semibold text-white bg-gray-600 text-center">
                        Volver al inicio
                    </Link>
                </div>
            </div>
    )
}

export default ItemDetailContainer