import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close'

function Header() {
    const [burgerNav, setBurgerNav] = useState(false);
    return (
        <Container>

            <Logo>
                <div>
                    <img src="https://i.ibb.co/5xxkGJC/logo.png" alt="logo" border="0" />
                </div>
            </Logo>
                
            <NavBar>
                {/* css for the div "nav" is in index.css */}
                <div className="nav">
                    <div>
                        {/* eslint-disable-next-line  */}
                        <li><a href="#">Home</a></li>
                    </div>
                    <div>
                        {/* eslint-disable-next-line  */}
                        <li><a href="#">Babies</a></li>
                    </div>
                    <div>
                        {/* eslint-disable-next-line  */}
                        <li><a href="#">Kids</a></li>
                    </div>
                    <div>
                        {/* eslint-disable-next-line  */}
                        <li><a href="#">Teenagers</a></li>
                    </div>
                </div>
            </NavBar>

            <Account>
                <div>
                    {/* eslint-disable-next-line  */}
                    <li><a href="#">Your Cart</a></li>
                </div>
                <div>
                    {/* eslint-disable-next-line  */}
                    <li><a href="#">Your Account</a></li>
                </div>
                <HamburgerIconContainer onClick={ () => setBurgerNav(true) }>
                    <MenuIcon />
                </HamburgerIconContainer>


                <Burger status={ burgerNav }>
                    <CloseContainer onClick={ () => setBurgerNav(false) }>
                        <Close />
                    </CloseContainer>
                    {/* eslint-disable-next-line  */}
                    <li><a href="#">Babies</a></li>
                    {/* eslint-disable-next-line  */}
                    <li><a href="#">Kids</a></li>
                    {/* eslint-disable-next-line  */}
                    <li><a href="#">Teenagers</a></li>
                    {/* eslint-disable-next-line  */}
                    <li><a href="#">Your Cart</a></li>
                    {/* eslint-disable-next-line  */}
                    <li><a href="#">Your Account</a></li>
                    {/* eslint-disable-next-line  */}
                    <li><a href="#">Settings</a></li>
                    {/* eslint-disable-next-line  */}
                    <li><a href="#">Log In/Sign up</a></li>
                </Burger>
            </Account>
                
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 50px;
    margin: 0 20px;
    position: fixed;
    left: 0;
    right: 0;
`
const Logo = styled.div`
    display: flex;
    img {
        height: 100px;
    }
    margin-left: 10px;
`
const NavBar = styled.div`
    display: flex;
    div {
        padding: 0 50px;
    }
    color: #282c45;
    margin-left: 110px;
`

const Account = styled.div`
    display: flex;
    li {
        padding: 0 10px;
    }
`

const HamburgerIconContainer = styled(MenuIcon)`
    cursor: pointer;
    margin-left: 30px;
`
const Burger = styled.div `
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    transform: ${ props => props.status ? 'translateX(0)' : 'translateX(100%)' };
    transition: transform 0.2s ease-in;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        margin: 0 10px;
    }
    a {
        font-weight: bold;
    }
    background-color: white;
`
const CloseContainer = styled.div `
    display: flex;
`
const Close = styled(CloseIcon) `
    cursor: pointer;
`
