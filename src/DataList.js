import React, {useState, useEffect} from 'react'
import AddItemForm from './AddItemForm'

function DataList() {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/items')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching data:', error))
    }, [])

    const handleNewItem = (newItem) => {
        setItems(prevItems => [...prevItems, newItem])
    }

    return(
        <div>
            <h1>Data List</h1>
            <AddItemForm onNewItem={handleNewItem} />
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default DataList

