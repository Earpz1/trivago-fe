import NavBar from './NavBar'
import { Container, Row, Col } from 'react-bootstrap'
import AccommodationCard from './AccommodationCard'
import { useQuery } from 'react-query'
import { getUserAccommodation } from '../fetches'

const MyAccommodation = () => {
  const { data, isLoading } = useQuery(['accommodatons'], getUserAccommodation)

  return (
    <>
      <NavBar />
      <div className="d-flex justify-content-center">
        <div className="content-container">
          <Container>
            <h1>Your Accommodations</h1>
            <Row>
              {!isLoading &&
                data.map((accomodation) => (
                  <Col key={accomodation._id} md={3} className="mb-3">
                    <AccommodationCard details={accomodation} />
                  </Col>
                ))}
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default MyAccommodation
