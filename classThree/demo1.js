let Draw  = class {
    constructor(){};
    //fillText  相当于实心填充

    fillTextDraw () {
        let canvas = document.getElementById('myCanvas');
        let ctx = canvas.getContext('2d');

        ctx.font = "28px serif";
        ctx.fillText("Hello world",10,30)
    }

    //strokeText  相当于空心填充
    strokeTextDraw () {
        let canvas = document.getElementById('myCanvas2');
        let ctx = canvas.getContext('2d');

        ctx.font = "28px serif";
        ctx.strokeText("Hello world",10,30)
    }
    //measureText()  预测量文本宽度
    measureDraw () {
        let canvas = document.getElementById('myCanvas2');
        let ctx = canvas.getContext('2d');

        let text = ctx.measureText('foo');
        console.log(text.width)
    }
}

let ctxDraw = new Draw();

ctxDraw.fillTextDraw();
ctxDraw.strokeTextDraw();
ctxDraw.measureDraw();
