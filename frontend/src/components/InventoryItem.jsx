import React from 'react'
import '../styles/App.css';

const InventoryItem = ({item}) => {
  return (
    <div className='border p-3 w-50 h-25'>
        <p>Name: {item.name}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Price: {item.price}</p>
    </div>
  )
}

export default InventoryItem