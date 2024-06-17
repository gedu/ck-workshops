import transactions, { categoryTypes } from "../../src/secondPart/transactionData";
import findTopSpenders from "../../src/secondPart/findTopSpenders";

const result = {
    [categoryTypes.GROCERY]: { user: 'Peter', amount: 475 },
    [categoryTypes.ELECTRONICS]: { user: 'Bob', amount: 450 },
    [categoryTypes.CLOTHING]: { user: 'Ivy', amount: 500 }
  }
describe('CHECK: findTopSpenders', () => {

    test('SIMPLE: Top Spenders', () => {
        expect(findTopSpenders(transactions)).toEqual(result);
    });

});