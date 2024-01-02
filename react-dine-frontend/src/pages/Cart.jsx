import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '../components/MenuItem.jsx';

import './Cart.css'
import buttonStyles from '../components/Button.module.css'

import 'typeface-notable';

const Cart = () => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : {};
    });
    const [menuItems, setMenuItems] = useState([]);

    const fetchMenuItems = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:5000/api/dishes');
            if(!response.ok) {
                throw new Error('Something went wrong!');
            }
            const json = await response.json();
            setMenuItems(json);
        } catch(error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        fetchMenuItems();
    }, [fetchMenuItems]);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const filteredMenuItems = menuItems.filter((menuItem) => {
        return Object.keys(cart).includes(menuItem.id.toString());
    });

    let content = <p></p>;
    let button = <Link></Link>

    if(Object.keys(cart).length != 0) {
        content = <MenuItem menuItems={filteredMenuItems} />;
        button= <Link to={'/checkout'} className={buttonStyles.button} style={{ fontFamily: 'Notable, sans-serif' }}>Checkout</Link>;
        
    } else if(Object.keys(cart).length === 0) {
        content = <p className='empty' style={{ fontFamily: 'Notable, sans-serif' }}>Your cart is empty</p>
        button= <Link to={'/menu'} className={buttonStyles.button} style={{ fontFamily: 'Notable, sans-serif' }}>Back to Menu</Link>;
    }

    return(
        <>
        <div className='mainDiv'>
            <div className='cartItemDiv'>
                {content}
                <div className='checkoutButton'>
                    {button}
                </div>
            </div>
        </div>
        </>
    )
}

export default Cart;