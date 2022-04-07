import React, { useContext }  from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../item/ItemCount';
import { CartContext } from '../../context/CartContext'

export const CartItem = ({item}) => {

    const {name, id, price, qty, stock, initial, imageSrc, imageAlt} = item;

    const { removeItem, replaceItemQty } = useContext(CartContext);

    const setItemQty = (newQty) => {
        replaceItemQty(id, newQty)
    }

  return (
    <li className="flex py-6">
        <Link to={`/item/${id}`} className="hidden h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 md:block">
            <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cove    r object-center"
            />
        </Link>

        <div className="ml-4 flex flex-1 flex-col">
        <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
            <h3 className='w-4/12'>
                <Link to={`/item/${id}`}> {name} </Link>
            </h3>
            <ItemCount  stock={stock} initial={initial} qty={qty} setQty={setItemQty} isButtonVisible={false}/>
            <p className="ml-4">$ {price}</p>
            </div>
        </div>
        <div className="mt-2 flex flex-1 items-end justify-between text-sm md:mt-0">
            <div className="flex">
                <button type="button" onClick={()=> removeItem(id)} className="font-medium text-slate-600 hover:text-slate-500">
                    Eliminar
                </button>
            </div>
        </div>
        </div>
    </li>
  )
}
