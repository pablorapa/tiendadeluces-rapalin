import React, { useState } from 'react'
import { CartContext } from './CartContext'

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [categories, setCategories] = useState([]);

    /**
     * Adds item to cart
     * @param {object} item 
     */
    const addItem = (item) => {
        if (!isInCart(item.id))
            setCart([...cart, item]);
    }

    /**
     * Removes item from cart
     * @param {number} id 
     */
    const removeItem = (id) => {
        setCart(cart.filter((product) => product.id !== id))
    }

    /**
     * Clears cart
     */
    const clear = () => {
        setCart([]);
    }

    /**
     * Checks if id is in cart
     * @param {number} id 
     * @returns {boolean}
     */
    const isInCart = (id) => {
        return cart.find(prod => prod.id === id);
    }

    /**
     * Returns total amount of cart
     * @returns {number}
     */
    const itemsTotal = () => {
        return cart.reduce((acc, product) => acc + Number(product.qty), 0);
    }

    /**
     * Returns amount of items in cart
     * @returns {number}
     */
    const itemsAmount = () => {
        return cart.reduce((acc, product) => acc + (Number(product.qty) * Number(product.price)), 0);
    }

    /**
     * Updates quantity property in cart for the given id
     * @param {number} id 
     * @param {number} qty 
     */
    const replaceItemQty = (id, qty) => {
        const newCart = [...cart];
        const itemIndex = newCart.findIndex(product => product.id === id);
        newCart[itemIndex].qty = qty;
        setCart(newCart)
    }

    return (
        <>
            <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, itemsTotal, itemsAmount, replaceItemQty, categories, setCategories }}>
                {children}
            </CartContext.Provider>
        </>
    )
}
