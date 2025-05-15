// This file contains JavaScript code for the artist website.
// It includes functionality for smooth scrolling to different segments of the homepage when menu items are clicked.

// Function to enable smooth scrolling to sections of the homepage
document.addEventListener('DOMContentLoaded', function() {
    // Select all menu links in the sidebar
    const menuLinks = document.querySelectorAll('.sidebar-menu a');

    // Loop through each menu link
    menuLinks.forEach(link => {
        // Add a click event listener to each link
        link.addEventListener('click', function(e) {
            // Prevent the default anchor click behavior
            e.preventDefault();

            // Get the target section ID from the link's href attribute
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Scroll to the target section smoothly
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamically load site pictures
    const logo = document.getElementById('logo');
    const newsPhoto = document.getElementById('news-photo');

    // Load logo
    const logoPath = 'sitepictures/chosen-logo.png';
    logo.src = logoPath;

    // Load news photo
    const newsPhotoPath = 'sitepictures/newsphoto.jpg';
    newsPhoto.src = newsPhotoPath;

    // Load gallery images
    const galleryGrid = document.querySelector('.gallery-grid');
    const gallerySwipe = document.querySelector('.gallery-swipe');

    for (let i = 1; i <= 4; i++) { // Adjust the range as needed
        const imgPath = `gallery/${i}.jpg`;
        const imgGrid = document.createElement('img');
        imgGrid.src = imgPath;
        galleryGrid.appendChild(imgGrid);

        // Add to swipe
        const imgSwipe = document.createElement('img');
        imgSwipe.src = imgPath;
        gallerySwipe.appendChild(imgSwipe);
    }

    // Popup overlay functionality
    const overlay = document.getElementById('gallery-overlay');
    const overlayImg = document.getElementById('overlay-img');
    const closeBtn = document.getElementById('close-overlay');

    // Make all images clickable except logo and background
    document.body.addEventListener('click', function(e) {
        if (
            e.target.tagName === 'IMG' &&
            e.target.id !== 'logo' &&
            e.target.id !== 'background'
        ) {
            overlayImg.src = e.target.src;
            overlay.style.display = 'flex';
        }
    });


    closeBtn.addEventListener('click', function() {
        overlay.style.display = 'none';
        overlayImg.src = '';
    });

    // Optional: close overlay when clicking outside the image
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.style.display = 'none';
            overlayImg.src = '';
        }
    });
});

// Function to toggle the visibility of the menu
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}