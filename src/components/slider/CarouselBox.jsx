import React from 'react'

export const CarouselBox = ({ carousel = [] }) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {carousel.map((carousel, index) => (
                        <div key={`carousel-${index}`} className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={carousel.img} alt="blog" />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}
