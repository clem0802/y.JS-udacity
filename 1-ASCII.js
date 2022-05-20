// Pick a string. Your string can have any number of characters.
var my_string = "a"; // 97
var my_string = "green"; // 103
var my_string = "Green"; // 71
var my_string = "blue"; // 98

// Calculate the ASCII value of the first character, i.e. the character at the position 0. 
var ASCII_value = my_string.charCodeAt(0);

// Let us print
console.log(ASCII_value); // 

/*------------------------------*/
var studentName = "John";
var haveEnrolledInCourse = true;
var haveCompletedTheCourse = false;

if (haveEnrolledInCourse){ 
    console.log("Welcome "+studentName+" to Udacity!"); // Will run only if haveEnrolledInCourse is true
}

/*------------------------------*/
// In general cases (regular equality check), 
// a true corresponds to number 1, whereas false represents a number 0.
if(1){
    console.log("This statement will always execute because conditional is set to 1 i.e., true");
}

if(0){
        console.log("This statement will NEVER execute because conditional is set to 0 i.e., false");
}