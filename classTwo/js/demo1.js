let myMethods = class  {
    constructor() {

    }
    //线型 Line styles

    lineWidth  () {
        let canvas = document.getElementById('myCanvas');
        if(canvas.getContext) {
            let ctx = canvas.getContext('2d');
            for (let i=0;i<10;i++) {
                ctx.lineWidth = 1+i;
                ctx.beginPath();
                ctx.moveTo(5*i+14.5,5);
                ctx.lineTo(5+i*14.5,140);
                ctx.stroke();
            }
        }
    }
}

export default myMethods