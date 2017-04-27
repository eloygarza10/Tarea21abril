function Triangle(veces) {
var stars = '*';
/*var veces = 10;*/
if(veces <= 0) {console.log("Numero Incorrecto") }
else {
  for (i=1; i<veces; i++){
    console.log(stars);
    stars += '*';
  }
     }
  }
Triangle (-10)

  /*reversa*/
function Reversa(veces){
if (veces <= 0) {console.log("NumeroIncorrectoR")}
else {
/*var veces = 5;*/
for (j=veces; j>1; j--){
  var stars = '*';
  for (i=1; i<j; i++){
    stars += '*';
  }
  console.log(stars)
}
}
}
Reversa(-10)
