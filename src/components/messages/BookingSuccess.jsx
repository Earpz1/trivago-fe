import { Alert } from 'react-bootstrap'

const BookingSuccess = () => {
  return (
    <Alert variant="success" className="mt-5">
      <Alert.Heading>
        Your payment has completed and your booking has been confirmed!
      </Alert.Heading>
      <p>You will shortly receive an email confirming your booking details!</p>
    </Alert>
  )
}

export default BookingSuccess
