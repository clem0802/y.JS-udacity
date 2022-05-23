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

/*----------------------------*/ 
var num = 99;
while (num >=0 && num <= 99) {
    // check value of num
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    // decrement num
    if(num > 2){
        sub = num -1
        console.log(`${num} bottles of juice. Take one down, now ${sub} botttles now.`)
    } 
    else if(num == 2){
        sub = num -1
        console.log(`${num} bottles of juice. Take one down, now ${sub} botttle now.`)
    }
    else if(num === 1){
        sub = num -1
        console.log(`${num} bottle of juice. Take one down, now ${sub} botttle now.`)
    }
    num-=1
}


/*----------------------------*/ (NASA countdown)
var countdown = 8;
while(countdown >= 0){
    if(countdown === 5){
        console.log("Orbiter transfers from ground to internal power");
    } else if(countdown === 0){
        console.log(`Rocket booster ignition: liftoff!`)
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
// Rocket booster ignition: liftoff!
