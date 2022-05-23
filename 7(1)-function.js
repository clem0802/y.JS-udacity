/*------------------------*/
function add(x, y){
    var sum = x + y;
    return sum; // return statement
}
var sum = add(1, 2) // call the function
console.log(sum); // 3


/*------------------------*/
// Declare a function called laugh() that returns "hahahahahahahahahaha!".
// Print the value returned from the laugh() function to the console.
function laugh(num){
    var ha = "";
    for(var i=0; i<num; i++){
        ha+="ha";
        string=ha+"!"
    }
    return string;
}
console.log(laugh(10)) // hahahahahahahahahaha!


/*------------------------*/
var bookTitle = "Le petit"
console.log(bookTitle);

function displayBook(){
    var bookTitle = "The little"
    console.log(bookTitle)
}
displayBook()
console.log(bookTitle)
// Le petit 
// The little 
// Le petit 


/*------------------------*/
// x and y are PARAMETERS of this function
// 5 and 9 are ARGUMENTS passed into this function
function findAverage(x, y) {
  var answer = (x + y) / 2;
  return answer;
}
var avg = findAverage(5, 9); 
console.log(avg); // 7


/*------------------------*/
/*------------------------*/
// (1) the global var x is assigned value 1
// the addTwo() function increments the var by 2
// next, the var is incremented by 1
// finally it is printed out 4 in console.log()
var x = 1;
function addTwo() {
  x = x + 2;
}
addTwo();
x = x + 1;
console.log(x); // 4


// (2) the global var x is incremented by 1
// the global var's original value was 1, then ++, so it is 2 in console.log()
// the addTwo() function has no effect outside the fuction
var x = 1;
function addTwo() {
  var x = x + 2;
}
addTwo();
x = x + 1;
console.log(x); // 2







