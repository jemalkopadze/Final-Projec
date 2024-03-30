import React, { useContext } from 'react'
import { StaticDataContext } from 'global/context/StaticDataContext'
import { Link } from 'react-router-dom'

export const SeriesCards = ({ series, seriesCategoryId }) => {
    const { language } = useContext(StaticDataContext);
  
    return (
      <section className="text-gray-600 body-font">
        <div className="container px-25 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {series.map((seriesItem, index) => (
              <div key={`series-cards-${index}`} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link to={`/${language}/series/seriesCategory/${seriesItem.id}`} className="block relative h-48 rounded overflow-hidden">
                  <img alt={seriesItem.title} className="object-cover object-center w-full h-full block" src={seriesItem.image} />
                </Link>
                <div className="mt-2 ">
                  <h2 className="text-gray-600 title-font text-sm font-medium text-center">{seriesItem.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };