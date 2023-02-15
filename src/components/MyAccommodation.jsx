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
      <div className="d-flex justify-content-center mt-5">
        <Container>
          <h1>Your Accommodations</h1>
          <Row>
            {!isLoading &&
              data.map((accomodation) => (
                <Col
                  key={accomodation._id}
                  xl={3}
                  lg={4}
                  md={6}
                  sm={12}
                  className="mb-3"
                >
                  <AccommodationCard details={accomodation} />
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default MyAccommodation
