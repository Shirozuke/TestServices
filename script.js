document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');

    searchIcon.addEventListener('click', function() {
        if (searchInput.style.display === 'block') {
            searchInput.style.display = 'none';
            searchIcon.setAttribute('name', 'search-outline');
        } else {
            searchInput.style.display = 'block';
            searchIcon.setAttribute('name', 'close-outline');
            searchInput.focus(); // Focus the input field when it's displayed
        }
    });

    // Initialize with laptop details visible
    showComputerDetails();
});

function showComputerDetails() {
    const computerImage = document.getElementById('computer-image');
    const phoneImage = document.getElementById('phone-image');
    const computerDetails = document.getElementById('computer-details');
    const phoneDetails = document.getElementById('phone-details');

    // Activate computer and deactivate phone
    computerImage.classList.add('active');
    computerImage.classList.remove('inactive');
    phoneImage.classList.add('inactive');
    phoneImage.classList.remove('active');

    // Show computer details, hide phone details
    computerDetails.classList.add('show');
    computerDetails.classList.remove('hide');
    phoneDetails.classList.add('hide');
    phoneDetails.classList.remove('show');
}

function showPhoneDetails() {
    const computerImage = document.getElementById('computer-image');
    const phoneImage = document.getElementById('phone-image');
    const computerDetails = document.getElementById('computer-details');
    const phoneDetails = document.getElementById('phone-details');

    // Activate phone and deactivate computer
    phoneImage.classList.add('active');
    phoneImage.classList.remove('inactive');
    computerImage.classList.add('inactive');
    computerImage.classList.remove('active');

    // Show phone details, hide computer details
    phoneDetails.classList.add('show');
    phoneDetails.classList.remove('hide');
    computerDetails.classList.add('hide');
    computerDetails.classList.remove('show');
}


