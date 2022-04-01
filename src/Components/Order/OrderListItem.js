import React from 'react';
import styled from 'styled-components';
import rubbish from '../../image/rubbish.svg';

const RubbishBtn = styled.button`
    width: 24px;
    height: 24px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${rubbish});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
`

const ItemName = styled.span`
    flex-grow: 1;
`;

const ItemPrice = styled.span`
    margin-left: 20px;
    margin-right: 10px;
    min-width: 65px;
    text-align: right;
`;

const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
`

export const OrderListItem = ({ order }) => (
    <OrderItemStyled>
        <ItemName>{order.name}</ItemName>
        <span>2</span>
        <ItemPrice>{order.price.toLocaleString('ru-RU',
                {style: 'currency', currency: 'RUB'})}</ItemPrice>
        <RubbishBtn />
    </OrderItemStyled>
)