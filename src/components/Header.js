import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Container>
        <Row>
          <Col className='text-center py-3 header'>
            Spend N40,000 and get 10% off automatically at checkout!
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header
