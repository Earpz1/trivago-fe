import { Form, Button, Navbar, Container } from 'react-bootstrap'
import { userLogin } from '../fetches'
import LoginError from '../components/messages/LoginError.jsx'
import { useNavigate, useLocation } from 'react-router-dom'
import { BiBed } from 'react-icons/bi'
import { useState } from 'react'

const Login = () => {
  const params = useLocation()
  const searchParams = new URLSearchParams(params.search)
  const redirectLocation = searchParams.get('redirect')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const changePassword = (event) => {
    setPassword(event.target.value)
  }

  const changeEmail = (event) => {
    setEmail(event.target.value)
  }

  const navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault()

    const login = await userLogin(email, password)
    if (login === 401) {
      setError(true)
    }

    if (login === 'success' && redirectLocation !== null) {
      navigate(`/${redirectLocation}`)
    } else {
      navigate('/')
    }
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="d-flex align-items-center">
            <BiBed className="logo" />
            <span className="logo-text">Strivago</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className=" login d-flex justify-content-center align-items-center">
        <div className="login-container justify-content-center px-5 py-2">
          <Form className="mt-4">
            {error && <LoginError />}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => changeEmail(event)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => changePassword(event)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={(event) => handleLogin(event)}
            >
              Login
            </Button>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Login
