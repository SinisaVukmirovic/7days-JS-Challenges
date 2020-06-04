function addTwoDigits(num)  {
    const digits = num.toString().split('');

    return digits.reduce((sum, value) => {
        return parseInt(sum) + parseInt(value);
    }, 0);
}

console.log(addTwoDigits(11));
console.log(addTwoDigits(22));
console.log(addTwoDigits(33));
console.log(addTwoDigits(57));
console.log(addTwoDigits(94));
// solution is scalable
console.log(addTwoDigits(12345));