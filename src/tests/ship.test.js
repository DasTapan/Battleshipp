import shipFactory from "../components/ship";

test("hit() registering", () => {
  const ship = shipFactory(4, 0, "Cruiser");
  ship.hit();
  expect(ship.hitsTaken).toBe(1);
});

test("determine sinking", () => {
  const ship1 = shipFactory(3, 2, "Submarine");
  ship1.hit();
  expect(ship1.isSunk()).toBe(true);

  const ship2 = shipFactory(3, 1, "Destroyer");
  ship2.hit();
  expect(ship2.isSunk()).toBe(false);
});
