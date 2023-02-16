import { Form, Button } from 'react-bootstrap'
import { BsFillCreditCard2FrontFill } from 'react-icons/bs'
import { updateBooking } from '../fetches'
import { useLocation } from 'react-router-dom'

const CardPayment = (props) => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const bookingID = searchParams.get('bookingID')

  const processBooking = (bookingID) => {
    updateBooking('63ee2089fa2ef8d70de82a8d')
    props.bookingOutcome()
  }

  return (
    <div className="payment-container pl-5">
      <div className="d-flex flex-column align-items-center">
        <BsFillCreditCard2FrontFill className="payment-icon" />
        <Form.Control
          type="text"
          placeholder="Name on Card"
          className="w-50 mt-3 ml-5"
        />
        <Form.Control
          type="text"
          placeholder="Card Number"
          className="w-50 mt-3 ml-5"
        />
        <div className="d-flex">
          <Form.Control
            type="text"
            placeholder="Expires Date"
            className="w-50 mt-3 "
          />
          <Form.Control
            type="text"
            placeholder="Security Code"
            className="w-50 mt-3 "
          />
        </div>
        <Button
          variant="success"
          className="mt-2 w-50"
          onClick={() => {
            processBooking(bookingID)
          }}
        >
          Make Payment
        </Button>
      </div>
    </div>
  )
}
export default CardPayment
