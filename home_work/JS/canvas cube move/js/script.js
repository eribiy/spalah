// Code goes here

window.onload = function (e) {
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");

    // 1
    /*var x = 5, y = 25;
     var width = 50, height = 55;
     ctx.fillStyle = "red"
     ctx.fillRect(x, y, width, height);*/

    // 2
    //ctx.strokeStyle = "rgb(255, 50, 1)"
    /*ctx.lineWidth = 5
     ctx.strokeRect(x+15, y-5, width, height/2)*/
    var cube = {
        x: 0,
        y: 0,
        width: 30,
        height: 30,
        draw: function () {
            ctx.fillStyle = "red";
            ctx.fillRect(this.x, this.y, this.width, this.height)
        },
        move: function (direction) {
            switch (direction) {
                case "north" :
                    this.y -= 1;
                    break;
                case "east" :
                    this.x += 1;
                    break;
                case "south" :
                    this.y += 1;
                    break;
                case "west" :
                    this.x -= 1;

            }
        }
    };

    var field = {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height,
        draw: function () {
            ctx.clearRect(this.x, this.y, this.width, this.height)
        }
    };

    document.body.onkeypress = function (e) {
        console.log(e.keyCode);
        switch (e.keyCode) {
            case 119 :
                cube.move("north");
                break;
            case 97 :
                cube.move("west");
                break;
            case 115 :
                cube.move("south");
                break;
            case 100 :
                cube.move("east");
                break;
        }
    };

    function draw() {
        field.draw();
        cube.draw()
    }

    setInterval(draw, 1000)
};