import React from 'react';
import styled from 'styled-components';
import { AddBtn } from './AddProduct';

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 1200;
`;

const Modal = styled.div`
    background-color: #fff;
    width: 500px;
    height: 500px;
`;

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-position: center;
`
const Content = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 200px);
    padding: 30px;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ModalItem = ({ openItem, setOpenItem }) => {
    function closeModal(e) {
        if(e.target.id === 'overlay') {
           setOpenItem(null);
        }
    }
    
    if(!openItem) return null;
    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}/>
                <Content>
                <Header>
                <h2>{openItem.name}</h2>
                <h2>{openItem.price.toLocaleString('ru-RU',
                {style: 'currency', currency: 'RUB'})}</h2>
                </Header>
                <AddBtn>Добавить</AddBtn>
                </Content>
            </Modal>
        </Overlay>
)
}