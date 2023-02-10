import { Card, ListGroup, Button } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'

const AccommodationCard = ({ details }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={details.image} />
      <Card.Body>
        <Card.Title>{details.name}</Card.Title>
        <Card.Text>{details.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Location: {details.city}</ListGroup.Item>
        <ListGroup.Item>Max Guests: {details.maxGuests}</ListGroup.Item>
        <ListGroup.Item>
          Rating:{' '}
          <Rating size={25} readonly={true} initialValue={details.rating} />{' '}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button>Book</Button>
      </Card.Body>
    </Card>
  )
}

export default AccommodationCard
