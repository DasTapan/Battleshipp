import playSession from "./index";
import render from "./render";

const humanBoard = playSession.humanPlayer.ownBoard;
const cpuBoard = playSession.cpuPlayer.ownBoard;

const humanBoardCells = document.querySelectorAll(".player-board > div");
const cpuBoardCells = document.querySelectorAll(".cpu-board > div");

function parseCoordinates(cell) {
  const cellClasses = cell.classList;
  const col = cellClasses[0].split("-")[0];
  const row = Number(cellClasses[0].split("-")[1]);
  return { col, row };
}

humanBoardCells.forEach((cell) => {
  cell.addEventListener("click", () => {
    console.log(cell);

    // cell.classList.add("attacked-cell");
    // const attackMark = document.createElement("div");
    // attackMark.classList.add("attack-mark");
    // cell.appendChild(attackMark);

    render(cell);
    const point = { ...parseCoordinates(cell) };
    humanBoard.recieveAttack(point);
    console.log(humanBoard);
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
