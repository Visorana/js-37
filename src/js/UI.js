class UI {
  constructor(game, goblin) {
    this.game = game;
    this.goblin = goblin;
    this.fieldItems = document.querySelectorAll(".field-item");
    this.scoreElement = document.getElementById("score");
    this.missedElement = document.getElementById("missed");
    this.fieldItems.forEach((cell) => {
      cell.addEventListener("click", () => {
        this.onCellClick(cell);
      });
    });
  }

  onCellClick(cell) {
    if (cell.querySelector(".character-image")) {
      this.game.incrementScore();
      this.goblin.remove();
    } else {
      this.game.incrementMissedAttempts();
    }
  }

  updateScore(score) {
    this.scoreElement.textContent = `Score: ${score}`;
  }

  updateMissedAttempts(missed) {
    this.missedElement.textContent = `Missed Attempts: ${missed}`;
  }
}

export default UI;
