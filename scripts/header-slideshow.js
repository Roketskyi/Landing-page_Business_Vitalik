const images = [
    "./images/DSC_2070.JPG",
    "./images/IMG_1865.JPG",
    "./images/DSCF2347.JPG",
    "./images/new1.jpg",
    "./images/new2.jpg",
    "./images/new3.jpg"
];

let slideIndex = 0;

function changeImage() {
    slideIndex = (slideIndex + 1) % images.length;
    const headerImage = document.getElementById("headerImage");
    headerImage.src = images[slideIndex];
}

setInterval(changeImage, 4000);