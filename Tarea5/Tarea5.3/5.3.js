/*var fig = {x:0, y:0, width:50, height:50, color:'blue'}

spacing = 10

for (counterv=0; counterv<(canvas.height/(fig.height + spacing)); counterv++){
  for(counterh=0; counterh<(canvas.width/(fig.width + spacing)); counterh++){
      rect(fig)
      fig.x = fig.x + (fig.width + spacing)
  }
  fig.y = fig.y + (fig.height + spacing)
  fig.x = 0
}*/

var squares = {x:0, y:(canvas.height-30), width:30, height:30, color:'green'}
space = 10

for (cv=0; cv<(canvas.height/(squares.height + space)); cv++){

  for(ch=0; ch<(canvas.width/(squares.width + space)); ch++) {
    if(ch>=cv){rect(squares)}
    squares.x = squares.x + (squares.width + space)
  }
  squares.y = squares.y - (squares.height + space)
  squares.x = 0
}

/*
for (cv=0; cv<(canvas.height/(squares.height + space)); cv++) {
  for(ch=0; ch<(canvas.width/(squares.width + space)); ch++) {
    rect(squares)
    squares.x = squares.x + (squares.width + space)
  }
  squares.y = squares.y + (squares.height + space)
  squares.x = 0

}*/
