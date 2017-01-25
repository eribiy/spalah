// Code goes here

window.onload = function (e) {
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");


    var cube = {
        x: 100,
        y: 0,
        width: 20,
        height: 20,
        draw: function () {
            ctx.fillStyle = "red";
            ctx.fillRect(this.x, this.y, this.width, this.height)
        },
        move: function (direction) {
            switch (direction) {
                case "east" :
                    this.x += 20;
                    break;
                case "south" :
                    this.y += 20;
                    break;
                case "west" :
                    this.x -= 20;

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
        //console.log(e.keyCode);
        switch (e.keyCode) {
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

    document.body.onkeypress = function (e) {
        //console.log(e.keyCode);
        switch (e.keyCode) {
            case 97 :
                cube.move("west");
                break;
            case 115 :
                for
                setInterval(cube.move("south"), 1000);
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

    setInterval(draw, 50);
};