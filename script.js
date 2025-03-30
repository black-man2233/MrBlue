// Array of slot machines
const slotMachines = [
    {
        name: "Sweet Bonanza",
        provider: "pragmatic",
        image: "https://img.rationalcdn.com/starsweb/prod/5645_0.jpg"
    },
    {
        name: "Wild Toro",
        provider: "elk",
        image: "https://elk-studioscom.cdn.triggerfish.cloud/uploads/2021/09/wildtoro2_logo_characters.png"
    },
    {
        name: "Starburst",
        provider: "netent",
        image: "https://www.mobilebet.com/go/wp-content/uploads/2020/01/Starburst-Icon.png"
    },
    {
        name: "The Dog House",
        provider: "pragmatic",
        image: "https://thedreamhouseproject.ca/wp-content/uploads/2024/09/the-dog-house-logo.webp"
    },
    {
        name: "Katmandu Gold",
        provider: "elk",
        image: "https://elk-studioscom.cdn.triggerfish.cloud/uploads/2020/11/katmandu_logo_website.png"
    }
];

// Function to generate slot machines dynamically
function generateSlotMachines() {
    const slotContainer = document.getElementById('slotContainer');
    slotContainer.innerHTML = ''; // Clear any existing content

    slotMachines.forEach(slot => {
        // Create the slot machine card
        const slotDiv = document.createElement('div');
        slotDiv.classList.add('slot-machine');
        slotDiv.setAttribute('data-provider', slot.provider);

        // Add the image
        const img = document.createElement('img');
        img.src = slot.image;
        img.alt = slot.name;

        // Add the name
        const name = document.createElement('p');
        name.textContent = slot.name;

        // Add click event to open mini screen
        slotDiv.addEventListener('click', () => openMiniScreen(slot));

        // Append elements to the slot card
        slotDiv.appendChild(img);
        slotDiv.appendChild(name);

        // Append the slot card to the container
        slotContainer.appendChild(slotDiv);
    });
}

// Function to open the mini screen
function openMiniScreen(slot) {
    const miniScreen = document.getElementById('miniScreen');
    const slotNameElement = document.getElementById('slotName');
    const slotImageElement = document.getElementById('slotImage');
    const userBalanceElement = document.getElementById('userBalance');

    slotNameElement.textContent = slot.name;
    slotImageElement.src = slot.image; // Set the image of the selected slot
    userBalanceElement.textContent = "Balance: $1000"; // Example balance

    miniScreen.style.display = 'block';
    document.getElementById('slotContainer').style.display = 'none'; // Hide slots
}

// Function to close the mini screen
function closeMiniScreen() {
    const miniScreen = document.getElementById('miniScreen');
    miniScreen.style.display = 'none';
    document.getElementById('slotContainer').style.display = 'flex'; // Show slots
}

// Function to filter slot machines based on search and provider
function filterSlots() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const providerFilter = document.getElementById('providerFilter').value;

    const slots = document.querySelectorAll('.slot-machine');

    slots.forEach(slot => {
        const slotName = slot.querySelector('p').textContent.toLowerCase();
        const slotProvider = slot.getAttribute('data-provider');

        // Check if the slot matches the search and filter criteria
        if (
            (slotName.includes(searchInput) || searchInput === '') &&
            (providerFilter === 'all' || slotProvider === providerFilter)
        ) {
            slot.style.display = 'block'; // Show the slot
        } else {
            slot.style.display = 'none'; // Hide the slot
        }
    });
}

// Generate slot machines on page load
generateSlotMachines();