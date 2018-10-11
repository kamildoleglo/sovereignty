// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/


document.addEventListener('turbolinks:load', function(){

    let canvas = document.getElementById('hexmap');
    let map = new HexMap(canvas, 10, 10);

    canvas.addEventListener("mousemove", function(eventInfo) {
        let x = eventInfo.offsetX || eventInfo.layerX;
        let y = eventInfo.offsetY || eventInfo.layerY;


        let hexY = Math.floor(y / (map.hexHeight + map.sideLength));
        let hexX = Math.floor((x - (hexY % 2) * map.hexRadius) / map.hexRectangleWidth);

        let screenX = hexX * map.hexRectangleWidth + ((hexY % 2) * map.hexRadius);
        let screenY = hexY * (map.hexHeight + map.sideLength);

        map.clear();
        map.drawBoard();

        // Check if the mouse's coords are on the board
        if(hexX >= 0 && hexX < map.boardWidth) {
            if(hexY >= 0 && hexY < map.boardHeight) {
                //map.ctx.globalAlpha = 0.5; 0 - invisible, 1 - visible
                map.drawHexagon(screenX, screenY, true);
            }
        }
    });
    /*

    canvas.addEventListener("mousedown", function(eventInfo) {
        let x = eventInfo.offsetX || eventInfo.layerX;
        let y = eventInfo.offsetY || eventInfo.layerY;


        let hexY = Math.floor(y / (hexHeight + sideLength));
        let hexX = Math.floor((x - (hexY % 2) * hexRadius) / hexRectangleWidth);

        let screenX = hexX * hexRectangleWidth + ((hexY % 2) * hexRadius);
        let screenY = hexY * (hexHeight + sideLength);

        // Check if the mouse's coords are on the board
        if(hexX >= 0 && hexX < boardWidth) {
            if(hexY >= 0 && hexY < boardHeight) {
                App.game.send({ sent_by: "Paul", screen_x: screenX, screen_y: screenY })
                drawHexagon(ctx, screenX, screenY, true);
            }
        }
    });*/
});

