import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8080/menu')
      .then(response => {
        setMenuItems(response.data.items);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching menu:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Menu</h2>
      {loading ? (
        <p>Loading menu...</p>
      ) : (
        menuItems.length === 0 ? (
          <p>No items available</p>
        ) : (
          <ul>
            {menuItems.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )
      )}
    </div>
  );
}

export default Menu;
