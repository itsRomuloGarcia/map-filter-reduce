function multNumeros(arr) {
    return arr.reduce(function (prev, current) {
        console.log({ prev });
        console.log({ current });
        return prev * current;
    });
}

const arr = [9, 111];

console.log(multNumeros(arr));

