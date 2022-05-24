/*--------------------------------------*/
// check output on F12 (INSPECT)
// forEach => 3 PARAMETERS


/*--------------------------------------*/ (forEach) => template
function test(element, index, array){
    console.log("Element: " + element);
    console.log("Index: " + index);
    console.log("Array: " + array)
}
myArray.forEach(test);


/*--------------------------------------*/ (forEach)
var fruits = ["apple", "orange", "banana", "lemon", "cherry"]
function printFruits(fruit){ // only 1 PARAMETER, the "element"
    fruit += " juice";
    fruit = fruit.toUpperCase();
    console.log(fruit)
}
fruits.forEach(printFruits);
// APPLE JUICE
// ORANGE JUICE
// BANANA JUICE
// LEMON JUICE
// CHERRY JUICE

/*--------------------------------------*/ (forEach) => (inline function expression)
var fruits = ["apple", "orange", "banana", "lemon", "cherry"];
fruits.forEach(function(fruit){ // only 1 PARAMETER, the "element"
    fruit += " juice";
    fruit = fruit.toUpperCase();
    console.log(fruit);
});
// APPLE JUICE
// ORANGE JUICE
// BANANA JUICE
// LEMON JUICE
// CHERRY JUICE


/*--------------------------------------*/ (forEach)
words = ["cat", "and", "dog"];
words.forEach(function(elem, index, arr) {
  console.log(`Word [${index}] in "${arr.toString()}" is ${elem.toUpperCase()}`);
});
// Word [0] in "cat,and,dog" is CAT
// Word [1] in "cat,and,dog" is AND
// Word (2] in "cat,and,dog" is DOG