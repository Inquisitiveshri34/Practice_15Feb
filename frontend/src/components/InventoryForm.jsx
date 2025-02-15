// src/components/InventoryForm.jsx
import React,{useState} from 'react';
import axios from 'axios';
import '../styles/App.css';

function InventoryForm() {
    const [item,setItem] = useState({
        name : "",
        desc : "",
        quantity : 0,
        price: 0
    })

    const itemChange = (e) => {
        setItem({...item, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/items/add', item);
            console.log('Item added:', response.data);
            alert("Item added")
            setItem({
                name : "",
                desc : "",
                quantity : 0,
                price: 0
            })
            } catch (error) {
            console.error('There was an error adding the item!', error);
            }
    };


    return (
        <>
            {/* Inventory form */}
            <form onSubmit={handleSubmit}>
                <input value={item.name} className="border rounded-md p-2 outline-none m-1.5 " type="text" placeholder="Name" name="name" required onChange={(e)=>itemChange(e)}/>
                <input value={item.desc} className="border rounded-md p-2 outline-none m-1.5 " type="text" placeholder="Description" name="desc" onChange={(e)=>itemChange(e)}/>
                <input value={item.quantity} className="border rounded-md p-2 outline-none m-1.5 " type="number" placeholder="Quantity" name="quantity" min="0" required onChange={(e)=>itemChange(e)}/>
                <input value={item.price} className="border rounded-md p-2 outline-none m-1.5 " type="number" placeholder="Price" name="price" min="0" required onChange={(e)=>itemChange(e)}/>
                <button className="border bg-zinc-900 text-white rounded-lg m-1.5 p-2.5" type="submit">Add Item</button>
            </form>
        </>
    );
}

export default InventoryForm;
