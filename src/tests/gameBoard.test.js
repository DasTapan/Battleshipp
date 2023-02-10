import gameBoardFactory from "../components/gameBoard";
import shipFactory from "../components/ship";

test("placing ship", () => {
  const gameBoard = gameBoardFactory();
  const ship1 = shipFactory(4, 0, "Cruiser");
  // horizontal ship
  gameBoard.placeShip({ col: "F", row: 5 }, { col: "J", row: 5 }, ship1);
  expect(ship1.startPos.col).toBe("F");
  expect(ship1.startPos.row).toBe(5);
  expect(ship1.endPos.col).toBe("J");
  expect(ship1.endPos.row).toBe(5);

  const ship2 = shipFactory(5, 0, "Aircraft Carrier");
  // vertical ship
  gameBoard.placeShip({ col: "I", row: 8 }, { col: "I", row: 10 }, ship2);
  expect(ship2.startPos.col).toBe("I");
  expect(ship2.startPos.row).toBe(8);
  expect(ship2.endPos.col).toBe("I");
  expect(ship2.endPos.row).toBe(10);
});

test("registers hits", () => {
  const gameBoard = gameBoardFactory();
  const ship1 = shipFactory(5, 0, "Aircraft Carrier");
  gameBoard.placeShip({ col: "D", row: 4 }, { col: "D", row: 8 }, ship1);

  expect(gameBoard.recieveAttack({ col: "D", row: 4 }).isAttacked).toBe(true);
  expect(ship1.hitsTaken).toBe(1);

  expect(gameBoard.recieveAttack({ col: "D", row: 5 }).isAttacked).toBe(true);
  expect(ship1.hitsTaken).toBe(2);

  expect(gameBoard.recieveAttack({ col: "D", row: 8 }).isAttacked).toBe(true);

  expect(gameBoard.recieveAttack({ col: "D", row: 2 }).isAttacked).toBe(false);
  expect(ship1.hitsTaken).toBe(3);

  expect(gameBoard.recieveAttack({ col: "D", row: 9 }).isAttacked).toBe(false);
  expect(ship1.hitsTaken).toBe(3);

  const ship2 = shipFactory(4, 0, "Cruiser");
  gameBoard.placeShip({ col: "C", row: 8 }, { col: "F", row: 8 }, ship2);

  expect(gameBoard.recieveAttack({ col: "C", row: 8 }).isAttacked).toBe(true);
  expect(ship2.hitsTaken).toBe(1);

  expect(gameBoard.recieveAttack({ col: "D", row: 8 }).isAttacked).toBe(true);
  expect(ship2.hitsTaken).toBe(2);

  expect(gameBoard.recieveAttack({ col: "A", row: 8 }).isAttacked).toBe(false);
  expect(ship2.hitsTaken).toBe(2);

  expect(gameBoard.recieveAttack({ col: "E", row: 8 }).isAttacked).toBe(true);
  expect(gameBoard.recieveAttack({ col: "F", row: 8 }).isAttacked).toBe(true);
  expect(gameBoard.recieveAttack({ col: "H", row: 8 }).isAttacked).toBe(false);
});

