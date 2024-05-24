window.onload = function() {
    fetchMenuItems();
};

function fetchMenuItems() {
    fetch('http://localhost:8080/menu')
        .then(response => response.json())
        .then(data => {
            const menuItems = data.items;
            const menuList = document.getElementById('menu-items');
            menuItems.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p>Price: $${item.price.toFixed(2)}</p>
                `;
                menuList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching menu:', error));
}
