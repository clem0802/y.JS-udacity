/*------------------------*/ 
// I check code output on F12
(FUNCTION EXPRESSION)


/*------------------------*/ 
/*------------------------*/ (MOVIE)
// (anonymous function expression)
var filmFavori = function (name){
    return name + 75;
}
/*------------------------*/ 
// (named function expression)
var filmFavori = function filmWatch(name){
    return name + 75;
}
/*------------------------*/ 
// (to call the function)
filmFavori("19"); // 1975


/*------------------------*/ 
/*------------------------*/ (MEOW)
var catMeow = function(times){
    var catMsg = ""
    for(var i=0; i<times; i++){
      catMsg += " meow";
    }
    return catMsg;
}
function helloCat(callbackFunc){
    return `Hello:${callbackFunc(4)}`
}
helloCat(catMeow) // Hello: meow meow meow meow


/*------------------------*/ (LAUGH)
var laugh = function(times){
  var laughMsg = ""
  for(var i=0; i<times; i++){
    laughMsg += "ha"
  }
  return laughMsg + "!"
}
laugh(3) // hahaha!



/*------------------------*/ (CRY)
var cry = function crier(){
  return "boohoo!"
}
/*------------------------*/ // (to call the function)
cry(); // boohoo!