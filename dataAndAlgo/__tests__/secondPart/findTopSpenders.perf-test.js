import {measureFunction} from 'reassure';
import transactions from '../../src/secondPart/transactionData';
import findTopSpenders from '../../src/secondPart/findTopSpenders';

describe("PERFORMANCE: findTopSpenders", () => {
    test("<FUNCTION>", async () => {
        await measureFunction(() => findTopSpenders(transactions));
    });
});