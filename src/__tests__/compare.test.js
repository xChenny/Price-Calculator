import * as compare from '../compare'

describe('Testing compare.js module', () => {

  describe('Testing equals func', () => {

    it('arg1 is undefined', () => {
      const obj = {
        foo: [1,2]
      }
      expect(compare.equals(obj.doo, obj.foo)).toBeTruthy();
    })

    it('arg1 and arg2 are arrays', () => {
      const arg1 = [1,2,3,4];
      const arg2 = 2;
      expect(compare.equals(arg1, arg2)).toBeTruthy();
    })

    it('arg1 and arg2 are arrays, but 2 is not a subarray', () => {
      const arg1 = [1,2,3,4];
      const arg2 = 5;
      expect(compare.equals(arg1, arg2)).toBeFalsy();
    })

    it('arg1 and arg2 are not an arrays', () => {
      const arg1 = 'hello';
      const arg2 = 'hello';
      expect(compare.equals(arg1, arg2)).toBeTruthy();
    })

  })

})