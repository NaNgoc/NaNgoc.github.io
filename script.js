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

// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal
var img = document.querySelectorAll('.enlargeImage');
var modalImg = document.getElementById("img01");

img.forEach(function(image) {
    image.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

function reveal() {
    var reveals = document.querySelectorAll('.fade-in-element');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 350; // Adjust as needed

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('visible');
        } else {
            reveals[i].classList.remove('visible');
        }
    }
}

window.addEventListener('scroll', reveal);