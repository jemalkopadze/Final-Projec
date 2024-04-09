import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StaticDataContext } from 'global/context/StaticDataContext';
import { UserDataContext } from 'global/context/UserDataContext';
import { CartDataContext } from 'global/context/CartDataContext';
import { LoginForm } from '../modals';
import { ProfileMenu } from 'components/modals/ProfileMenu';
import Logo from 'images/fox.png';
import Profile from 'images/profile.png';

export const Header = () => {
    const { language, translate } = useContext(StaticDataContext);
    const { isUser, loginUser, logoutUser } = useContext(UserDataContext);
    const { cartTotal } = useContext(CartDataContext);
    const [loginModal, setLoginModal] = useState(false);
    const [profileMenu, setProfileMenu] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleLoginForm = () => {
        setLoginModal(!loginModal);
    }

    const toggleProfileMenu = () => {
        setProfileMenu(!profileMenu);
    }

    const handleLogout = () => {
        logoutUser();
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <>
            <header className="header">
                <div className="header__top">
                    <div className="container">
                    </div>
                </div>
                <div className="nav_container">
                    <nav className="bg-white-800">
                        <div className="max-w-7xl mx-auto px-4">
                            <div className="flex justify-between items-center h-16">
                                <div className="col-lg-3">
                                    <div className="header__logo px-10">
                                        <Link to={`/${language}`}><img src={Logo} alt="" /></Link>
                                    </div>
                                </div>
                                <div className="block md:hidden">
                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="text-black focus:outline-none"
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16m-7 6h7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="hidden md:flex md:items-center md:space-x-4">
                                    <nav className="header__menu">
                                        <ul className='flex w-[100%] items-center justify-center text-sm space-x-10 '>
                                            <Link to={`/${language}/`} onClick={closeMenu}><li>{translate.menu.home}</li></Link>
                                            <Link to={`/${language}/category`} onClick={closeMenu}><li>{translate.menu.category}</li></Link>
                                            <Link to={`/${language}/events`} onClick={closeMenu}><li>{translate.menu.events}</li></Link>
                                            <Link to={`/${language}/series`} onClick={closeMenu}><li>{translate.menu.series}</li></Link>
                                            <Link to={`/${language}/about`} onClick={closeMenu}><li>{translate.menu.about}</li></Link>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="flex items-center">
                                    <div className="relative">
                                        <div className="header__top__right__social">
                                            <Link to={`${language}/cart`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                                                    <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd"></path>
                                                </svg>
                                            </Link>
                                            <span className="absolute bottom-2 left-3 bg-red-500 text-white rounded-full px-1 text-xs">
                                                {cartTotal()}
                                            </span>
                                        </div>
                                    </div>
                                    {isUser ? (
                                        <div className="ml-5 flex justify-between w-[110px]">
                                            <Link to={`/${language}/profile`} onClick={closeMenu}><img src={Profile} className='h-6' /></Link>
                                            <button onClick={handleLogout}>{translate.profileMenu.logout}</button>
                                        </div>
                                    ) : (
                                        <div className="ml-3" onClick={toggleLoginForm}>
                                            <span className="fa fa-user cursor-pointer mt-2 text-black font-bold font-thin px-1 rounded">შესვლა</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        {isOpen && (
                            <div className="md:hidden">
                                <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-200 text-center w-full  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                                    <ul className='fle cotext-black'>
                                        <Link to={`/${language}/`} onClick={closeMenu}><li>{translate.menu.home}</li></Link>
                                        <Link to={`/${language}/category`} onClick={closeMenu}><li>{translate.menu.category}</li></Link>
                                        <Link to={`/${language}/events`} onClick={closeMenu}><li>{translate.menu.events}</li></Link>
                                        <Link to={`/${language}/series`} onClick={closeMenu}><li>{translate.menu.series}</li></Link>
                                        <Link to={`/${language}/about`} onClick={closeMenu}><li>{translate.menu.about}</li></Link>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </nav>

                </div>
                {loginModal &&
                    <LoginForm
                        toggle={toggleLoginForm}
                    />
                }
                {profileMenu &&
                    <ProfileMenu toggle={toggleProfileMenu} />
                }
            </header>
        </>
    )
}
