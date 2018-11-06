import Rover from '../src/Rover';
import Orientation from "../src/Orientation";

describe('Rover', function () {
  it('expect 5,3 E for 3,3 E with Plateau 5,5 and command MM ', () => {
    const rover = Rover.createRover(3, 3, 'E', 5, 5);
    const orientation = rover.operate("MM");
    const expectedOrientation = Orientation.createOrientation(5, 3, 'E');
    expect(JSON.stringify(orientation)).toBe(JSON.stringify(expectedOrientation));
  });
  it('expect 1,3 N for 1,2 N with Plateau 5,5 and command LMLMLMLMM ', () => {
    const rover = Rover.createRover(1, 2, 'N', 5, 5);
    const orientation = rover.operate("LMLMLMLMM");
    const expectedOrientation = Orientation.createOrientation(1, 3, 'N');
    expect(JSON.stringify(orientation)).toBe(JSON.stringify(expectedOrientation));
  });
  it('expect 5,1 E for 3,3 E with Plateau 5,5 and command MMRMMRMRRM ', () => {
    const rover = Rover.createRover(3, 3, 'E', 5, 5);
    const orientation = rover.operate("MMRMMRMRRM");
    const expectedOrientation = Orientation.createOrientation(5, 1, 'E');
    expect(JSON.stringify(orientation)).toBe(JSON.stringify(expectedOrientation));
  });
});