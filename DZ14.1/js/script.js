const image = document.querySelector(".slider-image");
const leftButton = document.querySelector(".slider-button-left");
const rightButton = document.querySelector(".slider-button-right");

const images = [
  "./img/1.png",
  "./img/2.png",
  "./img/3.jpg",
];

let currentImage = 0;

function updateSlider() {
  image.src = images[currentImage];

  if (currentImage === 0) {
    leftButton.style.display = "none";
  } else {
    leftButton.style.display = "block";
  }

  if (currentImage === images.length - 1) {
    rightButton.style.display = "none";
  } else {
    rightButton.style.display = "block";
  }
}

rightButton.addEventListener("click", () => {
  currentImage++;

  updateSlider();
});

leftButton.addEventListener("click", () => {
  currentImage--;

  updateSlider();
});

updateSlider();
