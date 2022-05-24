/*--------------------------------------*/ (map)
var arr = [1, 2, 3, 4, 5]
var newArr = arr.map(function(elem) {
    elem += 100;
    return elem;
})
console.log(newArr); // [101, 102, 103, 104, 105]

/*--------------------------------------*/ (map)
var fruits = ["apple", "orange", "banana", "lemon", "cherry"];
fruits.map(function(fruit){ // only 1 PARAMETER, the "element"
    fruit += " juice";
    fruit = fruit.toUpperCase();
    return fruit;
});
// ['APPLE JUICE', 'ORANGE JUICE', 'BANANA JUICE', 'LEMON JUICE', 'CHERRY JUICE']

/*--------------------------------------*/ (map) 
var bills = [
    50.23, 19.12, 34.01,
    12.15, 39.90, 29.11, 12.99,
];

var totals = bills.map(function(bill){
    bill = bill + (bill * 0.15)
    bill = bill.toFixed(2)
    return Number(bill)
})
console.log(totals) // [57.76, 21.99, 39.11, 13.97, 45.88, 33.48, 14.94]

/*--------------------------------------*/ (map) (row-column)
var numbers = [
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 424],
]
for(let row=0; row<numbers.length; row++){
    for(let col=0; col<numbers[row].length; col++){
        if(numbers[row][col] % 2 === 0){
            numbers[row][col] = "even";
        } else {
            numbers[row][col] = "odd";
        }
    }
}
console.log(numbers);
// [0]: (10) ["even", "even", "odd", "even", "odd", "odd", "even", "odd", "odd", "odd"]
// [1]: (10) ["odd", "odd", "even", "odd", "odd", "even", "odd", "odd", "odd", "even"]
