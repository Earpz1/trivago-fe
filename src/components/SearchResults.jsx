import { Container } from 'react-bootstrap'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { searchAccommodations } from '../fetches'
import SearchResultCard from './SearchResultCard'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SearchResults = () => {
  const params = useLocation()
  const searchParams = new URLSearchParams(params.search)
  const location = searchParams.get('location')

  const { data, isLoading } = useQuery(
    ['searchResults', location],
    ({ queryKey }) => searchAccommodations(queryKey[1]),
    { refetchOnWindowFocus: false },
  )

  return (
    <>
      <NavBar />
      <Container fluid className="w-50 mt-5">
        {!isLoading &&
          data.map((result, index) => (
            <SearchResultCard key={index} result={result} />
          ))}
      </Container>
    </>
  )
}

export default SearchResults
