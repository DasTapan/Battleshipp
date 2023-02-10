import gameBoardFactory from "./gameBoard";

const humanPlayerFactory = (name) => {
  const ownBoard = gameBoardFactory();
  const validTurn = true;
  return { name, ownBoard, validTurn };
};

const cpuPlayerFactory = () => {
  const ownBoard = gameBoardFactory();
  const validTurn = false;
  return { name: "CPU", ownBoard, validTurn };
};

export { humanPlayerFactory, cpuPlayerFactory };
