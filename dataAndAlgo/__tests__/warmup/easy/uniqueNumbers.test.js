import findSingleNumber from '../../../src/firstPart/findSingleNumber';
import createRandomArray  from './createRandomArray';
/**
 * 
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 * Example 1:
 * Input: nums = [2,2,1]
 * Output: 1
 * 
 * Example 2:
 * Input: nums = [4,1,2,1,2]
 * Output: 4
 * 
 * Example 3:
 * Input: nums = [1]
 * Output: 1 
 */


describe("CHECK: findSingleNumber", () => {
    test("SIMPLE", () => {
        expect(findSingleNumber([2, 2, 1])).toBe(1);
        expect(findSingleNumber([4, 1, 2, 1, 2])).toBe(4);
        expect(findSingleNumber([1])).toBe(1);
        expect(findSingleNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 9])).toBe(8);
        expect(findSingleNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(0);

    });

    test("COMPLEX", () => {
        expect(findSingleNumber(createRandomArray(100))).toBe(101);
        expect(findSingleNumber(createRandomArray(1000))).toBe(1001);
        expect(findSingleNumber(createRandomArray(10000))).toBe(10001);
    });
});


