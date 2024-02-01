class App
{
    runApplication()
    {
        console.log("hello world!")
        //code hier yipeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        let canvas = document.getElementById("canvaaas");
        let g = canvas.getContext("2d");
        this.drawdehuus(0,0,g);
        this.drawDeBoom(g, 0, 0)
        let AmountofHuis = Math.floor(Math.random()*10) + 1;
        let AmountofBoom = Math.floor(Math.random()*88) + 1;
        for(let i = 0; i < AmountofBoom; i++){
            let RPBx = Math.floor(Math.random()* 1000);
            let RPBy = Math.floor(Math.random()*1000);
            this.drawDeBoom(g, RPBx, RPBy);
        }
        for(let i = 0; i < AmountofHuis; i++){
            let RPHx = Math.floor(Math.random()* 1000);
            let RPHy = Math.floor(Math.random()*1000);
            this.drawdehuus(RPHx,  RPHy, g);
        }
    }

    drawdehuus(x, y, g){
        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(30 + x,10 + y);
        g.lineTo(70 + x,20 + y);
        g.lineTo(60 + x,40 + y);
        g.lineTo(20 + x,30 + y);
        g.closePath();
        g.stroke();
        g.fill();
        //ahhhhhhhh
        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(60 + x,40 + y);
        g.lineTo(70 + x,20 + y);
        g.lineTo(80 + x,30 + y);
        g.closePath();
        g.stroke();
        g.fill();
        //huus
        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(20 + x,30 + y) ;
        g.lineTo(20 + x,50 + y);
        g.lineTo(60 + x,60 + y);
        g.lineTo(60 + x,40 + y);
        g.closePath();
        g.stroke();
        g.fill();
        //ties gaat dood
        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(60 + x,40 + y) ;
        g.lineTo(60 + x,60 + y);
        g.lineTo(80 + x,50 + y);
        g.lineTo(80 + x,30 + y);
        g.closePath();
        g.stroke();
        g.fill();
        //dis die raam a g
        g.beginPath();
        g.fillStyle = "blue"
        g.moveTo(35 + x, 35 + y);
        g.lineTo(35 + x, 45 + y);
        g.lineTo(45 + x, 48 + y);
        g.lineTo(45 + x, 38 + y);
        g.closePath();
        g.stroke();
        g.fill();
    }
    drawDeKerstBallen(g,x,y,Rcolor, Rx, Ry)
    {
        Rcolor = Math.floor(Math.random()*10);
        Rx = Math.floor(Math.random()*45);
        Ry = Math.floor(Math.random()*90);

        g.beginPath();
        if(Rcolor < 2){
            g.fillStyle ="gray"
        }else if(Rcolor > 2 && Rcolor < 6){
            g.fillstyle = "blue"
        }else if (Rcolor > 6){
            g.fillStyle="purple"
        }
        let realX = 175 + x + Rx;
        let realY = 90 + y + Ry;
        g.arc(realX,realY,5,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();
        console.log(Rcolor);
        console.log("x =",realX)
        console.log("y =",realY)
        
    }
    drawDeBoom(g,x,y)
    {
        g.beginPath();
        g.fillStyle = "brown";
        g.moveTo(185+x,200+y);
        g.lineTo(215+x,200+y);
        g.lineTo(215+x,250+y);
        g.lineTo(185+x,250+y);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "green";
        g.moveTo(200+x,50+y);
        g.lineTo(150+x,200+y);
        g.lineTo(250+x,200+y);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "yellow";
        g.moveTo(200+x,25+y);
        g.lineTo(190+x,50+y);
        g.lineTo(165+x,50+y);
        g.lineTo(185+x,65+y);
        g.lineTo(180+x,90+y);
        g.lineTo(200+x,75+y);
        g.lineTo(220+x,90+y);
        g.lineTo(215+x,65+y);
        g.lineTo(235+x,50+y);
        g.lineTo(210+x,50+y);
        g.closePath();
        g.stroke();
        g.fill();
        this.drawDeKerstBallen(g,x,y)
        this.drawDeKerstBallen(g,x,y)
        this.drawDeKerstBallen(g,x,y)
        this.drawDeKerstBallen(g,x,y)
        this.drawDeKerstBallen(g,x,y)
        this.drawDeKerstBallen(g,x,y)
        this.drawDeKerstBallen(g,x,y)
        this.drawDeKerstBallen(g,x,y)
    }
    }


let a = new App();
a.runApplication();
this.drawDeKerstBallen(g,x,y)