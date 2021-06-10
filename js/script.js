//--------------------ES1----------------------
// var vet =[21,2,34,543,4,90,87,54,26,64,75,3,22,35];
// var vet2;
// var min;
// var max;

// console.log(vet.length);
// do{
//      min = parseInt(prompt("inserisci un numero : ")); 
// }
// while(min >= vet.length || min < 0);
// console.log("il valore min è corretto");
// do{
//     max = parseInt(prompt("inserisci un altro numero : "));
// }
// while(max >= vet.length || max < 0);
// console.log("il valore max è corretto");

// var x;
// if(min > max){ scambio di valore 
//     x = min;
//     min = max; 
//     max = x;
// }


// vet2 = nVet(vet,min,max);
// console.log(min);
// console.log(max);
// console.log(vet2);
// function nVet(array,minimo,massimo){
//     var k = [];
//     for(var i=minimo;i<=massimo;i++){
//         k.push(array[i]);
//     }
//     return k;
// }



//--------------------ES2----------------------

// var str1 = prompt("inserisci una parola : ");
// var str2 = prompt("inseriscine un'altra  : ");

// console.log(str1);
// console.log(str2);
 
// var risultato =  lunghezza(str1 , str2);

// console.log(risultato);

// ---------------functions-------------

// function lunghezza(p1 , p2){
//     if(p1.length > p2.length)
//     {
//         console.log("la parola piu lunga è " + p1);
//         return p1;
//     }
//     else if(p1.length < p2.length){
//             console.log("la parola piu lunga è " + p2);
//             return p2;
//         }
//         else{
//             console.log("le parole " + p1 + " e " + p2 + " hanno la stessa lunghezza");
//             return p1+" "+p2;
//         }
// }

//--------------------ES3----------------------
var vet1 = ["a","b","c"];
var vet2 =[1,2,3];

var vet3 = merge(vet1 , vet2);
console.log(vet3);


function merge(lettere , numeri){
    var array = [];
    for(var i=0 ; i<3 ; i++ ){
        array.push(numeri[i]);
        array.push(lettere[i]);
    }
    return array;
}