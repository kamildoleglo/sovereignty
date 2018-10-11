class HexMap {

    constructor(canvas, boardWidth, boardHeight){
        this.canvas = canvas;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.ctx = canvas.getContext('2d');
        this.ctx.fillStyle = "#000000";
        this.ctx.strokeStyle = "#CCCCCC";
        this.ctx.lineWidth = 1;
        this.hexagonAngle = 0.523598776; // 30 degrees in radians
        this.sideLength = 36;
        this.hexHeight = Math.sin(this.hexagonAngle) * this.sideLength;
        this.hexRadius = Math.cos(this.hexagonAngle) * this.sideLength;
        this.hexRectangleHeight = this.sideLength + 2 * this.hexHeight;
        this.hexRectangleWidth = 2 * this.hexRadius;

        this.drawBoard();
    }


    drawBoard() {
        for(let i = 0; i < this.boardWidth; i++) {
            for(let j = 0; j < this.boardHeight; j++) {
                this.drawHexagon(
                    i * this.hexRectangleWidth + ((j % 2) * this.hexRadius),
                    j * (this.sideLength + this.hexHeight)
                );
            }
        }
    }

    drawHexagon(x, y, fill = false) {

        this.ctx.beginPath();
        this.ctx.moveTo(x + this.hexRadius, y);
        this.ctx.lineTo(x + this.hexRectangleWidth, y + this.hexHeight);
        this.ctx.lineTo(x + this.hexRectangleWidth, y + this.hexHeight + this.sideLength);
        this.ctx.lineTo(x + this.hexRadius, y + this.hexRectangleHeight);
        this.ctx.lineTo(x, y + this.sideLength + this.hexHeight);
        this.ctx.lineTo(x, y + this.hexHeight);
        this.ctx.closePath();

        if (fill)
            this.ctx.fill();
        else
            this.ctx.stroke();
    }

    clear(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}