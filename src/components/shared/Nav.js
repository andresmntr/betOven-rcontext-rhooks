import React, { useContext} from 'react';
import styled from '@emotion/styled';
import {signOut} from '../../services/auth';
import {AuthContext} from './Auth';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #C7D5EA;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-family: system-ui;
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D141B;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.2rem;
      text-align: center;
    }

    &:hover {
      color: hotpink;
    }
  }
`

export const Menu = ({ open }) => {
    const {setCurrentUser} = useContext(AuthContext);
    const logout = async () => {
        await signOut();
        setCurrentUser(null);
    };
  return (
    <StyledMenu open={open}>
        <a href="/">
            <span role="img" aria-label="cambiar contraseña"></span>
            New Password
        </a>
        <a href="/">
            <span role="img" aria-label="price"></span>
            Access SubUser
        </a>
        <a href="/">
            <span role="img" aria-label="price"></span>
            Create SubUser
        </a>
        <a href="/">
            <span role="img" aria-label="price"></span>
            Transactions
        </a>
        <a href="/">
            <span role="img" aria-label="price"></span>
            Transfer Points
        </a>
        <a onClick={logout} href="/">
            <span role="img" aria-label="contact"></span>
            Logout
        </a>
    </StyledMenu>
  )
}

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#0D141B' : '#C7D5EA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    @media (max-width: 576px){
        background: ${({ open }) => open ? '#0D141B' : '#C7D5EA'};
    }

    :first-of-type {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-of-type(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-of-type(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

export const Burger = ({ open, setOpen }) => {
    return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
    </StyledBurger>
  )
}


export const Nav = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  )  
}