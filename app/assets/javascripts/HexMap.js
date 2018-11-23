/*
class GameRenderer extends PIXI.WebGLRenderer {

    constructor() {
        super();
        this.stage = new PIXI.Container();
        this.gameMap = new PIXI.Graphics();
    }
}

GameRenderer.prototype.drawPixels = function() {
    var gr = this.gameMap;
    this.stage.removeChild(this.gameMap);
    //This clears previous image. May be ommited in special cases
    gr.clear();

    for( y coordinate... ) {
        for( x coordinate...) {
            if(something here) {
                gr.lineStyle(0, 0x0000FF, 1);
                gr.beginFill(PIXEL COLOR HERE, 1);
                gr.drawRect(x+20, y+20, 1, 1);
            }
        }
    }

    this.stage.addChild(this.gameMap);
};
*/