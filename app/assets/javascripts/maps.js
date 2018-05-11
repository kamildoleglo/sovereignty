// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require turbolinks
//= require_tree .

let hexagonAngle = 0.523598776, // 30 degrees in radians
    sideLength = 36,
    boardWidth = 10,
    boardHeight = 10,
    hexHeight = Math.sin(hexagonAngle) * sideLength,
    hexRadius = Math.cos(hexagonAngle) * sideLength,
    hexRectangleHeight = sideLength + 2 * hexHeight,
    hexRectangleWidth = 2 * hexRadius;

document.addEventListener('turbolinks:load', function(){

    let canvas = document.getElementById('hexmap');

    let ctx = null;
    if (!(ctx = canvas.getContext('2d'))) return;

    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "#CCCCCC";
    ctx.lineWidth = 1;

    drawBoard(ctx, boardWidth, boardHeight);

    canvas.addEventListener("mousemove", function(eventInfo) {
        let x = eventInfo.offsetX || eventInfo.layerX;
        let y = eventInfo.offsetY || eventInfo.layerY;


        let hexY = Math.floor(y / (hexHeight + sideLength));
        let hexX = Math.floor((x - (hexY % 2) * hexRadius) / hexRectangleWidth);

        let screenX = hexX * hexRectangleWidth + ((hexY % 2) * hexRadius);
        let screenY = hexY * (hexHeight + sideLength);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawBoard(ctx, boardWidth, boardHeight);

        // Check if the mouse's coords are on the board
        if(hexX >= 0 && hexX < boardWidth) {
            if(hexY >= 0 && hexY < boardHeight) {
                ctx.fillStyle = "#000000";
                drawHexagon(ctx, screenX, screenY, true);
            }
        }
    });
});


function drawBoard(canvasContext, width, height) {
    for(let i = 0; i < width; ++i) {
        for(let j = 0; j < height; ++j) {
            drawHexagon(
                canvasContext,
                i * hexRectangleWidth + ((j % 2) * hexRadius),
                j * (sideLength + hexHeight),
                false
            );
        }
    }
}

function drawHexagon(canvasContext, x, y, fill = false) {

    canvasContext.beginPath();
    canvasContext.moveTo(x + hexRadius, y);
    canvasContext.lineTo(x + hexRectangleWidth, y + hexHeight);
    canvasContext.lineTo(x + hexRectangleWidth, y + hexHeight + sideLength);
    canvasContext.lineTo(x + hexRadius, y + hexRectangleHeight);
    canvasContext.lineTo(x, y + sideLength + hexHeight);
    canvasContext.lineTo(x, y + hexHeight);
    canvasContext.closePath();

    if(fill) {
        canvasContext.fill();
    } else {
        canvasContext.stroke();
    }
}