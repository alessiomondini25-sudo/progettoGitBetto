const cursor = document.querySelector('.cursor');
const links = document.querySelectorAll('.card, a');
const contactsButton = document.querySelector('.contact-page-submit');

document.addEventListener('mousemove', (e) => {

    const x = e.clientX;
    const y = e.clientY;

    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
});


links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('expand');
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('expand');
    });
});

// PER CONTATTI
contactsButton.addEventListener('mouseenter', () => {
    cursor.classList.add('expand');
});

contactsButton.addEventListener('mouseleave', () => {
    cursor.classList.remove('expand');
});

document.addEventListener('mouseenter', () => {
    cursor.style.opacity = "1";
});
document.addEventListener('mouseleave', () => {
    cursor.style.opacity = "0";
});