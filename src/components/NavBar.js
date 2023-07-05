import React from 'react'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar bg='light' expand='lg' collapseOnSelect>
        <Container className='navContainer'>
          <Navbar.Brand href='/'>
            <img
              className='px-1 py-4 mx-2'
              src='logo bsss.jpg'
              width='250'
              height='200'
              alt='Bintus Store'
            />
          </Navbar.Brand>
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
      </Navbar>
    </>
  )
}

export default Header
