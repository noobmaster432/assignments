import { useState, useMemo } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        // Add more items as needed
    ]);
    const [item, setItem] = useState('');
    const [itemVal, setItemVal] = useState(0);

    const addItem = () => {
        setItems([...items, { name: item, value: Number(itemVal) }]);
        setItem('');
        setItemVal(0);
    }

    // Your code starts here
    const totalValue = useMemo(() => {
        return items.reduce((acc, item) => acc + item.value, 0);
    }, [items]);

    return (
        <div>
            <div>
                <input type="text" value={item} onChange={e => setItem(e.target.value)} /><br/><br/>
                <input type="number" value={itemVal} onChange={e => setItemVal(e.target.value)} /><br/><br/>
                <button onClick={addItem}>Add Item</button>
            </div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
        </div>
    );
};
