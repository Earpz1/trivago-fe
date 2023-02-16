import { IoMdArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { useLocation, useParams } from 'react-router-dom'
import { createBooking } from '../fetches'

const QuoteBanner = ({ booking }) => {
  const navigate = useNavigate()
  let params = useParams()

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const duration = searchParams.get('duration')
  const dateString = searchParams.get('dateFrom')
  const arrivingDate = new Date(dateString)
  const guests = searchParams.get('guests')
  const accommodationID = params.id

  const goBack = () => {
    navigate(-1)
  }

  booking.duration = duration
  booking.dateFrom = dateString
  booking.guests = guests
  booking.accommodationID = accommodationID

  const reserveBooking = async () => {
    const bookingID = await createBooking(booking)
    if (localStorage.getItem('accessToken')) {
      console.log(bookingID)
      navigate(`/confirm?bookingID=${bookingID}`)
    } else {
      navigate(`/login?redirect=confirm?bookingID=${bookingID}`)
    }
  }

  return (
    <div className="book-now-container d-flex align-items-center justify-content-between">
      <div>
        <IoMdArrowBack />
        <a href="#" onClick={goBack}>
          Back to Search Results...
        </a>
      </div>
      <div className="d-flex">
        <div className="price d-flex flex-column px-3 align-items-center">
          <h2>£150</h2>
          <span>Per night</span>
        </div>

        <div className="book-now-button" onClick={reserveBooking}>
          Book Now
        </div>
      </div>
    </div>
  )
}
export default QuoteBanner
