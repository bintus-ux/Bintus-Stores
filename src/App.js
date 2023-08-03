import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import CatalogScreen from './screens/CatalogScreen'
import FootwearScreen from './screens/FootwearScreen'
import KnitwearScreen from './screens/KnitwearScreen'
import HoodiesScreen from './screens/HoodiesScreen'
import CapScreen from './screens/CapScreen'
import TeesScreen from './screens/TeesScreen'
import TshirtScreen from './screens/TshirtScreen'
import PantsScreen from './screens/PantsScreen'
import ShortScreen from './screens/ShortScreen'
import ItemScreen from './screens/ItemScreen'

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
            <Route
              path='/categoryItem/footwears'
              element={<FootwearScreen />}
            />
            <Route
              path='/categoryItem/footwears/:id'
              element={<ItemScreen />}
            />
            <Route
              path='/categoryItem/knitwears'
              element={<KnitwearScreen />}
            />
            <Route
              path='/categoryItem/knitwears/:id'
              element={<ItemScreen />}
            />
            <Route path='/categoryItem/hoodies' element={<HoodiesScreen />} />
            <Route path='/categoryItem/hoodies/:id' element={<ItemScreen />} />
            <Route path='/categoryItem/Caps' element={<CapScreen />} />
            <Route path='/categoryItem/Caps/:id' element={<ItemScreen />} />
            <Route path='/categoryItem/tees' element={<TeesScreen />} />
            <Route path='/categoryItem/tees/:id' element={<ItemScreen />} />
            <Route path='/categoryItem/tshirts' element={<TshirtScreen />} />
            <Route path='/categoryItem/tshirts/:id' element={<ItemScreen />} />
            <Route path='/categoryItem/shorts' element={<ShortScreen />} />
            <Route path='/categoryItem/pants' element={<PantsScreen />} />
            <Route path='/categoryItem/pants/:id' element={<ItemScreen />} />
            <Route path='/New-Arrivals/:id' element={<ItemScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
