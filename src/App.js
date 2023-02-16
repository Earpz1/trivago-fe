import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import Home from './components/Home'
import Login from './components/Login'
import MyAccommodation from './components/MyAccommodation'
import ConfirmBooking from './components/ConfirmBooking'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PropertyDetails from './components/PropertyDetails'
import SearchResults from './components/SearchResults'

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
            <Route path="/search" element={<SearchResults />} />
            <Route path="/confirm" element={<ConfirmBooking />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  )
}

export default App
