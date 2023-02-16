import { Card, ListGroup, Button } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'
import { Link } from 'react-router-dom'
import CornerRibbon from 'react-corner-ribbon'

const AccommodationCard = ({ details }) => {
  return (
    <Card className="mb-5 accommodation-card">
      <CornerRibbon
        position="top-left" // OPTIONAL, default as "top-right"
        fontColor="#f0f0f0" // OPTIONAL, default as "#f0f0f0"
        backgroundColor="#FF0000" // OPTIONAL, default as "#2c7"
        containerStyle={{}} // OPTIONAL, style of the ribbon
        style={{}} // OPTIONAL, style of ribbon content
        className="ribbon" // OPTIONAL, css class of ribbon
      >
        Featured
      </CornerRibbon>
      <Link to={`accommodation/${details._id}`} className="card-image-link">
        <Card.Img variant="top" src={details.image} className="card-image" />
        <Card.Body>
          <Card.Title>{details.name}</Card.Title>
          <Card.Text>{details.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Location: {details.city}</ListGroup.Item>

          <ListGroup.Item className="d-flex justify-content-between">
            <Rating size={25} readonly={true} initialValue={details.rating} />
            {' 1,032 Reviews '}
            <strong>£150 per night</strong>
          </ListGroup.Item>
        </ListGroup>
      </Link>
    </Card>
  )
}

export default AccommodationCard