test("registers miss", () => {
  const gameBoard = gameBoardFactory();

  const ship1 = shipFactory(4, 0, "Cruiser");
  gameBoard.placeShip({ col: "B", row: 3 }, { col: "B", row: 6 }, ship1);

  const ship2 = shipFactory(5, 0, "Aircraft Carrier");
  gameBoard.placeShip({ col: "A", row: 9 }, { col: "E", row: 9 }, ship2);

  const ship3 = shipFactory(2, 0, "Patrol");
  gameBoard.placeShip({ col: "H", row: 10 }, { col: "I", row: 10 }, ship3);

  gameBoard.recieveAttack({ col: "B", row: 2 });
  gameBoard.recieveAttack({ col: "A", row: 5 });
  gameBoard.recieveAttack({ col: "A", row: 8 });
  gameBoard.recieveAttack({ col: "B", row: 10 });
  gameBoard.recieveAttack({ col: "D", row: 5 });
  gameBoard.recieveAttack({ col: "F", row: 4 });
  gameBoard.recieveAttack({ col: "G", row: 10 });

  expect(gameBoard.missHits).toEqual(
    expect.arrayContaining([{ col: "B", row: 2 }])
  );
  expect(gameBoard.missHits).toEqual(
    expect.arrayContaining([{ col: "A", row: 5 }])
  );
  expect(gameBoard.missHits).toEqual(
    expect.arrayContaining([{ col: "A", row: 8 }])
  );
  expect(gameBoard.missHits).toEqual(
    expect.arrayContaining([{ col: "B", row: 10 }])
  );
  expect(gameBoard.missHits).toEqual(
    expect.arrayContaining([{ col: "D", row: 5 }])
  );
  expect(gameBoard.missHits).toEqual(
    expect.arrayContaining([{ col: "F", row: 4 }])
  );
  expect(gameBoard.missHits).toEqual(
    expect.arrayContaining([{ col: "G", row: 10 }])
  );

  expect(gameBoard.missHits).toEqual(
    expect.not.arrayContaining([{ col: "B", row: 5 }])
  );
  expect(gameBoard.missHits).toEqual(
    expect.not.arrayContaining([{ col: "B", row: 9 }])
  );
  expect(gameBoard.missHits).toEqual(
    expect.not.arrayContaining([{ col: "I", row: 10 }])
  );
});

test("all ships sunk", () => {
  const gameBoard = gameBoardFactory();
  const patrolShip = shipFactory(2, 0, "Patrol");
  gameBoard.placeShip({ col: "H", row: 10 }, { col: "I", row: 10 }, patrolShip);
  const cruiserShip = shipFactory(4, 0, "Cruiser");
  gameBoard.placeShip({ col: "B", row: 3 }, { col: "B", row: 6 }, cruiserShip);
  const airCraftCarrier = shipFactory(5, 0, "Aircraft Carrier");
  gameBoard.placeShip(
    { col: "A", row: 9 },
    { col: "E", row: 9 },
    airCraftCarrier
  );
  gameBoard.recieveAttack({ col: "B", row: 3 });
  gameBoard.recieveAttack({ col: "C", row: 3 });
  gameBoard.recieveAttack({ col: "B", row: 2 });
  gameBoard.recieveAttack({ col: "B", row: 4 });
  gameBoard.recieveAttack({ col: "B", row: 5 });
  gameBoard.recieveAttack({ col: "B", row: 6 });

  expect(gameBoard.allShipSunk()).toBe(false);

  gameBoard.recieveAttack({ col: "A", row: 8 });
  gameBoard.recieveAttack({ col: "A", row: 9 });
  gameBoard.recieveAttack({ col: "A", row: 10 });
  gameBoard.recieveAttack({ col: "B", row: 9 });
  gameBoard.recieveAttack({ col: "C", row: 9 });
  gameBoard.recieveAttack({ col: "D", row: 9 });
  gameBoard.recieveAttack({ col: "E", row: 9 });

  expect(gameBoard.allShipSunk()).toBe(false);

  gameBoard.recieveAttack({ col: "H", row: 10 });
  gameBoard.recieveAttack({ col: "I", row: 10 });

  expect(gameBoard.allShipSunk()).toBe(true);
});

test("record all attacks", () => {
  const gameBoard = gameBoardFactory();

  gameBoard.recieveAttack({ col: "D", row: 2 });
  gameBoard.recieveAttack({ col: "D", row: 3 });
  gameBoard.recieveAttack({ col: "H", row: 5 });
  gameBoard.recieveAttack({ col: "J", row: 5 });
  gameBoard.recieveAttack({ col: "A", row: 9 });

  expect(gameBoard.attackAttempts).toEqual([
    { col: "D", row: 2 },
    { col: "D", row: 3 },
    { col: "H", row: 5 },
    { col: "J", row: 5 },
    { col: "A", row: 9 },
  ]);
});
