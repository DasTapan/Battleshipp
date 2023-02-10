function switchTurn(attacker) {
  // eslint-disable-next-line no-param-reassign
  attacker.validTurn = !attacker.validTurn;
}

const session = (user, cpu) => {
  const humanPlayer = user;
  const cpuPlayer = cpu;

  const isGameOver = function isGameOver() {
    if (humanPlayer.ownBoard.allShipSunk() || cpuPlayer.ownBoard.allShipSunk())
      return true;
    return false;
  };

  const humanAttack = function humanAttack(point) {
    if (humanPlayer.validTurn === true) {
      cpuPlayer.ownBoard.recieveAttack(point);
      switchTurn(humanPlayer);
      switchTurn(cpuPlayer);
    }
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
      humanPlayer.ownBoard.recieveAttack(getRandomPoints());
      switchTurn(cpuPlayer);
      switchTurn(humanPlayer);
    }
  };

  return { humanPlayer, cpuPlayer, humanAttack, cpuAttack, isGameOver };
};

export default session;
