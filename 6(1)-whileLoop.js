var x = 1;
while (x <=20) {
    if (x%3 === 0 && x%5 === 0) {
        console.log("JuliaJames");
}
    else if (x%5 === 0) {
        console.log("James");
}
    else if (x%3 === 0){
        console.log("Julia");
}
    else {
        console.log(x);
}
    x=x+1;
}
// 1
// 2
// Julia
// 4
// James
// Julia
// 7
// 8
// Julia
// James
// 11
// Julia
// 13
// 14
// JuliaJames
// 16
// 17
// Julia
// 19
// James

/*----------------------------*/ (?? might crash the computer)
var num = 99;
while (num >=0) {
    // check value of num
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    // decrement num
    if(num > 2){
        sub = num -1
        console.log(`${num} bottles of juice on the wall! Take one down, now ${sub} botttles on the wall.`)
    } 
    else if(num == 2){
        sub = num -1
        console.log(`${num} bottles of juice on the wall! Take one down, now ${sub} botttle on the wall.`)
    }
    else if(num === 1){
        sub = num -1
        console.log(`${num} bottle of juice on the wall! Take one down, now ${sub} botttle on the wall.`)
    }
    num-=1
}


/*----------------------------*/ (NASA countdown)
var countdown = 8;
while(countdown >= 0){
    if(countdown === 5){
        console.log("Orbiter transfers from ground to internal power");
    } else if(countdown === 0){
        console.log(`Solid rocket booster ignition and liftoff!`)
    } else{
        console.log(`T-${countdown} seconds`);
    }
    countdown--;
}
// T-8 seconds
// T-7 seconds
// T-6 seconds
// Orbiter transfers from ground to internal power
// T-4 seconds
// T-3 seconds
// T-2 seconds
// T-1 seconds
// Solid rocket booster ignition and liftoff!
