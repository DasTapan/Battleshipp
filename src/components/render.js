const resultDiv = document.querySelector(".result");

function displayWinner(str1, str2) {
  const span = document.createElement("span");
  span.textContent = str1;
  resultDiv.appendChild(span);
  resultDiv.textContent = str2;
}

function render(cell) {
  cell.classList.add("attacked-cell");
  const attackMark = document.createElement("div");
  attackMark.classList.add("attack-mark");
  cell.appendChild(attackMark);
}

export { render, displayWinner };
