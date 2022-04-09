import React from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import userImg from '../../image/user1.svg';


const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100%;
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

const UserIn = styled.div`
    display: flex;
    vertical-align: center;
    text-align: center;
`
const ImgUser = styled.img`
    width: 32px;
`;
const LoginBtn = styled.button`
    width: 60px;
    height: 19px;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    border: none;
    background: none;
`

const LogOut = styled.span`
    display: inline-block;
    font-size: 20px;
    font-weight: 700px;
    cursor: pointer;
    border: 1px solid white;
    padding: 3px;
    margin-top: 5px;
`

export const NavBar = ({ authentication, logIn, logOut }) => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt='logo' />
            <H1>MrDonald's</H1>
        </Logo>
       { authentication ? 
       <UserIn>
           <figure>
               <figcaption>{authentication.displayName}</figcaption> 
                <LogOut title="Выйти" onClick={logOut}>Х</LogOut>
           </figure>
          
       </UserIn>
       : <User onClick={logIn}>
            <ImgUser src={userImg} alt='user' /> 
            <LoginBtn>Войти</LoginBtn>
        </User>}
    </NavBarStyled>
)