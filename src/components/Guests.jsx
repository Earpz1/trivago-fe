import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi'
import { useState } from 'react'

const Guests = (props) => {
  return (
    <div className="guests-container px-3 py-3">
      <div className="adults d-flex justify-content-between">
        <FiMinusCircle className="guests-icon" onClick={props.removeAdult} />
        <span className="adults">
          <strong>{props.adults}</strong> Adult(s)
        </span>
        <FiPlusCircle className="guests-icon" onClick={props.addAdults} />
      </div>
      <div className="adults d-flex justify-content-between mt-3">
        <FiMinusCircle className="guests-icon" onClick={props.removeChildren} />
        <span className="children">
          {' '}
          <strong>{props.children}</strong> Children
        </span>
        <FiPlusCircle className="guests-icon" onClick={props.addChildren} />
      </div>
    </div>
  )
}
export default Guests
