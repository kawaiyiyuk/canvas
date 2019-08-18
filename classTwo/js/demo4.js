let draw = class {
    constructor () {}

    lineWidth () {
        let canvas = document.getElementById('myCanvas');
        let ctx = canvas.getContext('2d');
        for (let i=0 ;i<10 ;i ++) {
            ctx.lineWidth = 1+ i;
            ctx.beginPath();
            ctx.moveTo(5+i*14,5);
            ctx.lineTo(5+i*14,140);
            ctx.stroke();
        }
    }

    lineCap() {
        let canvas = document.getElementById('myCanvas2');
        let ctx = canvas.getContext('2d');
        let lineCap = ['butt','round','square'];

        //创建路径
        ctx.strokeStyle = '#09f';
        ctx.beginPath();
        ctx.moveTo(10,10);
        ctx.lineTo(140,10);
        ctx.moveTo(10,140);
        ctx.lineTo(140,140);
        ctx.stroke();

        //画线条
        ctx.strokeStyle = 'black';
        for (let i=0 ;i<lineCap.length;i++) {
            ctx.lineWidth = 15;
            ctx.lineCap = lineCap[i];
            ctx.beginPath();
            ctx.moveTo(25+i*50,10);
            ctx.lineTo(25+i*50,140);
            ctx.stroke();
        }
    }

    lineJoin() {
        let canvas = document.getElementById('myCanvas3');
        let ctx = canvas.getContext('2d');
        let lineJoin  = ['round','bevel','miter'];
        ctx.lineWidth = 10;
        for (let i =0; i<lineJoin.length;i++) {
            ctx.lineJoin = lineJoin[i];
            ctx.beginPath();
            ctx.moveTo(-5,5+i*40);
            ctx.lineTo(35,45+i*40);
            ctx.lineTo(75,5+i*40);
            ctx.lineTo(115,45+i*40);
            ctx.lineTo(155,5+i*40);
            ctx.stroke();
        }

    }
    //虚线

    myDraw(canvas,ctx,offset) {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.setLineDash([4,2]);
        ctx.lineDashOffset = -offset;
        ctx.strokeRect(10,10,100,100)
    }

    LineDash() {
        let canvas = document.getElementById('myCanvas3');
        let ctx = canvas.getContext('2d');
        let  offset = 0;

        offset++;
        if (offset > 16) {
            offset = 0;
        }
        // this.myDraw(canvas,ctx,offset);
        // setTimeout(this.LineDash,20)
    }
    //渐变
    gradients() {
        let canvas = document.getElementById('myCanvas4');
        let ctx =  canvas.getContext('2d');
        //创建渐变
        let radgrad  = ctx.createRadialGradient(45,45,10,52,50,30);
        radgrad.addColorStop(0,'#A7D30C');
        radgrad.addColorStop(0.9,'#019F62');
        radgrad.addColorStop(1,'rgba(1,159,98,0)');
        let radgrad2 = ctx.createRadialGradient(105,105,20,112,120,50);
        radgrad2.addColorStop(0,'#FF5F98');
        radgrad2.addColorStop(0.75,'#FF0188');
        radgrad2.addColorStop(1,'rgba(255,1,136,0)');
        let radgrad3 = ctx.createRadialGradient(95,15,15,102,20,40);
        radgrad3.addColorStop(0,'#00C9FF');
        radgrad3.addColorStop(0.8,'#00B5E2');
        radgrad3.addColorStop(1,'rgba(0,201,255,0)')
        let radgrad4 = ctx.createRadialGradient(0,150,50,0,140,90);
        radgrad4.addColorStop(0,'#F4F201');
        radgrad4.addColorStop(0.8,'#E4C700');
        radgrad4.addColorStop(1,'rgba(228,199,0,0)');

        //绘制图案
        ctx.fillStyle = radgrad;
        ctx.fillRect(0,0,150,150);
        ctx.fillStyle =  radgrad2;
        ctx.fillRect(0,0,150,150);
        ctx.fillStyle = radgrad3;
        ctx.fillRect(0,0,150,150);
        ctx.fillStyle = radgrad4;
        ctx.fillRect(0,0,150,150)
    }
}

let ctxLineWidth = new draw();
ctxLineWidth.lineWidth();
ctxLineWidth.lineCap();
ctxLineWidth.lineJoin();
// ctxLineWidth.LineDash()
ctxLineWidth.gradients()