function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const cartCount = document.getElementById('cart-count');
    const mobileCartCount = document.getElementById('mobile-cart-count');
    
    mobileMenu.classList.toggle('active');
    mobileToggle.classList.toggle('active');
    
    // Sync cart count
    if (cartCount && mobileCartCount) {
        mobileCartCount.textContent = cartCount.textContent;
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    
    mobileMenu.classList.remove('active');
    mobileToggle.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a[href^="index.html#"]');
    const sections = [];

    navLinks.forEach(link => {
        const sectionId = link.getAttribute('href').split('#')[1];
        if (sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                sections.push(section);
            }
        }
    });

    const onScroll = () => {
        const scrollPosition = window.scrollY;
        const offset = 100; // Offset for the fixed header height

        let currentSection = null;
        sections.forEach(section => {
            if (section.offsetTop - offset <= scrollPosition && section.offsetTop + section.offsetHeight - offset > scrollPosition) {
                currentSection = section;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (currentSection && link.getAttribute('href') === `index.html#${currentSection.id}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', onScroll);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        
        if (mobileMenu && mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(e.target) && 
            !mobileToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });
});
