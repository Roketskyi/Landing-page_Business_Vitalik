const brickButtons = document.querySelectorAll(".brickButton");
    const brickLists = document.querySelectorAll(".brickList");

    // Додайте обробник подій для кожної кнопки
    brickButtons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            // Перевірте, чи список схований або видимий
            if (brickLists[index].classList.contains("hidden")) {
                // Відобразіть список
                brickLists[index].classList.remove("hidden");
            } else {
                // Сховайте список
                brickLists[index].classList.add("hidden");
            }
        });
    });