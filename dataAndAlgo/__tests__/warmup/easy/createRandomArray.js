function createRandomArray(size) {
    let nums = [];
    for (let i = 0; i <= size; i++) {
        nums.push(i);
        nums.push(i);
    }
    nums.push(size + 1);
    return nums;
}

export default createRandomArray;