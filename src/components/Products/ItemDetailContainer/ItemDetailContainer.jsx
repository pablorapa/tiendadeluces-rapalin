import React, { useState, useEffect, useContext } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../../Common/Spinner/Spinner';
import { getProduct } from '../../../services/products';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ErrorContext } from '../../../context/ErrorContext';
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loaded, setLoaded] = useState(false);
    const { handleError } = useContext(ErrorContext);

    const { id } = useParams();

    useEffect(() => {
        setLoaded(false);
        getProduct(id)
            .then((result) => {
                setItem(result);
                setLoaded(true);
            })
            .catch(() => {
                handleError({ message: 'Error al obtener el detalle del producto.' });
            });// eslint-disable-next-line
    }, [id]);

    return (

        item ?
            loaded ? <ItemDetail item={item} /> : <Spinner />
            :
            <div className="item-detail-container-container">
                <div className="item-detail-container-inner-container">
                    <h2 className='item-detail-container-container-title'>Parece que este producto no existe.</h2>
                    <Link to="/" className="btn-default-sm">
                        Volver al inicio
                    </Link>
                </div>
            </div>
    )
}

export default ItemDetailContainer