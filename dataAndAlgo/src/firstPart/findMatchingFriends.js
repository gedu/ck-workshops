/**
 * You are given a user's information and a list of other users. 
 * Each user has a unique ID and a list of friend IDs. 
 * Your task is to implement a function that finds and returns the names of all the friends 
 * of the given user.
 * ### Function Signature
 * 
 * function findMatchingFriends(mainUser, users)
 * 
 * ### Input
 * - mainUser: An object representing the main user. This object contains:
 *   - ID: A unique integer representing the user's ID.
 *   - friendIDs: An array of integers representing the IDs of the user's friends.
 * - users: An array of objects where each object represents a user. Each user object contains:
 *   - ID: A unique integer representing the user's ID.
 *   - name: A string representing the user's name.
 * 
 * ### Output
 * - An array of strings representing the names of the friends of the main user.
 * 
 * ### Example
 * #### Input:
 * 
 * const mainUser = {
 *     ID: 1,
 *     friendIDs: [2, 3, 4]
 * };
 * 
 * const users = [
 *     { ID: 2, name: 'Alice' },
 *     { ID: 3, name: 'Bob' },
 *     { ID: 4, name: 'Charlie' },
 *     { ID: 5, name: 'David' }
 * ];
 * 
 * #### Output:
 * 
 * findMatchingFriends(mainUser, users);
 * // Output: ['Alice', 'Bob', 'Charlie']
 * 
 * ### Explanation
 * In this example, the main user has friends with IDs 2, 3, and 4. 
 * The function should find the user objects corresponding to these IDs from the users array 
 * and return their names in an array. 
 * Since users with IDs 2, 3, and 4 have names 'Alice', 'Bob', and 'Charlie' respectively, 
 * the output is ['Alice', 'Bob', 'Charlie']
 */
function findMatchingFriends(mainUser, users) {
    
    return [];
}

export default findMatchingFriends;