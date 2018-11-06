import Coordinates from './Coordinates';

//Rectangular place on MARS
export default class Plateau {

  constructor(_limit) {
    this._limit = _limit;
  }

  static limit(xCoordinate, yCoordinate) {
    return new Plateau(Coordinates.createCoordinate(xCoordinate, yCoordinate));
  }

  isSafe(position) {
    return position.isValid() && this._limit.isValid() && position.safePosition(this._limit);
  }

}
