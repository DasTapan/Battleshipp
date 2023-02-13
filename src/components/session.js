import { userPlacement, cpuPlacement } from "./randomPlacement";
import { render, displayWinner } from "./render";

function switchTurn(attacker) {
  // eslint-disable-next-line no-param-reassign
  attacker.validTurn = !attacker.validTurn;
}

const session = (user, cpu) => {
  const humanPlayer = user;
  const cpuPlayer = cpu;

  const userIndex = Math.floor(Math.random() * 4);
  const cpuIndex = Math.floor(Math.random() * 4);

  // user ship placement
  humanPlayer.ownBoard.placeShip(
    userPlacement[userIndex][0][0],
    userPlacement[userIndex][0][1],
    userPlacement[userIndex][0][2]
  );

  humanPlayer.ownBoard.placeShip(
    userPlacement[userIndex][1][0],
    userPlacement[userIndex][1][1],
    userPlacement[userIndex][1][2]
  );
  humanPlayer.ownBoard.placeShip(
    userPlacement[userIndex][2][0],
    userPlacement[userIndex][2][1],
    userPlacement[userIndex][2][2]
  );
  humanPlayer.ownBoard.placeShip(
    userPlacement[userIndex][3][0],
    userPlacement[userIndex][3][1],
    userPlacement[userIndex][3][2]
  );
  humanPlayer.ownBoard.placeShip(
    userPlacement[userIndex][4][0],
    userPlacement[userIndex][4][1],
    userPlacement[userIndex][4][2]
  );
  // cpu ship placement
  cpuPlayer.ownBoard.placeShip(
    cpuPlacement[cpuIndex][0][0],
    cpuPlacement[cpuIndex][0][1],
    cpuPlacement[cpuIndex][0][2]
  );
  cpuPlayer.ownBoard.placeShip(
    cpuPlacement[cpuIndex][1][0],
    cpuPlacement[cpuIndex][1][1],
    cpuPlacement[cpuIndex][1][2]
  );
  cpuPlayer.ownBoard.placeShip(
    cpuPlacement[cpuIndex][2][0],
    cpuPlacement[cpuIndex][2][1],
    cpuPlacement[cpuIndex][2][2]
  );
  cpuPlayer.ownBoard.placeShip(
    cpuPlacement[cpuIndex][3][0],
    cpuPlacement[cpuIndex][3][1],
    cpuPlacement[cpuIndex][3][2]
  );
  cpuPlayer.ownBoard.placeShip(
    cpuPlacement[cpuIndex][4][0],
    cpuPlacement[cpuIndex][4][1],
    cpuPlacement[cpuIndex][4][2]
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
    else displayWinner("Congratulations!", "You won");
  };

  const cpuAttack = function cpuAttack() {
    function generateRandomPoints() {
      const row = Math.floor(Math.random() * 10) + 1;
      const col = String.fromCharCode(
        Math.floor(Math.random() * (74 - 65 + 1)) + 65
      );
      return { col, row };
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
      return { col: randomPoint.col, row: randomPoint.row };
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
