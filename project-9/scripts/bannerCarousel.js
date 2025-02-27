const bannerCarousel = document.getElementById('bannerCarousel');
const prevButton = document.getElementById('prev-bannerCarousel');
const nextButton = document.getElementById('next-bannerCarousel');

let currentIndex = 0;
const totalSlides = bannerCarousel.children.length;

function updateCarousel() {
    const offset = -currentIndex * 100; 
    bannerCarousel.style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides; 
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
    updateCarousel();
});