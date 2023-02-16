import { getAccommodationDetails } from '../fetches'
import React from 'react'
import NavBar from './NavBar'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'
import QuoteBanner from './QuoteBanner'
import PropertyTabs from './PropertyTabs'

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
        <Container>
          <QuoteBanner booking={data} />
          <div className="image-container d-flex">
            <img
              src="https://images.trvl-media.com/lodging/1000000/30000/22800/22702/79f48afd.jpg?impolicy=resizecrop&rw=1200&ra=fit"
              className="featured-accommodation-image"
            />
            <div className="d-flex">
              <div className="d-flex flex-column">
                <img
                  src="https://images.trvl-media.com/lodging/1000000/30000/22800/22702/38c01dd3.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                  className="small-accommodation-image"
                />
                <img
                  src="https://images.trvl-media.com/lodging/1000000/30000/22800/22702/0f0c096e.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                  className="small-accommodation-image"
                />
              </div>
              <div className="d-flex flex-column">
                <img
                  src="https://images.trvl-media.com/lodging/1000000/30000/22800/22702/8cd0eb16.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                  className="small-accommodation-image"
                />
                <img
                  src="https://images.trvl-media.com/lodging/1000000/30000/22800/22702/68bb9cbf.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                  className="small-accommodation-image"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <PropertyTabs booking={data} />
          </div>
        </Container>
      )}
    </>
  )
}

export default PropertyDetails
