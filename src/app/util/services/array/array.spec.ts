/**
 * Created by mmichieli on 04/02/2018.
 */
import { ArrayService } from "./array.service";
import {} from 'jasmine';

describe('ArrayService', () => {
  let service: ArrayService;
  let array:any[];

  beforeEach(() => {
    service = new ArrayService();
    array = [1, 2, 3, 4, 5];
  });

  it('should have method inArray()', () => {
    expect(service.inArray).toBeDefined();
  });

  describe('which', () => {

     it('should return false if array is null', () => {
       expect(service.inArray(17, null)).toBeFalsy();
     });

     it('should return false if value is null', () => {
       expect(service.inArray(null, array)).toBeFalsy();
     });

     it('should return false if value is not in array', () => {
       expect(service.inArray(17, array)).toBeFalsy();
     });

     it('should return true if value is in array', () => {
       expect(service.inArray(4, array)).toBeTruthy();
     });

  });

});
