// https://github.com/anumsh/Intro-To-Javascript-Quiz/blob/master/functions-quiz.txt
// (link for the LOOP answer from Thomas Sattlecker)
/*------------------------------*/
for ( START; STOP; STEP ) {
    // do this thing
  }


/*------------------------------*/
function laugh(num){
    var ha = "";
    for(var i=0; i<num; i++){
        ha += "ha";
        string = ha+"!"
    }
    return string;
}
console.log(laugh(5)) // hahahahaha!


/*------------------------------*/
for (var i = 0; i < 6; i = i + 1) {
console.log("I = " + i);
}
// I = 0
// I = 1
// I = 2
// I = 3
// I = 4
// I = 5


/*------------------------------*/ (Nested Loops)
for (var a=0; a<5; a++){
    for (var b=0; b<3; b++){
        console.log(`${a} with ${b}`);
    }
}
// 0 with 0
// 0 with 1
// 0 with 2
// 1 with 0
// 1 with 1
// 1 with 2
// 2 with 0
// 2 with 1
// 2 with 2
// 3 with 0
// 3 with 1
// 3 with 2
// 4 with 0
// 4 with 1
// 4 with 2

/*------------------------------*/ (Nested Loops / Theater Seats)
// 3 rows (0 to 2) a<3
// 4 seats (0 to 3 ) b<4
for (var a=0; a<3; a++){
    for (var b=0; b<4; b++){
        console.log(`${a}:${b}`);
    }
}
// 0:0
// 0:1
// 0:2
// 0:3
// 1:0
// 1:1
// 1:2
// 1:3
// 2:0
// 2:1
// 2:2
// 2:3

/*------------------------------*/ (while Loop) => (for Loop)
var x = 4;
while(x >= 1){
    console.log(`hello ${x}`);
    x-=1
}
// hello 4
// hello 3
// hello 2
// hello 1
/*-----------*/
for(var x=4; x>=1; x--){
    console.log(`hello ${x}`)
}
// hello 4
// hello 3
// hello 2
// hello 1



/*------------------------------*/
/*------------------------------*/ (FACTORIAL)
//  3! = 3 * 2 * 1 = 6
//  4! = 4 * 3 * 2 * 1 = 24
//  5! = 5 * 4 * 3 * 2 * 1 = 120

// A factorial is calculated by multiplying a number by all the numbers below it. 
// Ex: "3 factorial" is 3*2*1 = 6
// Save your final answer in a variable called "solution" and print it to the console. 

var solution = 1;
for(var x = 12; x > 1; x--){
    solution *= x;
}
console.log(solution); // 479001600


/*------------------------------*/
/*------------------------------*/ (build a Triangle)
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* -";
    }
    return line + "\n";
}
function buildTriangle(num) {
    var pattern = "";
    for (var i = 1; i <= num; i++) {
        pattern += makeLine(i);
    }
    return pattern;
}
console.log(buildTriangle(10));
// * -
// * -* -
// * -* -* -
// * -* -* -* -
// * -* -* -* -* -
// * -* -* -* -* -* -
// * -* -* -* -* -* -* -
// * -* -* -* -* -* -* -* -
// * -* -* -* -* -* -* -* -* -
// * -* -* -* -* -* -* -* -* -* -



/*------------------------------*/ (MORE and MORE)
function line(length){
    var bille = "°";
    for(var i=1; i<length; i++){
        bille += " °";
        // string = bille + "!"
    }
    return bille + "\n" 
}
function build(num){
    var triangle = "";
    for(var j=1; j<num; j++){
        triangle += line(j)
    }
    return triangle;
}
console.log(build(7)) 
// °
// ° °
// ° ° °
// ° ° ° °
// ° ° ° ° °
// ° ° ° ° ° °

/*------------------------------*/ (LESS and LESS)
// (cf) https://github.com/clem0802/W6-4-Loops/blob/main/3-project(thomas).js
function line(length){
    let icon = "";
    for (let i=1; i<length; i++){
        icon += "° "
    }
    return icon + "\n"
}
let lineNumbers = 6;
while(lineNumbers >= 0){
    console.log(line(lineNumbers));
    lineNumbers--;
}
// ° ° ° ° ° °
// ° ° ° ° ° 
// ° ° ° °
// ° ° ° 
// ° ° 
// °

/*--------------------*/ (WHILE => LOOP)
var x = 4;
while(x >= 1){
    console.log(`hello ${x}`);
    x-=1
}

for(var x=4; x>=1; x--){
    console.log(`hello ${x}`)
}