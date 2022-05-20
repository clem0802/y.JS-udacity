/*--------------------------*/
if(option === 1) {
    console.log("option1")
} else if(option === 2) {
    console.log("option2")
} else if(option === 3) {
    console.log("option3")
} else if(option === 4) {
    console.log("option4")
} else if(option === 5) {
    console.log("option5")
} else if(option === 6) {
    console.log("option6")
}

/*--------------------------*/
var option = 3;
switch (option){
    case 1:
        console.log("option1")
        break;
    case 2: 
        console.log("option2")
        break;
    case 3: 
        console.log("option3")
        break;
    case 4: 
        console.log("option4")
        break;
    case 5: 
        console.log("option5")
        break;
    case 6: 
        console.log("option6")
        break;
}

/*--------------------------*/
var month = 2;
switch(month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    days = 28;
}
console.log(`There are ${days} days in this month.`)
console.log("There are " + days + " days in this month.");


/*--------------------------*/
var prize = "";
var winner = ""
switch (winner) {
  case 1:
    prize += "a trip for two to the Bahamas and ";
  case 2:
    prize += "a four piece furniture set.";
    break;
  case 3:
    prize += "a smartwatch and ";
  default:
    prize += "tickets to the circus.";
}
console.log("You've won " + prize);
// You've won tickets to the circus. => because winner number not defined


/*--------------------------*/
var salary = "";
var education = "no high school diploma";
switch(education){
    case "a high school diploma": 
    salary = 35256;
    break;
    case "an Associate's degree": 
    salary = 41496;
    break;
    case "a Bachelor's degree": 
    salary = 59124;
    break;
    case "a Master's degree": 
    salary = 69732;
    break;
    case "a Professional degree": 
    salary = 89960;
    break;
    case "a Doctoral degree": 
    salary = 84396;
    break;
    default: salary = 25636;
}
console.log(`In 2015, a person with ${education} earned an average of $${salary.toLocaleString("en-US")}/year.`);
// In 2015, a person with no high school diploma earned an average of $25,636/year.