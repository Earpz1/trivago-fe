import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import Login from './components/Login'
import MyAccommodation from './components/MyAccommodation'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PropertyDetails from './components/PropertyDetails'

function App() {
  const client = new QueryClient()
  return (
    <>
      <QueryClientProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/accommodation/:id" element={<PropertyDetails />} />
            <Route path="/myAccommodation" element={<MyAccommodation />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  )
}

export default App
