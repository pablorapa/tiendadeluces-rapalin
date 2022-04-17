import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'
import { CartItem } from './cartItem/CartItem';
import "./Cart.css";

const Cart = () => {

  const { itemsTotal, itemsAmount, cart, clear } = useContext(CartContext);

  return (
    <div className="cart-container">
      {
        cart.length ?

          <div className="cart-list-container">
            <div className="cart-list-inner-container">
              <div className="cart-list-items-container">
                <div className="cart-item-list-title-container">
                  <h1 className="cart-title">Carrito de compras</h1>
                  {cart.length > 0 && <h2 className="cart-title cart-subtitle">{itemsTotal()} producto{itemsTotal() > 1 ? 's' : ''}</h2>}
                </div>
                <div className="mt-8">
                  <div className="flow-root">
                    <ul className="cart-items-list">
                      {cart.map(item => (
                        <CartItem key={item.id} item={item} />
                      ))}
                    </ul>
                  </div>
                  <button onClick={() => clear()} className="cart-btn">
                    Vaciar carrito
                  </button>
                </div>
              </div>
              <div id="summary" className="cart-summary-container">
                {cart.length > 0 &&
                  <>
                    <h1 className="cart-title border-b pb-8">Resumen de compra</h1>
                    <div className="cart-summary-title-container">
                      <p>Subtotal</p>
                      <p>${itemsAmount()}</p>
                    </div>
                    <p className="mt-10 text-sm text-gray-500">El costo del envío se calculará al finalizar la compra.</p>
                    <div className="mt-6">
                      <Link to="/checkout" className="btn-default-sm btn-cart-to-checkout">
                        Finalizar
                      </Link>
                    </div>
                    <div className="cart-summary-links">
                      <p>
                        o{' '}
                        <Link to="/" className="font-semibold text-slate-800 hover:text-slate-700">
                          Seguir comprando<span aria-hidden="true"> &rarr;</span>
                        </Link>
                      </p>
                    </div>
                  </>
                }
              </div>
            </div>
          </div>

          :

          <div className='cart-empty-cart'>
            Tu carrito está vacío.
            <Link to="/" className="cart-btn">
              <button className='btn-default-sm'>
                Ver productos
              </button>
            </Link>
          </div>
      }
    </div>
  )
}

export default Cart