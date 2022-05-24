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
words = ["one", "cat", "and", "one", "dog"];
words.forEach(function(elem, index, arr) {
  console.log(`Word [${index}] in "${arr.toString()}" is ${elem.toUpperCase()}`);
});
// Word [0] in "one,cat,and,one,dog" is ONE
// Word [1] in "one,cat,and,one,dog" is CAT
// Word [2] in "one,cat,and,one,dog" is AND
// Word [3] in "one,cat,and,one,dog" is ONE
// Word [4] in "one,cat,and,one,dog" is DOG


/*--------------------------------------*/ (forEach)(+100)=>(1)
var test = [12, 3, 66, 48, 14, 99, 47];
test.forEach(function(elem, index){
    if(elem % 3 === 0){
        test.splice(index,1,100)
    }
})
console.log(test) // [100, 100, 100, 100, 14, 100, 47]

/*--------------------------------------*/ (forEach)(+100)=>(2)
var test = [12, 3, 66, 48, 14, 99, 47];
// test.forEach(function(elem, index){
//     if(elem % 3 === 0){
//         elem += 100
//         test.splice(index,1,elem)
//     }
// })
console.log(test) // [112, 103, 166, 148, 14, 199, 47]

/*--------------------------------------*/ (forEach)(+100)=>(3)
var test = [12, 3, 66, 48, 14, 99, 47];
var newTest = test.map(function(elem){
    if(elem % 3 === 0)
    return elem += 100
})
console.log(newTest) // [112, 103, 166, 148, undefined, 199, undefined]