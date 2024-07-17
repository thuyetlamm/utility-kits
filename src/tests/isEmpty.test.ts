// Assuming isEmpty is defined in a file named isEmpty.ts
import { isEmpty } from "../index";

describe('isEmpty function', () => {
    it('should return true for an empty string', () => {
        expect(isEmpty('')).toBe(true);
    });

    it('should return true for an empty array', () => {
        expect(isEmpty([])).toBe(true);
    });

    it('should return true for an empty object', () => {
        expect(isEmpty({})).toBe(true);
    });

    it('should return false for a non-empty string', () => {
        expect(isEmpty('hello')).toBe(false);
    });

    it('should return false for a non-empty array', () => {
        expect(isEmpty([1, 2, 3])).toBe(false);
    });

    it('should return false for a non-empty object', () => {
        expect(isEmpty({ name: 'John', age: 30 })).toBe(false);
    });

    it('should handle null and undefined values', () => {
        expect(isEmpty(null)).toBe(true);
        expect(isEmpty(undefined)).toBe(true);
    });
});