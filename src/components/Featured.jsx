import React from 'react'
import AccommodationCard from './AccommodationCard'
import { Col, Container, Row } from 'react-bootstrap'
import { getFeaturedAccommodations } from '../fetches'
import { useQuery } from 'react-query'

const Featured = () => {
  const { data, isLoading } = useQuery(
    ['featuredAccommodations'],
    getFeaturedAccommodations,
  )

  return (
    <div className="d-flex justify-content-center">
      <div className="content-container">
        <Container>
          <Row>
            {!isLoading &&
              data.map((accomodation) => (
                <Col key={accomodation._id} xl={4} lg={6} sm={12}>
                  <AccommodationCard details={accomodation} />
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Featured
