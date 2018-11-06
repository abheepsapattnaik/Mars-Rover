import Rover from "./Rover";

const rover = Rover.createRover(process.argv[4],process.argv[5],process.argv[6],process.argv[2],process.argv[3]);
const result = rover.operate(process.argv[7]);
console.log(result._position._xCoordinate +" "+result._position._yCoordinate +" "+result._direction);