import { Card, ListGroup, Button } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'

const AccommodationCard = ({ details }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src="https://media.istockphoto.com/id/1026205392/photo/beautiful-luxury-home-exterior-at-twilight.jpg?s=612x612&w=0&k=20&c=HOCqYY0noIVxnp5uQf1MJJEVpsH_d4WtVQ6-OwVoeDo="
      />
      <Card.Body>
        <Card.Title>{details.name}</Card.Title>
        <Card.Text>{details.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Location: {details.city}</ListGroup.Item>
        <ListGroup.Item>Max Guests: {details.maxGuests}</ListGroup.Item>
        <ListGroup.Item>
          Rating: <Rating size={25} readonly={true} initialValue={3} />{' '}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button>Book</Button>
      </Card.Body>
    </Card>
  )
}

export default AccommodationCard
