const resultDiv = document.querySelector(".result");

function displayWinner(str1, str2) {
  const spanOne = document.createElement("span");
  const spanTwo = document.createElement("span");
  spanOne.textContent = str1;
  spanTwo.textContent = str2;
  resultDiv.append(spanOne, spanTwo);
}

function render(cell) {
  cell.classList.add("attacked-cell");
  const attackMark = document.createElement("div");
  attackMark.classList.add("attack-mark");
  cell.appendChild(attackMark);
  cell.setAttribute("style", "pointer-events:none");
}

export { render, displayWinner };
