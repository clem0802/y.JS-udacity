/*--------------------------*/
/*--------------------------*/ FALSY values
false
null (type)
undefined (type)
0
"" (empty string)
NaN 


/*--------------------------*/
/*--------------------------*/ TRUTHY values
true
42
"pizza"
"0"
"null"
"undefined"
{}
[]


/*--------------------------*/
/*--------------------------*/
var eatsPlants = false;
var eatsAnimals = true;
var category = eatsPlants ?  (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : undefined);
console.log(category); // carnivore