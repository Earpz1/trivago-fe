import {
  Container,
  Navbar,
  DropdownButton,
  Dropdown,
  Button,
} from 'react-bootstrap'
import { BiBed } from 'react-icons/bi'
import jwtDecode from 'jwt-decode'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUserDetails } from '../fetches'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState(false)

  const { data } = useQuery(['userDetails'], getUserDetails, {
    enabled: loggedIn,
  })

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      setLoggedIn(true)
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('accessToken')
    navigate('/login')
  }
  if (localStorage.getItem('accessToken') && data) {
    const accessToken = localStorage.getItem('accessToken')
    const payload = jwtDecode(accessToken)
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="d-flex align-items-center">
            <a href="/">
              <BiBed className="logo" />
            </a>
            <span className="logo-text">Strivago</span>
            <span className="logo-text"></span>
          </Navbar.Brand>

          <DropdownButton title={data.name}>
            {payload.role === 'host' && (
              <Dropdown.Item href="/myAccommodation">
                My Accommodations
              </Dropdown.Item>
            )}
            <Dropdown.Item>My Bookings</Dropdown.Item>
            <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
          </DropdownButton>
        </Container>
      </Navbar>
    )
  } else {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="d-flex align-items-center">
            <a href="/">
              <BiBed className="logo" />
            </a>
            <span className="logo-text">Strivago</span>
            <span className="logo-text"></span>
          </Navbar.Brand>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </Container>
      </Navbar>
    )
  }
}

export default NavBar
