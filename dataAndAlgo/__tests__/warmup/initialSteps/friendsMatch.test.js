import {users, mainUser, result} from './friendsData';
import findMatchingFriends from '../../../src/firstPart/findMatchingFriends';


describe('CHECK: findMatchingFriends', () => {

    test('SIMPLE: Alice', () => {
        expect(findMatchingFriends(mainUser, users).sort()).toEqual(result.sort());
    });

});