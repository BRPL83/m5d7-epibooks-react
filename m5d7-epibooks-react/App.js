import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import MyNavBar from './Components/MyNavBar'
import Footer from './Components/Footer'
import Welcome from './Components/Welcome'
import AllTheBooks from './Components/AllTheBooks';
//import AllTheBooks from "./Componentes/AllTheBooks"
import { Container } from 'react-bootstrap'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './Components/NotFound'
import BookDetails from './Components/BookDetails'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const appStyle = {
    backgroundColor: '#f2f2f2',
    minHeight: '100vh',
  };


  return (
    <BrowserRouter>
      <div style={appStyle}>
      <MyNavBar searchQuery={searchQuery} setSearchQuery={handleSearch} />
      <Container>
        <Welcome />
        <Routes>
          <Route path="/" element={<AllTheBooks searchQuery={searchQuery} />} />
          <Route path="/details/:asin" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
