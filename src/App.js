import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import CategoryScreen from './screens/CategoryScreen'
import CatalogScreen from './screens/CatalogScreen'
import FootwearScreen from './screens/FootwearScreen'

const App = () => {
  return (
    <>
      <Header />
      <NavBar />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/catalog' element={<CatalogScreen />} exact />
            {/* <Route path='/categories/:id' element={<CategoryItems />} /> */}
            <Route path='/categoryItem/:id' element={<CategoryScreen />} />
            <Route path='/categoryItem/footwear' element={<FootwearScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
