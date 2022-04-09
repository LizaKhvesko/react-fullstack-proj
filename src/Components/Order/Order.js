import React from 'react';
import styled from 'styled-components';
import { AddBtn } from '../Style/AddProduct';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems }  from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';

const OrderStyled = styled.section`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 80px;
    left: 0;
    background: #fff;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0,0,0,0.25);
    padding: 20px;
`;

const OrderTitle = styled.h2`
    text-align: center;
    margin-bottom: 30px;
`

const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul`

`;

const Total = styled.div`
    display: flex;
    margin: 0 35px 30px;
    & span:first-child{
        flex-grow: 1;
    }
`;

const TotalPrice = styled.span`
   text-align: right;
   min-width: 65px;
   margin-left: 20px;
`;

const EmptyList = styled.p`
    text-align: center;
`

export const Order = ({ orders, setOrders, setOpenItem, authentication, logIn }) => {

    const deleteItem = index => {
        const newOrders = [...orders];
        newOrders.splice(index,1);
        setOrders(newOrders)
    }

    const total = orders.reduce((res, order) => 
        totalPriceItems(order) + res, 0)

    const totalCounter = orders.reduce((res, order) => 
        order.count + res, 0)

    return (
        <OrderStyled>
            <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
            <OrderContent>
               {orders.length ?
                <OrderList>
                   {orders.map((order, index) => <OrderListItem 
                            key={index}
                            order={order}
                            deleteItem={deleteItem}
                            index={index}
                            setOpenItem={setOpenItem}></OrderListItem>)}
                </OrderList> : 
                <EmptyList>Список заказов пуст </EmptyList>}
            </OrderContent>
            <Total>
                <span>Итого</span>
                <span>{totalCounter}</span>
                <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </Total>
            <AddBtn onClick={authentication ? console.log(orders) : logIn}>Оформить</AddBtn>
        </OrderStyled>
    )
}