function gameLoop(playSession) {
  while (!playSession.isGameOver()) {
    playSession.cpuAttack();
  }
}

export default gameLoop;
