import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi'
import { useState } from 'react'

const Guests = (props) => {
  const [adults, setAdults] = useState(0)
  const [children, setChildren] = useState(0)

  const addAdults = () => {
    setAdults(adults + 1)
    props.addGuest()
  }

  const addChildren = () => {
    setChildren(children + 1)
    props.addGuest()
  }

  const removeChildren = () => {
    if (children !== 0) {
      setChildren(children - 1)
      props.removeGuest()
    }
  }

  const removeAdult = () => {
    if (adults !== 0) {
      setAdults(adults - 1)
      props.removeGuest()
    }
  }

  return (
    <div className="guests-container px-3 py-3">
      <div className="adults d-flex justify-content-between">
        <FiMinusCircle className="guests-icon" onClick={removeAdult} />
        <span className="adults">
          <strong>{adults}</strong> Adult(s)
        </span>
        <FiPlusCircle className="guests-icon" onClick={addAdults} />
      </div>
      <div className="adults d-flex justify-content-between mt-3">
        <FiMinusCircle className="guests-icon" onClick={removeChildren} />
        <span className="children">
          {' '}
          <strong>{children}</strong> Children
        </span>
        <FiPlusCircle className="guests-icon" onClick={addChildren} />
      </div>
    </div>
  )
}
export default Guests
