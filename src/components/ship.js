const shipFactory = (length, hitsTaken, name) => ({
  name,
  startPos: {},
  endPos: {},
  length,
  hitsTaken,
  hit() {
    this.hitsTaken += 1;
  },
  isSunk() {
    if (this.hitsTaken === this.length) return true;
    return false;
  },
});

export default shipFactory;
