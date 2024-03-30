import { StaticDataContext } from 'global/context/StaticDataContext'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const CartProductsCard = ({product}) => {
  const {language} = useState(StaticDataContext)

  return (
    <Link to={`/${language}/product/${product.id}`}>
    <img src={product.image} alt={product.id}/>
    </Link>
  )
}
