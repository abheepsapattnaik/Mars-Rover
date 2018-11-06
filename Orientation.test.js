import Orientation from "../src/Orientation";
import Plateau from "../src/Plateau";

describe('Orientation', () => {
  describe('for turn left', () => {
    it('should be W for N ', () => {
      const orientation = Orientation.createOrientation(1, 1, 'N');
      const expectedOrientation = Orientation.createOrientation(1, 1, 'W');
      expect(JSON.stringify(orientation.turnLeft())).toBe(JSON.stringify(expectedOrientation));
    });
  });
  describe('for turn right', () => {
    it('should be E for N ', () => {
      const orientation = Orientation.createOrientation(1, 1, 'N');
      const expectedOrientation = Orientation.createOrientation(1, 1, 'E');
      expect(JSON.stringify(orientation.turnRight())).toBe(JSON.stringify(expectedOrientation));
    });
  });
  describe('for unsafe territory ',  ()=> {
    it('should throw exception',  ()=> {
     const plateau = Plateau.limit(5,5);
      const orientation = Orientation.createOrientation(5, 6, 'N');
      expect(()=>orientation.move(plateau)).toThrowError("Rover not in safe zone");

    });
  });
});