var x = 10;

for (i=1; i<x; i++){
  var str1 = '';
  for (j=1; j<x; j++){
    if (i==j){str1 += '0'}
    else {str1 += '*'}
  }
  console.log(str1)
}
