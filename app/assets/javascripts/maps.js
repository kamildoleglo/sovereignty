// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/


document.addEventListener('turbolinks:load', function(){

    let canvas = document.getElementById('hexmap');

    const app = new PIXI.Application({ transparent: true, antialias: true, width: 720, height: 480 });
    const graphics = new PIXI.Graphics();

    const Hex = Honeycomb.extendHex({ size: 40,
        render(app, graphics) {
            const { x, y } = this.toPoint();
            const corners = this.corners().map(corner => corner.add({x, y}));

            // separate the first from the other corners
            const [firstCorner, ...otherCorners] = corners;

            // move the "pen" to the first corner
            graphics.moveTo(firstCorner.x, firstCorner.y);
            // draw lines to the other corners
            otherCorners.forEach(({ x, y }) => graphics.lineTo(x, y));
            // finish at the first corner
            graphics.lineTo(firstCorner.x, firstCorner.y);
            app.stage.addChild(graphics);
        },

        highlight(app, graphics) {
            graphics.beginFill("0xABCDEF");
            this.render(app, graphics);
            graphics.endFill();
        },

    });
    const Grid = Honeycomb.defineGrid(Hex);

    canvas.appendChild(app.view);

// set a line style of 1px wide and color #999
    graphics.lineStyle(1, 0x999999);


    const grid = Grid.rectangle({ width: 10, height: 10 });
    grid.forEach(hex => {
        hex.render(app, graphics);
    });


    canvas.addEventListener('click', ({ offsetX, offsetY }) => {
        const hexCoordinates = Grid.pointToHex([offsetX, offsetY]);
        const hex = grid.get(hexCoordinates);

        if (hex) {
            hex.highlight(app, graphics);
            console.log(hex.toPoint());
            console.log(hex.coordinates());
            App.game.send({ sent_by: $('#user_id').val(), coordinates: hex.coordinates() })

        }
    });

    canvas.addEventListener('mousemove', ({ offsetX, offsetY }) => {
        app.stage.removeChild(graphics);
        graphics.clear();
        graphics.lineStyle(1, 0x999999);
        grid.forEach(hex => {
            hex.render(app, graphics);
        });
        const hexCoordinates = Grid.pointToHex([offsetX, offsetY]);
        const hex = grid.get(hexCoordinates);
        if (hex) {
            hex.highlight(app, graphics)
        }
    });

    function renderSprites(spritesArray){

        console.log('here');
        graphics.lineStyle(2, 0x999999);
    }
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

function onClick(){
    console.log('here');
    graphics.lineStyle(2, 0x999999);
}