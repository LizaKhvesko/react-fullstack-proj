import React from 'react';
import styled from 'styled-components';
import { AddBtn } from '../Style/AddProduct';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems }  from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { projection } from '../Functions/secondaryFunction';
import { ref, set, push, child } from "firebase/database";

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
const rulesData = {
    name: ['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping',arr => arr.filter(obj => obj.checked).map(obj => obj.name),
            arr => arr.length ? arr : 'no toppings'],
    choice: ['choice', item => item ? item : 'no choices'],
}

export const Order = ({ orders, setOrders, setOpenItem, authentication, logIn, firebaseDatabase }) => {

    const sendOrder = () =>  {
        const newOrder = orders.map(projection(rulesData));
        const newOrderKey = push(child(ref(firebaseDatabase), "orders")).key;

        set(ref(firebaseDatabase, "orders/" + newOrderKey), {
            nameClient: authentication.displayName,
            email: authentication.email,
            order: newOrder,
        });
    }

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
            <OrderTitle>?????? ??????????</OrderTitle>
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
                <EmptyList>???????????? ?????????????? ???????? </EmptyList>}
            </OrderContent>
            <Total>
                <span>??????????</span>
                <span>{totalCounter}</span>
                <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </Total>
            <AddBtn onClick={authentication ? sendOrder() : logIn}>????????????????</AddBtn>
        </OrderStyled>
    )
}