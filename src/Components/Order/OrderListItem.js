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
    flex-wrap: wrap;
`
const AddText = styled.div`
    color: #9a9a9a;
    font-size: 14px;
    width: 100%;
`

export const OrderListItem = ({ order, index, deleteItem, setOpenItem }) => {

const topping = order.topping.filter(item => item.checked)
    .map(item => item.name)
    .join(', ');

return (
    <OrderItemStyled onClick={(e) => {
       if(!e.target.closest('button')) {
           setOpenItem({...order, index})
       }
    }}>
        <ItemName>{order.name} {order.choice}</ItemName>
        <span>{order.count}</span>
        <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
        <RubbishBtn onClick={() => deleteItem(index)}/>
        {topping && <AddText>Допы: {topping}</AddText>}
    </OrderItemStyled>
)}