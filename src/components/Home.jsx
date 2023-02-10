import NavBar from './NavBar'
import Search from './Search'
import { useEffect, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  useLayoutEffect(() => {
    if (localStorage.getItem('accessToken') === null) {
      navigate('/login')
    }
  }, [])
  return (
    <>
      <NavBar />
      <Search />
    </>
  )
}

export default Home
