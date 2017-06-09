document.body.style.cursor = "crosshair";

var audio = document.createElement('audio');
  canvas.id = "audio";
  audio.src = "shot.mp3";
  audio.load();

  var circleone = { x:(canvas.width/2-15), y:(canvas.height/2-15), size: 300, color:'red'}
  circle(circleone)

  var circletwo = { x:(canvas.width/2-15), y:(canvas.height/2-15), size: 250, color:'white'}
  circle(circletwo)

  var circletwo = { x:(canvas.width/2-15), y:(canvas.height/2-15), size: 200, color:'red'}
  circle(circletwo)

  var circletwo = { x:(canvas.width/2-15), y:(canvas.height/2-15), size: 150, color:'white'}
  circle(circletwo)

  var circletwo = { x:(canvas.width/2-15), y:(canvas.height/2-15), size: 100, color:'red'}
  circle(circletwo)

  var circletwo = { x:(canvas.width/2-15), y:(canvas.height/2-15), size: 50, color:'white'}
  circle(circletwo)


var shotImage = new Image();
  shotImage.src = 'disparo.png';
  canvas.addEventListener('mousedown', mouseDown)



function  mouseDown(ev) {

  audio.pause();
  audio.currentTime = 0
  audio.play();

  context.drawImage(shotImage, ev.clientX - 50, ev.clientY - 43)

}
