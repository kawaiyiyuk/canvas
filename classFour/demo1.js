let Draw  = class {
    constructor(){};
    //创建图像
    createImg () {
        let canvas = document.getElementById('myCanvas');
        let ctx = canvas.getContext('2d');
        let img = new Image();
        img.onload = function () {
            ctx.drawImage(img,0,0)
        }
        img.src = './1.png'
    }
    createLineImg () {
        let canvas = document.getElementById('myCanvas2');
        let ctx = canvas.getContext('2d');

        let img = new Image();
        img.onload = function () {
            ctx.drawImage(img,0,0);
            ctx.beginPath();
            ctx.moveTo(30,96);
            ctx.lineTo(70,66);
            ctx.lineTo(103,76);
            ctx.lineTo(170,15);
            ctx.stroke();
        }

        img.src = './1.png'
    }


}

let ctxDraw = new Draw();
ctxDraw.createImg();
ctxDraw.createLineImg();


