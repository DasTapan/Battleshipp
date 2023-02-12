const gameBoardFactory = () => ({
  attackAttempts: [],
  missHits: [],
  fleet: [],
  allShipSunk() {
    return this.fleet.every((ship) => ship.isSunk() === true);
  },
  getClassName(point) {
    return `${point.col}-${point.row}`;
  },
  showShips(boardClass) {
    this.fleet.forEach((ship) => {
      ship.showShip(boardClass);
    });
  },
  getOccupiedGrids(ship) {
    const allPoints = [];
    const colOne = ship.startPos.col;
    const colTwo = ship.endPos.col;
    const rowOne = ship.startPos.row;
    const rowTwo = ship.endPos.row;
    if (colOne === colTwo) {
      for (let i = rowOne; i <= rowTwo; i++) {
        allPoints.push({ col: colOne, row: i });
      }
    }
    if (rowOne === rowTwo) {
      for (let i = colOne.charCodeAt(0); i <= colTwo.charCodeAt(0); i++) {
        allPoints.push({ col: String.fromCharCode(i), row: rowOne });
      }
    }
    return allPoints;
  },
  evaluateAttack(attackedGrid) {
    let signal = false;
    this.fleet.forEach((ship) => {
      const allPoints = this.getOccupiedGrids(ship);
      allPoints.forEach((point) => {
        if (attackedGrid.col === point.col && attackedGrid.row === point.row)
          signal = true;
      });
    });
    return signal;
  },
  identifyShip(attackedGrid) {
    let attackedShip = null;
    this.fleet.forEach((ship) => {
      const allPoints = this.getOccupiedGrids(ship);
      allPoints.forEach((point) => {
        if (attackedGrid.col === point.col && attackedGrid.row === point.row)
          attackedShip = { ...ship };
      });
    });
    return attackedShip;
  },
  sendHitFunction(shipHit) {
    const shipName = shipHit.name;
    this.fleet.forEach((ship) => {
      if (ship.name === shipName) ship.hit();
    });
  },
  placeShip(startPos, endPos, ship) {
    // eslint-disable-next-line no-param-reassign
    ship.startPos.col = startPos.col;
    // eslint-disable-next-line no-param-reassign
    ship.startPos.row = startPos.row;
    // eslint-disable-next-line no-param-reassign
    ship.endPos.col = endPos.col;
    // eslint-disable-next-line no-param-reassign
    ship.endPos.row = endPos.row;
    this.fleet.push(ship);
  },
  recieveAttack(point) {
    this.attackAttempts.push(point);
    if (!this.evaluateAttack(point)) {
      this.missHits.push(point);
      return {
        isAttacked: false,
        ship: null,
      };
    }
    const shipHit = this.identifyShip(point);
    this.sendHitFunction(shipHit);
    return {
      isAttacked: true,
      ship: shipHit,
    };
  },
});

export default gameBoardFactory;
