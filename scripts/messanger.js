const circleButton = document.querySelector('.circle');
const whatsappButton = document.querySelector('.whatsapp');
const telegramButton = document.querySelector('.telegram');
const viberButton = document.querySelector('.viber');

let buttonsVisible = true;

circleButton.addEventListener('click', () => {
  if (buttonsVisible) {
    telegramButton.style.display = 'none';
    viberButton.style.display = 'none';
    buttonsVisible = false;
  } else {
    telegramButton.style.display = '';
    viberButton.style.display = '';
    buttonsVisible = true;
  }
});

// Отримуємо елемент за його класом
const circle = document.querySelector('.circle');

// Додаємо слухача подій на клік
circle.addEventListener('click', toggleIcon);

function toggleIcon() {
  // Отримуємо елементи із потрібними класами
  const circleIcon = circle.querySelector('.circle__icon');
  const plusIcon = circleIcon.querySelector('.circle__plus');
  const minusIcon = circleIcon.querySelector('.circle__minus');

  // Змінюємо значення стилів, щоб показати "+" або "-"
  if (plusIcon.style.display === 'none') {
    plusIcon.style.display = '';
    minusIcon.style.display = 'none';
  } else {
    plusIcon.style.display = 'none';
    minusIcon.style.display = '';
  }
}

// Встановлюємо "+" на початку
circle.innerHTML = '<div class="circle__icon"><div class="circle__plus" style="display: none">+</div><div class="circle__minus">-</div></div>';