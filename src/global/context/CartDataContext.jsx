import { createContext, useState } from "react";
import {getData, setData} from 'global/storage'

export const CartDataContext = createContext();

export const CartDataProvider = ({ children }) => {
    const [cart, setCart] = useState(getData('Cart') ?? []); // [{BookId: 0, Quantity: 1}]

    const isInCart = (id) => {
        return cart.findIndex((item) => item.BookId === id) !== -1;
    }

    const removeFromCart = (id) => {
        let newCart = cart.filter((item) => item.BookId !== id);
        setCart(newCart);
        setData('Cart', newCart);
    }

    const addToCart = (book) => {
        let newCart = [...cart]
        let index = cart.findIndex((item) => item.BookId === book.id );
        if(index === -1) {
            newCart.push({
                BookId: book.id, 
                Quantity: 1,
                Image: book.pictures[0] ?? '',
                Name: book.name,
                Price: book.variations[0]?.price ?? 0
            });
        }
        setCart(newCart);
        setData('Cart', newCart);
    }

    const getQuantity = (id) => {
        let index = cart.findIndex((item) => item.BookId === id);
        if(index !== -1) {
            return cart[index].Quantity;
        }
        return 0;
    }

    const updateQuantity = (id, quantity) => {
        let newCart = [...cart];
        let index = cart.findIndex((item) => item.BookId === id);
        if(index !== -1) {
            newCart[index].Quantity = parseInt(quantity);
        }
        setCart(newCart);
        setData('Cart', newCart);
    }

    const cartTotal = () => {
        return cart.reduce((total, item) => {
            return total + item.Quantity;
        }, 0);
    }

    return (
        <CartDataContext.Provider value={{
            cart,
            isInCart,
            addToCart,
            removeFromCart,
            getQuantity,
            updateQuantity,
            cartTotal
        }}>
            {children}
        </CartDataContext.Provider>
    )
}
