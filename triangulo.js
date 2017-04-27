var stars = '*';
var veces = 10;

  for (i=1; i<veces; i++){
    console.log(stars);
    stars += '*';
  }

  /* reversa*/

var veces = 10;
for (j=veces; j>1; j--){
  var stars = '*';
  for (i=1; i<j; i++){
    stars += '*';
  }
  console.log(stars)
}
