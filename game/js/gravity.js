var canvas, ctx;

class MyFunGame {
    constructor() {
        this._frame = 0;
        this._canvasInitted = false;
        this._shapes = [];
		// this.InitCanvas();
		//this.Render();
    }
    InitCanvas() {
        this._canvasInitted = true;
        canvas = document.getElementById('theCanvas');
        ctx = canvas.getContext('2d');
        canvas.setAttribute('width', window.innerWidth);
        this.DropShapes();
       window.requestAnimationFrame(() => this.Render());
    }
	ClearCanvas() {
	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	}

    DropShapes() {
        if (this._shapes.length <= 0) window.requestAnimationFrame(() => this.Render());

        var howManyToDrop = getRandomInt(0,1);
        for (var xIt = 1; xIt <= howManyToDrop; xIt++) {
            var shape = new Circle(getRandomInt(1, parseInt(canvas.getAttribute('width'))), 0, randomColors(), randomNumFrom(0.15, 0.65), randomNumFrom(0.05, 1.45), randomNumFrom(2, 20));
            this._shapes.push(shape);
        }

        setTimeout(() => this.DropShapes(), getRandomInt(350, 950));

    }

    Render() {

        if (this._canvasInitted === true) {

            this._frame++;
            this._can_w = parseInt(canvas.getAttribute('width'));
            this._can_h = parseInt(canvas.getAttribute('height'));

            ctx.clearRect(0, 0, this._can_w, this._can_h);
            this.UpdateShapes();
            this.DrawShapes();
        }

        if (this._shapes.length > 0) window.requestAnimationFrame(() => this.Render());

    }



    DrawShapes() {
        this._shapes.forEach(function(shape) {
            // shape.Draw();
            shape.DrawT();
            shape.DrawR();
            shape.DrawS();
            shape.DrawU();
           
        }, this);
    }

    UpdateShapes() {
        this._shapes.forEach(function(shape) {
            shape.ApplyGravity();

        });

    }
}

class Shape {
    constructor(type, x, y, color, alpha, gravity) {
        //this._type = type;

        this._x = 300;
        this._y = 2;
        this._color = color;
       this._gravity = gravity;
        this._alpha = alpha;
    }

    get type() { return this._type }
    get x() {
        return this._x
    }
    get y() {
        return this._y
    }

    ApplyGravity() {
        this._y += this._gravity;

    }

}

class Circle extends Shape {
    constructor(x, y, color, alpha, gravity, radius) {
        super("circle", x, y, color, alpha, gravity);

        this._radius = radius;
    }

    DrawT() {
        ctx.setTransform(1, 0, 0, 1, this._x, this._y);
        ctx.beginPath();
        ctx.shapeName = 'traingle';
        ctx.moveTo(80, 0);
        ctx.lineTo(50, 50);
        ctx.lineTo(110, 50);
        ctx.fillStyle = "#FF1C0A";
        ctx.fill();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
    DrawR() {
        ctx.setTransform(0.6, 0, 0, 1, this._x, this._y);

        ctx.beginPath();
        ctx.shapeName = 'diamond';
        ctx.moveTo(37, 0);
        ctx.lineTo(75, 50);
        ctx.lineTo(37, 100);
        ctx.lineTo(0, 50);
        ctx.lineWidth = 0;
        ctx.fillStyle = "#00008B";
        ctx.strokeStyle = "#00008B";
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        

    }

    DrawS() {
        ctx.setTransform(1, 0, 0, 1, this._x, this._y);
        ctx.fillStyle = "#8A2BE2";
        ctx.shapeName = 'square';
        ctx.beginPath();
        ctx.arc(-100, -50, 30, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.setTransform(1, 0, 0, 1, 0, 0);

    }
    DrawU() {

        ctx.setTransform(1, 0, 0, 1, this._x, this._y);
        ctx.beginPath();
        ctx.rect(-200, -150, 50, 50);
        ctx.fillStyle = '#00FFFF';
        ctx.shapeName = 'circle';
        ctx.strokeStyle = "#FF1C0A";
        ctx.fill();
        ctx.stroke();
        ctx.setTransform(1, 0, 0, 1, 0, 0);

    }

}

function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min )+1)+ min;
}

function randomNumFrom(min, max) {
   return Math.random() * (max - min) + min;
}

function randomColors() {
    // return `${Math.round(randomNumFrom(0,255))},${Math.round(randomNumFrom(0,255))},${Math.round(randomNumFrom(0,255))}`
}

var myFunGame = new MyFunGame();
