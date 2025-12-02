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

    // Smooth scrolling for project button
    const projButton = document.getElementById('projButton');
    if (projButton) {
        projButton.addEventListener('click', function() {
            const projHeader = document.getElementById('projHeader');
            if (projHeader) {
                projHeader.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Smooth page transition for project links
    const projectLinks = document.querySelectorAll('#nlpProjLink, #xgboostProjLink, #pysparkProjLink, #dbProjLink');

    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');

            document.body.style.transition = 'opacity 0.3s ease';
            document.body.style.opacity = '0';

            setTimeout(function() {
                window.location.href = href;
            }, 300);
        });
    });
});
