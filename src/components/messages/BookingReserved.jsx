import { Alert } from 'react-bootstrap'

const BookingReserved = () => {
  return (
    <Alert variant="warning" className="mt-5">
      <Alert.Heading>Your dates have been reserved!</Alert.Heading>
      <p>
        The dates you have requested have been reserved for 30 minutes. The
        final step to confirm your booking is to complete payment. Once you have
        completed payment you will recieve an email confirming your booking
        details.
      </p>
      <hr />
      <p className="mb-0">
        If you do not complete the booking, your dates will be made available
        for other people to book.
      </p>
    </Alert>
  )
}

export default BookingReserved
