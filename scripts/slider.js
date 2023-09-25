// Отримуємо елементи з DOM
const sliderContainer = document.querySelector('.image-content');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

// Функція для перемикання слайдів вперед
function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    updateSlider();
}

// Функція для перемикання слайдів назад
function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    updateSlider();
}

// Функція для оновлення слайдера
function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

// Додавання обробників подій на кнопки
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Початкова ініціалізація слайдера
updateSlider();
