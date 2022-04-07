import React, { useState } from 'react'
import { CartContext } from './CartContext'

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

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

    const itemsTotal = () => {
        return cart.reduce((acc, product) => acc + product.qty, 0);
    }

    const itemsAmount = () => {
        return cart.reduce((acc, product) => acc + (product.qty * product.price), 0);
    }

    const replaceItemQty = (id, qty) => {
        const newCart = [...cart];
        const itemIndex = newCart.findIndex(product => product.id === id);
        newCart[itemIndex].qty = qty;
        setCart(newCart)
    }

    return (
        <>
            <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, itemsTotal, itemsAmount, replaceItemQty }}>
                {children}
            </CartContext.Provider>
        </>
    )
}
