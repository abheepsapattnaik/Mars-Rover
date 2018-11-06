import Coordinate from '../src/Coordinates'

describe('Coordinates', () => {
  describe('is valid', () => {
    describe('in plateau territory', () => {
      it('expects to be true for x = 0, y = 1', () => {
        const coordinate = Coordinate.createCoordinate(0, 1);
        expect(coordinate.isValid()).toBeTruthy;
      });
      it('expects to be false for x = -1, y = 1', () => {
        const coordinate = Coordinate.createCoordinate(-1, 1);
        expect(coordinate.isValid()).toBeFalsy();
      });
    });
    describe('outside plateau ', function () {
      it('expects to be false for x = 1, y = -1', () => {
        const coordinate = Coordinate.createCoordinate(1, -1);
        expect(coordinate.isValid()).toBeFalsy();
      });
      it('expects to be true for x = -1, y = -1', () => {
        const coordinate = Coordinate.createCoordinate(-1, -1);
        expect(coordinate.isValid()).toBeFalsy();
      });
    });

  });
});