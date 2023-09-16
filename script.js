// JavaScript to control the sticky name-container
const nameContainer = document.querySelector('.name-container');
const newSection = document.querySelector('.new-section');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const newSectionTop = newSection.offsetTop;

    if (scrollPosition >= newSectionTop) {
        nameContainer.classList.remove('name-sticky');
    } else {
        nameContainer.classList.add('name-sticky');
    }
});