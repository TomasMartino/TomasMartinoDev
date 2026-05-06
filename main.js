// Toggle Hamburger Menu
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navOverlay = document.querySelector('.nav-overlay');
    
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    navOverlay.classList.toggle('active');
}

// Scroll to Section
function scrollToSection(index) {
    const sections = document.querySelectorAll('.section');
    if (sections[index]) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
    }
    
    // Close menu after clicking
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navOverlay = document.querySelector('.nav-overlay');
    
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    navOverlay.classList.remove('active');
}

// Close menu when pressing Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu.classList.contains('active')) {
            toggleMenu();
        }
    }
});

// Form submission handler
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Esta es una demo del formulario.');
});