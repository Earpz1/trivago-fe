import { Alert } from 'react-bootstrap'

const NoResults = () => {
  return (
    <Alert variant="danger">
      <Alert.Heading>
        Based on your search, we weren't able to find any properties. Please try
        again.
      </Alert.Heading>
    </Alert>
  )
}

export default NoResults
