import React, { useState } from 'react'
import { CartContext } from './CartContext'

export const CustomContext = ({children}) => {
    const [ cart, setCart ] = useState([]);

    const addItem = (item) => {
        if (!isInCart(item.id)) 
            setCart([...cart, item]);
    }

    const removeItem = (id) => {
        setCart(cart.filter((product) => product.id !== id))
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.find(prod => prod.id === id);
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}
