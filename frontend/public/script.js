window.onload = function() {
    fetchMenuItems();
};

function fetchMenuItems() {
    fetch('http://localhost:8080/menu')
        .then(response => response.json())
        .then(data => {
            // Update hotel name in the header
            const hotelNameElement = document.getElementById('hotel-name');
            hotelNameElement.textContent = data.hotel.name;

            // Update hotel logo in the header if data.logo exists
            const hotelLogoLeft = document.getElementById('hotel-logo-left');
            const hotelLogoRight = document.getElementById('hotel-logo-right');

            if (data.logo) {
                hotelLogoLeft.src = `./images/${data.logo}`; // Adjust path based on your project structure
                hotelLogoLeft.style.display = 'inline-block'; // Show the logo
                hotelLogoLeft.style.position = 'absolute'; // Position left logo absolutely
                hotelLogoLeft.style.left = '10px'; // Adjust left position as needed
                hotelLogoLeft.style.top = '10px'; // Adjust top position as needed
                hotelLogoLeft.style.width = 'auto'; // Adjust width as needed
                hotelLogoLeft.style.height = '200px'; // Adjust height as needed

                hotelLogoRight.src = `./images/${data.logo}`; // Adjust path based on your project structure
                hotelLogoRight.style.display = 'inline-block'; // Show the logo
                hotelLogoRight.style.position = 'absolute'; // Position right logo absolutely
                hotelLogoRight.style.right = '10px'; // Adjust right position as needed
                hotelLogoRight.style.top = '10px'; // Adjust top position as needed
                hotelLogoRight.style.width = 'auto'; // Adjust width as needed
                hotelLogoRight.style.height = '200px'; // Adjust height as needed
            } else {
                hotelLogoLeft.style.display = 'none'; // Hide the logo if no data.logo
                hotelLogoRight.style.display = 'none'; // Hide the logo if no data.logo
            }

            const menuItems = data.items;
            const categories = {};

            // Group items by category
            menuItems.forEach(item => {
                const category = item.category || 'Other';
                if (!categories[category]) {
                    categories[category] = [];
                }
                categories[category].push(item);
            });

            const menuCategoriesContainer = document.getElementById('menu-categories');

            // Clear existing content
            menuCategoriesContainer.innerHTML = '';

            // Render categories and items
            Object.keys(categories).forEach(category => {
                const categorySection = document.createElement('div');
                categorySection.classList.add('menu-category'); // Add class for styling and interaction
                categorySection.innerHTML = `
                    <h3 class="section-header">${category}</h3>
                    <ul class="category-items show-items"> <!-- Add show-items class here -->
                        ${categories[category].map((item, index) => `
                            <li class="menu-item">
                                <div class="menu-item-index">${index + 1}. </div>
                                <div class="menu-item-details">
                                    <div class="menu-item-title">${item.name}</div>
                                    <div class="menu-item-description">${item.description || ''}</div>
                                </div>
                                <div class="menu-item-price">${item.price}/-</div>
                            </li>
                        `).join('')}
                    </ul>
                `;
                menuCategoriesContainer.appendChild(categorySection);
            });

            // Add click event listener to toggle category visibility
            const categoryHeaders = document.querySelectorAll('.menu-category h3');
            categoryHeaders.forEach(header => {
                header.addEventListener('click', function() {
                    const categoryList = this.nextElementSibling; // UL element
                    categoryList.classList.toggle('show-items');
                });
            });

            // Render owners in the footer
            renderOwners(data.hotel.owners);
        })
        .catch(error => console.error('Error fetching menu:', error));
}

function renderOwners(owners) {
    const footer = document.querySelector('footer .owners-container');
    footer.innerHTML = ''; // Clear previous content

    // Render owner details
    owners.forEach(owner => {
        const ownerInfo = document.createElement('div');
        ownerInfo.classList.add('owner-info');
        ownerInfo.innerHTML = `
                    <p><strong>${owner.firstName} ${owner.lastName}</strong> ${owner.phoneNumber ? `(M) ${owner.phoneNumber}` : ''}</p>
                `;
        footer.appendChild(ownerInfo);
    });

    // Add "Powered by to the footer
    const poweredBy = document.createElement('div');
    poweredBy.classList.add('powered-by');
    poweredBy.innerHTML = `<p>Powered by Pratik</p>`;
    document.querySelector('footer').appendChild(poweredBy);
}
