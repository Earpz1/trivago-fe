import { IoMdArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const QuoteBanner = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
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
        <Link to="/confirm">
          <div className="book-now-button">Book Now</div>
        </Link>
      </div>
    </div>
  )
}
export default QuoteBanner
