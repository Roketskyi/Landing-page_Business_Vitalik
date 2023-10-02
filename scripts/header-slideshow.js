const images = ["/images/DSC_2070.JPG", "/images/IMG_1865.JPG", "/images/IMG_1865.JPG"];

let slideIndex = 0;

function changeImage() {
slideIndex = (slideIndex + 1) % images.length;
const headerImage = document.getElementById("headerImage");
headerImage.src = images[slideIndex];
}

setInterval(changeImage, 3000); // Змінювати фотографію кожні 3 секунди