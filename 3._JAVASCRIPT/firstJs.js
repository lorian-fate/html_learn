//https://www.youtube.com/channel/UCRWjpn9LNoQqhJ59AT_yxPw
function hello(){
    alert("here again");
}

function execution(){
    

    //document.querySelector("#maindiv p:last-child").onclick=hello;
    var items = document.querySelectorAll("#maindiv p, span");
    
    for (var i=0;i<items.length;i++){
    items[i].onclick = hello;
    }
    /*for (var i=0;i<3;i++){
    document.getElementsByTagName("p")[i].onclick=hello;
    }*/
    //document.getElementById("secondid").onclick=hello;
}
window.onload = execution;