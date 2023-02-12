import shipFactory from "./ship";
import render from "./render";

function switchTurn(attacker) {
  // eslint-disable-next-line no-param-reassign
  attacker.validTurn = !attacker.validTurn;
}

const session = (user, cpu) => {
  const humanPlayer = user;
  const cpuPlayer = cpu;

  const userACarrier = shipFactory(5, 0, "Aircraft Carrier");
  const userCruiser = shipFactory(4, 0, "Cruiser");
  const userSubmarine = shipFactory(3, 0, "Submarine");
  const userDestroyer = shipFactory(3, 0, "Destroyer");
  const userPatrol = shipFactory(2, 0, "Patrol");

  const cpuACarrier = shipFactory(5, 0, "Aircraft Carrier");
  const cpuCruiser = shipFactory(4, 0, "Cruiser");
  const cpuSubmarine = shipFactory(3, 0, "Submarine");
  const cpuDestroyer = shipFactory(3, 0, "Destroyer");
  const cpuPatrol = shipFactory(2, 0, "Patrol");

  // user ship placement
  humanPlayer.ownBoard.placeShip(
    { col: "B", row: 3 },
    { col: "B", row: 6 },
    userCruiser
  );
  humanPlayer.ownBoard.placeShip(
    { col: "E", row: 5 },
    { col: "E", row: 7 },
    userSubmarine
  );
  humanPlayer.ownBoard.placeShip(
    { col: "A", row: 9 },
    { col: "E", row: 9 },
    userACarrier
  );
  humanPlayer.ownBoard.placeShip(
    { col: "H", row: 10 },
    { col: "I", row: 10 },
    userPatrol
  );
  humanPlayer.ownBoard.placeShip(
    { col: "G", row: 2 },
    { col: "I", row: 2 },
    userDestroyer
  );
  // cpu ship placement
  cpuPlayer.ownBoard.placeShip(
    { col: "H", row: 7 },
    { col: "H", row: 10 },
    cpuCruiser
  );
  cpuPlayer.ownBoard.placeShip(
    { col: "A", row: 1 },
    { col: "C", row: 1 },
    cpuSubmarine
  );
  cpuPlayer.ownBoard.placeShip(
    { col: "A", row: 6 },
    { col: "A", row: 10 },
    cpuACarrier
  );
  cpuPlayer.ownBoard.placeShip(
    { col: "E", row: 4 },
    { col: "F", row: 4 },
    cpuPatrol
  );
  cpuPlayer.ownBoard.placeShip(
    { col: "D", row: 8 },
    { col: "F", row: 8 },
    cpuDestroyer
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
      switchTurn(humanPlayer);
      switchTurn(cpuPlayer);
    }
    if (!isGameOver()) cpuAttack();
    else console.log("game over, player won");
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
      if (isGameOver()) console.log("game over, CPU won");
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
