class Goblin {
  constructor() {
    this.fieldItems = document.querySelectorAll(".field-item");
    this.characterImage = document.createElement("img");
    this.characterImage.classList.add("character-image");
    this.position = Math.floor(Math.random() * this.fieldItems.length);
  }

  place() {
    this.fieldItems[this.position].appendChild(this.characterImage);
  }

  move() {
    const newPosition = this.getRandomPosition();
    this.fieldItems[this.position].innerHTML = "";
    this.fieldItems[newPosition].appendChild(this.characterImage);
    this.position = newPosition;
  }

  remove() {
    this.fieldItems[this.position].innerHTML = "";
  }

  getRandomPosition() {
    let newPosition;
    do {
      newPosition = Math.floor(Math.random() * this.fieldItems.length);
    } while (newPosition === this.position);
    return newPosition;
  }
}

export default Goblin;
