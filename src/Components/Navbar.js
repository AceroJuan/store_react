import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo-home.png'
import { ButtonContainer } from './Button'
import styled from 'styled-components'

export default class Navbar extends Component {
  render() {
    return (
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
          <Link to="/" className="navbar-img">
            <img src={logo} alt="main_logo" className="navbar-brand" />
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/ProductList" className="nav-link">
                products
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              <span className="mr-2">
                <i className="fas fa-cart-plus" />
              </span>
              my cart
            </ButtonContainer>
          </Link>
        </NavWrapper>
    );
  }
} 

const NavWrapper = styled.nav`
  background: var(--mainWhite);
  .nav-link{
    color: var(--mainGrey) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  .navbar-img {
    display: flex;
    justify-content: center;
  }
  .navbar-brand {
    width: 55%;
  }
`