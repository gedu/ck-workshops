import {measureFunction} from 'reassure';
import createRandomArray from './createRandomArray';
import findSingleNumber from "../../../src/firstPart/findSingleNumber";

describe("PERFORMANCE: findSingleNumber", () => {
    test("SIMPLE: 2,2,1", async () => {
        await measureFunction(() => findSingleNumber([2, 2, 1]));
    });
    test("SIMPLE: 4,1,2,1,2", async () => {
        await measureFunction(() => findSingleNumber([4, 1, 2, 1, 2]));
    });
    test("SIMPLE: 1", async () => {
        await measureFunction(() => findSingleNumber([1]));
    });
    test("SIMPLE: 1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,9", async () => {
        await measureFunction(() => findSingleNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 9]));
    });
    test("SIMPLE: 1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9", async () => {
        await measureFunction(() => findSingleNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
    });

    test("PERFORMANCE: 100", async () => {
        await measureFunction(() => findSingleNumber(createRandomArray(100)));
    });
    test("PERFORMANCE: 1000", async () => {
        await measureFunction(() => findSingleNumber(createRandomArray(1000)));
    });
    test("PERFORMANCE: 10000", async () => {
        await measureFunction(() => findSingleNumber(createRandomArray(10000)));
    });
});
