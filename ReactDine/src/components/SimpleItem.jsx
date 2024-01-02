import { useCallback, useEffect, useState } from "react";

import './SimpleItem.css'

const SimpleItem = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : {};
    });

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

    const filteredMenuItems = menuItems.filter((menuItem) => {
        return Object.keys(cart).includes(menuItem.id.toString());
    });

    return(
        <>
            <div className="items" >
                {filteredMenuItems.map((item) => (
                    <div key={item.id} className="item">
                        <div className="item-img">
                        <img src={`http://localhost:5000/${item.image}`} alt={item.name} />
                        </div>
                        <div className="item-text" style={{ fontFamily: 'Notable, sans-serif' }}>
                            <h3>{item.name}</h3>
                            <p>{cart[item.id]}x</p>
                            <p className="price">{item.price + '€'}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SimpleItem;