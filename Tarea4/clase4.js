// Array de figuras

//Dibujar todas con un for


//Animación

var figure = {x: 1550, y: 700, size: 50, color: '#83cdef'}

var velX = 5;
var velY = 5;
function drawKameha() {

  circle(figure)
  figure.x -= velX;
  figure.y -= velY;
 /* if(figure.x >= (canvas.width - figure.size) || figure.x < 0) {
    velX = -velX;
  }
  if(figure.y >= (canvas.height - figure.size) || figure.y < 0) {
    velY = -velY;
  }*/

  setTimeout(drawKameha, 1)
}

// setInterval(drawSquare, 1)

setTimeout(drawKameha, 1)
