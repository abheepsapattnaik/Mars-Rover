//Point of 2 axis
export default class Coordinate {
  constructor(xCoordinate, yCoordinate) {
    this._xCoordinate = xCoordinate;
    this._yCoordinate = yCoordinate;
  }

  static createCoordinate(x, y) {
    return new Coordinate(x, y);
  }

  safePosition(limit) {
    return this._xCoordinate <= limit._xCoordinate && this._yCoordinate <= limit._yCoordinate;
  }

  isValid() {
    return this._yCoordinate >= 0 && this._xCoordinate >= 0;
  }

  moveNorth() {
    return new Coordinate(this._xCoordinate, this._yCoordinate + 1);
  }

  moveSouth() {
    return new Coordinate(this._xCoordinate, this._yCoordinate - 1);
  }

  moveEast() {
    return new Coordinate(this._xCoordinate + 1, this._yCoordinate);
  }

  moveWest() {
    return new Coordinate(this._xCoordinate - 1, this._yCoordinate);
  }

}