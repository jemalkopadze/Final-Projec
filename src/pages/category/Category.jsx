import React, { useEffect, useState } from 'react'
import { gettAllCategory } from 'global/api/endpoint'
import { useParams } from 'react-router-dom'
import { CategoryCards } from 'components/cards'
import { Loader } from 'components'


export const Category = () => {
  const { id } = useParams();
  const [category, setCategory] = useState([]);


  useEffect(() => {
    const fetchCategory = async () => {
      const category = await gettAllCategory(id)
      if (category)
        setCategory(category)
    }
    fetchCategory()

  }, [id])
  return (
    <div>
      {
        category.length > 0 ?
          <CategoryCards category={category} />
          :
          <Loader />
      }
    </div>
  )
}


