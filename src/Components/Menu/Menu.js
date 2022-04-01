import React from 'react';
import styled from 'styled-components';
import dbMenu from '../DBMenu';
import { ListItem } from './ListItem';
import BannerImg from '../../image/banner.png'

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 380px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${BannerImg});
    background-position: center;
    background-size: cover;
`

export const Menu = ({ setOpenItem }) => (
    <MenuStyled>
        <Banner></Banner>
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem 
                itemList={dbMenu.burger}
                setOpenItem={setOpenItem}
            />
        </SectionMenu>

        <SectionMenu>
            <h2>Закуски и напитки</h2>
            <ListItem 
                itemList={dbMenu.other}
                setOpenItem={setOpenItem}
            />
        </SectionMenu>
    </MenuStyled>
)

