import React, {useState} from 'react'

function AddItemForm({onNewItem}) {
    const [itemName, setItemName] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!itemName) return

        const newItem = {
            id: Math.random(),
            name: itemName
        }

        onNewItem(newItem)
        setItemName('')

        fetch('http://localhost:3000/api/items', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: itemName})
        })
        .then(respons => Response.json())
        .then(data => {
           onNewItem(data)
           setItemName('') 
        })
        .catch(error => console.error('Error adding item:', error))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Enter item name"
            />
            <button type="submit">Add Item</button>
        </form>
    )
}

export default AddItemForm