function firstDuplicate(nums) {
    const firstDuplicateOccurance = {};

    for (let num of nums) {
        if (firstDuplicateOccurance.hasOwnProperty(num)) {
            return num;
        }
        firstDuplicateOccurance[num] = null;
    }

    return -1;
}

console.log(firstDuplicate([1, 2, 3, 4, 5, 4, 3, 2, 1]));
console.log(firstDuplicate([3, 6, 8, 2, 4, 1, 2, 8, 4, 0, 3]));
// works for strings too
console.log(firstDuplicate(['Mario', 'Luigi', 'Silvio', 'Tony', 'Silvio', 'Mario', 'Polly']));