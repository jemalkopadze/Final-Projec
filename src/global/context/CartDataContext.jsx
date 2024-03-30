import { createContext, useEffect, useState } from "react";
import {existData, getData, setData} from 'global/storage'


export const CartDataContext = createContext();

export const CartDataProvider = ({ children }) => {
    const [cart, setCart] = useState(getData('carts') ?? [])

    const isInCart = (id) => {
        return cart.includes(id)
    }

    const addInCart = (id) => {
        let newCart = [...cart]
        let index = cart.findIndex((carts) => carts === id );
        if(index) {
            newCart.push(id);
            // newCart.splice(index, 1);
        }
        setCart(newCart);
        setData('Cart', newCart)

        // if (isInCart(id)) {
        //     setCart(cart.filter(cart => cart !== id))
        // }else {
        //     setCart([...cart, id])
        // }
    }

    return (
        <CartDataContext.Provider value={{
            cart,
            isInCart,
            addInCart
        }}>
            {children}
        </CartDataContext.Provider>
    )
}
