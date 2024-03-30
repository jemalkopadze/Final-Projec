import React from 'react'
import { useContext } from 'react'
import { CartDataContext } from 'global/context/CartDataContext'
import cart from 'theme/icons/cart.svg'
export const AddToCart = (props) => {
    const { book } = props
    const { addToCart } = useContext(CartDataContext)
    // console.log(book)
    const toggleCart = () => {
        addToCart(book)
    }

    return (
        <button className={`cart_btn flex justify-end bg-sky-600 py-1 px-3 rounded-md text-white`} 
            onClick={toggleCart}>
            {'დამატება'}
            <img src={cart} alt="cart" className='ml-2 w-[20px] h-[20px]' />
        </button>
    )
}