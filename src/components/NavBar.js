import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { LinkContainer } from 'react-router-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas'

import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar expand='false' bg='light' className='px-4'>
        <Container fluid>
          <Navbar.Toggle aria-controls='offcanvasNavbar-expand-false' />
          <Navbar.Offcanvas
            id='offcanvasNavbar-expand-false'
            aria-labelledby='offcanvasNavbarLabel-expand-false'
            placement='start'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id='offcanvasNavbarLabel-expand-false'
                style={{ fontSize: '20px' }}>
                Bintus Store
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <LinkContainer to='/'>
                  <Nav.Link className='nav-link py-2'>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/catalog'>
                  <Nav.Link className='nav-link py-2'>Shop Now!</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/size-chart'>
                  <Nav.Link className='nav-link py-2'>Size Chart</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/faq'>
                  <Nav.Link className='nav-link py-2'>FAQ</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/about'>
                  <Nav.Link className='nav-link py-2'>
                    About Bintus Store
                  </Nav.Link>
                </LinkContainer>
                <NavDropdown
                  title='Account'
                  id={`offcanvasNavbarDropdown-expand-$'false`}>
                  <NavDropdown.Item href='#action3'>Log in</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action4'>
                    Create Account
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className='d-flex'>
                <Form.Control
                  type='search'
                  placeholder='Search'
                  className='me-2'
                  aria-label='Search'
                />
                <Button variant='outline-success'>Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img
                className='img-responsive img-fit'
                src='logo bsss.jpg'
                width='250'
                height='200'
                alt='Bintus Store logo'
              />
            </Navbar.Brand>
          </LinkContainer>
          <Nav className='d-flex flex-row'>
            <Nav.Link href='/profile'>
              <i className='fa-solid fa-user px-3'></i>
            </Nav.Link>
            <Nav.Link href='/cart'>
              <i className='fa-sharp fa-solid fa-cart-shopping px-3'></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
