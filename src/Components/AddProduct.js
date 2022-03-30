import React from 'react';
import styled from 'styled-components';

const AddBtn = styled.button`
    width: 200px;
    height: 45px;
    background-color: #299B01;
    border: transparent;
    color: white;
    margin-left: 150px;
    margin-top: 150px;
`;

export const AddProduct = () => (
    <AddBtn>
        Добавить
    </AddBtn>
)