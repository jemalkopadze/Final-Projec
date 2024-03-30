import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllCategoryID, getSingleProductID } from 'global/api/endpoint'
// import { BookCards, Loader } from 'components';
import { ProductCards } from 'components/cards/ProductCards';


export const Products = () => {
  const { productID } = useParams();
  const [data, setData] = useState(null) // null / {}

  useEffect (() => {
    const fetchBook = async () => {
      const apiData = await getSingleProductID(productID);
      if(apiData) {
        setData(apiData)
      }
    }
    if (productID) {
      fetchBook()
    }
  }, [productID])

  return ( 
    <div className=''>
      {data !== null ? 
        <ProductCards product={data}/> 
      : null }
    </div>
  )
}
