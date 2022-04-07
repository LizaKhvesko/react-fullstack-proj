import { useState } from 'react';

export function useCount(openItem) {
    const number = openItem.count > 1 ? openItem.count : 1;

    const [count, setCount] = useState(number);
    
    const onChange = e => setCount(e.target.value);

    return { count, setCount, onChange };
}