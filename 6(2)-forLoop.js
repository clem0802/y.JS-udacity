/*------------------------------*/
for ( START; STOP; STEP ) {
    // do this thing
  }


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
var x = 9;
while(x >= 1){
    console.log(`hello ${x}`);
    x-=1
}


for(var x=9; x>=1; x--){
    console.log(`hello ${x}`)
}


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



