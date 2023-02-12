import shipFactory from "./ship";
import render from "./render";

function switchTurn(attacker) {
  // eslint-disable-next-line no-param-reassign
  attacker.validTurn = !attacker.validTurn;
}

const session = (user, cpu) => {
  const humanPlayer = user;
  const cpuPlayer = cpu;

  const hShip1 = shipFactory(5, 0, "Aircraft Carrier");
  const hShip2 = shipFactory(4, 0, "Cruiser");
  const hShip3 = shipFactory(3, 0, "Submarine");
  const hShip4 = shipFactory(3, 0, "Destroyer");
  const hShip5 = shipFactory(2, 0, "Patrol");

  const cShip1 = shipFactory(5, 0, "Aircraft Carrier");
  const cShip2 = shipFactory(4, 0, "Cruiser");
  const cShip3 = shipFactory(3, 0, "Submarine");
  const cShip4 = shipFactory(3, 0, "Destroyer");
  const cShip5 = shipFactory(2, 0, "Patrol");

  humanPlayer.ownBoard.placeShip(
    { col: "B", row: 3 },
    { col: "B", row: 6 },
    hShip2
  );
  humanPlayer.ownBoard.placeShip(
    { col: "E", row: 5 },
    { col: "E", row: 7 },
    hShip3
  );
  humanPlayer.ownBoard.placeShip(
    { col: "A", row: 9 },
    { col: "E", row: 9 },
    hShip1
  );
  humanPlayer.ownBoard.placeShip(
    { col: "H", row: 10 },
    { col: "I", row: 10 },
    hShip5
  );
  humanPlayer.ownBoard.placeShip(
    { col: "G", row: 2 },
    { col: "I", row: 2 },
    hShip4
  );

  cpuPlayer.ownBoard.placeShip(
    { col: "B", row: 3 },
    { col: "B", row: 6 },
    cShip2
  );
  cpuPlayer.ownBoard.placeShip(
    { col: "E", row: 5 },
    { col: "E", row: 7 },
    cShip3
  );
  cpuPlayer.ownBoard.placeShip(
    { col: "A", row: 9 },
    { col: "E", row: 9 },
    cShip1
  );
  cpuPlayer.ownBoard.placeShip(
    { col: "H", row: 10 },
    { col: "I", row: 10 },
    cShip5
  );
  cpuPlayer.ownBoard.placeShip(
    { col: "G", row: 2 },
    { col: "I", row: 2 },
    cShip4
  );

  humanPlayer.ownBoard.showShips("player-board");

  const isGameOver = function isGameOver() {
    return (
      humanPlayer.ownBoard.allShipSunk() || cpuPlayer.ownBoard.allShipSunk()
    );
  };

  const selectCell = function selectCell(coordinate, boardClass) {
    const cellClass = `.${boardClass} > .${coordinate.col}-${coordinate.row}`;
    const cell = document.querySelector(cellClass);
    return cell;
  };

  const humanAttack = function humanAttack(point) {
    if (humanPlayer.validTurn === true) {
      cpuPlayer.ownBoard.recieveAttack(point);
      const cell = selectCell(point, "cpu-board");
      render(cell);
      if (
        !JSON.stringify(cpuPlayer.ownBoard.missHits).includes(
          JSON.stringify(point)
        )
      )
        cell.classList.add("cpu-took-hit");
      console.log(cpuPlayer.ownBoard);
      switchTurn(humanPlayer);
      switchTurn(cpuPlayer);
    }
    if (!isGameOver()) cpuAttack();
    else console.log("game over");
  };

  const cpuAttack = function cpuAttack() {
    function generateRandomPoints() {
      const randomRow = Math.floor(Math.random() * 10) + 1;
      const randomCol = String.fromCharCode(
        Math.floor(Math.random() * (74 - 65 + 1)) + 65
      );
      return { randomCol, randomRow };
    }

    function checkUnique(point) {
      const allAttackedPoints = [...humanPlayer.ownBoard.attackAttempts];
      const jsonArr = allAttackedPoints.map(JSON.stringify);
      return jsonArr.includes(JSON.stringify(point));
    }

    function getRandomPoints() {
      let randomPoint = { ...generateRandomPoints() };
      while (checkUnique(randomPoint)) {
        randomPoint = { ...generateRandomPoints() };
      }
      return { col: randomPoint.randomCol, row: randomPoint.randomRow };
    }

    if (cpuPlayer.validTurn === true) {
      const coordinate = getRandomPoints();
      humanPlayer.ownBoard.recieveAttack(coordinate);
      const cell = selectCell(coordinate, "player-board");
      render(cell);
      switchTurn(cpuPlayer);
      switchTurn(humanPlayer);
      if (isGameOver()) console.log("game over");
    }
  };

  return {
    humanPlayer,
    cpuPlayer,
    humanAttack,
    cpuAttack,
    isGameOver,
  };
};

export default session;
