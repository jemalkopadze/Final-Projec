import React, { useEffect, useState, useContext } from 'react'
import { getBestOfWeekAuthor } from 'global/api/endpoint';
import { StaticDataContext } from 'global/context/StaticDataContext';


export const BestAuthor = () => {
  const { language } = useContext(StaticDataContext);
  const { translate } = useContext(StaticDataContext);

  const [bestAuthor, setBestAuthor] = useState([]);

  useEffect(() => {
    const fetchBestAuthor = async () => {
      const bestAuthor = await getBestOfWeekAuthor();
      if (bestAuthor) {
        setBestAuthor(bestAuthor)
      }
    }
    fetchBestAuthor()
  }, [])

  return (
    <section className="text-gray-600 body-font">
      <h3 className='text-2xl pt-20 text-orange-600'>{translate.weekAuthor.title}</h3>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img alt="feature" className="object-cover object-center h-full w-full" src={bestAuthor.img} />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{bestAuthor.fullname}</h2>
              <p className="leading-relaxed text-base">{bestAuthor.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
