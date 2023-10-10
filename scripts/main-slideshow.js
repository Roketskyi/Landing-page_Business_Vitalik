const mainImages = [
    "./images/Byklet_00001.png",
    "./images/IMG_3516.JPG",
    "./images/IMG_3160.JPG",
    "./images/IMG_3150.JPG",
    "./images/hotomir.JPG"
];

let mainImageSlide = 0;

function changeImage() {
    mainImageSlide = (mainImageSlide + 1) % mainImages.length;
    const headerImage = document.getElementById("mainImageSlide");

    const fancyboxLinks = document.querySelectorAll('[data-fancybox="gallery"]');
    fancyboxLinks.forEach((link, index) => {
        link.href = mainImages[(mainImageSlide + index) % mainImages.length];
    });

    headerImage.style.opacity = 0;

    setTimeout(() => {
        headerImage.src = mainImages[mainImageSlide];
        
        headerImage.style.opacity = 1;
    }, 1500);
}

setInterval(changeImage, 8000);
