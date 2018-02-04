/**
 * Created by mmichieli on 04/02/2018.
 */
import {} from 'jasmine';
import {RegexService} from "./regex.service";

describe('RegexService', () => {
  let service: RegexService;

  beforeEach(() => {
    service = new RegexService();
  });

  it('should have method checkDecimalNumber()', () => {
    expect(service.isDecimalOrNegative).toBeDefined();
  });

  describe('which', () => {

    it('should return false if method has no param ', () => {
      expect(service.isDecimalOrNegative()).toBeFalsy();
    });

    it('should return false if number is null', () => {
      expect(service.isDecimalOrNegative(null)).toBeFalsy();
    });

    it('should return false if number is not decimal and not negative', () => {
      expect(service.isDecimalOrNegative(10)).toBeFalsy();
    });

    it('should return true if number is negative', () => {
      expect(service.isDecimalOrNegative(-10)).toBeTruthy();
    });

    it('should return true if number is decimal', () => {
      expect(service.isDecimalOrNegative(10.5)).toBeTruthy();
    });

    it('should return true if number is decimal and negative', () => {
      expect(service.isDecimalOrNegative(-10.5)).toBeTruthy();
    });

  });

});
