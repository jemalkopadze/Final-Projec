import { Loader } from 'components'
import { SeriesCards } from 'components/cards/SeriesCards'
import { getSeries } from 'global/api/endpoint'
import React, { useEffect, useState } from 'react'

export const Series = () => {
  const [series, setSeries] = useState([])

  useEffect(() => {
    const fetchSeries = async () => {
      const seriesData = await getSeries(); 
      if(seriesData){
        setSeries(seriesData) 
        console.log(seriesData) 
      }
    }
    fetchSeries()
  }, []) 

  return (
    <div>
      {
        series.length > 0 ? <SeriesCards series={series} /> : <Loader />
      }
    </div>
  )
}
