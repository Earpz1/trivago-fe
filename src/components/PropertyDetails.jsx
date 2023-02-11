import { getAccommodationDetails } from '../fetches'
import React from 'react'
import NavBar from './NavBar'
import { useQuery } from 'react-query'
import { useParams, useSearchParams } from 'react-router-dom'

const PropertyDetails = () => {
  const { data, isLoading } = useQuery(
    ['accommodationDetails', '63e64a582ef5dfeacb0a2f0f'],
    ({ queryKey }) => getAccommodationDetails(queryKey[1]),
    { refetchOnWindowFocus: false },
  )

  if (!isLoading) {
    console.log(data.name)
  }

  return (
    <>
      <NavBar />
      {!isLoading && (
        <div>
          <h1>{data.name}</h1>
        </div>
      )}
    </>
  )
}

export default PropertyDetails
