export const totalPriceItems = order => order.price * order.count;

export const formatCurrency = money => money.toLocaleString('ru-RU',
               {style: 'currency', currency: 'RUB'});