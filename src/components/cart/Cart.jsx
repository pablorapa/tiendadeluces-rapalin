import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'
import { CartItem } from './CartItem';

const Cart = () => {

  const { itemsTotal, itemsAmount, cart, clear } = useContext(CartContext);

  return (
    <div className="bg-rose-50 min-h-[calc(100vh_-_22rem)]">
      {
        cart.length ? 

          <div className="container mx-auto mt-10">
            <div className="flex flex-wrap shadow-md my-10 md:flex-nowrap">
              <div className="w-full mx-3 bg-white px-10 py-10 md:w-3/4 md:mx-0">
                <div className="flex justify-between border-b pb-8">
                  <h1 className="font-semibold text-2xl">Carrito de compras</h1>
                  {cart.length > 0 && <h2 className="hidden font-semibold text-2xl md:block">{itemsTotal()} producto{itemsTotal() > 1 ? 's' : ''}</h2>  }
                </div>                
                <div className="mt-8">
                  <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      {cart.map(item=> (
                        <CartItem key={item.id} item={item} />
                      ))}
                    </ul>
                  </div>
                  <button onClick={()=>clear()} className="mt-10 font-semibold text-slate-600 text-lg">
                    Vaciar carrito
                  </button>
                </div>
              </div>
              <div id="summary" className="w-full mx-3 px-8 py-10 bg-gray-100 md:w-1/4 md:mx-0">
                {cart.length > 0 && 
                  <>      
                    <h1 className="font-semibold text-2xl border-b pb-8">Resumen de compra</h1>
                    <div className="mt-2 flex justify-between text-base font-medium text-gray-900 sm:flex-wrap">
                      <p>Subtotal</p>
                      <p>${itemsAmount()}</p>
                    </div>
                    <p className="mt-10 text-sm text-gray-500">El costo del envío se calculará al finalizar la compra.</p>
                    <div className="mt-6">
                      <Link to="/checkout" className="flex items-center justify-center rounded-md border border-transparent bg-slate-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-slate-800">
                        Finalizar
                      </Link>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-base text-gray-500">
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

          <div className='mt-20 text-center text-3xl text-slate-800 font-semibold flex flex-col items-center'>
            Tu carrito está vacío.
            <Link to="/" className="mt-10 font-semibold text-slate-600 text-lg">
              <button className='flex items-center justify-center rounded-md border border-transparent bg-slate-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-slate-800'>
                Ver productos
              </button>
            </Link>
          </div>
        }
    </div>
  )
}

export default Cart