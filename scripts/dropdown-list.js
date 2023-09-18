// Отримайте посилання на кнопку і список
const brickButton = document.getElementById("brickButton");
const brickList = document.getElementById("brickList");

// Додайте обробник подій для кнопки
brickButton.addEventListener("click", function () {
    // Перевірте, чи список схований або видимий
    if (brickList.classList.contains("hidden")) {
        // Відобразіть список
        brickList.classList.remove("hidden");
    } else {
        // Сховайте список
        brickList.classList.add("hidden");
    }
});
