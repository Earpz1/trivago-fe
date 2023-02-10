export const getUserDetails = async () => {
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    },
  }

  const fetchURL = 'http://localhost:3001/users/me'

  try {
    let response = await fetch(fetchURL, options)
    if (response.ok) {
      const data = await response.json()
      return data
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

  const fetchURL = 'http://localhost:3001/users/me/accommodations'

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
  const fetchURL = 'http://localhost:3001/accommodation/'

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
    }
  } catch (error) {
    console.log(error)
  }
}
