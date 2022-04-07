import { useState } from 'react';

const getToping = toppings => toppings.map(item =>
    ({
        name: item,
        checked: false,
    }))

export function useTopping(openItem) {
    const readyTopping = openItem.topping ? openItem.topping : 
        openItem.toppings ? getToping(openItem.toppings) : [];
    const [toppings, setToppings] = useState(readyTopping);
   
        const checkToppings = index => {
            setToppings(toppings.map((item, i) => {
                if (i === index) {
                    item.checked = !item.checked
                }
                return item;
            }))
        }
        return { toppings, checkToppings };
}