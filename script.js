// --- 1. Mobilní navigace ---
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li a'); 

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Zavření menu po kliknutí na odkaz
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active'); 
        burger.classList.remove('toggle');  
    });
});

// --- 2. Navbar Scroll Effect ---
window.addEventListener('scroll', () => {
    const header = document.querySelector('.navbar');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// --- 3. Reveal Animation ---
const revealElements = document.querySelectorAll('.reveal');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
};

const observer = new IntersectionObserver(revealCallback, {
    threshold: 0.1,
    rootMargin: "0px"
});

revealElements.forEach(el => observer.observe(el));