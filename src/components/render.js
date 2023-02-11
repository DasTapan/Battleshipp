export default function render(cell) {
  cell.classList.add("attacked-cell");
  const attackMark = document.createElement("div");
  attackMark.classList.add("attack-mark");
  cell.appendChild(attackMark);
}
