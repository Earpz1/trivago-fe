import { Rating } from 'react-simple-star-rating'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { TbPlaneArrival, TbPlaneDeparture } from 'react-icons/tb'
import moment, * as moments from 'moment'

const SearchResultCard = ({ result }) => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const duration = searchParams.get('duration')
  const dateString = searchParams.get('dateFrom')
  const arrivingDate = new Date(dateString)

  useEffect(() => {
    console.log(arrivingDate)
  }, [])

  return (
    <Link to={`../accommodation/${result._id}`} className="card-image-link">
      <div className="search-result-container mb-5 d-flex">
        <img src={result.image} alt={result.name} />
        <div className="d-flex flex-column justify-content-between">
          <div className="d-flex flex-column">
            <h2 className="mt-3 mb-0">{result.name}</h2>
            <span>{result.city}</span>
          </div>
          <div className="d-flex flex-column">
            <Rating
              size={25}
              readonly={true}
              initialValue={result.rating}
              className="mb-1 mt-4"
            />
            <span className="mt-4">620 reviews</span>
          </div>

          <div className="d-flex flex-column">
            <h4 className="mt-1 mb-0">£{duration * 150} </h4>
            <small>{duration} nights @ £150 per night</small>
            <small>
              <div className="d-flex flex-column">
                <div className="d-flex">
                  <TbPlaneDeparture className="mt-1" />
                  {moment(arrivingDate).format('dddd Do MMMM YYYY')}
                </div>
                <div className="d-flex">
                  <TbPlaneArrival className="mt-1 mb-3" />
                  {moment(arrivingDate)
                    .add(duration, 'days')
                    .format('dddd Do MMMM YYYY')}
                  {}
                </div>
              </div>
            </small>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default SearchResultCard
