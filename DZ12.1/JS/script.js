const getAddres = document.getElementById("set-url");
const getToSite = document.getElementById("go-to-site");
let address = "";

getAddres.addEventListener("click", () => {
  address = prompt("Введіть адресу на яку ви хочете перейти:)");
  
});

getToSite.addEventListener("click", () => {
  window.location.href = address;
});

