var runner = "Kendyll";
var position = 2;
var medal;

if(position === 1) {
  medal = "gold";
} else if(position === 2) {
  medal = "silver";
} else if(position === 3) {
  medal = "bronze";
} else {
  medal = "pat on the back";
}

console.log(runner + " received a " + medal + " medal.");

/*---------------------------------*/
var musicians = 1;
if (musicians <= 0) {
    console.log("not a group");
} else if (musicians === 1) {
    console.log("solo");
    } else if (musicians === 2) {
        console.log("duet");
        } else if (musicians === 3) {
            console.log("trio");
           } else if (musicians === 4) {
                console.log("quartet");
                } else if (musicians > 4) {
                    console.log("this is a large group");
                } 

/*---------------------------------*/
var balance = 325.00;
var checkBalance = true;
var isActive = false;

if(checkBalance){
    if(isActive && balance>0){
        console.log("Your balance is $" + balance + ".")
    } else if (!isActive){
        console.log("Your account is no longer active.")
    } else if (balance === 0){
        console.log("Your account is empty.")
    } else {
        console.log("Your balance is negative. Please contact bank.")
    }
} else {
    console.log("Thank you. Have a nice day!")
}

/*---------------------------------*/
var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";
if ((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts")) {
    console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}`);
}

/*---------------------------------*/
// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
// Size	 Width	 Length	  Sleeve
// S	    18"	    28"	    8.13"
// M	    20"   	29"	    8.38"
// L    	22"	    30"	    8.63"
// XL	    24"	    31"	    8.88"
// 2XL	  26"	    33"	    9.63"
// 3XL	  28"	    34"	    10.13"

var shirtWidth = 18;
var shirtLength = 29;
var shirtSleeve = 8.47;

if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
    console.log("S");
 }  else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
     console.log("M");
 }  else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
     console.log("L");
 }  else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) {
     console.log("XL");
 }  else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) {
     console.log("2XL");
 }  else if (shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.13) {
     console.log("3XL");
 }  else {
     console.log("NA");
 } // NA

