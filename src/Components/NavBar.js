import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import userImg from '../image/user1.svg';


const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const User = styled.div`
    width: 70px;
    height: 54px;
    text-align: center;
`
const ImgUser = styled.img`
    width: 32px;
`;
const LoginBtn = styled.button`
    cursor: pointer;
    width: 60px;
    height: 19px;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    border: none;
    background: none;
`

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt='logo' />
            <H1>MrDonald's</H1>
        </Logo>
        <User>
            <ImgUser src={userImg} alt='user' /> 
            <LoginBtn>Войти</LoginBtn>
        </User>
    </NavBarStyled>
)