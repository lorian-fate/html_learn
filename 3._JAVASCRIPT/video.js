var myvideo, reproduce, bar, progress, maximum;
maximum = 630
function start() {
    myvideo = document.getElementById("myvideo");
    reproduce = document.getElementById("plays");
    bar = document.getElementById("bar");
    progress = document.getElementById("progress");

    reproduce.addEventListener("click", clickplay, false);

    bar.addEventListener("click", dragging, false);
}

function clickplay(){
    if((myvideo.paused==false) && (myvideo.ended==false)){
        myvideo.pause();
        reproduce.innerHTML="play";
    }
    else{
        myvideo.play();
        reproduce.innerHTML="Pause";
        
        myloop=setInterval(state, 101);
        
    }
}

function state(){
    if (myvideo.ended==false){
        var total = parseInt(myvideo.currentTime*maximum/myvideo.duration);
        progress.style.width=total+"px";
    }
}

function dragging(posicion){
    if ((myvideo.paused==false) && (myvideo.ended==false)){
        var mouseX = posicion.pageX-bar.offsetLeft;
        var newTime = mouseX*myvideo.duration/maximum;
        myvideo.currentTime=newTime;
        progress.style.width=mouseX+"px";
    }
}
window.addEventListener("load", start, false);