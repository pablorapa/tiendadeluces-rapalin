import React from 'react'
import { ShoppingCartIcon } from "@heroicons/react/solid";

const CartWidget = ({qty=0}) => {
  return (
    <div className="shoping-cart flow-root">
      <a href="#" className="group -m-2 p-2 flex items-center">
        <ShoppingCartIcon
          className="flex-shrink-0 h-6 w-6 group-hover:text-gray-500"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{qty}</span>
      </a>
  </div>
  )
}

export default CartWidget