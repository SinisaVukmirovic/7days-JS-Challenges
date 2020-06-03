let strings = ['abc', 'def'];
console.log(strings);

function addBorder(array) {
    for (let i = 0; i < array.length; i++) {
        const sideBrick = '*';
        array[i] = sideBrick.concat(array[i], sideBrick);
    }

    const wall = '*'.repeat(array[0].length);
    console.log(wall);

    array.unshift(wall);
    array.push(wall);

    return array;
}

addBorder(strings);
console.log(strings);