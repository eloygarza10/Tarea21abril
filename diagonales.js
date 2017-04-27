function Ceros(veces){
/*var veces = 10;*/
if(veces <= 0) {console.log("Numero Incorrecto") }
else {
for (i=1; i<veces; i++){
  var stars = '';
  for (j=1; j<veces; j++){
    if (i==j){stars += '0'}
    else {stars += '*'}
  }
  console.log(stars)
}
}
}
Ceros(-10)
