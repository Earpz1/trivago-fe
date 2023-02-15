import NavBar from './NavBar'
import Featured from './Featured'
import SearchBar from './SearchBar'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('accessToken') === null) {
      navigate('/login')
    }
  }, [])
  return (
    <>
      <NavBar />
      <SearchBar />
      <Featured />
    </>
  )
}

export default Home
