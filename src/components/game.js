function gameLoop(playSession) {
  while (!playSession.isGameOver()) {
    playSession.cpuAttack();
  }
}

export default gameLoop;

console.log("har har");
console.log("khi khi");
