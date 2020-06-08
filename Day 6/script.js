function makeArrayConsecutive(nums) {
    let count = 0;

    const sortedNums = nums.sort((a, b) => a - b);

    const min = sortedNums[0];
    const max = sortedNums[sortedNums.length - 1];

    for (let i = min; i < max; i++) {
        if (!sortedNums.includes(i)) count++;
    }

    return count;
}

console.log(makeArrayConsecutive([4, 1, 9, 7, 2, 6]));
console.log(makeArrayConsecutive([1, 2, 3, 5, 6, 8, 9]));
console.log(makeArrayConsecutive([22, 15, 11, 8, 13, 18]));