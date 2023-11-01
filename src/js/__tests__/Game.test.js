import Game from "../Game";

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  test('initial score should be 0', () => {
    expect(game.score).toBe(0);
  });

  test('initial missed attempts should be 0', () => {
    expect(game.missedAttempts).toBe(0);
  });
});
