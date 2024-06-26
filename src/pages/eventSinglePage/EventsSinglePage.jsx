import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleEvents } from 'global/api/endpoint'
import { SingleEventCard } from 'components/cards'
import { Loader } from 'components'

export const EventsSinglePage = () => {
  const { eventsId } = useParams()
  const [singleEvent, setSingleEvent] = useState()

  useEffect(() => {
    const fetchSingleEvent = async () => {
      const singleEventData = await getSingleEvents(eventsId)
      if (singleEventData) {
        setSingleEvent(singleEventData)
      }
    }
    if (eventsId) {
      fetchSingleEvent()
    }
  }, [eventsId])

  return (
    <div>
      {
        <SingleEventCard singleEvent={singleEvent} />
      }
    </div>
  )
}
