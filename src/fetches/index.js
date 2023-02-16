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
  const fetchURL = 'http://localhost:3001/accommodation/'

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
  const fetchURL = 'http://localhost:3001/accommodation?featured=true'

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

  const fetchURL = 'http://localhost:3001/users/login'

  try {
    let response = await fetch(fetchURL, options)

    if (response.ok) {
      const data = await response.json()
      localStorage.setItem('accessToken', data.accessToken)
      console.log(localStorage.getItem('accessToken'))
      window.location = '/'
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
  const fetchURL = `http://localhost:3001/accommodation/${id}`

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
  const fetchURL = `http://localhost:3001/accommodation?location=${location}`

  try {
    let response = await fetch(fetchURL, options)
    if (response.ok) {
      const data = await response.json()
      return data
    }
  } catch (error) {}
}
