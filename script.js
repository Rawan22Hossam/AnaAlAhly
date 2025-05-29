document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close nav when a link is clicked (for mobile)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Optional: Highlight active navigation link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navA = document.querySelectorAll('.nav-links a');

    function highlightNav() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Adjust for header height
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navA.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('active');
            } else if (current === '' && a.getAttribute('href') === '#') { // For Home link if at top
                a.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNav);
    highlightNav(); // Call on load to set initial active link
});