import Orientation from "./Orientation";
import Plateau from "./Plateau";

const LEFT = "L";
const RIGHT = "R";
const MOVE = "M";

//Robot sent by NASA
export default class Rover {

  constructor(_orientation, _plateau) {
    this._orientation = _orientation;
    this._plateau = _plateau;
    this._operate = {
      [LEFT]: (rover)=>{
       return  rover._turnLeft()
      },
      [RIGHT]: (rover)=>{
       return  rover._turnRight()
      },
      [MOVE]: (rover)=>{
        return rover._move(rover._plateau);
      }
    };
  }

  static createRover(xCoordinate, yCoordinate, direction, xLimit, yLimit) {
    return new Rover(Orientation.createOrientation(xCoordinate, yCoordinate, direction), Plateau.limit(xLimit, yLimit));
  }

  _turnLeft() {
    return this._orientation.turnLeft();
  }

  _turnRight() {
    return this._orientation.turnRight();
  }

  _move(plateau) {
    return this._orientation.move(plateau);
  }

  operate(command) {
    for (let i = 0; i < command.length; i++) {
      this._orientation = this._operate[command.charAt(i)](this);
    }
    return this._orientation;
  }

}