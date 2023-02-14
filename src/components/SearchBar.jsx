import { Container, Form, Button, InputGroup } from 'react-bootstrap'
import ReactDatePicker from 'react-datepicker'
import { useState } from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import Guests from './Guests'

const SearchBar = () => {
  const [date, setDate] = useState(new Date('02-13-2023'))
  const [guests, setShowGuests] = useState(false)
  const [numberOfGuests, setNumberOfGuests] = useState(0)

  const changeDate = (date) => {
    setDate(date)
  }

  const toggleGuests = () => {
    if (guests === false) {
      setShowGuests(true)
    } else {
      setShowGuests(false)
    }
  }

  const addGuest = () => {
    setNumberOfGuests(numberOfGuests + 1)
  }

  const removeGuest = () => {
    setNumberOfGuests(numberOfGuests - 1)
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="search-container px-3 py-3 d-flex justify-content-between px-5">
        <div className="d-flex flex-column">
          <Form.Label>
            <strong>Where do you want to stay?</strong>
          </Form.Label>

          <Form.Control type="text" placeholder="Location" size="md" />
        </div>
        <div className="d-flex flex-column">
          <Form.Label>
            <strong>Check-In</strong>
          </Form.Label>
          <ReactDatePicker
            showIcon="true"
            selected={date}
            dateFormat="dd/MM/yyy"
            startDate={date}
            showMonthDropdown="true"
            popperClassName="react-datepicker-popper"
            onChange={changeDate}
            minDate={new Date()}
            customInput={<Form.Control type="text" size="md" />}
          />
        </div>
        <div className="d-flex flex-column">
          <Form.Label>
            <strong>How many nights?</strong>
          </Form.Label>
          <Form.Select>
            <option value="1">1 night</option>
            <option value="2">2 nights</option>
            <option value="3">3 nights</option>
            <option value="4">4 Nights</option>
            <option value="5">5 Nights</option>
            <option value="6">6 Nights</option>
            <option value="7">6 Nights</option>
          </Form.Select>
        </div>
        <div className="d-flex flex-column">
          <Form.Label>
            <strong>How many Guests?</strong>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder={`${numberOfGuests} Guest(s)`}
            size="md"
            onClick={toggleGuests}
          />
          {guests && <Guests addGuest={addGuest} removeGuest={removeGuest} />}
        </div>

        <div className="d-flex flex-column justify-content-center">
          <div className="search-button d-flex justify-content-center align-items-center">
            Search!
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
