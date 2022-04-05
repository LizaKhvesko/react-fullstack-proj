import React from 'react';
import styled from 'styled-components';
import rubbish from '../../image/rubbish.svg';
import { totalPriceItems }  from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';

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
const AddText = styled.div`
    font-size: 10px;  
`

export const OrderListItem = ({ order }) => {

function addText(order) {
    const add = order.topping.filter(item => item.checked);
    const nameTopping = add.map(item => item.name);
    if (nameTopping.length > 0) {
        return `(${nameTopping.join(', ')})`
    } else {
        return '(без добавок)'
    }
}

return (
    <OrderItemStyled>
        <ItemName>{order.name}</ItemName>
        <AddText>{addText(order)}</AddText>
        <span>{order.count}</span>
        <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
        <RubbishBtn />
    </OrderItemStyled>
)}