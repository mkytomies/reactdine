import { useCallback, useEffect, useState } from "react";
import MenuItem from "../components/MenuItem.jsx";

import 'typeface-notable';

import './Menu.css'

const Menu = () => {
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

    let content = <div></div>;

    if(menuItems && menuItems.length > 0) {
        content = <MenuItem menuItems={menuItems} />
    }

    return(
        <>
            {content}
        </>
    )
}

export default Menu;