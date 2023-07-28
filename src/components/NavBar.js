import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { LinkContainer } from 'react-router-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas'

import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      {/* <Navbar bg='light' expand='false' collapseOnSelect>
        <Container className='navContainer'>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img
                className='img-responsive img-fit'
                src='logo bsss.jpg'
                width='250'
                height='200'
                alt='Bintus Store'
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='custom-navbar'>
              <Nav.Link href='/profile'>
                <i className='fa-solid fa-user px-3'></i>
              </Nav.Link>
              <Nav.Link href='/cart'>
                <i className='fa-sharp fa-solid fa-cart-shopping px-3'></i>
              </Nav.Link>
              <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <Navbar expand='false' bg='light'>
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
                Bintus Stores
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <LinkContainer to='/'>
                  <Nav.Link className='nav-link'>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/categories'>
                  <Nav.Link className='nav-link'>Shop Now!</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/size-chart'>
                  <Nav.Link className='nav-link'>Size Chart</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/faq'>
                  <Nav.Link className='nav-link'>FAQ</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/about'>
                  <Nav.Link className='nav-link'>About Bintus Stores</Nav.Link>
                </LinkContainer>
                <NavDropdown
                  title='Dropdown'
                  id={`offcanvasNavbarDropdown-expand-$'false`}>
                  <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
                  <NavDropdown.Item href='#action4'>
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action5'>
                    Something else here
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
                alt='Bintus Store'
              />
            </Navbar.Brand>
          </LinkContainer>
          <Nav>
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
