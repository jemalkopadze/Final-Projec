import React, { useEffect, useState, useContext } from 'react'
import { getBestOfWeekAuthor } from 'global/api/endpoint';
import { StaticDataContext } from 'global/context/StaticDataContext';
import { Link } from 'react-router-dom';


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
    <section class="text-gray-600 body-font">
      <h3 className='text-2xl pt-20 text-orange-600'>{translate.weekAuthor.title}</h3>
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img alt="feature" class="object-cover object-center h-full w-full" src={bestAuthor.img} />
        </div>
        <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">{bestAuthor.fullname}</h2>
              <p class="leading-relaxed text-base">{bestAuthor.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    // <section className="flex flex-col author-card text-gray-600 body-font shadow-2xl mt-2 rounded rounded-md">
    //   <h3 className='my-10 mb-[-120px] underline-offset-3 pl- pt-4'>{translate.weekAuthor.title}</h3>
    //   <div className="container px-5 py-24 mx-auto flex flex-row">
    //     <div className="flex flex-col">
    //       <div className="flex flex-col sm:flex-row mt-10">
    //         <div className=" sm:pr-8 sm:py-8">
    //           <div className="w-60">
    //             <img className="" src={bestAuthor.img} alt='' />
    //           </div>
    //         </div>
    //         <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-0 pt-0 sm:mt-0 text-center sm:text-left ">
    //           <div className='flex justify-between aling-center'>
    //             <h2 className='text-left mb-8 '>{bestAuthor.fullname}</h2>
    //           </div>
    //           <p className="text-wrap">{bestAuthor.description}</p>

    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}
