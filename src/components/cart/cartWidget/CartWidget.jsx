import React, { useContext } from 'react'
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { CartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom';
import "./CartWidget.css";

const CartWidget = () => {

  const { itemsTotal } = useContext(CartContext);

  const qty = itemsTotal();

  return (
    <div className="shopping-cart flow-root">
      <Link to="/cart" className="cart-widget-link">
        <ShoppingCartIcon
          className="cart-widget-icon"
        />
        <span className="cart-widget-qty">{qty || ""}</span>
      </Link>
    </div>
  )
}

export default CartWidget