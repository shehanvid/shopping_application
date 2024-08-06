import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar({ handleLogout }) {
    return (
        <nav>
            <ul>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/checkout">Checkout</Link></li>
                <li><Link to="/additem">Add Items</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
        </nav>
    );
}

export default NavBar;