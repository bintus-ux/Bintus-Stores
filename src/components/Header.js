import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Typewriter from './Typewriter'

const Header = () => {
  return (
    <header>
      <Container>
        <Row>
          <Col className='text-center py-3 header'>
            <i className='fa-solid fa-siren'></i>
            <Typewriter
              text='Spend N40,000 and get 10% off automatically at checkout!'
              delay={90}
              infinite
            />
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header
