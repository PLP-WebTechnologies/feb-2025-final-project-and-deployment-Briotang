// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Blog Post Filter
const filterInput = document.querySelector('#filterInput');
const posts = document.querySelectorAll('.post');

if (filterInput) {
    filterInput.addEventListener('input', () => {
        const filterValue = filterInput.value.toLowerCase();
        posts.forEach(post => {
            const title = post.querySelector('h2').textContent.toLowerCase();
            post.style.display = title.includes(filterValue) ? 'block' : 'none';
        });
    });
}

// Back to Top Button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    backToTopButton.classList.toggle('show', window.scrollY > 300);
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}