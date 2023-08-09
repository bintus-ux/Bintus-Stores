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
import SetsScreen from './screens/SetsScreen'
import ItemScreen from './screens/ItemScreen'
import HoodieItemScreen from './screens/item screens/HoodieItemScreen'
import CapItemScreen from './screens/item screens/CapItemScreen'
import KnitwearItemScreen from './screens/item screens/KnitwearItemScreen'
import FootwearItemScreen from './screens/item screens/FootwearItemScreen'
import PantItemScreen from './screens/item screens/PantItemScreen'
import ShortItemScreen from './screens/item screens/ShortItemScreen'
import SetItemScreen from './screens/item screens/SetItemScreen'
import TshirtItemScreen from './screens/item screens/TshirtItemScreen'
import NewArrivalItemScreen from './screens/item screens/NewArrivalItemScreen'
import TeeItemScreen from './screens/item screens/TeeItemScreen'

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
              element={<FootwearItemScreen />}
            />
            <Route
              path='/categoryItem/knitwears'
              element={<KnitwearScreen />}
            />
            <Route
              path='/categoryItem/knitwears/:id'
              element={<KnitwearItemScreen />}
            />
            <Route path='/categoryItem/hoodies' element={<HoodiesScreen />} />
            <Route
              path='/categoryItem/hoodies/:id'
              element={<HoodieItemScreen />}
            />
            <Route path='/categoryItem/Caps' element={<CapScreen />} />
            <Route path='/categoryItem/Caps/:id' element={<CapItemScreen />} />
            <Route path='/categoryItem/tees' element={<TeesScreen />} />
            <Route path='/categoryItem/tees/:id' element={<TeeItemScreen />} />
            <Route path='/categoryItem/tshirts' element={<TshirtScreen />} />
            <Route
              path='/categoryItem/tshirts/:id'
              element={<TshirtItemScreen />}
            />
            <Route path='/categoryItem/shorts' element={<ShortScreen />} />
            <Route
              path='/categoryItem/shorts/:id'
              element={<ShortItemScreen />}
            />

            <Route path='/categoryItem/pants' element={<PantsScreen />} />
            <Route
              path='/categoryItem/pants/:id'
              element={<PantItemScreen />}
            />
            <Route path='/categoryItem/sets' element={<SetsScreen />} />
            <Route path='/categoryItem/sets/:id' element={<SetItemScreen />} />
            <Route
              path='/New-Arrivals/:id'
              element={<NewArrivalItemScreen />}
            />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
