import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllCategoryID } from 'global/api/endpoint'
import { BookCards, Loader } from 'components';

export const Books = () => {
  const { id } = useParams();
  const [books, setBook] = useState([])

  useEffect (() => {
    const fetchBook = async () => {
      const books = await getAllCategoryID(id);
      if(books) {
        setBook(books.data)
      }
    }
    if (id) {
      fetchBook()
    }
  }, [id])

  return ( 
    <div className=''>
      {
        books.length > 0 ? <BookCards Book={books}/> : <Loader />
      }
    </div>
  )
}
