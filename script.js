var bestTime = 10; 
var start = new Date().getTime();
document.getElementById("rules").onclick = function () {
    alert("Try to click the shapes as soon as possible to increase your score");
}

function getRandomColor() {
    
    var x = Math.floor(Math.random()* 256);
    var y = Math.floor(Math.random()* 256);
    var z = Math.floor(Math.random()* 256);
    
    var randomColorMaker = "rgb(" + x + "," + y + "," + z + ")";

    document.getElementById("shape").style.backgroundColor = randomColorMaker;
}

function makeShapeAppear() {
    
    var top = Math.random()* 200;
    
    var left =Math.random()* 1150;
    
    var width = (Math.random()* 400) + 100;
    
    if(Math.random() > 0.5) {
        
        document.getElementById("shape").style.borderRadius = "50%";
    } else {
        
        document.getElementById("shape").style.borderRadius = "0";
    }
    
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = width + "px";
    
    document.getElementById("shape").style.backgroundColor = getRandomColor();
    
    document.getElementById("shape").style.display ="block";
    start = new Date().getTime();
}

function Timeout() {
    
    setTimeout(makeShapeAppear, Math.random()* 2000);
    
}
Timeout();


document.getElementById("shape").onclick = function() {
    
    
    document.getElementById("shape").style.display = "none";
    
    var end = new Date().getTime();
    
    var timeTaken = (end - start) / 1000;
    
    document.getElementById("timeTaken").innerHTML = timeTaken + " sec";
    
    if(timeTaken < bestTime) {
        bestTime = timeTaken;
        document.getElementById("best").innerHTML = bestTime + " sec";
        
        
    }    
    
    
    
    
    Timeout();
}
