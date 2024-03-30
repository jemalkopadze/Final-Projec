import React, { useEffect, useState } from 'react'
import { getCarousel } from 'global/api/endpoint'
import { Home } from 'pages'
import { CarouselBox } from 'components/slider'
import { Loader } from 'components'

export const Carousel = () => {
    const [carousel, setCarousel] = useState([])

    useEffect(() => {
        const fetchCariusel = async () => {
            const carouselData = await getCarousel()
            if(carouselData) {
                setCarousel(carouselData)
            }
        }
        fetchCariusel()
    }, [])

  return (
    <div>
        {
            carousel.length > 0 ? <CarouselBox carousel={carousel}/> : <Loader />
        }
    </div>
  )
}
