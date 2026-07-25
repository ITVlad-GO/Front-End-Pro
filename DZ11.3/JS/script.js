const btn = document.querySelector(".btn");
const imageBox = document.querySelector(".image-box");
const img = [
  "./img/1.jpg",
  "./img/2.jpg",
  "./img/3.jpg",
  "./img/4.jpg",
  "./img/5.jpg",
  "./img/6.jpg",
  "./img/7.jpg",
  "./img/8.jpg",
  "./img/9.jpg",
];

btn.addEventListener("click", (event) => {
  imageBox.innerHTML = "";
  const image = document.createElement("img");
  const index = Math.round(Math.random() * 8);
  image.setAttribute("src", img[index]);
  image.setAttribute("alt", "img");
console.log(img[index])
  imageBox.appendChild(image);
});
