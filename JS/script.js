const table = document.querySelector(".table");
const btn = document.querySelector(".btn");

btn.addEventListener("click", (event) => {
  table.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    const newRow = document.createElement("tr");

    for (let j = 1; j <= 10; j++) {
      const newTd = document.createElement("td");

      newTd.textContent = i * j;

      newRow.append(newTd);
    }
    table.append(newRow);
  }
  
});
