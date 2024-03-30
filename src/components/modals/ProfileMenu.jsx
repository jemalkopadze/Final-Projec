import React, { useContext } from 'react'
import { StaticDataContext } from 'global/context/StaticDataContext'
import { UserDataContext } from 'global/context/UserDataContext'
import { Link } from 'react-router-dom'

export const ProfileMenu = ({toggle}) => {
    const {language,translate} = useContext(StaticDataContext)
    const {logoutUser} = useContext(UserDataContext)

    const logoutUserRedirect = () => {
      logoutUser()
      toggle()
    }
     
  return (
    <div className='profile-menu'>
        <h2 className='text-center'>
            {translate.profileMenu.logout}
        </h2>
        <Link to={`/${language}/profile`}>{translate.profileMenu.profile} </Link>
        <button 
        type='button'
        onClick={logoutUserRedirect }
        >
            {translate.profileMenu.logout}
        </button>
    </div>
  )
}
 