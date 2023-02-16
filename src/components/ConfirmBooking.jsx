import React from 'react'
import NavBar from './NavBar'
import { useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import CardPayment from './CardPayment'
import { getBooking } from '../fetches'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import BookingReserved from './messages/BookingReserved'
import BookingSuccess from './messages/BookingSuccess'
import { BsFillCheckCircleFill } from 'react-icons/bs'

const ConfirmBooking = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const bookingID = searchParams.get('bookingID')
  const [bookingStatus, setBookingStatus] = useState('')
  const [processingPayment, setProcessingPayment] = useState(false)
  const [bookingConfirmed, setBookingConfirmed] = useState(false)

  const { data, isLoading } = useQuery(
    ['getBooking', bookingID],
    ({ queryKey }) => getBooking(queryKey[1]),
  )

  const processBooking = () => {
    setProcessingPayment(true)
    setTimeout(() => {
      setBookingStatus('confirmed')
      setProcessingPayment(false)
      setBookingConfirmed(true)
    }, 2500)
  }

  return (
    <div>
      <NavBar />
      <Container>
        {bookingStatus === 'confirmed' ? (
          <BookingSuccess />
        ) : (
          <BookingReserved />
        )}

        <div className="d-flex justify-content-between">
          <div className="order-container d-flex flex-column align-items-center px-3">
            <h3 className="mt-3">Booking Details</h3>

            {!isLoading && (
              <div className="d-flex flex-column align-items-center px-3">
                <img
                  src={data.accommodationID.image}
                  className="order-details-image"
                />
                <p>
                  A <strong>{data.duration}</strong> night stay in{' '}
                  <strong>{data.accommodationID.name}</strong>,{' '}
                  <strong>{data.accommodationID.city}</strong>
                </p>
                <span>
                  <strong>Arriving:</strong> {data.dateFrom}
                </span>
                <span>
                  <strong>Total to Pay:</strong> £{data.price}
                </span>
              </div>
            )}
          </div>
          <div className="payment-container pl-5">
            <div className="d-flex flex-column align-items-center">
              {processingPayment && (
                <Spinner
                  animation="border"
                  variant="primary"
                  className="mt-5"
                  size="lg"
                />
              )}

              {bookingStatus !== 'confirmed' && !processingPayment && (
                <CardPayment bookingOutcome={processBooking} />
              )}
              {bookingConfirmed && (
                <div className="d-flex">
                  <BsFillCheckCircleFill className="booking-confirmed" />
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ConfirmBooking
