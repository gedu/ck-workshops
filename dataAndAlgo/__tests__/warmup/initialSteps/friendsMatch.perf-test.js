import {measureFunction} from 'reassure';
import {users, mainUser} from './friendsData';
import findMatchingFriends from '../../../src/firstPart/findMatchingFriends';

describe("PERFORMANCE: findMatchingFriends", () => {
    test("SIMPLE", async () => {
        await measureFunction(() => findMatchingFriends(mainUser, users));
    });
});