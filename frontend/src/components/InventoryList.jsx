// src/components/InventoryList.jsx
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import InventoryItem from './InventoryItem';
import '../styles/App.css';

function InventoryList() {
  const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/items')
          .then(response => {
            setItems(response.data);
             
          })
          .catch(error => {
            console.error("There was an error fetching the data!", error);
          });
      }, []);
    return(
        <>
            {/* Inventory list */}
            <div>
                <ul>
                  <li className=' flex flex-wrap gap-2'>
                  {items.map(item => (
                    <>
                    <InventoryItem key={item._id} item={item}/>
                    </>
                  ))}
                  </li>
                </ul>
            </div>
        </>
    );
}

export default InventoryList;
