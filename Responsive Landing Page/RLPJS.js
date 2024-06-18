window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '&#9776;';
document.querySelector('nav').appendChild(menuToggle);

menuToggle.addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});
