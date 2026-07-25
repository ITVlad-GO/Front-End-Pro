const text = document.querySelector(".text-box_item");
const btn = document.querySelector(".btn");


btn.addEventListener("click", () => {
  if(text.style.color === "black") {
    text.style.color = "red";
  }else{
  text.style.color = "black";
  }
})