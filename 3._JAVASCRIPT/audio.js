var myaudio, reproduce, bar, progress, maximum;
maximum = 630
function start() {
    myaudio = document.getElementById("myaudio");
    reproduce = document.getElementById("plays");
    bar = document.getElementById("bar");
    progress = document.getElementById("progress");

    reproduce.addEventListener("click", clickplay, false);

    bar.addEventListener("click", dragging, false);
}

function clickplay(){
    if((myaudio.paused==false) && (myaudio.ended==false)){
        myaudio.pause();
        reproduce.innerHTML="play";
    }
    else{
        myaudio.play();
        reproduce.innerHTML="Pause";
        
        myloop=setInterval(state, 101);
        
    }
}

function state(){
    if (myaudio.ended==false){
        var total = parseInt(myaudio.currentTime*maximum/myaudio.duration);
        progress.style.width=total+"px";
    }
}

function dragging(posicion){
    if ((myaudio.paused==false) && (myaudio.ended==false)){
        var mouseX = posicion.pageX-bar.offsetLeft;
        var newTime = mouseX*myaudio.duration/maximum;
        myaudio.currentTime=newTime;
        progress.style.width=mouseX+"px";
    }
}
window.addEventListener("load", start, false);