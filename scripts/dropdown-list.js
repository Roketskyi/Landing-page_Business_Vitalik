const brickButtons = document.querySelectorAll(".brickButton");
const brickLists = document.querySelectorAll(".brickList");

brickButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        if (brickLists[index].classList.contains("hidden")) {
            brickLists[index].classList.remove("hidden");
            button.classList.add("active"); // Додайте клас "active" для активних кнопок
        } else {
            brickLists[index].classList.add("hidden");
            button.classList.remove("active"); // Видаліть клас "active" для неактивних кнопок
        }
    });

    button.addEventListener("mouseenter", function () {
        if (!button.classList.contains("active")) {
            button.style.backgroundColor = "#67bb44"; // Зелений колір при наведенні на неактивну кнопку
            button.style.color = "#fff";
        }
    });

    button.addEventListener("mouseleave", function () {
        if (!button.classList.contains("active")) {
            button.style.backgroundColor = "#363636"; // Поверніть початковий колір при виході з кнопки
            button.style.color = "#fff";
        }
    });
});
