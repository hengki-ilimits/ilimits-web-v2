// Using anime.js for animations
const anime = require("animejs/lib/anime");

// Get DOM elements
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

// Variables to keep track of current slide and total slides
let currentSlide = 0;
const totalSlides = slides.length;

// Function to move to the next slide
const goToNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        moveCarousel();
    }
};

// Function to move to the previous slide
const goToPrevSlide = () => {
    if (currentSlide > 0) {
        currentSlide--;
        moveCarousel();
    }
};

// Function to move the carousel to the current slide
const moveCarousel = () => {
    anime({
        targets: carousel,
        translateX: -currentSlide * 300, // Adjust this value to match your slide width
        duration: 500,
        easing: "easeOutQuad",
    });
};

// Add click event listeners to navigation buttons
prevButton.addEventListener("click", goToPrevSlide);
nextButton.addEventListener("click", goToNextSlide);

// Automatically move to the next slide at an interval (e.g., every 3 seconds)
setInterval(goToNextSlide, 3000);
