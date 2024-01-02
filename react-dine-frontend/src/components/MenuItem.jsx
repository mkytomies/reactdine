import { useState, useEffect } from "react";

const MenuItem = ({ menuItems }) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : {};
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const minusHandler = (itemId) => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart };
    
            if (updatedCart[itemId] && updatedCart[itemId] > 0) {
                updatedCart[itemId] -= 1;
    
                if (updatedCart[itemId] === 0) {
                    delete updatedCart[itemId];
                }
            }
    
            return updatedCart;
        });
    };

    const plusHandler = (itemId) => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            updatedCart[itemId] = (updatedCart[itemId] || 0) + 1;
            return updatedCart;
        });
    };
    
    const deleteHandler = (itemId) => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart };
    
            if (updatedCart[itemId] && updatedCart[itemId] > 0) {
                    delete updatedCart[itemId];
            }
    
            return updatedCart;
        });
    }

    return(
        <>
            <div className="menu" >
                {menuItems.map((item) => (
                    <div key={item.id} className="menu-item">
                        <div className="menu-img">
                        <img src={`http://localhost:5000/${item.image}`} alt={item.name} />
                        </div>
                        <div className="menu-text">
                            <h3 style={{ fontFamily: 'Notable, sans-serif' }}>{item.name}</h3>
                            <p className="desc">{item.description}</p>
                            <p className="price" style={{ fontFamily: 'Notable, sans-serif' }}>{item.price + '€'}</p>
                            <div className="buttonDiv">
                                <div className="buttons">
                                    <button onClick={() => minusHandler(item.id)} className="minus">-</button>
                                    <p>{cart[item.id] || 0}</p>
                                    <button onClick={() => plusHandler(item.id)} className="plus">+</button>
                                </div>
                                <div className="deleteButton">
                                    <button onClick={() => deleteHandler(item.id)}>🗑️</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MenuItem;