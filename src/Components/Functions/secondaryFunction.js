export const totalPriceItems = order => {
    const countTopping = order.topping && order.topping.filter(item => item.checked).length
    const priceToppings = order.price * 0.1 * countTopping;
    return (order.price + priceToppings) * order.count;
}

export const formatCurrency = money => money.toLocaleString('ru-RU',
    {style: 'currency', currency: 'RUB'});