import { IoMdArrowBack } from 'react-icons/io'

const QuoteBanner = () => {
  return (
    <div className="book-now-container d-flex align-items-center justify-content-between">
      <div>
        <IoMdArrowBack />
        <a href="#">Back to Search...</a>
      </div>
      <div className="d-flex">
        <div className="price d-flex flex-column px-3 align-items-center">
          <h2>£150</h2>
          <span>Per night</span>
        </div>
        <div className="book-now-button">Book Now</div>
      </div>
    </div>
  )
}
export default QuoteBanner
