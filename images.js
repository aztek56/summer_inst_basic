var myGamePiece;

function startGame() {
    myGamePiece = new component(30, 30, "smiley.gif", 10, 120, "image");
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos(myGameArea.canvas.width, myGameArea.canvas.height);
    myGamePiece.update();
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function(canvasWidth, canvasHeight) {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.type == "image") {
            if (this.x >= canvasWidth - (this.width/2) || this.x <= 0) {
                //TODO: make the image bounce back when reaching the edges
            }
            if (this.y >= canvasHeight - (this.height/2) || this.y <= 0) {
                //TODO: make the image bounce back when reaching the edges
            }
        }
    }
}

function moveup() {
    myGamePiece.speedY -= 1;
}

function movedown() {
    //TODO: implement the move down functionality
}

function moveleft() {
    //TODO: implement the move left functionality
}

function moveright() {
    myGamePiece.speedX += 1;
}