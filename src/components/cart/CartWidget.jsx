import React, { useContext, useState } from 'react'
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

  const { itemsTotal } = useContext(CartContext);

  const qty = itemsTotal();

  return (
    <div className="shopping-cart flow-root">
      <Link to="/cart" className="group -m-2 p-2 flex items-center">
        <ShoppingCartIcon
          className="flex-shrink-0 h-6 w-6 group-hover:text-gray-500"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{qty > 0 ? qty : ""}</span>
      </Link>
    </div>
  )
}

export default CartWidget