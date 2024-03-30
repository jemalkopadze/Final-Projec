import React, { useEffect, useState } from 'react'
import { getSeriesCategoryID } from 'global/api/endpoint';
import { useParams } from 'react-router-dom';
import { SeriesCategoryCard } from 'components/cards/SeriesCategoryCard';
import { Loader } from 'components';

export const SeriesCategories = () => {
    const {categoryId} = useParams()
    const [seriesCategory, setSeriesCategory] = useState([]);

    useEffect(() => {
        const fetchSeriesCategory = async () => {
            const seriesCategoryData = await getSeriesCategoryID(categoryId)
            if(seriesCategoryData){
                setSeriesCategory(seriesCategoryData.data)
                console.log(seriesCategoryData)
            }
        }
        if(categoryId) {
            fetchSeriesCategory()
        }
        
    }, [categoryId])

  return (
    <div>
            {
                seriesCategory.length > 0 ? <SeriesCategoryCard seriesCategory={seriesCategory} /> : <Loader />
            }
    </div>
  )
}
