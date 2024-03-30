import React, { useEffect, useState } from 'react'
import { getBestOfWeekAuthor } from 'global/api/endpoint'

export const SuggestionCards = () => {
  const [suggestion, setSuggestion] = useState([])

  useEffect(() => {
    const fetchBestAuthor = async () => {
      const suggestion = await getBestOfWeekAuthor();
      if (suggestion) {
        setSuggestion(suggestion)
      }
      console.log()
    }
    fetchBestAuthor()
  }, [])

  return (
    <div>
      {suggestion.map((suggestion.books))}
    </div>  
  )
}
