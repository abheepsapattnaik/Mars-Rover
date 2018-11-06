import Coordinates from "./Coordinates";
import Plateau from "./Plateau";

export const NORTH = "N";
export const SOUTH = "S";
export const WEST = "W";
export const EAST = "E";

const LEFT = {
  [NORTH]: "W",
  [WEST]: "S",
  [SOUTH]: "E",
  [EAST]: "N"
};

const RIGHT = {
  [NORTH]: "E",
  [WEST]: "N",
  [SOUTH]: "W",
  [EAST]: "S"
};

//State of a point
export default class Orientation {

  constructor(_position, _direction) {
    this._position = _position;
    this._direction = _direction;
    this._move = {
      [NORTH]: this._position.moveNorth(),
      [WEST]: this._position.moveWest(),
      [SOUTH]: this._position.moveSouth(),
      [EAST]: this._position.moveEast(),
    };
  }

  static createOrientation(xCoordinate, yCoordinate, direction) {
    const coordinate = Coordinates.createCoordinate(xCoordinate, yCoordinate);
    return new Orientation(coordinate, direction);
  }

  turnLeft() {
    return new Orientation(this._position, LEFT[this._direction]);
  }

  turnRight() {
    return new Orientation(this._position, RIGHT[this._direction]);
  }

  move(plateau) {
    const updatedCoordinate = this._move[this._direction];
    if (!plateau.isSafe(updatedCoordinate)) {
      throw new Error("Rover not in safe zone");
    }
    return new Orientation(updatedCoordinate, this._direction);
  }

}