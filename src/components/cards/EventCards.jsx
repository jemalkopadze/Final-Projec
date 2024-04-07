import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StaticDataContext } from 'global/context/StaticDataContext'

export const EventCards = ({ events = [] }) => {
    const {language} = useContext(StaticDataContext);
    
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-25 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {events.map((events, index) => (
                        <div key={`events-cards-${index}`} className="md:w-1/3 md:w-1/2 p-4 w-full">
                            <div className="block relative h-48 rounded overflow-hidden">
                                <img alt={events.title} className="object-cover object-center w-full h-full block" src={events.image} />
                            </div>
                            <div className="mt-4 ">
                                <h2 className="text-gray-900 title-font text-lg font-medium">{events.title}</h2>
                                <p className="mt-1">{events.event_date} - {events.event_end}</p>
                                <h2 className="text-gray-900 title-font text-lg font-medium">{events.location}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}
