window.addEventListener('scroll', function() {
    const header = document.querySelector('header');

    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('nav');
    const menuIcon = document.getElementById('menuIcon');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('active');

            // Toggle between menu and X icon
            if (nav.classList.contains('active')) {
                menuIcon.src = '../images/icons/x_icon.png';
                menuIcon.alt = 'close icon';
            } else {
                menuIcon.src = '../images/icons/menu_icon.png';
                menuIcon.alt = 'menu icon';
            }
        });
    }

    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            // Close mobile menu after clicking
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuIcon.src = '../images/icons/menu_icon.png';
                menuIcon.alt = 'menu icon';
            }
        });
    });

    // Smooth page transition for Home link
    const homeLink = document.querySelector('nav a[href="index.html"]');

    if (homeLink) {
        homeLink.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');

            document.body.style.transition = 'opacity 0.3s ease';
            document.body.style.opacity = '0';

            setTimeout(function() {
                window.location.href = href;
            }, 300);
        });
    }
});

