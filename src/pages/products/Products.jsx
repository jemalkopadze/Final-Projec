import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllCategoryID, getSingleProductID } from 'global/api/endpoint'
// import { BookCards, Loader } from 'components';
import { ProductCards } from 'components/cards/ProductCards';


export const Products = () => {
  const { productID } = useParams();
  const [products, setProducts] = useState([])

  useEffect (() => {
    const fetchBook = async () => {
      const products = await getSingleProductID(productID);
      if(products) {
        setProducts(products)
        console.log(products)
      }
    }
    if (productID) {
      fetchBook()
    }
  }, [productID])

  return ( 
    <div className=''>
         <ProductCards product={products}/> 
    </div>
  )
}
