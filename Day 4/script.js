// first few prime numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101

function sumAllPrimes(num) {
    let sumPrimes = 0;
    
    for(let i = 2; i < num; i++) {
        for(let j = 2; j <= i; j++) {
            if(i === j) {
                sumPrimes+= i;
            }
            
            if(i % j === 0) {
                break;
            }
        }
    }

    return sumPrimes;
}

console.log(sumAllPrimes(3));
console.log(sumAllPrimes(13));
console.log(sumAllPrimes(33));
console.log(sumAllPrimes(77));
console.log(sumAllPrimes(100));