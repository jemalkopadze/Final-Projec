import React from 'react'
import { useContext } from 'react'
import { CartDataContext } from 'global/context/CartDataContext'
import cart from 'theme/cart.svg'
export const AddToCart = (BookId) => {
    const { isInCart, addInCart } = useContext(CartDataContext)

    const toggleCart = () => {
        addInCart(BookId)
    }

    return (
        <button className='cart_btn' onClick={toggleCart}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd"></path>
            </svg>
        </button>
    )
}



{/* <nav className="header__menu">
    <ul className='flex w-[90%] items-center justify-center text-sm space-x-10 '>
        <Link to={`/${language}/`}><li>{translate.menu.home}</li></Link>
        <Link to={`/${language}/category`}><li>{translate.menu.category}</li></Link>
        <Link to={`/${language}/events`}><li>{translate.menu.events}</li></Link>
        <Link to={`/${language}/series`}><li>{translate.menu.series}</li></Link>
        <Link to={`/${language}/contact`}><li>{translate.menu.contact}</li></Link>
        <Link to={`/${language}/about`}><li>{translate.menu.about}</li></Link>
    </ul>
</nav> */}