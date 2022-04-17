import React from 'react';
import Item from '../item/Item';
import { Link } from 'react-router-dom';
import "./ItemList.css";


const ItemList = ({ items }) => {

  return (

    items.length ?
      <div className="item-list-container">
        {items.map((item, idx) => (
          <Item key={idx} item={item} />
        ))}
      </div>
      :
      <div className="item-list-no-items-container">
        <div className="item-list-no-items-inner-container">
          <h2 className='item-list-no-items-title'>No tenemos productos en esta categoria.</h2>
          <Link to="/" className="btn-default-sm">
            Volver al inicio
          </Link>
        </div>
      </div>
  )
}

export default ItemList