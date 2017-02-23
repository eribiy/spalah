// Code goes here

window.onload = function (e) {
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");

    /* ctx.fillRect(10, 10, 100, 100);
     ctx.clearRect(40, 40, 40, 40);
     ctx.strokeRect(45, 45, 30, 30);*/

   /* ctx.beginPath();
    ctx.arc(20, 20, 15, 0, Math.PI * 2, true);
    ctx.moveTo(75,20);
    ctx.arc(60, 20, 15, 0, Math.PI * 2, true);
    ctx.moveTo(40,80);
    ctx.lineTo(50, 80);
    ctx.lineTo(60, 90);*/

    /*ctx.beginPath();
    ctx.moveTo(10,10);
    ctx.lineTo(10,60);
    ctx.lineTo(60, 10);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(100,100);
    ctx.lineTo(100, 50);
    ctx.lineTo(50,100);
    ctx.closePath();
    ctx.fill();*/

    /*ctx.beginPath();
    ctx.arc(50,50,30,0,Math.PI*2,true);
    ctx.stroke();*/

   /* ctx.beginPath();
    ctx.quadraticCurveTo(25,25,25,62.5);
    ctx.quadraticCurveTo(25,120,50,100);
    ctx.quadraticCurveTo(50,120,30,125);*/

    ctx.setLineDash([4, 2]);


    ctx.stroke();




};