function filtraImpares(arr) {
    return arr.filter(callback)
}

function callback(item) {
    return item % 2 === 1;
}

const myArray = [1, 33, 65, 80, 4, 9]

console.log(filtraImpares(myArray));
