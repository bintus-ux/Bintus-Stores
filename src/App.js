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
import KnitwearScreen from './screens/KnitwearScreen'
import HoodiesScreen from './screens/HoodiesScreen'
import CapScreen from './screens/CapScreen'

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
            <Route
              path='/categoryItem/footwears'
              element={<FootwearScreen />}
            />
            <Route
              path='/categoryItem/knitwears'
              element={<KnitwearScreen />}
            />
            <Route path='/categoryItem/hoodies' element={<HoodiesScreen />} />
            <Route path='/categoryItem/caps' element={<CapScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
