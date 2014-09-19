var posX, posY;

saveline = [];

var startTime;
var tempStartTime;

var sketch = function(s){
    s.setup = function(){
        s.createCanvas(400, 400);
      s.colorMode("hsb");
    }

    s.draw = function(){
        s.background(100);
        if(s.mouseX>0){
            posX =  s.mouseX;
        }
        if(s.mouseY>0){
            posY =  s.mouseY;
        }
        if(s.touchX>0){
            posX =  s.touchX;
        }
        if(s.touchY>0){
            posY =  s.touchY;
        }

        for(i=0; i<saveline.length-1; i++){
            s.line(saveline[i][0], saveline[i][1], saveline[i+1][0], saveline[i+1][1]);
            s.strokeWeight(5);
            s.stroke(Math.random()*255);
        }
    }


    s.mousePressed = function(){
        gesture();
    }

    s.touchMoved = function(){
        gesture();
    }

}

function gesture(){
  saveline.push([posX, posY, new Date().getTime()-startTime]);
 // $(".content").text(posX + ", " + posY);
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

window.onload = function(){
    containerNode = document.getElementById( 'canvas' );
    myp5 = new p5(sketch, containerNode);
}
