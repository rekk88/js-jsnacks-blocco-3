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
