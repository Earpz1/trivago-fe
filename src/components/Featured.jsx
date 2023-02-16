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
      <Container fluid className="w-75 mt-5">
        <Row>
          {!isLoading &&
            data.map((accomodation) => (
              <Col key={accomodation._id} xl={3} lg={4} md={6} sm={12}>
                <AccommodationCard details={accomodation} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  )
}

export default Featured
