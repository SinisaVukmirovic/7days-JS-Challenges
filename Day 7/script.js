function properNounCorrection(str) {
    const capLet = str.slice(0, 1).toUpperCase();
    // or
    // const capLet = str[0].toUpperCase();

    const afterCap = str.slice(1,str.length).toLowerCase();

    return capLet.concat(afterCap);
}

console.log(properNounCorrection('MaRiA'));
console.log(properNounCorrection('bARceLonA'));