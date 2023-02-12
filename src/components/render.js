export default function render(cell) {
  cell.classList.add("attacked-cell");
  const attackMark = document.createElement("div");
  attackMark.classList.add("attack-mark");
  cell.appendChild(attackMark);
}

function selectCell(point) {
  const extractedClass = `${point.col}-${point.row}`;
  console.log(extractedClass, typeof extractedClass);
}

// console.log(document.querySelector(".player-board > .E-6"));
