//--------------------ES1----------------------
var vet =[21,2,34,543,4,90,87,54,26,64,75,3,22,35];
var vet2;
var min;
var max;

console.log(vet.length);
do{
     min = parseInt(prompt("inserisci un numero : ")); 
}
while(min >= vet.length || min < 0);
console.log("il valore min è corretto");
do{
    max = parseInt(prompt("inserisci un altro numero : "));
}
while(max >= vet.length || max < 0);
console.log("il valore max è corretto");

var x;
if(min > max){ //scambio di valore 
    x = min;
    min = max; 
    max = x;
}


vet2 = nVet(vet,min,max);
// console.log(min);
// console.log(max);
console.log(vet2);
function nVet(array,minimo,massimo){
    var k = [];
    for(var i=minimo;i<=massimo;i++){
        k.push(array[i]);
    }
    return k;
}