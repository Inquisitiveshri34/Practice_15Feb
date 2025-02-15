import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navbar">
            <h1>Inventory Management</h1>
            <ul className="nav-links">
                <li><Link to="/items">Inventory List</Link></li>
                <li><Link to="/items/add">Add Item</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
