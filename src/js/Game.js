import Goblin from "./Goblin";
import UI from "./UI";

class Game {
  constructor() {
    this.fieldSize = 4;
    this.totalCells = this.fieldSize * this.fieldSize;
    this.score = 0;
    this.missedAttempts = 0;
    this.ui = null;
    this.intervalId = null;
  }

  start() {
    this.createField();
    this.goblin = new Goblin();
    this.goblin.place();
    this.ui = new UI(this, this.goblin);
    this.intervalId = setInterval(() => {
      this.goblin.move();
    }, 1000);
  }

  createField() {
    const fieldContainer = document.querySelector(".field-container");
    for (let i = 0; i < this.totalCells; i++) {
      const cell = document.createElement("div");
      cell.classList.add("field-item");
      fieldContainer.appendChild(cell);
    }
  }

  incrementScore() {
    this.score++;
    this.ui.updateScore(this.score);
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      this.goblin.move();
    }, 1000);
  }

  incrementMissedAttempts() {
    this.missedAttempts++;
    this.ui.updateMissedAttempts(this.missedAttempts);
    if (this.missedAttempts >= 5) {
      alert("Game Over");
      location.reload();
    }
  }
}

export default Game;
