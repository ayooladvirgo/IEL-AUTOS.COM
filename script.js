// Search Functionality
document.getElementById('searchBtn').addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const carCards = document.querySelectorAll('.car-card');

    carCards.forEach(card => {
        const carName = card.getAttribute('data-name').toLowerCase();
        if (carName.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    // If no input, reset all
    if (searchInput === '') {
        carCards.forEach(card => {
            card.style.display = 'block';
        });
    }
});