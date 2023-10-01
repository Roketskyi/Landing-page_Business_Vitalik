// Знаходимо всі посилання в хедері
const headerLinks = document.querySelectorAll('header a');

// Ітеруємося по посиланнях і додаємо обробник подій
headerLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Відміна стандартної поведінки переходу по посиланню

        const targetId = link.getAttribute('href').substring(1); // Отримуємо ідентифікатор цільового елемента

        const targetElement = document.getElementById(targetId); // Знаходимо цільовий елемент

        if (targetElement) {
            // Плавно прокручуємо до цільового елемента
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
