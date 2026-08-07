const btn = document.querySelector(".buttons");

btn.addEventListener("click", (event) => {
  if (event.target.className === "btn1") {
    alert(`Було натиснуто на : ${event.target.textContent}`);
  }
});
