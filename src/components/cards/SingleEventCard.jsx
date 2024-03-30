import React from 'react'

export const SingleEventCard = ({ singleEvent }) => {
    console.log(singleEvent)
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <img alt="content" className="object-cover object-center h-full w-full" src={singleEvent?.image} />
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p className="leading-relaxed text-lg mb-4">{singleEvent?.description}</p>
                            <a className="text-indigo-500 inline-flex items-center">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
