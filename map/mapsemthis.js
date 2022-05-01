function mapSemThis(arr) {
    return arr.map(function (item) {
        return item * 3;
    });
}

const nums = [1, 3, 5, 7, 9];

console.log(mapSemThis(nums));

console.log(nums);