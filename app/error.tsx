'use client'

import { useEffect } from 'react'

type Digest = {
    digest?: string
}

type ErrorType = {
    error: Error & Digest,
    reset: () => void
}
 
const GenericPage = ({
  error,
  reset,
}: ErrorType) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}

export default GenericPage