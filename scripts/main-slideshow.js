const mainImages = [
    "./images/Byklet_00001.png",
    "./images/IMG_3516.JPG",
    "./images/IMG_3160.JPG",
    "./images/IMG_3150.JPG",
    "./images/hotomir.JPG",
    "./images/DSC_2070.JPG",
    "./images/IMG_1865.JPG",
    "./images/DSCF2347.JPG",
    "./images/new1.jpg",
    "./images/new2.jpg",
    "./images/new3.jpg"
];

let mainImageSlide = 0;

function changeImage() {
    mainImageSlide = (mainImageSlide + 1) % mainImages.length;
    const headerImage = document.getElementById("mainImageSlide");

    // Змінити прозорість зображення перед зміною src
    headerImage.style.opacity = 0;

    setTimeout(() => {
      headerImage.src = mainImages[mainImageSlide];
      headerImage.style.opacity = 1;
    }, 1500);
  }

setInterval(changeImage, 8000);
