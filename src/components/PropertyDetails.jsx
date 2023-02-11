import { getAccommodationDetails } from '../fetches'
import React from 'react'
import NavBar from './NavBar'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

const PropertyDetails = () => {
  let params = useParams()

  const { data, isLoading } = useQuery(
    ['accommodationDetails', params.id],
    ({ queryKey }) => getAccommodationDetails(queryKey[1]),
    { refetchOnWindowFocus: false },
  )

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
