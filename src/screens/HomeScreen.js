import React from 'react'
import { Container } from 'react-bootstrap'
import { products_0 } from '../products'
import Slideshow from '../components/Slideshow'

const HomeScreen = () => {
  return (
    <>
      <Container fluid>
        <h1 className='text-header'>Welcome to Bintus Stores</h1>
        <Slideshow products_0={products_0} />
        <h2 className='text-header2'>Categories</h2>
      </Container>
    </>
  )
}

export default HomeScreen
