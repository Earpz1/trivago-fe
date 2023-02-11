import { Container, Navbar, DropdownButton, Dropdown } from 'react-bootstrap'
import { BiBed } from 'react-icons/bi'
import jwtDecode from 'jwt-decode'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUserDetails } from '../fetches'
import { useQuery } from 'react-query'

const NavBar = () => {
  const navigate = useNavigate()
  const [pageLoaded, setPageLoaded] = useState(false)
  const { data, isLoading } = useQuery(['userDetails'], getUserDetails, {
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) navigate('/login')
    setPageLoaded(true)
  }, [])

  const logout = () => {
    localStorage.removeItem('accessToken')
    navigate('/login')
  }

  if (localStorage.getItem('accessToken')) {
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

          <DropdownButton
            id="dropdown-basic-button"
            title={
              pageLoaded &&
              !isLoading &&
              data.name +
                ' - ' +
                payload.role.charAt(0).toUpperCase() +
                payload.role.slice(1)
            }
          >
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
  }
}

export default NavBar
