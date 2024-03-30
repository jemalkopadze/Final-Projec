import React, { useEffect, useState } from 'react';
import { getAllEvents } from 'global/api/endpoint';
import { EventCards } from 'components/cards/EventCards';
import { Loader } from 'components';
import { useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

  export const Events = () => {
    const {eventsId} = useParams()
    const [events, setEvents] = useState([]);
    // const {eventsId} = useParams()
    useEffect(() => {
      const fetchEvents = async () => {
        const eventsData = await getAllEvents(eventsId)
        if (eventsData) {console.log(eventsData)
          setEvents(eventsData.data)
        }
        console.log(eventsData)
      }
      fetchEvents()
    }, [])
    return (
      <div>
        {
          events.length > 0 ? <EventCards events={events}/> : <Loader />
        }
      </div>
    )
  }
