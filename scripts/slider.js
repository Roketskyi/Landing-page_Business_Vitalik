// Отримуємо елементи з DOM
const sliderContainer = document.querySelector('.image-content');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;
let timer; // Змінна для автоматичної зміни слайдів

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

// Функція для початку автоматичної зміни слайдів
function startAutoSlide() {
    timer = setInterval(nextSlide, 8000);
}

// Функція для зупинки автоматичної зміни слайдів
function stopAutoSlide() {
    clearInterval(timer);
}

// Додавання обробників подій на кнопки
nextButton.addEventListener('click', () => {
    nextSlide();
    stopAutoSlide(); // Зупиняємо автоматичну зміну слайдів при кліці на кнопку
    startAutoSlide(); // Починаємо автоматичну зміну слайдів знову
});
prevButton.addEventListener('click', () => {
    prevSlide();
    stopAutoSlide(); // Зупиняємо автоматичну зміну слайдів при кліці на кнопку
    startAutoSlide(); // Починаємо автоматичну зміну слайдів знову
});

// Початкова ініціалізація слайдера
updateSlider();
startAutoSlide(); // Запускаємо автоматичну зміну слайдів
