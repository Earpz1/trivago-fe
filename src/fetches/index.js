//After loggin in, get user details from the token
export const getUserDetails = async () => {
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    },
  }

  const fetchURL = 'https://taboo-quiet-production.up.railway.app/users/me'

  try {
    let response = await fetch(fetchURL, options)
    if (response.ok) {
      let data = await response.json()
      return data
    }
  } catch (error) {}
}

//After logging in, get all the accommodations that the user has listed (Hosts only)
export const getUserAccommodation = async () => {
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    },
  }

  const fetchURL =
    'https://taboo-quiet-production.up.railway.app/users/me/accommodations'

  try {
    let response = await fetch(fetchURL, options)
    if (response.ok) {
      const data = await response.json()
      return data
    }
  } catch (error) {}
}

//Show all the accommodations
export const getAccommodations = async () => {
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    },
  }
  const fetchURL =
    'https://taboo-quiet-production.up.railway.app/accommodation/'

  try {
    let response = await fetch(fetchURL, options)
    if (response.ok) {
      const data = await response.json()
      return data
    }
  } catch (error) {}
}

export const getFeaturedAccommodations = async () => {
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    },
  }
  const fetchURL =
    'https://taboo-quiet-production.up.railway.app/accommodation?featured=true'

  try {
    let response = await fetch(fetchURL, options)
    if (response.ok) {
      const data = await response.json()
      return data
    }
  } catch (error) {}
}

export const userLogin = async (email, password) => {
  const enteredDetails = {
    email: email,
    password: password,
  }

  const options = {
    method: 'POST',
    body: JSON.stringify(enteredDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const fetchURL = 'https://taboo-quiet-production.up.railway.app/users/login'

  try {
    let response = await fetch(fetchURL, options)

    if (response.ok) {
      const data = await response.json()
      localStorage.setItem('accessToken', data.accessToken)
      return 'success'
    } else {
      return response.status
    }
  } catch (error) {}
}

export const getAccommodationDetails = async (id) => {
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    },
  }
  const fetchURL = `https://taboo-quiet-production.up.railway.app/accommodation/${id}`

  try {
    let response = await fetch(fetchURL, options)

    if (response.ok) {
      let data = await response.json()
      return data
    }
  } catch (error) {
    console.log(error)
  }
}

//Return search results by location
export const searchAccommodations = async (location) => {
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    },
  }
  const fetchURL = `https://taboo-quiet-production.up.railway.app/accommodation?location=${location}`

  try {
    let response = await fetch(fetchURL, options)
    if (response.ok) {
      const data = await response.json()
      return data
    }
  } catch (error) {}
}

//Create a booking that reserves the requested dates but is not yet confirmed
export const createBooking = async (bookingInformation) => {
  const bookingDetails = {
    hostID: bookingInformation.host._id,
    accommodationID: bookingInformation.accommodationID,
    dateFrom: bookingInformation.dateFrom,
    duration: bookingInformation.duration,
    guests: bookingInformation.guests,
    price: '150',
  }

  const options = {
    method: 'POST',
    body: JSON.stringify(bookingDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const fetchURL = 'https://taboo-quiet-production.up.railway.app/bookings'
  try {
    let response = await fetch(fetchURL, options)

    if (response.ok) {
      const data = await response.json()
      return data._id
    } else {
      console.log('Error making booking')
    }
  } catch (error) {}
}

//Return a specific booking by ID
export const getBooking = async (bookingID) => {
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    },
  }
  const fetchURL = `https://taboo-quiet-production.up.railway.app/bookings/${bookingID}`

  try {
    let response = await fetch(fetchURL, options)
    if (response.ok) {
      const data = await response.json()
      return data
    }
  } catch (error) {}
}

//Update the booking when the booking has been confirmed
export const updateBooking = async (bookingID) => {
  const bookingDetails = {
    guestID: '63e63c4aab4ae4d46b323925',
    confirmed: true,
  }

  const options = {
    method: 'PUT',
    body: JSON.stringify(bookingDetails),

    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    },
  }
  const fetchURL = `https://taboo-quiet-production.up.railway.app/bookings/${bookingID}`

  try {
    let response = await fetch(fetchURL, options)
    if (response.ok) {
      const data = await response.json()
    }
  } catch (error) {
    console.log(error)
  }
}
