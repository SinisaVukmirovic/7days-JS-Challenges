function evenDigitsOnly(number) {
    const digits = number.toString().split('');
    console.log(digits);

    return digits.every(digit => parseInt(digit) % 2 === 0);
}

console.log(evenDigitsOnly(2244));
console.log(evenDigitsOnly(2468));
console.log(evenDigitsOnly(1234));
console.log(evenDigitsOnly(8653));
console.log(evenDigitsOnly(8422));