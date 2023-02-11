import playSession from "./index";

const humanBoard = playSession.humanPlayer.ownBoard;
const cpuBoard = playSession.cpuPlayer.ownBoard;

const humanBoardCells = document.querySelectorAll(".player-board > div");
const cpuBoardCells = document.querySelectorAll(".cpu-board > div");

function parseCoordinates(cell) {
  const cellClasses = cell.classList;
  console.log(cellClasses[0]);
  const col = cellClasses[0].split("-")[0];
  const row = Number(cellClasses[0].split("-")[1]);
  console.log(col, row);
}

humanBoardCells.forEach((cell) => {
  cell.addEventListener("click", () => {
    console.log(cell);
    cell.classList.add("attacked-cell");
    const attackMark = document.createElement("div");
    attackMark.classList.add("attack-mark");
    cell.appendChild(attackMark);
    parseCoordinates(cell);
  });
});

cpuBoardCells.forEach((cell) => {
  cell.addEventListener("click", () => {
    console.log(cell);
    cell.classList.add("attacked-cell");
    const attackMark = document.createElement("div");
    attackMark.classList.add("attack-mark");
    cell.appendChild(attackMark);
  });
});
