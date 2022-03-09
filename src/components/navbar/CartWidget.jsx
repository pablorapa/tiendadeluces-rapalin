import React from 'react'
import { ShoppingCartIcon } from "@heroicons/react/solid";

const CartWidget = () => {
  return (
    <div className='relative shoping-cart h-6 w-6'>
      <ShoppingCartIcon  />
      <div className='absolute inset-5 bg-red-500 text-gray-100 rounded-full text-size-1 w-4 h-4 text-center align-middle flex justify-center items-center'>{0}</div>
    </div>



  )
}

export default CartWidget