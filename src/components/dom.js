import playSession from "./index";

const cpuBoardCells = document.querySelectorAll(".cpu-board > div");

function parseCoordinates(cell) {
  const cellClasses = cell.classList;
  const col = cellClasses[0].split("-")[0];
  const row = Number(cellClasses[0].split("-")[1]);
  return { col, row };
}

cpuBoardCells.forEach((cell) => {
  cell.addEventListener("click", () => {
    const point = { ...parseCoordinates(cell) };
    playSession.humanAttack(point);
  });
});
