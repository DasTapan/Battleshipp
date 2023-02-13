import shipFactory from "./ship";

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

const userPlacement = [
  [
    [{ col: "A", row: 9 }, { col: "E", row: 9 }, userACarrier],
    [{ col: "B", row: 3 }, { col: "B", row: 6 }, userCruiser],
    [{ col: "E", row: 5 }, { col: "E", row: 7 }, userSubmarine],
    [{ col: "G", row: 2 }, { col: "I", row: 2 }, userDestroyer],
    [{ col: "H", row: 10 }, { col: "I", row: 10 }, userPatrol],
  ],
  [
    [{ col: "C", row: 4 }, { col: "G", row: 4 }, userACarrier],
    [{ col: "B", row: 1 }, { col: "E", row: 1 }, userCruiser],
    [{ col: "B", row: 8 }, { col: "B", row: 10 }, userSubmarine],
    [{ col: "G", row: 2 }, { col: "I", row: 2 }, userDestroyer],
    [{ col: "J", row: 7 }, { col: "J", row: 8 }, userPatrol],
  ],
  [
    [{ col: "D", row: 1 }, { col: "H", row: 1 }, userACarrier],
    [{ col: "D", row: 4 }, { col: "D", row: 7 }, userCruiser],
    [{ col: "B", row: 8 }, { col: "B", row: 10 }, userSubmarine],
    [{ col: "H", row: 6 }, { col: "J", row: 6 }, userDestroyer],
    [{ col: "A", row: 2 }, { col: "A", row: 3 }, userPatrol],
  ],
  [
    [{ col: "D", row: 3 }, { col: "D", row: 7 }, userACarrier],
    [{ col: "F", row: 10 }, { col: "I", row: 10 }, userCruiser],
    [{ col: "A", row: 8 }, { col: "A", row: 10 }, userSubmarine],
    [{ col: "H", row: 1 }, { col: "J", row: 1 }, userDestroyer],
    [{ col: "F", row: 6 }, { col: "G", row: 6 }, userPatrol],
  ],
];

const cpuPlacement = [
  [
    [{ col: "J", row: 6 }, { col: "J", row: 10 }, cpuACarrier],
    [{ col: "B", row: 2 }, { col: "B", row: 5 }, cpuCruiser],
    [{ col: "E", row: 1 }, { col: "G", row: 1 }, cpuSubmarine],
    [{ col: "E", row: 8 }, { col: "E", row: 10 }, cpuDestroyer],
    [{ col: "F", row: 4 }, { col: "G", row: 4 }, cpuPatrol],
  ],
  [
    [{ col: "C", row: 10 }, { col: "G", row: 10 }, cpuACarrier],
    [{ col: "A", row: 1 }, { col: "D", row: 1 }, cpuCruiser],
    [{ col: "H", row: 2 }, { col: "J", row: 2 }, cpuSubmarine],
    [{ col: "F", row: 3 }, { col: "F", row: 5 }, cpuDestroyer],
    [{ col: "A", row: 7 }, { col: "A", row: 8 }, cpuPatrol],
  ],
  [
    [{ col: "B", row: 3 }, { col: "F", row: 3 }, cpuACarrier],
    [{ col: "D", row: 6 }, { col: "D", row: 9 }, cpuCruiser],
    [{ col: "H", row: 5 }, { col: "J", row: 5 }, cpuSubmarine],
    [{ col: "A", row: 6 }, { col: "A", row: 8 }, cpuDestroyer],
    [{ col: "I", row: 1 }, { col: "I", row: 2 }, cpuPatrol],
  ],
  [
    [{ col: "B", row: 3 }, { col: "B", row: 7 }, cpuACarrier],
    [{ col: "F", row: 3 }, { col: "F", row: 6 }, cpuCruiser],
    [{ col: "H", row: 9 }, { col: "J", row: 9 }, cpuSubmarine],
    [{ col: "C", row: 10 }, { col: "E", row: 10 }, cpuDestroyer],
    [{ col: "I", row: 1 }, { col: "I", row: 2 }, cpuPatrol],
  ],
];

export { userPlacement, cpuPlacement };
