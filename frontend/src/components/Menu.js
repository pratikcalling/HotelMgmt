import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/menu')
            .then(response => {
                setMenuItems(response.data.items);
            })
            .catch(error => {
                console.error('Error fetching menu:', error);
            });
    }, []);

    return (
        <div>
            <h2>Menu</h2>
            {menuItems.length > 0 ? (
                <ul>
                    {menuItems.map(item => (
                        <li key={item.id}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>Price: ${item.price.toFixed(2)}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading menu...</p>
            )}
        </div>
    );
};

export default Menu;
