import Plateau from '../src/Plateau';
import Coordinates from '../src/Coordinates';

describe('Plateau', () => {
  describe('is safe ', () => {
    it('is safe to move for x = 1, y =1', () => {
      const plateau = Plateau.limit(3, 4);
      const position = Coordinates.createCoordinate(1, 1);
      expect(plateau.isSafe(position)).toBeTruthy();
    });
    it('is not safe to move for x = 4, y =1', () => {
      const plateau = Plateau.limit(3, 4);
      const position = Coordinates.createCoordinate(4, 1);
      expect(plateau.isSafe(position)).toBeFalsy();
    });
    it('is not safe to move for x = -1 y =1', () => {
      const plateau = Plateau.limit(3, 4);
      const position = Coordinates.createCoordinate(-1, 1);
      expect(plateau.isSafe(position)).toBeFalsy();
    });
  });
});