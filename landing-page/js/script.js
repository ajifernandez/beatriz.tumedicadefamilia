// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Logo click to scroll to top (only if not navigating to /)
const logo = document.querySelector('.logo');
if (logo && logo.getAttribute('href') === '#') {
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth Scrolling for Anchors
// Note: CSS scroll-behavior: smooth handles smooth scrolling natively.
// This JS only closes the mobile menu when a nav link is clicked.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Simple Fade-in Animation on Scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.classList.add('fade-in-section');
    observer.observe(section);
});

// Social Media Enhanced Interactions
document.querySelectorAll('.social-link').forEach((link) => {
    link.addEventListener('click', function(e) {
        if (this.hasAttribute('aria-disabled') && this.getAttribute('aria-disabled') === 'true') {
            e.preventDefault();

            const comingSoon = document.createElement('div');
            comingSoon.textContent = 'Próximamente';
            comingSoon.className = 'coming-soon';

            this.appendChild(comingSoon);

            setTimeout(() => {
                comingSoon.remove();
            }, 2000);
        }
    });
});

