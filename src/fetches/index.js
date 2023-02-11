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
      return response
    }
  } catch (error) {}
}

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
      console.log(localStorage.getItem('accessToken'))
      window.location = '/'
    }
  } catch (error) {
    console.log(error)
  }
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
