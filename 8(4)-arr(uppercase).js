/*--------------------------------------*/
// check output on F12 (INSPECT)

var donuts = ["jelly donut hole", "chocolate donut hole", "glazed donut hole"]
for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}
console.log(donuts); 
// ['JELLY DONUT HOLE HOLE', 'CHOCOLATE DONUT HOLE HOLE', 'GLAZED DONUT HOLE HOLE']