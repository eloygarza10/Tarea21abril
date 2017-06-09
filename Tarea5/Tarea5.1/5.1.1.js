var fig = {x:0, y:0, width:20, height:20, color:'red'}

spacing = 10
myCanvasWidth = Math.ceil((canvas.width/(fig.width + spacing)))
myCanvasHeight = Math.ceil((canvas.height/(fig.height + spacing)))

canvasArea = myCanvasWidth * myCanvasHeight

for(contador=0; contador<=canvasArea; contador++){

    if(fig.x >= canvas.width){
      fig.y = fig.y + (fig.height + spacing)
      fig.x = 0
    }

    rect(fig)
    fig.x = fig.x + (fig.width + spacing)
}
