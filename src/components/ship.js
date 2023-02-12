const shipFactory = (length, hitsTaken, name) => ({
  name,
  startPos: {},
  endPos: {},
  length,
  hitsTaken,
  showShip(boardClass) {
    if (this.startPos.row === this.endPos.row) {
      let unicode = this.startPos.col.charCodeAt(0);
      for (let i = length; i > 0; i--) {
        const cell = document.querySelector(
          `.${boardClass} > .${String.fromCharCode(unicode)}-${
            this.startPos.row
          }`
        );
        cell.classList.add("occupied");
        unicode += 1;
      }
    }
    if (this.startPos.col === this.endPos.col) {
      for (let i = length; i > 0; i--) {
        const cell = document.querySelector(
          `.${boardClass} > .${this.startPos.col}-${this.startPos.row}`
        );
        cell.classList.add("occupied");
        this.startPos.row += 1;
      }
    }
  },
  hit() {
    this.hitsTaken += 1;
  },
  isSunk() {
    if (this.hitsTaken === this.length) return true;
    return false;
  },
});

export default shipFactory;
