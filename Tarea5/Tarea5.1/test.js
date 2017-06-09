var squares = {x:0, y:0, width:30, height:30, color:'red'}
space = 10

for(ch=0; ch<(canvas.width/2/(squares.width + space)); ch++) {
rect(squares)
squares.x = squares.x + (squares.width + space)
}


/*var squaresb = {x:(canvas.width-30), y:0, width:30, height:30, color:'blue'}
rect(squaresb)

var squaresc = {x:(canvas.width-30), y:(canvas.height-30), width:30, height:30, color:'white'}
rect(squaresc)

var squaresc = {x:0, y:(canvas.height-30), width:30, height:30, color:'yellow'}
rect(squaresc)

var squaresb = {x:(canvas.width/2), y:(canvas.height/2), width:30, height:30, color:'blue'}
rect(squaresb)

var squaresb = {x:(canvas.width/2-15), y:(canvas.height/2-15), width:30, height:30, color:'white'}
rect(squaresb)
*/
