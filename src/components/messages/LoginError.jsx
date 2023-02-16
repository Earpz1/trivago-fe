import { Alert } from 'react-bootstrap'

const LoginError = () => {
  return (
    <Alert variant="danger">
      <Alert.Heading>Your Login details were incorrect</Alert.Heading>
      <p>Please check your details and try again</p>
    </Alert>
  )
}

export default LoginError
