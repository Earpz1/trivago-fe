import { Card, ListGroup, Button } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'
import { Link } from 'react-router-dom'

const AccommodationCard = ({ details }) => {
  return (
    <Card className="mb-5">
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
        <Link to={`accommodation/${details._id}`}>
          <Button>More Details...</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default AccommodationCard
