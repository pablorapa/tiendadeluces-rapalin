import React from 'react';
import { Link } from 'react-router-dom';
import "./Item.css";

const Item = ({ item }) => {

    const { id, name, price, imageAlt, imageSrc } = item;

    return (
        <Link to={`/item/${id}`} key={id} className="group">
            <div className="item-img-container">
                <img
                    src={imageSrc}
                    className="item-img"
                    alt={imageAlt}
                />
            </div>
            <h3 className="item-title">{name}</h3>
            <p className="item-price">${price}</p>
        </Link>
    )
}

export default Item