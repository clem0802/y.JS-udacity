/*--------------------------------------*/
// check output on F12 (INSPECT)


/*--------------------------------------*/ (SPLICE)
var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts.splice(1, 1, "APPLE"); // from [1] to [1] taken off, and + "APPLE"
console.log(donuts); // ['glazed', 'APPLE', 'Boston creme', 'glazed cruller']


var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts.splice(1, 1, "APPLE", "Lemon", "BANANA"); // at [1] takes off 1 elem, and + ("APPLE", "LEMON", "BANANA")
console.log(donuts); // ['glazed', 'APPLE', 'Lemon', 'BANANA', 'Boston creme', 'glazed cruller']


/*--------------------------------------*/ (SPLICE)
var letters = ["A", "B", "C", "D", "E"];
letters.splice(-2, 0, "F", "G" ); // from [-2], takes off 0 elem
console.log(letters); // ['A', 'B', 'C', 'F', 'G', 'D', 'E']


var letters = ["A", "B", "C", "D", "E"];
letters.splice(1, 3, "F", "G" ); // [1-3] CUT OFF, + ("F", "G")
console.log(letters); // ['A', 'F', 'G', 'E']


/*--------------------------------------*/ (SPLICE)
var rainbow = ["Red", "Orange", "Blackberry", "Blue"];
rainbow.splice(2, 1, "Yellow", "Green"); // from [2], takes off 1 elem
console.log(rainbow); // ['Red', 'Orange', 'Yellow', 'Green', 'Blue']
rainbow.splice(5, 0,"Purple") // at [5] takes off 0 elem
console.log(rainbow); // ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple']